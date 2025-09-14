# Astro Lander

A modern Astro application for displaying search engine optimized landing pages with interactive React components.

## Overview

Astro Lander is a static site generator built with Astro that showcases SEO-optimized landing pages. The application demonstrates modern web development practices including:

- **Astro Islands Architecture**: Static HTML with interactive React components
- **SEO Optimization**: Comprehensive meta tags, structured data, and social media integration
- **Performance**: Optimized builds with compressed HTML and inline stylesheets
- **Interactive Components**: React-based demos with real-time animations

## Features

- 🚀 **Fast Static Generation**: Built with Astro for optimal performance
- 🔍 **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, and JSON-LD
- ⚛️ **Interactive Demos**: React components with real-time animations and controls
- 📱 **Responsive Design**: Mobile-first approach with CSS custom properties
- 🎨 **Modern Styling**: HSL color system with consistent design tokens
- 📊 **Analytics Ready**: Google Analytics, GTM, and Facebook Pixel integration
- 🗺️ **Sitemap Generation**: Automatic XML sitemap creation

## Tech Stack

- **Framework**: [Astro](https://astro.build/) v5.13.7
- **UI Library**: [React](https://react.dev/) v19.1.1
- **Styling**: CSS Modules with HSL color system
- **TypeScript**: Full type safety
- **Build Tools**: Astro's built-in bundler with optimizations

## Project Structure

```
src/
├── components/
│   ├── react/           # Interactive React components
│   │   ├── InteractiveDemo.tsx
│   │   ├── InteractiveDemo.module.css
│   │   └── index.ts
│   └── seo/            # SEO and meta tag components
│       ├── JSONLD.astro
│       ├── MetaTags.astro
│       ├── OpenGraph.astro
│       └── SocialMedia.astro
├── layouts/
│   └── LandingPage.astro    # Main landing page layout
└── pages/
    ├── index.astro          # Home page
    └── example.astro        # Example landing page
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd astro-lander
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Configuration

### Astro Configuration

The project uses `astro.config.mjs` with the following integrations:

- **React**: For interactive components
- **Sitemap**: Automatic XML sitemap generation
- **Site URL**: Configured for https://astro-lander.com

### Development Preferences

Project follows specific development guidelines defined in `dev-preferences.json`:

- HSL color system for styling
- Functional programming paradigm
- Component colocation strategy

## SEO Features

The application includes comprehensive SEO optimization:

- **Meta Tags**: Title, description, keywords, canonical URLs
- **Open Graph**: Facebook and social media sharing
- **Twitter Cards**: Twitter-specific meta tags
- **JSON-LD**: Structured data for search engines
- **Sitemap**: Automatic XML sitemap generation
- **Analytics**: Google Analytics, GTM, and Facebook Pixel ready

## Interactive Components

### InteractiveDemo

A React component that provides:

- Real-time value adjustment with sliders
- Animated value changes
- Reset functionality
- Customizable parameters (min, max, step, unit)
- Visual feedback with color-coded bars

## Styling System

The project uses a consistent design system with:

- **CSS Custom Properties**: Centralized color and spacing variables
- **HSL Colors**: Consistent color palette with semantic naming
- **Responsive Design**: Mobile-first approach with breakpoints
- **Component Isolation**: CSS Modules for component-specific styles

## Performance Optimizations

- **Compressed HTML**: Automatic HTML compression
- **Inline Stylesheets**: Critical CSS inlined automatically
- **Static Generation**: Pre-rendered pages for optimal loading
- **Islands Architecture**: Interactive components load only when needed

## Deployment

The application builds to static files in the `dist/` directory:

```bash
npm run build
```

Deploy the contents of the `dist/` folder to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## License

This project is licensed under the MIT License.
