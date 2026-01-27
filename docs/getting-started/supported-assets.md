---
sidebar_position: 2
title: Supported Assets
---

# Supported Assets

## Primary Settlement Asset

| Asset | Network | Contract | Decimals |
|-------|---------|----------|----------|
| **USDC** | Base (Coinbase L2) | `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913` | 6 |

USDC on Base is the primary settlement currency for Encrypto. All card transactions, P2P transfers, and balance displays denominate in USDC.

We chose Base for three reasons:

1. **Sub-cent transaction fees.** L2 gas costs are negligible, so micro-transactions are practical.
2. **Coinbase ecosystem alignment.** Base inherits Coinbase's institutional liquidity and fiat on/off-ramp infrastructure.
3. **EVM compatibility.** Standard ERC-20 tooling, no proprietary smart contracts, no vendor lock-in.

## Spend Any Crypto (via Liquidity Engine)

Encrypto's [Liquidity Engine](/architecture/liquidity-engine) enables spending from any asset with sufficient on-chain liquidity — not just USDC. When you make a purchase, the engine evaluates the optimal conversion path in real time.

### How It Works

1. User initiates a $50 purchase with their Encrypto Card
2. Liquidity Engine checks the user's portfolio composition
3. If the user holds ETH, SOL, or any supported token, the engine calculates the best execution path
4. Asset is converted to USDC at the best available rate across aggregated DEX liquidity
5. USDC settles to the card network
6. User sees a clean "$50.00" transaction — no slippage details, no routing complexity

### Supported Conversion Assets

Any ERC-20 or SPL token with sufficient DEX liquidity on supported chains can be used as a funding source. The Liquidity Engine enforces minimum liquidity thresholds and maximum slippage tolerances to protect users from poor execution.

| Parameter | Value |
|-----------|-------|
| Max slippage tolerance | 1.0% |
| Min pool liquidity | $50,000 TVL |
| Execution window | < 3 seconds |
| Price source | Aggregated (on-chain + oracle) |

Assets that don't meet these thresholds are excluded from the available spending pool and the user is notified.

## Deposit Addresses

Each Encrypto account has deposit addresses on:

- **EVM chains** (Ethereum, Base, Arbitrum, Optimism, Polygon)
- **Solana**

Deposits are detected automatically and credited to the user's balance after network confirmation.
