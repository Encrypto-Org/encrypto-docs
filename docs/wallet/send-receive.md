---
sidebar_position: 2
title: Send & Receive
---

# Send & Receive

Peer-to-peer USDC transfers on Encrypto are instant and free. No gas fees for the user, no confirmation delays, no minimum amounts.

## Receiving

To receive USDC, share your wallet address or QR code. Funds sent to your Encrypto wallet address on Base are credited immediately.

### How to Receive

1. Open the **Receive** screen from your dashboard
2. Display your QR code or copy your wallet address
3. Share via the native share sheet (mobile) or clipboard
4. Funds appear instantly when the sender's transaction confirms

### Deposit Detection

Encrypto monitors your wallet address for incoming transactions. When a deposit is detected:

- **USDC on Base:** Credited immediately (Base block time ~2s)
- **USDC on other EVM chains:** Detected and bridged automatically (coming soon)
- **Other tokens:** Detected and displayed in your portfolio

## Sending

Send USDC to any wallet address on Base. The flow is designed to be as simple as a Venmo payment.

### How to Send

1. Open the **Send** screen from your dashboard
2. Enter the recipient's address (paste or scan QR code)
3. Enter the amount (or select a preset: $25, $50, $100, Max)
4. Review the transaction details
5. Confirm — the transaction is signed by your embedded wallet and broadcast

### QR Scanner

The send flow includes a camera-based QR scanner for in-person transfers. Point your camera at any wallet address QR code and the address is populated automatically. No typing, no errors.

### Transaction Signing

All transactions are signed using your embedded wallet's private key via MPC. The signing request is authenticated through your current session — no separate approval step, no popup, no gas estimation.

On Base, transaction fees are sub-cent and are covered by Encrypto. The user never sees gas.

## Transaction History

Every send and receive is logged in your transaction history with:

- Amount (USDC and USD equivalent)
- Recipient or sender address (truncated with full address on tap)
- Timestamp
- Transaction hash (links to block explorer)
- Status (pending, confirmed, failed)
