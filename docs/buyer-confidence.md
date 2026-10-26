# Buyer confidence work — 14 October 2026

Implemented:
- Focused screenshot crops, benefit captions, blur previews and an on-demand original-size viewer with mobile panning and keyboard dismissal.
- Clearly labelled four-screen product walkthrough, static poster and searchable transcript. The player and screenshot viewer load only after interaction.
- About and Contact pages, visible existing sales/support/email contacts, and privacy enquiry instructions.
- Trial, demo and quote contact intents, with explicit assisted trial setup wording.
- Hardware, onboarding, quote inclusions and support questions on the pricing page.
- About and Contact added to the canonical sitemap (nine public pages).
- Removed unsupported zero-loss and sub-second performance guarantees.

Verification:
- Production build, TypeScript, full ESLint and nine-page SEO checks passed.
- Responsive browser checks cover 24 route/viewport combinations; all images load without document overflow.
- Additional mobile checks cover About/Contact, assisted trial copy, screenshot enlargement and actual-size panning, Escape/focus restoration and screenshot-tour navigation.
- The earlier white screenshot areas could not be reproduced as failed images. Lazy loading during capture remains a possible explanation; blur previews now show while screenshot requests are pending.

Still needs owner-supplied material:
1. A real short demo recording, approved transcript and WebVTT captions. Configure src and captionsSrc in src/lib/demo.ts after adding these assets. Until then the site accurately calls the interaction a screenshot tour, not a video demonstration.
2. Five customer comments supplied by the owner were first published as labelled paraphrases. On 26 October 2026 the owner confirmed the customers approved first-person wording, and they are now published as direct quotes. Trylist is excluded because it operates Blue Ledger. For detailed case studies, obtain measurable before/after results, dates and measurement method. No quantitative results were invented.
3. The owner confirmed Trylist Solutions Ltd as operator, SQLite local storage, PostgreSQL on a VPS for cloud sync, backup and mobile access, and no sharing for other organisations own use. These facts are published on About/Contact and in the footer. Public address, complete data categories and purposes, hosting providers/access, retention/deletion and request procedures still need confirmation for a full privacy notice. Security superlatives and unverified password implementation claims were not published.
4. Confirm exact package pricing, onboarding deliverables, support hours/response commitments and any hardware compatibility list before publishing contractual promises.