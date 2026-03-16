# Project Detail Pages Plan

## Goal
Design and implement dedicated dynamic pages for each project (Films & Brand Work) featuring a smooth-scrolling architecture. The page will contain the project's background (About), high-resolution imagery (Stills), and a video player (Movie). 

---

## Design Spec

**Routing:** Dynamic route at `/work/[id]`
**Navigation:** Custom floating pill-shaped navbar with rounded corners and frosted glass.
- **Position:** Bottom center on Mobile (`< 768px`), Top center on Desktop (`md+`).
- **Links:** Back (to Home), About, Stills, Movie. Link clicks anchor-scroll smoothly to their respective sections.
**Content Layout (Single Page, Smooth Scroll):**
1. **About:** Hero section containing project title and descriptive text.
2. **Stills:** Image grid / masonry layout utilizing high-resolution imagery provided by the user. 
3. **Movie:** Full-width cinematic video player ready to accept an embed or raw `<video>` asset.

---

## Tasks

- [ ] **Task 1: Architect Central Data Source**
  Move the `workSections` data out of `components/Work.tsx` into a central configuration file (e.g., `lib/data.ts`). Update the `Project` type to include fields for `overviewText` (About), `stills` (array of image paths), and `movieUrl`.

- [ ] **Task 2: Build the Floating Project Navbar**
  Create `components/ProjectNavbar.tsx`. Implement fixed positioning: mobile at bottom (`bottom-6`), desktop at top (`md:top-6 md:bottom-auto`). Apply `backdrop-blur-md`, `bg-black/50`, and a pill shape (`rounded-full`). Add anchor links.

- [ ] **Task 3: Build Dynamic Route Template**
  Create `app/work/[id]/page.tsx`. Use `generateStaticParams` (or dynamic lookup) to handle incoming IDs. Load the exact project matching `params.id` from `lib/data.ts`.

- [ ] **Task 4: Build About Section**
  Construct an elegant hero header that displays the Title and the descriptive overview. Fade in elements smoothly on page load using Framer Motion or GSAP.

- [ ] **Task 5: Build Stills Grid Section**
  Implement a responsive CSS grid for the `stills` array (e.g., 1 column mobile, 2/3 columns desktop). Use `next/image` or standard `<img>` tags gracefully. Use GSAP ScrollTrigger to fade them in as you scroll down.

- [ ] **Task 6: Build Movie Player Section**
  Implement a placeholder 16:9 video container at the bottom of the page. Later, we can inject MP4s, Vimeo, or YouTube embeds into this slot as decided.

- [ ] **Task 7: Link 'Work' Component to Detail Pages**
  Update `components/Work.tsx` so that clicking on a video row (or clicking a newly added button on the row) pushes the user to `/work/[project.id]`.

---

## Done When
- Clicking a project on the Home page routes to `/work/[id]`.
- The new layout renders a floating pill navbar (responsive position logic applied).
- All 3 sections (About, Stills, Movie) exist on the page and can be navigated to via the smooth-scrolling navbar.
- The visual hierarchy respects the `Purple Ban` aesthetic (monochrome + `#89898b` / `#286976`).
