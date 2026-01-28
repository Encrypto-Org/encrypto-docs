---
sidebar_position: 3
title: Multi-Chain Support
---

# Multi-Chain Support

Encrypto supports **9 blockchains** out of the box. Users don't need to think about which chain their assets are on — the wallet handles chain detection, bridging, and settlement automatically.

## Supported Networks

| Network | Type | Token Standard | Status |
|---------|------|---------------|--------|
| **Ethereum** | EVM (L1) | ERC-20 | <span class="badge badge--live">Live</span> |
| **Base** | EVM (L2) | ERC-20 | <span class="badge badge--live">Live</span> |
| **Arbitrum** | EVM (L2) | ERC-20 | <span class="badge badge--live">Live</span> |
| **Optimism** | EVM (L2) | ERC-20 | <span class="badge badge--live">Live</span> |
| **Polygon** | EVM | ERC-20 | <span class="badge badge--live">Live</span> |
| **Avalanche** | EVM (C-Chain) | ERC-20 | <span class="badge badge--live">Live</span> |
| **Solana** | SVM | SPL | <span class="badge badge--live">Live</span> |
| **Stellar** | Stellar | Native | <span class="badge badge--live">Live</span> |
| **Tron** | TVM | TRC-20 | <span class="badge badge--live">Live</span> |

Multi-chain support is powered by our infrastructure partner Bridge, which handles cross-chain transfers, settlement, and payment rail connectivity across all supported networks.

## Chain Abstraction

The goal is full chain abstraction — the user shouldn't need to know or care which chain their assets are on. Encrypto handles chain detection, bridging, and settlement automatically.

When you deposit USDC on Ethereum, USDT on Tron, or tokens on Solana, the system detects the chain, evaluates the optimal path, and moves the funds to the settlement layer. The user sees a single balance, not a fragmented set of chain-specific accounts.

### How Cross-Chain Deposits Work

```
User sends USDC on any supported chain
    │
    ▼
Encrypto detects deposit (event listener)
    │
    ▼
Bridge evaluates optimal transfer path
    │
    ▼
Funds arrive on settlement layer → balance updated
```

The user's balance updates automatically once the transfer completes. No manual claiming, no transaction signing required.

## Why 9 Chains

Different users and regions prefer different chains:

- **Ethereum / Base / Arbitrum / Optimism** — The EVM ecosystem. Most DeFi activity, institutional liquidity, and developer tooling.
- **Solana** — Fast, cheap transactions. Popular in retail crypto and emerging markets.
- **Tron** — Dominant for USDT transfers, especially in Asia and developing markets. Tron handles more stablecoin volume than any other chain.
- **Stellar** — Built for cross-border payments. Used by financial institutions and remittance corridors.
- **Polygon / Avalanche** — EVM-compatible chains with their own ecosystems and liquidity pools.

By supporting all of these, Encrypto meets users where they already are — regardless of which chain they prefer.

## External Wallet Support

For users who prefer their existing wallets, Encrypto supports connecting:

- **MetaMask** — Browser extension or mobile
- **Coinbase Wallet** — Browser extension or mobile
- **Phantom** — Solana ecosystem
- **WalletConnect** — Any compatible wallet

Connected external wallets can be used as funding sources for the Encrypto Card. The Liquidity Engine can pull from connected wallet balances (with user approval) to fund card transactions.
