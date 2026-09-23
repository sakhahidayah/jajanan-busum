---
version: alpha
name: Fore
description: |
  Fore Coffee's design system embodies a warm, natural, and approachable brand
  identity rooted in Indonesian coffee culture. The visual language balances
  contemporary minimalism with organic references to coffee sourcing and
  craftsmanship. A deep forest-green primary palette pairs with earthy, muted
  neutrals and decorative accent colors inspired by coffee beans, moss, and
  natural landscapes. The typography employs bold display weights and generous
  whitespace, creating an inviting, premium-yet-accessible atmosphere. The
  overall mood is grounded, sustainable, and community-focused, with an emphasis
  on storytelling through generous imagery and thoughtful layout breathing room.
source:
  url: "https://fore.coffee/id/"
  pagesAnalyzed: 1
  extractedAt: 2026-09-23
  tokensMeasured: true
colors:
  primary: "#006041"
  canvas: "#FFFFFF"
  surface-alt: "#E7F0EE"
  on-primary: "#FFFFFF"
  ink: "#222126"
  body: "#444444"
  muted: "#888888"
  accent-1: "#97A259"
  accent-2: "#1E4A3C"
  accent-3: "#765B51"
  neutral-1: "#373737"
  neutral-2: "#B3B3B3"
  neutral-3: "#F4F2EF"
typography:
  display-xl:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 90px
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: -2.7px
  display-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 80px
    fontWeight: 800
    lineHeight: 1.29
    letterSpacing: -2.4px
  display-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 62px
    fontWeight: 800
    lineHeight: 1.67
    letterSpacing: -2.4px
  display-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.73
    letterSpacing: -3px
  display-xs:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: 0.5px
  heading:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.33
    letterSpacing: 1px
    textTransform: capitalize
  body-xl:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 26px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.5px
  body-lg:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 2.1
    letterSpacing: -0.6px
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.44
    letterSpacing: 0.5px
  body-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.5px
  body-sm-strong:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.86
    letterSpacing: 0.5px
  body-xs:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.69
    letterSpacing: 0.5px
  button:
    fontFamily: "Open Sans"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.43
    letterSpacing: 0px
  caption:
    fontFamily: "Open Sans"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 2.7
    letterSpacing: 1px
    textTransform: capitalize
rounded:
  none: 0px
  full: 9999px
spacing:
  xxs: 8px
  xs: 12px
  sm: 16px
  md: 20px
  lg: 32px
  xl: 36px
  xxl: 40px
  xxxl: 44px
  section: 52px
  band: 60px
borderWidths:
  thin: 1px
  medium: 2px
shadows:
  sm: "rgba(0, 0, 0, 0.16) 0px 7px 20px 0px"
elevationStrategy: single-tier
themes:
  derived: dark # the other theme is the site's measured palette
  light:
    bg: "#FFFFFF"
    surface: "#E7F0EE"
    surfaceRaised: "#DFE8E6"
    text: "#222126"
    textMuted: "#444444"
    border: "#E4E4E5"
    accent: "#006041"
    accentFg: "#FFFFFF"
    focusRing: "#006041"
    elevation: shadow
  dark:
    bg: "#0C1312"
    surface: "#1B2120"
    surfaceRaised: "#272D2C"
    text: "#F5F9F7"
    textMuted: "#9CA2A0"
    border: "#333938"
    accent: "#009D6A"
    accentFg: "#0B0B0C"
    focusRing: "#00744F"
    elevation: "border+surface"
