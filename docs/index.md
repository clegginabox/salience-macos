---
layout: home

hero:
  name: Salience
  text: Know the state of your work without opening five tabs.
  tagline: "Salience tells you what needs your attention across the tools you already use: GitHub, Jira, CI, Docker, AWS and Sentry. Your agents query the same picture. There's no Salience cloud and no account — your graph stays on your Mac."
  image:
    src: /screenshots/hero.png
    alt: A Salience dashboard
  actions:
    - theme: brand
      text: Download the alpha
      link: /download
    - theme: alt
      text: Read the docs
      link: /docs/

features:
  - title: Pages you compose
    details: Every page is a grid of tiles — units of work, PRs, diffs, tickets, containers, logs, a console. Lay out what you need per project and it stays that way.
  - title: Calm by default
    details: No inbox, no notifications, no modals. Salience promotes what matters into situations, each with a loudness that matches how urgently it needs you.
  - title: Readable by your agents
    details: The same joined graph the dashboards render ships with an MCP server. Point your agent at it and ask — "What's my stand-up?", "What shipped in the last deploy?" — no more scraping five tabs.
  - title: Local, and checkable
    details: Your graph stays on your Mac — no Salience cloud, no account. Credentials are kept apart from it, in an encrypted SQLite store unlocked by a key in the macOS Keychain. A built-in network monitor lists every outbound request the app makes, so you can audit it yourself.
---

*Free while Salience is in alpha. macOS 13+, Apple Silicon and Intel.*

## How it works

1. **Salience reads the tools you already use.** Point it at a project and it
   pulls in branches, PRs, tickets, CI runs and containers. Nothing is installed
   into your codebase, and no connector ever writes back.
2. **It connects the things that belong together.** This branch implements that
   ticket; this container runs that image; the commit on this PR is what's
   actually deployed. That join is the part no single tool can do for you.
3. **It tells you when they disagree.** *PR merged, ticket still open.* *Branch
   three days behind its base.* You find out while it's still cheap to fix,
   without going looking.

[How that works underneath →](/docs/concepts)

### Your agents read the same picture

Salience ships with an **MCP server** over the same joined data. Point an AI
agent at it and ask in plain language — "What's my stand-up today?", "What
shipped in the last deploy?" — instead of having it scrape five tools.

## See it work

**A branch, its PR, its ticket and its CI — as one thing**

![A unit of work: linked branch, PR and failing CI checks, with logs one click away](/screenshots/unit-view.png)

**Which code does this route actually touch?** Pick a route, walk the call graph, open anything in your IDE. *(PHP today.)*

![A route walked through the call graph, with source and callers in the inspector](/screenshots/code-graph-route.png)

**Your stack, its logs and your PRs on one page**

![A dashboard with units, PR overview, sync status, Docker containers and compose logs](/screenshots/dashboard-docker.png)

[See the rest in the gallery →](/gallery)

## Why Salience

Home Assistant joins your car, your calendar and your lights, so a meeting you
can't reach on the fuel you have turns the lights red. Information that already
exists, brought to you in time to act on it.

Salience does that for developer tools. It doesn't replace any of them — it
replaces the tabs, and the questions with **answers**.

[The full story →](/docs/about)

[Download the alpha →](/download) · [Read the docs →](/docs/) · [View on GitHub →](https://github.com/clegginabox/salience-macos)
