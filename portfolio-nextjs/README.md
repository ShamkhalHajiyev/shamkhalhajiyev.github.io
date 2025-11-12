# Shamkhal Hajiyev - Professional Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS, showcasing my professional experience, projects, and skills as a Data Science Specialist.

## 🎨 Design Features

- **100% Text-Based Design** - Professional layout without images
- **Dark/Light Mode** - Seamless theme switching with system preference detection
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Framer Motion for elegant transitions
- **Modern Stack** - Built with Next.js 16 and Tailwind CSS 4

## 📦 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Language:** TypeScript
- **Deployment:** GitHub Pages (Static Export)

## 🏗️ Project Structure

```
portfolio-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and design system
│   ├── cv/
│   │   └── page.tsx        # CV page
│   └── projects/
│       └── page.tsx        # Projects page
├── components/
│   ├── ThemeProvider.tsx   # Theme context provider
│   ├── Navbar.tsx          # Navigation with dark mode toggle
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── CoreExpertise.tsx   # Skills showcase
│   └── Contact.tsx         # Contact form
├── public/
│   └── .nojekyll          # GitHub Pages configuration
└── next.config.ts         # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Development

The development server will be available at [http://localhost:3000](http://localhost:3000).

## 🎨 Design System

### Colors

**Light Mode:**
- Background: `#F8FAFC`
- Foreground: `#1E293B`
- Primary: `#2563EB`
- Secondary: `#64748B`
- Border: `#E2E8F0`

**Dark Mode:**
- Background: `#0F172A`
- Foreground: `#F8FAFC`
- Primary: `#3B82F6`
- Secondary: `#94A3B8`
- Border: `#334155`

### Typography

- **Headings:** Poppins (600-700 weight)
- **Body:** Inter (400-600 weight)

## 📄 Pages

- **Home** (`/`) - Hero, About, Core Expertise, and Contact sections
- **CV** (`/cv`) - Comprehensive curriculum vitae with professional experience
- **Projects** (`/projects`) - Portfolio of professional projects with filtering

## 🌐 Deployment

### GitHub Pages

The site is configured for static export to GitHub Pages:

```bash
# Build static site
npm run build

# The output will be in the 'out' directory
```

To deploy to GitHub Pages:

1. Build the static site: `npm run build`
2. The `out` directory contains the static files
3. Configure GitHub Pages to serve from the deployment branch

### Manual Deployment

You can also deploy to any static hosting platform (Vercel, Netlify, etc.) by building and uploading the `out` directory.

## 📧 Contact

**Shamkhal Hajiyev**
- Email: hajiyev.shamkhal@gmail.com
- LinkedIn: [shamkhalhajiyev](https://linkedin.com/in/shamkhalhajiyev)
- GitHub: [shamkhalhajiyev](https://github.com/shamkhalhajiyev)
- Location: Wrocław, Poland

## 📝 License

© 2025 Shamkhal Hajiyev. All rights reserved.

## 🔧 Customization

### EmailJS Integration

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and Public Key
3. Update `components/Contact.tsx` with your credentials:

```typescript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

### Content Updates

- **Personal Info:** Update `app/layout.tsx` metadata and component files
- **Projects:** Edit `app/projects/page.tsx` to add/remove projects
- **CV:** Update `app/cv/page.tsx` with your experience and skills
- **Colors:** Modify `app/globals.css` design system variables

## 🎯 Key Features

✅ Server-side rendering with static export
✅ SEO optimized with proper meta tags
✅ Accessible navigation and components
✅ Smooth scroll behavior
✅ Mobile-first responsive design
✅ Performance optimized
✅ Type-safe with TypeScript
✅ Clean, maintainable code structure

---

Built with ❤️ using Next.js and Tailwind CSS
