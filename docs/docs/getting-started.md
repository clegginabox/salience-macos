# First run

The fastest way to understand Salience is to point it at a real project and watch entities appear.

## 1. Add a project

Open Salience and click **Add project** in the sidebar. Pick a directory on your machine — typically the root of a git repository. Salience will scan it for a `.git` folder and (optionally) a `salience.toml`.

If the directory is a git repository, your local branches show up immediately as entities of type `git.branch`. No tools connected yet — this is local data only.

## 2. Connect one tool

Open **Connections** in the sidebar and pick one tool to start with. GitHub is the most common starting point:

1. Generate a personal access token at [github.com/settings/tokens](https://github.com/settings/tokens) — `repo` scope is enough for a private repo, no scope is needed for a public one.
2. Paste it into the GitHub field in Salience.
3. Approve with Touch ID.

Within a minute, open pull requests for your project show up as `vcs.pull_request` entities.

## 3. Look at the result

Switch to **My Work** in the sidebar. You should see a kanban-style view that joins your branches, PRs, and (if a token-bearing CI is configured) build statuses. This view _is_ the entity store, rendered.

If anything looks empty, give it 30 seconds — the GitHub sync runs every 5 minutes, but the first one fires immediately on token save.

## Next

- **[Connect your tools →](/docs/connect-your-tools)** — full list of supported integrations
- **[MCP server →](/docs/mcp)** — expose this same context to your AI agent
- **[Privacy & security →](/docs/privacy)** — where your data lives
