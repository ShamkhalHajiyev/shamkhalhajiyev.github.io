# Shamkhal Hajiyev - Professional Portfolio

A modern, multi-page developer portfolio built with Next.js 16, showcasing data science and machine learning expertise with an elegant design system.

**Live Site:** [shamkhalhajiyev.github.io](https://shamkhalhajiyev.github.io)

## 🎨 Design Features

- **Modern Minimal + Developer Aesthetic** - Apple/Linear/Stripe-inspired design
- **Dark/Light Mode** - Elegant color palette with system preference detection
- **Animated Components** - Framer Motion transitions, skill bars, timelines
- **Fully Responsive** - Mobile-first design for all devices
- **SEO Optimized** - Open Graph, Twitter cards, structured metadata

## 📦 Tech Stack

- **Framework:** Next.js 16 (App Router, Static Export)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Language:** TypeScript
- **Deployment:** GitHub Pages

## 🏗️ Project Structure

```
portfolio/
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About (bio, timeline, skills)
│   ├── projects/page.tsx     # Projects showcase
│   ├── blog/page.tsx         # Blog (placeholder)
│   ├── case-studies/page.tsx # Case studies
│   ├── testimonials/page.tsx # Testimonials (placeholder)
│   ├── cv/page.tsx           # CV with PDF download
│   ├── globals.css           # Design system
│   └── layout.tsx            # Root layout + SEO
├── components/               # Reusable UI components
│   ├── SkillBar.tsx          # Animated skill bars
│   ├── Timeline.tsx          # Career timeline
│   ├── ProjectCard.tsx       # Project showcase card
│   ├── BlogCard.tsx          # Blog post preview
│   ├── CaseStudyCard.tsx     # Case study preview
│   ├── TestimonialCard.tsx   # Testimonial card
│   ├── PDFDownloadButton.tsx # CV download button
│   ├── Navbar.tsx            # Navigation
│   ├── Footer.tsx            # Footer
│   └── ...
├── data/                     # Centralized data layer
│   ├── profile.ts            # Personal info, bio, contact
│   ├── skills.ts             # Skills matrix + proficiency
│   ├── experience.ts         # Work history + achievements
│   ├── education.ts          # Education history
│   ├── certifications.ts     # Professional certs
│   └── projects.ts           # All project data
├── assets/pdf/               # CV PDF file
└── public/                   # Static assets
```

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, featured projects, skills overview, contact |
| About | `/about` | Bio, career timeline, skills matrix, education, certs |
| Projects | `/projects` | Filterable project showcase (professional + GitHub) |
| Blog | `/blog` | Technical articles (placeholder content) |
| Case Studies | `/case-studies` | In-depth project breakdowns |
| Testimonials | `/testimonials` | Colleague feedback (placeholder) |
| CV | `/cv` | Full resume with PDF download |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Lint check
npm run lint
```

Development server: [http://localhost:3000](http://localhost:3000)

## ✏️ Content Updates

### Quick Edits

All content is centralized in the `data/` folder:

- **Profile info:** `data/profile.ts`
- **Skills:** `data/skills.ts` (add/remove skills, adjust proficiency 0-100)
- **Experience:** `data/experience.ts` (work history)
- **Projects:** `data/projects.ts` (add GitHub repos, professional work)
- **Education:** `data/education.ts`
- **Certifications:** `data/certifications.ts`

### Adding a Project

1. Edit `data/projects.ts`
2. Add a new object with: `id`, `title`, `focus`, `description`, `category`, `domains`, `metrics`, `technologies`
3. Set `featured: true` to show on home page

### Updating CV PDF

Replace the file at `assets/pdf/ShamkhalHajiyev_CV.pdf`

## 🌐 Deployment

### GitHub Pages (Current)

The site auto-deploys via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions runs `npm run build`
3. Deploys `out/` to GitHub Pages

### Manual Deploy

```bash
npm run build
# Upload contents of 'out/' directory to any static host
```

## 📧 Contact

**Shamkhal Hajiyev**

- Email: <hajiyev.shamkhal@gmail.com>
- LinkedIn: [shamkhalhajiyev](https://linkedin.com/in/shamkhalhajiyev)
- GitHub: [shamkhalhajiyev](https://github.com/shamkhalhajiyev)
- Location: Wrocław, Poland

---

© 2025 Shamkhal Hajiyev. All rights reserved.
