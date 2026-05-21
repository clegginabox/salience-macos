import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Salience',
  description: 'Home Assistant for developer tools.',
  base: '/salience-macos/',
  cleanUrls: true,
  appearance: 'dark',
  lastUpdated: false,
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/salience-macos/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/salience-macos/favicon-32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/salience-macos/favicon-16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/salience-macos/apple-touch-icon.png' }],
    ['meta', { property: 'og:title', content: 'Salience' }],
    ['meta', { property: 'og:description', content: 'Home Assistant for developer tools.' }],
    ['meta', { property: 'og:image', content: 'https://clegginabox.github.io/salience-macos/og.png' }],
    ['meta', { property: 'og:url', content: 'https://clegginabox.github.io/salience-macos/' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap'
    }],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' },
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Getting started',
          items: [
            { text: 'Install', link: '/docs/install' },
            { text: 'First run', link: '/docs/getting-started' },
          ],
        },
        {
          text: 'Using Salience',
          items: [
            { text: 'Connect your tools', link: '/docs/connect-your-tools' },
            { text: 'Configuration', link: '/docs/configuration' },
            { text: 'MCP server', link: '/docs/mcp' },
          ],
        },
        {
          text: 'Privacy & security',
          items: [
            { text: 'Privacy & security', link: '/docs/privacy' },
          ],
        },
        {
          text: 'Help',
          items: [
            { text: 'Troubleshooting', link: '/docs/troubleshooting' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/clegginabox/salience-macos' },
    ],

    search: { provider: 'local' },

    footer: {
      message: 'Salience is a desktop app for developers.',
      copyright: 'Released under the MIT License.',
    },
  },
});
