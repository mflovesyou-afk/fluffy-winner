# Temu Local Warehouse Hider

A Manifest V3 browser extension that automatically hides product listings labeled **"Local Warehouse"** on `temu.com`.

## What this folder should contain

Before loading in Chrome, make sure these files are in the **same folder**:

- `manifest.json`
- `content.js`
- `README.md` (optional, just documentation)

## Install in Chrome (step-by-step)

1. Download or copy this project to your computer (for example: `C:\Users\you\Downloads\fluffy-winner`).
2. Open Chrome.
3. Go to `chrome://extensions`.
4. Turn on **Developer mode** (top-right toggle).
5. Click **Load unpacked**.
6. Select the project folder that contains `manifest.json`.
7. You should now see **Temu Local Warehouse Hider** in your extension list.

## Verify it is working

1. Open `https://www.temu.com/`.
2. Refresh the page once after enabling the extension.
3. Browse/search products.
4. Listings with a visible `Local Warehouse` label should be hidden automatically.

## If it doesn’t work

- Make sure the extension is **enabled** in `chrome://extensions`.
- Click the extension’s **Reload** button after changing any file.
- Make sure you loaded the correct folder (the one containing `manifest.json`).
- Temu changes HTML frequently; if labels or structure changed, selector logic may need updates.

## How it works

- Injects a content script on all `*.temu.com` pages.
- Scans page text for `Local Warehouse` labels.
- Finds the nearest likely listing container and hides it.
- Watches for dynamically loaded content and repeats automatically.

## Privacy

- Runs only on `temu.com` pages.
- Does not collect, store, or transmit data.
