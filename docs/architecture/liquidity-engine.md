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
│  │   Pricing    │    │  4-Provider Router   │  │
│  │  (via aggs)  │    │ Haiku/deBridge/Li.Fi │  │
│  │              │    │      /1inch          │  │
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

## Pricing

The engine derives pricing from the aggregator quotes themselves. By querying 4 independent aggregators in parallel, the multi-provider approach provides natural cross-validation — if one provider returns a significantly different price, it's excluded. The best effective price (output minus gas minus fees) is selected for execution.

## Liquidity Aggregation

The engine aggregates liquidity across multiple DEX aggregators, cross-chain bridges, intent networks, and market makers — not a single venue. This "aggregator of aggregators" approach ensures best execution regardless of the asset, chain, or transaction size.

### DEX Aggregators

The engine integrates with multiple DEX aggregators across ecosystems:

| Ecosystem | Coverage | Notes |
|-----------|----------|-------|
| Solana | Full DEX coverage | Multi-route aggregation across all major Solana DEXs |
| EVM chains | Ethereum, Base, Arbitrum, Optimism, Polygon, etc. | Cross-DEX routing with MEV protection |

### Cross-Chain Bridges

The engine routes through multiple bridge networks for cross-chain transfers:

| Capability | Coverage |
|------------|----------|
| EVM ↔ Solana | Native asset transfers, fast finality |
| Cross-EVM | All major L1s and L2s |
| Non-EVM ecosystems | Cosmos, Bitcoin, Sui, and more |
| Total chain coverage | 9 native chains + extended reach via aggregated bridge infrastructure |

### Intent-Based Execution

The engine supports intent-based execution via Haiku — where solvers compete to fill orders rather than routing through fixed DEX paths.

| Capability | What It Does |
|------------|-------------|
| Declarative trading | Define target state, Haiku handles execution |
| Gasless execution | Users don't pay gas on every hop |
| MEV protection | Solvers absorb MEV risk |
| Cross-chain intents | "I need X on Chain Y" — solvers figure out the path |

Intent-based execution via Haiku often results in better prices than fixed routing, especially for complex multi-hop or cross-chain conversions.

### Combined Coverage

By aggregating 4 providers, the Liquidity Engine has native support for **9 blockchains** with aggregator-extended reach to additional chains for cross-chain conversions. This means:

- Best execution across the broadest possible liquidity
- Redundancy — if one route fails, alternatives exist
- Future-proof — new chains added automatically as aggregator coverage grows

### DEX Coverage (via Aggregators)

Encrypto does not maintain direct DEX integrations — by design. The aggregators route through the best DEX for each trade automatically, including:

- **Uniswap V3** — Concentrated liquidity on EVM chains
- **Aerodrome** — Native Base DEX with deep USDC pools
- **Curve** — Optimized for stablecoin swaps
- **Raydium** — Primary Solana DEX

This approach means Encrypto automatically benefits from new DEX integrations added by the aggregator providers without any code changes.

For each swap, the engine queries all 4 aggregator APIs in parallel and selects the route with the best effective price (swap output minus gas minus fees).

## Route Optimization

The optimizer evaluates three types of routes for every conversion:

### Direct Swap
`ETH → USDC` on a single DEX. Simplest and fastest, used when a deep pool exists.

### Multi-Hop
`DOGE → WETH → USDC` across two pools. Used when the direct pair has insufficient liquidity but intermediate pairs are deep.

### Cross-DEX Split
Split a large order across multiple DEXs to minimize price impact. A $10,000 ETH → USDC conversion might execute 60% on Uniswap and 40% on Aerodrome to get better aggregate execution.

The optimizer queries all four aggregator APIs in parallel and selects the best quote, typically completing in under 2 seconds.

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
