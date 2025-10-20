# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 academic journal website for the Nigerian Library Association Enugu State Chapter. The site publishes articles on library and information science topics, featuring a journal archive with multiple volumes and issues.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Fonts**: Geist Sans/Mono and Libre Baskerville serif
- **Backend**: Convex (database and API layer)
- **Analytics**: Vercel Analytics

### Key Directories

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components including shadcn/ui components
- `/lib` - Utilities and data models
- `/convex` - Convex backend functions and schema
- `/public` - Static assets including journal images

### Data Structure

The application uses TypeScript interfaces defined in `lib/data.ts`:

- `Article` - Individual journal articles with metadata (title, authors, abstract, PDF URL, views, downloads)
- `Volume` - Journal volumes containing multiple articles (volume/issue numbers, publication date)

Articles are organized hierarchically: Volume → Issue → Articles

### Routing Structure

- `/` - Homepage with current issue
- `/archive` - All journal volumes
- `/archive/[volumeId]` - Specific volume with article list
- `/archive/[volumeId]/[articleId]` - Individual article view with PDF viewer
- `/note-to-authors` - Submission guidelines
- `/editorial-team` - Editorial board information
- `/contact` - Contact information

### Design System

- Primary brand color: `#9A5B49` (warm brown)
- Secondary: `#8B4F3F` and `#6B3E2E` (darker browns)
- Typography: Geist Sans for UI, Libre Baskerville for headings
- Components follow shadcn/ui conventions with custom styling

### Configuration Notes

- TypeScript errors are ignored in build (`ignoreBuildErrors: true`)
- Images are unoptimized for static deployment
- Path aliases configured for `@/*` imports
- Convex backend requires separate deployment

### Convex Integration

The project includes Convex setup for potential database functionality, though currently uses static data. Convex functions should follow the patterns shown in `convex/README.md`.