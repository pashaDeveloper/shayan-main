import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://2shigroup.com';
  const languages = ['fa', 'en', 'tr', 'ar'];
  
  const routes = [
    {
      path: '',
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      path: '/services',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      path: '/news',
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      path: '/about',
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      path: '/contact',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add main routes for each language
  languages.forEach(lang => {
    routes.forEach(route => {
      sitemap.push({
        url: `${baseUrl}/${lang}${route.path}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            languages.map(l => [l, `${baseUrl}/${l}${route.path}`])
          ),
        },
      });
    });
  });

  // Add root redirect
  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        languages.map(l => [l, `${baseUrl}/${l}`])
      ),
    },
  });

  return sitemap;
}