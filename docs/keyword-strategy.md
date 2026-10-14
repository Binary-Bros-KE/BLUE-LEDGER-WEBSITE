# Keyword ownership and landing pages

Implemented 14 October 2026. The homepage owns the broad Kenyan POS category; each focused page answers a different buying question. Related queries belong on the same page rather than generating separate near-duplicate pages.

| URL | Primary topic | Related queries | Buyer question |
| --- | --- | --- | --- |
| / | POS system Kenya | point of sale software Kenya; retail POS Kenya; wholesale POS Kenya | What is Blue Ledger and who is it for? |
| /features | Blue Ledger POS features | POS product tour; Blue Ledger features | What does the complete system do? |
| /offline-pos | offline POS system Kenya | POS without internet; offline point of sale Kenya | What works locally, and what waits for a connection? |
| /inventory-management | inventory management software Kenya | stock management software Kenya; stock control POS | How are deliveries, stock movements and stock value recorded? |
| /multi-branch-pos | multi-branch POS system Kenya | multi-store POS; branch stock transfers | How do branch identities, teams and transfers work together? |
| /pricing | POS software pricing Kenya | POS system cost Kenya; Blue Ledger pricing | Which package and setup should I request a quote for? |
| /mobile-pos | mobile POS app Kenya | shop sales on phone; remote shop visibility | What can an owner or cashier do from a phone? |

## Research and evidence

Candidate query groups were checked against current search results. This is a qualitative search-intent review, not a search-volume study, difficulty score or ranking guarantee. Search Console data should determine later refinements as impressions accumulate.

Representative primary product pages show these intents being addressed separately:

- [Rafiki: offline POS](https://rafikiatwork.com/offline-pos-system-kenya)
- [Veira: inventory management](https://veirahq.com/inventory/)
- [ICOREPOS: multiple branches](https://icorepos.co.ke/multi-branch-pos)
- [PosXT: pricing](https://posxt.com/ke)
- [AskBiz: mobile POS](https://askbiz.co/mobile-pos-kenya)

These pages informed the intent review only. Competitor copy, prices and integration claims were not reused. Blue Ledger copy is grounded in the existing feature catalogue, FAQ, mobile section, offline description and package descriptions. Exact phone-platform compatibility is left for the team to confirm; no app-store links or unsupported platform promises were added.

The existing site publishes a 30-day free trial and quote-based prices. The pricing page keeps those terms, explains quote inputs, and reuses the existing Duka, Biashara and Enterprise package descriptions. It does not invent prices, hardware bundles, payment integrations, eTIMS integration, customer testimonials or customer counts.

## Implementation

- Five distinct static routes with unique titles, descriptions, canonicals, Open Graph URLs and visible main headings.
- Each route has specific workflows, four buyer FAQs, an existing product visual where relevant, limitations and a contact CTA.
- Breadcrumbs appear in the page and in BreadcrumbList structured data. WebPage structured data describes each route. No fabricated Offer, rating or price schema was introduced.
- Navbar, footer, homepage sections and relevant feature-tour blocks link to the focused pages. Each focused page links to three related topics and the full feature tour.
- Fragment navigation and topic discovery links avoid speculative route prefetching. Images use the phase-two static asset registry and responsive sizes.
- Sitemap contains seven canonical public marketing URLs. No invented last-modified dates.

Shared copy lives in `src/lib/solutions.ts`; the five route files supply static metadata and render `SolutionPage`. Update a feature claim or package description at its source and review corresponding page copy when product capabilities change.

## Validation

Run `npm run build`, `npm run lint`, then `npm run check:seo`. The SEO check reads production HTML and validates unique metadata, topic ownership, canonical and Open Graph URLs, one main heading, crawlable links, breadcrumb URLs, FAQ presence and the exact sitemap inventory.

Validation passed: production build and TypeScript, full-site ESLint, and all seven generated-page SEO checks. All 24 headless browser page/viewport combinations passed, covering mobile and desktop layout, loaded images, internal links, FAQ expansion, and opening/closing the quote or demo modal without sending enquiries. Mobile and desktop screenshots were reviewed.

## Google Search Console follow-up

1. After deployment, verify the updated sitemap contains all seven URLs. The existing `sitemap.xml` submission covers the new entries; the sitemap location is unchanged.
2. Inspect each new URL, test the live page, review crawl/index eligibility and request indexing.
3. Check which canonical Google selects and investigate exclusions rather than repeatedly requesting unchanged pages.
4. Review queries and pages weekly, filtering the target market and separating brand searches from new-buyer queries. Wait for enough impressions before reacting to small ranking fluctuations.
5. Compare the pages receiving impressions for each topic. If two pages compete for the same intent, refine their content and internal links or consolidate them.
6. Connect enquiries and customers to landing pages when conversion tracking is implemented. Qualified enquiries are the outcome; published-page counts and Lighthouse SEO scores alone are not.

Follow [Google's SEO starter guidance](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) for useful content and crawlable site organization. Next content should come from real product workflows and customer questions, with industry pages added only when the supported workflow is genuinely distinct.
