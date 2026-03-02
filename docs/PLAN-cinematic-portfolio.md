# Kushal Dhingra — Cinematic Portfolio Website

## Goal
Build a cinematic, single-scroll portfolio website for Kushal Dhingra using Next.js 14 App Router + GSAP ScrollTrigger, deployed to Vercel.

---

## Design Spec

| Property | Value |
|----------|-------|
| **Stack** | Next.js 14 (App Router) + TypeScript |
| **Animation** | GSAP + ScrollTrigger + Framer Motion |
| **Font** | EB Garamond (Google Fonts) |
| **Palette** | `#000000` · `#ffffff` · `#89898b` · `#286976` |
| **Sections** | Home · Work · CV · About · Contact |
| **Deployment** | Vercel (GitHub integration) |

---

## Tasks

- [ ] **Task 1: Scaffold Next.js project**
  Run `npx create-next-app@latest ./ --typescript --tailwind=false --eslint --app --src-dir=false --import-alias="@/*"` in project root
  → Verify: `npm run dev` starts on localhost

- [ ] **Task 2: Install dependencies**
  Run `npm install gsap @gsap/react framer-motion`
  → Verify: `node_modules/gsap` exists

- [ ] **Task 3: Set up global design system**
  Create `app/globals.css` with CSS variables for palette, EB Garamond font import, and base typography tokens
  → Verify: Font and colors appear correctly in browser

- [ ] **Task 4: Build sticky Navbar component**
  Create `components/Navbar.tsx` — sticky, minimal, name left + nav links right, smooth highlight on active section
  → Verify: Nav is visible at top on scroll, links work as anchor scrolls

- [ ] **Task 5: Build Hero section (zoom parallax)**
  Create `components/Hero.tsx` with a full-viewport image of Kushal, GSAP ScrollTrigger `scale` from 1.0→1.2 on scroll, name + title centered overlay
  → Verify: Zoom parallax effect visible on scroll down

- [ ] **Task 6: Build Work section (video accordion)**
  Create `components/Work.tsx` — 4 full-width accordion rows. Each row: project title visible, on hover expands height + plays video snippet (poster = first frame), on mouse leave collapses + pauses
  → Verify: 4 rows render, hover plays video, collapse on leave

- [ ] **Task 7: Build CV section**
  Create `components/CV.tsx` — a clean typographic layout of education, experience, skills. Scroll-triggered fade-in per row
  → Verify: CV section appears below Work, animates in on scroll

- [ ] **Task 8: Build About section**
  Create `components/About.tsx` — minimal paragraph about Kushal, photo (if provided), scroll-triggered text reveal
  → Verify: Text and image reveal smoothly on scroll

- [ ] **Task 9: Build Contact section**
  Create `components/Contact.tsx` — form (name / email / message / submit), minimal styling, uses native form action or Resend API (placeholder for now)
  → Verify: Form renders, all fields present, submit button works (console.log for now)

- [ ] **Task 10: Assemble full page + SEO metadata**
  Wire all components into `app/page.tsx`, add metadata (title, description, og:image), section IDs for nav anchors
  → Verify: All sections visible in order on single scroll, no layout breaks

- [ ] **Task 11: Add scroll-reveal animations globally**
  Add GSAP ScrollTrigger `fade + translateY` reveals on CV, About, Contact section headings
  → Verify: Sections animate in as they enter viewport

- [ ] **Task 12: Responsive polish**
  Audit on mobile (375px) and tablet (768px) — accordion collapses to simpler layout on mobile, hero text scales via clamp()
  → Verify: No horizontal overflow, readable on all sizes

- [ ] **Task 13: Deploy to Vercel**
  Push to GitHub → connect repo on vercel.com → deploy
  → Verify: Live URL accessible, Lighthouse score ≥ 90 performance

---

## Placeholder Content (to be replaced by user)

| Item | Placeholder |
|------|-------------|
| Hero image | AI-generated professional headshot placeholder |
| Project videos | `<video>` with `poster` (first frame) + `src` (user will provide) |
| CV data | Template data (education, experience, skills) |
| About text | Short bio paragraph |

---

## Done When

- [ ] All 5 sections (Home, Work, CV, About, Contact) render on a single scroll
- [ ] Hero parallax zoom works on scroll
- [ ] Work accordion plays project videos on hover
- [ ] CV and Contact sections animate in on scroll
- [ ] Live on Vercel with a public URL
- [ ] No console errors, no layout overflow on mobile

---

## Notes

- **Video placeholders**: User will provide 4 project snippet videos. Until provided, we use a looping placeholder via CSS gradient poster.
- **Purple Ban**: Strictly enforced — only `#000000`, `#ffffff`, `#89898b`, `#286976` used.
- **GSAP SSR**: All GSAP code wrapped in `useEffect` or uses `@gsap/react` `useGSAP` hook to avoid SSR errors.
- **EB Garamond**: Loaded via `next/font/google` for optimal performance.
