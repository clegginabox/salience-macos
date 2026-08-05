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

Once the server is running, **Settings → MCP** shows both values directly — the HTTP URL and the Bearer token, ready to copy. That's the easiest place to get them.

They're also on disk:

| File | Contents |
|------|----------|
| `~/Library/Application Support/clegginabox.salience/mcp/port` | The port number, one line. World-readable. Written on start, removed when you disable the server. |
| `~/Library/Application Support/clegginabox.salience/mcp/token` | The 32-character Bearer token, one line. `0o600` permissions. Survives disable and restart. |

The server only accepts loopback `Host` headers, so it can't be reached from another machine on your network even if you forward the port. Token comparison is constant-time, and request bodies are capped at 16 MiB.

### Rotating the token

**Settings → MCP** has a **Rotate token** button, available while the server is running. It mints a fresh token, writes it to disk, and swaps it into the live server immediately — any client still holding the old token starts getting `401`s, so you'll need to reconfigure them. Use it if you think the token has leaked.

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

Replace `<port>` and `<token>` with the values from **Settings → MCP**. Restart Claude Desktop after editing the config.

Note that the port is re-allocated every time the server starts, so it changes across app restarts. The token doesn't.

### Cursor

Cursor's MCP support is evolving. Check [cursor.com/docs](https://cursor.com/docs) for the current HTTP MCP setup; the URL and `Authorization` header above are the values you'll need.

## Tools available today

Every tool is read-only. Tools that take a `project` resolve it by name (case-insensitive) or by exact id; an unknown or ambiguous name comes back with the candidate projects so your agent can retry.

### Entities and correlations

| Tool | What it does |
|------|--------------|
| `list_entity_types` | The orientation call. With no argument, lists every entity type present with its count. Pass a `type_name` to also get that one type's full JSON schema. |
| `list_entities` | All entities of one type (`git.branch`, `vcs.pull_request`, `ticket`, …), optionally filtered by `project_id`. Id-sorted, `limit` defaults to 50 and caps at 500. There's no offset paging — a `truncated: true` result means narrow the query. |
| `get_entity` | One entity's full JSON by type name + id. Ids are usually `<project_id>:<local>`; a few, like Jira ticket keys, are global. |
| `get_correlations_for_entity` | The raw correlation edges touching an entity, both directions. Edges only, no neighbour data. |
| `describe_entity` | The entity plus its 1-hop neighbours, grouped by correlation kind and direction, with each neighbour's data inlined. The best answer to "what is this connected to?" |
| `my_work` | Curated current work for a project: your own meaningful work plus reviews you owe, scratch branches and backlog noise removed, cross-repo siblings collapsed, ordered by urgency. Also returns a backlog count and the project's loud situations. `project` is optional — omit for all projects. |
| `recent_activity` | A project's recorded event timeline, newest first — branches created and advanced, PRs opened and closed, tickets moved, CI completed, deploys. `since` (RFC3339 UTC) filters by arrival time; `limit` defaults to 50, caps at 200. |

`my_work` and `recent_activity` pair up: one is current state, the other is the log. Together they're enough to write a stand-up without inventing anything.

### Code graph (PHP only)

These read the code graph described in [Code Graph](/docs/code-graph). **PHP is the only language indexed today**, and each tool needs the target project to have been ingested — otherwise you'll get a clean "not in the graph" error rather than a silent empty result.

All of them return locations and signatures — file, line, stable id, kind, fqn, modifiers — and never source text. Paths are repo-root-relative; your agent reads the file itself. Symbol resolution is **case-sensitive**.

| Tool | What it does |
|------|--------------|
| `find_definition` | Resolve a symbol to its definition site(s). Accepts a fully-qualified name (`App\Service\UserService::save`), a bare `Class::member`, or a bare name. Returns every match. |
| `get_symbol` | One symbol's metadata by the stable id any other tool returned. |
| `get_file_outline` | The symbols a file defines — classes, interfaces, traits, enums, functions, methods — in source order. A file's shape without reading it. |
| `find_implementations` | Every type that implements or extends a given interface or class, **transitively**. The downward hierarchy query grep can't do. |
| `find_supertypes` | The upward mirror: a type's full ancestor chain — parent classes, interfaces, traits — transitively. Each hit says which relation reached it and whether it resolved inside your source or stopped at a vendor boundary. |
| `find_references` | Every symbol that references a given one, grouped by *how*. Optional `kinds` filter. |
| `find_callees` | The forward mirror: every symbol a given symbol references. Same `kinds` taxonomy. |
| `describe_symbol` | One-shot orientation — definition sites plus both directions of neighbours, grouped by edge kind. Saves the find_definition → find_references → find_callees dance. |

The edge kinds `find_references` and `find_callees` group by, and accept in `kinds`:

| Kind | Meaning |
|------|---------|
| `calls` | A method or function that calls this. Doubles as find-callers. For a class, this is who instantiates it — `new X()` records a `calls` edge on class `X` whether or not `X` declares a constructor. |
| `typehints` | The symbol appears as a type in a signature. |
| `type_ref` | The maximal coupling surface — high volume and deliberately imprecise. Includes every case where a body touches *any* member of the class. Useful for "what's coupled to this at all", noisy for anything else. |
| `implements` / `extends` / `uses` | The direct one-hop declaration, as opposed to the transitive `find_implementations` / `find_supertypes`. |
| `overrides` | A method that overrides or implements this method. |

Results lead with the precise kinds and trail with `type_ref`, so the result cap never buries the signal, and a `by_kind` map carries true per-kind totals even when the list is truncated.

The tool surface evolves as Salience grows; check the in-app **Settings → MCP** page for the currently registered list.

## Privacy note

The MCP server runs locally on loopback. Salience itself does not transmit MCP traffic over the internet. Clients you configure (Claude Desktop, Cursor, etc.) may, in turn, send your prompts and tool results to their model provider — that's between you and your client. Salience's role ends at the loopback boundary.

See [Privacy & security](/docs/privacy) for the full picture.
