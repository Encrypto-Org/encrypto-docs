// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Encrypto Docs',
  tagline: 'Banking infrastructure for humans and AI agents',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.encrypto.fun',
  baseUrl: '/',

  organizationName: 'Encrypto-Org',
  projectName: 'encrypto-docs',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Encrypto-Org/encrypto-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Encrypto',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/docs/agents/quick-start',
            label: 'Agents',
            position: 'left',
          },
          {
            href: 'https://app.encrypto.fun',
            label: 'App',
            position: 'right',
          },
          {
            href: 'https://github.com/Encrypto-Org',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Agent Platform',
                to: '/docs/agent-platform',
              },
              {
                label: 'Agent Quick Start',
                to: '/docs/agents/quick-start',
              },
            ],
          },
          {
            title: 'Product',
            items: [
              {
                label: 'App',
                href: 'https://app.encrypto.fun',
              },
              {
                label: 'Agent API',
                href: 'https://api.encrypto.fun/docs',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Encrypto-Org',
              },
              {
                label: 'Contact',
                href: 'mailto:agents@encrypto.fun',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Encrypto Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json'],
      },
    }),
};

export default config;
