---
slug: /
sidebar_position: 1
title: Introduction
---

# Encrypto

**The orchestration layer between traditional finance and DeFi.**

Centralized finance has the users, the trust, and the regulatory frameworks. DeFi has the liquidity, the speed, and the programmability. Until now, these two systems couldn't talk to each other without friction, fees, and failed transactions at every step.

Encrypto is the layer that connects them.

We're building infrastructure where banks, payment networks, exchanges, and DeFi protocols can interoperate — where a user can hold assets on any chain, spend them at any merchant, and move money to any bank account on the planet. The complexity of bridging, swapping, converting, and settling happens invisibly. Users just see money that works.

## The Problem

The financial system is fragmented. Getting value from point A to point B requires navigating a maze of intermediaries, each taking a cut and adding delay:

- **Crypto → fiat** requires off-ramping through an exchange, waiting for withdrawals, paying fees, then waiting again for bank settlement.
- **Cross-border payments** go through correspondent banks, SWIFT messaging, nostro/vostro accounts — taking 2-5 days and costing 3-7%.
- **Multi-chain assets** are siloed. Your ETH on Arbitrum can't pay for something that needs USDC on Solana without manual bridging.
- **DeFi liquidity** is disconnected from real-world payments. Billions in on-chain liquidity can't be used at point of sale.

Every step is manual. Every step has fees. Every step has friction.

## The Solution

Encrypto abstracts all of this into a single layer. We aggregate liquidity sources, payment rails, and banking infrastructure — then expose it through products that feel as simple as a bank account:

| What Users See | What Encrypto Does |
|----------------|-------------------|
| A card that works anywhere | Aggregates DEX liquidity, converts any asset to fiat, settles with Visa — in under 3 seconds |
| A single balance | Unifies assets across 9 blockchains into one view with automatic bridging |
| Send to any bank | Routes through optimal payment rail (ACH, PIX, SPEI, CVU) based on destination and speed |
| Instant deposits | Detects incoming funds on any chain, bridges to settlement layer automatically |

The manual steps that used to take hours — bridging, swapping, off-ramping, waiting for settlement — are abstracted away and made cheaper by doing this at scale.

## How It Works

### Aggregation at Every Layer

Encrypto doesn't build a single bridge, integrate a single DEX, or partner with a single bank. We aggregate at every layer of the stack:

**Liquidity Aggregation**
- 4 DEX/bridge aggregators queried in parallel for best execution
- Native support for 9 blockchains
- Aggregators extend routing to additional chains for cross-chain conversions
- Intent-based execution via Haiku for gasless, MEV-protected fills

**Payment Rail Aggregation**
- ACH for USD
- PIX for BRL (instant)
- SPEI for MXN (rolling out)
- CVU for ARS (rolling out)
- Stripe Onramp for fiat-to-USDC (card, ACH, Apple Pay)

**Banking Infrastructure**
- USD deposit accounts via Bridge
- Local LATAM payment methods via multi-provider strategy (Koywe, Orda, LocalPayment)
- KYC/KYB and compliance monitoring

This aggregation means we can always find the best route — the cheapest, fastest, or most reliable path from A to B.

### Jurisdictional Design

Crypto is global. Regulation is local. We work with the right partners in the right places:

- Card issuance through licensed partners in each jurisdiction
- Banking connectivity through regulated local rails
- Compliance handled at the platform level — same infrastructure used by the largest payment companies

This isn't about avoiding regulation. It's about building infrastructure that can operate everywhere by respecting how each market works.

## What We Build

| Product | Status | Description |
|---------|--------|-------------|
| **Encrypto Card** | <span class="badge badge--live">Live</span> | Visa debit funded by any crypto. Spend anywhere Visa is accepted. |
| **Multi-Chain Wallet** | <span class="badge badge--live">Live</span> | Unified balance across 9 blockchains. No seed phrases. |
| **Bank Connection** | <span class="badge badge--live">Live</span> | On/off-ramp via ACH (USD), PIX (BRL). SPEI and CVU rolling out. |
| **Yield** | <span class="badge badge--soon">Coming Soon</span> | Earn on your balance by default. Choose risk level for higher returns. |
| **Credit** | <span class="badge badge--soon">Coming Soon</span> | Borrow against your crypto. Collateralized and uncollateralized lines. |

