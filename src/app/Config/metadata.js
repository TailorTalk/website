export const metadata = {
  title: "Tailor Talk - AI-Powered Customer Communication Platform",
  description: "Tailor Talk helps businesses automate and personalize customer communications across WhatsApp and other channels with AI-powered conversations and campaign management.",
  metadataBase: new URL('https://tailortalk.ai'),
  keywords: ['AI customer service', 'WhatsApp automation', 'customer communication platform', 'AI chatbot', 'campaign management', 'business automation'],
  openGraph: {
    title: 'Tailor Talk - AI Sales & Support Agent',
    description: 'Automate and personalize your customer communications with AI',
    type: 'website',
    images: [
      {
        url: '/logoPng.png',
        width: 800,
        height: 600,
        alt: 'Tailor Talk Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tailor Talk - AI Sales & Support Agent',
    description: 'Automate and personalize your customer communications with AI',
    images: ['/logoPng.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
  }
}