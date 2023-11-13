export const metadata = {
  title: "Privacy Policies | Tailor Talk",
  description:
    "Tailor Talks is your go-to platform for seamless and intelligent conversations. Explore a new era of communication with Tailor Talks.",
};

const lastUpdate = "21-10-23"; // Format - dd/mm/yyyy - Latest date when privacy policies were edited
const policySections = [
  {
    title: "Data Collection",
    content:
      "When you provide data to us for the purpose of creating a tailored chatbot, we only collect the information necessary to fulfill this service. This data may include, but is not limited to, business-specific terminologies, product details, frequently asked questions, and other related datasets.",
  },
  {
    title: "Data Usage",
    content:
      "The primary use of the data you provide is to create a customized chatbot tailored to your business needs. We process this data solely for the purpose of training and refining the chatbot to answer questions based on the data provided. We do not use this data for any other purposes, such as marketing, advertising, or any other form of data monetization.",
  },
  {
    title: "Data Retention",
    content:
      "Your data is retained only for the duration required to complete the chatbot customization process. Once the process is complete, and the chatbot is delivered, the data is archived and securely stored. We maintain this data to provide support, updates, and refinements to your chatbot as necessary.",
  },
  {
    title: "Data Sharing",
    content:
      '"We Tailor your Talks" does not share, sell, lease, or rent your data to third parties. The data you provide is strictly used to fulfill the service you\'ve requested. Any third-party service providers we may use will only process your data on our behalf and in accordance with our instructions.',
  },
  {
    title: "Data Security",
    content:
      "We employ industry-standard security measures to ensure the protection of your data against unauthorized access, alteration, disclosure, or destruction. These measures include firewalls, encryption, secure server facilities, and regular audits.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, delete, or restrict processing of your data. Should you wish to exercise any of these rights, please contact us using the contact details provided in our website footer.",
  },
  {
    title: "Updates to This Policy",
    content:
      "This Privacy Policy may be updated periodically to reflect changes in our practices. We will notify you of any significant changes and update the 'Last updated' date at the top of this Privacy Policy.",
  },
  {
    title: "Contacting Us",
    content:
      "If you have any questions, comments, or concerns about this Privacy Policy or our data practices, please contact us:\n\nContact Number: +916387123784\nAddress: Bangalore, India",
  },
];

function PrivacyPolicy() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-medium text-gray-700">
        Privacy Policy for "Tailor-Talk"
      </h1>
      <p className="text-sm italic text-gray-500">Last updated: {lastUpdate}</p>

      <div className="mt-3 text-sm">
        Thank you for choosing "We Tailor your Talks". We are committed to
        protecting your privacy and the data you provide to us. This Privacy
        Policy outlines our practices concerning the collection, use, and
        sharing of your information.
      </div>
      <div className="my-6">
        {policySections.map((section, index) => (
          <details key={index} className="mb-4">
            <summary className="p-3 text-xl font-semibold text-gray-900 transition bg-gray-300 rounded-lg cursor-pointer hover:bg-gray-400">
              <strong>{section.title}</strong>
            </summary>
            <p className="p-3 pl-4 text-sm bg-gray-100 rounded-lg">
              {section.content}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}

export default PrivacyPolicy;
