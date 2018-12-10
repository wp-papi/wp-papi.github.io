/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://www.episerver.se/4ab6db/contentassets/7626b45a54f44eb3a6c3da74fe25b626/isotoplogo.jpg',
    infoLink: 'https://isotop.se',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Papi', // Title for your website.
  tagline: 'A great way to work with custom fields and page types in WordPress',
  url: 'https://wp-papi.github.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // Used for publishing and more
  projectName: 'papi',
  organizationName: 'wp-papi',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'getting-started', label: 'Docs'},
    { page: 'help', label: 'Help' },
    { blog: true, label: 'Blog' },
    { href: 'https://github.com/wp-papi/papi', label: 'GitHub' },
    { search: true },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo-white.svg',
  footerIcon: 'img/logo-white.svg',
  favicon: 'img/favicon/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#20232a',
    secondaryColor: '#20232a',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © 2013-${new Date().getFullYear()} Fredrik Forsmo and contributors ❤`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/papi.png',
  twitterImage: 'img/papi.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/wp-papi/papi',
};

module.exports = siteConfig;
