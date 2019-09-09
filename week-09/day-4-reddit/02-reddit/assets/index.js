const mainContent = document.querySelector('main');

fetch('/api/articles')
  .then(res => res.text())
  .then(content => mainContent.innerHTML = content);