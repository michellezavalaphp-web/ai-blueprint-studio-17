

## Refocus Homepage as AI Strategy & Implementation Partner

### What changes

**`src/pages/Index.tsx`** — Rewrite to 4 sections (down from 6):

1. **Hero** — Update supporting text to the new strategy-focused copy. Replace 3 buttons with 2: "Start Your AI Readiness Assessment" (links to `/tools`) and "Book an AI Strategy Session" (links to `/book`). Remove "Explore AI Tools" button.

2. **Time Reclaimed Framework** — Keep as-is (already matches spec with 7 visual stages + icons).

3. **AI Strategy & Implementation** — Update services to 3 items: "AI Strategy & Roadmap", "Workflow Automation Systems", "AI Implementation & Integration" with new one-line descriptions. Remove "AI Agents" and "Operational Intelligence".

4. **Final CTA** — Update headline to "Ready to Implement AI in Your Organization?", update body text, add two buttons: "Book an AI Strategy Session" + "Start Your AI Readiness Assessment".

**Remove entirely:**
- Section 2 (Problem/Solution — repetitive AI transformation messaging)
- Section 3 (AI Tools grid with ToolCard components — moves tools off homepage)

**`src/pages/Tools.tsx`** — Reframe header copy: change "AI Tools Library" badge to "AI Readiness & Assessment", update title to "AI Readiness & Assessment Tools", update description to frame tools as preparation for AI implementation rather than standalone utilities.

### Files touched
- `src/pages/Index.tsx` — major rewrite
- `src/pages/Tools.tsx` — minor copy updates

