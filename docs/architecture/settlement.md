---
sidebar_position: 3
title: Settlement
---

# Settlement

Settlement is the process of moving funds from the user's wallet to the merchant. Encrypto's settlement architecture is designed for speed, finality, and minimal counterparty risk.

## Settlement Flow

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

## On-Chain vs. Off-Chain

Encrypto operates a hybrid settlement model:

| Component | Settlement Type | Finality |
|-----------|----------------|----------|
| P2P transfers | **On-chain** | ~2 seconds (Base block time) |
| Card purchases | **Hybrid** | Authorization: instant. Settlement: same day via Visa. |
| Cross-chain deposits | **On-chain** | Bridge-dependent (2-15 minutes) |
| Yield accrual | **On-chain** | Per-block or per-epoch |

### Why Hybrid?

Pure on-chain settlement for card transactions isn't practical today. Merchants don't accept USDC — they accept Visa. So the card side settles through traditional Visa rails, while the user's debit happens on-chain.

This is the right tradeoff. The merchant gets paid through the system they already use. The user gets the benefits of on-chain asset management. And Encrypto handles the translation layer between the two.

## Finality

On-chain transactions on Base have **probabilistic finality** after ~2 seconds (single block) and **strong finality** after the batch is posted to Ethereum L1 (~10 minutes).

For card transactions, finality is determined by the Visa settlement cycle. Pending authorizations can be modified (e.g., tip adjustments) but settled transactions are final.

## Float and Risk Management

Between the time a card transaction is authorized and when it settles, there's a "float" period where funds are held but not yet debited. Encrypto manages this through:

1. **Instant hold.** The authorization amount is immediately locked in the user's account. They can't spend it elsewhere.
2. **Overcollateralization buffer.** A small buffer (2-5%) is held above the authorization amount to cover tip adjustments and FX fluctuations.
3. **Real-time monitoring.** The settlement engine continuously monitors held transactions and adjusts reserves.

This eliminates the risk of insufficient funds at settlement time — a common problem with traditional prepaid card programs.

## Settlement Economics

The cost structure of Encrypto settlement vs. traditional banking:

| Cost Component | Traditional Bank | Encrypto |
|----------------|-----------------|----------|
| Interchange | 1.5-3.0% | Shared with card partner |
| Processing | $0.10-0.30/txn | Negligible (L2 gas) |
| FX conversion | 1-3% markup | Visa rate (no markup) |
| Settlement delay | 1-3 business days | Same day |
| Chargeback reserve | 5-10% holdback | Crypto is non-reversible |

The non-reversible nature of on-chain settlement eliminates chargeback risk on the funding side. This is a structural advantage that reduces operational costs and enables lower fees.