components:
  button-primary:
    typography: "{typography.caption}"
    textColor: "{colors.on-primary}"
    border: "2px solid {colors.primary}"
    height: 57px
    padding: "11px 41px 11px 41px"
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 7px 20px 0px"
    rounded: 100px
    backgroundColor: "{colors.primary}"
  button-primary-2:
    textColor: "{colors.on-primary}"
    height: 57px
    padding: "11px 41px 11px 41px"
    fontSize: 16px
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 7px 20px 0px"
    fontFamily: "Plus Jakarta Sans"
    fontWeight: 500
    lineHeight: 2.7
    rounded: 100px
    backgroundColor: "{colors.primary}"
  button-outline:
    textColor: "{colors.primary}"
    border: "1px solid {colors.primary}"
    height: 45px
    padding: "10px 24px 10px 24px"
    fontSize: 22px
    fontFamily: "Plus Jakarta Sans"
    fontWeight: 800
    lineHeight: 0.91
    rounded: 100px
  button-text:
    typography: "{typography.button}"
    textColor: "{colors.accent-3}"
    height: 24px
    padding: "2px 24px 2px 24px"
    rounded: 100px
    backgroundColor: "{colors.canvas}"
  card:
    textColor: "{colors.muted}"
    fontSize: 13px
    fontFamily: "Open Sans"
    fontWeight: 400
    lineHeight: 2
  card-sm:
    textColor: "{colors.neutral-2}"
    fontSize: 13px
    fontFamily: "Open Sans"
    fontWeight: 400
    lineHeight: 2
  badge-icon:
    textColor: "rgb(102, 102, 102)"
    height: 40px
    fontSize: 13px
    fontFamily: "Open Sans"
    fontWeight: 400
    lineHeight: 2
  link:
    textColor: "rgb(51, 51, 51)"
    fontSize: 13px
    fontFamily: "Open Sans"
    fontWeight: 400
    lineHeight: 2
  link-sm:
    textColor: "{colors.primary}"
    border: "1px solid rgb(51, 51, 51)"
    fontSize: 0px
    fontFamily: "Open Sans"
    fontWeight: 400
    lineHeight: 0px
    rounded: "50%"
    backgroundColor: "{colors.primary}"
states:
  button-active:
    target: button
    state: active
    outline: "-webkit-focus-ring-color auto 5px"
    outlineColor: -webkit-focus-ring-color
    outlineWidth: 5px
  button-hover:
    target: button
    state: hover
    textColor: "rgb(51, 51, 51)"
    textDecoration: none
  button-focus:
    target: button
    state: focus
    textColor: "rgb(51, 51, 51)"
    borderColor: "rgb(140, 140, 140)"
    backgroundColor: "rgb(230, 230, 230)"
  nav-hover:
    target: nav
    state: hover
    textColor: "rgb(38, 38, 38)"
    textDecoration: none
    backgroundColor: "rgb(245, 245, 245)"
  link-hover:
    target: link
    state: hover
    textColor: "rgb(35, 82, 124)"
    borderColor: "rgb(221, 221, 221)"
    backgroundColor: "rgb(238, 238, 238)"
  other-hover:
    target: other
    state: hover
    textColor: "{colors.on-primary}"
    opacity: 0.9
    textDecoration: none
  link-active:
    target: link
    state: active
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 10px 20px inset"
breakpoints:
  - width: 375
    containerWidth: 345
    gridColumns: 0
    navLinksVisible: 0
    menuToggleVisible: false
    headingPx: 0
    bodyPx: 13
    sectionPaddingX: 0
  - width: 768
    containerWidth: 738
    gridColumns: 1
    navLinksVisible: 0
    menuToggleVisible: true
    headingPx: 0
    bodyPx: 13
    sectionPaddingX: 0
  - width: 1024
    containerWidth: 1000
    gridColumns: 6
    navLinksVisible: 0
    menuToggleVisible: false
    headingPx: 0
    bodyPx: 13
    sectionPaddingX: 0
  - width: 1280
    containerWidth: 1230
    gridColumns: 0
    navLinksVisible: 0
    menuToggleVisible: false
    headingPx: 0
    bodyPx: 13
    sectionPaddingX: 0
  - width: 1440
    containerWidth: 1230
    gridColumns: 0
    navLinksVisible: 0
    menuToggleVisible: false
    headingPx: 0
    bodyPx: 13
    sectionPaddingX: 0
coverage:
  statesFound: 61
  gradientsFound: 0
  rolesUnassigned: 6
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: true
  semanticRampDeclared: false
---

# Design System Inspired by Fore Coffee

## 1. Visual Theme & Atmosphere

Fore Coffee's design system embodies a warm, natural, and approachable brand identity rooted in Indonesian coffee culture. The visual language balances contemporary minimalism with organic references to coffee sourcing and craftsmanship. A deep forest-green primary palette pairs with earthy, muted neutrals and decorative accent colors inspired by coffee beans, moss, and natural landscapes. The typography employs bold display weights and generous whitespace, creating an inviting, premium-yet-accessible atmosphere. The overall mood is grounded, sustainable, and community-focused, with an emphasis on storytelling through generous imagery and thoughtful layout breathing room.

**Key Characteristics**

