---
sidebar_position: 3
title: Compliance
---

# Compliance

Building in crypto doesn't mean building outside the law. Encrypto operates within regulatory frameworks while maintaining the technical advantages of on-chain infrastructure.

## KYC / AML

### Identity Verification

Every Encrypto user completes KYC (Know Your Customer) before accessing financial products:

| Step | What Happens | Provider |
|------|-------------|----------|
| **Document upload** | Government-issued ID (passport, driver's license) | Identity verification partner |
| **Liveness check** | Biometric face match against document photo | Identity verification partner |
| **Sanctions screening** | Cross-reference against OFAC, UN, EU sanctions lists | Compliance infrastructure |
| **PEP screening** | Politically Exposed Persons check | Compliance infrastructure |
| **Ongoing monitoring** | Continuous re-screening against updated lists | Automated |

### Transaction Monitoring

All transactions are monitored for suspicious activity:

- **Pattern detection** — Unusual transaction volumes, frequencies, or destinations
- **Chain analysis** — On-chain transaction tracing for flagged addresses
- **Threshold reporting** — Automated reporting for transactions above regulatory thresholds
- **Risk scoring** — Every transaction is assigned a risk score based on multiple signals

## Regulatory Framework

### United States

- **Money transmission:** Partner-based licensing model. Encrypto operates through licensed partners for fiat on/off ramps and card issuance.
- **Card issuance:** Visa debit cards issued through a licensed card issuer and program manager.
- **Securities:** Points and rewards are utility-based. No investment contract, no securities classification.

### Latin America

- **Market-specific compliance:** Each LATAM market has distinct regulatory requirements. Encrypto works with local partners who hold appropriate licenses.
- **Currency controls:** Compliant with local currency regulations. USDC holdings are treated as digital assets, not foreign currency deposits.
- **Data residency:** User data stored in compliance with local data protection laws (LGPD in Brazil, Ley de Protección de Datos in Argentina, etc.)

## Data Protection

### What We Store

| Data Type | Storage | Encryption | Access |
|-----------|---------|------------|--------|
| **PII** (name, DOB, address) | Isolated database | AES-256 at rest | Restricted to compliance team |
| **KYC documents** | Encrypted object storage | AES-256 at rest + in transit | Compliance only, time-limited |
| **Transaction history** | Application database | AES-256 at rest | User + authorized systems |
| **Wallet addresses** | Application database | Not PII | Public by nature |
| **Session data** | Ephemeral store | Encrypted | Expires automatically |

### What We Don't Store

- Private keys or key shards (managed by Privy)
- Plaintext passwords (social login only)
- Card numbers (managed by card issuer)
- Biometric data (processed by identity partner, not retained)

### Data Principles

1. **Minimal collection.** We only collect data required for compliance and product functionality.
2. **Purpose limitation.** Data is used only for its stated purpose.
3. **Encryption everywhere.** AES-256 at rest, TLS 1.3 in transit. No exceptions.
4. **Access controls.** Role-based access. PII access is logged and audited.
5. **Right to deletion.** Users can request data deletion, subject to regulatory retention requirements.

## Third-Party Security

Every vendor and partner integration is evaluated for:

- SOC 2 Type II compliance (or equivalent)
- Data processing agreements
- Encryption standards
- Incident notification procedures
- Regular security assessments

Critical infrastructure partners (Privy, card issuer, banking partner) undergo enhanced due diligence and continuous monitoring.
