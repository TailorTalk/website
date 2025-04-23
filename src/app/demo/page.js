import React from "react";
import { demoMetadata } from '../Config/metadata/index';
import { generateBreadcrumbSchema } from '../Config/metadata/structuredData';
import Script from 'next/script';

export { demoMetadata as metadata };

export default function Demo() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Demo', path: '/demo' }
  ]);

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <div className="flex justify-center items-center w-full">
        <div className="w-full h-[40rem] lg:h-auto max-w-7xl py-10 aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/1OTRPt5h0eU"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