- Deep forest-green primary brand color (`{colors.primary}`) used for CTAs, active states, and brand accents
- Warm, earthy accent palette (moss green, deep teal, warm brown) for decorative and secondary purposes
- Clean neutral canvas with soft alternating surface bands in pale sage
- Bold, expressive display typography with tight negative letter-spacing on largest sizes
- Pill-shaped button corners (`{rounded.full}`) contrasting with sharp card and container edges
- Generous spacing and section padding creating a spacious, premium feel
- Minimal shadow use; depth primarily through color blocking and surface contrast
- Supporting imagery and coffee product photography as primary visual storytelling

## 2. Color Palette & Roles

### Primary

- **Primary / Brand** (`{colors.primary}` — `#006041`): Primary CTA fills, brand accent in hero and navigation, active link states, button backgrounds. Deep forest green evoking coffee plant foliage and sustainable sourcing.

### Accent Colors

- **Accent / Decorative – Moss Green** (`{colors.accent-1}` — `#97A259`): Decorative element; no primary role measured. Appears in body copy highlights and leaf motifs on product packaging.
- **Accent / Decorative – Deep Teal** (`{colors.accent-2}` — `#1E4A3C`): Decorative element; no primary role measured. Used in layered visual elements and illustration accents.
- **Accent / Decorative – Warm Brown** (`{colors.accent-3}` — `#765B51`): Decorative element; no primary role measured. Reflects coffee roast tones and appears in text highlights and background accents.

### Interactive

- **Button Text on Primary** (`{colors.canvas}` — `#FFFFFF`): White text and labels on brand-colored button and surface backgrounds.

### Neutral Scale

- **Canvas / Default Background** (`{colors.canvas}` — `#FFFFFF`): Page and section background; container default fill. Provides clean canvas for content.
- **Surface Alt / Section Band** (`{colors.surface-alt}` — `#E7F0EE`): Alternating section backgrounds creating visual rhythm. Soft sage-green tint reinforces brand without overwhelming.
- **Ink / Primary Text** (`{colors.ink}` — `#222126`): Headings, high-contrast body copy, critical labels. Darkest text value for maximum readability.
- **Body / Secondary Text** (`{colors.body}` — `#444444`): Body paragraph copy, standard content text at readable contrast.
- **Muted / Tertiary Text** (`{colors.muted}` — `#888888`): Captions, secondary labels, helper text, disabled states. Reduced emphasis.
- **Neutral – Medium** (`{colors.neutral-1}` — `#373737`): Additional neutral; role unassigned. Observed in subtle dividers and backgrounds.
- **Neutral – Light** (`{colors.neutral-2}` — `#B3B3B3`): Additional neutral; role unassigned. Secondary borders and disabled placeholder text.
- **Neutral – Very Light** (`{colors.neutral-3}` — `#F4F2EF`): Additional neutral; role unassigned. Pale background accents and light surface alternatives.

### Surface & Borders

No explicit border color semantic was measured; buttons and interactive elements typically inherit their text color as border color or use the primary brand color.

## 3. Typography Rules

### Font Family

**Primary Display & Headings:** Plus Jakarta Sans

- Fallback: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Used for hero display, large headings, and prominent callouts

**Button & Caption Text:** Open Sans

- Fallback: `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Used for UI buttons, labels, and small-scale typography

**Decorative / Accent Display:** Dosis

- Fallback: `'Dosis', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Available but not actively used in primary hierarchy; reserved for future decorative applications

### Hierarchy

