# Connect your tools

Salience pulls signal from the tools you already use. Each connector takes a token, stores it locally (encrypted SQLite at `~/Library/Application Support/clegginabox.salience/`), and uses it to fetch entities. Credentials never leave your machine.

Two connectors store no secret at all: AWS reads the profiles the AWS CLI already knows about, and Docker just runs the `docker` binary that's on your PATH.

| Tool | Status | Auth |
|------|--------|------|
| GitHub | Full (PRs, reviews, CI) | Personal access token (Bearer) |
| GitHub Issues | Tickets | Rides the GitHub token — no extra setup |
| Jira Cloud | Tickets + assignment | Email + API token, per project |
| AWS (ECR + ECS) | Images, clusters, task definitions, running tasks | Named profile from `~/.aws` — no secret stored |
| Sentry | Unresolved issues | Auth token + organization |
| Docker / Compose | Compose services + containers | None — local `docker` CLI |
| Bitbucket | Temporarily unavailable | App password or access token |
| GitLab | Not started | — |

## Where connectors are configured

Two places, and which one depends on whether the credential is shared:

- **Settings** — global credentials, shared by every project on this machine. GitHub lives here.
- **Project settings** — per-project connections. Jira, AWS, and Sentry live here.

Sentry is a hybrid: the token and organization are stored once per install, but which Sentry projects a given project tracks is per-project.

## GitHub

### Token type

**Fine-grained personal access tokens are recommended.** Grant the target repos read access for Pull requests, Contents, and Checks. Fine-grained tokens (and GitHub App tokens) don't advertise scopes, so Salience accepts them as-is — they're least-privilege by construction.

**Classic PATs are accepted, but only narrow ones.** Salience checks the `x-oauth-scopes` header at connect time and refuses any classic token granting more than it needs. The scopes it will accept are:

- `repo` — the floor for private-repo PR and CI reads on classic tokens
- `public_repo` — the strictly narrower public-only subset
- `read:org` — tolerated for org visibility

Anything else is excess. If your token carries, say, `delete_repo` or `admin:org`, the connect attempt fails and the error names exactly which scopes to remove. Nothing is stored — the refusal happens before the token touches the database.

Salience does **not** need write scopes. It never opens, closes, comments on, or merges PRs.

**Overriding the refusal.** If you're stuck with an org-issued broad PAT you can't re-mint, set this in `~/.salience/preferences.json`:

```json
{
  "credentials": {
    "accept_overprivileged": true
  }
}
```

There's no UI switch for this — it's a hand-edited advanced knob, deliberately. See [Configuration](/docs/configuration).

### Set up

