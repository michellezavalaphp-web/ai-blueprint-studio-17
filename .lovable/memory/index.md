Go AI Innovation design system, brand rules, and architecture decisions

# Go AI Innovation - Design System

## Brand Colors (from logo)
- Primary: HSL 207 90% 54% (bright blue)
- Accent: HSL 199 100% 50% (cyan-blue)
- Background: HSL 222 30% 5% (deep navy) — hero/CTA only
- Light sections: white #FFFFFF and light gray #F7F9FC
- Gradient: 135deg primary → accent

## Visual Tone
- Enterprise consulting firm — NOT tech startup
- Hero section: dark navy
- All content sections after hero: light backgrounds (.section-light, .section-light-alt)
- Minimal glow effects, more whitespace
- Professional blue accents only, no neon

## Logo
- File: src/assets/logo.png (horizontal)
- Favicon: public/logo.png
- Used in: Navbar, Footer, Hero

## Typography
- Display: Space Grotesk
- Body: Inter
- Sizes: tight, small (13px labels, 11px metas)

## Design Language — Consulting Firm
- `.section-light` white bg with light theme variable overrides
- `.section-light-alt` light gray bg variant
- `.glass-panel` / `.dash-card` for card containers
- `.badge-tag` for section labels (pill badges)
- `.page-header` for consistent page tops with icon + tag
- `.stat-value` for metric displays

## Navigation
- Simple: Home, Services, AI Tools, Framework, About, Contact
- No "More" dropdown

## Business Info
- Go AI Innovation DBA Agape Advisory Group LLC
- 8958 West State Road 84 #233, Davie, FL 33324
- MZavala@GoAIInnovation.com
- 305-360-6170

## Key Patterns
- Homepage: Hero → Services → Framework → AI Diagnostics → Methodology → CTA
- Mission/Founder content lives on /about page
- Tools renamed to "AI Readiness Diagnostics"
- Lead capture requires: Name, Email, Phone, Company (all required)
- CTA language: "Request AI Strategy Consultation"
- Time Reclaimed™ Framework referenced everywhere
