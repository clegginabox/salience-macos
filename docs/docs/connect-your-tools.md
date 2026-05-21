# Connect your tools

Salience pulls signal from the tools you already use. Each connector takes a token, stores it locally (encrypted SQLite at `~/Library/Application Support/Salience/`), and uses it to fetch entities. Credentials never leave your machine.

| Tool | Status | Auth |
|------|--------|------|
| GitHub | Full (PRs, reviews, CI) | Personal access token (Bearer) |
| Bitbucket | PRs + reviews (CI coming) | App password (preferred) or access token |
| Jira Cloud | Tickets + assignment | Email + API token |
| GitLab | Not started | — |

## GitHub

### Required scopes

- **Private repos:** classic PAT with `repo` scope is enough for the endpoints Salience calls (`/repos/.../pulls`, `/repos/.../commits/{sha}/check-runs`, `/repos/.../actions/runs`, `/user`).
- **Public repos only:** any classic PAT with no scopes works — Salience always sends the Authorization header.
- **Fine-grained tokens** also work; grant the target repos read access for Pull requests, Contents, and Checks.

Salience does **not** need write scopes. It never opens, closes, comments on, or merges PRs.

### Set up

1. Visit [github.com/settings/tokens](https://github.com/settings/tokens).
2. **Generate new token (classic)**. Name it `Salience`. Set an expiry that suits you (90 days is reasonable).
3. Tick `repo` (for private repos) or leave all scopes unchecked (for public only).
4. **Generate token** and copy it.
5. In Salience, open **Connections → GitHub**, paste the token, and save.

Within a minute open PRs and review requests for any project pointing at a GitHub remote will appear in **My Work**.

### What gets synced

- Open pull requests on repos you've added as projects
- Review requests, approvals, change requests
- CI status for the head commit (Checks API + Actions workflow runs)
- Refreshes every 5 minutes; first sync runs immediately on token save

## Bitbucket

Salience accepts either an **App Password** (recommended — most common) or a **workspace/repository access token**.

### Option A: App Password (recommended)

1. Visit [bitbucket.org/account/settings/app-passwords/](https://bitbucket.org/account/settings/app-passwords/).
2. **Create app password**. Name it `Salience`.
3. Tick these permissions:
   - **Account: Read**
   - **Repositories: Read**
   - **Pull requests: Read**
4. **Create** and copy the password (Bitbucket only shows it once).
5. In Salience, open **Connections → Bitbucket**, enter your Bitbucket **username** and paste the app password into **App password**. Save.

### Option B: Workspace/Repository access token

1. From your workspace settings, create a new access token with **Pull requests: Read** and **Repositories: Read** scopes.
2. Copy the token.
3. In Salience, open **Connections → Bitbucket**, leave username blank, paste the token into **Token**. Save.

If both username + app_password and a token are present, Salience uses the app password (Basic auth).

### Known limitations

- CI status is not wired up yet — it's tracked at [issues](https://github.com/clegginabox/salience-macos/issues).

## Jira Cloud

Jira Cloud uses an API token paired with your Atlassian account email. The token grants the same permissions your account has — Salience reads tickets you can see, nothing more.

### Set up

1. Visit [id.atlassian.com/manage-profile/security/api-tokens](https://id.atlassian.com/manage-profile/security/api-tokens).
2. **Create API token**. Name it `Salience`.
3. Copy the token.
4. In Salience, open **Connections → Jira** and enter:
   - **Site URL** — your Atlassian site, e.g. `https://acme.atlassian.net`
   - **Email** — the Atlassian account email the token belongs to (must match)
   - **API token** — paste the token
5. Save.

### What gets synced

- Tickets assigned to you
- Tickets matching branch prefixes Salience detects in the active project (e.g. `LW-446` → looks up `LW-446` in Jira)
- Refreshes every 5 minutes

## GitLab

GitLab is not yet supported. Track progress at [issues](https://github.com/clegginabox/salience-macos/issues).

## Revoking access

Salience credentials live in an encrypted local SQLite database at `~/Library/Application Support/Salience/`. To fully revoke a connector:

1. Open **Connections** in Salience and click **Disconnect**.
2. Revoke the token at the source (GitHub settings, Bitbucket app passwords, Atlassian profile) for completeness.

[More on where your data lives →](/docs/privacy)
