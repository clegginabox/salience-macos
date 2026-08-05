# Landing page refresh: map-first — design

**Date:** 2026-08-05
**Scope:** `docs/index.md` rewrite + small `config.mts` metadata updates. No new infra, no theme work, no new pages.

## Problem

The landing page is frozen in the pre-map era (screenshots May–June). The hero is a kanban
board — the one view that makes Salience look like every other dashboard. The working-set
map, code graph, agent presence, and MCP server are the differentiators and are absent or
buried. The "Local and secure" feature card literally says "asdas". The index page
duplicates the about page verbatim.

## Decisions (locked with Paul, 2026-08-05)

1. **Hero leads with the map** — not the Home Assistant framing, not the agent angle.
2. **Static map screenshot now; looping video later.** The 20s pitch video is a
   fast-follow, not a blocker.
3. **"Home Assistant for developer tools" retires from the hero** entirely; the analogy
   lives in the "Why Salience" story section and on /docs/about.
4. **Hero headline:** "Your work, as a living map."
5. Ship the copy rewrite now with existing gallery assets; leave clearly-marked slots for
   map screenshots Paul captures from the running app (worktree builds fail; live data on
   screen — Paul captures, not the agent).

## Page structure (reading order)

### 1. Hero

- `name`: Salience
- `text`: Your work, as a living map.
- `tagline`: Branches, PRs, tickets, CI, deploys — and the agents working on them —
  joined into one calm map on your second monitor. Local, private, yours.
- `image`: **INTERIM: omitted** until the map capture lands. Do not ship the kanban shot
  under this headline — incongruous. Marked with an HTML comment slot:
  `<!-- HERO IMAGE SLOT: map screenshot, mid-zoom, populated, agent presence + one glowing situation -->`
- `actions`: unchanged (Download for macOS → latest release; Read the docs → /docs/).

### 2. Feature cards (4)

1. **A living map, not a dashboard** — Your branches, PRs, tickets and CI laid out as
   places, not rows. Positions stay stable, so you always know where to look — and you
   can watch your AI agents move as they work.
2. **Calm by default** — No inbox, no notifications, no modals. The derivation engine
   promotes what matters into situations, each with a loudness that matches how urgently
   it needs you.
3. **Readable by your agents** — The same joined graph the map renders ships with an MCP
   server. Point your agent at it and ask: "What's my stand-up?", "What shipped in the
   last deploy?" — no more scraping five tabs.
4. **Verifiably local** — An encrypted database on your machine, credentials in the OS
   keychain, and a built-in network monitor showing every outbound request Salience
   makes. You're the customer, not the product.

The current "Intent-aware shortcuts" card drops out of the top four; the capability
survives in the gallery via the checks-tests screenshot.

### 3. Why Salience (story, compressed)

~3 short paragraphs: one-man scrum team drowning in tabs → the Home Assistant analogy
with the fuel-gauge anecdote abbreviated to 2–3 sentences → "It replaces the tabs — and
the questions with answers." Ends with a link to /docs/about for the full story. This
removes the current verbatim duplication of about.md inside index.md.

### 4. See it work (gallery)

Order: map shots first, existing shots after.

1. `<!-- GALLERY SLOT: zoomed-out map / world view -->`
2. `<!-- GALLERY SLOT: mid-zoom island showing branch+PR+ticket+CI joined -->`
3. Stand-up (`my-work-list.png`) — existing caption kept.
4. Suggested actions (`checks-tests.png`) — existing caption kept.
5. Command palette (`command-palette.png`) — existing caption kept.
6. Console (`console.png`) — existing caption kept.

Slots render nothing until filled (HTML comments), so the page ships complete-looking
without map assets.

### 5. How it works

Kept nearly verbatim from the current page (it is accurate and well-written), with:

- "The UI is just tiles over that graph" → "The map is just a lens over that graph."
- The MCP paragraph gets its own `###` subheading ("Agents read the same graph") since
  MCP is now a headline feature card.

## Config changes (`docs/.vitepress/config.mts`)

- `description`: "Your work, as a living map. A calm, local-first view of branches, PRs,
  tickets, CI and agents."
- `og:description`: same string.
- `og:image`: unchanged for now; regenerating og.png with a map shot is a fast-follow
  alongside the hero image.

## Out of scope

- The 20s pitch video (fast-follow; hero swaps from image to muted loop when it exists).
- Theme/CSS changes, new docs pages, about.md content changes.
- og.png regeneration.

## Asset checklist (Paul)

- [ ] Hero: map screenshot, mid-zoom, populated, agent presence + a glowing situation.
- [ ] Gallery: zoomed-out world view.
- [ ] Gallery: mid-zoom island with a cross-source join visible.
- [ ] Later: 10–15s muted screen-recording loop for the hero.

## Verification

- `npm run docs:dev` (or the repo's dev script) renders the page with no broken images.
- `vitepress build` passes, including the workflow's dead-link check.
- Grep confirms "asdas" is gone and "Home Assistant" appears only in the story section.

## Delivery

Branch `landing-map-refresh` in `salience-macos`. First commit preserves the previously
uncommitted June working-tree edits (about.md, index.md, screenshot updates); subsequent
commits implement this spec. Merge to main publishes via the Pages workflow — Paul merges
when the hero asset situation is acceptable to him.
