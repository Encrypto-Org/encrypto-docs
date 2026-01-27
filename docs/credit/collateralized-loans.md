---
sidebar_position: 2
title: Collateralized Loans
---

# Crypto-Backed Loans

<span class="badge badge--soon">Coming Soon</span>

Borrow against your crypto without selling it. Deposit collateral, receive USD on your Encrypto Card, and repay on your own terms.

## How It Works

1. **Deposit collateral.** Lock supported crypto assets (ETH, BTC, SOL, USDC) as collateral.
2. **Receive credit.** USD is credited to your Encrypto Card balance based on the loan-to-value (LTV) ratio.
3. **Spend normally.** Use your card as usual. The borrowed amount is your spending power.
4. **Repay.** Pay back the loan in USDC or any supported crypto. Interest accrues daily.
5. **Withdraw collateral.** Once repaid, your collateral is unlocked and returned.

## Loan Parameters

| Parameter | Value |
|-----------|-------|
| **Max LTV** | 50-70% (asset-dependent) |
| **Interest rate** | Variable, based on market conditions |
| **Min loan amount** | $100 |
| **Max loan amount** | $100,000 (initial) |
| **Collateral types** | ETH, BTC (wBTC), SOL, USDC |
| **Repayment** | Flexible — any time, any amount |
| **Loan term** | Open-ended (no fixed term) |

## LTV Ratios by Asset

Different assets have different volatility profiles, which determines the maximum LTV:

| Asset | Max LTV | Margin Call | Liquidation |
|-------|---------|-------------|-------------|
| **BTC** | 70% | 80% | 85% |
| **ETH** | 65% | 75% | 80% |
| **SOL** | 50% | 65% | 70% |
| **USDC** | 95% | — | — |

### Example

You deposit 1 ETH (worth $3,000) as collateral at 65% LTV. You receive $1,950 in borrowing power on your Encrypto Card. If ETH drops to a level where your LTV reaches 75%, you receive a margin call notification. At 80% LTV, the position is partially liquidated to bring you back to a safe ratio.

## Liquidation Protection

Unlike DeFi lending protocols where liquidation is instant and automated by MEV bots, Encrypto's liquidation process is designed to protect the borrower:

1. **Early warning.** Push notification when LTV reaches 70% of the liquidation threshold.
2. **Grace period.** 24 hours to add collateral or repay before liquidation begins.
3. **Partial liquidation.** Only enough collateral is sold to bring the LTV back to the safe zone. We don't liquidate the entire position.
4. **Best execution.** Liquidation swaps go through the Liquidity Engine for optimal pricing — not dumped on a single DEX.

## Interest

Interest is calculated daily on the outstanding loan balance. Rates are variable and determined by:

- Market lending rates (on-chain reference rates)
- Collateral asset volatility
- Account tier and history

Interest is denominated in USDC and can be repaid at any time. There are no prepayment penalties.
