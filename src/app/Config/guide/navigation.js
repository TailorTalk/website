/**
 * @typedef {Object} GuideItem
 * @property {string} id - Unique identifier for the guide
 * @property {string} header - Display title of the guide
 * @property {string} link - Path to the markdown file
 */

/**
 * @typedef {Object} GuideCategory
 * @property {string} id - Category identifier
 * @property {string} title - Category display title
 * @property {GuideItem[]} items - Guide items in this category
 */

/** @type {GuideCategory[]} */
export const guideNavigation = [
  {
    id: "agent_guide",
    title: "Getting Started",
    items: [
      { 
        id: 'agent_settings', 
        header: 'Agent Settings', 
        link: '/guide/content/getting_started/agent_settings.md'
      },
      { 
        id: 'project_settings', 
        header: 'Project Settings', 
        link: '/guide/content/getting_started/project_settings.md'
      },
      { 
        id: 'campaign', 
        header: 'Campaign', 
        link: '/guide/content/getting_started/campaign.md'
      },
      { 
        id: 'dashboard', 
        header: 'Dashboard', 
        link: '/guide/content/getting_started/dashboard.md'
      },
      { 
        id: 'prompt', 
        header: 'Prompt', 
        link: '/guide/content/getting_started/prompt.md'
      },
    ]
  },
  {
    id: "tools_guide",
    title: "Tools",
    items: [
      { 
        id: 'what_is_tool', 
        header: 'What is a Tool?', 
        link: '/guide/content/tools/what_is_tool.md'
      },
      { 
        id: 'calendar_tool', 
        header: 'Calendar Tool', 
        link: '/guide/content/tools/calendar_tool.md'
      },
      { 
        id: 'media_tool', 
        header: 'Media Tool', 
        link: '/guide/content/tools/media_tool.md'
      },
      { 
        id: 'qr_payment_tool', 
        header: 'QR Payment Tool', 
        link: '/guide/content/tools/qr_payment_tool.md'
      },
      { 
        id: 'knowledge_tool', 
        header: 'Knowledge Tool', 
        link: '/guide/content/tools/knowledge_tool.md'
      },
    ]
  },
  {
    id: "integration_guide",
    title: "Integrations",
    items: [
      { 
        id: 'whatsapp_integration', 
        header: 'WhatsApp', 
        link: '/guide/content/integrations/whatsapp_integration.md'
      },
      { 
        id: 'instagram_integration', 
        header: 'Instagram', 
        link: '/guide/content/integrations/insta_integration.md'
      },
    ]
  },
  {
    id: "api_guide",
    title: "API Reference",
    items: [
      { 
        id: 'campaign_api', 
        header: 'Send Template', 
        link: '/guide/content/api/campaign_api.md'
      },
    ]
  }
];

/**
 * Get all guides as a flat array with category information
 * @returns {Array<GuideItem & {category: string, categoryTitle: string}>}
 */
export const getAllGuides = () => {
  return guideNavigation.flatMap(category => 
    category.items.map(item => ({
      ...item,
      category: category.id,
      categoryTitle: category.title
    }))
  );
};

/**
 * Get a specific guide by its category type and ID
 * @param {string} type - Category ID
 * @param {string} id - Guide ID
 * @returns {(GuideItem|null)} The guide item or null if not found
 */
export const getGuideByTypeAndId = (type, id) => {
  const category = guideNavigation.find(cat => cat.id === type);
  if (!category) return null;
  
  return category.items.find(item => item.id === id) || null;
};

/**
 * Get the next guide in the sequence
 * @param {string} type - Current guide's category ID
 * @param {string} id - Current guide's ID
 * @returns {(GuideItem & {category: string, categoryTitle: string}|null)}
 */
export const getNextGuide = (type, id) => {
  const allGuides = getAllGuides();
  const currentIndex = allGuides.findIndex(guide => guide.category === type && guide.id === id);
  
  if (currentIndex === -1 || currentIndex === allGuides.length - 1) return null;
  return allGuides[currentIndex + 1];
};

/**
 * Get the previous guide in the sequence
 * @param {string} type - Current guide's category ID
 * @param {string} id - Current guide's ID
 * @returns {(GuideItem & {category: string, categoryTitle: string}|null)}
 */
export const getPreviousGuide = (type, id) => {
  const allGuides = getAllGuides();
  const currentIndex = allGuides.findIndex(guide => guide.category === type && guide.id === id);
  
  if (currentIndex <= 0) return null;
  return allGuides[currentIndex - 1];
};