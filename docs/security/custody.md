---
sidebar_position: 2
title: Custody Model
---

# Custody Model

Encrypto is non-custodial. We never hold, control, or have access to user private keys. This is a deliberate architectural decision, not a marketing claim.

## How It Works

### MPC Key Management

User wallets are created through **Multi-Party Computation (MPC)** via Privy. The private key is generated and immediately split into multiple shards, distributed across independent parties:

```
┌──────────────────────────────────────────────────┐
│                Key Generation                     │
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

### What This Means

| Property | Traditional Custodial | Encrypto (MPC) |
|----------|----------------------|-----------------|
| **Who holds the key** | The platform | No single party |
| **Can platform move funds** | Yes | No |
| **Single point of failure** | Yes (platform) | No |
| **User needs seed phrase** | No | No |
| **Recovery possible** | Platform resets | Shard recovery |
| **Regulatory classification** | Custodial | Non-custodial |

### Why Not Seed Phrases

Seed phrases are the standard self-custody mechanism, but they fail most users:

- **Loss risk:** Users lose seed phrases. Funds are gone forever.
- **Phishing risk:** Seed phrases are the #1 target for phishing attacks.
- **UX friction:** Writing down 12–24 words and storing them securely is not a mainstream UX.

MPC gives users the security guarantees of self-custody without the operational burden of managing raw key material.

## Transaction Signing

When a user initiates a transaction (card spend, P2P send, deposit):

1. The user authenticates via their session (social login + device binding)
2. Authenticated session triggers a signing request
3. User's device shard and Privy's shard collaborate to produce a valid signature
4. The full private key is **never reconstructed** — signing happens via MPC protocol
5. Transaction is broadcast to the network

The user's session acts as the authentication layer. No password, no seed phrase, no manual signing prompt for standard operations.

## Recovery

If a user loses their device:

1. **Re-authenticate** via social login (Google, Apple, etc.)
2. **Device re-enrollment** — new device shard is generated
3. **Backup shard** is used to restore wallet access
4. Previous device shard is invalidated

The user never needs to interact with raw cryptographic material. Recovery is as simple as logging back in.

## What Encrypto Cannot Do

To be explicit about what our architecture prevents:

- **We cannot access user funds.** We don't hold sufficient key material.
- **We cannot freeze individual wallets.** On-chain assets are controlled by the user's MPC key.
- **We cannot reverse on-chain transactions.** Blockchain finality is absolute.
- **We cannot recover funds if all shards are lost.** This is the tradeoff of non-custodial design.

## Audit Trail

Every signing operation is logged:

- Timestamp
- Transaction type
- Chain and contract interaction
- Shard participants (which shards were used)
- Authentication method

This creates a complete audit trail without ever exposing key material.
