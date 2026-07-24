# EmotionSense AI — Frontend

A premium, modern SaaS-style frontend for an NLP emotion classification
project. Built with **React + Vite**, **Tailwind CSS**, **Framer Motion**,
**React Router**, **Lucide React**, and **Recharts**.

This is a **frontend-only** build. There is no machine learning model,
backend, or fake/dummy prediction data anywhere in the codebase — every
result panel is a clearly labeled placeholder, ready to be wired up to a
real inference service.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Pages

- **Home** — hero, model overview, five-stage workflow diagram, the six
  supported emotion classes, feature cards, animated stats, and a CTA.
- **Text Analysis** (`/text-analysis`) — single-text input with live word
  and character counters, a result placeholder, and per-class confidence
  bars.
- **Dataset Analysis** (`/dataset-analysis`) — drag-and-drop CSV uploader,
  file details, and placeholders for row-level results and an emotion
  distribution chart.
- **Analytics** (`/analytics`) — dashboard summary cards and empty
  Recharts charts (bar, line, pie) ready to receive real data.
- **About** (`/about`) — model description, pipeline breakdown, and
  architecture notes.

## Connecting a real backend

All network calls are centralized in `src/lib/api.js`. Each function is a
documented stub — implement the `fetch`/`axios` call, point it at your
inference service, and the existing UI states (loading, error, results)
will work as-is:

- `predictText(text)` → `POST /api/predict/text`
- `predictDataset(file)` → `POST /api/predict/dataset`
- `fetchAnalyticsSummary()` → `GET /api/analytics/summary`

## Design system

- **Palette**: deep space background (`#05060A`) with an aurora of violet
  (`#7C5CFF`), cyan (`#35D0BA`), and rose accents, plus a dedicated color
  for each of the six emotion classes.
- **Type**: Space Grotesk (display), Inter (body), IBM Plex Mono (data/
  labels).
- **Signature element**: the "Spectrum Bar" — a segmented six-color bar
  representing the emotion classes, reused across the hero, footer, and
  About page to visually unify the product.

## Project structure

```
src/
  components/
    layout/   Navbar, Footer, PageTransition
    ui/       Reusable UI atoms (cards, buttons, charts, etc.)
  data/       Static content: emotions, workflow steps, stats
  lib/        api.js (backend integration contract), clsx helper
  pages/      Home, TextAnalysis, DatasetAnalysis, Analytics, About
```