| Role               | Font              | Size | Weight | Line Height | Letter Spacing | Notes                                                      |
| ------------------ | ----------------- | ---- | ------ | ----------- | -------------- | ---------------------------------------------------------- |
| **Display XL**     | Plus Jakarta Sans | 90px | 800    | 1.15        | -2.7px         | Hero headline; maximum impact, tight tracking for emphasis |
| **Display LG**     | Plus Jakarta Sans | 80px | 800    | 1.29        | -2.4px         | Large section headline; bold presence                      |
| **Display MD**     | Plus Jakarta Sans | 62px | 800    | 1.67        | -2.4px         | Medium headline; balanced readability                      |
| **Display SM**     | Plus Jakarta Sans | 60px | 700    | 1.73        | -3px           | Secondary display; tighter tracking variation              |
| **Display XS**     | Plus Jakarta Sans | 48px | 700    | 1.05        | 0.5px          | Subheading; display weight at smaller scale                |
| **Heading**        | Plus Jakarta Sans | 18px | 700    | 1.33        | 1px            | Section heading; text-transform capitalize                 |
| **Body XL**        | Plus Jakarta Sans | 26px | 500    | 1           | 0.5px          | Large body text; prominent copy block                      |
| **Body LG**        | Plus Jakarta Sans | 20px | 400    | 2.1         | -0.6px         | Larger paragraph; slightly compressed tracking             |
| **Body MD**        | Plus Jakarta Sans | 18px | 700    | 1.44        | 0.5px          | Medium body text; bold variant                             |
| **Body SM Strong** | Open Sans         | 14px | 500    | 1.86        | 0.5px          | Emphasized body text; button-weight emphasis               |
| **Body SM**        | Plus Jakarta Sans | 14px | 400    | 1.5         | 0.5px          | Standard paragraph copy; primary body size                 |
| **Body XS**        | Plus Jakarta Sans | 13px | 400    | 1.69        | 0.5px          | Small body copy; reduced emphasis                          |
| **Button**         | Open Sans         | 14px | 700    | 1.43        | 0px            | Button text; sans-serif UI weight                          |
| **Caption**        | Open Sans         | 12px | 600    | 2.7         | 1px            | Captions, metadata; text-transform capitalize              |

### Principles

- **Display tracking:** Negative letter-spacing (-2.7px to -3px) on the largest sizes creates visual boldness and a premium, editorial quality. Positive spacing (0.5px–1px) on body and UI text maintains clarity and accessibility.
- **Font pairing:** Plus Jakarta Sans carries hierarchy and editorial presence; Open Sans grounds UI buttons and captions in familiar, accessible web-standard typography.
- **Weight contrast:** Bold weights (700–800) reserve for headlines and interactive elements; 400–500 weights for body content prevent visual fatigue and ensure readability at small sizes.
- **Line height generosity:** Display sizes (1.05–1.73) are tighter to compact impact; body sizes (1.5–2.1) are generous for comfort and scanability.
- **Capitalization:** Heading and caption roles use `text-transform: capitalize`, reinforcing a consistent UI voice.

## 4. Component Stylings

### Buttons

#### Primary Button

- **Background:** `{colors.primary}` (`#006041`)
- **Text Color:** `{colors.canvas}` (`#FFFFFF`)
- **Border:** `2px solid {colors.primary}` (`#006041`)
- **Padding:** `11px 41px`
- **Font:** Open Sans, `14px`, weight 600, line-height 1.43
- **Border Radius:** `{rounded.full}` (9999px — pill shape)
- **Box Shadow:** `rgba(0, 0, 0, 0.16) 0px 7px 20px 0px`
- **Width:** 178px, **Height:** 57px
- **Hover State:** Color remains white, border color darkens; shadow maintained
- **Active State:** Inner shadow `rgba(0, 0, 0, 0.125) 0px 3px 5px inset`, text color shifts to `rgb(51, 51, 51)`

#### Primary Button Variant (Larger)

- **Background:** `{colors.primary}` (`#006041`)
- **Text Color:** `{colors.canvas}` (`#FFFFFF`)
- **Border:** `2px solid transparent`
- **Padding:** `11px 41px`
- **Font:** Plus Jakarta Sans, `16px`, weight 500, line-height 2.7
- **Border Radius:** `{rounded.full}` (9999px)
- **Box Shadow:** `rgba(0, 0, 0, 0.16) 0px 7px 20px 0px`
- **Width:** 216px, **Height:** 57px
- **Hover State:** Maintains background; slight color shift

#### Outline Button

- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Text Color:** `{colors.primary}` (`#006041`)
- **Border:** `1px solid {colors.primary}` (`#006041`)
- **Padding:** `10px 24px`
- **Font:** Plus Jakarta Sans, `22px`, weight 800, line-height 1.25
- **Border Radius:** `{rounded.full}` (9999px)
- **Box Shadow:** none
- **Width:** 162.5px, **Height:** 45px
- **Hover State:** Border and text remain primary color; background becomes transparent

#### Text Button

