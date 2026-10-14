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
  ["/about", "about", "About Blue Ledger POS"],
  ["/contact", "contact", "Contact Blue Ledger Sales"],
  ["/guides", "guides", "Practical POS Guides"],
  ["/guides/reconcile-stock-across-branches", "guides/reconcile-stock-across-branches", "How to Reconcile Stock Across Branches"],
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
  for (const [destination] of [...pages.slice(2, 7), pages[9]]) {
    assert.match(html, new RegExp(`<a\\b[^>]*href="${destination}"`), `${route}: missing crawlable link to ${destination}`);
  }
  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map(match => JSON.parse(match[1]));
  const graph = jsonLd.flatMap(data => data["@graph"] ?? [data]);
  const organization = graph.filter(item => item["@type"] === "Organization");
  assert.equal(organization.length, 1, `${route}: expected one operator entity`);
  assert.equal(organization[0].name, "Trylist Solutions Ltd");
  assert.equal(organization[0].url, "https://trylistsolutions.co.ke/");
  assert.equal(organization[0]["@id"], `${site}/#organization`);
  assert.equal(organization[0].contactPoint.length, 2);
  const website = graph.find(item => item["@type"] === "WebSite");
  assert.equal(website?.publisher?.["@id"], organization[0]["@id"]);
  const page = graph.find(item => ["WebPage", "AboutPage", "ContactPage", "CollectionPage"].includes(item["@type"]));
  assert.equal(page?.url, `${site}${route}`, `${route}: incorrect page schema URL`);
  assert.equal(page?.isPartOf?.["@id"], website["@id"]);
  assert.equal(page?.publisher?.["@id"], organization[0]["@id"]);
  const ids = graph.map(item => item["@id"]).filter(Boolean);
  assert.equal(new Set(ids).size, ids.length, `${route}: duplicate entity definitions`);
  if (route !== "/") {
    const crumbs = graph.find(item => item["@type"] === "BreadcrumbList");
    const count = route.startsWith("/guides/") ? 3 : 2;
    assert.equal(crumbs?.itemListElement?.length, count, `${route}: incorrect breadcrumb hierarchy`);
    assert.equal(page.breadcrumb["@id"], crumbs["@id"]);
    assert.equal(crumbs.itemListElement.at(-1).item, `${site}${route}`);
    crumbs.itemListElement.forEach((item, index) => {
      assert.equal(item.position, index + 1);
      assert.ok(pages.some(([path]) => normalized(`${site}${path}`) === normalized(item.item)), `${route}: breadcrumb destination is not a published page`);
    });
  }
  if (pages.slice(2, 7).some(([path]) => path === route)) {
    assert.equal([...html.matchAll(/<summary(?:\s|>)/g)].length, 4, `${route}: expected topic FAQs`);
    assert.match(html, /BOOK AN OFFLINE DEMO|SEE STOCK MANAGEMENT|BOOK A BRANCH WALKTHROUGH|REQUEST A QUOTE|SEE THE MOBILE APP/);
  }
  if (route === "/") {
    const app = graph.find(item => item["@type"] === "SoftwareApplication");
    assert.equal(app?.url, `${site}/`);
    assert.equal(app?.publisher?.["@id"], organization[0]["@id"]);
    assert.equal(page.mainEntity["@id"], app["@id"]);
    for (const key of ["offers", "aggregateRating", "review", "softwareVersion", "downloadUrl"]) assert.ok(!(key in app), `Unverified software property: ${key}`);
    assert.equal(app.operatingSystem, "Windows");
    assert.ok(app.screenshot.startsWith(`${site}/screenshots/`));
  }
  if (route.startsWith("/guides/")) {
    const article = graph.find(item => item["@type"] === "Article");
    assert.equal(article?.url, `${site}${route}`);
    assert.equal(article?.mainEntityOfPage?.["@id"], page["@id"]);
    assert.equal(article?.publisher?.["@id"], organization[0]["@id"]);
    assert.match(html, /This is an illustrative example/);
    assert.match(html, /<time dateTime="2026-10-14"/);
  }
  console.log(`PASS ${route}: metadata, canonical, heading, links, entity references and breadcrumbs`);
}
const sitemap = readBuild("sitemap.xml.body");
const actual = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => normalized(match[1])).sort();
const expected = pages.map(([route]) => normalized(`${site}${route}`)).sort();
assert.deepEqual(actual, expected, "Sitemap must contain exactly the eleven canonical public URLs");
console.log("PASS sitemap: eleven canonical public URLs");