import { baseMetadata } from './baseMetadata';

export const guideMetadata = {
  ...baseMetadata,
  title: {
    template: '%s | TailorTalk Documentation',
    default: 'Documentation - TailorTalk'
  },
  description: "Learn how to use TailorTalk's AI-powered customer communication platform with our comprehensive guides covering WhatsApp automation, campaign management, and more.",
  keywords: [
    ...baseMetadata.keywords,
    'documentation',
    'user guide',
    'TailorTalk platform',
    'WhatsApp integration',
    'campaign setup',
    'AI communication tools',
    'customer engagement strategies',
    'WhatsApp automation guide',
    'AI-driven customer support',
    'customer communication best practices',
    'WhatsApp business tools',
    'AI sales strategies',
    'customer support automation guide',
    'TailorTalk features',
    'TailorTalk guide',
    'AI chatbot setup',
    'TailorTalk tutorials',
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    type: 'article',
    siteName: 'TailorTalk Documentation'
  }
};