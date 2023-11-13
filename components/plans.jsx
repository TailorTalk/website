"use client";

import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

const ChatbotPricing = () => {
  const monthlyPlans = [
    {
      name: "Basic",
      price: 9.99,
      features: [
        { text: "Unlimited Chat Support", color: "gray" },
        { text: "Basic AI Integration", color: "gray" },
        { text: "24/7 Customer Service", color: "gray" },
      ],
      billingPeriod: "monthly",
    },
    {
      name: "Pro",
      price: 19.99,
      features: [
        { text: "Unlimited Chat Support", color: "gray" },
        { text: "24/7 Customer Service", color: "gray" },
        { text: "Advanced AI Integration", color: "green" },
        { text: "Customization Options", color: "green" },
        { text: "Priority Customer Service", color: "green" },
      ],
      billingPeriod: "monthly",
    },
    {
      name: "Premium",
      price: 29.99,
      features: [
        { text: "Unlimited Chat Support", color: "gray" },
        { text: "24/7 Customer Service", color: "gray" },
        { text: "Advanced AI Integration", color: "green" },
        { text: "Customization Options", color: "green" },
        { text: "Priority Customer Service", color: "green" },
        { text: "Analytics and Reporting", color: "green" },
      ],
      billingPeriod: "monthly",
    },
  ];

  const yearlyPlans = [
    {
      name: "Basic",
      price: 99.99,
      features: [
        { text: "Unlimited Chat Support", color: "gray" },
        { text: "Advanced AI Integration", color: "gray" },
        { text: "24/7 Customer Service", color: "gray" },
      ],
      billingPeriod: "yearly",
    },
    {
      name: "Pro",
      price: 199.99,
      features: [
        { text: "Unlimited Chat Support", color: "gray" },
        { text: "24/7 Customer Service", color: "gray" },
        { text: "Advanced AI Integration", color: "green" },
        { text: "Customization Options", color: "green" },
        { text: "Priority Customer Service", color: "green" },
      ],
      billingPeriod: "yearly",
    },
    {
      name: "Premium",
      price: 299.99,
      features: [
        { text: "Unlimited Chat Support", color: "gray" },
        { text: "24/7 Customer Service", color: "gray" },
        { text: "Advanced AI Integration", color: "green" },
        { text: "Customization Options", color: "green" },
        { text: "Priority Customer Service", color: "green" },
        { text: "Analytics and Reporting", color: "green" },
      ],
      billingPeriod: "yearly",
    },
  ];

  const [showMonthly, setShowMonthly] = useState(true);

  const togglePricing = () => {
    setShowMonthly((prevShowMonthly) => !prevShowMonthly);
  };

  const handleSubscribe = () => {
    window.location.href = "mailto:team@tailortalk.in";
  };

  const plansToShow = showMonthly ? monthlyPlans : yearlyPlans;

  return (
    <div>
      <div className="flex items-center justify-center p-2 my-4 mb-9 ">
        <div className="p-2 bg-gray-100 rounded-lg">
          <button
            className={`mx-0 px-4 py-2 ${
              showMonthly
                ? "bg-blue-500 text-white"
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
                : "bg-blue-500 text-white"
            } rounded-md`}
            onClick={togglePricing}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {plansToShow.map((plan, index) => (
          <div key={index} className="w-full px-4 mb-4 sm:w-1/3 lg:w-1/5">
            <div className="relative h-[400px] p-4 bg-gray-50 border-[1px] border-gray-300 rounded-lg shadow-md flex flex-col justify-between hover:border-blue-300 hover:shadow-xl">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-blue-500">
                  {plan.name}
                </h3>

                <ul className="text-gray-600">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start mb-2 text-sm"
                    >
                      <AiOutlineCheck
                        className="w-5 h-5 mr-2"
                        style={{ color: feature.color }}
                      />
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 text-sm font-bold text-gray-500">
                  <span className="text-2xl text-gray-700">${plan.price}</span>{" "}
                  / {showMonthly ? "month" : "year"}
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
        ))}
      </div>
    </div>
  );
};

export default ChatbotPricing;
