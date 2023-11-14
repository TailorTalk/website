import FeatureList from "./FeatureList";

function PlanCard({ plan, showMonthly }) {
  const handleSubscribe = () => {
    window.location.href = "mailto:team@tailortalk.in";
  };
  return (
    <div className="w-full px-4 mb-4 sm:w-1/3 lg:w-1/5">
      <div className="relative h-[400px] p-4 bg-gray-50 border-[1px] border-gray-300 rounded-lg shadow-md flex flex-col justify-between hover:border-blue-300 hover:shadow-xl">
        <div>
          <h3 className="mb-4 text-2xl font-semibold text-blue-500">
            {plan.name}
          </h3>

          <FeatureList plan={plan} />
        </div>
        <div>
          <p className="mb-2 text-sm font-bold text-gray-500">
            <span className="text-2xl text-gray-700">${plan.price}</span> /{" "}
            {showMonthly ? "month" : "year"}
          </p>
          <button
            className="self-center w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
