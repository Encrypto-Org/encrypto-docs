---
sidebar_position: 4
title: Wallet Pull
---

# Wallet Pull — Top Up With Anything

<span class="badge badge--live">Backend Live</span> <span class="badge badge--soon">Frontend Coming Soon</span>

Wallet Pull is the infrastructure that enables "spend any crypto" — the ability to use any token on any supported chain to fund card transactions, without the user pre-converting anything.

## How It Works

When a card transaction requires funding beyond the user's USDC balance, the Wallet Pull system automatically:

1. **Identifies available assets** across the user's connected wallets
2. **Queries 4 aggregator providers in parallel** (Haiku, deBridge, Li.Fi, 1inch) for the best conversion route
3. **Executes the conversion** via smart contracts deployed on Arbitrum and Base
4. **Settles USDC** to the card funding balance

The entire process happens in the background. The user just sees their card transaction approved.

## 4-Provider Route Aggregation

The route aggregator queries four independent providers simultaneously and selects the best quote:

| Provider | Type | Coverage |
|----------|------|----------|
| **Haiku** | Intent-based solver network | Cross-chain, gasless, MEV-protected |
| **deBridge** | Cross-chain bridge aggregator | EVM ↔ Solana, all major chains |
| **Li.Fi** | Multi-bridge aggregator | Cross-chain swaps and bridges |
| **1inch** | DEX aggregator | EVM-chain DEX routing |

By querying all four in parallel, the system ensures best execution regardless of the asset, chain, or transaction size. If one provider is slow or returns a poor quote, the others provide alternatives.

## Smart Contracts

Auto-pull smart contracts are deployed on **Arbitrum** and **Base**. These contracts:

- Execute approved swaps atomically (either the full swap succeeds or nothing happens)
- Handle token approvals and settlement in a single transaction
- Are restricted to the user's pre-approved spending parameters

## Why This Architecture

Most crypto card products require users to manually convert assets to a stablecoin before spending. This creates friction, tax events, and poor UX.

Wallet Pull eliminates this by moving the conversion to the point of sale. The user holds whatever assets they want, on whatever chain they prefer. When they spend, the system figures out the best conversion path automatically.

## Current Status

- **Backend infrastructure**: Complete — route aggregation, smart contracts, and execution engine are built and tested
- **Smart contracts**: Deployed on Arbitrum and Base
- **Frontend UI**: In development — the user interface for managing connected wallets and viewing conversion details is being built

The backend can execute wallet pulls today. The frontend experience for users to configure and monitor their connected wallets is coming soon.
