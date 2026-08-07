# Keyboard shortcuts

Every shortcut in Salience, in one place. There are only two keys worth memorising — **⌘K** for the [command palette](/docs/command-palette) and **⌘J** for the [console pane](/docs/build#the-console-pane); those two are the app's only global bindings. Everything else below belongs to the surface it's listed under.

## Everywhere

| Key | Action |
|-----|--------|
| ⌘K (or Ctrl+K) | Toggle the [command palette](/docs/command-palette) |
| ⌘J | Toggle the [console pane](/docs/build#the-console-pane) |

## The HUD

The [HUD](/docs/command-palette#the-hud) sits above every page; each pill opens its popover with its own key. Only one popover is open at a time.

| Key | Pill |
|-----|------|
| ⌘S | Branch — opens the branch switcher |
| ⌘1 | Ticket |
| ⌘2 | PR |
| ⌘3 | CI |
| ⌘4 | Stack |
| ⌘5 | Cloud |

## Command palette (while open)

| Key | Action |
|-----|--------|
| ↑ / ↓ | Move the selection |
| Enter | Run the highlighted command (rows ending in `…` drill in) |
| ⌘[ or ⌘← | Back one level — works even with a query typed |
| Backspace | Back one level, when the input is empty |
| ⌘K | Close the palette |
| Esc | Close everything |

## Branch switcher (while open)

Open it with ⌘S, or by clicking the branch in the HUD.

| Key | Action |
|-----|--------|
| ↑ / ↓ | Move the highlight — the HUD [shadow-previews](/docs/command-palette#branch-switcher) that branch's ticket, PR and CI; nothing is checked out |
| Enter | Check out the highlighted branch |
| Esc | Close and snap back to the real branch |

## The Map

| Key | Action |
|-----|--------|
| Mouse wheel | Zoom between desk and network altitude |
| ← / → | Cycle islands (network altitude only) |
| Home | Snap the camera home |
| Esc | Close one layer per press: skips a ride, then closes the peek card or ring menu, then exits the island, then snaps home; at desk altitude, clears the newest error path, then the selection |

## Build

| Key | Action |
|-----|--------|
| ⌘I | Expand / collapse the ticket tile (Build page only) |
| Esc | Collapse the ticket tile |
| Enter | Commit — in the commit message field, with changes staged |

## Code Graph

| Key | Action |
|-----|--------|
| ⌘-click (or Ctrl-click) a node | Open the file in your editor, positioned at the first walked method |

---

One honest footnote: the palette prints `⌃L` beside **Clear console**, but that key isn't actually bound — use the palette entry.
