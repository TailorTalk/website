function PlansToggleBtn({ showMonthly, togglePricing }) {
  return (
    <div className="flex items-center justify-center p-2 my-4 mb-9 ">
      <div className="p-2 bg-gray-100 rounded-lg">
        <button
          className={`mx-0 px-4 py-2 ${
            showMonthly
              ? "bg-tailorBlue-500 text-white"
              : "bg-gray-100 text-gray-900"
          }  rounded-md`}
          onClick={togglePricing}
        >
          Monthly
        </button>
        <button
          className={`mx-0 px-4 py-2 ${
            showMonthly
              ? "bg-gray-100 text-gray-900"
              : "bg-tailorBlue-500 text-white"
          } rounded-md`}
          onClick={togglePricing}
        >
          Yearly
        </button>
      </div>
    </div>
  );
}

export default PlansToggleBtn;