1. Visit [github.com/settings/tokens](https://github.com/settings/tokens).
2. Prefer **Fine-grained tokens → Generate new token**. Name it `Salience`, pick the repos, and grant read on Pull requests, Contents, and Checks. (If you use a classic PAT instead, tick only `repo`, or nothing at all for public repos.)
3. Set an expiry that suits you — 90 days is reasonable.
4. **Generate token** and copy it.
5. In Salience, open **Settings → GitHub**, paste the token, and save.

Within a minute open PRs and review requests for any project pointing at a GitHub remote will appear in **My Work**.

### What gets synced

- Open pull requests on repos you've added as projects
- Review requests, approvals, change requests
- CI status for the head commit (Checks API + Actions workflow runs)
- Refreshes every 5 minutes; first sync runs immediately on token save

## GitHub Issues

GitHub Issues is an alternative ticket source to Jira, and it needs no setup of its own. It rides the same GitHub token from **Settings → GitHub**.

There's no settings page for it. A project gets Issues automatically when all three of these are true:

1. The project has a git remote Salience can detect
2. That remote is a GitHub host
3. A GitHub token is connected

Issues then flow into the same ticket surfaces Jira tickets do — Salience's ticket model doesn't branch on where a ticket came from. Up to 50 issues per repo are fetched per pass, most-recently-updated first, on the same 5-minute cadence as PRs.

Labels and per-issue comments aren't synced yet.

## Jira Cloud

Jira Cloud uses an API token paired with your Atlassian account email. The token grants the same permissions your account has — Salience reads tickets you can see, nothing more.

Jira credentials are stored **per project**, so different workspaces can point at different Jira instances.

### Set up

1. Visit [id.atlassian.com/manage-profile/security/api-tokens](https://id.atlassian.com/manage-profile/security/api-tokens).
2. **Create API token**. Name it `Salience`. Copy it.
3. In Salience, open the project's **Project settings → Jira** and fill in the credentials card. All three fields are required:
   - **Base URL** — your Atlassian site, e.g. `https://acme.atlassian.net`
   - **Email** — the Atlassian account email the token belongs to (must match)
   - **API token** — paste the token
4. **Connect.** The Boards card appears once the credentials validate.
5. **Boards** — tick the boards that should contribute tickets to this project, then **Save board selection**. Tickets from active sprints on the selected boards sync automatically.
6. **Status mappings** (optional) — this card only shows up after a first sync has observed some statuses. Map your Jira workflow statuses to Salience's categories. Anything you leave alone falls back to regex-based defaults, so you can skip this entirely and come back later.

There's no edit-in-place on the credentials card. Changing the base URL means disconnecting and reconnecting.

### What gets synced

- Tickets from active sprints on your selected boards
- Tickets matching branch prefixes Salience detects in the active project (e.g. `LW-446` → looks up `LW-446` in Jira)
- Refreshes every 5 minutes

## AWS

The AWS connector covers ECR (container images) and ECS (clusters, task definitions, running tasks). It's configured per project at **Project settings → AWS**.

**Salience stores no AWS secret.** It reads the named profiles the AWS CLI already knows about — from `~/.aws/config` and `~/.aws/credentials` — and asks the SDK to resolve credentials the same way `aws` would. Access keys, SSO sessions, and assumed roles all stay where they are.

### Set up

1. Make sure you have a working profile. If the picker comes up empty, run `aws configure` or `aws sso login` in a terminal and hit **Refresh**.
2. In **Project settings → AWS**, pick a **Profile** from the detected list and enter a **Region**.
3. **Connect.** Salience calls `sts:GetCallerIdentity` to verify the profile works and to capture the account ID. That's the only call it makes at this point — nothing in your account is scanned yet.
4. Scope in what this project should track. Three pickers appear once you're connected:
   - **ECR repositories** — only picked repositories have their image history fetched
   - **ECS clusters** — only picked clusters are refreshed
   - **ECS task definitions** — cluster-scoped: the picker only surfaces families actually attached to a service on one of your in-scope clusters, rather than every family in the account

Scoping is the whole point of the design. Connecting is authentication-only; nothing is read until you explicitly add it.

### Least-privilege policy

The **Permissions** card lists every AWS API action Salience can call with your profile, each with a plain-English reason. **Copy least-privilege policy** puts a ready-to-attach IAM policy document on your clipboard, built from that same list. If you'd rather not point Salience at a broad profile, attach the policy to a dedicated role and use that instead.

The policy grants read-only access and nothing else — `Describe*`, `List*`, and the one `sts:GetCallerIdentity` call:

| Service | Actions |
|---------|---------|
| STS | `GetCallerIdentity` |
| ECR | `DescribeRepositories`, `DescribeImages` |
| ECS | `ListClusters`, `DescribeClusters`, `ListServices`, `DescribeServices`, `ListTasks`, `DescribeTasks`, `DescribeTaskDefinition` |

There are no write, delete, or deploy actions in it. Resource ARNs use `*` placeholders until you connect; once a profile is attached the policy is rendered against your actual account and region.

## Sentry

Sentry surfaces unresolved issues for the projects you pick. Configured at **Project settings → Sentry**.

The token and organization are stored once per install — one Sentry org per Salience — and then each project picks which Sentry projects it tracks. Access is read-only.

### Set up

1. Create a Sentry auth token with only these scopes: `org:read`, `project:read`, `event:read`.
2. In **Project settings → Sentry**, fill in:
   - **Token** — the auth token
   - **Organization** — your org slug, e.g. `my-org`
   - **Base URL** — leave it pointing at `https://sentry.io`, or point it at your own instance if you're self-hosted
3. **Connect.**
4. In the **Sentry projects** card, toggle on the projects this Salience project should track. Only picked projects have their unresolved issues fetched; nothing else in the organization is scanned.

Issues for scoped projects show up on the Timeline and Overview, and error paths render on the [map](/docs/map).

## Docker / Compose

No auth, no token, no setup. Salience shells out to the `docker` binary on your PATH — it doesn't talk to the Docker socket directly and it doesn't hold any Docker credentials. If `docker` works in your terminal, it works here.

Compose files are detected from the project. The file watcher looks for these at the **project root**:

- `compose.yaml`, `compose.yml`
- `docker-compose.yaml`, `docker-compose.yml`

Composes in subdirectories (`packages/api/compose.yml`) and override files aren't picked up yet. The project name comes from an explicit `name:` in the YAML if there is one, otherwise the directory name.

Once detected, compose services show up in three places:

- The **Stack** tab on the [Build page](/docs/build) — one row per container with its state, health, and first port, plus per-service and whole-stack controls
- The [command palette](/docs/command-palette), under **Containers** — stack up/down, and start, stop, restart, or tail logs for an individual service. These stream into the console pane.
- The [map](/docs/map), where each declared service is a building whose power state comes from the matched running container. The right-click command wheel there copies `docker compose` commands to your clipboard rather than running them.

## Bitbucket

**The Bitbucket connection UI is temporarily unavailable.** The settings card is commented out in current builds, so there's no way to enter credentials right now. The backend still ships — PR and review fetching works the moment the card comes back. The setup steps below are kept for when it does.

Salience accepts either an **App Password** (recommended — most common) or a **workspace/repository access token**.

### Option A: App Password (recommended)

1. Visit [bitbucket.org/account/settings/app-passwords/](https://bitbucket.org/account/settings/app-passwords/).
2. **Create app password**. Name it `Salience`.
3. Tick these permissions:
   - **Account: Read**
   - **Repositories: Read**
   - **Pull requests: Read**
4. **Create** and copy the password (Bitbucket only shows it once).
5. In Salience, open **Settings → Bitbucket**, enter your Bitbucket **username** and paste the app password into **App password**. Save.

### Option B: Workspace/Repository access token

1. From your workspace settings, create a new access token with **Pull requests: Read** and **Repositories: Read** scopes.
2. Copy the token.
3. In Salience, open **Settings → Bitbucket**, leave username blank, paste the token into **Token**. Save.

If both username + app_password and a token are present, Salience uses the app password (Basic auth).

### Known limitations

- CI status is not wired up yet — it's tracked at [issues](https://github.com/clegginabox/salience-macos/issues).

## GitLab

GitLab is not yet supported. Track progress at [issues](https://github.com/clegginabox/salience-macos/issues).

## How often things refresh

| What | Cadence |
|------|---------|
| Git branches and worktrees | Driven by a `.git` file watcher, so branch switches surface almost immediately. A 5-minute poll runs as a fallback for anything the watcher misses. |
| Pull requests, Jira tickets, GitHub Issues | Every 5 minutes |
| Sentry issues, ECR images, ECS clusters / task definitions / tasks | Every 5 minutes |

Creating a project or saving a credential wakes the relevant producer straight away, so you don't wait out a full interval for the first sync.

## Revoking access

Salience credentials live in an encrypted local SQLite database at `~/Library/Application Support/clegginabox.salience/`. To fully revoke a connector:

1. Click **Disconnect** — in **Settings** for GitHub, or in **Project settings** for Jira, AWS, and Sentry.
2. Revoke the token at the source (GitHub settings, Atlassian profile, Sentry auth tokens) for completeness.

AWS needs nothing revoked in Salience beyond disconnecting, since the credential was never Salience's to begin with — it's whatever your AWS CLI profile resolves to.

[More on where your data lives →](/docs/privacy)
