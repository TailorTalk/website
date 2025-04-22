import { baseMetadata } from './baseMetadata';

export const homeMetadata = {
  ...baseMetadata,
  openGraph: {
    ...baseMetadata.openGraph,
    images: [
      {
        url: '/logoPng.png',
        width: 800,
        height: 600,
        alt: 'TailorTalk - AI Sales & Support Agent',
      }
    ],
    title: 'TailorTalk - AI Sales & Support Agent',
    description: 'Automate and personalize your customer communications with AI'
  },
  twitter: {
    ...baseMetadata.twitter,
    title: 'TailorTalk - AI Sales & Support Agent',
    description: 'Automate and personalize your customer communications with AI',
    images: ['/logoPng.png']
  }
};