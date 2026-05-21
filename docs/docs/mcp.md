# MCP server

Salience exposes its correlated context — your branches, PRs, tickets, build status, code-graph queries — to MCP-aware tools like Claude Desktop, Codex, and Cursor. Stop copying and pasting context: your agent gets the same view of your work as you do.

The MCP server is **off by default**. You opt in.

## Enable it

1. Open **Settings → MCP** in Salience.
2. Toggle **Enable MCP server** on.

Salience starts an HTTP server bound to `127.0.0.1` on a random free port, writes the port and a Bearer token to disk, and the server stays up until you toggle it off (or quit the app).

The token persists across enable/disable cycles and app restarts — toggling MCP off and on does not invalidate clients you've already configured.

## How clients connect

The MCP server is reachable at:

```
http://127.0.0.1:<port>/mcp
```

With the header:

```
Authorization: Bearer <token>
```

Both values are read from disk:

| File | Contents |
|------|----------|
| `~/Library/Application Support/Salience/mcp/port` | The port number, one line. World-readable. |
| `~/Library/Application Support/Salience/mcp/token` | The 32-character Bearer token, one line. `0o600` permissions. |

The server only accepts loopback `Host` headers, so it can't be reached from another machine on your network even if you forward the port.

### Generic HTTP MCP client

Any MCP client that speaks the streamable-HTTP transport can point at:

- **URL:** `http://127.0.0.1:<port_from_file>/mcp`
- **Header:** `Authorization: Bearer <token_from_file>`

### Claude Desktop

Claude Desktop's MCP support is primarily stdio. For HTTP MCP servers, the most portable approach is the `mcp-remote` bridge. Add to `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "salience": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "http://127.0.0.1:<port>/mcp",
        "--header",
        "Authorization: Bearer <token>"
      ]
    }
  }
}
```

Replace `<port>` and `<token>` with the values from `~/Library/Application Support/Salience/mcp/{port,token}`. Restart Claude Desktop after editing the config.

### Cursor

Cursor's MCP support is evolving. Check [cursor.com/docs](https://cursor.com/docs) for the current HTTP MCP setup; the URL and `Authorization` header above are the values you'll need.

## Tools available today

### Entity store

- **`list_entity_types`** — list all entity types in the store (e.g. `git.branch`, `vcs.pull_request`, `ticket`, `docker.container`, `situation`).
- **`list_entities`** — list entities of a specific type, with an optional `project_id` filter.
- **`get_entity`** — fetch a single entity by type + ID.
- **`get_snapshot`** — full snapshot across all entity types. Can be large — prefer `list_entities` with a type filter when you can.

### Correlations

- **`get_correlations_for_entity`** — raw correlation edges touching an entity (bidirectional). Returns edges only.
- **`describe_entity`** — entity plus its 1-hop neighbours, grouped by correlation kind and direction. The best starting point for "what is this connected to?" questions — it dereferences neighbour data inline.

### PHP code graph

These tools are available when a connected project has a PHP code graph indexed.

- **`find_callers`** — find functions and methods that call a given fully-qualified PHP name (e.g. `App\\Service\\UserService::save`).
- **`find_implementations`** — find every PHP class that implements a given interface.
- **`type_of`** — resolve a PHP fully-qualified name to its kind and metadata.
- **`references_in_file`** — find references to a name within a single PHP file.

The tool surface evolves as Salience grows; check the in-app **Settings → MCP** page for the currently registered list.

## Privacy note

The MCP server runs locally on loopback. Salience itself does not transmit MCP traffic over the internet. Clients you configure (Claude Desktop, Cursor, etc.) may, in turn, send your prompts and tool results to their model provider — that's between you and your client. Salience's role ends at the loopback boundary.

See [Privacy & security](/docs/privacy) for the full picture.
