# GitHub

Connect GitHub to see your pull requests, reviews, checks and issues alongside the branches they come from.

## What appears in Salience

Salience reads these from the GitHub repository your project points at:

| What | What you see |
| --- | --- |
| **Pull requests** | Title, author, state (open, merged or closed), draft, branches, reviewers and their review state, whether it can merge, size of the change and description. |
| **Conversation** | Reviews, comments and review threads on your open pull requests, including whether a thread is resolved. |
| **Commits** | The commits on each pull request. |
| **Checks** | The result of the checks on each pull request. See [CI](./ci). |
| **Issues** | Open and closed issues, as tickets. See [GitHub Issues](#github-issues). |

A pull request is linked to your local branch by name. For the branch `DEMO-2-docker`, pull request `#3` from that branch, its checks and the Jira ticket `DEMO-2` all appear together as one [unit of work](/docs/concepts#units-of-work).

### Situations

Salience raises [situations](/docs/concepts#situations) when a pull request needs something from you.

When you're asked to review:

- **Your review is requested** — more prominent once it's been waiting more than three hours.
- **New PR activity since your last engagement**, or the pull request has changed since you reviewed it.

On your own open pull requests:

- A reviewer **requested changes**.
- **CI failed on PR #3**.
- **PR #3 has merge conflicts — needs a rebase**.
- **PR #3 has unresolved review threads awaiting your reply**.
- **PR #3 is approved, green, and mergeable**.

After a pull request merges, the **Clean up** menu lists local branches and worktrees still pointing at the merged work. See [Situations](/docs/concepts#situations).

### Where GitHub appears

- **PRs** tile — pull requests grouped into sections such as **Needs my review**, **Waiting on contributor**, **Approved** and **My PR**.
- **Pull request**, **PR overview**, **PR description**, **Conversation**, **Diff** and **Commits** tiles — one pull request in detail.
- **GitHub** in the project's sidebar — your pull requests, GitHub Issues and how much of your GitHub API allowance is left.
- **Units**, **Inspector**, **Tickets** and the timeline.

Right-click a pull request and choose **Open on GitHub** to open it in your browser.

## Before you connect

You need a GitHub **personal access token**. Salience never writes to GitHub, so the token only needs read access.

Choose one of these:

- **Fine-grained token** — the narrowest option. Give it access to the repositories you'll add to Salience, with read-only access to **Pull requests**, **Contents**, **Checks**, **Commit statuses** and **Issues**. Add **Actions** read access to read failed job logs in Salience.
- **Classic token** — tick `repo`. Salience also accepts `public_repo`, `read:org` and `notifications`. It refuses a classic token with any other scope, such as `delete_repo` or `admin:org`, before storing it.

A classic token with `repo` or `notifications` also lets Salience read your GitHub notifications. With that, it notices review requests and new comments on your pull requests within about a minute. Fine-grained tokens can't read notifications, so those changes appear on the next regular refresh instead.

Only `github.com` is supported. GitHub Enterprise Server isn't.

## Connect GitHub

Connecting GitHub has two parts. First add your account to Salience, then choose which account each project uses.

### 1. Add your account

1. Open **Settings**.
2. In **Git accounts**, paste your token into **Personal access token**. **Create one on GitHub** opens GitHub's token page if you don't have one yet.
3. Optional: add a **Label**, such as `work`, to tell accounts apart.
4. Click **Connect**.

You can add more than one account, for example a personal and a work account.

<!-- SCREENSHOT: Settings → Git accounts with one connected account (login visible, token hidden). -->

### 2. Choose the account for each project

When you add a project, the **Detected Connectors** card offers GitHub if the project's remote is on GitHub. Choose an **Account**. If you only have one account, it's chosen for you.

For a project you've already added:

1. Open the project's **Project settings → Overview**.
2. In **Source**, choose the account from **Hosting account**.

A project without an account shows **unbound — pull requests and CI won't sync**.

## Check the connection

In **Settings → Git accounts**, your account shows **Connected**. **Connected — live signal off** means the account works but Salience can't read your notifications, which is expected with a fine-grained token. Hover over the badge to see why.

In **Project settings → Overview → Source**, the project shows your account, e.g. **GitHub · @paul**.

Open **GitHub** in the project's sidebar. Your pull requests appear within a few seconds of choosing the account.

The **Sync status** tile shows a **Pull requests** row.

## What Salience fetches

Salience reads the repository from the project's `origin` remote, or the first remote if there's no `origin`. SSH and HTTPS remotes both work.

- **Pull requests** — the 50 most recently updated, open, merged and closed. Salience reads further back gradually after the app starts, up to about 200.
- **Conversation, commits and details** — for open pull requests you've opened, been asked to review or are otherwise involved in.
- **Issues** — the 50 most recently updated, open and closed.

Pull requests refresh every 5 minutes for the project you're working in, every 30 minutes for projects with activity in the past week, and every 3 hours for others. Issues refresh more often, about every minute for the project you're working in.

## GitHub Issues

GitHub Issues can be your ticket source instead of [Jira](./jira). They use the same account, with no extra setup. Issues appear wherever tickets do, keyed by number, e.g. `#12`.

A branch whose name starts with an issue number, such as `12-docker-setup`, is linked to issue `#12`.

A fine-grained token needs **Issues** read access.

## Limitations

- **Read-only.** Salience never opens, comments on, approves, merges or closes anything on GitHub. Reply to reviews and resolve threads on GitHub.
- **github.com only.** GitHub Enterprise Server isn't supported.
- **Not synced:** labels, milestones and assignees on pull requests; issue labels and comments; review requests to teams. Only an issue's first assignee is kept.
- **Conversation limits.** Salience reads up to 50 reviews, 30 threads with 10 comments each, and 20 other comments per pull request. When there are more, it says so. Open the pull request on GitHub for the rest.
- **`#12` in a pull request title doesn't link to issue 12.** Put the issue number at the start of the branch name, or use GitHub's closing keywords in the pull request description, such as `Fixes #12`.
- **One repository per project.**

## Troubleshooting

**`Token not stored: it grants more than Salience needs`.** Your classic token has scopes Salience doesn't need. The message lists them. Create a fine-grained token, or a classic token with only `repo`. If you can't change the token, for example because your organisation issues it, see [Configuration](/docs/configuration) for the `accept_overprivileged` setting.

**The account shows Reconnect required.** GitHub rejected the token, usually because it expired or was revoked. Disconnect the account, create a new token and connect again. Then choose the account again for each project. Disconnecting removes it from every project that used it.

**Pull requests don't appear.** Check that:

1. The project has an account chosen in **Project settings → Overview → Source**.
2. `git remote -v` in the project folder shows a `github.com` remote.
3. A fine-grained token has access to that repository.

**Checks show Unknown.** A fine-grained token is missing **Checks** or **Commit statuses** access. See [CI](./ci#troubleshooting).

**Requests fail with `rate-limited; retry in …`.** You've used your GitHub API allowance. Salience waits until GitHub resets it. The **GitHub** page in the sidebar shows how much is left.

## Related guides

- [CI](./ci)
- [Jira](./jira)
- [Review a pull request](/docs/using/review-a-pull-request)
- [Connect your tools](/docs/connect-your-tools)
- [Concepts and terminology](/docs/concepts)
- [Privacy and security](/docs/privacy)
