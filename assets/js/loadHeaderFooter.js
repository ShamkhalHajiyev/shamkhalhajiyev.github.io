// loadHeaderFooter.js

document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    // Function to load external HTML files
    const loadHTML = (url, element) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = data;
                if (element === headerPlaceholder) {
                    highlightActiveTab();
                }
            })
            .catch(error => console.error(`Error loading ${url}:`, error));
    };

    // Determine the path prefix based on the current location
    const pathPrefix = window.location.pathname.includes('/pages/') ? '..' : '.';

    // Load Header and Footer
    loadHTML(`${pathPrefix}/partials/header.html`, headerPlaceholder);
    loadHTML(`${pathPrefix}/partials/footer.html`, footerPlaceholder);

    // Function to highlight the active tab
    const highlightActiveTab = () => {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };
});
