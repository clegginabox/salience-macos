# Configuration

Salience reads two configuration files. One lives with your project; one lives in your home directory.

## Per-project: `salience.toml`

Drop a `salience.toml` at the root of your repo to share launchers and project-specific settings with your team. The file is plain [TOML](https://toml.io/).

### Example

```toml
[manifest]
version = "0.1.0"

[[task]]
id = "hello"
title = "Say hello"
exec = "echo hello from salience.toml"
mode = "run"
keywords = ["greeting"]

[[task]]
id = "stack-ps"
title = "Show running containers"
exec = "docker compose ps"
mode = "run"
category = "stack"
```

### Schema

#### `[manifest]`

| Key | Type | Required | Description |
|-----|------|----------|-------------|
| `version` | string | yes | Manifest version. Use `"0.1.0"` for now. |

#### `[[task]]`

A `[[task]]` is an array-of-tables — repeat for each launcher you want to expose to the command palette.

| Key | Type | Required | Description |
|-----|------|----------|-------------|
| `id` | string | yes | Stable identifier. Used internally and in URLs. |
| `title` | string | yes | The text shown in the command palette and on tiles. |
| `exec` | string | yes | The shell command to run when the task is invoked. |
| `mode` | `"run"` \| `"prefill"` | yes | `run` executes immediately; `prefill` drops the command into the user's terminal for review and Enter-to-confirm. |
| `keywords` | array of strings | no | Extra search tokens for the command palette. |
| `category` | string | no | Groups related tasks. `"stack"` is recognised for Docker tasks; other categories are free-form. |

The manifest is read fresh on every project sync — edit `salience.toml`, save, and the new tasks appear in the palette within seconds.

## Per-user: app preferences

Salience stores user preferences at `~/.salience/preferences.json`. Most settings have UI in **Settings**; the file exists so you can back it up or version-control your setup across machines.

Schema:

```json
{
  "sentry": {
    "enabled": true,
    "errors": true,
    "performance_traces": true,
    "breadcrumbs": true
  },
  "mcp": {
    "enabled": false
  }
}
```

- All four `sentry` fields default to `true` (opt-out — see [Privacy & security](/docs/privacy)).
- `mcp.enabled` defaults to `false` (opt-in — see [MCP server](/docs/mcp)).

## Credentials

Connector tokens are **not** in either of the above files — they're stored in an encrypted local SQLite database at `~/Library/Application Support/Salience/`. See [Privacy & security](/docs/privacy) for details.
