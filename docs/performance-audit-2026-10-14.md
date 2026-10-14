# Performance audit — 14 October 2026

Phase 2 corrects responsive image delivery and font fallback layout movement. This report distinguishes local build tests from production observations.

## Implementation

- Responsive sizes for hardware, dashboard, product-tour screenshots, feature thumbnails, and mobile visuals; small fixed-size candidates for logos.
- Static imports provide exact intrinsic dimensions and content-hashed image URLs. The local optimized responses use immutable caching; production headers must be verified separately.
- Remove deprecated image priority props and competing hero preloads. The desktop LCP hardware image remains eager; the dashboard and lower images use lazy loading.
- Disable route prefetching for fragment navigation links.
- Replace the body font’s proportional Arial fallback with Courier New/monospace while retaining JetBrains Mono and Archivo Black as the loaded fonts.

## Method and limits

Lighthouse 13.5.0, Chrome headless, production next start on localhost:3100. Three runs per page and device, sequentially, using default simulated mobile throttling (412×823, DPR 1.75, 4× CPU slowdown) and the default desktop preset. Both builds were warmed by browser checks. Values below are medians; transferred bytes cover the initial navigation, not every image reached by scrolling.

The original build is commit db8ce31. The final build includes the image and font changes in this commit.

| Page | Device | Score before → after | LCP before → after | TBT before → after | Initial transfer before → after | Byte reduction |
| --- | --- | --- | --- | --- | --- | --- |
| / | mobile | 86 → 78 | 3.36s → 3.29s | 206ms → 449ms | 434.7 KiB → 328.7 KiB | 24.4% |
| / | desktop | 100 → 99 | 0.77s → 0.82s | 34ms → 46ms | 430.0 KiB → 434.3 KiB | -1.0% |
| /features | mobile | 80 → 81 | 3.42s → 2.75s | 336ms → 605ms | 428.3 KiB → 349.1 KiB | 18.5% |
| /features | desktop | 99 → 99 | 0.75s → 0.73s | 91ms → 65ms | 577.6 KiB → 340.8 KiB | 41.0% |

**Timing scores are not evidence of a production speedup or regression.** Final mobile runs reported slow-CPU calibration warnings. For example, homepage CPU benchmark indices fell from 1159/1004 in the first baseline runs to 742.5/632 in the first final runs. Timing and blocking scores were affected by machine performance. All runs are retained; none were discarded to improve the score. Initial byte reductions and browser-selected image candidates are the more reliable results here.

Image-only intermediate homepage mobile medians were 86 → 88, but these are not substituted for the final build results.

## Image selection verification

At 390px viewport width and DPR 2, before/after browser checks selected:

| Image | Before candidate | After candidate |
| --- | --- | --- |
| Homepage hardware | 1200px | 750px |
| Homepage dashboard | 3840px | 750px |
| Homepage receipt screenshot | 1080px | 750px |
| Features receipt thumbnail | 3840px | 750px |
| Homepage and features phone | 750px | 640px |

These are requested candidate widths. The original optimizer did not necessarily upscale to 3840px: actual returned dimensions could be capped at the source image. The defect was oversized requests and delivered images for the small rendered slots.

In matched mobile homepage image-only runs, image transfers dropped from 185,936 to 68,972 bytes (about 63%). Lighthouse image-delivery savings changed from 132 KiB to no warning.

All images loaded with no horizontal overflow or browser exceptions on / and /features at 360, 390, 768, 1024, and 1440px. Desktop and mobile screenshots were inspected.

## Delayed-font validation

Fresh browser contexts delayed font requests by 2.5 seconds. CLS uses the largest session window, excluding recent input.

| Page | Width | CLS before fallback fix | CLS after fallback fix |
| --- | --- | --- | --- |
| / | 390px | 0.0000 | 0.0000 |
| / | 1440px | 0.0000 | 0.0000 |
| /features | 390px | 0.0000 | 0.0000 |
| /features | 1440px | 0.0000 | 0.0000 |

These are controlled lab tests, not real-user Core Web Vitals.

## Production observations and follow-up

Two pre-change live homepage mobile attempts scored 45 and 56. One had an incomplete-load warning and a third failed with NO_FCP; this is insufficient for a trustworthy live median. The trace reported slow document/CSS delivery, oversized hero images, and text as the mobile LCP element. Local scores cannot be used to claim the live site now scores 90+.

After Netlify deploys, verify hashed image URLs, sizes attributes, cache headers, and no competing image preloads on the live pages. Run PageSpeed Insights or Lighthouse on both pages with three mobile and desktop runs under stable conditions. Investigate document/CSS latency and JavaScript blocking if mobile scores remain low. Keep fonts preloaded and monitor real-user LCP, INP, and CLS as field data becomes available.

## Validation and artifacts

- Production build and TypeScript passed.
- ESLint passed for all changed source files.
- Responsive image and delayed-font checks passed.
- Raw JSON/HTML Lighthouse reports, browser-check JSON, screenshots, and audit runners are retained locally at workspace-root performance-audits/2026-10-14, outside the website Git repository.
