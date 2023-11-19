import { lastUpdate } from "@/data/privacyPolicies";
import PolicySection from "@/components/PrivacyPage/privacyPolicies"

export const metadata = {
  title: "Privacy Policies | Tailor Talk",
  description:
    "Tailor Talks is your go-to platform for seamless and intelligent conversations. Explore a new era of communication with Tailor Talks.",
};

function PrivacyPolicy() {

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-medium text-gray-700">
        Privacy Policy for "Tailor-Talk"
      </h1>
      <p className="text-sm italic text-gray-500">Last updated: {lastUpdate}</p>

      <div className="mt-3 text-sm">
        Thank you for choosing "We Tailor your Talks". We are committed to
        protecting your privacy and the data you provide to us. This Privacy
        Policy outlines our practices concerning the collection, use, and
        sharing of your information.
      </div>
      <PolicySection/>
    </div>
  );
}

export default PrivacyPolicy;
