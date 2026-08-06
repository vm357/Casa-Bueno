# ElevenLabs Design System

An editorial, photographic design language for ElevenLabs — a voice-AI product that
reads like a quietly confident print magazine. The system is built around an off-white
canvas, warm near-black ink, modest type weights, and soft pastel **atmospheric gradient
orbs** as the only "color" moments. There is no saturated CTA color, no neon accent, no
dark dev-tools mood.

> **Source note.** This system was authored from a written brand brief — no ElevenLabs
> codebase or Figma file was attached. All token values, component specs, and the
> marketing-website UI kit are reconstructed from that brief. If you have the real
> ElevenLabs repo or Figma, attach it via the Import menu and we can reconcile pixel
> details and swap in the licensed typeface + true logo mark.

---

## The brand in one breath

Off-white page (`--color-canvas` #f5f5f5) holding warm near-black ink
(`--color-ink` #0c0a09). Display set in **Waldenburg Light at weight 300** (an editorial
serif voice — substituted here with **EB Garamond @300**), body in **Inter @400** with a
touch of extra tracking. A single near-black **ink pill** is the only call-to-action
color. Brand voltage is **photographic, not chromatic**: mint / peach / lavender / sky /
rose gradient orbs drift through hero bands as pure atmosphere. Soft pill geometry on
CTAs, 16px radius on cards, 96px rhythm between bands.

---

## CONTENT FUNDAMENTALS

How ElevenLabs writes.

- **Voice — calm, declarative, editorial.** Short confident statements, not hype. The
  product is treated as craft, not a gadget. Think magazine standfirst, not landing-page
  shout. e.g. "The most realistic voice AI." / "Create with the most powerful AI audio
  models, ever."
- **Person.** Addresses the reader as **you** ("Create the voice you imagine"); the
  company speaks as **we / ElevenLabs** sparingly. Never "I".
- **Casing.** Sentence case everywhere for headlines and body. The ONLY uppercase is the
  small `caption-uppercase` label (12px / 600 / +0.96px tracking) used for section
  eyebrows and badges ("CREATIVE PLATFORM", "NEW"). Never ALL-CAPS a headline.
- **Sentence length.** Headlines are tight — 3 to 8 words. Subheads are one clause.
  Body paragraphs stay short and unhurried, plenty of full stops.
- **No exclamation, no emoji.** The brand never uses emoji and almost never exclaims. Tone
  is warmth through restraint, not enthusiasm markers.
- **Verbs lead.** CTAs and feature titles open with a verb: "Try free", "Get started",
  "Explore voices", "Build agents". CTA labels are 1–3 words.
- **Numbers are quiet.** Stats appear, but framed plainly ("32 languages", "5,000+
  voices") — never neon stat-card slop, never invented precision.

Specific examples of in-voice copy:
- Hero h1: *"The most realistic voice AI."*
- Subhead: *"The most powerful, expressive, and lifelike AI audio — for everyone."*
- Eyebrow label: *"TEXT TO SPEECH"*
- CTA pair: *"Try free"* (ink pill) + *"Contact sales"* (outline)
- Section head: *"Built for every kind of creator."*

---

## VISUAL FOUNDATIONS

- **Color & mood.** Photographic, warm-neutral, near-monochrome. The whole UI lives in
  off-white → near-black stone greys. Color appears ONLY as soft pastel gradient orbs
  (mint/peach/lavender/sky/rose) used as atmosphere — never as button fills, text color,
  or solid backgrounds. Imagery, where present, reads warm and soft, never high-contrast
  or neon.
- **Type.** Two families. Display = Waldenburg Light @300 (substitute EB Garamond @300) —
  editorial serif, set with negative tracking (-0.32px to -1.92px), never bold. Body =
  Inter @400/500 with a hair of positive tracking (+0.15–0.18px) for an editorial feel.
  The 300-weight display against clean Inter body IS the brand signature.
- **Spacing & layout.** Generous, print-magazine pacing. 96px between bands; cards inside
  a band sit close (16–24px gaps). Content caps at 1200px on a 12-column editorial grid.
  Feature grids run 3-up desktop → 2-up tablet → 1-up mobile.
- **Backgrounds.** Predominantly flat off-white (`--color-canvas`). Alternating bands step
  to `--color-canvas-soft` (#fafafa). The rare dark band/hero uses `--color-surface-dark`
  (#0c0a09). Atmospheric gradient orbs (large, blurred radial blooms) sit behind hero copy
  and inside gradient-orb cards — soft, low-opacity, drifting. No full-bleed photo
  textures, no repeating patterns, no noise/grain by default.
- **Animation.** Out of scope in the brief / kept minimal: gentle fades and slow orb
  drift only. No bounce, no spring, no aggressive motion. Easing should be soft
  (ease-out). Hover transitions ~150–200ms.
- **Hover states.** Cards lift with the single soft-drop shadow (`--shadow-soft`,
  `0 4px 16px rgba(0,0,0,0.04)`) and may raise their hairline to `--color-hairline-strong`.
  The ink pill darkens to `--color-primary-active` (#0c0a09). Text links gain underline or
  shift to `--color-ink`. Hover never introduces a new hue.
- **Press states.** Primary pill goes to `--color-primary-active`. Subtle; no scale-down
  required.
- **Borders.** 1px hairlines do the structural work: `--color-hairline` (#e7e5e4) default,
  `--color-hairline-strong` (#d6d3d1) for stronger panels and input borders. Inputs
  thicken to 2px ink on focus.
- **Shadows.** ONE soft tier only (`--shadow-soft`). The system is deliberately flat —
  depth comes from hairlines and gradient orbs, not stacked shadows.
- **Corner radii.** Pill (9999px) for every CTA and badge; 16px (`--radius-xl`) for
  feature/pricing cards; 24px (`--radius-xxl`) for gradient-orb cards; 8px inputs; full
  circles for voice icons and avatars. Sharp 0px corners are reserved/unused on CTAs.
- **Cards.** White (`--color-surface-card`) on the off-white canvas, 16px radius, 1px
  hairline border, no shadow at rest, soft-drop shadow on hover. Padding 24px (feature) or
  32px (testimonial / pricing). Quiet and crisp.
- **Transparency & blur.** Used for atmosphere: gradient orbs are low-opacity radial
  gradients, often blurred, bleeding behind content. Outline buttons are transparent with
  a hairline. No frosted-glass nav by default.

---

## ICONOGRAPHY

- **Approach.** Minimal, thin-stroke line icons, monochrome in `--color-ink` or
  `--color-muted`. Icons are functional and quiet — they never carry color and never
  become illustration. The brand leans on type and atmosphere, not iconography.
- **Set.** No bespoke icon font was available in the brief. We standardize on
  **Lucide** (1.5–2px stroke, rounded line caps) loaded from CDN — it matches the thin,
  humanist, monochrome line style ElevenLabs uses. *Flagged substitution:* if the real
  ElevenLabs icon set exists in the repo/Figma, swap it in and update this section.
- **Voice glyph.** Voice rows use a circular plate (`--color-surface-strong`) holding
  initials or a small waveform/play glyph, not a colored icon.
- **Emoji & unicode.** Never. No emoji anywhere; no unicode dingbats as icons.
- **Logo.** A clean **ElevenLabs wordmark** (`assets/logo-wordmark.svg`, plus
  `assets/logo-wordmark-light.svg` for dark bands) set in the display family. The brief
  did not include the proprietary bar mark, so the wordmark is a text-based stand-in —
  replace with the official lockup when available.

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (imports only). Consumers link this one file.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter so this system can be used in Claude Code.

**`tokens/`** — CSS custom properties
- `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `radius.css` · `elevation.css`

**`assets/`** — `logo-wordmark.svg`, `logo-wordmark-light.svg`

**`guidelines/`** — foundation specimen cards (Type, Colors, Spacing, Brand) shown in the
Design System tab.

**`components/`** — reusable React primitives (namespace exposed on `window`; run
`check_design_system` for the exact name):
- `buttons/` — `Button` (primary / outline / tertiary)
- `forms/` — `TextInput`, `Badge`
- `cards/` — `FeatureCard`, `TestimonialCard`
- `atmospheric/` — `GradientOrbCard`, `AudioWaveformCard`
- `voice/` — `VoiceRow`
- `pricing/` — `PricingTierCard`
- `navigation/` — `TopNav`

**`ui_kits/`**
- `marketing-site/` — full-screen recreation of the ElevenLabs marketing homepage,
  composed from the primitives above.