## Technical Highlights

What's actually built and running today:

- **4-Provider Route Aggregation** — Haiku, deBridge, Li.Fi, and 1inch queried in parallel for best execution on every swap
- **Smart Contract Auto-Pull** — Deployed on Arbitrum + Base for automated wallet funding during card transactions
- **Dual Payment Detection** — Alchemy (EVM) + Helius (Solana) webhooks for real-time deposit detection across 9 chains
- **Multi-Provider LATAM Strategy** — Bridge (USD), Koywe (7 LATAM countries), Orda (Brazil PIX), LocalPayment (17 countries)
- **Stripe Onramp** — Card and Apple Pay fiat-to-USDC conversion
- **Agent Platform** — Full agent identity, wallets, and payment infrastructure for AI agents
- **Checkout SDK** — Embeddable crypto payment widget for any website

## Supported Networks

| Network | Type | Status |
|---------|------|--------|
| **Ethereum** | EVM | <span class="badge badge--live">Live</span> |
| **Base** | EVM (L2) | <span class="badge badge--live">Live</span> |
| **Arbitrum** | EVM (L2) | <span class="badge badge--live">Live</span> |
| **Optimism** | EVM (L2) | <span class="badge badge--live">Live</span> |
| **Polygon** | EVM | <span class="badge badge--live">Live</span> |
| **Avalanche** | EVM | <span class="badge badge--live">Live</span> |
| **Solana** | SPL | <span class="badge badge--live">Live</span> |
| **Stellar** | Native | <span class="badge badge--live">Live</span> |
| **Tron** | TRC-20 | <span class="badge badge--live">Live</span> |

Users don't think about chains. Deposits are detected automatically, assets bridge to the settlement layer, and the user sees a single balance.

## Why This Matters

The world's financial infrastructure was built for a different era. Cross-border payments shouldn't take 3 days. Converting between currencies shouldn't cost 3%. Moving money shouldn't require 5 different apps and manual reconciliation.

Crypto solved the money problem — permissionless, programmable, global value transfer. But it created a usability problem. You can hold a portfolio worth six figures and still can't buy coffee without going through an exchange, waiting for a withdrawal, and hoping your bank doesn't flag the transaction.

Encrypto solves the usability problem. We're building the infrastructure layer that connects crypto's liquidity and speed to the real world's merchants and banks. Users get access to the value instantly. The complexity stays invisible.

## Target Markets

We're focused on markets where this infrastructure solves real problems:

- **Latin America** — Currency instability, inflation, and limited access to USD accounts. Dollar-denominated finance isn't a luxury — it's a necessity. Argentina CVU infrastructure built, Brazil PIX live, Mexico and Colombia expanding.
- **United States** — Core market for card issuance and USD banking rails.
- **Europe** — Evaluating European market entry.

We expand selectively to markets where we can provide full coverage — card issuance, bank connectivity, and local currency support.

## Developer Tools

Building on top of Encrypto? Check out our developer-facing products:

- **[Agent Platform](/agent-platform)** — Financial infrastructure for AI agents. Register agents, give them wallets, and let them transact autonomously.
- **[Checkout SDK](/checkout/overview)** — Accept crypto payments on any website with a simple integration.

## Get Started

Encrypto is currently in invite-only early access.

1. Go to [app.encrypto.fun](https://app.encrypto.fun)
2. Sign in with X (Twitter)
3. Complete identity verification if approved
4. Your card and wallet are ready immediately

---

*Questions? Reach out on [X (@encryptodotfun)](https://x.com/encryptodotfun).*
