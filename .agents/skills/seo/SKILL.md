---
name: seo
description: Comprehensive framework and checklist for technical, local, and on-page SEO optimization for Next.js applications. Covers metadata, crawling/indexing, schema.org JSON-LD structured data, Core Web Vitals, and local search rankings.
---

# Next.js & Local SEO Optimization Skill

This skill provides a systematic audit framework, best practices, and implementation guidelines for technical, on-page, and local SEO in Next.js web applications.

---

## 1. Technical SEO & Indexability

### 1.1 Crawl & Index Architecture
- [ ] **robots.txt**: Must exist either at `app/robots.js` or `public/robots.txt`. Must allow crawling of public routes, disallow internal/admin routes if any, and declare the sitemap index URL.
- [ ] **sitemap.xml**: Must exist via `app/sitemap.js` or `public/sitemap.xml`. Must list all public canonical URLs with `lastModified`, `changeFrequency`, and `priority`.
- [ ] **metadataBase**: Define `metadataBase: new URL('https://domain.tld')` in the root `app/layout.js` so all relative URLs (OG images, canonicals) resolve deterministically.
- [ ] **Canonical Tags**: Every page must declare an explicit canonical URL (`alternates: { canonical: '/' }`) to prevent duplicate content penalties (e.g. trailing slashes, query params).
- [ ] **Robots Meta Tag**: Explicitly declare `robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } }`.

### 1.2 Performance & Core Web Vitals (CWV)
- [ ] **Largest Contentful Paint (LCP)**:
  - Hero image or video poster must use `fetchPriority="high"` or `priority` on `next/image`.
  - Background videos must use `poster` image and `preload="none"` or `preload="metadata"` so video streaming does not bottleneck initial paint.
  - Enable modern image formats in `next.config.mjs` (`formats: ['image/avif', 'image/webp']`).
- [ ] **Cumulative Layout Shift (CLS)**:
  - All images and videos must have explicit dimensions (`width`/`height` or `fill` with aspect-ratio parent container).
  - Web fonts must use `next/font` with `display: 'swap'` (Inter, Outfit, etc.).
- [ ] **Interaction to Next Paint (INP)**:
  - Defer heavy client-side JavaScript. Keep interactive components lightweight.

---

## 2. On-Page SEO & Content Quality

### 2.1 Headings & Semantic Structure
- [ ] **Single H1 per Page**: Exactly one `<h1>` containing the primary target keyword, primary service, and location modifier (e.g., *"Électricien à Montluçon - Installation & Sécurité"*).
- [ ] **Logical Heading Hierarchy**: Strictly follow `<h1>` → `<h2>` → `<h3>` without skipping levels.
- [ ] **Semantic Elements**: Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` instead of unsemantic `<div>` soup.
- [ ] **Anchor Links**: Navigation links must have descriptive text and avoid vague labels like *"Cliquez ici"*.

### 2.2 Metadata Optimization
- [ ] **Page Title**: 50–60 characters. Formula: `[Service Principal] à [Ville/Zone] | [Nom Marque] - [Points Clés / Devis Gratuit]`.
- [ ] **Meta Description**: 130–160 characters with clear call-to-action (CTA), phone number, and primary keywords.
- [ ] **OpenGraph & Twitter Cards**:
  - `og:title`, `og:description`, `og:url`, `og:site_name`, `og:locale`.
  - High-resolution `og:image` (1200x630px).
  - `twitter:card`: `'summary_large_image'`.

---

## 3. Local SEO & Schema.org Structured Data

### 3.1 LocalBusiness / Specific Type JSON-LD
For local service providers (artisans, contractors, electricians), inject a rich `application/ld+json` script containing:
- [ ] `@type`: Specific subtypes such as `["LocalBusiness", "Electrician"]` or `["HomeAndConstructionBusiness", "Electrician"]`.
- [ ] `name`, `legalName`, `taxID`, `foundingDate`.
- [ ] `url` & `logo` (must be absolute URLs).
- [ ] `telephone` (international E.164 format: `+33...`).
- [ ] `email` & contact points.
- [ ] `address`: Full `PostalAddress` with street, postal code, locality, country.
- [ ] `geo`: Precise `GeoCoordinates` (`latitude`, `longitude`).
- [ ] `areaServed`: Explicit list of serviced municipalities and administrative departments.
- [ ] `hasOfferCatalog`: List of primary services offered (`Électricité générale`, `Borne de recharge IRVE`, `Alarmes`, `Vidéosurveillance`, etc.).
- [ ] `openingHoursSpecification`: Weekly business hours.
- [ ] `aggregateRating`: Real customer ratings with count and best rating.
- [ ] `priceRange`: `€€` or representative scale.

### 3.2 NAP Consistency (Name, Address, Phone)
- [ ] Exact match across Footer, Contact Page, Legal Mentions, and Schema.org.
- [ ] Clickable `tel:` and `mailto:` links across the entire UI.
- [ ] Embedded Google Maps iframe with accessibility `title` attribute.

---

## 4. Image & Media Optimization

- [ ] Every `next/image` and `<img>` must have a descriptive, keyword-relevant `alt` attribute (in French if content is French).
- [ ] No empty `alt=""` on informational images.
- [ ] Specify `sizes` prop on all `next/image` using `fill`.
- [ ] Lazy loading enabled by default (except for above-the-fold hero assets).
