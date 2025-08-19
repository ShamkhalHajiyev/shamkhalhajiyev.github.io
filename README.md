# Shamkhal Hajiyev - Portfolio Website

A modern, responsive portfolio website showcasing my expertise in Data Science, Machine Learning, and Customer Analytics.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dynamic Navigation**: Auto-highlighting active pages
- **Interactive Elements**: Profile image popup, hover effects, and smooth transitions
- **Professional Structure**: Well-organized sections for projects, skills, and experience
- **Project Filtering**: Advanced categorization and filtering system
- **Centralized Data**: Structured project information for easy maintenance
- **Integrated Skills**: Core expertise displayed directly on homepage

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5.1.3
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Inter)
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
shamkhalhajiyev.github.io/
├── 📄 project-config.json          # Project configuration and metadata
├── 📄 index.html                   # Homepage with hero section and integrated skills
├── 📄 README.md                    # This documentation file
├── 📁 pages/                       # Individual page content
│   ├── 📄 cv.html                 # Detailed CV/resume page
│   └── 📄 projects.html           # Portfolio projects showcase
├── 📁 assets/                      # Static assets
│   ├── 📁 css/
│   │   └── 📄 main.css            # Main stylesheet with CSS variables
│   ├── 📁 js/
│   │   ├── 📄 imagePopup.js       # Image modal functionality
│   │   ├── 📄 loadHeaderFooter.js # Dynamic header/footer loading
│   │   └── 📄 projects-data.js    # Centralized project data structure
│   ├── 📁 img/
│   │   └── 📄 pp.jpg              # Profile picture
│   └── 📁 pdf/
│       └── 📄 ShamkhalHajiyev_CV.pdf # Downloadable CV
└── 📁 partials/                    # Reusable HTML components
    ├── 📄 header.html              # Navigation header
    └── 📄 footer.html              # Footer with social links
```

## 🎯 Key Sections

### Homepage (`index.html`)
- **Hero Section**: Professional introduction with key metrics and call-to-actions
- **Skills Section**: Three core expertise areas (Data Science, Data Engineering, Advanced Analytics) displayed as interactive cards
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
   - Update project data in `assets/js/projects-data.js`

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

### Project Data Structure
Projects are centralized in `assets/js/projects-data.js` for easy maintenance:
```javascript
{
    id: "project-id",
    title: "Project Title",
    status: "Production",
    category: ["ml", "analytics"],
    businessImpact: [...],
    technicalImplementation: [...],
    technologies: [...],
    duration: "X months",
    teamSize: X
}
```

### Adding New Pages
1. Create new HTML file in `pages/` directory
2. Include the header/footer placeholders
3. Add navigation link in `partials/header.html`
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
- **Lazy Loading**: Efficient resource loading
- **Smooth Animations**: CSS-based animations for better performance
- **Responsive Images**: Optimized for different screen sizes

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
- **Last Updated**: August 19, 2024
- **Next Update**: September 19, 2024
- **Version**: 2.1.0

---

*Built with ❤️ using modern web technologies and best practices*
