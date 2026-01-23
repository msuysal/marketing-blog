# Marketing System Design by Olgu Uysal

A sophisticated, Monocle-inspired editorial platform focused on marketing systems, behavioral logic, and influence architecture.

## Project Overview
This project is a Next.js application designed to showcase high-level marketing essays and deconstructions. It features a refined aesthetic, custom typography, and advanced features like an AI Audio Edition for articles.

## Core Features
- **Editorial Experience**: Clean, typography-focused layout inspired by high-end magazines.
- **AI Audio Edition**: Integrated audio reader for accessibility and multi-modal consumption.
- **Knowledge Base**: Filterable articles by tags like `Behavioral Logic`, `Systems Infrastructure`, `Influence & Authority`, etc.
- **Responsive Design**: Optimized for both desktop and mobile reading.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Vanilla CSS / Tailwind (as configured)
- **Content**: Managed in `src/lib/posts.ts`
- **Deployment**: Vercel

## Getting Started
1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. View at: `http://localhost:3000`

## Structure
- `/src/app`: Page routes and layouts.
- `/src/components`: UI components (Audio Reader, Header, Tag filters).
- `/src/lib`: Content data and utility functions.
- `/.agent`: Agent-specific workflows and instructions.
