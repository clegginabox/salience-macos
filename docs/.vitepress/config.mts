import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Salience',
  description: 'Home Assistant for developer tools. A macOS and Linux app that brings related work into one workspace.',
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
    ['meta', { property: 'og:description', content: 'Home Assistant for developer tools. A macOS and Linux app that brings related work into one workspace.' }],
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
  {
    "text": "Get started",
    "link": "/docs/install"
  },
  {
    "text": "Concepts",
    "link": "/docs/concepts"
  },
  {
    "text": "Integrations",
    "link": "/docs/integrations/"
  },
  {
    "text": "Documentation",
    "items": [
      {
        "text": "All documentation",
        "link": "/docs/"
      },
      {
        "text": "Using Salience",
        "link": "/docs/using/"
      },
      {
        "text": "Reference",
        "link": "/docs/reference/"
      },
      {
        "text": "Development",
        "link": "/docs/development/"
      },
      {
        "text": "Gallery",
        "link": "/gallery"
      }
    ]
  },
  {
    "text": "Download",
    "link": "/download"
  }
],

    sidebar: {
  "/docs/": [
    {
      "text": "Get started",
      "items": [
        {
          "text": "Install",
          "link": "/docs/install"
        },
        {
          "text": "First run",
          "link": "/docs/getting-started"
        }
      ]
    },
    {
      "text": "Concepts",
      "items": [
        {
          "text": "Concepts and terminology",
          "link": "/docs/concepts"
        },
        {
          "text": "Entities",
          "link": "/docs/entities"
        }
      ]
    },
    {
      "text": "Integrations",
      "items": [
        {
          "text": "Overview",
          "link": "/docs/integrations/"
        },
        {
          "text": "Connect your tools",
          "link": "/docs/connect-your-tools"
        },
        {
          "text": "GitHub",
          "link": "/docs/integrations/github"
        },
        {
          "text": "Jira",
          "link": "/docs/integrations/jira"
        },
        {
          "text": "CI",
          "link": "/docs/integrations/ci"
        },
        {
          "text": "Docker",
          "link": "/docs/integrations/docker"
        },
        {
          "text": "AWS",
          "link": "/docs/integrations/aws"
        },
        {
          "text": "Sentry",
          "link": "/docs/integrations/sentry"
        }
      ]
    },
    {
      "text": "Using Salience",
      "items": [
        {
          "text": "Overview",
          "link": "/docs/using/"
        },
        {
          "text": "Tiles and pages",
          "link": "/docs/using/tiles-and-pages"
        },
        {
          "text": "Review a pull request",
          "link": "/docs/using/review-a-pull-request"
        },
        {
          "text": "Check a build",
          "link": "/docs/using/check-a-build"
        },
        {
          "text": "Stand-up",
          "link": "/docs/using/stand-up"
        },
        {
          "text": "Code Graph",
          "link": "/docs/code-graph"
        },
        {
          "text": "MCP server",
          "link": "/docs/mcp"
        }
      ]
    },
    {
      "text": "Reference",
      "items": [
        {
          "text": "Overview",
          "link": "/docs/reference/"
        },
        {
          "text": "Glossary",
          "link": "/docs/reference/glossary"
        },
        {
          "text": "Configuration",
          "link": "/docs/configuration"
        },
        {
          "text": "Keyboard shortcuts",
          "link": "/docs/shortcuts"
        },
        {
          "text": "Privacy and security",
          "link": "/docs/privacy"
        },
        {
          "text": "Troubleshooting",
          "link": "/docs/troubleshooting"
        }
      ]
    },
    {
      "text": "Development",
      "items": [
        {
          "text": "Overview",
          "link": "/docs/development/"
        },
        {
          "text": "Local development",
          "link": "/docs/development/local-development"
        },
        {
          "text": "Architecture",
          "link": "/docs/development/architecture"
        },
        {
          "text": "Contributing",
          "link": "/docs/development/contributing"
        },
        {
          "text": "About Salience",
          "link": "/docs/about"
        }
      ]
    }
  ]
},

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/NErgbMHJr' },
      { icon: 'github', link: 'https://github.com/clegginabox/salience-macos' },
    ],

    search: { provider: 'local' },

    footer: {
      message: 'Salience is a desktop app for developers.',
      copyright: '© 2026 Paul Clegg',
    },
  },
});
