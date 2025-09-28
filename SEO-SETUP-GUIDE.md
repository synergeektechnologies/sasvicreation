# SEO Setup Guide for Sasvi Creations

## 📋 Pre-Hosting Checklist

### 1. **Update Domain URLs**
Before hosting, replace all instances of `your-domain.com` with your actual domain in:
- `app/layout.tsx` (OpenGraph URLs, verification)
- `app/page.tsx` (canonical URL)
- `app/sitemap.ts` (base URL)
- `app/robots.ts` (sitemap URL)
- `lib/structured-data.ts` (all URLs)

### 2. **Google Search Console Setup**

#### Step 1: Get Verification Code
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property" → "URL prefix"
3. Enter your domain: `https://your-domain.com`
4. Choose "HTML tag" verification method
5. Copy the verification code (meta tag content)

#### Step 2: Add Verification to Your Site
In `app/layout.tsx`, uncomment and add your verification code:
```tsx
verification: {
  google: 'your-google-verification-code-here',
},
```

#### Step 3: Submit Your Sitemap
After hosting:
1. In Google Search Console, go to "Sitemaps"
2. Submit: `https://your-domain.com/sitemap.xml`

### 3. **Additional SEO Files Created**

✅ **Meta Tags** - Enhanced SEO metadata
✅ **Sitemap** - `/sitemap.xml` (auto-generated)
✅ **Robots.txt** - `/robots.txt` (auto-generated)
✅ **Structured Data** - Local business & website schemas
✅ **Open Graph** - Social media sharing optimization
✅ **Twitter Cards** - Twitter sharing optimization

### 4. **Key SEO Features Added**

#### Meta Tags Include:
- Title optimization with location
- Detailed descriptions with keywords
- Local SEO keywords (Coimbatore, Kovaipudur)
- Open Graph for social sharing
- Twitter Cards
- Canonical URLs
- Robot directives

#### Structured Data Includes:
- Local Business Schema (BeautySalon)
- Website Schema with search functionality
- Service offerings
- Contact information
- Location data
- Rating information

### 5. **Post-Hosting Tasks**

#### Immediate (Day 1):
- [ ] Update all domain URLs
- [ ] Verify Google Search Console
- [ ] Submit sitemap
- [ ] Test all meta tags with [Open Graph Debugger](https://developers.facebook.com/tools/debug/)

#### Within 1 Week:
- [ ] Set up Google Analytics
- [ ] Add Google Business Profile
- [ ] Submit to Bing Webmaster Tools
- [ ] Check mobile-friendliness with Google Mobile-Friendly Test

#### Ongoing:
- [ ] Monitor search performance
- [ ] Update meta descriptions for better CTR
- [ ] Add blog/content pages for more keywords
- [ ] Build local citations and backlinks

### 6. **Local SEO Keywords Included**
- "bridal makeup artist coimbatore"
- "wedding makeup coimbatore"
- "kovaipudur makeup artist"
- "destination wedding makeup"
- "party makeup artist coimbatore"
- "professional makeup services"

### 7. **Technical SEO Features**
- Fast loading optimized images
- Mobile-responsive design
- Structured data markup
- Clean URL structure
- Proper heading hierarchy
- Alt text for images
- Fast loading fonts

## 🚀 Your site is now SEO-ready for hosting and Google indexing!