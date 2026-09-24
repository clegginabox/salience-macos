#!/bin/bash
set -euo pipefail

output="${1:-salience.png}"

bounds=$(osascript -l JavaScript <<'JAVASCRIPT'
ObjC.import('AppKit');

const padding = 80;
const edgeInset = 8;
const app = Application('System Events').processes.byName('Salience');
if (!app.exists() || app.windows.length === 0) {
    throw new Error('Open Salience in a normal window before capturing.');
}
const win = app.windows[0];
const position = win.position();
const size = win.size();
const screens = $.NSScreen.screens.js;
// AppKit uses a bottom-left origin; accessibility and screenshots use top-left.
const desktopTop = screens[0].frame.origin.y + screens[0].frame.size.height;
function rect(frame) {
    return {
        x: frame.origin.x,
        y: desktopTop - frame.origin.y - frame.size.height,
        width: frame.size.width,
        height: frame.size.height
    };
}
function overlap(screen) {
    const r = rect(screen.frame);
    return Math.max(0, Math.min(position[0] + size[0], r.x + r.width) - Math.max(position[0], r.x)) *
        Math.max(0, Math.min(position[1] + size[1], r.y + r.height) - Math.max(position[1], r.y));
}
// Keep the monitor the user chose, even when its desktop coordinates are negative.
const screen = screens.reduce((best, next) => overlap(next) > overlap(best) ? next : best);
const visible = rect(screen.visibleFrame);
const safe = {
    x: visible.x + edgeInset,
    y: visible.y + edgeInset,
    width: visible.width - 2 * edgeInset,
    height: visible.height - 2 * edgeInset
};
const targetWidth = Math.floor(Math.min(1600, safe.width - 2 * padding));
const targetHeight = Math.floor(Math.min(900, safe.height - 2 * padding));
if (targetWidth <= 0 || targetHeight <= 0) {
    throw new Error('This display is too small for the requested desktop border.');
}
app.frontmost = true;
win.size = [targetWidth, targetHeight];
delay(0.7);
const actualSize = win.size();
if (actualSize[0] > safe.width - 2 * padding || actualSize[1] > safe.height - 2 * padding) {
    throw new Error('Salience did not resize enough to fit the desktop border. Exit full screen or tiling, or reduce padding.');
}
win.position = [
    Math.round(safe.x + (safe.width - actualSize[0]) / 2),
    Math.round(safe.y + (safe.height - actualSize[1]) / 2)
];
delay(0.7);
const finalPosition = win.position();
const finalSize = win.size();
const capture = [finalPosition[0] - padding, finalPosition[1] - padding,
    finalSize[0] + 2 * padding, finalSize[1] + 2 * padding];
if (capture[0] < safe.x || capture[1] < safe.y ||
    capture[0] + capture[2] > safe.x + safe.width ||
    capture[1] + capture[3] > safe.y + safe.height) {
    throw new Error('macOS moved or resized the window outside the capture area. Exit full screen or tiling and try again.');
}
capture.join(',');
JAVASCRIPT
)

/usr/sbin/screencapture -x -R"$bounds" "$output"
