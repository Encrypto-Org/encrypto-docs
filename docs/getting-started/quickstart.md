---
sidebar_position: 1
title: Quickstart
---

# Quickstart

Getting started with Encrypto takes about two minutes.

## 1. Create Your Account

Navigate to [app.encrypto.fun](https://app.encrypto.fun) and authenticate with your X (Twitter) account. We use social login to simplify onboarding — no seed phrases, no browser extensions, no wallet setup.

Behind the scenes, Encrypto provisions an embedded wallet for you automatically through Privy's wallet infrastructure. Your wallet is recoverable through your social login — just like any other app.

## 2. Verify Your Identity

To comply with financial regulations and activate your Encrypto Card, you'll need to complete a brief identity verification (KYC). This typically takes under a minute.

Once approved, your account is fully activated.

## 3. Fund Your Account

There are multiple ways to add funds to your Encrypto wallet:

- **From your bank account** — Link your bank and transfer USD, which converts to USDC automatically (ACH, wire, SEPA, PIX, SPEI)
- **From another wallet** — Send USDC or other supported tokens to your deposit address on any of our 9 supported chains. Deposits are detected automatically.
- **From another Encrypto user** — Peer-to-peer transfers are instant and free

Your balance is reflected immediately for on-chain deposits. Bank transfers depend on the payment rail (ACH: 1-3 days, wire: same day, PIX: instant).

## 4. Start Spending

Once your balance is funded, your Encrypto Card is active. Add it to Apple Pay or Google Pay, or use the virtual card details for online purchases. It works anywhere Visa is accepted.

Every transaction settles from your USDC balance in real time. No pre-funding, no float, no delayed settlement.

## 5. Connect Your Bank (Optional)

Link a bank account to move money between crypto and traditional banking:

- **On-ramp:** Transfer USD from your bank to your Encrypto wallet
- **Off-ramp:** Send USDC from your wallet to any bank account via ACH, wire, SEPA, PIX, or SPEI

## Account Structure

```
Encrypto Account
├── Embedded Wallet (managed by Privy)
│   ├── USDC balance
│   └── Deposit addresses (9 chains)
├── Encrypto Card (Visa)
│   └── Linked to USDC balance
├── Bank Connection (optional)
│   ├── On-ramp (bank → wallet)
│   └── Off-ramp (wallet → bank)
├── Yield (coming soon)
│   └── Earn on your balance by default
└── Points & Rewards
    └── Earn points on every action
```

Your wallet, card, bank connection, and rewards are all unified under a single account. One balance, one interface, no fragmentation.
