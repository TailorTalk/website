import Head from 'next/head';
import { aboutFoundersMetadata } from '../Config/metadata/index';
import { generateBreadcrumbSchema } from '../Config/metadata/structuredData';
import Script from 'next/script';

export { aboutFoundersMetadata as metadata };

export default function AboutFounder() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'About Founders', path: '/about_founders' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </Script>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg  max-w-xl">
                    <h1 className="text-xl font-bold mb-6 text-center">About the Founders</h1>
                    <p>Our founders, alumni of IIT Mandi, bring 7+ years of experience
                         in software development and machine learning to our AI-based company. They have a solid
                          background in building large-scale systems and are well-versed in AI. Their combined
                           expertise helps us create a reliable and efficient presale assistant, designed to help
                            businesses scale.</p>
                </div>
            </div>
        </>
    );
}