- **Background:** `{colors.canvas}` (`#FFFFFF`)
- **Text Color:** `{colors.accent-3}` (`#765B51`)
- **Border:** none
- **Padding:** `2px 24px`
- **Font:** Open Sans, `14px`, weight 700, line-height 1.43
- **Border Radius:** `{rounded.full}` (9999px)
- **Box Shadow:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px inset`
- **Width:** 80px, **Height:** 24px
- **Hover State:** Text color shifts slightly; background remains white; inactive outline removed

### Cards & Containers

#### Default Card

- **Background:** `rgba(0, 0, 0, 0)` (transparent / context-aware)
- **Text Color:** `{colors.muted}` (`#888888`)
- **Border:** none
- **Padding:** `0px`
- **Font:** Open Sans, `13px`, weight 400, line-height 1.69
- **Border Radius:** `{rounded.none}` (0px — sharp corners)
- **Box Shadow:** none
- **Width:** full viewport, **Height:** auto (e.g., 6594.92px for full page)

#### Default Card Small

- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Text Color:** `{colors.neutral-2}` (`#B3B3B3`)
- **Border:** none
- **Padding:** `0px`
- **Font:** Open Sans, `13px`, weight 400, line-height 1.69
- **Border Radius:** `{rounded.none}` (0px)
- **Box Shadow:** none
- **Width:** 277.5px, **Height:** 462px (product card typical dimensions)

### Inputs & Forms

No explicit form input measurements were extracted. The site does not expose dedicated input component variants in its primary navigation or hero sections.

### Navigation

**Primary Navigation Links**

- **Text Color (default):** `{colors.ink}` (`#222126`)
- **Text Color (hover):** `{colors.body}` (`#444444`)
- **Background (default):** transparent
- **Background (hover):** `rgb(245, 245, 245)` (very pale neutral)
- **Text Decoration:** none (hover removes any underline)
- **Font:** Open Sans or Plus Jakarta Sans (exact role varies by link context)
- **Font Size:** 14–16px depending on hierarchy

**Navigation Badge / Active State**

- **Background:** `rgb(51, 122, 183)` (secondary blue accent, applied sparingly)
- **Text Color:** `{colors.canvas}` (`#FFFFFF`)
- **Border Radius:** varies; some nav items remain sharp (`0px`)

### Badges

#### Icon Badge

- **Background:** `rgba(0, 0, 0, 0)` (transparent)
- **Text Color:** `rgb(102, 102, 102)` (muted icon gray)
- **Border:** none
- **Padding:** `0px`
- **Width/Height:** 40px square
- **Border Radius:** `{rounded.none}` (0px)
- **Box Shadow:** none
- **Font Size:** 13px, Open Sans, weight 400

### Links

#### Default Link

- **Text Color:** `rgb(51, 51, 51)` (neutral ink)
- **Border:** none
- **Text Decoration:** none (default)
- **Font:** Open Sans, `13px`, weight 400
- **Hover State:** Text color shifts to `rgb(35, 82, 124)` (blue-ish), text-decoration becomes `underline`

#### Indicator Link (Small Dot)

- **Background:** `{colors.primary}` (`#006041`)
- **Border:** `1px solid rgb(51, 51, 51)` (ink border)
- **Width/Height:** 9px circular (pill)
- **Border Radius:** `50%` (circle)
- **Font Size:** 0px (icon/dot only)

## 5. Layout Principles

### Spacing System

Base unit: `{spacing.xxs}` = 8px

**Scale:**

- `{spacing.xxs}` = 8px — micro spacing (icon gaps, tight button padding)
- `{spacing.xs}` = 12px — extra small spacing (compact component interiors)
- `{spacing.sm}` = 16px — small spacing (default component padding)
- `{spacing.md}` = 20px — medium spacing (section separation, moderate gaps)
- `{spacing.lg}` = 32px — large spacing (block-level gaps, interior section margins)
- `{spacing.xl}` = 36px — extra large (prominent section breaks)
- `{spacing.xxl}` = 40px — double extra large (major layout divisions)
- `{spacing.xxxl}` = 44px — triple extra large (hero-to-content transitions)
- `{spacing.section}` = 52px — section padding (standard full-width section vertical padding)
- `{spacing.band}` = 60px — band padding (large hero and promo section vertical padding)

**Usage Context:** `{spacing.band}` applies to hero sections and announcement bars; `{spacing.section}` to standard content blocks; `{spacing.lg}` to card interiors and component groups; smaller units compress UI buttons and form fields.

### Grid & Container

