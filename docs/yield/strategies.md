---
sidebar_position: 2
title: Strategies
---

# Yield Strategies

<span class="badge badge--soon">Coming Soon</span>

Encrypto's Yield Engine allocates user funds across a curated set of DeFi strategies. Each strategy is vetted for security, liquidity, and risk-adjusted return.

## Strategy Selection Criteria

Before a protocol or strategy is added to Encrypto's yield pool, it must meet the following requirements:

| Criteria | Requirement |
|----------|------------|
| **Security audit** | At least one independent audit from a top-tier firm (Trail of Bits, OpenZeppelin, Spearbit) |
| **TVL** | > $50M total value locked |
| **Track record** | > 6 months of operation without exploit |
| **Liquidity** | Withdrawals complete within 24 hours |
| **Smart contract** | Open source, verified on-chain |
| **Insurance** | Protocol-level coverage preferred (Nexus Mutual, etc.) |

## Strategy Types

### Lending Markets (Standard Tier)

Deposit USDC into established lending protocols and earn interest from borrowers. This is the default strategy for all accounts.

- **Risk:** Low
- **Expected APY:** 3-6%
- **Liquidity:** Instant withdrawal (subject to utilization)
- **Protocols:** Aave, Compound, Morpho

### Stablecoin LP (Enhanced Tier)

Provide liquidity to stable-stable pairs (USDC/USDT, USDC/DAI) on DEXs. Minimal impermanent loss due to price correlation.

- **Risk:** Low-Medium
- **Expected APY:** 4-8%
- **Liquidity:** Instant withdrawal
- **Protocols:** Curve, Aerodrome

### Restaking (Enhanced Tier)

Stake ETH or LSTs (stETH, rETH) through restaking protocols for additional yield on top of base staking rewards.

- **Risk:** Medium
- **Expected APY:** 6-12%
- **Liquidity:** Variable (depends on unbonding period)
- **Protocols:** EigenLayer ecosystem, Symbiotic

### Concentrated Liquidity (Aggressive Tier)

Active LP management in concentrated ranges on Uniswap V3-style pools. Higher returns but requires active rebalancing.

- **Risk:** Medium-High
- **Expected APY:** 10-25%
- **Liquidity:** Instant
- **Note:** Managed by Encrypto's automated position manager

## Rebalancing

The Yield Engine continuously monitors deployed positions and rebalances when:

- A strategy's APY drops below the threshold for its risk tier
- A protocol's TVL decreases significantly (potential risk signal)
- A higher-yield opportunity of equal or lower risk becomes available
- The user's risk preference changes

Rebalancing is gas-optimized and executed on L2 to minimize transaction costs.

## Yield Distribution

Yield accrues to the user's balance daily. Users can:

- **Auto-compound** — Reinvest yield into the same strategy (default)
- **Auto-transfer** — Move yield to a separate balance for card spending
- **Manual claim** — Claim accrued yield on demand
