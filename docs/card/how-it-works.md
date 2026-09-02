---
sidebar_position: 2
title: How It Works
---

# How the Card Works

Every card transaction follows a deterministic settlement path. There's no ambiguity about where funds come from or how they're processed.

## Transaction Lifecycle

### 1. Authorization

When you tap your card (or enter details online), Visa sends an authorization request to our card issuing partner. This is a standard Visa auth — the merchant doesn't know or care that crypto is involved.

### 2. Balance Check

Our system receives the authorization and checks your on-chain USDC balance. If sufficient funds are available, the authorization is approved. If not, it's declined. This happens in under 200ms.

### 3. Hold

The transaction amount is placed on hold against your balance. This prevents double-spending — you can't use the same funds for two simultaneous purchases.

### 4. Settlement

When the merchant settles the transaction (typically same day), the held USDC is debited from your account and converted to fiat for Visa settlement. The merchant receives USD through standard Visa rails.

### 5. Confirmation

You receive a push notification with the transaction details. Your balance updates immediately.

## Architecture

```
┌─────────┐     ┌──────────┐     ┌──────────────┐     ┌─────────┐
│  Merchant│────▶│   Visa   │────▶│  Card Issuer │────▶│Encrypto │
│          │     │ Network  │     │   (Partner)  │     │  Engine │
└─────────┘     └──────────┘     └──────────────┘     └────┬────┘
                                                           │
                                                    ┌──────▼──────┐
                                                    │  User USDC  │
                                                    │   Balance   │
                                                    │  (On-Chain) │
                                                    └─────────────┘
```

The key insight is that the card network doesn't need to be modified. We plug into the existing Visa infrastructure at the issuer level and handle all crypto complexity on our side. To Visa, we're just another card program. To the user, it's just a card.

## Multi-Currency Spending

When you use your card in a non-USD currency (e.g., EUR), Visa handles the FX conversion at their published rate. The amount debited from your USDC balance is the USD equivalent after conversion.

This means your USDC balance acts as a universal spending account — one balance, any currency, any country.

## Pending vs. Settled

Like any Visa card, transactions go through two phases:

- **Pending:** Authorization approved, funds on hold. Shows in your transaction list immediately.
- **Settled:** Merchant has finalized the charge. Funds are debited. This is the final amount (may differ slightly from the authorization for tips, gas station holds, etc.)
