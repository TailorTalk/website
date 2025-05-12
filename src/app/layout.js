import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientLayout from "./components/ClientLayout";
import { baseMetadata } from "./Config/metadata/index";
import { generateMainSchema } from "./Config/metadata/structuredData";

const inter = Inter({ subsets: ["latin"] });

export { baseMetadata as metadata };

export default function RootLayout({ children }) {
  const GTM_ID = "GTM-NC76S95W";
  const mainSchema = generateMainSchema();

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
          {JSON.stringify(mainSchema)}
        </Script>
        <style>
        {`@import url("https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap");`}
        </style>

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
        
        <main id="main-content" className="flex-grow">
          <ClientLayout>
            {children}
          </ClientLayout>
        </main>
      </body>
    </html>
  );
}
