# Suitmedia Magang Berdampak 2025 – Frontend Test

## Setup
1. `npm install`  
2. `npm run dev`  

## Struktur
- `app/` – Next.js App Router  
- `components/` – Header, Banner, Card, Pagination  
- `public/` – banner1.jpg, logo.png, placeholder.jpg, placeholder2.jpg  
- `app/api/proxy/route.js` – API proxy to Suitmedia backend  

## Fitur
- Header hide/show on scroll + transparent bg  
- Banner with parallax & SVG clip  
- List with sort, per‑page, lazy-loading, clamp, fallback images  
- Pagination (5 pages) + first/prev/next/last  
- Dynamic detail page `/ideas/[slug]` (SSR)  
- API proxy for CORS-safe fetch

## Deploy
- Vercel / Netlify: set root to project, Next.js App Router auto-detect.
