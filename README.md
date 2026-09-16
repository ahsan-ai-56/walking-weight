# Walking Weight Loss Calculator — Next.js Website

Ye poori website Next.js 14 (App Router) + TypeScript + Tailwind CSS mein bani hai.

## 1. Run karna (local)

```bash
npm install
npm run dev
```
Phir browser mein `http://localhost:3000` khol lein.

## 2. Domain set karna

`lib/site-config.ts` file kholein aur `url` field mein apna asal domain daal dein:

```ts
url: "https://www.aapka-domain.com",
```
Bas itna change karne se sitemap, schema markup, aur canonical URLs — sab jagah sahi domain apply ho jayega.

## 3. Roz 1 naya blog post add karna

`data/blog-posts.ts` file kholein aur `blogPosts` array mein ek naya object add karein
(upar diye gaye 3 posts ko template ki tarah copy karein):

```ts
{
  slug: "your-post-url-slug",
  title: "Post Title",
  metaTitle: "SEO Title Under 60 Chars",
  metaDescription: "SEO description under 155 chars.",
  excerpt: "Short 1-2 line summary for the blog card.",
  datePublished: "2026-09-16",
  dateModified: "2026-09-16",
  readingMinutes: 7,
  faq: [ { question: "...", answer: "..." } ],
  bodyHtml: `<p>Your article HTML here...</p>`,
},
```
Ye save karte hi:
- Naya page automatically `/blog/your-post-url-slug` par ban jayega
- Sitemap mein automatically add ho jayega
- Article + FAQ schema (JSON-LD) automatically generate ho jayega
- Blog listing page par card automatically show ho jayega

## 4. Build / Deploy

```bash
npm run build
npm run start
```
Deploy kahin bhi ho sakta hai jo Next.js support karta ho (Vercel sab se aasan hai — free tier bhi hai).

## 5. Project structure

```
app/            → pages (home, blog, about, contact, legal pages)
components/     → Calculator, Header, Footer, JsonLd
lib/            → calculation formulas, schema builders, site config
data/           → blog posts, FAQ, reference tables
```

## 6. Baad mein add karne layak cheezein

- Ads code (AdSense/Adsterra) — jab ready ho to `app/layout.tsx` mein script tag add karna hoga
- Real logo (`public/logo.png`)
- Google Search Console verification tag
- Google Analytics tracking code
