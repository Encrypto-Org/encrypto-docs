---
sidebar_position: 3
---

# API Reference

Base URL: `https://api.encrypto.fun`

All merchant endpoints require the `X-Checkout-Secret-Key` header with your secret key (`sk_live_xxx`).

---

## Merchants

### Register Merchant

```
POST /checkout/merchants/register
```

No authentication required.

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Business name shown on checkout page |
| `email` | string | Yes | Contact email |
| `website` | string | No | Your website URL |
| `webhook_url` | string | No | URL for payment notifications |
| `success_url` | string | No | Default redirect after payment |
| `cancel_url` | string | No | Default redirect on cancel |
| `settlement_type` | string | No | `crypto_usdc` (default) or `fiat_pix` |
| `settlement_address` | string | No | Wallet address for USDC settlement |
| `settlement_chain` | string | No | Chain for settlement: `base`, `arbitrum`, `solana`, `ethereum`, `polygon` |
| `accepted_tokens` | array | No | Tokens to accept (default: USDC on all chains) |
| `brand_color` | string | No | Hex color for checkout page (`#000000`) |

**Response:** Returns merchant profile + API keys. Keys are shown **once** — save them.

### Get Merchant Profile

```
GET /checkout/merchants/me
```

### Update Merchant

```
PATCH /checkout/merchants/me
```

Same fields as register (all optional).

### Roll API Keys

```
POST /checkout/merchants/me/keys/roll
```

Generates new keys. Old keys stop working immediately.

---

## Sessions

### Create Session

```
POST /checkout/sessions
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `amount` | number | Yes | Amount in USD (e.g., `29.99`) |
| `currency` | string | Yes | Currency code (`USD`) |
| `description` | string | No | Shown on checkout page |
| `success_url` | string | No | Redirect after payment (overrides merchant default) |
| `cancel_url` | string | No | Redirect on cancel |
| `metadata` | object | No | Your custom data (returned in webhooks) |
| `idempotency_key` | string | No | Prevent duplicate sessions |

**Response:**

```json
{
  "session": {
    "id": "uuid",
    "external_id": "cs_live_xxx",
    "amount_usd": 29.99,
    "status": "pending",
    "expires_at": "2026-02-16T01:00:00Z",
    "metadata": {}
  },
  "checkout_url": "https://pay.encrypto.fun/pay/cs_live_xxx",
  "embed_url": "https://pay.encrypto.fun/pay/cs_live_xxx/embed"
}
```

### Get Session

```
GET /checkout/sessions/{external_id}
```

### List Sessions

```
GET /checkout/sessions?limit=20&offset=0
```

### Cancel Session

```
POST /checkout/sessions/{external_id}/cancel
```

---

## Session Status Flow

```
pending → detecting → confirming → confirmed
                                 ↘ expired
           ↘ cancelled
```

| Status | Description |
|--------|-------------|
| `pending` | Session created, waiting for customer to select chain |
| `detecting` | Customer selected chain, deposit address generated, waiting for payment |
| `confirming` | Payment detected on-chain, waiting for confirmations |
| `confirmed` | Payment confirmed, session complete |
| `expired` | 30 minutes elapsed without payment |
| `cancelled` | Cancelled via API |

---

## Public Endpoints (Checkout Page)

These use the `X-Checkout-Public-Key` header (`pk_live_xxx`) or no auth.

### Get Session for Checkout

```
GET /checkout/pay/{external_id}
```

Returns session info for rendering the checkout page.

### Select Payment Method

```
POST /checkout/pay/{external_id}/select
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `chain` | string | Yes | `base`, `arbitrum`, `solana`, `ethereum`, `polygon` |
| `token` | string | Yes | `USDC` |

**Response:** Returns deposit address and QR code data.

### Check Payment Status

```
GET /checkout/pay/{external_id}/status
```

Poll this every 3 seconds to update the checkout UI.

---

## Webhooks

We send POST requests to your `webhook_url` with JSON body.

### Headers

| Header | Description |
|--------|-------------|
| `X-Checkout-Signature` | HMAC-SHA256 hex digest of the request body |
| `Content-Type` | `application/json` |

### Verify Signature

```javascript
const crypto = require('crypto');

function verify(body, signature, secret) {
  const expected = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(body))
    .digest('hex');
  return signature === expected;
}
```

### Events

| Event | Description |
|-------|-------------|
| `payment.detected` | Payment seen on-chain (not yet confirmed) |
| `payment.confirming` | Payment has some confirmations |
| `payment.confirmed` | Payment fully confirmed |
| `payment.failed` | Payment failed or insufficient |
| `session.expired` | Session expired without payment |
| `settlement.completed` | USDC settled to your wallet |

### Payload

```json
{
  "event": "payment.confirmed",
  "data": {
    "session_external_id": "cs_live_xxx",
    "payment_external_id": "pi_live_xxx",
    "amount_usd": 29.99,
    "amount_token": 29.99,
    "token": "USDC",
    "chain": "base",
    "tx_hash": "0x...",
    "from_address": "0x...",
    "metadata": { "order_id": "ord_123" }
  },
  "timestamp": "2026-02-16T00:30:00Z"
}
```

### Retry Policy

Failed webhook deliveries are retried with exponential backoff:

| Attempt | Delay |
|---------|-------|
| 1 | 30 seconds |
| 2 | 2 minutes |
| 3 | 10 minutes |
| 4 | 30 minutes |
| 5 | 2 hours |

After 5 failed attempts, the webhook is marked as failed. Check delivery status in the dashboard.

---

## Error Codes

| Code | Description |
|------|-------------|
| 401 | Invalid API key |
| 403 | Merchant deactivated |
| 404 | Session not found |
| 409 | Session already has a payment / duplicate idempotency key |
| 422 | Invalid request body |
| 500 | Server error |

All errors return:

```json
{
  "detail": "Human-readable error message"
}
```
