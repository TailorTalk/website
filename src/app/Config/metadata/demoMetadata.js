import { baseMetadata } from './baseMetadata';

export const demoMetadata = {
  ...baseMetadata,
  title: 'Try TailorTalk Demo | AI Sales & Support Agent',
  description: 'Experience TailorTalk in action. Try our AI-powered sales and support agent demo to see how it can transform your customer communications.',
  keywords: [
    ...baseMetadata.keywords,
    'demo',
    'free trial',
    'product demo',
    'AI demo',
    'WhatsApp automation demo',
    'customer service demo'
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Try TailorTalk Demo - Experience AI Sales & Support',
    description: 'Get hands-on experience with our AI sales agent. See how it handles customer interactions, automates follow-ups, and more.',
    images: [
      {
        url: '/Leadx.png',
        width: 1200,
        height: 630,
        alt: 'TailorTalk Demo Interface',
      }
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'Try TailorTalk Demo - AI Sales & Support Agent',
    description: 'Experience our AI sales agent in action. Try the demo now!',
    images: ['/Leadx.png']
  }
};