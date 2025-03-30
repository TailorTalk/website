import React from 'react';
import termsData from '../Config/termsData';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Terms of Service</h1>

        {/* About the Company */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">About {termsData.companyName}</h2>
          {termsData.aboutCompany.map((paragraph, index) => (
            <p key={`about-${index}`} className="mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Acceptance of Terms */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
          {termsData.acceptanceTerms.map((paragraph, index) => (
            <p key={`accept-${index}`} className="mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Service Description */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Service Description</h2>
          <p className="mb-2">
            {termsData.serviceDescription.intro}
          </p>
          <div className="ml-4 space-y-4">
            {termsData.serviceDescription.categories.map((category, catIndex) => (
              <div key={`category-${catIndex}`}>
                <h3 className="font-medium text-lg">{category.title}</h3>
                <ul className="list-disc list-inside ml-4">
                  {category.features.map((feature, featIndex) => (
                    <li key={`feature-${catIndex}-${featIndex}`}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4">
            {termsData.serviceDescription.disclaimer}
          </p>
        </section>

        {/* User Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">User Responsibilities</h2>
          {termsData.userResponsibilities.map((paragraph, index) => (
            <p key={`responsibility-${index}`} className="mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Modifications & Termination */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Modifications & Termination</h2>
          {termsData.modificationsTermination.map((paragraph, index) => (
            <p key={`mod-term-${index}`} className="mb-2">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Contact Information */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at{' '}
            <a href={`mailto:${termsData.companyEmail}`} className="text-blue-500 underline">
              {termsData.companyEmail}
            </a>.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-center border-t pt-4">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} {termsData.companyName}. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfService;