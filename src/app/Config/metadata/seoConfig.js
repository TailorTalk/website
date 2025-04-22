export function generateSitemap() {
  const baseUrl = 'https://tailortalk.ai';

  // Static pages
  const staticPages = [
    '',
    '/pricing',
    '/demo',
    '/about_founders',
    '/terms',
    '/privacy_policy',
    '/guide'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Guide pages will be generated dynamically from the navigation structure
  return [...staticPages];
}

export function generateRobots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/guide/', '/about_founders/', '/privacy_policy/', '/terms/'],
        disallow: ['/*.json$'],
      }
    ],
    sitemap: 'https://tailortalk.ai/sitemap.xml',
  };
}