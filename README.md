# Cockroach Janta Party — Base HTML Site

A static landing page for a satirical political party. Pure HTML/CSS + a small dose of vanilla JS (sticky-header scroll state, mobile nav drawer, IntersectionObserver scroll reveals, form handler).

```
cockroach/
├── index.html
├── styles.css
├── press-kit.md                       (downloadable press kit, linked from /Connect)
├── README.md
└── images/
    ├── logo-mark.png                  (header + footer mark)
    ├── poster-stronger-together.png   (hero right poster)
    ├── podium-cockroach.png           (vision section image)
    └── banner-logo.png                (big "COCKROACH JANTA PARTY" lockup)
```

**Live URL:** <https://cockroach-tau.vercel.app/>

> Note: the orange banner's crowd silhouette is now an **inline SVG**, not a PNG — no asset needed.

## Run it

Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## What's on the page

1. **Top strip** — auto-scrolling dark ticker
2. **Header** — sticky with backdrop blur, compacts + shadows on scroll. Mobile gets a hamburger that opens a right-side drawer.
3. **Hero** — display headline ("Voice of the Lazy & Unemployed.") with an animated hand-drawn squiggle under "Lazy", pull-quote left of poster, rotated `C·JP` watermark, 4-up stats row (2M+ / 72h / 0 / 5).
4. **Marquee** — orange italic ticker carrying the real trending hashtags (`#MainBhiCockroach`, `#CockroachJantaParty`, `#CockroachPower`, `#IAmACockroach`, `#StepOnUsAll`, `#VoiceOfTheLazy`).
5. **Citation 01** — the origin remark, attributed to the CJI with date and source, followed by the CJI's later clarification footnote and a one-line satirical retort.
6. **Vision** — copy + podium image card.
7. **Manifesto** — dark green section with 5 large numbered demands. Each demand now has a collapsible *"Why this demand"* explainer with civic context.
8. **Eligibility** — 4 standard cards (Unemployed / Lazy / Chronically online / Can rant professionally).
9. **FAQ** — 6 collapsible questions covering registration status, funding, employer visibility, data handling, Twitter-handle rationale, and how to leave.
10. **Banner** — orange section with curved green tricolor flanks, inline SVG crowd silhouette, floating central logo.
11. **Timeline** — dark-green 6-step vertical log of the first five days (May 15 → May 20), with an animated "TODAY" pill on the latest entry.
12. **Signals strip** — two rows on a dark band: *"Early in the swarm"* (notable joiners) + *"As covered by"* (press mastheads, text only).
13. **Connect** — contact list with `mailto:` links + animated underlines, **press kit callout** (logo downloads, fact sheet placeholder, press contact), "Or yell at us on —" socials row (Twitter / Instagram / YouTube / Telegram), giant `C·JP` decorative watermark.
14. **Membership form** — 7-field form (Name, Phone, Email, 3× Yes/No/Maybe radio chip questions, Twitter handle with `@` prefix), orange top accent bar, hairline divider, Submit + Clear actions.
15. **Disclaimer band** — bright orange two-column callout above the footer: legal status disclaimer + "WE DO NOT ACCEPT MONEY" position.
16. **Footer** — brand block + three pill-tagged columns + bottom-row legal + JOIN pill.

## SEO & social

The `<head>` ships with:

- Full `<meta name="description">`, `<meta name="keywords">`, `<meta name="theme-color">`, canonical link
- Open Graph tags (`og:type`, `og:title`, `og:description`, `og:url`, `og:image` with dimensions, `og:locale=en_IN`)
- Twitter Card tags (`summary_large_image`)
- JSON-LD `Organization` schema including founder, founding date, alternate Hindi name, logo URL, and contact point

Update the absolute URLs in `og:image` / `canonical` / `og:url` to your real production domain before deploying.

## Data sourcing (real-world content on the page)

The Citation, hero stats, signals strip, and marquee hashtags are based on reporting around the May 2026 launch of the Cockroach Janta Party. Update these as the story evolves.

