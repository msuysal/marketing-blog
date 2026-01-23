# Project Instructions: Marketing System Design

## Branding & Aesthetics
- **Tone**: Sophisticated, editorial, professional, and architectural.
- **Inspiration**: Monocle Magazine, high-end design journals. 
- **Color Palette**: 
  - Primarily light background with high-contrast text.
  - **Yellow Accent (#FFFF00 or similar)**: Used for active states, highlighted tags, and interactive elements.
- **Typography**: Editorial fonts (likely serif for headings or high-end sans-serif).
- **Tagging**: Tags should sound professional and "Google-level" (e.g., `Influence & Authority`, `Systems Infrastructure`, `Behavioral Logic`).

## Component Guidelines
- **Header**: Contains the "Marketing System Design" title and "By Olgu Uysal" tagline.
- **Audio Reader**: Listed as "AI Audio Edition" on article pages.
- **Table of Contents**: Should be present on long articles (left side).
- **Navigation**: "Previous" and "Next" links should stay within their category (Articles vs Deconstructions).

## Content Management
- Articles are stored in `src/lib/posts.ts`.
- Each post must have a slug, title, excerpt, date, tags, and HTML content.
- Case Studies / Deconstructions should be handled distinctly from general articles where specified.

## Workflow
1. **Develop**: Use `npm run dev`.
2. **Drafting**: When adding a post, ensure the date is in `MMM DD, YYYY` format.
3. **Verification**: Always check the UI for layout shifts when adding new components.
