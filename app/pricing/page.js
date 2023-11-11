import Plans from "@/components/plans";

function Page() {
  return (
    <div className="p-4 bg-gray-50">
      <h2 className="mt-8 mb-10 text-4xl font-extrabold text-center text-gray-700">
        Discover Your Ideal Plan
      </h2>
      <Plans />

      <p className="mt-4 text-sm text-center text-gray-700">
        Have questions or need assistance? Contact us or chat with our chatbot!
      </p>
    </div>
  );
}

export default Page;
