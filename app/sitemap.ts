import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://apexbyte.vercel.app";
  const routes: MetadataRoute.Sitemap = ["/", "/privacy"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.5,
  }));
  return routes;
}
