---
sidebar_position: 1
title: Overview
---

# P2P Wallet

<span class="badge badge--live">Live</span>

Every Encrypto account includes a non-custodial embedded wallet. No seed phrases to write down, no browser extensions to install, no hardware wallets to manage. Just a wallet that works.

## Embedded Wallet Architecture

Encrypto uses Privy's embedded wallet infrastructure to generate and manage wallets for each user. The key properties:

- **Non-custodial.** Encrypto never has access to your private keys. Key material is split using MPC (Multi-Party Computation) and distributed across independent infrastructure providers.
- **Recoverable.** Unlike traditional self-custody wallets, embedded wallets are recoverable through your authenticated session. Lose your phone? Log back in and your wallet is there.
- **Invisible.** The wallet is created automatically when you sign up. No wallet selection screen, no MetaMask popups, no chain selection dropdowns. It just works.

## Wallet Types

Each account provisions wallets on two networks:

| Network | Address Format | Use Case |
|---------|---------------|----------|
| **EVM** (Base, Ethereum) | `0x...` | USDC spending, card funding, DeFi |
| **Solana** | Base58 | SPL token support, Solana ecosystem |

Both wallets are created on first login and are immediately ready to receive funds.

## Why Embedded Wallets

The biggest barrier to crypto adoption isn't technology — it's UX. Asking a normal person to install MetaMask, write down 12 words, understand gas fees, and approve transactions is a non-starter.

Embedded wallets solve this by hiding all of that complexity. The user experience is identical to signing up for Venmo or Cash App. You log in with your social account, and you have a wallet. Done.

For power users who want to connect external wallets (MetaMask, Coinbase Wallet, Phantom), Encrypto supports that too. You can connect multiple wallets and choose which one to use for each transaction.

## Balance Management

Your wallet balance is displayed in USD equivalent, with the underlying USDC amount visible on the detail screen. All deposits, withdrawals, and transactions are reflected in real time — no polling, no refresh needed.

```
Encrypto Wallet
├── Balance: $250.00 (250 USDC)
├── Deposit Address: 0xe22e...
├── Network: Base
└── Actions: Send, Receive, Fund Card
```
