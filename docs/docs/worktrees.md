# Worktrees

If you use git worktrees — especially with AI coding agents that each get their own checkout — they accumulate. The Worktrees page (sidebar → **Dev Tools → Worktrees**) is a cleanup-triage list: every worktree in the project with its PR and CI state joined on, so you can see at a glance which checkouts still matter and which are just eating disk.

![The Worktrees page: filter chips, per-row status phrases, disk sizes](/screenshots/worktrees.png)

## The list

Each row is one worktree, showing:

- **Branch and path** — with per-row actions: open in editor, open terminal there, reveal in Finder, copy path
- **Uncommitted changes** — files changed and untracked counts, fetched fresh when you open the page (never stored)
- **Disk size** — measured automatically on your first visit per project (a few at a time; results are cached, so later visits are instant), with a per-row re-measure action
- **A single status phrase** — worst thing first: *CI failing* → *uncommitted changes* → *N commits unpushed* → *PR open* → *PR merged/closed* → branch only. Where the phrase is anchored on a PR, it links there.

The header sums it up: worktree count, total disk usage, and when the last sync ran. **Re-sync** re-scans checkouts (so removed or added worktrees reconcile) and re-runs the diffstat batch.

## Filters

A search box filters by branch or path, and four chips slice the list:

| Chip | Shows |
|------|-------|
| All | Everything |
| Needs attention | Rows whose status warrants a look |
| Idle 7d+ | Worktrees untouched for a week or more |
| Merged | Worktrees whose PR chapter is over |

## Reclaiming a worktree

Salience decides whether each worktree is safe to reclaim, with blocker precedence: **unsaved work → unpushed commits → PR open → no PR**. While the diffstat is still loading, the verdict stays *unknown* — never optimistically reclaimable.

Removal itself follows the no-destructive-defaults rule: Salience doesn't delete anything. **Reclaim** prepares a `git worktree remove '<path>'` command for your terminal — copied to your clipboard with a terminal opened at the project root — and you run it yourself. Note this removes the *worktree*, not the branch: a closed-but-unmerged branch survives reclaim.

## Where else worktrees appear

The [Map](/docs/map) has a dedicated worktree island at network altitude, and the station peek card can materialise a new worktree for any branch — useful for handing an agent its own checkout without leaving the map.
