// import React from "react";
// import Head from "next/head";

export const metadata = {
  title: "Privacy Policies | Tailor Talk",
  description:
    "Tailor Talks is your go-to platform for seamless and intelligent conversations. Explore a new era of communication with Tailor Talks.",
};

function PrivacyPolicy() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-medium text-gray-700">
        Privacy Policy for "Tailor-Talk"
      </h1>
      <p className="text-sm italic text-gray-500">Last updated: 21-10-23</p>

      <div className="mt-3 text-sm">
        Thank you for choosing "We Tailor your Talks". We are committed to
        protecting your privacy and the data you provide to us. This Privacy
        Policy outlines our practices concerning the collection, use, and
        sharing of your information.
      </div>
      <div className="my-6">
        <details className="mb-4">
          <summary className="p-3 text-xl font-semibold text-gray-900 transition bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400">
            <strong>1. Data Collection</strong>
          </summary>
          <p className="p-3 pl-4 text-sm bg-gray-100 rounded-lg">
            When you provide data to us for the purpose of creating a tailored
            chatbot, we only collect the information necessary to fulfill this
            service. This data may include, but is not limited to,
            business-specific terminologies, product details, frequently asked
            questions, and other related datasets.
          </p>
        </details>
        <details className="mb-4">
          <summary className="p-3 text-xl font-semibold text-gray-900 transition bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400">
            <strong>2. Data Usage</strong>
          </summary>
          <p className="p-3 pl-4 text-sm bg-gray-100 rounded-lg">
            The primary use of the data you provide is to create a customized
            chatbot tailored to your business needs. We process this data solely
            for the purpose of training and refining the chatbot to answer
            questions based on the data provided.
            <br />
            We do not use this data for any other purposes, such as marketing,
            advertising, or any other form of data monetization.
          </p>
        </details>
        <details className="mb-4">
          <summary className="p-3 text-xl font-semibold text-gray-900 transition bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400">
            <strong>3. Data Retention</strong>
          </summary>
          <p className="p-3 pl-4 text-sm bg-gray-100 rounded-lg">
            Your data is retained only for the duration required to complete the
            chatbot customization process. Once the process is complete, and the
            chatbot is delivered, the data is archived and securely stored. We
            maintain this data to provide support, updates, and refinements to
            your chatbot as necessary.
          </p>
        </details>

        <details className="mb-4">
          <summary className="p-3 text-xl font-semibold text-gray-900 transition bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400">
            <strong>4. Data Sharing</strong>
          </summary>
          <p className="p-3 pl-4 text-sm bg-gray-100 rounded-lg">
            "We Tailor your Talks" does not share, sell, lease, or rent your
            data to third parties. The data you provide is strictly used to
            fulfill the service you've requested. Any third-party service
            providers we may use will only process your data on our behalf and
            in accordance with our instructions.
          </p>
        </details>

        <details className="mb-4">
          <summary className="p-3 text-xl font-semibold text-gray-900 transition bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400">
            <strong>5. Data Security</strong>
          </summary>
          <p className="p-3 pl-4 text-sm bg-gray-100 rounded-lg">
            We employ industry-standard security measures to ensure the
            protection of your data against unauthorized access, alteration,
            disclosure, or destruction. These measures include firewalls,
            encryption, secure server facilities, and regular audits.
          </p>
        </details>

        <details className="mb-4">
          <summary className="p-3 text-xl font-semibold text-gray-900 transition bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400">
            <strong>6. Your Rights</strong>
          </summary>
          <p className="p-3 pl-4 text-sm bg-gray-100 rounded-lg">
            You have the right to access, correct, delete, or restrict
            processing of your data. Should you wish to exercise any of these
            rights, please contact us using the contact details provided in our
            website footer.
          </p>
        </details>

        <details className="mb-4">
          <summary className="p-3 text-xl font-semibold text-gray-900 transition bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400">
            <strong>7. Updates to This Policy</strong>
          </summary>
          <p className="p-3 pl-4 text-sm bg-gray-100 rounded-lg">
            This Privacy Policy may be updated periodically to reflect changes
            in our practices. We will notify you of any significant changes and
            update the "Last updated" date at the top of this Privacy Policy.
          </p>
        </details>

        <details className="mb-4">
          <summary className="p-3 text-xl font-semibold text-gray-900 transition bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400">
            <strong>8. Contacting Us</strong>
          </summary>
          <p className="p-3 pl-4 text-sm bg-gray-100 rounded-lg">
            If you have any questions, comments, or concerns about this Privacy
            Policy or our data practices, please contact us:
            <br />
            <br />
            <strong>Contact Number</strong>: +916387123784
            <br />
            <strong>Address</strong>: Bangalore, India
          </p>
        </details>
      </div>
      <div></div>
    </div>
  );
}

{
  /* <div className="my-6">
  <details className="mb-4">
    <summary className="text-xl font-semibold text-blue-500">
      <strong>1. Data Collection</strong>
    </summary>
    <p className="ml-4">
      When you provide data to us for the purpose of creating a tailored
      chatbot, we only collect the information necessary to fulfill this
      service. This data may include, but is not limited to, business-specific
      terminologies, product details, frequently asked questions, and other
      related datasets.
    </p>
  </details>

</div>; */
}
export default PrivacyPolicy;
