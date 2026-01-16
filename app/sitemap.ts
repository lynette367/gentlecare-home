import { MetadataRoute } from "next";
import { caregivers } from "@/data/caregivers";

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
    /* 
    {
      url: `${baseUrl}/caregivers`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stories`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    */
  ];

  /* 
  // Dynamic caregiver profile routes
  const caregiverRoutes: MetadataRoute.Sitemap = caregivers.map((caregiver) => ({
    url: `${baseUrl}/caregivers/${caregiver.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...caregiverRoutes];
  */

  return staticRoutes;
}
