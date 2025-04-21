export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/guide/', '/about_founders/', '/privacy_policy/', '/terms/'],
        disallow: ['/*.json$'],
      }
    ],
    sitemap: 'https://tailortalk.ai/sitemap.xml',
  };
}