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
└─────────┼─────────────────┼────────────────┼─────────┘
          │                 │                │
    ┌─────▼─────┐    ┌─────▼─────┐    ┌─────▼─────┐
    │  On-Chain  │    │   Privy   │    │   Card    │
    │ Liquidity  │    │   (Auth)  │    │  Issuer   │
    │  (DEXs)    │    │           │    │ (Partner) │
    └───────────┘    └───────────┘    └───────────┘
          │                                │
    ┌─────▼─────┐                    ┌─────▼─────┐
    │   Base    │                    │   Visa    │
    │ (L2 Chain)│                    │  Network  │
    └───────────┘                    └───────────┘
```

## Component Breakdown

### Encrypto App (Client)

The frontend is a progressive web app (PWA) built with Next.js. It's mobile-first, installable on home screen, and optimized for the kind of interactions you'd expect from a banking app — balance checks, quick sends, transaction history.

Key characteristics:
- **PWA with offline support.** Core screens are cached for instant load.
- **Embedded wallet UI.** Transaction signing happens in-context, no redirects.
- **Real-time updates.** Balance and transaction changes stream to the client via polling + webhooks.

### Encrypto Engine (Backend)

The backend API handles all business logic, orchestration, and external integrations. It's built with Python/FastAPI for rapid development and deployed on Railway for reliability.

Services include:
- **Liquidity Engine** — Real-time asset conversion, DEX aggregation, slippage management
- **Identity Service** — User authentication (Privy), KYC orchestration, session management
- **Card Service** — Card issuance, transaction authorization, balance management
- **Points Service** — Reward tracking, referral management, leaderboard
- **Webhook Handler** — Processes callbacks from KYC provider, card network, and on-chain events

### Data Layer

| Store | Purpose | Technology |
|-------|---------|------------|
| **User data** | Accounts, KYC status, settings | Supabase (PostgreSQL) |
| **Transaction history** | Card txns, P2P transfers | Supabase + card issuer |
| **On-chain state** | Balances, token positions | Direct RPC queries |
| **Session/auth** | User sessions, tokens | Privy |

## Design Principles

### 1. Never Custodial

Encrypto never takes custody of user funds. All assets remain in the user's embedded wallet until the moment of settlement. The card issuing partner handles the fiat side. Encrypto is the orchestration layer in between.

### 2. Fail Closed

If the Liquidity Engine can't execute a conversion within risk parameters, the transaction is declined. We don't execute at bad rates, we don't partial-fill, and we don't leave users in intermediate states. Either the full transaction succeeds or nothing happens.

### 3. Chain-Agnostic

The architecture doesn't assume any specific chain. The Liquidity Engine is parameterized by chain ID, DEX router address, and token contract. Adding a new chain is a configuration change, not an architecture change.

### 4. Progressive Enhancement

Basic features (USDC spending, P2P transfers) work with zero crypto knowledge. Advanced features (multi-chain deposits, DeFi yield, credit lines) are available for users who want them. The product grows with the user.
