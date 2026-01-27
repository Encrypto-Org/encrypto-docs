---
sidebar_position: 1
title: Overview
---

# Yield

<span class="badge badge--soon">Coming Soon</span>

Idle assets should earn. Encrypto integrates curated DeFi yield strategies directly into the wallet experience, so users can earn yield on their holdings without leaving the app or managing DeFi positions manually.

## The Problem

DeFi yield opportunities exist — lending markets, liquidity provision, staking, restaking — but accessing them requires:

1. Knowing which protocols are safe (and which are not)
2. Understanding impermanent loss, liquidation risk, smart contract risk
3. Managing positions across multiple protocols and chains
4. Monitoring rates and rebalancing when yields shift

This is way too complex for 99% of people. And it's entirely unnecessary complexity — the underlying mechanics are simple. Money goes in, yield comes out.

## The Encrypto Approach

Encrypto abstracts DeFi yield into a simple interface:

```
Your Balance: $1,000 USDC
├── Spending Balance: $500 (available for card + P2P)
└── Earning Balance: $500 (earning 4.8% APY)
```

Users allocate a portion of their balance to "Earning" with one tap. Behind the scenes, the Yield Engine deploys those funds into vetted DeFi strategies. Yield accrues daily and is reflected in the user's balance.

No protocol names, no pool addresses, no claim buttons. Just a number that goes up.

## Risk Framework

Not all yield is created equal. Encrypto categorizes strategies by risk:

| Tier | Risk | Target APY | Strategy Type |
|------|------|-----------|---------------|
| **Conservative** | Low | 3-5% | Lending (Aave, Compound), USDC staking |
| **Balanced** | Medium | 5-10% | LP positions (stable pairs), restaking |
| **Growth** | Higher | 10%+ | Concentrated LP, leveraged strategies |

Users select their risk preference. The Yield Engine handles allocation, rebalancing, and risk monitoring automatically.

## Key Properties

- **Instant withdrawal.** Move funds from Earning back to Spending at any time. No lockups, no unbonding periods (for most strategies).
- **Auto-compound.** Yield is automatically reinvested unless the user opts out.
- **Transparent.** Users can see exactly which protocols their funds are deployed to and the current APY of each.
- **Audited.** Only protocols that have passed independent security audits are eligible for inclusion.
