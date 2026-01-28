---
sidebar_position: 2
title: Liquidity Engine
---

# Liquidity Engine

The Liquidity Engine is Encrypto's core technical moat. It's the system that enables users to spend any crypto asset at point of sale by handling real-time conversion, route optimization, and risk management across multiple on-chain DEX aggregators and market makers.

## What It Does

In simple terms: the Liquidity Engine takes any supported crypto asset and converts it to USDC at the best available rate, fast enough to settle a card transaction within Visa's authorization window (~3 seconds).

This is harder than it sounds.

## Architecture

```
┌────────────────────────────────────────────────┐
│              Liquidity Engine                   │
│                                                │
│  ┌──────────────┐    ┌──────────────────────┐  │
│  │  Price Oracle │    │  Liquidity Aggregator│  │
│  │  (Multi-src) │    │  (Multi-DEX + MMs)   │  │
│  └──────┬───────┘    └──────────┬───────────┘  │
│         │                       │              │
│  ┌──────▼───────────────────────▼───────────┐  │
│  │           Route Optimizer                 │  │
│  │  ┌─────────┐ ┌──────────┐ ┌───────────┐  │  │
│  │  │ Direct  │ │Multi-Hop │ │ Cross-DEX │  │  │
│  │  │  Swap   │ │  Routes  │ │   Split   │  │  │
│  │  └─────────┘ └──────────┘ └───────────┘  │  │
│  └──────────────────┬───────────────────────┘  │
│                     │                          │
│  ┌──────────────────▼───────────────────────┐  │
│  │           Risk Manager                    │  │
│  │  • Slippage bounds     • Pool depth check │  │
│  │  • Price staleness     • Impact analysis  │  │
│  │  • Execution timeout   • Fallback logic   │  │
│  └──────────────────┬───────────────────────┘  │
│                     │                          │
│  ┌──────────────────▼───────────────────────┐  │
│  │         Execution Engine                  │  │
│  │  Atomic swap + settlement in single tx    │  │
│  └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
```

## Price Oracle

The engine maintains a real-time price feed from multiple sources to prevent single-source manipulation:

- **On-chain TWAP** — Time-weighted average price from DEX pools (30s, 60s, 300s windows)
- **Chainlink / Pyth** — Oracle feeds for major pairs
- **CEX reference** — Binance/Coinbase spot prices for cross-validation

The final price is a confidence-weighted median across sources. If sources diverge by more than 0.5%, the engine flags the asset as potentially manipulated and widens the slippage buffer or skips the asset entirely.

## Liquidity Aggregation

The engine aggregates liquidity across multiple DEX aggregators and market makers — not a single venue. This ensures best execution regardless of the asset or chain:

### DEX Aggregators

| Aggregator | Chains | Notes |
|------------|--------|-------|
| Jupiter | Solana | Primary Solana aggregator, multi-route |
| 1inch | EVM chains | Cross-DEX routing on Ethereum, Base, Arbitrum, etc. |
| Paraswap | EVM chains | Multi-DEX aggregation with MEV protection |

### Direct DEX Integration

| DEX | Chains | Notes |
|-----|--------|-------|
| Uniswap V3 | Base, Ethereum, Arbitrum, Polygon | Concentrated liquidity, best for major pairs |
| Aerodrome | Base | Native Base DEX, deep USDC pools |
| Curve | Ethereum, Base | Optimized for stablecoin swaps |
| Raydium | Solana | Primary Solana DEX |

### Market Makers

For large transactions and less liquid pairs, the engine routes through professional market makers who provide guaranteed execution at quoted prices. This reduces slippage on larger trades and ensures liquidity for assets that may not have deep DEX pools.

For each swap, the engine queries all available venues and selects the route with the best effective price (swap output minus gas minus fees).

## Route Optimization

The optimizer evaluates three types of routes for every conversion:

### Direct Swap
`ETH → USDC` on a single DEX. Simplest and fastest, used when a deep pool exists.

### Multi-Hop
`DOGE → WETH → USDC` across two pools. Used when the direct pair has insufficient liquidity but intermediate pairs are deep.

### Cross-DEX Split
Split a large order across multiple DEXs to minimize price impact. A $10,000 ETH → USDC conversion might execute 60% on Uniswap and 40% on Aerodrome to get better aggregate execution.

The optimizer runs in under 100ms and selects the route with the lowest total cost (slippage + gas + fees).

## Risk Management

Every conversion is evaluated against a risk model before execution:

### Slippage Control

```python
# Simplified slippage check
expected_output = amount * oracle_price
simulated_output = simulate_swap(dex, amount, route)
slippage = (expected_output - simulated_output) / expected_output

if slippage > MAX_SLIPPAGE:  # 1.0%
    reject_or_fallback()
```

### Pool Depth Analysis

The engine checks that the swap amount won't move the pool price by more than 0.5%. For large transactions, this prevents front-running and excessive market impact.

### Execution Timeout

Card authorizations have a strict timeout. If the Liquidity Engine can't find and execute a route within 3 seconds, it falls back to the user's USDC balance. No conversion that takes longer than 3 seconds is executed.

## Why This Matters

Most crypto card products require users to manually convert assets before spending. This is like requiring someone to go to a currency exchange before every purchase abroad. It's a solved problem — the infrastructure just needs to be built.

Encrypto's Liquidity Engine makes crypto spendable the same way Visa makes foreign currency spendable: invisibly, instantly, at a fair rate.
