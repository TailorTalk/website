import { lastUpdate, privacyPolicies } from "@/data/privacyPolicies";

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
      <p className="text-sm italic text-gray-500">Last updated: {lastUpdate}</p>

      <div className="mt-3 text-sm">
        Thank you for choosing "We Tailor your Talks". We are committed to
        protecting your privacy and the data you provide to us. This Privacy
        Policy outlines our practices concerning the collection, use, and
        sharing of your information.
      </div>
      <div className="my-6">
        {privacyPolicies.map((section, index) => (
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
