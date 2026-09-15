import type { MetadataRoute } from "next";

// ponytail: /showcase is left out on purpose, it is noindex (thin duplicate of the homepage platforms section).
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://modlio.corsw.in" },
    { url: "https://modlio.corsw.in/tenants" },
  ];
}
