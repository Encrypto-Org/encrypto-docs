---
sidebar_position: 2
title: Custody Model
---

# Custody Model

Encrypto's custody model is designed around a simple principle: **security should be invisible.** Users shouldn't need to understand private keys, seed phrases, or key shards to use a financial product safely.

## Current Model: Managed Custody

Today, Encrypto operates with a **managed custody model** through Privy. This means:

- Privy generates and manages wallet key material on behalf of the user
- Users authenticate through social login (Google, Apple, X)
- Key material is secured by Privy's infrastructure using MPC (Multi-Party Computation)
- Users can recover their wallet by simply logging back in — no seed phrases needed

### Why Managed Custody

This is a deliberate product decision, not a technical limitation. Our target users — people in emerging markets, first-time crypto users, and anyone who just wants a financial account that works — need:

- **Password recovery.** If you forget your password, you can reset it. If you lose your phone, you log back in. This is table stakes for any consumer financial product.
- **No seed phrases.** Seed phrases are the #1 target for phishing attacks and the #1 cause of permanent fund loss in crypto. Removing them makes users safer, not less safe.
- **Familiar auth flow.** Sign in with Google or Apple. No MetaMask, no hardware wallets, no 24-word backups.

### What This Means in Practice

| Property | Managed Custody (Current) |
|----------|--------------------------|
| **Who manages key material** | Privy (on behalf of user) |
| **Can Encrypto access funds** | No — Privy manages keys independently |
| **User needs seed phrase** | No |
| **Recovery possible** | Yes — re-authenticate via social login |
| **Can user export keys** | Privy supports key export for users who want it |

## Roadmap: User-Owned Custody

We're building toward giving users the **option** of full self-custody through MPC key management:

```
┌──────────────────────────────────────────────────┐
│              Future: MPC Key Management           │
│                                                   │
│   Private Key → Split into 3 shards              │
│                                                   │
│   Shard 1: User device (secure enclave)          │
│   Shard 2: Privy infrastructure                  │
│   Shard 3: Encrypted backup (user-controlled)    │
│                                                   │
│   Signing requires 2 of 3 shards                 │
│   No single party can reconstruct the full key   │
└──────────────────────────────────────────────────┘
```

When MPC self-custody launches, users will be able to **opt in** to holding their own key shard. This gives them the security guarantees of self-custody without the operational burden of managing raw key material.

The key insight: **both models will coexist.** Users who want managed custody (the majority) keep the current experience. Users who want self-custody can upgrade. One size does not fit all in a global product.

## Transaction Signing

When a user initiates a transaction (card spend, P2P send, deposit):

1. The user authenticates via their session (social login + device binding)
2. Authenticated session triggers a signing request
3. Privy's infrastructure produces a valid signature using the managed key
4. Transaction is broadcast to the network

The user's session acts as the authentication layer. No password, no seed phrase, no manual signing prompt for standard operations.

## Recovery

If a user loses their device:

1. **Re-authenticate** via social login (Google, Apple, etc.)
2. **Session restored** — wallet access is immediately available
3. Previous device session is invalidated

The user never needs to interact with raw cryptographic material. Recovery is as simple as logging back in.

## Audit Trail

Every signing operation is logged:

- Timestamp
- Transaction type
- Chain and contract interaction
- Authentication method
- Device information

This creates a complete audit trail without ever exposing key material.
