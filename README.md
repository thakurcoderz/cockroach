# Cockroach Janta Party — Base HTML Site

A static landing page for a satirical political movement. Pure HTML/CSS + vanilla JS in `script.js` (sticky header, mobile nav, scroll reveals, timeline/news expand toggles, form placeholder).

```
cockroach/
├── index.html
├── styles.css
├── script.js
├── README.md
├── assets/
│   └── Cockroach-Janta-Party-Press-Kit.pdf
└── images/
    ├── logo-mark.png                  (header + footer mark)
    ├── poster-stronger-together.png   (hero right poster)
    ├── podium-cockroach.png           (vision section image)
    └── banner-logo.png                (big "COCKROACH JANTA PARTY" lockup)
```

**Live URL:** <https://cockroach-tau.vercel.app/>

> The orange banner crowd silhouette is an **inline SVG**, not a PNG.

## Run it

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## What's on the page

1. **Top strip** — auto-scrolling dark ticker
2. **Header** — sticky with backdrop blur, compacts + shadows on scroll. Mobile hamburger opens a right-side drawer.
3. **Hero** — "Voice of the Lazy & Unemployed." with squiggle under *Lazy*, pull-quote + poster, `C·JP` watermark, 4-up stats (**600K+** sign-ups · **18.7M+** Instagram · **0** donors · **5** demands). Kicker: **DAY 7 · 18.7M ON INSTAGRAM**.
4. **Marquee** — trending hashtags (`#MainBhiCockroach`, `#CockroachJantaParty`, etc.).
5. **Citation 01** — CJI origin remark, clarification footnote, satirical retort.
6. **Vision** — copy + podium image card.
7. **Manifesto** — 5 numbered demands, each with collapsible *"Why this demand"* explainer.
8. **Eligibility** — 4 standard cards.
9. **FAQ** — 6 collapsible questions.
10. **Banner** — orange section, tricolor curves, inline SVG crowd, central logo.
11. **Timeline (`#timeline`)** — **SEVEN-DAY LOG** (15 May → 22 May). Latest two days visible by default; animated **arrow toggle** loads earlier entries above. Live **TODAY** pill on 22 May.
12. **Recent news (`#news`)** — **WIRE · LIVE** feed, newest stories on top. Two items shown by default; bouncing **arrow toggle** at the bottom of the box reveals older updates.
13. **Signals strip** — early joiners (Moitra, Azad, **6,00,000+**) + press mastheads.
14. **Connect** — contact list, **press kit** (logo PNGs + PDF download), socials, membership form, `C·JP` watermark.
15. **Disclaimer band** — satire disclaimer + no-money policy.
16. **Footer** — brand, nav columns, JOIN pill.

## JavaScript (`script.js`)

Loaded with `defer` at the end of `index.html`.

| Feature | Behavior |
|---|---|
| Footer year | Sets `#year` to current year |
| Sticky header | `.is-scrolled` past 12px scroll |
| Mobile nav | Drawer toggle, `Esc` to close, auto-close above 820px |
| Scroll reveal | `IntersectionObserver` on `[data-reveal]`, manifesto/eligibility items, stats, footer cols |
| Timeline toggle | `#timelineToggle` — hides `.timeline-item-older`, expands full 7-day log |
| News toggle | `#newsFeedToggle` — hides `.news-item-older`, expands full wire feed |

Expand toggles use a centered circular chevron with a gentle up/down bounce (`prefers-reduced-motion` disables animation).

## SEO & social

The `<head>` includes description, keywords, theme-color, canonical, Open Graph, Twitter Card, and JSON-LD `Organization` schema.

Meta copy references **18.7 million on Instagram in seven days** (as of May 2026 reporting). Update absolute URLs in `og:image`, `canonical`, and `og:url` for your production domain.

## Data sourcing (update as the story moves)

Figures on the page reflect press reporting around **22 May 2026** (Instagram ~18.7M, sign-ups up to ~6 lakh, X withheld in India).

| Element | Where it lives | Notes |
|---|---|---|
| CJI quote + clarification | `.citation` | Bar & Bench, India.com, The Wire |
| 600K+ / 18.7M+ / 0 / 5 | `.hero-stats` | Sign-ups + Instagram (ABP, ET, Logical Indian, etc.) |
| Seven-day log | `#timeline` | Launch 16 May → Day 7 (22 May) |
| Wire feed | `#news` | X block, IG hacks, BJP/Congress milestones, Gen-Z convention, etc. |
| Notable joiners | `.signal-joined` | Mahua Moitra, Kirti Azad (TMC MPs) |
| Press mastheads | `.signal-press` | Wikipedia, BusinessToday, The Wire, Outlook, … |
| Press kit PDF | `.press-kit-list` | `assets/Cockroach-Janta-Party-Press-Kit.pdf` |
| Founder | `.contact-list` | Abhijeet Dipke |

## Fonts (Google Fonts CDN)