- **Max Width:** 1230px (measured at 1280px and 1440px breakpoints; content column width remains constant beyond 1280px)
- **Content Column at Breakpoints:**
  - 375px: 345px (mobile full-bleed with side gutters)
  - 768px: 738px (tablet centered)
  - 1024px: 1000px (small desktop)
  - 1280px+: 1230px (full desktop cap)
- **Column Strategy:** Single column layout on mobile (375px); flexible single-column or grid at tablet (768px); multi-column possible at 1024px and above, though grid column count is not explicitly declared.
- **Section Patterns:** Full-width hero section, alternating white and sage (`{colors.surface-alt}`) background bands, centered content blocks with generous left/right padding, stacked card grids at smaller viewports widening at larger scales.

### Whitespace Philosophy

The design prioritizes breathing room. Large display typography sits atop generous vertical padding (`{spacing.band}` = 60px on hero sections). Section-to-section gaps use consistent `{spacing.section}` (52px) or larger, preventing visual cramping. Horizontal padding on mobile (8–16px per side) ensures touch-safe gutters; at desktop, the 1230px max-width centers and frames content, emphasizing editorial hierarchy. Whitespace is not passive; it actively supports readability and luxurious, premium feel.

### Border Radius Scale

- `{rounded.none}` = 0px — all cards, containers, images, badges. Sharp, geometric aesthetic; containers maintain crisp edges.
- `{rounded.full}` = 9999px — buttons (all variants). Pills provide visual softness and clear interactive affordance contrasting with card sharpness.

**Component Context:**

- Buttons: `{rounded.full}` (pill)
- Cards: `{rounded.none}` (square)
- Images: `{rounded.none}` (square)
- Badges: `{rounded.none}` (square) or `50%` (small circular dots)
- Navigation: `{rounded.none}` (square/inline)

### Border Widths

Two border weights are active in the system:

- **Thin:** `1px` — applied to outline buttons, small link borders, form field strokes. Used for secondary CTAs and decorative dividers.
- **Medium:** `2px` — applied to primary button borders, prominent container outlines. Creates visual weight and focus on key interactive elements.

## 6. Depth & Elevation

| Level           | Treatment                                | Use                                                     |
| --------------- | ---------------------------------------- | ------------------------------------------------------- |
| Flat            | No shadow, color fill only               | Cards, sections, default backgrounds                    |
| Raised (Button) | `rgba(0, 0, 0, 0.16) 0px 7px 20px 0px`   | Primary and primary-variant buttons; single shadow tier |
| Inset (Active)  | `rgba(0, 0, 0, 0.125) 0px 3px 5px inset` | Button active/pressed state; adds haptic depth          |

**Shadow Philosophy:**

The site employs a **single-tier shadow strategy**. Depth comes primarily from color blocking—alternating white (`{colors.canvas}`) and sage (`{colors.surface-alt}`) backgrounds create visual hierarchy without relying on shadows. A single, subtle drop shadow (`rgba(0, 0, 0, 0.16) 0px 7px 20px 0px`) lifts buttons slightly off the surface, providing clear interactive affordance. An inset shadow on active buttons signals press feedback. This conservative approach reinforces a clean, flat-modern aesthetic while maintaining clarity between interactive and static surfaces.

## 7. Do's and Don'ts

### Do

- **Use the primary forest green (`{colors.primary}` — `#006041`) for all primary calls-to-action** — Download App buttons, major navigation links, active states. It is the brand anchor and must remain visually dominant.
- **Apply pill-shaped buttons (`{rounded.full}` — 9999px) consistently** across primary, secondary, and text button variants. The contrast between rounded buttons and sharp cards creates visual rhythm.
- **Maintain generous whitespace,** especially above display headlines. A minimum of `{spacing.band}` (60px) vertical padding around hero sections signals premium positioning.
- **Use Plus Jakarta Sans for all display and heading hierarchy** to maintain the bold, editorial brand voice. Reserve Open Sans for UI buttons and captions.
- **Alternate section backgrounds between white (`{colors.canvas}`) and soft sage (`{colors.surface-alt}`)** to break visual monotony and guide the eye through long-form content.
- **Keep cards and containers sharp (`{rounded.none}` — 0px)** to anchor the layout with geometric precision, especially when paired with soft button corners.
- **Apply the full drop shadow (`rgba(0, 0, 0, 0.16) 0px 7px 20px 0px`) to all primary buttons** for consistent lift and interactive clarity.
- **Respect the 1230px max-width** on desktop to maintain a controlled, centered reading experience.
- **Use the muted color (`{colors.muted}` — `#888888`) for secondary text, captions, and helper copy** to create visual hierarchy and reduce cognitive load.

