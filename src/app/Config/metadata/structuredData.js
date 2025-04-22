export const generateMainSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Tailor Talk",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI-powered customer communication platform for automating and personalizing business communications across WhatsApp and other channels",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "150"
  },
  "creator": {
    "@type": "Organization",
    "name": "Tailor Talk",
    "url": "https://tailortalk.ai",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@tailortalk.ai",
      "contactType": "customer service"
    }
  }
});

export const generateGuideSchema = ({ header, description, type, id }) => ({
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": header,
  "description": description,
  "publisher": {
    "@type": "Organization",
    "name": "TailorTalk",
    "logo": {
      "@type": "ImageObject",
      "url": "https://tailortalk.ai/logoPng.png"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://tailortalk.ai/guide/${type}/${id}`
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Documentation",
        "item": "https://tailortalk.ai/guide"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": type.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        "item": `https://tailortalk.ai/guide/${type}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": header,
        "item": `https://tailortalk.ai/guide/${type}/${id}`
      }
    ]
  }
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TailorTalk",
  "url": "https://tailortalk.ai",
  "logo": {
    "@type": "ImageObject",
    "url": "https://tailortalk.ai/logoPng.png",
    "width": "800",
    "height": "600"
  },
  "description": "AI-powered customer communication platform for automating and personalizing business communications across WhatsApp and other channels",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9900130255",
      "contactType": "customer service",
      "email": "support@tailortalk.ai",
      "areaServed": "Worldwide"
    }
  ],
  "sameAs": [
    "https://x.com/tailortalk_ai",
    "https://www.linkedin.com/company/tailortalk-ai"
  ]
});

export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is TailorTalk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TailorTalk is an AI-powered customer communication platform that helps businesses automate and personalize their customer interactions across WhatsApp and other channels. It boosts conversion rates by 30% and reduces operational costs by 80%."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to set up TailorTalk?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TailorTalk can be set up in just 25 minutes, with no technical skills required. The platform is designed to be user-friendly and intuitive."
      }
    },
    {
      "@type": "Question",
      "name": "What channels does TailorTalk support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "TailorTalk primarily supports WhatsApp and Instagram for business communications, allowing you to automate customer interactions on these popular platforms."
      }
    }
  ]
});

export const generatePricingSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "TailorTalk AI Platform",
  "description": "AI-powered customer communication platform for automating sales and support on WhatsApp and Instagram",
  "brand": {
    "@type": "Brand",
    "name": "TailorTalk"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "0",
    "highPrice": "499",
    "offerCount": "3",
    "offers": [
      {
        "@type": "Offer",
        "name": "Growth",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Perfect for small businesses starting with AI automation"
      },
      {
        "@type": "Offer",
        "name": "Pro",
        "price": "199",
        "priceCurrency": "USD",
        "description": "Ideal for growing businesses with higher automation needs"
      },
      {
        "@type": "Offer",
        "name": "Enterprise",
        "price": "499",
        "priceCurrency": "USD",
        "description": "Custom solutions for large enterprises"
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150"
  }
});

export const generateBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://tailortalk.ai${item.path}`
  }))
});