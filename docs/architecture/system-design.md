---
sidebar_position: 1
title: System Design
---

# System Design

Encrypto's architecture is designed around one principle: **crypto in, fiat out, no friction.**

Every component exists to abstract complexity away from the end user while maintaining the security, speed, and cost advantages of on-chain settlement.

## High-Level Architecture

```
┌──────────────────────────────────────────────────────┐
│                    Encrypto App                       │
│              (Next.js / React Native)                │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐   │
│  │ Dashboard │  │  Wallet  │  │  Card Management │   │
│  └────┬─────┘  └────┬─────┘  └────────┬─────────┘   │
└───────┼──────────────┼─────────────────┼─────────────┘
        │              │                 │
┌───────▼──────────────▼─────────────────▼─────────────┐
│                  Encrypto Engine                      │
│                   (FastAPI)                           │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────┐ │
│  │  Liquidity   │  │   Identity   │  │    Card    │  │
│  │   Engine     │  │   Service    │  │  Service   │  │
│  └──────┬───────┘  └──────┬───────┘  └─────┬──────┘ │
│  ┌──────┴───────┐  ┌──────┴───────┐                  │
│  │   Banking    │  │   Points     │                  │
│  │   Service    │  │   Service    │                  │
│  └──────┬───────┘  └──────────────┘                  │
└─────────┼─────────────────┼────────────────┼─────────┘
          │                 │                │
    ┌─────▼─────┐    ┌─────▼─────┐    ┌─────▼─────┐
    │  On-Chain  │    │   Privy   │    │   Card    │
    │ Liquidity  │    │   (Auth)  │    │  Issuer   │
    │(DEXs + MMs)│    │           │    │ (Partner) │
    └─────┬─────┘    └───────────┘    └───────────┘
          │                                │
    ┌─────▼─────┐    ┌───────────┐   ┌─────▼─────┐
    │   Bridge     │    │  9 Chains │   │   Visa    │
    │  (Stripe)    │    │ Supported │   │  Network  │
    │ Orchestration│    └───────────┘   └───────────┘
    └──────────────┘
```

## Component Breakdown

### Encrypto App (Client)

The frontend is a progressive web app (PWA) built with Next.js. It's mobile-first, installable on home screen, and optimized for the kind of interactions you'd expect from a banking app — balance checks, quick sends, transaction history.

Key characteristics:
- **PWA with offline support.** Core screens are cached for instant load.
- **Embedded wallet UI.** Transaction signing happens in-context, no redirects.
- **Real-time updates.** Balance and transaction changes stream to the client via polling + webhooks.

### Encrypto Engine (Backend)

The backend API handles all business logic, orchestration, and external integrations. It's built with Python/FastAPI for rapid development and deployed on Railway.

Services include:
- **Liquidity Engine** — Real-time asset conversion across DEX aggregators and market makers
- **Identity Service** — User authentication (Privy), KYC orchestration, session management
- **Card Service** — Card issuance, transaction authorization, balance management
- **Banking Service** — Bank account linking (Plaid), on-ramp/off-ramp transfers (Bridge Orchestration API), virtual accounts, payment rail management
- **Points Service** — Reward tracking, referral management, leaderboard
- **Webhook Handler** — Processes callbacks from KYC provider, card network, Bridge, and on-chain events

### Infrastructure Partners

| Partner | Role | Integration |
|---------|------|-------------|
| **Bridge (Stripe)** | Stablecoin orchestration platform | Transfers, multi-chain, virtual accounts, compliance, card rails |
| **Privy** | Authentication + wallet infrastructure | Social login, embedded wallets, managed custody, session management |
| **Plaid** | Bank account linking | Account verification, balance checks |

### Bridge — Core Infrastructure

Bridge is Encrypto's primary infrastructure layer for money movement. Acquired by Stripe, Bridge is a full-stack stablecoin orchestration platform that handles the complexity of converting between fiat, stablecoins, and blockchains.

Encrypto uses Bridge for:

| Capability | What It Does |
|-----------|-------------|
| **Orchestration API** | Converts between any two dollar formats (USD, EUR, USDC, USDT, etc.) across fiat rails and blockchain networks |
| **Transfer API** | Moves money across payment rails — ACH, wire, SEPA, PIX, SPEI — with automatic deposit detection and lifecycle management |
| **Virtual Accounts** | Instant USD, EUR, and MXN deposit accounts with local bank details for each user |
| **Multi-Chain Settlement** | 9 blockchains supported natively — deposits detected automatically, conversions handled server-side |
| **Card Settlement** | Visa card transactions settle through Bridge's card infrastructure with zero FX markup and no cross-border fees |
| **KYC/KYB** | Identity verification, sanctions screening, and ongoing compliance monitoring — built into the platform |
| **Webhooks** | Real-time callbacks for transfer state changes, deposit confirmations, and compliance events |

#### Transfer Lifecycle

Every fiat transfer follows a deterministic state machine:

```
awaiting_funds → funds_received → payment_submitted → payment_processed
```

- **awaiting_funds** — Bridge is waiting for the user's deposit (crypto, wire, ACH push)
- **funds_received** — Deposit confirmed, Bridge is processing the conversion
- **payment_submitted** — Fiat payment sent to the destination bank
- **payment_processed** — Transfer complete, funds delivered

If the user's wallet or prefunded account is the source, `awaiting_funds` is skipped — transfers initiate instantly.

#### Why Bridge

- **Stripe-backed.** Bridge was acquired by Stripe, inheriting institutional-grade infrastructure, compliance expertise, and bank relationships.
- **Rails-agnostic.** One API for ACH, wire, SEPA, PIX, SPEI, and 9 blockchain networks. Adding a new rail or chain is configuration, not engineering.
- **Compliance built-in.** KYC, sanctions screening, and transaction monitoring are handled at the platform level — Encrypto doesn't need to build or maintain separate compliance infrastructure.
- **Settlement speed.** Cross-border transfers that take 2-3 days via traditional correspondent banking settle in under 30 minutes through Bridge's stablecoin rails.

### Data Layer

| Store | Purpose | Technology |
|-------|---------|------------|
| **User data** | Accounts, KYC status, settings | Supabase (PostgreSQL) |
| **Transaction history** | Card txns, P2P transfers, bank transfers | Supabase + card issuer + Bridge |
| **On-chain state** | Balances, token positions | Direct RPC queries |
| **Session/auth** | User sessions, tokens | Privy |

## Design Principles

### 1. Managed Custody (Now) → Self-Custody (Future)

Encrypto currently manages wallet infrastructure through Privy. Users authenticate via social login and their wallet is recoverable — no seed phrases. We're building toward optional MPC-based self-custody for advanced users. See [Custody Model](/security/custody) for details.

### 2. Fail Closed

If the Liquidity Engine can't execute a conversion within risk parameters, the transaction is declined. We don't execute at bad rates, we don't partial-fill, and we don't leave users in intermediate states. Either the full transaction succeeds or nothing happens.

### 3. Chain-Agnostic

The architecture doesn't assume any specific chain. Through Bridge, we support 9 blockchains today. Adding a new chain is a configuration change, not an architecture change.

### 4. Progressive Enhancement

Basic features (USDC spending, P2P transfers, bank connection) work with zero crypto knowledge. Advanced features (multi-chain deposits, DeFi yield, credit lines) are available for users who want them. The product grows with the user.
