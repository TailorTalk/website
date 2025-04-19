// app/lib/config/navigation.js

export const guideNavigation = [
  {
    id: "agent_guide",
    title: "Getting started",
    items: [
      { id: 'Agent', header: 'Agent Settings', link: '/guide/content/getting_started/agent_settings.md' },
      { id: 'project_settings', header: 'Project Settings', link: '/guide/content/getting_started/project_settings.md' },
      { id: 'Campaign', header: 'Campaign', link: '/guide/content/getting_started/campaign.md' },
      { id: 'Dashboard', header: 'Dashboard', link: '/guide/content/getting_started/dashboard.md' },
      { id: 'Prompt', header: 'Prompt', link: '/guide/content/getting_started/prompt.md' },
    ]
  },
  {
    id: "tools_guide",
    title: "Tools",
    items: [
      { id: 'tools', header: 'What is Tool', link: '/guide/content/tools/what_is_tool.md' },
      { id: 'GOOGLE_CALENDAR', header: 'Calendar tool', link: '/guide/content/tools/calendar_tool.md' },
      { id: 'MEDIA', header: 'Media tool', link: '/guide/content/tools/media_tool.md' },
      { id: 'QR_PAYMENT', header: 'QR Payment tool', link: '/guide/content/tools/qr_payment_tool.md' },
      { id: 'QUERY', header: 'Knowledge tool', link: '/guide/content/tools/knowledge_tool.md' },
    ]
  },
  {
    id: "integration_guide",
    title: "Integration",
    items: [
      { id: 'Whatsapp', header: 'Whatsapp', link: '/guide/content/integrations/whatsapp_integration.md' },
      { id: 'Instagram', header: 'Instagram', link: '/guide/content/integrations/insta_integration.md' },
    ]
  },
  {
    id: "api_guide",
    title: "API",
    items: [
      { id: 'API', header: 'Send Template', link: '/guide/content/api/campaign_api.md' },
    ]
  }
];

export const getAllGuides = () => {
  return guideNavigation.flatMap(category => 
    category.items.map(item => ({
      ...item,
      category: category.id,
      categoryTitle: category.title
    }))
  );
};

export const getGuideByTypeAndId = (type, id) => {
  const category = guideNavigation.find(cat => cat.id === type);
  if (!category) return null;
  
  return category.items.find(item => item.id === id) || null;
};

export const getNextGuide = (type, id) => {
  const allGuides = getAllGuides();
  const currentIndex = allGuides.findIndex(guide => guide.category === type && guide.id === id);
  
  if (currentIndex === -1 || currentIndex === allGuides.length - 1) return null;
  return allGuides[currentIndex + 1];
};

export const getPreviousGuide = (type, id) => {
  const allGuides = getAllGuides();
  const currentIndex = allGuides.findIndex(guide => guide.category === type && guide.id === id);
  
  if (currentIndex <= 0) return null;
  return allGuides[currentIndex - 1];
};