---
sidebar_position: 2
---

# Quick Start

Accept your first crypto payment in 5 minutes.

## 1. Register as a Merchant

```bash
curl -X POST https://api.encrypto.fun/checkout/merchants/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "My Store",
    "email": "you@example.com",
    "website": "https://mystore.com",
    "webhook_url": "https://mystore.com/api/webhooks/encrypto",
    "settlement_chain": "base"
  }'
```

Response:

```json
{
  "merchant": { "id": "...", "name": "My Store" },
  "keys": {
    "live_public_key": "pk_live_xxx",
    "live_secret_key": "sk_live_xxx",
    "test_public_key": "pk_test_xxx",
    "test_secret_key": "sk_test_xxx",
    "webhook_secret": "abc123"
  },
  "warning": "Store these keys securely. Secret keys will NOT be shown again."
}
```

Save your keys. You'll need `sk_live_xxx` for server-side API calls and `pk_live_xxx` for client-side integration.

## 2. Create a Checkout Session

From your server, create a session when the customer is ready to pay:

```bash
curl -X POST https://api.encrypto.fun/checkout/sessions \
  -H "X-Checkout-Secret-Key: sk_live_xxx" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 29.99,
    "currency": "USD",
    "description": "Premium T-Shirt",
    "success_url": "https://mystore.com/order/success",
    "cancel_url": "https://mystore.com/cart",
    "metadata": { "order_id": "ord_123" }
  }'
```

Response:

```json
{
  "session": {
    "external_id": "cs_live_abc123",
    "amount_usd": 29.99,
    "status": "pending",
    "expires_at": "2026-02-16T01:00:00Z"
  },
  "checkout_url": "https://pay.encrypto.fun/pay/cs_live_abc123",
  "embed_url": "https://pay.encrypto.fun/pay/cs_live_abc123/embed"
}
```

## 3. Redirect the Customer

Send the customer to the `checkout_url`:

```javascript
// Server-side: create session then redirect
const response = await fetch('https://api.encrypto.fun/checkout/sessions', {
  method: 'POST',
  headers: {
    'X-Checkout-Secret-Key': process.env.ENCRYPTO_SECRET_KEY,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    amount: cart.total,
    currency: 'USD',
    description: `Order #${order.id}`,
    success_url: `https://mystore.com/order/${order.id}/success`,
    cancel_url: 'https://mystore.com/cart',
    metadata: { order_id: order.id },
  }),
});

const { checkout_url } = await response.json();
// Redirect the customer
res.redirect(checkout_url);
```

The customer sees a clean checkout page where they:
1. Pick a chain (Base, Arbitrum, Solana, etc.)
2. Scan a QR code or copy the deposit address
3. Send USDC from any wallet

## 4. Handle the Webhook

When payment is confirmed, we send a webhook to your `webhook_url`:

```javascript
// Express.js example
app.post('/api/webhooks/encrypto', (req, res) => {
  // Verify signature
  const signature = req.headers['x-checkout-signature'];
  const expected = crypto
    .createHmac('sha256', process.env.ENCRYPTO_WEBHOOK_SECRET)
    .update(JSON.stringify(req.body))
    .digest('hex');

  if (signature !== expected) {
    return res.status(401).send('Invalid signature');
  }

  const { event, data } = req.body;

  if (event === 'payment.confirmed') {
    // Payment confirmed! Fulfill the order
    console.log(`Payment confirmed: $${data.amount_usd} for session ${data.session_external_id}`);
    // Mark order as paid, trigger fulfillment, send confirmation email, etc.
  }

  res.status(200).send('OK');
});
```

## 5. Check Session Status (Optional)

Poll the session status if you prefer polling over webhooks:

```bash
curl https://api.encrypto.fun/checkout/pay/cs_live_abc123/status
```

```json
{
  "status": "confirmed",
  "amount_paid": 29.99,
  "chain": "base",
  "token": "USDC"
}
```

## That's It

You're now accepting crypto payments. The customer never needs an Encrypto account, never connects a wallet extension, and can pay from any wallet on any device.
