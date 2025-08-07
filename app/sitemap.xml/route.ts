import { NextResponse } from 'next/server';

const baseUrl = 'https://2shigroup.com';
const languages = ['fa', 'en', 'tr', 'ar'];

const routes = [
  { path: '', changeFrequency: 'daily', priority: 1 },
  { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/news', changeFrequency: 'daily', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
];

function generateSitemapXml(): string {
  const urls: string[] = [];

  routes.forEach(route => {
    languages.forEach(lang => {
      const fullUrl = `${baseUrl}/${lang}${route.path}`;
      const lastmod = new Date().toISOString();

      const alternates = languages
        .map(l => `<xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}/${l}${route.path}" />`)
        .join('\n');

      urls.push(`
  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
    ${alternates}
  </url>`);
    });
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${urls.join('\n')}
</urlset>`;
}

export async function GET() {
  const xml = generateSitemapXml();
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
