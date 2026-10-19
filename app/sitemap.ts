import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/team", "/outreach", "/fellowship", "/fund", "/privacy"];
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date(), priority: p === "" ? 1 : 0.7 }));
}
