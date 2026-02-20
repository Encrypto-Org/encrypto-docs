import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Encrypto',
  tagline: 'The Sovereign Liquidity Layer',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://docs.encrypto.fun',
  baseUrl: '/',

  organizationName: 'Encrypto-Org',
  projectName: 'encrypto-docs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/Encrypto-Org/encrypto-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Encrypto',
      logo: {
        alt: 'Encrypto',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://app.encrypto.fun',
          label: 'Launch App',
          position: 'right',
        },
        {
          href: 'https://x.com/encryptodotfun',
          label: '𝕏',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            { label: 'Overview', to: '/' },
            { label: 'Encrypto Card', to: '/card/overview' },
            { label: 'P2P Wallet', to: '/wallet/overview' },
          ],
        },
        {
          title: 'Technology',
          items: [
            { label: 'Architecture', to: '/architecture/system-design' },
            { label: 'Liquidity Engine', to: '/architecture/liquidity-engine' },
            { label: 'Agent Platform', to: '/agent-platform' },
            { label: 'Checkout SDK', to: '/checkout/overview' },
            { label: 'Security', to: '/security/overview' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: '𝕏 (Twitter)', href: 'https://x.com/encryptodotfun' },
            { label: 'Launch App', href: 'https://app.encrypto.fun' },
            { label: 'encrypto.fun', href: 'https://encrypto.fun' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Encrypto Labs, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
