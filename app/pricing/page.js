import Plans from "@/components/plans";
import { BsArrowRight } from "react-icons/bs";

function Page() {
  return (
    <div className="p-4">
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
    </div>
  );
}

export default Page;
