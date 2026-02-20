---
sidebar_position: 3
title: Settlement
---

# Settlement

Settlement is the process of moving funds from one party to another — whether that's a card purchase, a P2P transfer, or a bank off-ramp. Encrypto's settlement architecture handles all of these through a unified system.

## Settlement Flow (Card)

```
1. Card tap                    → Visa authorization request (< 200ms)
2. Balance check               → On-chain USDC balance query (< 100ms)
3. Authorization response      → Approved/declined (< 500ms total)
4. Hold placed                 → USDC earmarked for transaction
5. Merchant settlement         → Visa batch settlement (same day)
6. USDC debited                → Final debit from user wallet
7. Fiat sent to merchant       → Via card issuing partner
```

Total time from card tap to authorization: **under 500ms.**
Total time from tap to final settlement: **same day** (Visa standard).

## Settlement Flow (Bank Off-Ramp)

Encrypto's stablecoin orchestration layer handles fiat conversion, rail selection, and delivery — settling cross-border transfers in minutes instead of the 2-3 days required by traditional correspondent banking.

```
1. User initiates bank transfer     → Select amount, currency, and rail
2. USDC debited from wallet         → Instant
3. Transfer created                 → State: funds_received
4. USDC converted to fiat           → Automatic, server-side
5. Fiat submitted to bank           → State: payment_submitted
6. Funds arrive in bank account     → State: payment_processed
```

Every transfer follows a deterministic lifecycle — `awaiting_funds → funds_received → payment_submitted → payment_processed` — with real-time status updates and webhook notifications at each stage.

| Rail | Settlement Speed | Currency |
|------|-----------------|----------|
| **ACH** | 1-3 business days | USD |
| **ACH Same-Day** | Same day | USD |
| **PIX** | Instant | BRL |
| **SPEI** | Minutes | MXN |
| **CVU** | Minutes | ARS |

## On-Chain vs. Off-Chain

Encrypto operates a hybrid settlement model:

| Component | Settlement Type | Finality |
|-----------|----------------|----------|
| P2P transfers | **On-chain** | ~2 seconds (L2 block time) |
| Card purchases | **Hybrid** | Authorization: instant. Settlement: same day via Visa. |
| Cross-chain deposits | **On-chain** | Chain-dependent (varies by network) |
| Bank off-ramp | **Hybrid** | USDC debit: instant. Fiat delivery: rail-dependent. |
| Bank on-ramp | **Hybrid** | Fiat receipt: rail-dependent. USDC credit: instant after confirmation. |

### Why Hybrid?

Pure on-chain settlement for card transactions and bank transfers isn't practical today. Merchants don't accept USDC — they accept Visa. Banks don't receive crypto — they receive fiat through traditional rails.

So the card side settles through Visa, bank transfers settle through our stablecoin orchestration layer (ACH/PIX/SPEI/CVU), and the user's debit happens on-chain. Stablecoin rails abstract away the correspondent banking complexity — no nostro/vostro accounts, no multi-day clearing, no manual reconciliation. Cross-border transfers that take 2-3 days through traditional rails settle in minutes.

The merchant and the bank get paid through the system they already use. The user gets the benefits of on-chain asset management. And Encrypto handles the translation layer between the two.

## Finality

On-chain transactions on L2s have **probabilistic finality** after ~2 seconds and **strong finality** after the batch is posted to Ethereum L1.

For card transactions, finality is determined by the Visa settlement cycle. Pending authorizations can be modified (e.g., tip adjustments) but settled transactions are final.

For bank transfers, finality depends on the payment rail — PIX is instant, ACH takes 1-3 days, wires settle same day.

## Float and Risk Management

Between the time a card transaction is authorized and when it settles, there's a "float" period where funds are held but not yet debited. Encrypto manages this through:

1. **Instant hold.** The authorization amount is immediately locked in the user's account. They can't spend it elsewhere.
2. **Overcollateralization buffer.** A small buffer (2-5%) is held above the authorization amount to cover tip adjustments and FX fluctuations.
3. **Real-time monitoring.** The settlement engine continuously monitors held transactions and adjusts reserves.

This eliminates the risk of insufficient funds at settlement time.

## Settlement Economics

Encrypto's on-chain settlement infrastructure has structural advantages over traditional banking:

| Cost Component | Traditional Bank | Encrypto |
|----------------|-----------------|----------|
| Interchange | 1.5-3.0% | Shared with card partner |
| Processing | $0.10-0.30/txn | Negligible (L2 gas) |
| FX conversion | 1-3% markup | Visa rate (no additional markup) |
| Settlement delay | 1-3 business days | Same day |
| Chargeback reserve | 5-10% holdback | Crypto is non-reversible |

Stablecoin orchestration eliminates correspondent banking overhead — no nostro/vostro accounts, no SWIFT fees, no multi-day clearing. Lower infrastructure costs mean Encrypto can pass savings to users in the form of yield, lower fees, and better economics than traditional banks can structurally offer.
