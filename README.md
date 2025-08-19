# Shamkhal Hajiyev - Portfolio Website

A modern, responsive portfolio website showcasing my expertise in Data Science, Machine Learning, and Customer Analytics.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dynamic Navigation**: Auto-highlighting active pages with smart routing
- **Interactive Elements**: Profile image popup, skills carousel, hover effects, and smooth transitions
- **Professional Structure**: Well-organized sections for projects, skills, and experience
- **Project Filtering**: Advanced categorization and filtering system
- **Integrated Skills**: Interactive skills carousel directly on homepage
- **Security Enhanced**: XSS protection and Content Security Policy headers

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5.1.3
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Inter)
- **Deployment**: GitHub Pages with automated workflows
- **Security**: Content Security Policy, HTML sanitization

## 📁 Project Structure

```
shamkhalhajiyev.github.io/
├── 📄 index.html                   # Homepage with hero section and interactive skills carousel
├── 📄 README.md                    # This documentation file
├── 📁 pages/                       # Individual page content
│   ├── 📄 cv.html                 # Detailed CV/resume page
│   └── 📄 projects.html           # Portfolio projects showcase
├── 📁 assets/                      # Static assets
│   ├── 📁 css/
│   │   └── 📄 main.css            # Main stylesheet with CSS variables and animations
│   ├── 📁 js/
│   │   ├── 📄 imagePopup.js       # Image modal functionality
│   │   ├── 📄 loadHeaderFooter.js # Dynamic header/footer loading with XSS protection
│   │   └── 📄 skillsCarousel.js   # Interactive skills carousel functionality
│   ├── 📁 img/
│   │   └── 📄 pp.jpg              # Profile picture
│   └── 📁 pdf/
│       └── 📄 ShamkhalHajiyev_CV.pdf # Downloadable CV
├── 📁 partials/                    # Reusable HTML components
│   ├── 📄 header.html              # Navigation header for sub-pages
│   ├── 📄 header-root.html         # Navigation header for homepage
│   ├── 📄 footer.html              # Footer for sub-pages
│   └── 📄 footer-root.html         # Footer for homepage
└── 📁 .github/                     # GitHub Actions workflow for automated deployment
    └── 📁 workflows/
        └── 📄 deploy.yml           # Automated deployment configuration
```

## 🎯 Key Sections

### Homepage (`index.html`)
- **Hero Section**: Professional introduction with key metrics and call-to-actions
- **Interactive Skills Carousel**: Three core expertise areas with smooth animations and navigation
- **About Section**: Expertise overview and professional background
- **Quick Links**: Professional cards linking to key pages and contact
- **Interactive Profile**: Clickable profile image with technology overlay

### Projects (`pages/projects.html`)
- **Advanced Project Cards**: Detailed project information with business impact metrics
- **Professional Categorization**: ML, Data Engineering, Analytics, Automation
- **Interactive Filtering**: Category-based project filtering system
- **Business Metrics**: Real impact numbers and technical implementation details
- **Technology Tags**: Comprehensive tech stack for each project
- **Privacy Compliance**: Work-related projects with confidentiality notices

### CV (`pages/cv.html`)
- **Professional Layout**: Clean, organized sections with modern styling
- **Contact Information**: Integrated contact details and social links
- **Detailed Experience**: Comprehensive work history and achievements
- **Downloadable PDF**: Direct access to downloadable CV

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/shamkhalhajiyev/shamkhalhajiyev.github.io.git
   cd shamkhalhajiyev.github.io
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or serve locally using a local server: `python3 -m http.server 8000`

3. **Customize**
   - Update content in HTML files
   - Modify styles in `assets/css/main.css`
   - Update skills in the homepage carousel
   - Modify projects in `pages/projects.html`

## 🎨 Customization

### CSS Variables
The design system uses CSS custom properties for easy theming:
```css
:root {
    --primary-bg: #0a0a0a;
    --secondary-bg: #111111;
    --accent-color: #00d4ff;
    --accent-secondary: #ff6b6b;
    /* ... more variables */
}
```

### Skills Carousel
The interactive skills carousel is implemented in `assets/js/skillsCarousel.js`:
```javascript
// Skills are defined directly in the HTML for easy maintenance
// Each skill card includes icon, title, description, and technology tags
// Navigation controls provide smooth transitions between skills
```

### Adding New Pages
1. Create new HTML file in `pages/` directory
2. Include the header/footer placeholders
3. Add navigation link in `partials/header.html` and `partials/header-root.html`
4. Update `loadHeaderFooter.js` if needed

## 📱 Responsive Design

- **Mobile-first approach** with Bootstrap 5 grid system
- **Optimized for all screen sizes** from mobile to desktop
- **Touch-friendly interactions** and smooth animations
- **Performance optimized** with efficient CSS and JavaScript

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📊 Project Statistics

- **Total Projects**: 6
- **Categories**: 4 (ML, Data Engineering, Analytics, Automation)
- **Production Status**: 5 projects in production, 1 completed
- **Technologies**: 25+ different technologies and tools
- **Business Impact**: Measurable metrics across all projects

## 🚀 Performance Features

- **Optimized Assets**: Compressed images and minified CSS/JS
- **Lazy Loading**: Efficient resource loading with defer attributes
- **Smooth Animations**: CSS-based animations for better performance
- **Responsive Images**: Optimized for different screen sizes
- **Security Optimized**: XSS protection and Content Security Policy

## 🛡️ Security Features

- **Content Security Policy**: Comprehensive security headers
- **XSS Protection**: HTML sanitization for dynamic content
- **Secure Headers**: X-Frame-Options, X-Content-Type-Options
- **Input Validation**: Sanitized HTML loading and rendering

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome through issues and pull requests.

## 📞 Contact

- **Email**: hajiyev.shamkhal@gmail.com
- **LinkedIn**: [shamkhalhajiyev](https://linkedin.com/in/shamkhalhajiyev)
- **GitHub**: [shamkhalhajiyev](https://github.com/shamkhalhajiyev)

## 🔄 Maintenance

- **Update Frequency**: Monthly content updates
- **Last Updated**: January 2025
- **Next Update**: February 2025
- **Version**: 3.0.0

## 🚀 Recent Updates (v3.0.0)

- **Major Refactor**: Complete codebase cleanup and optimization
- **Skills Integration**: Interactive skills carousel on homepage
- **Security Enhancement**: XSS protection and security headers
- **Performance Optimization**: Streamlined file structure and loading
- **Modern UI/UX**: Enhanced animations and responsive design
- **Automated Deployment**: GitHub Actions workflow for seamless updates

---

*Built with ❤️ using modern web technologies and best practices*
