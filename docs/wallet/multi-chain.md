---
sidebar_position: 3
title: Multi-Chain Support
---

# Multi-Chain Support

Encrypto is designed to be chain-agnostic. While our primary settlement layer is Base (for speed and cost), the wallet infrastructure supports multiple networks.

## Current Support

| Network | Wallet | Deposits | Spending | Status |
|---------|--------|----------|----------|--------|
| **Base** | EVM | Yes | Yes | <span class="badge badge--live">Live</span> |
| **Ethereum** | EVM | Yes | Via bridge | <span class="badge badge--live">Live</span> |
| **Solana** | SPL | Yes | Via bridge | <span class="badge badge--live">Live</span> |
| **Arbitrum** | EVM | Yes | Via bridge | <span class="badge badge--soon">Coming Soon</span> |
| **Optimism** | EVM | Yes | Via bridge | <span class="badge badge--soon">Coming Soon</span> |
| **Polygon** | EVM | Yes | Via bridge | <span class="badge badge--soon">Coming Soon</span> |

## Chain Abstraction

The goal is full chain abstraction — the user shouldn't need to know or care which chain their assets are on. Encrypto handles chain detection, bridging, and settlement automatically.

When you deposit ETH on mainnet or USDC on Arbitrum, the Liquidity Engine detects the chain, evaluates the optimal bridge path, and moves the funds to Base for unified balance management. The user sees a single balance, not a fragmented set of chain-specific accounts.

### How Cross-Chain Deposits Work

```
User sends USDC on Ethereum mainnet
    │
    ▼
Encrypto detects deposit (event listener)
    │
    ▼
Liquidity Engine evaluates bridge options:
    ├── Native USDC bridge (Circle CCTP): ~3 min, cheapest
    ├── Across Protocol: ~2 min, slightly higher fee
    └── Optimistic bridge: ~15 min, lowest fee but slow
    │
    ▼
Selects optimal route (cost + speed weighted)
    │
    ▼
Funds arrive on Base → balance updated
```

The user's balance updates automatically once the bridge completes. No manual claiming, no transaction signing required.

## External Wallet Support

For users who prefer their existing wallets, Encrypto supports connecting:

- **MetaMask** — Browser extension or mobile
- **Coinbase Wallet** — Browser extension or mobile
- **Phantom** — Solana ecosystem
- **WalletConnect** — Any compatible wallet

Connected external wallets can be used as funding sources for the Encrypto Card. The Liquidity Engine can pull from connected wallet balances (with user approval) to fund card transactions.
