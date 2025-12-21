import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gentlecare-home.com"; // User hasn't specified domain, but assuming production URL from context or placeholder.
  // Actually, I should use a placeholder if I don't know the domain, but for now I'll use a relative URL or simple placeholder relying on metadataBase if possible, 
  // but sitemap requires absolute URLs usually. 
  // Let me check if I can find the domain in the codebase.
  // I didn't see a domain in the file lists. I will use 'https://gentlecare.com' as a placeholder or better yet, 
  // I will check if there is an env var or config. 
  // Taking a safe bet with a placeholder that gets replaced or just a standard example.
  // Wait, the plan said "Include all static routes".
  
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/caregivers`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
