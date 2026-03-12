Go AI Innovation design system, brand rules, and architecture decisions

# Go AI Innovation - Design System

## Brand Colors (from logo)
- Primary: HSL 207 90% 54% (bright blue)
- Accent: HSL 199 100% 50% (cyan-blue)
- Background: white (light default)
- Gradient: 135deg primary → accent

## Visual Tone
- Enterprise consulting firm — NOT tech startup
- Default theme is LIGHT (white bg, dark text)
- Header & footer: dark navy backgrounds
- Hero section: light (white) so logo displays cleanly
- Dark sections (`.section-dark`): used for framework, CTA — deep navy HSL 222 30% 5%
- Light sections: `.section-light` (white), `.section-light-alt` (light gray)
- Logo (src/assets/logo.png) only on light backgrounds
- Logo white version (src/assets/logo-white.png) only if dark bg needed
- Minimal glow effects, more whitespace
- Professional blue accents only, no neon

## Logo
- File: src/assets/logo.png (horizontal, for light bg)
- White: src/assets/logo-white.png (for dark bg)
- Icon: src/assets/logo-icon.png
- Favicon: public/logo.png

## Typography
- Display: Space Grotesk
- Body: Inter
- Sizes: tight, small (13px labels, 11px metas)

## Key Patterns
- Homepage: Hero(light) → Services(light) → Framework(dark) → Diagnostics(light) → Methodology(light-alt) → CTA(dark)
- Lead capture requires: Name, Email, Phone, Company (all required)
- CTA language: "Request AI Strategy Consultation"
- Time Reclaimed™ Framework referenced everywhere
