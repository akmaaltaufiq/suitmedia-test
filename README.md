# 🎯 Suitmedia Frontend Internship Test – Magang Berdampak 2025

Implementasi test proyek frontend untuk seleksi magang di Suitmedia. Dibuat dengan **Next.js App Router**, **Tailwind CSS**, dan **dynamic API integration** dari backend Suitmedia.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

```bash
🗂️ Project Structure

├── app/                # Routing & pages (App Router)
├── components/         # Header, Banner, Card, Pagination
├── public/             # Static assets: logo, banner, placeholder images
├── tailwind.config.js
└── next.config.js      # CORS-safe proxy
```

```bash
✨ Features

✅ Responsive UI with Tailwind CSS
✅ Sticky Header with hide-on-scroll & transparent effect
✅ Banner with parallax scroll & SVG clip
✅ Post List with:
    - Sorting (latest/oldest)
    - Items per page [10, 20, 50]
    - Persistent state on refresh
    - Lazy-loading images
    - Clamp title to max 3 lines
✅ Pagination with full control (First / Prev / Next / Last)
✅ API Integration via /api/proxy (Next.js Middleware)
✅ Dynamic Detail Page /ideas/[slug] (SSR ready)
```

🌐 Live Demo
👉 https://suitmedia-akmaaltaufiq.vercel.app/

🛠️ Built With
Next.js 15 (App Router)
Tailwind CSS
Vercel – for deployment
Suitmedia Public API