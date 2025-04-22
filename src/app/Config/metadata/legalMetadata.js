import { baseMetadata } from './baseMetadata';

export const privacyPolicyMetadata = {
  ...baseMetadata,
  title: 'Privacy Policy | TailorTalk',
  description: 'Learn about how TailorTalk handles and protects your data. Our privacy policy outlines our data collection, usage, and protection practices.',
  keywords: [
    ...baseMetadata.keywords,
    'privacy policy',
    'data protection',
    'user privacy',
    'data security',
    'GDPR compliance'
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Privacy Policy - TailorTalk',
    type: 'website',
    description: 'Learn about how TailorTalk handles and protects your data'
  }
};

export const termsMetadata = {
  ...baseMetadata,
  title: 'Terms of Service | TailorTalk',
  description: 'Read TailorTalk\'s terms of service. Understanding our terms helps ensure a smooth and compliant experience with our AI-powered communication platform.',
  keywords: [
    ...baseMetadata.keywords,
    'terms of service',
    'terms and conditions',
    'user agreement',
    'legal terms',
    'service terms'
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: 'Terms of Service - TailorTalk',
    type: 'website',
    description: 'Read TailorTalk\'s terms of service'
  }
};