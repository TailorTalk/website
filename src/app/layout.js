import { Inter } from "next/font/google";
import "./globals.css";
// import Header from "./components/Header.js";
// import Footer from "./components/Footer.js";
import Script from "next/script";
import ClientLayout from "./components/ClientLayout";
import { metadata } from "./Config/metadata";

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({ children }) {
  const GTM_ID = "GTM-NC76S95W";

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://tailortalk.ai" />
        
        {/* Google Tag Manager Script */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        
        {/* JSON-LD for structured data */}
        <Script
          id="schema-structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {`
            {
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
            }
          `}
        </Script>
      </head>
      <body className={`${inter.className} montserrat-unique flex flex-col min-h-screen`}>
        {/* Skip to main content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black">
          Skip to main content
        </a>
        
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>

        {/* <Header /> */}
        
        <main id="main-content" className="flex-grow">
          <ClientLayout>
            {children}
          </ClientLayout>
        </main>
      </body>
    </html>
  );
}
