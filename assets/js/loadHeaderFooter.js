// Function to load the header and footer dynamically
function loadHeaderFooter() {
  fetch('/partials/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      highlightActiveTab();
    });

  fetch('/partials/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
}

// Function to highlight the active tab
function highlightActiveTab() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', loadHeaderFooter);
