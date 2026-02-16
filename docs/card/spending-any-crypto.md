---
sidebar_position: 3
title: Spend Any Crypto
---

# Spend Any Crypto

One of Encrypto's core technical advantages is the ability to spend virtually any crypto asset at point of sale — not just stablecoins. If the asset has sufficient on-chain liquidity, you can spend it.

## The Liquidity Problem

Most crypto cards require you to pre-convert your assets to a stablecoin or fiat before spending. That means if you're holding ETH and want to buy dinner, you need to:

1. Decide how much ETH to sell
2. Execute a swap (pay gas + slippage)
3. Wait for the stablecoin to land in your card's funding account
4. Then spend

This is slow, expensive, and creates unnecessary tax events. Every manual swap is a taxable disposition.

## How Encrypto Solves This

Encrypto's Liquidity Engine handles all of this at the point of sale, in real time.

When a card transaction comes in:

1. **Portfolio scan.** The engine checks what assets the user holds and their current balances.
2. **Liquidity analysis.** For each asset, the engine queries aggregated DEX liquidity to determine if the asset can be converted at an acceptable rate.
3. **Path optimization.** The engine selects the optimal swap route — direct pair, multi-hop, or cross-DEX — based on price impact, gas cost, and execution speed.
4. **Slippage protection.** If the best available execution exceeds the user's slippage tolerance (default 1%), the engine falls back to the user's USDC balance or rejects the transaction.
5. **Atomic settlement.** The swap and settlement happen atomically. Either both succeed or neither does. No partial fills, no stuck transactions.

```
User taps card ($50 purchase)
    │
    ▼
Liquidity Engine
    ├── User holds: 0.5 ETH, 200 USDC, 1000 MATIC
    ├── Best route: ETH → USDC via Uniswap V3 (0.02% impact)
    ├── Amount needed: 0.0145 ETH → 50.00 USDC
    ├── Slippage: 0.02% (within tolerance)
    └── Execute: swap + settle atomically
    │
    ▼
Card authorized. User sees: "$50.00 — Uber Eats"
```

The user doesn't see any of this. They just see a card transaction.

## Risk Parameters

The Liquidity Engine enforces strict risk parameters to protect users from poor execution:

| Parameter | Threshold | Rationale |
|-----------|-----------|-----------|
| **Max slippage** | 1.0% | Prevents excessive price impact on illiquid pairs |
| **Min pool TVL** | $50,000 | Ensures sufficient depth for execution |
| **Max execution time** | 3 seconds | Card authorization timeout constraint |
| **Price staleness** | < 15 seconds | Prevents stale oracle-based execution |
| **Max single-trade impact** | 0.5% of pool | Prevents market-moving transactions |

If any parameter is violated, the engine skips that asset and attempts the next-best funding source. If no asset meets the criteria, the transaction falls back to the user's USDC balance.

## Supported Assets

Any ERC-20 token with DEX liquidity on supported chains is eligible. This includes but isn't limited to:

- **Major L1s:** ETH, SOL, AVAX, MATIC
- **Stablecoins:** USDC, USDT, DAI
- **DeFi tokens:** UNI, AAVE, LINK, CRV
- **L2 tokens:** OP, ARB, BASE ecosystem tokens
- **Memecoins:** With sufficient liquidity (thresholds apply)

The list is dynamic — if an asset has $50K+ TVL on a supported DEX, it's spendable.

## Tax Considerations

Each asset conversion at point of sale may constitute a taxable event depending on your jurisdiction. Encrypto provides transaction-level reporting with cost basis data to simplify tax preparation. We recommend consulting a tax professional for your specific situation.
