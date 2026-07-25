# spec.md — Portfolio Personalization: Content, Logos, Visual Refresh

> No `constitution.md` exists in this repo (confirmed). This spec is the sole governing document, built from a codebase read, `Personal-Skills.md`, and a clarifying interview that resolved every ambiguity below. Nothing in this document is provisional.

## Goal
Replace the site's current identity (Ibrahim Memon) with Mohammad Ayan's real content from `Personal-Skills.md`, remove every personal/company brand-mark image, and replace the current violet/purple palette with a dark "developer japandi" palette — while keeping the site's existing 6-section structure and order unchanged.

## User Scenarios
1. A visitor sees "Mohammad Ayan" and a rotating title ("AI Engineer" / "FDE (Forward Deployed Engineer)") in the hero, with zero trace of Ibrahim Memon or WebHR.
2. A visitor reads about **Master Closer** and **Oil Cron** — Mohammad's own built products — under the heading "Stuff I Built," and again under Projects with different framing.
3. A visitor can reach Mohammad via three icons only: GitHub, Instagram, Gmail — each linking to a real, working URL. No other social icon appears.
4. A visitor sees 11 tech-stack tags and a career-goal sentence in the About section, in place of the old illustration and blurb.
5. Browser tab, link previews, and page source show Mohammad Ayan's identity, a text-only preview card, and no reference to `ibiimemon.com`.
6. The overall page reads as a muted, restrained, dark japandi-styled site — not the prior purple-gradient look, and not the "AI slop" purple/Inter/card-grid look.

## Functional Requirements
Each item is independently checkable; skipping any one must visibly fail.

1. **Zero prior-identity strings.** Rendered HTML and metadata contain no occurrence of: "Ibrahim", "Memon", "WebHR", "ibiimemon.com", "Somezing", "FileIT", "NeuraWeb", "Apple Vision Pro – HR Software Design", "Muhammad Ayan" (wrong spelling).
2. **Header.** The logo slot shows the plain text "Mohammad Ayan" — no image, no SVG mark. Nav links unchanged.
3. **Hero identity and copy.** Hero displays "Mohammad Ayan" and the tagline from `Personal-Skills.md` Section 1 ("An AI Engineer who judges an AI agent by how much work it actually saves you...").
4. **Hero rotation, exactly two roles.** The rotating role text cycles only between "AI Engineer" and "FDE (Forward Deployed Engineer)." No other string may appear in that rotation, including any of the old three roles.
5. **No employer badge.** No single-employer logo or name badge appears anywhere (the old "at WebHR" pattern is fully removed, not replaced with anything equivalent).
6. **"Stuff I Built" section.** The section formerly titled "Work Experience" is retitled "Stuff I Built" and contains exactly two cards — Master Closer and Oil Cron — using the Section 2 ("Work Experience") descriptions from `Personal-Skills.md`. Each card's icon-image slot shows a neutral, non-logo placeholder graphic (not a company icon, not reused from `card-1.png`–`card-4.png`).
7. **Projects section.** Contains the same two items, using the distinct Section 4 ("Featured Projects") descriptions from `Personal-Skills.md`. The generic "Featured Project" sub-heading from the source file is dropped — only the real project name is used as the heading. Each project's image slot shows a neutral placeholder (not `project-1.png`/`project-2.png`). No paragraph is duplicated verbatim between this section and "Stuff I Built."
8. **About section — 1:1 slot swap.** Paragraph slot = the career-goal sentence ("Seeking freelance opportunities as an independent Forward Deployed Engineer to build custom AI workflows"). Image slot = all 11 tech-stack tags (`OpenClaw`, `Claude Code`, `OpenCode`, `Claude`, `Gemini`, `Python`, `GitHub`, `Markdown`, `HTML`, `CSS`, `JS`) rendered as text/tags, replacing `illustration.png`. No third slot is added.
9. **Footer contact — exactly three icons.** GitHub (`https://github.com/mayansohail2009-creator`), Instagram (`https://www.instagram.com/_ibn_sohail_/`), Gmail (`mailto:mayansohail2009@gmail.com`) — each a generic platform icon, none a personal/company mark. Email appears once, not twice.
10. **No brand-mark or leftover personal imagery.** None of `logo.svg`, `webhr.webp`, `card-1.png`–`card-4.png`, `me.png`, `me-glow.png`, `illustration.png`, `thumbnail.png`, `project-1.png`, `project-2.png` are referenced anywhere in the shipped page.
11. **Favicon.** Replaced with a neutral, non-Ibrahim placeholder icon.
12. **SEO/metadata.** `<title>`, meta description, keywords, author/creator/publisher, and canonical URL describe Mohammad Ayan consistent with `Personal-Skills.md`. OG/Twitter preview image is a text-only card (name + title, no photo) — `thumbnail.png` is not used.
13. **README.** No longer attributes brand identity or copyright to Ibrahim Memon.
14. **Palette.** Primary palette moves to a dark "developer japandi" direction (muted, restrained, non-purple, non-violet) — replacing `#110720`/`violet-*`/`purple-*` as the dominant scheme. Exact color values are not specified here (see Out of Scope).
15. **Structure unchanged.** The 6 sections keep their current order and internal shape, except exactly as modified by requirements 2, 6, 7, and 8 above. No section is added, removed, or reordered.
16. **Accessible alt text.** Every image carries alt text accurate to its actual new content; no leftover text like `alt="Skills"` on unrelated content.
17. **Contrast preserved.** Text/background contrast under the new palette is at least as accessible as the current dark-theme baseline.

