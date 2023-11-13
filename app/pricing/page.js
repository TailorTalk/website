import Footer from "@/components/footer";
import Plans from "@/components/plans";
import { BsArrowRight } from "react-icons/bs";

export const metadata = {
  title: "Pricing | Tailor Talk",
  description:
    "Tailor Talks is your go-to platform for seamless and intelligent conversations. Explore a new era of communication with Tailor Talks.",
};

function Page() {
  return (
    <div>
      <h2 className="mt-8 mb-10 text-4xl font-extrabold text-center text-gray-700">
        Discover Your Ideal Plan
      </h2>
      <Plans />

      <p className="mt-12 text-lg text-center text-gray-700">
        Have questions or need assistance? Contact us or chat with our chatbot{" "}
        <span>
          <BsArrowRight className="inline" />
        </span>
      </p>

      <Footer />
    </div>
  );
}

export default Page;
