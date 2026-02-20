---
sidebar_position: 2
title: Send & Receive
---

# Send & Receive

Peer-to-peer USDC transfers on Encrypto are instant and free. No gas fees for the user, no confirmation delays, no minimum amounts. Plus, you can send money directly to any bank account.

## Receiving

To receive USDC, share your wallet address or QR code. Funds sent to your Encrypto wallet address are credited automatically.

### How to Receive

1. Open the **Receive** screen from your dashboard
2. Display your QR code or copy your wallet address
3. Share via the native share sheet (mobile) or clipboard
4. Funds appear when the sender's transaction confirms

### Deposit Detection

Encrypto monitors your wallet address for incoming transactions across all 9 supported chains:

- **USDC on Base:** Credited immediately (Base block time ~2s)
- **USDC on Ethereum, Arbitrum, Optimism, Polygon, Avalanche:** Detected and bridged automatically
- **USDC/USDT on Solana, Tron, Stellar:** Detected and bridged automatically
- **Other tokens:** Detected and displayed in your portfolio

## Sending

### Send to Wallet

Send USDC to any wallet address. The flow is designed to be as simple as a Venmo payment.

1. Open the **Send** screen from your dashboard
2. Enter the recipient's address (paste or scan QR code)
3. Enter the amount (or select a preset: $25, $50, $100, Max)
4. Review the transaction details
5. Confirm — the transaction is signed and broadcast

### Send to Bank

Send money from your Encrypto wallet directly to any bank account. The recipient doesn't need Encrypto, a crypto wallet, or any understanding of crypto — they just see a deposit in their bank.

1. Open the **Send** screen
2. Select **Bank Transfer**
3. Enter the recipient's bank details (or select a saved recipient)
4. Choose the payment rail (ACH, PIX, SPEI)
5. Enter the amount
6. Confirm — USDC is converted and sent to the bank

Supported off-ramp rails:

| Rail | Currency | Region | Speed |
|------|----------|--------|-------|
| **ACH** | USD | US | 1-3 business days |
| **ACH Same-Day** | USD | US | Same day |
| **PIX** | BRL | Brazil | Instant |
| **SPEI** | MXN | Mexico | Minutes |
| **CVU** | ARS | Argentina | Rolling out |

### QR Scanner

The send flow includes a camera-based QR scanner for in-person transfers. Point your camera at any wallet address QR code and the address is populated automatically. No typing, no errors.

### Transaction Signing

All transactions are signed using your embedded wallet via Privy's infrastructure. The signing request is authenticated through your current session — no separate approval step, no popup, no gas estimation.

On L2 chains, transaction fees are sub-cent and are covered by Encrypto. The user never sees gas.

## Transaction History

Every send and receive is logged in your transaction history with:

- Amount (USDC and USD equivalent)
- Recipient or sender address (truncated with full address on tap)
- Timestamp
- Transaction hash (links to block explorer)
- Status (pending, confirmed, failed)
- Payment rail (for bank transfers)
