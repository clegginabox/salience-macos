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

## The Map

<div class="shot-grid">
  <figure>
    <img src="/screenshots/map-desk.png" alt="Desk altitude: the working set as file nodes with typed edges">
    <figcaption>Desk altitude — the branch's working set as file nodes, with typed edges you draw between them.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/map-compose.png" alt="Compose services as buildings on the map">
    <figcaption>Docker Compose services as buildings — power state comes from the declared↔running container join.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/map-detail.png" alt="A selected file with its diff in the detail panel">
    <figcaption>Select a file, get its diff in the detail panel — without leaving the map.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/map-note.png" alt="The note composer anchored to a file node">
    <figcaption>Stick notes to files — yours persist, your agents' fade unless you pin them.</figcaption>
  </figure>
</div>

## Your work

<div class="shot-grid">
  <figure>
    <img src="/screenshots/my-work.png" alt="My Work with out-of-sync, stale and in-progress sections">
    <figcaption>My Work — everything in flight, grouped by what's wrong, worst first.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/standup.png" alt="The Stand-up board with PR state joined onto tickets">
    <figcaption>Stand-up — ticket-anchored columns with branch, PR, and review state joined on.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/home.png" alt="Home with the Needs Attention feed and project cards">
    <figcaption>Home — the Needs Attention feed across every project, above per-project branch state.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/timeline.png" alt="The project timeline with source filters">
    <figcaption>Timeline — the project's live stream, bucketed and filterable by source.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/worktrees.png" alt="The worktrees cleanup-triage page">
    <figcaption>Worktrees — every agent checkout triaged: what still matters, what's just eating disk.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/dashboard-edit.png" alt="The dashboard in edit mode">
    <figcaption>Dashboard — a tile grid you compose yourself; layouts persist per project.</figcaption>
  </figure>
</div>

## Build, review, code

<div class="shot-grid">
  <figure>
    <img src="/screenshots/build.png" alt="Suggested test and lint actions for the changed files">
    <figcaption>Suggested — change a test file and "run this test" appears, with its last result.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/checks.png" alt="The Checks tab with composer audit expanded">
    <figcaption>Checks — health checks with their reports inline; composer audit expanded here.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/console-pane.png" alt="The console pane with run history and a terminal">
    <figcaption>Console — every run's result, its output, and a terminal, one keystroke away.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/review.png" alt="The review page with changed files and an inline diff">
    <figcaption>Review — your branch against its base, with launchers into your own editor.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/code-graph.png" alt="A route walked through the call graph">
    <figcaption>Code graph — pick a route, walk its calls, open anything in your IDE.</figcaption>
  </figure>
</div>

## Command & control

<div class="shot-grid">
  <figure>
    <img src="/screenshots/command-palette.png" alt="The command palette open showing its groups">
    <figcaption>⌘K — actions, work, recipes, and map navigation in one list.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/hud-pr-popover.png" alt="The PR pill popover with reviewers">
    <figcaption>The HUD — live pills for branch, PR, ticket, CI; each opens a popover with the detail.</figcaption>
  </figure>
  <figure>
    <img src="/screenshots/launcher-picker.png" alt="The editor launcher picker">
    <figcaption>Launchers — Salience detects your editors and terminals; you pick the defaults.</figcaption>
  </figure>
</div>

[Back to the docs →](/docs/)