| Element | Where it lives | Source(s) |
|---|---|---|
| CJI quote + clarification | `.citation` section | Bar & Bench, India.com, The Wire, BusinessUpturn |
| 2M+ members / 72h / 5 days | `.hero-stats` | The Week, BusinessToday, IBTimes, Logical Indian |
| Notable joiners (Mahua Moitra, Kirti Azad) | `.signal-joined` | OneIndia, The Week |
| Press mastheads | `.signal-press` | Wikipedia, BusinessToday, The Wire, Outlook, Deccan Herald, The Week, IBTimes, Bar & Bench, Brut |
| Trending hashtags | `.marquee-track` | The Logical Indian, BusinessUpturn |
| Founder (Abhijeet Dipke) | `.contact-list` | Brut, Wikipedia, The Week |

## Fonts used (Google Fonts, loaded via CDN)

- **Fraunces** — display headlines, italic accents
- **DM Sans** — body copy
- **JetBrains Mono** — labels, tags, captions

## Color palette

| Token | Hex | Use |
|---|---|---|
| `--cream` | `#f3e7cf` | page background |
| `--paper` | `#f7eed8` | vision / eligibility sections |
| `--ink` | `#15110b` | text, borders, dark CTAs |
| `--orange` | `#e0541f` | primary accent, marquee, banner |
| `--green` | `#18351d` | italic accent words ("Unemployed", "Vision") |
| `--green-dark` | `#0d1e10` | manifesto background |

## Interaction details

- **Sticky header**: `position: sticky` + JS scroll listener adds `.is-scrolled` past 12px for shadow + tighter padding.
- **Mobile drawer**: kicks in at ≤820px. Hamburger morphs into X, drawer slides in from the right with body scroll lock and a dimmed backdrop. `Esc` closes it; resizing past 820px auto-closes.
- **Scroll reveal**: any element with `data-reveal` (plus `.demands li`, `.standards li`, `.stat`, `.footer-col`) fades up via IntersectionObserver with a small staggered delay.
- **Print grain**: fixed full-screen SVG fractal-noise overlay at 22% opacity, `mix-blend-mode: multiply` — gives the matte risograph feel.
- **Reduced motion**: a `prefers-reduced-motion: reduce` block disables the squiggle draw, banner float, marquee scroll, and all reveals.

## Responsive breakpoints

| Breakpoint | What changes |
|---|---|
| ≤1024px | tablet padding tightens |
| ≤820px | mobile nav drawer activates, hero stacks (poster above quote), manifesto cards reflow, eligibility cards use `grid-template-areas`, contact rows stack label-on-top |
| ≤480px | smaller hero/heading sizes, slimmer logo, single-column footer, tighter form padding |

## Image generation prompts

Drop your own PNGs into `images/` with the matching filenames. If you'd rather generate them:

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

The membership form collects:

| Field | Type | Notes |
|---|---|---|
| Name | text | required |
| Phone | tel | required, pattern allows `+`, digits, spaces, hyphens (min 7 chars) |
| Email | email | required |
| Are you chronically online? | radio | Yes / No / Maybe — required |
| Are you lazy? | radio | Yes / No / Maybe — required |
| Identify as a "cockroach" per the Hon'ble CJI? | radio | Yes / No / Maybe — required |
| Twitter handle | text | required, pattern `[A-Za-z0-9_]{1,15}`, `@` prefix locked in UI |

The current submit handler is a placeholder that shows "Submitted. Welcome to the swarm." and resets the form. Replace `onsubmit` in `index.html` to wire it up — common options:

- **Google Forms**: POST to the form's `formResponse` URL with the matching `entry.<id>` field names.
- **Formspree / Basin / Web3Forms**: change the `<form>` to `action="https://..." method="POST"` and remove the inline handler.
- **Your own backend**: same pattern as Formspree, or use `fetch()` inside the handler.

## Notes

- Marquee + top strip use CSS-only infinite scroll; content is duplicated inline so the loop is seamless.
- Manifesto, eligibility, vision, and contact copy live as plain HTML in `index.html`.
- All CSS variables live at the top of `styles.css` — change a token, change the whole palette.
- Tested down to ~360px wide.
