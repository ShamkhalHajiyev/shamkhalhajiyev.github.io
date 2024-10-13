// Function to load the header and footer dynamically
function loadHeaderFooter() {
  // Adjust path for the header and footer based on the current page
  let pathPrefix = window.location.pathname.includes("/pages/") ? ".." : ".";

  // Load header
  fetch(`${pathPrefix}/partials/header.html`)
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      highlightActiveTab();
    });

  // Load footer
  fetch(`${pathPrefix}/partials/footer.html`)
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
    if (link.getAttribute('href').includes(currentPage)) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', loadHeaderFooter);
