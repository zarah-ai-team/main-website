# Zarah AI — Company Website

The marketing / company-profile website for **Zarah AI**, a technology studio that
builds smart software to automate manual operations. Built with **Next.js 14
(App Router)**, **TypeScript**, and **Tailwind CSS**. Fully static — deployable
anywhere.

---

## Run it locally

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:3000
```

Other commands:

```bash
npm run build    # production build
npm start        # serve the production build
```

---

## Pages

| Route        | Page                                   |
| ------------ | -------------------------------------- |
| `/`          | Home (hero, pillars, services, work, process, stats, CTA) |
| `/services`  | Full services list + engagement process |
| `/work`      | Case studies (Liberty India, Book United Hotels) |
| `/about`     | Story, mission, values                 |
| `/contact`   | Email / WhatsApp + contact form        |

---

## ✏️ How to edit content

**Almost everything lives in one file:** [`src/lib/site.ts`](src/lib/site.ts)

- Company name, tagline, description
- **Contact details** (email, WhatsApp number, location) ← update these first
- Navigation links
- Services, value pillars, process steps
- Case studies / projects
- Stats and values

Edit that file and the whole site updates.

### ⚠️ Replace the placeholder contact info

In `src/lib/site.ts`, update the `contact` block:

```ts
contact: {
  email: "hello@zarah-ai.com",        // ← your real email
  whatsapp: "919999999999",           // ← real number, country code, digits only
  whatsappDisplay: "+91 99999 99999", // ← how it's shown
  ...
}
```

---

## 🎨 Branding — the Zarah AI Design System

The site implements the official **"Zarah AI Design System"** (claude.ai/design
project): signature yellow `#FFDE39` on carbon neutrals `#1F1F1F / #2A2929 /
#444342`, **Poppins** as the brand typeface, 8px button / 12px card radii,
plain backgrounds (no gradients), 120/200/320ms ease-out motion, and yellow
reserved for primary actions only.

- **Tokens:** the `:root` block in [`src/app/globals.css`](src/app/globals.css)
  (space-separated RGB channels consumed by Tailwind).
- **Layout/shadows/radii mapping:** [`tailwind.config.ts`](tailwind.config.ts)
  (1280px container, 20/40/80px responsive margins).
- **Fonts:** Poppins via `next/font` in [`src/app/layout.tsx`](src/app/layout.tsx).
- **Logo:** official SVG lock-ups in `/public`
  (`logo-zarah-ai-dark.svg` for dark canvases, `-light` for light), rendered by
  [`src/components/Logo.tsx`](src/components/Logo.tsx).

## 🧊 3D elements

- [`src/components/Globe3D.tsx`](src/components/Globe3D.tsx) — the hero's 3D
  particle globe + orbiting satellite (the brand's globe-and-airplane motif).
  Pure Canvas 2D, no libraries; pauses offscreen; honors reduced motion.
- [`src/components/Tilt.tsx`](src/components/Tilt.tsx) — subtle 3D
  tilt-on-hover for cards; disabled on touch and reduced-motion.

---

## 📸 Adding real screenshots to the Work page

Case-study visuals currently use a stylized wireframe placeholder
([`src/components/SiteWireframe.tsx`](src/components/SiteWireframe.tsx)). To
use real screenshots, add images to `/public` and replace `<SiteWireframe>`
inside [`src/components/ProjectCard.tsx`](src/components/ProjectCard.tsx) and
[`src/app/work/page.tsx`](src/app/work/page.tsx) with a `next/image`.

---

## 🚀 Deploy

**Vercel (recommended, free):**
1. Push this folder to a GitHub repo.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — click Deploy.

**Netlify / others:** works out of the box with the Next.js build.

To point `zarah-ai.com` at it, add the domain in your host's dashboard and
update your DNS records as instructed there.

---

## Contact form

The form on `/contact` composes a pre-filled email and opens the visitor's mail
app (no backend needed). To capture submissions server-side instead (e.g.
Formspree, Resend, or a Next.js route handler), see the note in
[`src/components/ContactForm.tsx`](src/components/ContactForm.tsx).