- **Fraunces** — display headlines, italic accents
- **DM Sans** — body copy
- **JetBrains Mono** — labels, tags, captions

## Color palette

| Token | Hex | Use |
|---|---|---|
| `--cream` | `#f3e7cf` | page background |
| `--paper` | `#f7eed8` | citation / recent news sections |
| `--ink` | `#15110b` | text, borders, dark CTAs |
| `--orange` | `#e0541f` | primary accent, marquee, banner |
| `--green` | `#18351d` | italic accents |
| `--green-dark` | `#0d1e10` | manifesto + timeline background |

## Interaction details

- **Sticky header**: JS adds `.is-scrolled` after 12px.
- **Mobile drawer**: ≤820px, body scroll lock, backdrop, `Esc` closes.
- **Scroll reveal**: staggered fade-up via IntersectionObserver.
- **Collapsible sections**: manifesto explainers (`<details>`), FAQ (`<details>`).
- **Timeline / news expand**: arrow button toggles `aria-expanded` and a `--collapsed` class on the list.
- **Print grain**: fixed SVG noise overlay, `mix-blend-mode: multiply`.
- **Reduced motion**: disables squiggle, marquee, reveals, and arrow bounce.

## Responsive breakpoints

| Breakpoint | What changes |
|---|---|
| ≤1024px | tablet padding tightens |
| ≤820px | mobile nav drawer, hero stacks, manifesto/eligibility reflow |
| ≤480px | smaller type, single-column footer, tighter news/timeline padding |

## Image generation prompts

Drop PNGs into `images/` with these filenames, or use the prompts below.

### 1. `logo-mark.png` — circular cockroach mark (header/footer)
> A minimalist circular emblem of a cockroach viewed from above, rendered in flat warm orange (#e0541f) and cream (#f3e7cf) on a deep charcoal background (#15110b). Crisp vector linework, slight halftone texture, symmetrical, antennas raised, occupying ~80% of a perfect circle. Style: vintage political-party seal meets bold modern logo. Transparent background, 512×512.

### 2. `poster-stronger-together.png` — election poster
> A vertical political campaign poster, dramatic dusk lighting. Centered: an anthropomorphic cockroach in a kurta standing on a rally stage, fist raised, behind him a sea of small cockroach silhouettes holding torches. Headline "STRONGER TOGETHER" in bold slab-serif at the bottom third, cream type on dark olive panel. Limited palette: burnt orange, cream, deep forest green, charcoal. Halftone print finish, slight paper grain, retro Indian election poster aesthetic. 1024×1280.

### 3. `podium-cockroach.png` — vision section image
> A satirical photo-illustration: an anthropomorphic cockroach in a tailored brown suit stands behind a wooden lectern with the lectern panel reading "COCKROACH JANTA PARTY". Warm interior lighting, blurred audience of cockroaches in the background. Style: editorial press photo meets surrealist political theater. Color palette of muted ambers and olive greens. Slight film grain. 1024×1280.

### 4. `banner-logo.png` — large central lockup
> A bold central logo lockup: a large stylized cockroach emblem (top-down, symmetrical, deep orange + black) sitting inside a circular cream medallion, with a banner ribbon below in green, white, and saffron stripes reading "COCKROACH JANTA PARTY" in chunky cream slab-serif. Decorative wheat-laurel framing around the medallion. Style: political party crest meets retro Indian poster art. Transparent background. 1200×1000.

---

## Form fields

| Field | Type | Notes |
|---|---|---|
| Name | text | required |
| Phone | tel | required, `+` / digits / spaces / hyphens (min 7 chars) |
| Email | email | required |
| Are you chronically online? | radio | Yes / No / Maybe — required |
| Are you lazy? | radio | Yes / No / Maybe — required |
| Identify as a "cockroach" per the Hon'ble CJI? | radio | Yes / No / Maybe — required |
| Twitter handle | text | required, `[A-Za-z0-9_]{1,15}`, `@` prefix in UI |

Submit is a placeholder (`onsubmit` shows "Submitted. Welcome to the swarm." and resets). Wire to Google Forms, Formspree, or your API when ready.

## Adding news or timeline entries

**News** — append a `<li class="news-item">` (add `news-item-older` to hide by default) inside `#newsFeed`, newest first. Keep the two latest without `news-item-older`.

**Timeline** — append a `<li class="timeline-item">` (add `timeline-item-older` for collapsed entries) inside `#timelineList`, chronological order; mark the latest with `timeline-latest` and `t-tag-live`.

Update the toggle count in HTML is automatic via `script.js` (counts `.timeline-item-older` / `.news-item-older`).

## Notes

- Marquee + top strip: CSS-only infinite scroll with duplicated inline content.
- Copy lives in `index.html`; styles in `styles.css`; behavior in `script.js`.
- CSS variables at the top of `styles.css` control the palette site-wide.
- Tested down to ~360px wide.
