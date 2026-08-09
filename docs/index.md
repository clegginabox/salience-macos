---
layout: home

hero:
  name: Salience
  text: Know the state of your work without opening five tabs.
  tagline: Salience connects GitHub, Jira, CI, Docker, AWS and Sentry into one live picture of your work. You glance at it. Your agents query it. There's no Salience cloud and no account — your graph stays on your Mac.
  # Interim hero: desk altitude. Swap for a network-altitude shot (islands,
  # stations, agent presence) once that view is visually ready.
  image:
    src: /screenshots/map-desk.png
    alt: The Salience map — the working set as file nodes with typed edges between them
  actions:
    - theme: brand
      text: Download the alpha
      link: /download
    - theme: alt
      text: Read the docs
      link: /docs/

features:
  - title: A living map, not a dashboard
    details: Your branches, PRs, tickets and CI laid out as places, not rows. Positions stay stable, so you always know where to look — and you can watch your AI agents move as they work.
  - title: Calm by default
    details: No inbox, no notifications, no modals. Salience promotes what matters into situations, each with a loudness that matches how urgently it needs you.
  - title: Readable by your agents
    details: The same joined graph the map renders ships with an MCP server. Point your agent at it and ask — "What's my stand-up?", "What shipped in the last deploy?" — no more scraping five tabs.
  - title: Local, and checkable
    details: Your graph lives in an encrypted database on your Mac, and credentials sit in that same encrypted store, unlocked by a key in the macOS Keychain. A built-in network monitor lists every outbound request the app makes, so you can audit it yourself.
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

**Everything in flight, grouped by what's wrong with it**

![My Work: out-of-sync, stale, and in-progress sections with per-item chain state](/screenshots/my-work.png)

**Which code does this route actually touch?** Pick a route, walk the call graph, open anything in your IDE. *(PHP today.)*

![A route walked through the call graph, with source and callers in the context panel](/screenshots/code-graph.png)

**Every project at a glance, and what needs you first**

![Home: the Needs Attention feed across all projects, above per-project cards with branch state](/screenshots/home.png)

[See the rest in the gallery →](/gallery)

## Why Salience

Home Assistant joins your car, your calendar and your lights, so a meeting you
can't reach on the fuel you have turns the lights red. Information that already
exists, brought to you in time to act on it.

Salience does that for developer tools. It doesn't replace any of them — it
replaces the tabs, and the questions with **answers**.

[The full story →](/docs/about)

[Download the alpha →](/download) · [Read the docs →](/docs/) · [View on GitHub →](https://github.com/clegginabox/salience-macos)
