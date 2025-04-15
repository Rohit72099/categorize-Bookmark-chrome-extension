const categoryMappings = {
  "YouTube": ["youtube.com"],
  "Coding": ["leetcode.com", "geeksforgeeks.org", "hackerrank.com"],
  "Educational": ["coursera.org", "udemy.com", "edx.org"],
  "Shopping": ["amazon.com", "flipkart.com"],
  "Social": ["facebook.com", "instagram.com", "twitter.com"],
  "Entertainment": ["netflix.com", "hotstar.com", "primevideo.com"],
  "Other": []
};

document.addEventListener('DOMContentLoaded', function () {
  chrome.bookmarks.getTree(function (bookmarkTreeNodes) {
    const categorizedBookmarks = categorizeBookmarks(bookmarkTreeNodes);
    displayBookmarks(categorizedBookmarks);
  });
});

function categorizeBookmarks(nodes, categories = {}) {
  nodes.forEach(node => {
    if (node.url) {
      let category = "Other";
      for (const [cat, domains] of Object.entries(categoryMappings)) {
        if (domains.some(domain => node.url.includes(domain))) {
          category = cat;
          break;
        }
      }
      if (!categories[category]) categories[category] = [];
      categories[category].push({ title: node.title, url: node.url });
    }
    if (node.children) {
      categorizeBookmarks(node.children, categories);
    }
  });
  return categories;
}

function displayBookmarks(categorizedBookmarks) {
  const container = document.getElementById('bookmarks-container');
  for (const [category, bookmarks] of Object.entries(categorizedBookmarks)) {
    if (bookmarks.length === 0) continue;

    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'category';
    categoryDiv.textContent = category;
    container.appendChild(categoryDiv);

    const bookmarksList = document.createElement('div');
    bookmarksList.className = 'hidden';

    bookmarks.forEach(bookmark => {
      const link = document.createElement('a');
      link.href = bookmark.url;
      link.textContent = bookmark.title || bookmark.url;
      link.target = "_blank";

      const bookmarkDiv = document.createElement('div');
      bookmarkDiv.className = 'bookmark';
      bookmarkDiv.appendChild(link);

      bookmarksList.appendChild(bookmarkDiv);
    });

    container.appendChild(bookmarksList);

    categoryDiv.addEventListener('click', () => {
      bookmarksList.classList.toggle('hidden');
    });
  }
}








