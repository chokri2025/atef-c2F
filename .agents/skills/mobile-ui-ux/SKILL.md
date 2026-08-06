---
name: mobile-ui-ux
description: Guidelines and check-list for optimizing Next.js/React websites for mobile devices. Provides checklists for responsive typography, touch targets, horizontal overflow prevention, flexbox/grid stacking, and performance.
---

# Mobile UI/UX Optimization Skill

This skill provides a systematic workflow and checklist to audit and fix mobile design and user experience issues in web applications.

## Mobile Audit Checklist

### 1. Viewport & Layout
- [ ] **No Horizontal Scroll**: Ensure `html`, `body`, and outer containers have `max-width: 100vw` and `overflow-x: hidden`.
- [ ] **Fluid Containers**: Containers should use percentage widths or flex/grid layouts instead of fixed pixel dimensions (e.g., `width: 100%` instead of `width: 1200px`).
- [ ] **Viewport Meta Tag**: Verify the presence of the mobile viewport configuration in layout metadata.

### 2. Flexbox & Grid Content Stacking
- [ ] **Text Grouping**: When shifting a flex container from row to column (or row on desktop to row/column on mobile), ensure text blocks (title + description) are grouped inside a single container `div`. Otherwise, they will render side-by-side or stack incorrectly.
- [ ] **Grid Columns**: Ensure grids with 2+ columns on desktop transition to `grid-template-columns: 1fr` (or `2fr` for very small items) on viewports `< 768px`.
- [ ] **Order of Elements**: Use `order` or JSX structure modifications to place critical content (like CTA buttons or titles) before secondary elements (like decorative images) on mobile.

### 3. Touch Targets & Interactivity
- [ ] **Minimum Size**: All interactive elements (buttons, links, form inputs) must have a minimum touch target size of `48px` x `48px`.
- [ ] **Spacing**: Interactive elements should have at least `8px` of separation to prevent accidental taps.
- [ ] **Mobile Menu Functionality**:
  - [ ] Close button ('X') must be visible on all background colors (e.g., transition class `.menu-open` to dark color when menu is active).
  - [ ] Body scrolling must be disabled (`overflow: hidden`) when the full-screen mobile menu is open.

### 4. Typography & Readability
- [ ] **Font Sizes**: Adjust heading sizes using `clamp()` or media queries (e.g., `h1` should not exceed `2.25rem` on mobile).
- [ ] **Contrast**: Ensure text colors contrast sufficiently with background colors under all states (default, hover, scrolled).
- [ ] **Line Heights**: Set body text line-height to `1.5` or `1.6` for readability.

### 5. Images & Media
- [ ] **Next.js Image Sizing**: Always specify the `sizes` attribute on `next/image` components that use `fill` layout (e.g., `sizes="(max-width: 768px) 100vw, 33vw"`).
- [ ] **Responsive Height**: Images should scale naturally without distortion. Use `object-fit: cover` or `contain`.
