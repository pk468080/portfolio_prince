# Alex Johnson – Digital Marketing Portfolio

A complete, professional multi-page digital marketing portfolio website built with **React + Vite + React Router v6**. Features SEO, PPC, Social Media, and Content Marketing case studies, a blog, and a fully functional contact form powered by EmailJS.

---

## Features

- ⚡ **Vite** – blazing fast dev server and optimized production builds
- ⚛️ **React 18** with functional components and hooks
- 🗺️ **React Router v6** – client-side routing with smooth page transitions
- 🎨 **CSS Modules** – scoped, maintainable styles with zero external CSS libraries
- 📧 **EmailJS** – contact form sends emails directly from the browser
- 🪖 **react-helmet-async** – per-page meta tags for SEO
- 👁️ **IntersectionObserver** – smooth fade-in animations and animated skill bars / counters
- 📱 **Fully responsive** – mobile (375px), tablet (768px), desktop (1200px)
- ♿ **Accessible** – semantic HTML, ARIA labels, keyboard navigation, focus management

### Pages

| Route | Page |
|-------|------|
| `/` | Home – Hero, Stats, Services, Featured Portfolio, Testimonials, CTA |
| `/about` | About – Bio, Skills with animated bars, Timeline, Certifications, Tools |
| `/services` | Services – Alternating detail cards, Process, Pricing, FAQ accordion |
| `/portfolio` | Portfolio – Filterable case study grid |
| `/portfolio/:id` | Case Study – Full case study with results, testimonial, next project |
| `/blog` | Blog – Filterable article grid |
| `/blog/:slug` | Blog Post – Full article with sidebar and related posts |
| `/contact` | Contact – EmailJS form with validation and success/error banners |
| `*` | 404 Not Found |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/pk468080/portfolio_prince.git
cd portfolio_prince

# 2. Install dependencies
npm install

# 3. Copy the env template and fill in your EmailJS keys
cp .env.example .env
# Edit .env with your EmailJS credentials

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

### Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails without a backend.

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Create an **Email Service** (Gmail, Outlook, etc.)
3. Create an **Email Template** with variables: `{{name}}`, `{{email}}`, `{{company}}`, `{{service}}`, `{{message}}`
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Add them to your `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

> ⚠️ Never commit your `.env` file. It's already in `.gitignore`.

---

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Set your environment variables in the Vercel dashboard under **Settings → Environment Variables**.

### Netlify

1. Connect your GitHub repository in the Netlify dashboard
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in **Site Settings → Environment Variables**

For client-side routing, create a `public/_redirects` file:
```
/*    /index.html   200
```

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio_prince",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Update `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  base: '/portfolio_prince/',
})
```

Then run `npm run deploy`.

---

## Folder Structure

```
portfolio_prince/
├── public/
│   └── assets/
│       ├── images/          # Project / service images
│       └── icons/           # Favicon and icon assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky navbar with mobile menu
│   │   ├── Navbar.module.css
│   │   ├── Footer.jsx       # 3-column footer
│   │   ├── Footer.module.css
│   │   ├── ScrollToTop.jsx  # Scroll-to-top on route change
│   │   └── shared/
│   │       ├── Button.jsx           # Polymorphic button (link/anchor/button)
│   │       ├── Button.module.css
│   │       ├── SectionTitle.jsx     # Reusable section heading block
│   │       ├── SectionTitle.module.css
│   │       ├── AnimatedCounter.jsx  # Count-up animation
│   │       └── FadeInSection.jsx    # Scroll-triggered fade-in
│   ├── pages/
│   │   ├── Home.jsx + Home.module.css
│   │   ├── About.jsx + About.module.css
│   │   ├── Services.jsx + Services.module.css
│   │   ├── Portfolio.jsx + Portfolio.module.css
│   │   ├── CaseStudy.jsx + CaseStudy.module.css
│   │   ├── Blog.jsx + Blog.module.css
│   │   ├── BlogPost.jsx + BlogPost.module.css
│   │   ├── Contact.jsx + Contact.module.css
│   │   └── NotFound.jsx
│   ├── data/
│   │   ├── portfolioData.js  # Case studies
│   │   ├── blogData.js       # Blog posts
│   │   └── servicesData.js   # Services, process, FAQs
│   ├── styles/
│   │   ├── global.css        # Global reset + utilities
│   │   └── variables.css     # CSS custom properties
│   ├── App.jsx               # Router + layout
│   └── main.jsx              # Entry point
├── .env                      # Local environment (gitignored)
├── .env.example              # Environment variable template
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Customization

### Replacing Placeholder Content

| File | What to change |
|------|----------------|
| `src/data/portfolioData.js` | Case study titles, descriptions, images, results |
| `src/data/blogData.js` | Blog post content, thumbnails, dates |
| `src/data/servicesData.js` | Service descriptions, pricing, FAQs |
| `src/pages/About.jsx` | Bio text, skills, timeline, certifications |
| `public/assets/images/` | Replace placeholder images with real photos |

### Adding Real Images

Replace placeholder URLs in data files with paths like `/assets/images/your-image.jpg` and place the images in `public/assets/images/`.

### Changing the Color Scheme

Edit `src/styles/variables.css` – all colors, fonts, spacing, and shadows are defined as CSS custom properties and will cascade through the entire site.

---

## License

MIT © Alex Johnson