## Edge Cases & Rules
- If real screenshots for Master Closer/Oil Cron are supplied later, they replace the neutral placeholders in requirements 6 and 7 without any other structural change.
- Content is limited to what `Personal-Skills.md` states at build time — no invented projects, skills, or employers.
- "OpenClaw" is a confirmed, intentional tech-stack entry — not a typo.

## Out of Scope
- Sourcing or designing real screenshots for Master Closer/Oil Cron (placeholders are used instead).
- Exact japandi color token values, typography, animation, or component implementation — direction is fixed (requirement 14), specifics are a later build decision.
- Domain, hosting, or Vercel alias changes.
- Any new route, page, or section beyond the current single-page, 6-section structure.

## Acceptance Criteria
- [ ] Zero occurrences of "Ibrahim", "Memon", "WebHR", "ibiimemon.com", "Somezing", "FileIT", "NeuraWeb", "Muhammad Ayan" in rendered HTML or metadata.
- [ ] Header logo slot renders "Mohammad Ayan" as text, no image/SVG.
- [ ] Hero rotation contains only "AI Engineer" and "FDE (Forward Deployed Engineer)."
- [ ] "Stuff I Built" section has exactly 2 cards (Master Closer, Oil Cron) with neutral placeholder icons, no old company icons.
- [ ] Projects section has the same 2 items with distinct (non-duplicated) descriptions and neutral placeholder images, no `project-1.png`/`project-2.png`.
- [ ] About section shows the career-goal sentence as its paragraph and all 11 tech-stack tags as text in place of the old illustration.
- [ ] Footer has exactly 3 working links/icons: GitHub, Instagram, Gmail — no other social icon, no dead link, email listed once.
- [ ] No reference anywhere to `logo.svg`, `webhr.webp`, `card-1..4.png`, `me.png`, `me-glow.png`, `illustration.png`, `thumbnail.png`, `project-1.png`, `project-2.png`.
- [ ] Favicon is not Ibrahim's original file.
- [ ] `<title>`/meta description/OG tags describe Mohammad Ayan; OG image is text-only, not `thumbnail.png`.
- [ ] `README.md` no longer attributes brand identity/copyright to Ibrahim Memon.
- [ ] Dominant palette is a dark japandi direction, not violet/purple; 6-section order/structure otherwise unchanged.
- [ ] All images have accurate alt text; contrast is at least as accessible as the current baseline.
