import { guideNavigation } from './Config/guide/navigation';

export default async function sitemap() {
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

  // Guide pages
  const guidePages = [];
  guideNavigation.forEach(category => {
    category.items.forEach(item => {
      guidePages.push({
        url: `${baseUrl}/guide/${category.id}/${item.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return [...staticPages, ...guidePages];
}