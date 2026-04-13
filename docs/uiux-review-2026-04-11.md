# Banyan Advisory UI/UX Review (2026-04-11)

## Findings (Prioritized)

### Critical
1. Active navigation state is effectively broken on desktop.
- Evidence: menu links set class `current` in `_includes/main-menu.html:3`-`8`, but styling expects `li.active` in `_sass/components/_main-menu.scss:40`.
- Impact: users lose orientation across pages, especially on long content pages.

### High
1. Mobile navigation is not accessible enough for a professional services site.
- Evidence: toggle button lacks `aria-label`/`aria-expanded` in `_includes/hamburger.html:1`; keyboard focus ring is removed in `_sass/components/_hamburger.scss:11`-`13`; JS only toggles classes with no keyboard support in `assets/js/scripts.js:5`-`9`.
- Impact: keyboard/screen-reader users face friction; hurts trust and compliance posture.

2. Homepage information hierarchy does not match the strength of the underlying content.
- Evidence: long body copy appears immediately after hero in `index.html:16`-`29`; primary CTA appears after dense paragraph block in `index.html:32`; no immediate proof band (metrics, marquee deals, sector focus) above the fold.
- Impact: first-time visitors cannot quickly answer “why Banyan?”, “for whom?”, and “what next?”.

3. Transactions page is content-rich but scanning-poor.
- Evidence: extremely long repeated card blocks in `transactions.html:7`-`146`; no filters, tabs, anchored jump nav, or sorting affordances.
- Impact: strong proof of capability exists but is difficult to digest, especially on mobile.

### Medium
1. Contact page inherits homepage visual treatment and uses a fixed-size embed.
- Evidence: `bodyClass: page-home` in `contact.html:4`; map iframe fixed width/height in `contact.html:27`-`29`.
- Impact: visual context feels mismatched; map is not inherently responsive.

2. Metadata and social preview foundations are minimal.
- Evidence: base template includes title + viewport only in `_layouts/default.html:5`-`8`; no page description, Open Graph, or Twitter card tags.
- Impact: weaker SEO snippets and low-quality link previews for a relationship-driven business.

3. Header brand text/alt values are legacy and inconsistent.
- Evidence: logo image alt text says `Figurit Homepage` in `_includes/header.html:4` and `_includes/header.html:7`.
- Impact: weak polish signal and accessibility quality issue.

4. Readability/contrast can be fragile in intro sections due to light body color against image-backed layouts.
- Evidence: shared intro paragraph color uses `$secondary` (`#8f8f8f`) in `_sass/_bootstrap-variables.scss:22` and `_sass/components/_intro.scss:42`.
- Impact: variable legibility depending on background/image overlap.

5. CTA architecture is underpowered for user intent stages.
- Evidence: homepage mostly points to transactions/services (`index.html:32`, `index.html:53`); footer only exposes Home/Contact in `_includes/footer.html:8`-`10`.
- Impact: no clear pathways for “seeking capital”, “sell-side”, “strategic finance”, or “speak with advisor now”.

## Recommended UI/UX Direction (Best Fit for This Content)

### Positioning Model
Adopt a **trust-first institutional advisory interface** rather than a generic brochure style:
- Calm, high-contrast editorial layout.
- Strong proof surfaces (deal activity, sectors, outcomes, roles).
- Guided pathways by user intent (Fundraise / M&A / Strategic Finance / Investor Relations).

### Information Architecture
1. Home
- Hero: one clear value proposition + one sentence sector focus.
- Immediate proof strip: total deals, sectors served, representative mandates.
- “How we engage” 3-step section.
- Sector cards leading to filtered transactions.
- Primary CTA block: “Discuss a mandate”.

2. Services
- Service cards with outcome-oriented summaries.
- Add “typical engagement scope” and “ideal client profile” on each service page.

3. Transactions
- Introduce tabs or filters: Technology / Healthcare / Others, plus Recent vs Promoter.
- Add compact card metadata schema: client(s), mandate type, role, date, sector.
- Provide quick jump links at top.

4. Team
- Keep bios, but add role-based credibility cues: sector coverage, transaction focus, years.

5. Contact
- Streamline into conversion format: short intro, email + optional phone, office details, map below fold.

## UX System Recommendations

1. Navigation
- Fix active-state logic and ensure persistent context.
- Mobile: add ARIA attributes, keyboard handling, close-on-link-select, and visible focus styles.

2. Typography and spacing
- Reduce intro vertical padding on small screens.
- Increase body text contrast slightly and standardize line-length for long paragraphs.

3. Card system
- Define 2 reusable card patterns only:
  - `ProofCard` for transactions.
  - `ServiceCard` for offerings.
- Consistent heading levels and metadata positions for scan speed.

4. Conversion
- Add one global sticky CTA on desktop and one bottom-safe CTA on mobile.
- Add page-end CTA on Services and Transactions pages.

## Suggested Execution Plan

1. Phase 1 (1-2 days): UX correctness
- Fix nav active state, header alt text, mobile menu accessibility, contact/map responsiveness, metadata basics.

2. Phase 2 (2-4 days): IA and content flow
- Rework homepage sections, create transaction filters/jump links, tighten service summaries.

3. Phase 3 (2-3 days): Visual refinement
- Improve contrast consistency, card hierarchy, and CTA prominence; validate mobile spacing.

## Open Questions

1. What is the single highest-value conversion event (email inquiry, scheduled call, mandate brief upload)?
2. Are there compliance constraints on displaying deal details/logos by sector?
3. Should the primary audience be founders/promoters, PE funds, or both equally?
4. Do you want a conservative institutional visual tone or a slightly modern boutique tone?
