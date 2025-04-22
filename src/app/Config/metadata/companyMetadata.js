import { baseMetadata } from './baseMetadata';

export const pricingMetadata = {
  ...baseMetadata,
  title: 'Pricing Plans | TailorTalk - AI-Powered Customer Communication',
  description: 'Explore TailorTalk\'s flexible pricing plans. Choose the right plan for your business needs and scale your customer communications with AI automation.',
  keywords: [
    ...baseMetadata.keywords,
    'pricing plans',
    'subscription plans',
    'business plans',
    'WhatsApp automation pricing',
    'AI chatbot cost',
    'customer service pricing'
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'TailorTalk Pricing - Flexible Plans for Every Business',
    description: 'Find the perfect plan to automate and enhance your customer communications with TailorTalk\'s AI-powered platform.',
    images: [
      {
        url: '/logoPng.png',
        width: 800,
        height: 600,
        alt: 'TailorTalk Pricing Plans',
      }
    ],
  }
};

export const aboutFoundersMetadata = {
  ...baseMetadata,
  title: 'Our Team | TailorTalk - Meet the Founders',
  description: 'Meet the founders behind TailorTalk. Learn about our mission to revolutionize customer communications with AI-powered automation.',
  keywords: [
    ...baseMetadata.keywords,
    'founders',
    'team',
    'leadership',
    'startup team',
    'company mission',
    'about us'
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Meet the TailorTalk Team',
    description: 'Get to know the innovative team behind TailorTalk\'s AI-powered customer communication platform.',
    type: 'profile',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'TailorTalk Team',
      }
    ]
  }
};