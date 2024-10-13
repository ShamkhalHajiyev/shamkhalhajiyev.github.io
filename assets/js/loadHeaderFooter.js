// Function to load the header and footer dynamically
function loadHeaderFooter() {
  // Adjust path for the header and footer based on the current page
  const pathPrefix = window.location.pathname.includes("/pages/") ? ".." : ".";

  // Load header
  fetch(`${pathPrefix}/partials/header.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Header fetch failed');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
      highlightActiveTab(); // Highlight the active tab after loading header
    })
    .catch(error => console.error('Error loading header:', error));

  // Load footer
  fetch(`${pathPrefix}/partials/footer.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Footer fetch failed');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
}

// Function to highlight the active tab
function highlightActiveTab() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    // Check if the href of the link matches the current page
    if (link.getAttribute('href').includes(currentPage)) {
      link.classList.add('active');
    }
  });
}

// Event listener to ensure DOM is fully loaded before loading header and footer
document.addEventListener('DOMContentLoaded', loadHeaderFooter);
