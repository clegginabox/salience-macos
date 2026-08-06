# First run

The fastest way to understand Salience is to point it at a real project and watch entities appear.

## 1. Add a project

Open Salience and click **Add project** in the sidebar. Pick a directory on your machine — typically the root of a git repository. Salience will scan it for a `.git` folder and (optionally) a `salience.toml`.

If the directory is a git repository, your local branches show up immediately as entities of type `git.branch`. No tools connected yet — this is local data only.

Back on **Home**, each project renders as a card showing its checked-out branch and that branch's state — and once situations start firing, a **Needs attention** feed sits above the cards collecting everything that wants a look, across all your projects.

![Home: the Needs attention feed and per-project cards with branch state](/screenshots/home.png)

## 2. Connect one tool

Open **Connections** in the sidebar and pick one tool to start with. GitHub is the most common starting point:

1. Generate a personal access token at [github.com/settings/tokens](https://github.com/settings/tokens) — `repo` scope is enough for a private repo, no scope is needed for a public one.
2. Paste it into the GitHub field in Salience.
3. Save.

Within a minute, open pull requests for your project show up as `vcs.pull_request` entities.

## 3. Look at the result

Open **Map** in the sidebar, under Dev Tools. The branch you're on renders as a canvas of the files you've changed; zoom out and you're at network altitude, where your branches, worktrees and remotes sit as islands. ⌘K → **My branches island** takes you straight there.

When you want the same work as a list, **My Work** joins your branches, PRs, and (if a token-bearing CI is configured) build statuses into a kanban view. Both surfaces _are_ the entity store, rendered.

If anything looks empty, give it 30 seconds — the GitHub sync runs every 5 minutes, but the first one fires immediately on token save.

## Next

- **[The Map →](/docs/map)** — the spatial view your work lives on
- **[Connect your tools →](/docs/connect-your-tools)** — full list of supported integrations
- **[MCP server →](/docs/mcp)** — expose this same context to your AI agent
- **[Privacy & security →](/docs/privacy)** — where your data lives