### Don't

- **Do not apply the primary green to secondary or outline buttons** at full saturation on white backgrounds; use the outline variant with `1px` border instead, keeping text color as primary green but maintaining visual secondary status.
- **Do not add shadows to cards or section backgrounds;** depth comes from color changes and layout hierarchy, not layering effects.
- **Do not mix rounded and sharp corners on the same interactive element.** Buttons are always pills; cards are always sharp.
- **Do not use negative letter-spacing on body copy.** Display sizes (48px and above) use negative tracking (-2.4px to -3px); body text (14px–20px) uses positive or neutral (0.5px–1px) to preserve legibility.
- **Do not apply accent colors (`{colors.accent-1}`, `{colors.accent-2}`, `{colors.accent-3}`) as primary button or text fills.** They are decorative and supporting only; primary green and neutral text must dominate.
- **Do not reduce padding below `{spacing.sm}` (16px) on content blocks;** this diminishes the premium, spacious feel.
- **Do not use more than one shadow variant in a single composition.** Stick to either no shadow (flat) or the standard button shadow; avoid layering or custom effects.
- **Do not set body text smaller than `{typography.body-xs}` (13px) without clear hierarchy reason;** accessibility and readability require comfortable font sizes.
- **Do not override the navigation link color behavior;** links default to neutral ink and shift on hover, never to primary green unless in an active/selected state.

## 8. Responsive Behavior

### Breakpoints

| Breakpoint        | Viewport Width | Content Width | Key Behavior                                                                                                                            |
| ----------------- | -------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Mobile**        | 375px          | 345px         | Single-column layout; menu toggle active; compact button sizes; full-width sections with 16px gutters                                   |
| **Tablet**        | 768px          | 738px         | Single column maintained; menu toggle visible; section padding increases; images and hero text scale up slightly                        |
| **Small Desktop** | 1024px         | 1000px        | Potential for 2–3 column layouts; all nav links visible; full-size typography; content begins to spread horizontally                    |
| **Desktop**       | 1280px         | 1230px        | Content width capped at 1230px; centered with equal side margins; full multi-column grids active; all hero and display sizes at maximum |
| **Large Desktop** | 1440px         | 1230px        | Same as 1280px; cap remains fixed; no further content expansion                                                                         |

### Touch Targets

- **Button Minimum:** 45px height (outline button), 57px height (primary buttons) — exceeds 48px tap target guideline
- **Navigation Links:** Minimum 24px height with 8–12px vertical padding for comfort
- **Icon Badges:** 40px × 40px square for spacing; circular tap areas minimum 36px diameter
- **Small Interactive Elements (indicator dots):** 9px with clear visual border; may be grouped within larger touch zones

### Collapsing Strategy

- **375px → 768px:** Full-width single column; hero image and text stack vertically; button widths expand to fill available width; navigation collapses into hamburger menu (menu toggle visible); spacing reduces slightly to conserve vertical real estate
- **768px → 1024px:** Column count increases from 1 to 2–3 in product/story grids; hero section may introduce side-by-side text and image; navigation links may begin to appear inline (menu toggle begins to hide); padding increases to `{spacing.lg}` (32px) per side
- **1024px → 1280px:** Full navigation links visible; menu toggle fully hidden; multi-column grids stabilize; content width increases toward 1230px cap; section padding uses full `{spacing.section}` (52px) and above
- **1280px+:** Content width locked at 1230px with centered alignment; no further responsive changes; layout remains stable

## 9. Agent Prompt Guide

### Quick Color Reference

When implementing Fore Coffee UI components, use these mappings:

- **Primary CTA / Active State:** Primary Green (`{colors.primary}` — `#006041`)
- **Page Background / Canvas:** White (`{colors.canvas}` — `#FFFFFF`)
- **Section Band / Alternating Background:** Soft Sage (`{colors.surface-alt}` — `#E7F0EE`)
- **Heading Text / High Contrast:** Ink (`{colors.ink}` — `#222126`)
- **Body Copy:** Body Gray (`{colors.body}` — `#444444`)
- **Secondary / Disabled Text:** Muted (`{colors.muted}` — `#888888`)
- **Decorative Accents (leaf, border):** Moss Green (`{colors.accent-1}` — `#97A259`), Deep Teal (`{colors.accent-2}` — `#1E4A3C`), Warm Brown (`{colors.accent-3}` — `#765B51`)

