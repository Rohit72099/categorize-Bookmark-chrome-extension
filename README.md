# 📚 Smart Bookmark Categorizer (Popup Widget)

A lightweight and elegant floating popup that displays all your categorized bookmarks on any webpage. Just click the floating 📚 icon to instantly access YouTube, LeetCode, Netflix, Amazon, and more — grouped beautifully by category.

---

## ✨ Features

- ✅ **Floating Popup Icon** – Click to toggle bookmark popup anywhere.
- 📁 **Auto-Categorized Bookmarks** – Groups your bookmarks by type (e.g., YouTube, Coding, Social).
- 🔄 **Expandable/Collapsible Categories** – Collapse or expand categories with a click.
- 🧠 **Hover Tooltips** – Descriptive tooltips on hover (optional).
- 🧘 **Minimalist Mode (Planned)** – Collapse all into icons or titles only.
- 💾 **Future-Proof** – Easily extend to use Chrome API or LocalStorage for persistence.

---

## 📷 Screenshot

<img src="screenshot.png" alt="Bookmark Popup Screenshot" width="400"/>

---

## 🛠 How It Works

1. A floating 📚 icon appears on the webpage.
2. Clicking it opens a styled popup showing all bookmarks, sorted into categories like:
   - **YouTube**
   - **Coding** (LeetCode, GeeksforGeeks, HackerRank)
   - **Educational** (Coursera, Udemy)
   - **Social**, **Entertainment**, **Other**
3. Click any category to expand/collapse it.
4. Click a link to open it in a new tab.

---

## 🧑‍💻 Tech Stack

- HTML5
- CSS3 (with custom styles and popup)
- JavaScript (Vanilla)
- [Optional] Chrome Bookmarks API (if used as extension)

---

## 🚀 Getting Started

### Option 1: As a Chrome Extension

1. Open `chrome://extensions` in Chrome.
2. Enable **Developer mode**.
3. Click **Load Unpacked**, and select this folder.
4. Click the 📚 icon to see it in action.

### Option 2: Embed on Any Webpage

1. Copy the `popupIcon` and `popupContainer` HTML into your page.
2. Include the CSS and JS provided.
3. Customize the `sampleBookmarks` array or fetch live bookmarks using an API.

---

## 🧩 Customize It

- 💡 Want dark mode? Add a toggle and store in `localStorage`.
- 📌 Add a “Pin” feature to keep favorite links on top.
- 🧘 Add a “Minimal Mode” button to collapse into icons only.
- 🧠 Store states (collapsed categories, theme) in `localStorage`.

---

## 📂 Project Structure

