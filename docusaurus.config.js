// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  stylesheets: [
    'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css',
    'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
  ],
  title: 'Invoice Collector',
  tagline: 'Free automatic invoice collector 🧾 Collect your invoices in seconds ⏰ Docker container 🐳',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://invoice-collector.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'invoice-collector', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Invoice Collector',
        logo: {
          alt: 'Logo',
          src: 'img/logo/logo_round_square.svg',
        },
        items: [
          {
            to: 'pricing',
            label: 'Pricing',
            position: 'left',
          },
          {
            to: 'https://app.invoice-collector.com/login',
            label: 'Login',
            position: 'right',
            className: 'button button--primary mr-4',
            style: { color: 'white' }
          },
          {
            to: 'https://app.invoice-collector.com/signup',
            label: 'Sign Up for Free',
            position: 'right',
            className: 'button button--secondary',
            style: { color: 'black' }
          },
          {
            type: 'docSidebar',
            sidebarId: 'documentationSidebar',
            position: 'right',
            label: 'Doc',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: 'https://github.com/invoice-collector/invoice-collector',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Invoice-Collector',
            items: [
              {
                label: 'Doc',
                to: '/docs',
              },
              {
                label: 'Demo',
                to: '/demo',
              },
              {
                label: 'Contact',
                to: 'mailto:Invoice-Collector<contact@invoice-collector.com>',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/invoice-collector',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/faRWfaUZ',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/invoice-collector/invoice-collector',
              },
            ],
          },
          /*{
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },*/
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of Use',
                to: '/terms-of-use',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy-policy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Invoice-Collector`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
