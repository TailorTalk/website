export const baseMetadata = {
  metadataBase: new URL('https://tailortalk.ai'),
  title: {
    template: '%s | TailorTalk',
    default: 'TailorTalk - AI-Powered Customer Communication Platform'
  },
  description: "TailorTalk helps businesses automate and personalize customer communications across WhatsApp and other channels with AI-powered conversations and campaign management.",
  keywords: [
    'AI customer service',
    'WhatsApp automation',
    'customer communication platform',
    'AI chatbot',
    'campaign management',
    'business automation'
  ],
  openGraph: {
    type: 'website',
    siteName: 'TailorTalk',
    images: [
      {
        url: '/logoPng.png',
        width: 800,
        height: 600,
        alt: 'TailorTalk Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@tailortalk_ai',
    images: ['/logoPng.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
};