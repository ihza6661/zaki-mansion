# Spesifikasi Teknis - Zaki Mansion Elegance Website

**Versi**: 1.0.0  
**Tanggal**: 25 Desember 2025  
**Status**: Production Ready

---

## 1. Ringkasan Proyek

Website landing page modern untuk proyek properti "Zaki Mansion Elegance" di Pontianak, Kalimantan Barat. Website ini dirancang untuk menarik calon pembeli dengan showcase unit, kalkulator KPR, informasi fasilitas, dan kontak langsung via WhatsApp.

### Tujuan Bisnis
- Meningkatkan brand awareness properti premium
- Memfasilitasi calon pembeli dengan informasi lengkap
- Menyediakan tools (KPR calculator) untuk decision making
- Mempermudah komunikasi dengan sales team via WhatsApp

### Target Audience
- Keluarga muda mencari hunian pertama
- Profesional yang mencari investasi properti
- Pembeli dengan budget mid-to-high range (Rp 650 juta - 1.5 miliar)

---

## 2. Stack Teknologi

### Core Framework
- **React 18.3.1** - UI library dengan hooks dan functional components
- **TypeScript 5.8.3** - Static typing untuk code quality
- **Vite 5.4.19** - Build tool dengan HMR (Hot Module Replacement)

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Pre-built accessible components library
- **Framer Motion 12.23.26** - Animation library untuk smooth transitions
- **Lucide React 0.462.0** - Icon library

### Form & Validation
- **React Hook Form 7.61.1** - Form state management
- **Zod 3.25.76** - Schema validation

### Routing & SEO
- **React Router DOM 6.30.1** - Client-side routing
- **react-helmet-async 2.0.5** - Dynamic meta tags untuk SEO

### State Management
- **TanStack Query 5.83.0** - Server state management (ready for future API integration)
- Local state: React hooks (useState, useEffect, useCallback)

---

## 3. Arsitektur & Struktur Proyek

### Prinsip Arsitektur
1. **Data Abstraction Layer** - Semua content centralized di `src/data/index.ts`
2. **Type Safety** - TypeScript interfaces di `src/types/index.ts`
3. **Component-Based** - Modular, reusable components
4. **Performance First** - Lazy loading untuk heavy components

### Struktur Folder
```
src/
├── components/
│   ├── layout/          # Navbar, Footer, MobileStickyBar
│   ├── sections/        # Page sections (Hero, Units, Amenities, dll)
│   ├── ui/              # shadcn/ui components (auto-generated)
│   ├── NavLink.tsx
│   └── SEOHead.tsx
├── data/
│   └── index.ts         # ✨ Single source of truth untuk semua content
├── types/
│   └── index.ts         # TypeScript type definitions
├── pages/               # Index, NotFound
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions (cn, formatCurrency)
├── assets/              # Images & static files
└── App.tsx              # Root component dengan routing
```

### Key Design Pattern

**Centralized Data Layer**
- Semua text, harga, kontak info ada di `src/data/index.ts`
- Update content tanpa perlu edit component code
- Type-safe dengan TypeScript interfaces

**Component Composition**
- Functional components dengan arrow function syntax
- Props-based data flow (no prop drilling)
- Consistent import order dan naming conventions

---

## 4. Fitur Website

### 4.1 Hero Section
- Full-screen hero dengan CTA buttons
- Background image dengan overlay
- Scroll indicator animation
- Responsive layout

### 4.2 Experience Section
- Interior showcase dengan image + description
- Highlight value proposition properti
- Scroll-triggered animations

### 4.3 Units Section
- 3 tipe unit: Type 36, Type 54, Type 72
- Card layout dengan featured badge
- Harga mulai dari Rp 650 juta
- Responsive grid (1 kolom mobile, 3 kolom desktop)

### 4.4 Amenities Section
- Masonry grid layout (tall & wide cards)
- 3 fasilitas utama: Keamanan 24 jam, Taman Hijau, Kolam Renang
- Additional features badges (Cluster Eksklusif, Akses Mudah, dll)

### 4.5 KPR Calculator
- Real-time calculation cicilan bulanan
- Input: Harga rumah, DP, Bunga, Tenor
- Output: Cicilan/bulan, Total pinjaman, Total pembayaran
- Format currency: Indonesian Rupiah (IDR)
- Tenor options: 10, 15, 20 tahun

