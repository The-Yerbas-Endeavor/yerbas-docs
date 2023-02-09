/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// const path = require('path');

const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yerbas Documentation',
  tagline: 'Documentation surrounding Yerbas',
  url: process.env.SITE_URL ? process.env.SITE_URL : 'https://docs.yerbas.com',
  baseUrl: process.env.BASE_URL ? process.env.BASE_URL : '/',
  trailingSlash: true,

  favicon: 'img/favicon.ico',
  staticDirectories: ['static'],

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  projectName: 'yerbas-docs', // Usually your repo name.
  organizationName: 'Yerbas', // Usually your GitHub org/user name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/The-Yerbas-Endeavor/docs/tree/develop/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
    require.resolve('docusaurus-lunr-search'),
    // @ts-ignore
    function customPlugin(context, options) {
      return {
        name: 'custom-plugin',
        configureWebpack(config, isServer, utils) {
          // const { getCacheLoader } = utils;
          return {
            module: {
              rules: [
                // {
                //   test: /\.foo$/,
                //   use: [getCacheLoader(isServer), 'my-custom-webpack-loader'],
                // },
                {
                  test: /\.pdf$/,
                  use: ['file-loader'],
                },
                {
                  test: /\.node$/,
                  use: ['node-loader'],
                },
              ],
            },
          };
        },
      };
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/yerbas_logo.png',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Yerbas Docs',
        logo: {
          alt: 'Yerbas',
          src: 'img/YerbasLogo.png',
        },
        items: [
          {
            label: 'Wallet',
            position: 'left',
            to: 'docs/wallet/',
          },
          {
            label: 'Smartnodes',
            position: 'left',
            to: 'docs/smartnodes/',
          },
          {
            label: 'Mining',
            position: 'left',
            to: 'docs/mining/',
          },
          {
            label: 'More...',
            position: 'left',
            to: 'docs/yerbas/',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          // {
          //   href: 'https://github.com/The-Yerbas-Endeavor/yerbas',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      announcementBar: {
        id: 'new-wallet-release',
        content:
          'Release <b>v3.0.0.1</b>: There is a new version of the wallet! Updating is required to keep your wallet functioning after the <a href="https://yerbas.org/assets/" >Assets</a> release!',
        backgroundColor: 'var(--ifm-color-success)',
        textColor: 'var(--ifm-color-secondary)',
        isCloseable: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Homepage',
                to: 'https://yerbas.org',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/XGEp2cKSKF',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/Yerbas420',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/Yerbas/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Yerbas_Endeavor',
              },
              {
                label: 'YouTube',
                href: 'https://youtu.be/9ggB5VjveYQ',
              },
            ],
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'YerbasCore',
                href: 'https://github.com/The-Yerbas-Endeavor/yerbas',
              },
              {
                label: 'Yerbas Docs',
                href: 'https://github.com/The-Yerbas-Endeavor/yerbas-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Yerbas Endeavor`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)',
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {},
      },
    }),
};

module.exports = config;
