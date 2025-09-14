# Shaggy Satellite - SEO-Optimized Marketing Landing Pages

A comprehensive Astro marketing app featuring SEO-optimized landing pages with React component integration. Built following modern web development best practices with a focus on performance, SEO, and user experience.

## 🚀 Features

### SEO Components

- **TrackingScripts**: Google Analytics, GTM, Bing UET, Facebook Pixel, and custom tracking
- **MetaTags**: Comprehensive meta tag management with semantic HTML
- **JSONLD**: Structured data for rich snippets and search engine understanding
- **OpenGraph**: Social media optimization for Facebook, Twitter, and LinkedIn
- **SocialMedia**: Social media links and platform integration

### React Integration

- **InteractiveDemo**: Real-time interactive components with animations
- **FeatureCard**: Hover effects and interactive feature showcases
- **CounterWidget**: Animated counters with intersection observer
- Client-side hydration with `client:load`, `client:visible`, and `client:idle`

### Landing Page Template

- **Flexible Layouts**: Hero, split, grid, minimal, and custom layouts
- **Theme Options**: Light, dark, and gradient themes
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Performance Optimized**: Astro's islands architecture for minimal JavaScript
- **Conversion-Focused**: Optional navigation/footer removal for distraction-free landing pages
- **Focus Mode**: Streamlined layout optimized for conversion and user action

## 📁 Project Structure

```
src/
├── components/
│   ├── seo/                 # SEO optimization components
│   │   ├── TrackingScripts.astro
│   │   ├── MetaTags.astro
│   │   ├── JSONLD.astro
│   │   ├── OpenGraph.astro
│   │   ├── SocialMedia.astro
│   │   └── index.ts
│   └── react/               # Interactive React components
│       ├── InteractiveDemo.tsx
│       ├── FeatureCard.tsx
│       ├── CounterWidget.tsx
│       └── index.ts
├── layouts/
│   └── LandingPage.astro    # Reusable landing page template
└── pages/
    ├── index.astro          # Homepage showcase
    ├── productivity-app.astro
    ├── analytics-dashboard.astro
    └── creative-tools.astro
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📄 Landing Pages

### Homepage (`/`)

Showcases all available landing page templates and features with interactive demos.

### Productivity App (`/productivity-app`)

- Hero layout with interactive task management demo
- Feature cards with hover animations
- Live counter widgets showing productivity metrics
- SEO optimized for productivity and task management keywords

### Analytics Dashboard (`/analytics-dashboard`)

- Split layout with gradient theme
- Real-time data visualization demos
- Business intelligence focused content
- Comprehensive analytics tracking setup

### Creative Tools (`/creative-tools`)

- Minimal layout with dark theme
- Design-focused interactive components
- Creator testimonials section
- Social media optimized for creative communities

### Conversion-Focused Landing Page (`/conversion-focused`)

- Focus mode with no navigation or footer
- High-converting design with urgency elements
- Social proof and trust indicators
- Multiple CTAs optimized for conversion
- Testimonials and benefit-focused content

## 🎨 Customization

### SEO Configuration

Each landing page accepts comprehensive SEO configuration:

```typescript
const pageData = {
  title: "Page Title",
  description: "Meta description",
  keywords: ["keyword1", "keyword2"],
  canonical: "https://example.com/page",
  ogImage: "/og-image.jpg",
  jsonLd: {
    type: "SoftwareApplication",
    data: {
      /* structured data */
    },
  },
  tracking: {
    googleAnalyticsId: "GA-XXXXXX-X",
    googleTagManagerId: "GTM-XXXXXXX",
  },
  social: {
    twitterSite: "@handle",
    linkedinUrl: "https://linkedin.com/company/name",
  },
};
```

### Theme Customization

Modify CSS custom properties in the LandingPage layout:

```css
:root {
  --color-primary: hsl(220, 100%, 50%);
  --color-secondary: hsl(280, 100%, 60%);
  --spacing-lg: 2rem;
  --border-radius: 8px;
}
```

### Layout Options

- `hero`: Full-width hero with centered content
- `split`: Two-column layout with content and visual
- `grid`: Multi-column grid layout
- `minimal`: Clean, minimal design
- `custom`: Fully customizable layout

### Conversion Optimization

```typescript
const pageData = {
  // ... other config
  showNavigation: false, // Remove navigation for focus
  showFooter: false, // Remove footer for focus
  focusMode: true, // Enable conversion-focused layout
};
```

### Focus Mode Features

- **No Navigation**: Removes header navigation to eliminate distractions
- **No Footer**: Removes footer to keep focus on conversion
- **Streamlined Layout**: Optimized spacing and content flow
- **CTA Emphasis**: Enhanced call-to-action visibility and prominence

## 🔍 SEO Features

### Technical SEO

- Semantic HTML5 structure
- Optimized meta tags and Open Graph
- JSON-LD structured data
- XML sitemap generation
- Canonical URLs
- Mobile-first responsive design

### Performance SEO

- Astro's islands architecture
- Minimal JavaScript bundle
- Optimized images and assets
- CSS-in-JS for component styles
- Lazy loading for React components

### Content SEO

- Keyword-optimized content structure
- Heading hierarchy (H1-H6)
- Alt text for images
- Internal linking strategy
- Social media meta tags

## 📊 Analytics Integration

### Supported Platforms

- Google Analytics 4
- Google Tag Manager
- Bing UET (Universal Event Tracking)
- Facebook Pixel
- Custom tracking scripts

### Implementation

```astro
<LandingPage
  tracking={{
    googleAnalyticsId: 'GA-XXXXXX-X',
    googleTagManagerId: 'GTM-XXXXXXX',
    bingUetId: 'BING-XXXXXX',
    facebookPixelId: 'FACEBOOK-XXXXXX'
  }}
>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For questions or support, please open an issue on GitHub or contact the development team.

---

Built with ❤️ using Astro, React, and modern web technologies.