### 4.6 Location Section
- Google Maps iframe embed (lazy loaded)
- Nearby places dengan travel time
- Strategic location highlights
- Performance: Loaded on-demand untuk improve LCP

### 4.7 Contact Section
- WhatsApp direct link dengan pre-filled message
- Phone call button
- Trust badges (Developer Terpercaya, Legalitas Lengkap, KPR Dibantu)

### 4.8 SEO Optimization
- Dynamic meta tags via react-helmet-async
- Open Graph tags untuk social sharing (WhatsApp, Facebook, Twitter)
- Descriptive alt text pada semua images
- Semantic HTML structure
- Ready for Schema.org structured data

---

## 5. Konfigurasi Development

### Prerequisites
- Node.js version 18+ recommended
- npm, pnpm, atau yarn

### Available Scripts
```bash
npm run dev          # Dev server (port 8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # ESLint check
```

### Development Server
- Port: **8080** (configured di vite.config.ts)
- Host: `::` (IPv6 support)
- HMR enabled untuk fast refresh

### Path Alias
- `@/` → `./src/` (configured di tsconfig.json & vite.config.ts)
- Contoh: `import { Button } from "@/components/ui/button"`

### TypeScript Configuration
- `noImplicitAny`: false (permissive)
- `strictNullChecks`: false (permissive)
- `skipLibCheck`: true (faster builds)

---

## 6. Styling System

### Tailwind CSS Custom Theme

**Color Palette**
- `gold` - Accent color untuk CTA & highlights
- `gold-light` - Lighter variant untuk hover states
- `charcoal` - Primary text color
- `charcoal-soft` - Secondary text
- `cream` - Background alternating sections
- `background-cream` - Light background variant
- `dark-footer` - Footer background

**Typography**
- **Headings**: `font-serif` (Playfair Display) - elegant, luxury feel
- **Body**: `font-sans` (Lato) - clean, readable

**Responsive Breakpoints**
- Mobile first approach
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)
- `2xl`: 1400px (container max-width)

**Custom Utility Classes**
- `luxury-heading` - Pre-styled heading classes
- `luxury-body` - Pre-styled body text
- `luxury-button` - Pre-styled button variants

---

## 7. Performance Optimization

### Lazy Loading Strategy
- **LocationSection** di-lazy load menggunakan `React.lazy()` dan `Suspense`
- Alasan: Google Maps iframe berat, delay initial page load
- Skeleton loading state untuk better UX

### Image Optimization Guidelines
**PENTING**: Semua images harus dioptimasi sebelum deploy:
- Hero images: < 200KB
- Section images: < 100KB
- Thumbnails: < 50KB
- Format: WebP preferred, JPG fallback
- Tools: TinyPNG, ImageOptim, Squoosh

### Bundle Size
- Vite automatic code splitting
- React.lazy() untuk heavy components
- Tree-shaking enabled
- Production build minified

---

## 8. Data Management

### Content Update Flow

**Untuk Update Content (Text, Harga, Kontak)**
1. Edit file: `src/data/index.ts`
2. Cari section yang relevan (hero, units, amenities, dll)
3. Update value yang diperlukan
4. Save file → HMR akan auto-reload di dev mode

**Contoh: Update Harga Unit**
```typescript
// File: src/data/index.ts
export const UNITS: UnitType[] = [
  {
    type: "Type 36",
    price: "Mulai Rp 650 Juta", // ← Edit di sini
    // ...
  }
];
```

**Contoh: Update Nomor WhatsApp**
```typescript
// File: src/data/index.ts
export const CONTACT_CONFIG: ContactInfo = {
  whatsappLink: "https://wa.me/+6281352265111", // ← Edit di sini
  // ...
};
```

### Type Definitions
Semua data structure memiliki TypeScript interfaces di `src/types/index.ts`:
- `UnitType` - Unit specifications
- `AmenityType` - Amenity information
- `ContactInfo` - Contact configuration
- `PropertyDetails` - Property metadata
- `NavLink`, `SocialLink`, `NearbyPlaceType`, `TrustBadge`

---

## 9. SEO & Meta Tags

### Implementation
- Component: `src/components/SEOHead.tsx`
- Menggunakan `react-helmet-async` untuk dynamic meta tags
- `HelmetProvider` wraps entire app di `App.tsx`

