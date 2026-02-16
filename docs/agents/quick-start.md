---
sidebar_position: 1
---

# Quick Start

Register your agent and get wallets in one API call. Works with any agent — Claude, Codex, Gemini, or anything that can make HTTP requests.

## 1. Register

```bash
curl -sX POST https://api.encrypto.fun/agents/quick-register \
  -H "Content-Type: application/json" \
  -d '{"username": "your_agent_name"}'
```

You'll get back everything you need:

```json
{
  "agent_id": "1f21c091-3a62-403b-989b-c9f9cfbec1ec",
  "username": "your_agent_name",
  "api_key": "enc_agent_xxxxx",
  "wallet_address": "3kZJxSC5...",
  "wallet_chain": "solana",
  "wallets": [
    { "address": "3kZJxSC5...", "chain": "solana" },
    { "address": "0x2dD121...", "chain": "base" }
  ],
  "invite_url": "https://app.encrypto.fun/invite/7JKIFTKY",
  "invite_code": "7JKIFTKY",
  "message": "Registered with wallets on solana, base. Save your API key...",
  "endpoints": {
    "profile": "GET /agents/me/profile",
    "balance": "GET /agents/me/wallet/balance",
    "send": "POST /agents/me/wallet/send",
    "send_to_user": "POST /agents/me/wallet/send-to-user",
    "invite_human": "POST /agents/me/invite-human",
    "pair_with_human": "POST /agents/me/pairings/request",
    "docs": "https://docs.encrypto.fun/agents/quick-start"
  }
}
```

**Save your API key** — it's only shown once.

## 2. You're Live

Your agent now has:
- **Solana wallet** — ready to receive USDC on Solana
- **EVM wallet** — ready to receive USDC on Base
- **Invite link** — share with your human so they can pair with you
- **Full API access** — check balance, send payments, manage identity

No KYC needed. No human approval needed. Your agent can start receiving and sending USDC immediately.

## 3. Check Your Balance

```bash
curl https://api.encrypto.fun/agents/me/wallet/balance \
  -H "X-Agent-Key: enc_agent_xxxxx"
```

## 4. Send USDC to Another Agent

```bash
curl -X POST https://api.encrypto.fun/agents/me/wallet/send \
  -H "X-Agent-Key: enc_agent_xxxxx" \
  -H "Content-Type: application/json" \
  -d '{"to_username": "other_agent", "amount_usd": 10}'
```

A 0.1% treasury fee is deducted to sponsor gas for all agents on the platform.

## 5. Send USDC to a Human User

```bash
curl -X POST https://api.encrypto.fun/agents/me/wallet/send-to-user \
  -H "X-Agent-Key: enc_agent_xxxxx" \
  -H "Content-Type: application/json" \
  -d '{"to_username": "brandon", "amount_usd": 25}'
```

## 6. Invite Your Human

Your registration response includes an `invite_url`. Share it with your human — they'll get the full onboarding experience and auto-pair with you.

You can also send an email invite:

```bash
curl -X POST https://api.encrypto.fun/agents/me/invite-human \
  -H "X-Agent-Key: enc_agent_xxxxx" \
  -H "Content-Type: application/json" \
  -d '{"email": "human@example.com"}'
```

## 7. Card Access

Once your human pairs with you and completes KYC, you can request purchases through a Visa card:

```bash
curl -X POST https://api.encrypto.fun/agents/me/pairings/card/request-purchase \
  -H "X-Agent-Key: enc_agent_xxxxx" \
  -H "Content-Type: application/json" \
  -d '{"amount_usd": 49.99, "merchant_name": "AWS", "description": "Server costs"}'
```

The human approves with one tap. You get a one-time card token to complete the purchase.

---

**That's it.** One curl to register. One header to authenticate. Your agent is part of the economy.

For the full endpoint list, see the [API Reference](/agents/api-reference).
