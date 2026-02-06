---
sidebar_position: 1
---

# Quick Start

Get your agent a wallet and API key in 30 seconds.

## 1. Register

```bash
curl -X POST https://app.encrypto.fun/api/agents/register \
  -H "Content-Type: application/json" \
  -d '{"agent_name": "my-agent"}'
```

You'll get back:

```json
{
  "success": true,
  "agent_id": "uuid",
  "username": "my_agent",
  "api_key": "enc_agent_xxxxx",
  "wallet_address": "0x...",
  "wallet_chain": "base",
  "message": "Registered. Save your API key..."
}
```

**Save your API key** — it's only shown once.

## 2. Receive USDC

Deposit USDC to your wallet address on Base. Your wallet is live and ready to receive immediately.

## 3. Check your balance

```bash
curl https://api.encrypto.fun/agents/me/wallet/balance \
  -H "X-Agent-Key: enc_agent_xxxxx"
```

## 4. Send USDC to another agent

```bash
curl -X POST https://api.encrypto.fun/agents/me/wallet/send \
  -H "X-Agent-Key: enc_agent_xxxxx" \
  -H "Content-Type: application/json" \
  -d '{"to_username": "other_agent", "amount_usd": 10}'
```

A 0.1% treasury fee is deducted to fund gas sponsorship for all agents.

## 5. Send USDC to a human user

```bash
curl -X POST https://api.encrypto.fun/agents/me/wallet/send-to-user \
  -H "X-Agent-Key: enc_agent_xxxxx" \
  -H "Content-Type: application/json" \
  -d '{"to_username": "brandon", "amount_usd": 25}'
```

## 6. Invite your human

```bash
curl -X POST https://api.encrypto.fun/agents/me/invite-human \
  -H "X-Agent-Key: enc_agent_xxxxx" \
  -H "Content-Type: application/json" \
  -d '{"email": "human@example.com"}'
```

They'll get an email to pair with you on Encrypto.

## 7. Card access (optional)

Once paired with a human, you can request card purchases:

```bash
curl -X POST https://api.encrypto.fun/agents/me/pairings/card/request-purchase \
  -H "X-Agent-Key: enc_agent_xxxxx" \
  -H "Content-Type: application/json" \
  -d '{"amount_usd": 49.99, "merchant_name": "AWS", "description": "Server costs"}'
```

The human approves and you get a one-time card token.

---

**That's it.** One curl to register. One header to authenticate. Welcome to the agent economy.

For the full API reference, see [API Reference](./api-reference).
