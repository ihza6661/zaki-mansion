# Deployment Guide - Zaki Mansion Elegance

This guide walks you through the final steps needed before deploying your application to production.

---

## 1. Open Graph (OG) Image for Social Sharing

### What is it?
When users share your website link on WhatsApp, Facebook, Twitter, or other social platforms, an **Open Graph image** is displayed as a preview thumbnail.

### Requirements

**Image Specifications:**
- **Dimensions:** 1200px × 630px (exact)
- **Format:** JPG or PNG (JPG recommended for smaller file size)
- **File Size:** Keep under 1MB (aim for 200-500KB after optimization)
- **File Name:** `og-image.jpg`

**Design Recommendations:**
- Feature the property hero image or attractive exterior shot
- Include the property name: **"Zaki Mansion Elegance"**
- Add tagline or key selling point
- Use luxury design aesthetic (gold accents, elegant typography)
- Ensure text is readable at small sizes (mobile previews)
- Test on dark and light backgrounds (WhatsApp uses both)

### Where to Place the Image

1. **Location:** Place the image in the `public/` folder at the root of your project:
   ```
   /home/ihzabaker/Projects/Real-Estate/zaki-mansion-elegance/public/og-image.jpg
   ```

2. **File Structure:**
   ```
   zaki-mansion-elegance/
   ├── public/
   │   ├── favicon.ico
   │   ├── og-image.jpg    ← Add your image here
   │   ├── placeholder.svg
   │   └── robots.txt
   ├── src/
   └── ...
   ```

### How to Update Site URL (For Production)

The SEO component currently uses `window.location.origin` to dynamically detect your domain. However, for optimal Open Graph support, you should update the site URL in your data configuration:

**File:** `src/data/index.ts`

**Add this constant at the top of the file:**

```typescript
/**
 * Site Configuration
 */
export const SITE_CONFIG = {
  url: "https://yourdomain.com",  // Replace with your actual production domain
  ogImagePath: "/og-image.jpg",
};
```

**Then update `src/components/SEOHead.tsx`:**

Replace this line:
```typescript
const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
```

With:
```typescript
import { SITE_CONFIG } from "@/data";
const siteUrl = SITE_CONFIG.url;
```

And replace:
```typescript
const imageUrl = `${siteUrl}/og-image.jpg`;
```

With:
```typescript
const imageUrl = `${siteUrl}${SITE_CONFIG.ogImagePath}`;
```

### Testing Open Graph Tags

**Before Deployment:**
1. Run the dev server: `npm run dev`
2. View page source and verify `<meta property="og:image" content="...">` exists
3. Ensure the image URL is correct

**After Deployment:**
Test your Open Graph implementation using these tools:
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Card Validator:** https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/
- **WhatsApp:** Share the link to yourself and check preview

**Important:** These platforms cache OG images. After updating your image:
1. Clear the cache using the respective debugger tools
2. WhatsApp caches aggressively - it may take 24-48 hours to update

---

## 2. Environment Configuration

### Update Contact Information

**File:** `src/data/index.ts`

Update the placeholder phone number with your actual contact:

```typescript
export const CONTACT_CONFIG: ContactInfo = {
  phone: "+6281234567890",  // ← Replace with real WhatsApp number
  email: "info@zakimansion.com",  // ← Update with real email
  whatsappMessage: "Halo, saya tertarik dengan Zaki Mansion Elegance",
};
```

### Update Social Media Links

**File:** `src/data/index.ts`

Update your social media URLs:

```typescript
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Instagram",
    url: "https://www.instagram.com/zakimansion",  // Already filled
    icon: Instagram,
  },
  {
    platform: "Facebook",
    url: "#",  // ← Replace with real Facebook page URL
    icon: Facebook,
  },
];
```

---

## 3. Google Maps Integration

### Update Property Location

**File:** `src/data/index.ts`

Ensure your Google Maps embed URL is correct:

```typescript
export const PROPERTY_DETAILS: PropertyDetails = {
  name: "Zaki Mansion Elegance",
  tagline: "Hunian Mewah dengan Konsep Modern Minimalis",
  location: "Cibubur, Jakarta Timur",
  mapUrl: "https://www.google.com/maps/embed?pb=...",  // ← Verify this URL
};
```

**How to Get the Correct Map URL:**
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your property address
3. Click **Share** → **Embed a map**
4. Copy the `src` attribute from the iframe code
5. Paste it as the `mapUrl` value

---

## 4. Production Build Checklist

Before deploying to production, run through this checklist:

### Pre-Deployment Checks

- [ ] **OG Image Added:** `public/og-image.jpg` exists and is 1200x630px
- [ ] **Contact Info Updated:** Real phone number and email in `src/data/index.ts`
- [ ] **Site URL Updated:** `SITE_CONFIG.url` points to production domain
- [ ] **Social Links Updated:** Instagram and Facebook URLs are correct
- [ ] **Google Maps Verified:** `mapUrl` shows the correct location
- [ ] **Images Optimized:** All images in `src/assets/` are optimized (see AGENTS.md)
- [ ] **Build Successful:** `npm run build` completes without errors
- [ ] **Lint Passed:** `npm run lint` shows no critical errors
- [ ] **Test Locally:** `npm run preview` and test all functionality

