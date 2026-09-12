# BLB Auto Hyperlinker

User Setup & Functionality Guide (Google Docs & MS Word Compatible)

## 1. Overview & Functionality

**BLB Auto Hyperlinker** is a custom browser extension for Blue Letter Bible (BLB). It hooks into BLB's built-in **Copy** buttons so that copied scripture passages automatically turn verse references (e.g., *Rom 8:28*, *1Co 13:2*, *John 3:16-17*) into live, clickable links when pasted into document editors.

- **Automatic Hyperlinking:** Converts plain scripture references into clickable links pointing directly to the BLB passage.
- **Built-In Button Integration:** Triggers automatically whenever you click Blue Letter Bible's native copy options/buttons.
- **Rich Formatting:** Formats clipboard data so Google Docs and Microsoft Word display active hyperlinks on paste.

## 2. Installation Steps (Brave / Chrome)

### Step 1: Open Extensions Manager
In your browser address bar, type `brave://extensions/` (or `chrome://extensions/`) and press Enter.

### Step 2: Enable Developer Mode
Toggle the **Developer mode** switch in the top-right corner to **ON**.

### Step 3: Load Unpacked Extension
Click **Load unpacked** on the top-left and select your extension folder (`blb-hyperlinker`).

### Step 4: Grant Site Access Permissions
Click **Details** on the extension card → set **Site permissions** to **"On all sites"** (or allow on `blueletterbible.org`).

## 3. How to Use

1. Open `blueletterbible.org` and search for any chapter or passage.
2. Hard refresh the page (`Ctrl + Shift + R`) after installing/reloading the extension.
3. Click any of Blue Letter Bible's built-in **Copy** buttons inside the verse tools.
4. Open **Google Docs** or **Microsoft Word**.
5. Press `Ctrl + V` (standard paste). The scripture text will paste with clickable verse links.

## 4. Document Compatibility

| Target Application | Hyperlink Support | Notes |
| :--- | :--- | :--- |
| **Google Docs** | Supported | Pastes with active hyperlinks using `Ctrl + V`. |
| **Microsoft Word (Desktop & Web)** | Supported | Natively preserves HTML clipboard links on paste. |
| **Gmail / Webmail Editors** | Supported | Renders rich text formatting with live links. |
| **WordPad** | Not Supported | WordPad only accepts plain text/RTF and strips HTML links. |
| **Notepad / Plain Text Editors** | Not Supported | Plain text editors do not support hyperlinked text. |

**Tip:** Always use standard paste (`Ctrl + V`). Using "Paste as plain text" (`Ctrl + Shift + V`) will remove all links and formatting.
