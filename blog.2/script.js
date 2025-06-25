document.getElementById("commentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = this.elements[0].value.trim();
  const comment = this.elements[1].value.trim();

  if (name && comment) {
    const commentBox = document.getElementById("commentSection");
    const commentHTML = `<div class="comment"><strong>${name}</strong><p>${comment}</p></div>`;
    commentBox.innerHTML += commentHTML;
    this.reset();
  }
});
// Dark Mode Toggle
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🌙 Toggle Dark Mode';
toggleBtn.style.cssText = 'position: fixed; top: 20px; right: 20px; z-index: 1000;';
document.body.appendChild(toggleBtn);

const enableDarkMode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
};
const disableDarkMode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
};

if (localStorage.getItem('theme') === 'dark') enableDarkMode();

toggleBtn.onclick = () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
};

// Filter by Category
document.addEventListener('DOMContentLoaded', () => {
  const filterSelect = document.getElementById('filterSelect');
  if (filterSelect) {
    filterSelect.addEventListener('change', () => {
      const selected = filterSelect.value;
      document.querySelectorAll('.blog-card').forEach(card => {
        card.style.display = selected === 'all' || card.dataset.category === selected ? 'block' : 'none';
      });
    });
  }

  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const keyword = searchInput.value.toLowerCase();
      document.querySelectorAll('.blog-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(keyword) ? 'block' : 'none';
      });
    });
  }

  // Newsletter Popup
  setTimeout(() => {
    const popup = document.getElementById('newsletter-popup');
    if (popup) popup.style.display = 'block';
  }, 10000);

  const closeBtn = document.getElementById('close-popup');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.getElementById('newsletter-popup').style.display = 'none';
    });
  }
});
