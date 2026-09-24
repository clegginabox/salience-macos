# First run

The fastest way to understand Salience is to point it at a real project and watch entities appear.

## 1. Add a project

Open Salience and click **New project**. 

Pick a git repository on your machine. Salience will scan it for a `.git` folder and (optionally) a `salience.toml`.

Salience will automatically find local branches as `git.branch` and worktrees as `git.worktree`.

![Project overview](/concepts/concepts-project.png)

## 2. Set up a connector

Open **Project Settings** in the sidebar and pick a connector to start with. GitHub is the most common starting point:

1. Generate a personal access token at [github.com/settings/tokens](https://github.com/settings/tokens) - Salience refuses a classic token that grants anything beyond `repo`, `public_repo`, `read:org` and `notifications`.
2. Paste the token into **Personal access token**, optionally add a label(e.g. "work"), and press **Connect**.

Select the account you just added under **This project's account**.

![Project overview](/connectors/config-github.png)

Salience never writes to GitHub. It only reads, and it never marks notifications as read.

## 3. Look at the result

Open **Entities** in the sidebar. The **Units** tab joins each branch with its PR, ticket and CI checks into one row.

![A unit of work: linked branch, PR and failing CI checks](/getting-started/entities.png)

Salience continually updates as it receives updates from connectors.

## Next

- **[Connect your tools →](/docs/connect-your-tools)** — full list of supported integrations
- **[MCP server →](/docs/mcp)** — expose this same context to your AI agent
- **[Privacy & security →](/docs/privacy)** — where your data lives
