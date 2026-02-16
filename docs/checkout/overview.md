---
sidebar_position: 1
---

# Encrypto Checkout

Accept crypto payments on any website. One API call creates a checkout session, customers pay with any wallet, and you get settled in USDC.

## How It Works

```
Your site → Create session (API) → Customer sees checkout page → Pays with any wallet → You get USDC
```

1. **Create a session** — Call our API with an amount and description
2. **Redirect or embed** — Send the customer to our hosted checkout page, or embed it in an iframe
3. **Customer pays** — They pick a chain (Base, Arbitrum, Solana, Ethereum, Polygon), scan a QR code, and send USDC
4. **We detect it** — On-chain monitoring confirms the payment in seconds
5. **You get notified** — Webhook fires to your server with payment confirmation

No wallet connections required. No browser extensions. Works with **any** crypto wallet.

## Supported Chains & Tokens

| Chain | Token | Confirmation Time |
|-------|-------|-------------------|
| Base | USDC | ~2 seconds |
| Arbitrum | USDC | ~2 seconds |
| Solana | USDC | ~1 second |
| Ethereum | USDC | ~3 minutes |
| Polygon | USDC | ~5 seconds |

## Integration Options

### Option 1: API Only (Any Language)

```bash
curl -X POST https://api.encrypto.fun/checkout/sessions \
  -H "X-Checkout-Secret-Key: sk_live_YOUR_KEY" \
  -H "Content-Type: application/json" \
  -d '{"amount": 49.99, "currency": "USD", "description": "Premium Plan"}'
```

Returns a `checkout_url` — redirect the customer there.

### Option 2: JavaScript SDK

```html
<script src="https://pay.encrypto.fun/sdk.js" data-encrypto-key="pk_live_YOUR_KEY"></script>
<encrypto-button amount="49.99" currency="USD">Pay with Crypto</encrypto-button>
```

### Option 3: React

```tsx
import { EncryptoCheckoutButton } from '@encrypto/react';

<EncryptoCheckoutButton
  publicKey="pk_live_YOUR_KEY"
  amount={49.99}
  onSuccess={(result) => console.log('Paid!', result)}
/>
```

## Fees

1% per transaction. That's it. No monthly fees, no setup fees, no hidden charges.

## Next Steps

- **[Quick Start](/checkout/quick-start)** — Accept your first payment in 5 minutes
- **[API Reference](/checkout/api-reference)** — Full endpoint documentation
- **[Webhooks](/checkout/webhooks)** — Get notified when payments arrive
