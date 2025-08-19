// loadHeaderFooter.js

document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    // Function to safely load external HTML files with XSS protection
    const loadHTML = (url, element) => {
        console.log(`Loading HTML from: ${url}`);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                console.log(`Raw HTML from ${url}:`, data.substring(0, 100) + '...');
                // Sanitize HTML content to prevent XSS
                const sanitizedData = sanitizeHTML(data);
                console.log(`Sanitized HTML from ${url}:`, sanitizedData.substring(0, 100) + '...');
                element.innerHTML = sanitizedData;
                if (element === headerPlaceholder) {
                    highlightActiveTab();
                }
            })
            .catch(error => {
                console.error(`Error loading ${url}:`, error);
                // Fallback content for security
                element.innerHTML = '<div class="alert alert-warning">Content loading failed</div>';
            });
    };

    // HTML sanitization function to prevent XSS - but allow HTML structure
    const sanitizeHTML = (html) => {
        console.log('Sanitizing HTML:', html.substring(0, 100) + '...');
        
        // Remove HTML comments but keep the HTML structure
        const cleanHtml = html.replace(/<!--[\s\S]*?-->/g, '');
        console.log('After removing comments:', cleanHtml.substring(0, 100) + '...');
        
        // Create a temporary div to parse and sanitize
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = cleanHtml;
        
        // Remove any script tags for security
        const scripts = tempDiv.querySelectorAll('script');
        scripts.forEach(script => script.remove());
        
        // Remove any event handlers
        const elementsWithEvents = tempDiv.querySelectorAll('*');
        elementsWithEvents.forEach(element => {
            const attrs = element.attributes;
            for (let i = attrs.length - 1; i >= 0; i--) {
                const attr = attrs[i];
                if (attr.name.startsWith('on')) {
                    element.removeAttribute(attr.name);
                }
            }
        });
        
        const result = tempDiv.innerHTML;
        console.log('Final sanitized result:', result.substring(0, 100) + '...');
        return result;
    };

    // Determine the path prefix and header/footer files based on the current location
    const isRootPage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');
    const pathPrefix = window.location.pathname.includes('/pages/') ? '..' : '.';
    const headerFile = isRootPage ? 'header-root.html' : 'header.html';
    const footerFile = isRootPage ? 'footer-root.html' : 'footer.html';

    // Load Header and Footer
    loadHTML(`${pathPrefix}/partials/${headerFile}`, headerPlaceholder);
    loadHTML(`${pathPrefix}/partials/${footerFile}`, footerPlaceholder);

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
