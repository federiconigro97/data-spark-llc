// Generate public/sitemap.xml from static routes + blog .md files frontmatter.
// Run as part of `npm run build` (or standalone via `npm run sitemap`).

import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const POSTS_DIR = join(ROOT, "src", "content", "blog");
const SITEMAP_PATH = join(ROOT, "public", "sitemap.xml");
const SITE_URL = "https://www.datasparkgrowth.com";

// Static routes — edit here if adding new top-level pages
const staticRoutes = [
  { path: "/", changefreq: "weekly", priority: 1.0 },
  { path: "/founders", changefreq: "weekly", priority: 1.0 },
  { path: "/blog", changefreq: "weekly", priority: 0.9 },
  { path: "/privacy-policy", changefreq: "yearly", priority: 0.3 },
];

const today = new Date().toISOString().split("T")[0];

// Read blog posts
let postFiles = [];
try {
  postFiles = readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
} catch (e) {
  console.warn(`[sitemap] No posts dir at ${POSTS_DIR}, skipping blog routes.`);
}

const blogRoutes = postFiles
  .map((file) => {
    const content = readFileSync(join(POSTS_DIR, file), "utf-8");
    const { data } = matter(content);
    if (!data.slug) {
      console.warn(`[sitemap] Missing slug in ${file}, skipping.`);
      return null;
    }
    return {
      path: `/blog/${data.slug}`,
      changefreq: "monthly",
      priority: 0.8,
      lastmod: data.date || today,
    };
  })
  .filter(Boolean);

const allRoutes = [
  ...staticRoutes.map((r) => ({ ...r, lastmod: today })),
  ...blogRoutes,
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${allRoutes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n\n")}

</urlset>
`;

writeFileSync(SITEMAP_PATH, xml);
console.log(
  `[sitemap] Generated ${allRoutes.length} URLs (${blogRoutes.length} blog posts) -> ${SITEMAP_PATH}`
);
