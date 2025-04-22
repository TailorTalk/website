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
    'campaign setup'
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    type: 'article',
    siteName: 'TailorTalk Documentation'
  }
};