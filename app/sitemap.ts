import { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.gerish.xyz";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];


  return staticRoutes;
}
