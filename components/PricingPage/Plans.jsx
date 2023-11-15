"use client";

import { useState } from "react";
import PlansToggleBtn from "./PlansToggleBtn";
import PlanCard from "./PlanCard";

import { monthlyPlans, yearlyPlans } from "@/data/pricingPlans";

const ChatbotPricing = () => {
  const [showMonthly, setShowMonthly] = useState(true);

  const togglePricing = () => {
    setShowMonthly((prevShowMonthly) => !prevShowMonthly);
  };

  const plansToShow = showMonthly ? monthlyPlans : yearlyPlans;

  return (
    <div>
      <PlansToggleBtn togglePricing={togglePricing} showMonthly={showMonthly} />
      <div className="flex flex-wrap items-center justify-center">
        {plansToShow.map((plan, index) => (
          <PlanCard key={index} plan={plan} showMonthly={showMonthly} />
        ))}
      </div>
    </div>
  );
};

export default ChatbotPricing;
