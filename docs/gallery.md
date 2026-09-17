# Gallery

A tour of Salience in screenshots. Click any image to zoom.

<style>
.shot-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem 1.25rem;
  margin: 1.5rem 0 2.5rem;
}
@media (max-width: 720px) {
  .shot-grid { grid-template-columns: 1fr; }
}
.shot-grid figure { margin: 0; }
.shot-grid img {
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  width: 100%;
}
.shot-grid figcaption {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}
</style>

## Dashboards

Every page is a tile grid you compose yourself. These are four of them.

<div class="shot-grid">
  <figure>
    <img src="/screenshots/dashboard-kanban.png" alt="A dashboard with a units board, activity feed, review counters, resource tiles and a console">
    <figcaption>A board view — units of work in columns (to do, in progress, in review, needs attention), with activity, review counts and a console alongside.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/dashboard-diff.png" alt="A dashboard with a pull request list, PR description and a diff viewer">
    <figcaption>A review page — pull requests, the selected PR's description, and its diff against main with the changed-file tree.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/dashboard-docker.png" alt="A dashboard with units, PR overview, sync status, Docker containers and docker logs">
    <figcaption>A runtime page — Docker containers with restart and stop controls, live compose logs, sync status and a PR overview.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/dashboard-codex.png" alt="A dashboard with a ticket list and ticket detail, and an agent session in the sidebar">
    <figcaption>A tickets page — the selected ticket's description and acceptance criteria, with a Codex session in the sidebar ready to work on it.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/dashboard-templates.png" alt="The new page picker with Blank page and Dashboard templates">
    <figcaption>New page — start from a template or a blank board.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/tile-list.png" alt="The Add tiles dialog listing tiles by category">
    <figcaption>Add tiles — 43 tiles across overview, git and worktrees, reviews and tickets, build and runtime, agents, and app connections.</figcaption>
  </figure>
</div>

## Entities

<div class="shot-grid">
  <figure>
    <img src="/screenshots/unit-view.png" alt="The Units list with a unit's overview: linked ticket, branch, PR and failing CI checks">
    <figcaption>Units — a branch, its PR and its ticket as one thing. Here: which CI jobs failed, with logs one click away.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/entity-viewer.png" alt="A pull request's overview: description, reviewers, comments, threads and status">
    <figcaption>PRs — the full description rendered in place, with reviewers, unresolved threads and CI state in the sidebar.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/diff.png" alt="A pull request's Diff tab with an inline diff and the changed-file tree">
    <figcaption>Diff — the PR's changes against its base, file by file, without leaving Salience.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/command-palette.png" alt="The command palette open with matching tickets and pull requests">
    <figcaption>⌘K — type a few characters and jump to any ticket, PR, action or page.</figcaption>
  </figure>
</div>

## Code Graph

<div class="shot-grid">
  <figure>
    <img src="/screenshots/code-graph-route.png" alt="A route walked through the call graph with the selected method's source in the inspector">
    <figcaption>Pick a route, see the code it touches. Select a function for its source, what it calls, and what calls it — then open it in your IDE.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/code-graph-search.png" alt="Searching for a symbol by name and exploring its calls">
    <figcaption>Or start from a symbol — search by name, pick the match, and walk its calls from there.</figcaption>
  </figure>
</div>

[Back to the docs →](/docs/)
