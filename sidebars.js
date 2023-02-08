/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // sidebarDefault: [{ type: 'autogenerated', dirName: '.' }],

  sidebarWallet: [
    {
      type: 'category',
      label: 'Wallet',
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'wallet',
        },
      ],
    },
  ],
  sidebarSmartnodes: [
    {
      type: 'category',
      label: 'Smartnodes',
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'smartnodes',
        },
        {type: 'ref', id: 'wallet/bootstrap'},
      ],
    },
  ],
  sidebarMining: [
    {
      type: 'category',
      label: 'Mining',
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'mining',
        },
      ],
    },
  ],
  sidebarMore: [
    {
      type: 'category',
      label: 'About YERB',
      collapsible: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'yerbas',
        },
      ],
    },
  ],

  sidebarsliceSupport: [
      {
        type: "link",
        label: "Discord",
        href: "http://discord.gg/yerbas",
      }
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
