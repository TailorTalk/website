import { getMarkdownMetadata } from '../../utils/markdown';
import { guideMetadata } from './guideMetadata';

export async function generateGuideMetadata({ type, id, content }) {
  const markdownMeta = getMarkdownMetadata(content);
  
  // Construct clean title from ID if not provided
  const cleanTitle = markdownMeta.title || id?.replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Generate an SEO-optimized description
  let description = markdownMeta.description;
  if (!description && content) {
    // Remove markdown syntax and extract meaningful content
    const cleanContent = content
      .replace(/[#*`]/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\n+/g, ' ')
      .trim();

    // Find first paragraph or meaningful content
    const firstParagraph = cleanContent.split(/\n\n/)[0];
    
    // Create description with keywords from title and type
    description = `${cleanTitle}: ${firstParagraph}`
      .slice(0, 155) // Keep within recommended meta description length
      .trim();
    
    if (description.length === 155) description += '...';
  }

  // Get category name from type
  const getCategory = (type) => {
    const categories = {
      'getting_started': 'Getting Started',
      'tools': 'Tools',
      'integrations': 'Integrations',
      'api': 'API Reference'
    };
    return categories[type] || type;
  };

  const pageTitle = `${cleanTitle} | ${getCategory(type)} - TailorTalk Documentation`;

  return {
    ...guideMetadata,
    title: pageTitle,
    description,
    openGraph: {
      ...guideMetadata.openGraph,
      title: pageTitle,
      description,
      images: markdownMeta.image ? [`/guide/images/${markdownMeta.image}`] : ['/logoPng.png'],
      article: {
        authors: markdownMeta.authors || ['TailorTalk Team'],
        tags: [...(markdownMeta.tags || []), 'documentation', getCategory(type), 'TailorTalk'],
        section: getCategory(type),
        publishedTime: markdownMeta.publishedTime,
        modifiedTime: markdownMeta.modifiedTime,
      }
    },
    twitter: {
      ...guideMetadata.twitter,
      title: pageTitle,
      description,
      images: markdownMeta.image ? [`/guide/images/${markdownMeta.image}`] : ['/logoPng.png'],
    },
    alternates: {
      canonical: `https://tailortalk.ai/guide/${type}/${id}`,
    },
  };
}