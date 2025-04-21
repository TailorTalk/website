import { getMarkdownMetadata } from './markdown';

export async function generateGuideMetadata({ type, id, content }) {
  // Extract metadata from markdown content
  const markdownMeta = getMarkdownMetadata(content);
  
  // Construct clean title from ID if not provided
  const cleanTitle = markdownMeta.title || id?.replace(/_/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Generate description from content if not provided
  let description = markdownMeta.description;
  if (!description && content) {
    // Remove markdown syntax and get first 160 characters
    description = content
      .replace(/[#*`]/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/\n+/g, ' ')
      .trim()
      .slice(0, 160);
    if (description.length === 160) description += '...';
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

  return {
    title: `${cleanTitle} - TailorTalk Documentation`,
    description,
    openGraph: {
      title: `${cleanTitle} - TailorTalk Documentation`,
      description,
      type: 'article',
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
      card: 'summary_large_image',
      title: `${cleanTitle} - TailorTalk Documentation`,
      description,
      images: markdownMeta.image ? [`/guide/images/${markdownMeta.image}`] : ['/logoPng.png'],
    },
    alternates: {
      canonical: `https://tailortalk.ai/guide/${type}/${id}`,
    },
  };
}