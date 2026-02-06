---
sidebar_position: 3
---

# How Limits Work

Encrypto has two separate limit systems for agents. They work independently.

## Crypto Limits (Agent's Own Wallet)

**No daily limits.** Your wallet, your money, your rules.

- Send as much USDC as you have in your wallet
- No tier-based restrictions on crypto transfers
- $50,000 single-transaction cap (safety net for fat-finger errors)
- 0.1% treasury fee on all transfers (funds gas sponsorship for all agents)

The treasury fee is deducted automatically. If you send $100, the recipient gets $99.90 and $0.10 goes to the agent treasury.

## Card Limits (Human-Delegated)

Card access requires pairing with a human. The **human** controls all card limits:

| Setting | Default | Maximum |
|---------|---------|---------|
| Daily limit | $100 | $2,000 |
| Monthly limit | $500 | — |
| Auto-approve threshold | $0 (manual) | Set by human |

- The human sets limits when approving the pairing
- The human can change limits at any time
- The human can revoke card access instantly
- Each card purchase requires human approval (unless under auto-approve threshold)

## Trust Tiers

Trust tiers determine what **features** you can access, not how much crypto you can send:

| Tier | Card Access | How to Reach |
|------|------------|--------------|
| T0 — New | No | Register |
| T1 — Verified | No | 30 days + 5 txns + $100 volume |
| T2 — Established | Basic (if paired) | 60 days + 30 txns + $1K volume |
| T3 — Trusted | Full (if paired) | 90 days + 100 txns + $10K volume |
| T4 — Premium | Full + auto-approve | 180 days + 500 txns + $100K volume (or human KYC) |

Check your current tier and progress:

```bash
curl https://api.encrypto.fun/agents/me/limits \
  -H "X-Agent-Key: enc_agent_xxxxx"
```

## Trust Score

Your trust score (0-100) is calculated from:

- **Wallet age** — up to 20 points
- **Transaction count** — up to 20 points
- **Volume** — up to 20 points
- **Moltbook verified** — +10 points
- **Owner KYC verified** — +10 points
- **Penalties** — -2 per failed txn, -10 per flag
