# Docker

Salience shows the state of your project's Docker Compose services and lets you start, stop and restart them without leaving your work.

## What appears in Salience

Salience reads the Compose file at the root of your project and shows one row for each **service** it declares. Each row shows the service's image or technology (for example PostgreSQL or Redis), its ports and its current state: running, healthy, starting, unhealthy, restarting, paused, exited or stopped. A service you've never started still appears, marked as stopped.

Services appear in several places:

- **Docker tile** — the list of services with controls for each one. It's part of the built-in **Build** page template.
- **Stack** in the title bar — an icon coloured by the stack's state. Open it for the same list of services and **Start all**, **Restart all** and **Stop all**.
- **Command palette** — the **Containers** group, with actions for the whole stack or a single service.

Salience watches Docker for changes, so a container that stops or restarts updates within a moment. It doesn't poll.

A service shows as an error when it's unhealthy, dead or has exited with a non-zero code. Salience doesn't raise [situations](/docs/concepts#situations) from container state yet.

<!-- SCREENSHOT: the Docker tile for the demo project, with one service running, one stopped and the Stack popover open. -->

## Before you connect

You need:

- The `docker` command working in your terminal, whether it comes from Docker Desktop, OrbStack, Colima or another runtime.
- A Compose file at the root of your project, named `compose.yaml`, `compose.yml`, `docker-compose.yaml` or `docker-compose.yml`.

There's no account, token or setting for Docker. Salience runs the same `docker` command you do, using the PATH from your login shell. It doesn't hold any Docker credentials.

## Set up Docker

1. Add the project to Salience, or open it if it's already there. Salience detects the Compose file when the project opens.
2. Add a **Docker** tile to a page, or create a page from the **Build** template.

If the Compose file sets a `name:`, Salience uses it as the Compose project name. Otherwise it uses the name of the project folder, the same way `docker compose` does.

If you add a Compose file to a project that's already open, or change its `name:`, switch to another project and back so Salience picks it up.

## Check the connection

The Docker tile lists your services. Start one from the tile and its state changes to running.

If the tile shows **Docker daemon unreachable**, Salience can't reach Docker. Every service shows as stopped until Docker is back. Salience reconnects on its own. You don't need to restart it.

If the tile shows **No compose services.**, Salience didn't find a Compose file it can read. Check the file's name and that it's at the project root.

## Controls

Each row in the Docker tile has the controls that make sense for its state:

| Control | Shown when the service is | Runs |
| --- | --- | --- |
| **Start** | stopped, exited or never started | `docker compose up -d <service>` |
| **Resume** | paused | `docker compose unpause <service>` |
| **Restart** | running | `docker compose restart <service>` |
| **Stop** | running or paused | `docker compose stop <service>` |

The **Containers** group in the command palette adds:

- **Stack up** — `docker compose up -d`.
- **Stack down** — `docker compose down`. This removes the containers, unlike **Stop**. It appears only when something is running.
- **Container logs…** — follows the last 200 lines of a service's logs.
- **Start container…**, **Stop container…** and **Restart container…** — pick a service.

Palette actions stream their output into the console pane. Press **⌘J** to open it. The **Run output** tile shows the same output.

Every `docker` command Salience runs is listed in **Command Inspector** in the sidebar.

## Limitations

- **Compose services only.** Containers started with `docker run`, or from another Compose project, don't appear.
- **One Compose file location.** Only files at the project root are read. Compose files in subfolders, such as `packages/api/compose.yml`, aren't detected.
- **Override files and profiles.** Services defined only in an override file, such as `docker-compose.override.yml`, or behind `profiles:`, don't get their own row. `docker compose` still applies the override when Salience runs a command.
- **`extends:`, `include:` and `.env`.** These aren't read when Salience lists services. Variables without a default and `COMPOSE_PROJECT_NAME` aren't resolved.
- **Worktrees share the main checkout's stack.** Salience runs Compose commands in the project's main folder. It doesn't track a separate stack per worktree.
- **The open project only.** Salience watches Docker for the project you have open. A tile pinned to another project shows that project's last known state.
- **Podman isn't supported directly.** It may work if a Docker-compatible `docker` command is on your PATH.

## Troubleshooting

**The tile shows Docker daemon unreachable.** Start Docker Desktop, OrbStack or Colima. If `docker ps` works in your terminal but Salience still can't reach Docker, check which context is active with `docker context ls`.

**A control shows an error.** Hover over the error to see Docker's output, such as a port that's already in use. Run the same command in a terminal to see the full output.

**`Failed to execute docker compose`.** Salience couldn't find the `docker` command. Check that `which docker` works in a new terminal window, then restart Salience so it picks up your PATH.

**A service is missing.** Check that it's declared in one of the four root Compose files, not only in an override file or a profile.

**The stack shows the wrong state for a worktree.** Salience tracks the stack started from the project's main folder. A stack started from a worktree folder with a different Compose project name doesn't appear.

## Related guides

- [Connect your tools](/docs/connect-your-tools)
- [Concepts and terminology](/docs/concepts)
- [Privacy and security](/docs/privacy)
