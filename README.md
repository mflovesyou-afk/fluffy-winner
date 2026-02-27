# Temu Local Warehouse Hider

A minimal Manifest V3 browser extension that automatically hides product listings labeled **"Local Warehouse"** on `temu.com`.

## Install (Chrome/Edge/Brave)

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select this folder (`fluffy-winner`).

## How it works

- Injects a content script on all `*.temu.com` pages.
- Scans page text for `Local Warehouse` labels.
- Finds the nearest likely listing container and hides it.
- Watches for dynamically loaded content and repeats automatically.

## Notes

- Temu frequently changes its HTML structure. If labels/selectors change, the script may need updates.
- This extension only runs on Temu and does not collect or transmit data.