### Build Commands

```bash
# Install dependencies
npm install

# Run production build
npm run build

# Preview production build locally
npm run preview
```

### Deployment Files

After running `npm run build`, your production files will be in the `dist/` folder:

```
dist/
├── index.html
├── assets/
│   ├── *.css (styles)
│   ├── *.js (JavaScript bundles)
│   └── *.jpg (images)
└── og-image.jpg (copied from public/)
```

Upload the entire `dist/` folder to your web hosting service.

---

## 5. Post-Deployment Verification

After deploying, verify these critical features:

### Functionality Tests

1. **Navigation:**
   - [ ] All navigation links scroll to correct sections
   - [ ] Mobile menu opens and closes properly
   - [ ] Sticky navbar appears on scroll

2. **KPR Calculator:**
   - [ ] Input fields accept numbers
   - [ ] Down payment percentage calculation works
   - [ ] Monthly payment calculation is accurate
   - [ ] Tenor slider updates values

3. **Contact Forms:**
   - [ ] WhatsApp button opens with pre-filled message
   - [ ] Phone number link works on mobile
   - [ ] Email link opens mail client

4. **Performance:**
   - [ ] LocationSection lazy loads (check Network tab in DevTools)
   - [ ] Images load quickly
   - [ ] No console errors

### SEO Verification

1. **Meta Tags:**
   - View page source (Ctrl+U / Cmd+Option+U)
   - Verify `<title>`, `<meta name="description">`, and all OG tags are present

2. **Social Sharing:**
   - Test WhatsApp share: Does preview show OG image and title?
   - Test Facebook share using Facebook Debugger tool
   - Test Twitter share using Twitter Card Validator

3. **Mobile Responsiveness:**
   - Test on actual mobile devices (Android and iOS)
   - Verify all sections are readable and functional
   - Check that MobileStickyBar appears on mobile

---

## 6. Hosting Recommendations

### Static Site Hosting Options

**Recommended Platforms:**
- **Vercel** (easiest, free tier available, automatic HTTPS)
- **Netlify** (free tier, great for static sites)
- **GitHub Pages** (free, good for simple sites)
- **Cloudflare Pages** (fast CDN, free tier)

### Deployment Steps (Vercel Example)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

3. **Connect Domain:**
   - Add your custom domain in Vercel dashboard
   - Update DNS records as instructed
   - Vercel automatically provisions SSL certificate

---

## 7. Ongoing Maintenance

### Updating Content

All content is centralized in `src/data/index.ts`. To update:

1. Edit the values in `src/data/index.ts`
2. Run `npm run build`
3. Deploy updated `dist/` folder

**No code changes needed** for content updates - just modify the data file.

### Adding New Unit Types

Add new entries to the `UNITS` array in `src/data/index.ts`:

```typescript
{
  id: 4,
  type: "Type 90",
  landArea: 90,
  buildingArea: 72,
  bedrooms: 4,
  bathrooms: 3,
  carports: 2,
  price: 2500000000,
  image: unitType90Image,  // Import the image first
  imageAlt: "Interior design Type 90 Zaki Mansion with 4 bedrooms",
}
```

### Performance Monitoring

After deployment, monitor these metrics:
- **Lighthouse Score:** Aim for 90+ in all categories
- **Core Web Vitals:** Check in Google Search Console
- **Bundle Size:** Keep main JS bundle under 500KB gzipped

---

## 8. Common Issues & Solutions

### Issue: OG Image Not Showing on WhatsApp

**Solution:**
1. Ensure image is exactly 1200x630px
2. Verify `og:image` meta tag has absolute URL (not relative)
3. WhatsApp caches aggressively - wait 24-48 hours or share to different contact
4. Use Facebook Debugger to clear cache: https://developers.facebook.com/tools/debug/

### Issue: Google Maps Not Loading

**Solution:**
1. Verify `mapUrl` in `src/data/index.ts` is a valid embed URL
2. Check browser console for iframe security errors
3. Ensure the URL starts with `https://www.google.com/maps/embed`

### Issue: Images Not Loading After Deployment

**Solution:**
1. Verify images are in `dist/assets/` after build
2. Check image paths use relative imports (e.g., `import image from "@/assets/image.jpg"`)
3. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

### Issue: WhatsApp Link Not Working

**Solution:**
1. Ensure phone number in `CONTACT_CONFIG` includes country code (+62 for Indonesia)
2. Remove all spaces and special characters from phone number
3. Test on actual mobile device (desktop WhatsApp Web has limitations)

---

## Support & Resources

- **Project Documentation:** See `AGENTS.md` for code architecture
- **shadcn/ui Docs:** https://ui.shadcn.com/
- **React Docs:** https://react.dev/
- **Vite Docs:** https://vitejs.dev/

---

**Last Updated:** December 25, 2025
**Version:** 1.0.0
