## Goal
Build the complete Palomar homepage — a premium B2B website for HR/ESG decision-makers — with a Mediterranean editorial design, 9 structured sections, and multilingual-ready content.

## Design Direction
**Mediterranean editorial** (asymmetric hero, deep navy + sand palette, editorial serif + monospace accents, image-led, progressive citizen-science reveal).

## Work Breakdown

### 1. Design System Update
- Update `src/styles.css` with the Mediterranean palette (deep navy primary, warm sand background, ochre accent)
- Register display serif and sans-serif font tokens
- Ensure light/dark mode tokens work

### 2. Image Generation
- Generate hero Mediterranean coast image
- Generate fieldwork/exploration images for the Experience section
- Generate solution/territorial imagery
- All saved to `src/assets/`

### 3. Homepage Build — 9 Sections
Implement in `src/routes/index.tsx`:
1. **Hero** — Business value headline, 2 CTAs ("For companies" / "Learn more")
2. **Value** — Corporate challenge: engagement + sustainability disconnect
3. **Solution** — What Palomar does (experiences, learning, exploration, contribution) — NO "citizen science" yet
4. **Experience** — Curiosity and discovery: people exploring, learning, collaborating
5. **Concept** — Reveal: "This approach is called citizen science" — simple 3–4 line explanation
6. **How it Works** — 4-step process (Alignment → Deployment → Analysis → Reporting)
7. **Business Value** — Benefits: engagement, ESG, learning, culture
8. **Vision** — Mediterranean identity, community of companies/people/researchers
9. **CTA** — Invite to start a pilot or collaborate

### 4. Navigation & Shared Layout
- Add a sticky nav with logo, section links, and contact CTA to `__root.tsx`
- Ensure `Outlet` renders correctly for all routes

### 5. Content & UX
- Short, scannable sentences throughout
- Clear section titles
- Icon + visual hierarchy
- Text structured for easy EN/IT/FR translation (simple structures, no nested conditionals)

### 6. SEO & Meta
- Route-specific `head()` with title, description, OG tags
- Semantic HTML, single H1, alt text on images

## Files to Modify
- `src/styles.css` — design tokens
- `src/routes/index.tsx` — homepage content
- `src/routes/__root.tsx` — nav + layout adjustments
- `src/assets/` — generated images