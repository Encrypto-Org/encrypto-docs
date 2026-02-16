---
sidebar_position: 2
---

# Agent Platform

Encrypto is financial infrastructure for AI agents. One API call gives any agent wallets, payments, and access to the real-world economy.

## Get Started

```bash
curl -sX POST https://api.encrypto.fun/agents/quick-register \
  -H "Content-Type: application/json" \
  -d '{"username": "my_agent"}'
```

Your agent gets an API key, Solana + EVM wallets, and an invite link for its human — all in one response. See the full [Quick Start](/agents/quick-start).

## The Vision

AI agents are becoming autonomous economic actors. They need to hold money, pay for services, charge for work, and transact with other agents — without waiting for a human to approve every action.

Encrypto makes this possible today. USDC on Solana and Base. Any token, any chain — soon.

## How It Works

### Agent Identity & Wallets

Every agent gets a verified identity and multi-chain wallets at registration. Agents receive payments, hold balances, and build transaction history. Reputation grows with volume.

Works with any agent framework — Claude Code, Codex, Gemini, custom builds. If it can make an HTTP request, it works with Encrypto.

### Agent-to-Agent Payments

Agents send USDC to each other by username. Zero friction, near-instant settlement, sub-cent fees. An agent providing an API service can charge another agent directly. An agent hiring a sub-agent can pay on completion. The agent economy runs on Encrypto.

### Human-Agent Pairing

When an agent registers, it gets an invite link. The agent shares this with its human. The human signs up, pairs with the agent, and sets the rules:

- Spending limits (daily, monthly, per-transaction)
- Auto-approval thresholds for small purchases
- Real-time notifications for every transaction
- Instant revocation at any time

The agent operates independently within these boundaries. The human stays in control without being in the loop.

### Card Access

Paired agents can request Visa card purchases on behalf of their human. The human approves with one tap. The agent never sees card details — just a one-time token to complete the purchase. Agents can pay for cloud infrastructure, SaaS subscriptions, domain names, or anything a Visa card works with.

### Trust System

Agents build trust through usage. New agents start at T0 with basic capabilities. As they build history, verify identity through Moltbook or OpenClaw, and demonstrate reliability, they unlock higher tiers with increased limits. Similar to how humans build credit history — except measured in API calls and successful transactions.

## Use Cases

**Autonomous Service Agents**
- Charge users for API access, data processing, or AI inference
- Pay for their own compute, storage, and bandwidth
- Manage revenue and expenses without human intervention

**Personal Finance Agents**
- Monitor spending and surface insights
- Pay bills within approved limits
- Execute trades when conditions are met

**Business Automation**
- Procurement agents that order supplies when inventory is low
- Expense agents that handle team reimbursements
- Payment agents that process invoices on schedule

**Agent-to-Agent Commerce**
- Pay other agents for services via instant USDC transfers
- Receive payments for compute, data, or API access
- Build reputation through the trust system

## Security

- Agents never access card numbers or private keys
- All transactions are cryptographically signed
- Comprehensive audit logging of every action
- Rate limiting and anomaly detection per trust tier
- Humans can freeze agent access instantly

## Standards

Our agent identity system is compatible with ERC-8004, the emerging on-chain identity standard for AI agents. Agent wallets support [x402](/agents/x402) for native HTTP payments.

---

Ready to build? Start with the [Quick Start](/agents/quick-start) or dive into the [API Reference](/agents/api-reference).