### Meta Tags Included
✅ Title tag dengan property name  
✅ Meta description untuk search engines  
✅ Open Graph tags (og:title, og:description, og:image, og:url)  
✅ Twitter Card tags  
✅ Canonical URL  
✅ Viewport & charset meta tags  

### Social Sharing
- OG image: `public/og-image.jpg` (1200x630px recommended)
- Preview test: Facebook Debugger, Twitter Card Validator
- WhatsApp akan show preview card saat link di-share

---

## 10. Build & Deployment

### Production Build
```bash
npm run build
```
Output: `dist/` folder dengan optimized static files

### Pre-Deployment Checklist
- [ ] Test production build: `npm run build && npm run preview`
- [ ] Verify all links working (WhatsApp, phone, navigation)
- [ ] Test responsive layout (mobile, tablet, desktop)
- [ ] Check image optimization (file sizes)
- [ ] Update `SITE_CONFIG.url` di `src/data/index.ts`
- [ ] Verify OG image exists: `public/og-image.jpg`
- [ ] Run linter: `npm run lint`
- [ ] Test KPR calculator dengan different inputs

### Environment Variables
Currently: **Tidak ada environment variables** (static site)

Future considerations (jika ada backend):
- API endpoints
- Google Maps API key (embed URL currently hardcoded)
- Analytics tracking ID

### Deployment Platforms
Compatible dengan semua static hosting:
- **Vercel** (recommended) - Zero config deployment
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

**Current Production**: https://zaki-mansion.vercel.app

---

## 11. Testing Strategy

### Current Status
❌ **Belum ada testing framework** di project ini

### Recommended Setup (Future)
1. **Unit Testing**: Vitest + React Testing Library
2. **E2E Testing**: Playwright atau Cypress
3. **Visual Testing**: Chromatic (optional)

### Test Coverage Targets (Future)
- KPR Calculator logic (unit tests)
- Form validation (unit tests)
- Component rendering (integration tests)
- User flow: Navigate → KPR → Contact (E2E)

---

## 12. Accessibility (WCAG AA)

### Current Implementation
✅ Semantic HTML elements (header, nav, section, footer)  
✅ Alt text untuk semua images (descriptive)  
✅ ARIA labels pada icon buttons  
✅ Keyboard navigation support  
✅ Color contrast ratios compliant  
✅ Focus indicators visible  

### Improvements Needed (Future)
- [ ] Skip to main content link
- [ ] Screen reader testing
- [ ] Keyboard trap prevention audit
- [ ] Form error announcements

---

## 13. Maintenance Guide

### Cara Menambah Unit Baru
1. Tambah image baru ke `src/assets/`
2. Import image di `src/data/index.ts`
3. Tambah object baru ke `UNITS` array:
```typescript
{
  type: "Type 90",
  area: "90/200 m²",
  bedrooms: "5 Kamar Tidur",
  price: "Mulai Rp 2 Miliar",
  image: unit90,
  alt: "Deskripsi untuk SEO",
  featured: false
}
```

### Cara Update Kontak Info
Edit `CONTACT_CONFIG` di `src/data/index.ts`:
```typescript
export const CONTACT_CONFIG: ContactInfo = {
  phone: "+6281234567890",
  phoneFormatted: "+62 812-3456-7890",
  whatsappLink: "https://wa.me/+6281352265111",
  email: "info@zakimansion.com",
  address: "Alamat lengkap properti"
};
```

### Cara Menambah Fasilitas Baru
1. Tambah image ke `src/assets/`
2. Import dan tambah ke `AMENITIES` array di `src/data/index.ts`:
```typescript
{
  title: "Jogging Track",
  subtitle: "Fitness Area",
  image: joggingImage,
  size: "wide", // atau "tall"
  alt: "Deskripsi untuk SEO"
}
```

### Cara Update Navigation Menu
Edit `NAV_LINKS` array di `src/data/index.ts`:
```typescript
export const NAV_LINKS: NavLink[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Promo", href: "#promo" }, // ← Tambah item baru
  // ...
];
```

---

## 14. Troubleshooting

### Common Issues

**Build Error: "Module not found"**
- Solution: Check import path menggunakan `@/` alias
- Verify file exists di lokasi yang benar

**TypeScript Error: Type mismatch**
- Solution: Check type definition di `src/types/index.ts`
- Pastikan data structure match dengan interface

**Images Not Loading**
- Solution: Verify import path di `src/data/index.ts`
- Check file extension (.jpg, .webp, .png)
- Ensure image file exists di `src/assets/`

