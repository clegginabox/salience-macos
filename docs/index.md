---
layout: home

hero:
  name: Salience
  text: Home Assistant for developer tools.
  tagline: One view of your branch, ticket, PR, CI, deploy, and logs — calm by default, never a notification.
  image:
    src: /screenshots/my-work-kanban.png
    alt: Salience showing the My Work kanban view
  actions:
    - theme: brand
      text: Download for macOS
      link: https://github.com/clegginabox/salience-macos/releases/latest
    - theme: alt
      text: Read the docs
      link: /docs/

features:
  - title: Calm by default
    details: No inbox, no notifications, no modals. State carries the context — when something stops mattering, it stops being there.
  - title: Intent-aware shortcuts
    details: Change a test file and "run this test" appears. Pull new dependencies and "npm install" shows up. The right action surfaces where you already are.
  - title: Cross-source insights
    details: Branch → ticket → PR → CI → deploy → logs in one view. Your AI agent gets the same correlated context, so stop copying and pasting.
---

## What is Salience

Salience is a desktop app for developers. It follows the branch wherever it goes — ticket, PR, CI, deploy, metrics — pulling everything into one ambient view that lives on your second monitor.

It's built around an idea: salient events are an attentional mechanism by which organisms learn and survive. Your tooling should help you focus on the pertinent subset of what's available — not surface every notification it can.

A failed build isn't a line in your inbox; it's a state, and state carries context. A PR review request on work that unblocks three other tickets in the sprint is louder than one that doesn't. Salience uses that context so you don't have to remember what's important.

## See it work

**Suggested — the right action shows up where you already are**

![Suggested actions for the current branch](/screenshots/checks-tests.png)

**Command palette — every action, every entity, one keystroke away**

![Command palette over the console view](/screenshots/command-palette.png)

**Console — your build output, your terminal, your stack traces, together**

![Build and log output in the console](/screenshots/console.png)

**Stand-up — your week, organised by what needs you, not by ticket ID**

![Stand-up grouped by status: changes requested, stuck in review, CI failing](/screenshots/my-work-list.png)

## How it fits together

Salience connects to your tools (git, GitHub, Bitbucket, Jira, Docker, …) and produces **entities** — branches, PRs, tickets, containers. A small **derivation engine** joins entities across sources to surface cross-source insights no single tool can know on its own. The UI is composed of **tiles** you can rearrange.

The same correlated context is exposed over an **MCP server**, so Claude, Codex, Cursor, or any MCP-aware tool can answer "what's my stand-up today?" without you copying and pasting.

[Read the docs →](/docs/) · [View on GitHub →](https://github.com/clegginabox/salience-macos)
