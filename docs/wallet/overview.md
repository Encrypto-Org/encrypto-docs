---
sidebar_position: 1
title: Overview
---

# Wallet

<span class="badge badge--live">Live</span>

Every Encrypto account includes an embedded wallet. No seed phrases to write down, no browser extensions to install, no hardware wallets to manage. Just a wallet that works.

## Embedded Wallet Architecture

Encrypto uses Privy's embedded wallet infrastructure to generate and manage wallets for each user. The key properties:

- **Managed by default.** Encrypto manages wallet infrastructure through Privy so users don't have to worry about key management, seed phrases, or private key security. This means users can recover their account through social login — just like any other app.
- **Recoverable.** Unlike traditional self-custody wallets, embedded wallets are recoverable through your authenticated session. Lose your phone? Log back in and your wallet is there.
- **Invisible.** The wallet is created automatically when you sign up. No wallet selection screen, no MetaMask popups, no chain selection dropdowns. It just works.

### Custody Model

Encrypto currently operates with a **managed custody model** through Privy. This is a deliberate choice for the initial product — most users in our target markets (emerging markets, first-time crypto users) need password recovery, account restoration, and a familiar auth flow. Asking non-technical users to manage private keys is a product failure, not a security feature.

We may explore additional custody options in the future as the product matures.

See [Custody Model](/security/custody) for the full technical breakdown.

## Wallet Types

Each account provisions wallets on multiple networks:

| Network | Address Format | Use Case |
|---------|---------------|----------|
| **EVM** (Base, Ethereum, Arbitrum, etc.) | `0x...` | USDC spending, card funding, DeFi |
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
├── Networks: 9 chains supported
└── Actions: Send, Receive, Fund Card, Move to Bank
```

Your wallet, card, and rewards are all unified under a single account. One balance, one interface, no fragmentation.