### Iteration Guide

1. **Start with white canvas (`#FFFFFF`)** and primary green (`#006041`) CTAs; these two colors establish the brand immediately.
2. **Alternate major sections with sage background (`#E7F0EE`)** to break visual rhythm and guide the eye downward through long pages.
3. **Make all buttons pill-shaped (`border-radius: 9999px`)** with 2px border on outline variants, 0px border on filled variants; apply the full drop shadow to primary buttons.
4. **Set display headings (48px and above) in Plus Jakarta Sans weight 700–800** with negative letter-spacing (-2.4px to -3px); body copy in 14–18px Plus Jakarta Sans weight 400 with positive tracking (0.5px–1px).
5. **Cards, images, and containers remain sharp corners (`border-radius: 0px`)** to contrast with button softness.
6. **Use muted gray (`#888888`) for captions and secondary labels;** never apply primary green to supporting text.
7. **Respect max-width of 1230px** on desktop; center content and maintain equal-width gutters.
8. **Apply `rgba(0, 0, 0, 0.16) 0px 7px 20px 0px` shadow only to primary buttons;** all other elements remain flat or use inset shadow on active states.
9. **Pad sections vertically with `{spacing.band}` (60px) for hero, `{spacing.section}` (52px) for standard blocks;** do not compress below `{spacing.sm}` (16px) for component interiors.
10. **Test responsive collapsing at 375px, 768px, 1024px, and 1280px;** ensure single column at mobile, flexible multi-column at desktop, and content width locks at 1230px.

## 10. Known Gaps

- **Interaction states partially observed:** The extraction captured button hover, focus, and active states from stylesheets, but not all possible state combinations. Disabled button styling, focus-visible ring styles, and loading/pending states were not measured and may exist off-page.
- **Form input components:** No explicit form input, textarea, select, or checkbox measurements were extracted. The site's primary pages do not expose a full form UI kit.
- **Semantic status colors (error, success, warning, info):** The site does not declare error, success, or warning color roles. No red, green (success), yellow, or blue (info) semantic palette exists in the measured data.
- **Gradients and decorative meshes:** No CSS gradients or complex blend modes were detected in component styles. All surfaces appear to be flat, solid-color fills or transparent.
- **Decorative accent colors assigned roles:** Six measured colors (`{colors.accent-1}`, `{colors.accent-2}`, `{colors.accent-3}`, `{colors.neutral-1}`, `{colors.neutral-2}`, `{colors.neutral-3}`) lack explicit roles in the extraction. They are described as decorative only; if these colors serve a hidden or page-specific purpose, that purpose is not captured here.
- **Dark mode or theme switching:** The extraction analyzed one theme state (light background, dark text). No alternate dark-mode stylesheet or theme-switching logic was observed. If dark mode exists, it was not measured.
- **Typography on authenticated or gated pages:** Only the public-facing homepage and "Our Story" section were analyzed. Surfaces behind login, admin panels, or membership walls were not visited.
- **Micro-interactions and animations:** CSS transitions, animations, and keyframe behaviors were not extracted. Hover effects are reported only where static CSS state changes were visible (color, shadow, background shifts).
- **Full component storybook:** Only button, card, badge, link, and navigation components were measured. Input fields, modals, tooltips, dropdowns, tabs, and other advanced UI patterns may exist but were not captured on the measured pages.
- **Z-index layering fully mapped:** Z-index values (base: 1–2, dropdown: 99, sticky: 100–999, modal: 1000) were extracted but not tied to specific component instances. Exact stacking order of overlapping elements may vary in implementation.
- **Cross-browser and vendor prefixes:** No vendor-prefixed CSS (-webkit-, -moz-, etc.) values are reported; implementation may require prefixes for full browser coverage.

---

_This design system document is derived from measurements of https://fore.coffee/id/ captured on a single date. It reflects the public-facing website homepage and "Our Story" sections only. Implementation should prioritize the extracted token values and component patterns over assumptions about unmeasured surfaces._
