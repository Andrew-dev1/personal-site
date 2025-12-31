# Andrew Li - Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, React, and Tailwind CSS. Showcases projects, skills, education, and contact information.

## Features

- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **Dark Mode Support**: Built-in dark mode with smooth transitions
- **Project Showcase**: Display projects with descriptions, tech stacks, and links
- **Skills & Education**: Highlight technical skills and educational background
- **Contact Information**: Easy-to-find contact details and social links

## Tech Stack

- **Framework**: Next.js 16.1.0 (App Router)
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons
- **Language**: TypeScript

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── about/       # About page
│   ├── contact/     # Contact page
│   ├── projects/    # Projects page
│   └── page.tsx     # Home page
├── components/      # React components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ProjectCard.tsx
└── data/            # Data files
    ├── contact.ts
    ├── projects.ts
    └── skills.ts
```

## Deployment

### Option 1: Deploy on Vercel (Recommended)

Vercel is the easiest and most optimized platform for Next.js applications.

#### Steps:

1. **Push your code to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click **"Add New Project"**
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click **"Deploy"**

3. **Your site is live!**
   - Your site will be available at `your-project-name.vercel.app`
   - You can add a custom domain later in project settings
   - Every push to main will automatically trigger a new deployment

#### Benefits:
- ✅ Zero configuration needed
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Free tier with generous limits
- ✅ Automatic deployments on git push

### Option 2: Deploy on Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Select your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next` (or leave default)
6. Click **"Deploy site"**



### Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Test production build locally: `npm run build && npm run start`
- [ ] Verify all images and assets load correctly
- [ ] Check that all external links work
- [ ] Test on mobile devices
- [ ] Ensure environment variables are set (if any)
- [ ] Update any hardcoded localhost URLs

### Custom Domain

After deployment, you can add a custom domain:

1. **Vercel**: Go to Project Settings → Domains → Add Domain
2. **Netlify**: Go to Site Settings → Domain Management → Add custom domain

Follow the DNS configuration instructions provided by your platform.

For more details, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
