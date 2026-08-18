# Xalient Launchpad

Build a single-page marketing landing page for Xalient, an AI automation company that builds custom AI agents for legal and professional services firms.

STACK: React + Tailwind CSS + shadcn/ui (Lovable defaults). Single page only — no routing, no backend, no database, no auth, no dark mode toggle, no CMS. Do not scaffold anything beyond what's listed below.

CONTEXT FOR COPY DECISIONS:
Xalient does not rely on inbound/organic traffic. Visitors arrive one of two ways: (1) a decision-maker at a legal or professional services firm who just got a cold call from Xalient and is checking them out, or (2) a referral from an existing client who already trusts the source and has a specific use case in mind. Design and copy for BOTH: fast credibility for a skeptical cold-call follow-up visitor, and quick use-case confirmation for a warm referral visitor. This is not a top-of-funnel education page — assume the visitor already has some context. Do not write generic "what is AI" explainer content.

LOGO: Design a simple, professional wordmark/icon logo for "Xalient" — clean geometric mark, no stock AI clichés (no brain icons, no circuit patterns, no glowing orbs). Place in the header, top-left, paired with the wordmark. Should work in the navy/gold palette below.

PRIMARY CTA (single, repeated): "Book a call" — anchor to https://calendly.com/xalient1/30min, appears in the hero, once mid-page, and in the footer. No secondary CTAs, no newsletter signup, no free trial.

SECTIONS (in order):
1. Hero — headline: "Your firm's busywork, handled by AI that actually understands your workflow." Subhead: "Xalient builds custom AI agents for law firms and professional services teams — deployed in weeks, not quarters." Primary CTA button. Keep it tight — no stock hero illustration, use bold typography instead.
2. Who we work with — Law firms, accounting & tax practices, and consulting firms. Written so a referral visitor immediately recognizes themselves.
3. What we build — 3 concrete AI agent use cases:
   - Intake Triage Agent — screens and routes new client inquiries automatically, flags high-priority leads
   - Document Review Agent — extracts key terms and flags risks across contracts and case files
   - Client Comms Agent — drafts status updates and follow-ups so associates stop writing the same email twice
4. Proof — client results section:
   - "Cut new-client intake response time from 3 days to 4 hours" — [Firm Name Withheld], mid-size law firm
   - "Saved 12 associate-hours per week on contract review" — [Firm Name Withheld], corporate legal team
   - Testimonial quote: "Xalient's agent handles the first-pass review our juniors used to dread. It paid for itself in the first month." — Managing Partner, regional law firm
5. How it works — 3-step process: (1) 20-minute call to map your workflow, (2) we build and test your custom agent against real cases, (3) agent goes live with your team, refined over the first 30 days.
6. Final CTA — restate the book-a-call action, no additional form fields beyond what's needed to schedule.
7. Minimal footer — Xalient logo/wordmark, contact email ar@xalient.us, no social links.

TONE: Direct and confident, not hype-y SaaS marketing speak. Written like it's for people who bill by the hour and don't have time for fluff.

VISUAL DIRECTION: Professional, not consumer-SaaS-playful. Legal/professional services buyers are conservative — avoid gradients-and-emoji startup aesthetic. Palette: deep navy (#0F1B2D) primary, warm gold (#C9A227) accent, off-white/neutral background. Strong typography hierarchy over decorative illustration.

Do not add features, pages, or sections not explicitly listed above.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b9edc247-a663-48fc-be32-72cb80ea84d7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
