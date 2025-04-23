import Head from 'next/head';
import { privacyPolicyMetadata } from '../Config/metadata/index';
import { generateBreadcrumbSchema } from '../Config/metadata/structuredData';
import Script from 'next/script';

export { privacyPolicyMetadata as metadata };

export default function PrivacyPolicy() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Privacy Policy', path: '/privacy_policy' }
    ]);

    return (
        <>
            <Script id="breadcrumb-schema" type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </Script>
            <Head>
                <title>Privacy Policy - TailorTalk</title>
            </Head>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-16">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl">
                    <h1 className="text-xl font-bold mb-6 text-center">Privacy Policy</h1>
                    <p><strong>Effective Date:</strong> 10/07/2024</p>
                    <p>TailorTalk is committed to protecting the privacy of our clients and their leads. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.</p>
                    
                    <h2 className="font-semibold mt-4">1. Information We Collect</h2>
                    <p><strong>From Clients:</strong></p>
                    <ul className="list-disc list-inside">
                        <li>Name</li>
                        <li>Company Name</li>
                    </ul>
                    <p><strong>From Leads:</strong></p>
                    <ul className="list-disc list-inside">
                        <li>Name</li>
                        <li>Contact Information</li>
                        <li>Conversations</li>
                    </ul>

                    <h2 className="font-semibold mt-4">2. How We Collect Information</h2>
                    <p>We collect information through automated systems, including integrations with services such as WhatsApp and text message integration services.</p>

                    <h2 className="font-semibold mt-4">3. Use of Information</h2>
                    <p>We use the collected information to:</p>
                    <ul className="list-disc list-inside">
                        <li>Automate conversations with leads</li>
                        <li>Manage leads</li>
                    </ul>

                    <h2 className="font-semibold mt-4">4. Data Sharing</h2>
                    <p>We do not share any collected data with third parties.</p>

                    <h2 className="font-semibold mt-4">5. Data Storage and Security</h2>
                    <p>We store data on secure servers and implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.</p>

                    <h2 className="font-semibold mt-4">6. Data Retention</h2>
                    <p>We retain the collected data until the client requests its removal.</p>

                    <h2 className="font-semibold mt-4">7. Client Data Requests</h2>
                    <p>Clients can request data deletion or access by sending an email to <a href="mailto:contact@tailortalk.ai" className="text-blue-500">contact@tailortalk.ai</a>.</p>

                    <h2 className="font-semibold mt-4">8. Use of Cookies and Tracking Technologies</h2>
                    <p>We use cookies and other tracking technologies to enhance user experience.</p>

                    <h2 className="font-semibold mt-4">9. International Data Transfers</h2>
                    <p>We do not transfer data internationally.</p>

                    <h2 className="font-semibold mt-4">10. Legal Basis for Processing</h2>
                    <p>Our legal basis for processing personal data is the contract we have with our clients.</p>

                    <h2 className="font-semibold mt-4">11. Changes to This Privacy Policy</h2>
                    <p>We may update this Privacy Policy from time to time. Clients will be informed of any changes via email.</p>

                    <h2 className="font-semibold mt-4">12. Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:contact@tailortalk.ai" className="text-blue-500">contact@tailortalk.ai</a>.</p>
                </div>
            </div>
        </>
    );
}
