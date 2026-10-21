import type { MetadataRoute } from "next";
import { SITE_INDEXABLE, SITE_URL } from "@/features/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: SITE_INDEXABLE ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
