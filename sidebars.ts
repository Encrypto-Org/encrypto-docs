import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/quickstart',
        'getting-started/supported-assets',
        'getting-started/supported-regions',
      ],
    },
    {
      type: 'category',
      label: 'Encrypto Card',
      collapsed: false,
      items: [
        'card/overview',
        'card/how-it-works',
        'card/spending-any-crypto',
        'card/fees',
      ],
    },
    {
      type: 'category',
      label: 'P2P Wallet',
      collapsed: false,
      items: [
        'wallet/overview',
        'wallet/send-receive',
        'wallet/multi-chain',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      collapsed: false,
      items: [
        'architecture/system-design',
        'architecture/liquidity-engine',
        'architecture/settlement',
      ],
    },
    {
      type: 'category',
      label: 'Credit & Lending',
      collapsed: true,
      items: [
        'credit/overview',
        'credit/collateralized-loans',
        'credit/credit-line',
      ],
    },
    {
      type: 'category',
      label: 'Yield',
      collapsed: true,
      items: [
        'yield/overview',
        'yield/strategies',
      ],
    },
    {
      type: 'category',
      label: 'Points & Rewards',
      collapsed: true,
      items: [
        'rewards/overview',
        'rewards/earning',
        'rewards/referrals',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      collapsed: true,
      items: [
        'security/overview',
        'security/custody',
        'security/compliance',
      ],
    },
    {
      type: 'category',
      label: 'Agent Platform',
      collapsed: false,
      items: [
        'agent-platform/index',
        'agents/quick-start',
        'agents/api-reference',
        'agents/limits',
        'agents/x402',
      ],
    },
    {
      type: 'category',
      label: 'Checkout SDK',
      collapsed: false,
      items: [
        'checkout/overview',
        'checkout/quick-start',
        'checkout/api-reference',
        'checkout/webhooks',
      ],
    },
  ],
};

export default sidebars;
