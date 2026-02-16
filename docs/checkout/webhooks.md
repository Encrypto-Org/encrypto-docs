---
sidebar_position: 4
---

# Webhooks

Get notified in real-time when payments are detected, confirmed, or settled.

## Setup

Set your `webhook_url` when registering as a merchant, or update it later:

```bash
curl -X PATCH https://api.encrypto.fun/checkout/merchants/me \
  -H "X-Checkout-Secret-Key: sk_live_xxx" \
  -H "Content-Type: application/json" \
  -d '{"webhook_url": "https://mystore.com/api/webhooks/encrypto"}'
```

## Verifying Signatures

Every webhook includes an `X-Checkout-Signature` header. Always verify it to ensure the request came from Encrypto.

### Node.js

```javascript
const crypto = require('crypto');

function verifyWebhook(req) {
  const signature = req.headers['x-checkout-signature'];
  const body = JSON.stringify(req.body);
  const expected = crypto.createHmac('sha256', WEBHOOK_SECRET).update(body).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}
```

### Python

```python
import hmac, hashlib

def verify_webhook(body: bytes, signature: str, secret: str) -> bool:
    expected = hmac.new(secret.encode(), body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(signature, expected)
```

## Event Reference

### payment.detected

Payment seen on-chain but not yet confirmed. Don't fulfill the order yet.

### payment.confirming

Payment has partial confirmations. Almost there.

### payment.confirmed

Payment fully confirmed. **This is when you fulfill the order.**

### session.expired

The 30-minute window elapsed without payment. Clean up the pending order.

### settlement.completed

USDC has been settled to your wallet address. This confirms you've been paid out.

## Best Practices

1. **Always verify signatures** — Never trust unverified webhooks
2. **Return 200 quickly** — Process asynchronously if your logic is slow
3. **Handle duplicates** — Use `session_external_id` as an idempotency key
4. **Act on `payment.confirmed`** — Don't fulfill on `payment.detected` (it could fail)
5. **Log everything** — Store the raw webhook payload for debugging
