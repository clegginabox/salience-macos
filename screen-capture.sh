#!/bin/bash
set -euo pipefail

output="${1:-salience.png}"

bounds=$(osascript <<'APPLESCRIPT'
tell application "System Events"
    tell process "Salience"
        set frontmost to true
        tell front window
            set size to {1600, 900}
            set position to {-1760, 90}
            delay 0.5

            set {px, py} to position
            set {w, h} to size
        end tell
    end tell
end tell

set padding to 80
return ((px - padding) as text) & "," & ¬
    ((py - padding) as text) & "," & ¬
    ((w + padding * 2) as text) & "," & ¬
    ((h + padding * 2) as text)
APPLESCRIPT
)

/usr/sbin/screencapture -x -R"$bounds" "$output"
