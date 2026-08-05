# Landing Page Map-First Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite the VitePress landing page (`docs/index.md`) to lead with the living map, and update site metadata to match.

**Architecture:** Pure content change in an existing VitePress site. Two files touched: `docs/index.md` (full rewrite from the copy in this plan) and `docs/.vitepress/config.mts` (description strings only). Map screenshots do not exist yet — the hero image is a commented-out YAML slot and the gallery has HTML-comment slots, so the page renders complete without them.

**Tech Stack:** VitePress 1.5, markdown, GitHub Pages (deploys on push to `main` — all work stays on branch `landing-map-refresh`).

## Global Constraints

- Repo: `/Users/cleggy/Projects/salience-macos`, branch `landing-map-refresh` (already created; do NOT push to `main` — that deploys).
- Hero headline exactly: `Your work, as a living map.`
- The string "Home Assistant" must appear on the index page only inside the "Why Salience" section.
- The string `asdas` must not survive anywhere.
- Spec: `specs/2026-08-05-landing-page-map-refresh-design.md`.
- No changes to `docs/docs/about.md`, theme CSS, or any other page.

---

### Task 1: Rewrite `docs/index.md`

**Files:**
- Modify: `docs/index.md` (full replacement)

**Interfaces:**
- Consumes: existing screenshots in `docs/public/screenshots/` (`my-work-list.png`, `checks-tests.png`, `command-palette.png`, `console.png`).
- Produces: the final landing page content; Task 2's grep checks run against it.

- [ ] **Step 1: Replace the entire contents of `docs/index.md` with:**

````markdown
---
layout: home

hero:
  name: Salience
  text: Your work, as a living map.
  tagline: Branches, PRs, tickets, CI, deploys — and the agents working on them — joined into one calm map on your second monitor. Local, private, yours.
  # HERO IMAGE SLOT — map screenshot: mid-zoom, populated, agent presence + one glowing situation.
  # Uncomment when captured:
  # image:
  #   src: /screenshots/map-hero.png
  #   alt: The Salience map showing branches, PRs, tickets and CI joined as islands
  actions:
    - theme: brand
      text: Download for macOS
      link: https://github.com/clegginabox/salience-macos/releases/latest
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
  - title: Verifiably local
    details: An encrypted database on your machine, credentials in the OS keychain, and a built-in network monitor showing every outbound request Salience makes. You're the customer, not the product.
---

## Why Salience

On a recent contract I worked as a one-man scrum team, drowning in tabs and
windows: IDEs, terminals, Teams, Jira, Bitbucket, TeamCity, Docker, AWS,
Sentry. Some tabs existed to repeat the same actions — run the tests, SSH into
an instance, run a migration. The rest existed to answer questions whose
answers lived across several tools at once: *Is my ticket in sync with my
work? What's actually deployed right now?*

Home Assistant showed me the fix. My car knows its fuel level, my calendar
knows my next meeting, my house has smart lights — three silos. Home Assistant
joins them: if the morning's meeting is further away than the remaining fuel
will take me, the lights turn red. Information that already exists, brought to
me instead of me going to find it — with enough time to act.

Salience does that for developer tools. It doesn't replace any of them — it
replaces the tabs, and the questions with **answers**. A red light at just the
right time.

[The full story →](/docs/about)

## See it work

<!-- GALLERY SLOT: zoomed-out map / world view -->
<!-- GALLERY SLOT: mid-zoom island showing branch + PR + ticket + CI joined -->

**Stand-up — your week, organised by what needs you, not by ticket ID**

![Stand-up grouped by status: changes requested, stuck in review, CI failing](/screenshots/my-work-list.png)

**Suggested — the right action shows up where you already are**

![Suggested actions for the current branch](/screenshots/checks-tests.png)

**Command palette — every action, every entity, one keystroke away**

![Command palette over the console view](/screenshots/command-palette.png)

**Console — your build output, your terminal, your stack traces, together**

![Build and log output in the console](/screenshots/console.png)

## How it works

