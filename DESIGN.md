# DESIGN.md

## Phase 0: Brief
- **Subject:** Nagabairu Manoj, Lead Cloud, DevOps & FinOps Architect at Bluetris Technologies Pvt. Ltd. (May 2023 to Present), with 3.5+ years delivering across 15+ enterprise client engagements (strictly NDA-safe) and open-source creator of `pipeline-agent.tech`.
- **Audience:** Technical hiring managers, principal engineers, and AWS/multi-cloud consulting partners evaluating cloud modernization depth, FinOps ROI, Kubernetes operations, DevSecOps governance, and autonomous AI-SRE engineering.
- **Job of the site:** Prove verifiable production impact in under 3 seconds, let visitors inspect all 16 systems with interactive routing and SVG schematics, examine full case studies, and convert directly to interview outreach or ATS resume download.
- **Constraints:** Strict NDA confidentiality (anonymized industry domains only; only Bluetris Technologies Pvt. Ltd. and `pipeline-agent.tech` named), strict Terraform-only IaC terminology, no em/en dashes in copy, no banned filler copy, full static compatibility under GitHub Pages subpath `/portfolio/`.

## Phase 1: Concept Generation

### Territory A (Craft Material - Chosen): The Cloud Routing Ledger & Schematic Plane
- **Idea:** The site behaves like a Swiss-industrial cloud routing ledger where every production system is an addressable route with a live schematic topology, verified FinOps/SLA delta, and dedicated architecture post-mortem page.
- **Anchor:** Manoj designs multi-VPC routing, Kubernetes ingress control, and telemetry-driven cost reductions across 16 distinct systems.
- **Layout rule:** 12-column Swiss architectural grid pinned to columns 1, 5, and 9 with hairline dividers, tabular monospaced figures, and full-width routing table rows (`Work` index).
- **Motion verb:** Snap and route, like a network relay closing (`power3.out` and `expo.inOut`, crisp 0.35s to 0.8s, zero bounce).
- **Type voice:** `Switzer` geometric neo-grotesk for display and reading, paired with `IBM Plex Mono` for CIDRs, PRJ codes, and tabular FinOps deltas.
- **Signature moment:** A live schematic topology in the Hero whose packet telemetry pulses gently on the single GSAP ticker (`idleMotion: true`, paused off-screen and static under reduced motion), paired with a cursor-following SVG schematic preview across the 16-project routing ledger and carbon curtain transitions into each case study.
- **Screenshot frame:** Optically aligned `Switzer` display poster alongside the live 4-cloud control-plane schematic above the hairline verified impact strip.
- **Scores (O/F/Fe/P):** Originality 4, Fit 5, Feasibility 5, Portability 2 (Total: 16).

### Territory B (Place): Hyderabad Fiber Backbone
- Rejected: Too literal geographically while Manoj operates globally and remotely across Indian sovereign clouds and multi-region clusters. (O3 / F3 / Fe4 / P4).

### Territory C (Formal System): Monospace Incident Log Only
- Rejected: Pure monospace log stream limits typographic contrast and reduces quick scannability of high-level FinOps figures for non-terminal recruiters. (O4 / F3 / Fe5 / P3).

## Phase 2: Art Direction System

### Palette (Committed Architectural Light + Carbon AI-SRE / Footer Chapter)
- `ground`: `#F4F4F0` (Cold architectural vellum)
- `surface`: `#EAEAE3` (Recessed hairline table band)
- `ink`: `#0C0E12` (Carbon black text, >16:1 contrast on ground)
- `muted`: `#474D5C` (Drafting slate secondary copy, >7.5:1 AA contrast on ground)
- `line`: `rgba(12, 14, 18, 0.14)` (Architectural grid hairlines)
- `accent`: `#0047FF` (Cobalt blueprint focus ring and active link underline)
- `signal`: `#046C4E` (Verified FinOps & SLA metric green, >6.1:1 AA contrast on ground)
- `curtain`: `#0C0E12` (Carbon transition shutter, AI-SRE terminal chapter, and monumental footer ground with `#F4F4F0` ink, `#B4BAC6` muted, `#38BDF8` trace cyan, `#34D399` verified emerald)

### Typography
- **Display & Body:** `Switzer` (`400, 500, 600, 700`), self-hosted `.woff2` from Fontshare into `/portfolio/fonts/`.
- **Data & Schematics:** `IBM Plex Mono` (`400, 500, 600`), self-hosted `.woff2` into `/portfolio/fonts/`.
- **Preloaded:** 2 weights (`Switzer 400`, `Switzer 600`) preloaded in `<head>`.

### Grid & Layout Rhythm
- Desktop: 12-column CSS Grid, fluid gutter (`clamp(1rem, 0.6rem + 1.8vw, 2.5rem)`), max width `1440px` centered only on ultra-wide `1920px+` monitors so content never sparsens.
- Mobile (`390px`): Intentional 1-column stack with `auto` rows (zero tall empty `1fr` gaps), collapsible full-screen accessible menu overlay (`Escape` closes, Tab trapped, focus restored), inline project metadata and schematic preview card rather than relying on pointer hover.

### Motion & Interaction Contract (One Treatment Per Role)
1. **Primary CTAs:** Pointer-tracked cobalt/carbon fill flood (`data-fill` clip-path circle) + arrow nudge (`→` / `↗`).
2. **Navigation & Action Links:** Vertical inner-span roll (`data-roll`) with hairline active indicator (`aria-current="page"`). Under `prefers-reduced-motion: reduce`, drops roll and applies crisp underline/invert.
3. **Inline Prose Links:** Permanent bottom hairline underline rising to a soft accent band on hover/focus.
4. **Routing Index Rows (`#projects`):** Desktop cursor-following floating SVG schematic preview box (`indexPreview`) synced via GSAP ticker and scroll check; touch devices show direct case-study action cleanly.
5. **Idle Motion:** Packet pulse travel along Hero SVG topology wires on the single GSAP ticker (`t`), paused when scrolled out of view and completely disabled under `prefers-reduced-motion: reduce`.

### Genericness Check Result
- Avoided purple gradients, blur blobs, frosted glassmorphism cards, cookie-cutter 3-column icon cards, decorative uppercase eyebrows over every section, `Inter`/`Instrument Serif`, and em/en dashes.
- Every number, tool, client domain, certification (`RHCSA 220-129-852`, `AZ-104`, `AZ-900`), and link (`pipeline-agent.tech`) traces strictly to verified production work.
