import { generateSitemap } from './Config/metadata/seoConfig';
import { guideNavigation } from './Config/guide/navigation';

export default async function sitemap() {
  const staticPages = generateSitemap();
  
  // Generate guide pages dynamically
  const guidePages = [];
  guideNavigation.forEach(category => {
    category.items.forEach(item => {
      guidePages.push({
        url: `https://tailortalk.ai/guide/${category.id}/${item.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return [...staticPages, ...guidePages];
}