Salience connects to your tools (git, GitHub, Bitbucket, Jira, Docker, AWS)
and turns what it finds into **entities** — branches, PRs, tickets, CI runs,
containers. Unlike a dashboard, these aren't fetched, shown once, and thrown
away. Entities are typed, queryable and persisted as a correlated graph in an
embedded database on your machine.

Every change streams out of the store as a live-query delta into a
derivation engine. **Correlators** draw edges between entities from
different sources — this branch implements that ticket, this container runs
that image, this PR's commit is what's deployed. **Rules** then promote what the
graph knows into **situations** — *"PR merged but the ticket is still open"* —
each with a **loudness** that decides how hard it tugs at your attention at
the current moment in time.

The map is just a lens over that graph.

### Agents read the same graph

Because the graph is the substrate, the same correlated context is open to
your AI tools: Salience ships with an **MCP server**. Point your AI agent at
it and ask in natural language: "What's my stand-up today?", "Can I unblock
anyone?", "What work was on the last deployment?".

[Read the docs →](/docs/) · [View on GitHub →](https://github.com/clegginabox/salience-macos)
````

Note: the previous file had `theme: altq` on the second hero action — a typo for `alt`; this rewrite fixes it.

- [ ] **Step 2: Verify content rules**

Run:
```bash
cd /Users/cleggy/Projects/salience-macos && grep -c asdas docs/index.md; grep -n "Home Assistant" docs/index.md
```
Expected: `grep -c asdas` prints `0` (exit code 1); "Home Assistant" matches appear only on lines inside the "Why Salience" section (two mentions, both in the second paragraph).

- [ ] **Step 3: Build**

Run:
```bash
cd /Users/cleggy/Projects/salience-macos && npm run docs:build
```
Expected: build completes with no dead-link errors and no missing-image warnings.

- [ ] **Step 4: Commit**

```bash
cd /Users/cleggy/Projects/salience-macos && git add docs/index.md && git commit -m "Landing page: map-first rewrite of index

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 2: Update site metadata in `docs/.vitepress/config.mts`

**Files:**
- Modify: `docs/.vitepress/config.mts:5` (top-level `description`) and `:16` (the `og:description` meta entry)

**Interfaces:**
- Consumes: nothing from Task 1 (independent strings).
- Produces: final `<meta>` description tags for the deployed site.

- [ ] **Step 1: Change the two description strings**

Replace line 5:
```ts
  description: 'Home Assistant for developer tools.',
```
with:
```ts
  description: 'Your work, as a living map. A calm, local-first view of branches, PRs, tickets, CI and agents.',
```

Replace the `og:description` head entry:
```ts
    ['meta', { property: 'og:description', content: 'Home Assistant for developer tools.' }],
```
with:
```ts
    ['meta', { property: 'og:description', content: 'Your work, as a living map. A calm, local-first view of branches, PRs, tickets, CI and agents.' }],
```

Leave `og:image`, `og:title`, and everything else untouched.

- [ ] **Step 2: Build**

Run:
```bash
cd /Users/cleggy/Projects/salience-macos && npm run docs:build
```
Expected: build completes cleanly.

- [ ] **Step 3: Commit**

```bash
cd /Users/cleggy/Projects/salience-macos && git add docs/.vitepress/config.mts && git commit -m "Site metadata: map-first description

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 3: Visual check in dev server

**Files:** none modified.

**Interfaces:**
- Consumes: Tasks 1–2 committed content.
- Produces: confirmation the rendered page matches the spec (hero text, four cards, sections in order, no broken images).

- [ ] **Step 1: Start the dev server and load the page**

Run `npm run docs:dev` (from `/Users/cleggy/Projects/salience-macos`), open the served URL in the browser, and confirm:
- Hero shows "Your work, as a living map." with two buttons, no image, no layout breakage from the missing image.
- Four feature cards render with the exact titles from Task 1.
- Sections appear in order: Why Salience → See it work → How it works → Agents read the same graph.
- All four gallery screenshots load.

- [ ] **Step 2: Stop the dev server**

No commit — verification only.
