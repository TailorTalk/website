//Importing required component
import Footer from "@/components/Footer";
import Plans from "@/components/Plans";

// Importing Right Arrow Icon from "React-Icon" libraray
import { BsArrowRight } from "react-icons/bs";

export const metadata = {
  title: "Pricing | Tailor Talk",
  description:
    "Tailor Talks is your go-to platform for seamless and intelligent conversations. Explore a new era of communication with Tailor Talks.",
};

function Pricing() {
  return (
    <div>
      <h2 className="px-4 mt-8 mb-10 text-4xl font-semibold text-center text-gray-700 md:font-extrabold">
        Discover Your Ideal Plan
      </h2>
      <Plans />

      <p className="px-5 mt-12 text-lg text-center text-gray-700">
        Have questions or need assistance? Contact us or chat with our chatbot{" "}
        <span>
          <BsArrowRight className="inline" />
        </span>
      </p>

      <Footer />
    </div>
  );
}

export default Pricing;
