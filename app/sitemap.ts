import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://apexbyte.example";
  const routes: MetadataRoute.Sitemap = ["/", "/#services", "/#portfolio", "/#about", "/#contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.6,
  }));
  return routes;
}