**WhatsApp Link Not Working**
- Solution: Verify format: `https://wa.me/+6281234567890`
- Remove spaces dan special characters dari phone number
- Test link di browser

**Styling Not Applied**
- Solution: Check Tailwind class names (typo)
- Verify custom colors defined di `tailwind.config.ts`
- Clear cache: `rm -rf node_modules/.vite`

**Dev Server Port Conflict**
- Solution: Kill process di port 8080 atau edit `vite.config.ts`
- Change port: `server: { port: 3000 }`

---

## 15. Security Considerations

### Current Implementation
✅ No sensitive data di frontend code  
✅ No API keys exposed (static site)  
✅ Input sanitization via Zod validation  
✅ No XSS vulnerabilities (React auto-escaping)  

### Best Practices
- Jangan commit `.env` files ke Git
- Validate all user inputs (forms)
- Keep dependencies updated: `npm audit`
- Use HTTPS di production (enforced by Vercel)

---

## 16. Browser Support

### Target Browsers
- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile Safari (iOS): Last 2 versions
- Chrome Android: Last 2 versions

### Fallbacks
- Modern CSS features (Grid, Flexbox) supported
- Framer Motion animations degrade gracefully
- WebP images dengan JPG fallback (manual)

---

## 17. Analytics & Monitoring (Future)

### Recommended Tools
- **Google Analytics 4** - User behavior tracking
- **Hotjar** - Heatmaps & session recordings
- **Sentry** - Error monitoring (jika ada)
- **Vercel Analytics** - Web vitals & performance

### Key Metrics to Track
- Page views & unique visitors
- Bounce rate
- Time on page
- KPR Calculator usage (interactions)
- WhatsApp click-through rate (CTR)
- Form submissions (jika ada backend)

---

## 18. Dokumentasi Tambahan

### Related Documents
- **AGENTS.md** - Panduan lengkap untuk coding agents
- **DEPLOYMENT_GUIDE.md** - Step-by-step deployment instructions
- **README.md** - Quick start guide untuk developers

### External Resources
- [React Docs](https://react.dev/)
- [Vite Guide](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Framer Motion API](https://www.framer.com/motion/)

---

## 19. Contact & Support

### Developer Contact
- **Repository**: https://github.com/ihza6661/zaki-mansion
- **Production Site**: https://zaki-mansion.vercel.app

### Technical Questions
Untuk pertanyaan teknis atau bug reports:
1. Check dokumentasi ini terlebih dahulu
2. Review AGENTS.md untuk coding guidelines
3. Create issue di GitHub repository
4. Contact development team

---

## 20. Changelog

### Version 1.0.0 (Current)
- ✅ Initial release dengan semua core features
- ✅ Hero, Units, Amenities, Location, Contact sections
- ✅ KPR Calculator functional
- ✅ SEO optimization dengan react-helmet-async
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Performance optimization (lazy loading)
- ✅ Production deployment ready

### Future Roadmap
- [ ] Testing framework setup (Vitest + RTL)
- [ ] Backend integration untuk form submissions
- [ ] Admin panel untuk content management
- [ ] Multi-language support (English)
- [ ] Google Analytics integration
- [ ] Virtual tour feature (360° images)
- [ ] Unit availability status (sold/available)
- [ ] Online booking system

---

**Document Version**: 1.0.0  
**Last Updated**: 25 Desember 2025  
**Status**: ✅ Production Ready

---

## Quick Reference Card

### Common Commands
```bash
# Development
npm install          # Install dependencies
npm run dev          # Start dev server (port 8080)
npm run build        # Production build
npm run preview      # Preview build
npm run lint         # Check code quality

# Content Updates
📄 src/data/index.ts      # Update text, prices, contact
📄 src/types/index.ts     # TypeScript interfaces
📁 src/assets/            # Add images here

# Key Files
📄 src/App.tsx            # Root component + routing
📄 src/pages/Index.tsx    # Main landing page
📄 vite.config.ts         # Build configuration
📄 tailwind.config.ts     # Styling configuration
```

### Emergency Contacts
- **Deployment Issues**: Check Vercel dashboard
- **Content Updates**: Edit `src/data/index.ts`
- **Styling Issues**: Check `tailwind.config.ts`
- **Build Errors**: Check `vite.config.ts` & `tsconfig.json`

---

**End of Technical Specification Document**
