---
sidebar_position: 1
title: Overview
---

# Security

Security is the foundation. A financial product that isn't secure isn't a product. Encrypto's security model is built on the principle of minimizing trust — in ourselves, in our partners, and in any single point of failure.

## Security Architecture

```
┌─────────────────────────────────────────┐
│              User Layer                  │
│  Social login → Session token → MPC key │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│           Wallet Layer                   │
│  MPC key shards → No single party has   │
│  full key → Non-custodial by design     │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│         Application Layer                │
│  API authentication → Rate limiting →   │
│  Input validation → Encrypted at rest   │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│        Infrastructure Layer              │
│  TLS everywhere → Isolated environments │
│  → Secrets management → Audit logging   │
└─────────────────────────────────────────┘
```

## Core Principles

### Non-Custodial by Default

Encrypto never holds user private keys. Wallets are created and managed through MPC (Multi-Party Computation), where key material is split across multiple independent parties. No single entity — including Encrypto — can access or move user funds without the user's authenticated session.

### Defense in Depth

Every layer of the stack has independent security controls:

- **Transport:** TLS 1.3 for all connections. HSTS enforced. Certificate pinning on mobile.
- **Authentication:** Privy-managed sessions with hardware-backed key storage on mobile devices.
- **Authorization:** Role-based access control. Admin operations require separate API keys injected server-side.
- **Data:** Encrypted at rest (AES-256). PII is stored separately from financial data.
- **Infrastructure:** Environment isolation. Secrets managed through platform-level vaults, never in code.

### Minimal Attack Surface

We deliberately minimize the surface area that could be compromised:

- No browser extensions (embedded wallet, not MetaMask-style)
- No seed phrases (MPC-based key management)
- No direct smart contract interaction by users (Liquidity Engine handles all on-chain execution)
- No API keys in client code (server-side proxy injects credentials)

## Incident Response

In the event of a security incident:

1. Affected systems are isolated within minutes
2. Users are notified through push notification and email
3. Card transactions are paused if card infrastructure is affected
4. Post-incident analysis is published publicly

We take security incidents seriously and believe in transparency. If something goes wrong, users will know about it quickly and understand what happened.
