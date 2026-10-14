import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const site = "https://blueledgerpos.app";
const pages = [
  ["/", "index", "POS System in Kenya"],
  ["/features", "features", "POS Features"],
  ["/offline-pos", "offline-pos", "Offline POS System in Kenya"],
  ["/inventory-management", "inventory-management", "Inventory Management Software in Kenya"],
  ["/multi-branch-pos", "multi-branch-pos", "Multi-Branch POS System in Kenya"],
  ["/pricing", "pricing", "POS Software Pricing in Kenya"],
  ["/mobile-pos", "mobile-pos", "Mobile POS App for Shops in Kenya"],
];
const readBuild = file => readFileSync(fileURLToPath(new URL(`../.next/server/app/${file}`, import.meta.url)), "utf8");
const normalized = value => new URL(value).href;
const titles = new Set();
const descriptions = new Set();

for (const [route, file, topic] of pages) {
  const html = readBuild(`${file}.html`);
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = html.match(/<meta name="description" content="([^"]*)"/s)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/s)?.[1];
  const ogUrl = html.match(/<meta property="og:url" content="([^"]*)"/s)?.[1];
  assert.ok(title?.includes(topic), `${route}: title must own its search topic`);
  assert.ok(description?.length > 0, `${route}: missing description`);
  assert.equal(normalized(canonical), normalized(`${site}${route}`), `${route}: incorrect canonical`);
  assert.equal(normalized(ogUrl), normalized(`${site}${route}`), `${route}: incorrect Open Graph URL`);
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, `${route}: expected one main heading`);
  assert.doesNotMatch(html, /www\.blueledger\.app|name="robots" content="[^"]*noindex/i);
  assert.ok(!titles.has(title), `${route}: duplicate title`);
  assert.ok(!descriptions.has(description), `${route}: duplicate description`);
  titles.add(title);
  descriptions.add(description);
  for (const [destination] of pages.slice(2)) {
    assert.match(html, new RegExp(`<a\\b[^>]*href="${destination}"`), `${route}: missing crawlable link to ${destination}`);
  }
  if (route !== "/" && route !== "/features") {
    const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
    const graph = jsonLd.flatMap(data => data["@graph"] ?? [data]);
    const page = graph.find(item => item["@type"] === "WebPage");
    const crumbs = graph.find(item => item["@type"] === "BreadcrumbList");
    assert.equal(page?.url, `${site}${route}`, `${route}: incorrect WebPage URL`);
    assert.equal(crumbs?.itemListElement?.length, 2, `${route}: missing breadcrumb hierarchy`);
    assert.equal(crumbs.itemListElement[1].item, `${site}${route}`);
    assert.equal([...html.matchAll(/<summary(?:\s|>)/g)].length, 4, `${route}: expected topic FAQs`);
    assert.match(html, /role="dialog"|BOOK AN OFFLINE DEMO|SEE STOCK MANAGEMENT|BOOK A BRANCH WALKTHROUGH|REQUEST A QUOTE|SEE THE MOBILE APP/);
  }
  console.log(`PASS ${route}: unique metadata, canonical, main heading and crawlable topic links`);
}

const sitemap = readBuild("sitemap.xml.body");
const actual = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => normalized(match[1])).sort();
const expected = pages.map(([route]) => normalized(`${site}${route}`)).sort();
assert.deepEqual(actual, expected, "Sitemap must contain exactly the seven canonical marketing URLs");
console.log("PASS sitemap: seven canonical marketing URLs");
