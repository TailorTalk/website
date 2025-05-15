import React, { useState } from 'react';
import Button from './ui/button';

export default function PricingModule() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  const pricingHeaders = {
    title: "Find the Perfect Plan for Your Business Growth",
    subtitle: "Choose the right plan based on the number of unique customers you engage with each month via your AI Agent. Simple, transparent pricing designed to scale with you."
  };
  
  const plans = [
    {
      forText: "For small businesses & startups",
      title: "Starter",
      description: "Perfect for small businesses & startups getting started with essential chat automation on their primary channel.",
      price: {
        monthly: "59",
        annual: "49"
      },
      period: {
        monthly: "/month",
        annual: "/month"
      },
      features: [
        "Up to 1,000 Unique Monthly Users*",
        "All channel Integration",
        "Access to All Tools & Features (excluding API tool access)"
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "outline"
    },
    {
      forText: "For growing businesses",
      title: "Growth",
      description: "Unlock enhanced capabilities with multi-channel integration, advanced workflows, and premium features.",
      price: {
        monthly: "119",
        annual: "99"
      },
      period: {
        monthly: "/month",
        annual: "/month"
      },
      features: [
        "Up to 2,000 Unique Monthly Users*",
        "All channel Integration",
        "Access to All Tools & Features, including API Tool Access",
        "Initial Agent Setup & Tutorials"
      ],
      buttonText: "Start Free Trial",
      popular: true,
      buttonStyle: "premium"
    },
    {
      forText: "For established businesses",
      title: "Enterprise",
      description: "For established businesses with high volume, complex workflows, deep integration needs, and requirements for dedicated support.",
      price: {
        monthly: "Custom",
        annual: "Custom"
      },
      period: {
        monthly: " pricing",
        annual: " pricing"
      },
      features: [
        "Unlimited Monthly Users",
        "All channel Integration",
        "Access to All Tools & Features, including API Tool Access",
        "Advanced & Custom Integrations",
        "Agent Setup & 24*7 support"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "outline"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      {/* Pricing Headers */}
      <div className="text-center mb-12">
        <div className="inline-block mb-3">
          <span className="bg-gray-100 text-gray-800 text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full">
            Pricing
          </span>
        </div>
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">{pricingHeaders.title}</h1>
        <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">{pricingHeaders.subtitle}</p>
      </div>
      
      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-0.5 rounded-full bg-gray-100 shadow-inner">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-6 py-2 text-xs font-medium tracking-wide rounded-full transition-all ${
              billingPeriod === 'monthly' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod('annual')}
            className={`px-6 py-2 text-xs font-medium tracking-wide rounded-full transition-all flex items-center ${
              billingPeriod === 'annual' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Annual 
            <span className="ml-1.5 bg-green-50 text-green-700 text-xxs px-1.5 py-0.5 rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* All Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => {
          const isPopular = plan.popular;
          const isEnterprise = plan.title === "Enterprise";
          const isStarter = plan.title === "Starter"
          
          return (
            <div 
              key={index}
              style={{
                boxShadow: isPopular
                  ? '0 6px 10px 0 rgba(99,102,241,0.4), inset 0 1px 0 0 white, inset 0 -1px 0 0 #E2E8F0'
                  : 'inset 0 1px 0 0 white, inset 0 -1px 0 0 #E2E8F0, 0 4px 8px 0 rgba(0,0,0,0.08)'
              }}
              className={`rounded-xl relative overflow-hidden bg-zinc-50 hover:shadow-lg transition-all ${
                isPopular 
                  ? 'shadow-lg ring-[1px] ring-indigo-200/50'
                  : ' shadow-md'
              }`}
            >
              {isPopular && (
                <span className="inline-block absolute right-3 top-7 mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700 shadow-sm">
                  Popular
                </span>
              )}
              {/* Card Header */}
              <div className="px-6 pt-6 pb-4">
                <h2 className="text-2xl font-medium text-gray-900 mb-1">
                  {plan.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className="mt-4 mb-6">
                  {isEnterprise ? (
                    <div className="flex items-baseline">
                      <span className="text-2xl font-semibold text-gray-900">
                        {plan.price[billingPeriod]}
                      </span>
                      <span className="ml-1 text-gray-500">
                        {plan.period[billingPeriod]}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline">
                      <span className="text-3xl font-semibold text-gray-900">
                        ${plan.price[billingPeriod]}
                      </span>
                      <span className="ml-1 text-gray-500">
                        {plan.period[billingPeriod]}
                      </span>
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-1">plus local taxes</p>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="px-6">
                <Button
                color={isEnterprise ? 'black' : 'indigo'}
                  // className={`w-full py-2 rounded-lg text-center font-medium transition-all `}
                >
                  {plan.buttonText}
                </Button>
              </div>
              
              {/* Feature List - Simple bullet points */}
              <div className="px-6 py-6 mt-4">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-px bg-gray-200 flex-grow"></div>
                  <span className=" font-medium text-gray-700">Features</span>
                  <div className="h-px bg-gray-200 flex-grow"></div>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.slice(0, 6).map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="mr-3 text-gray-400">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                  {plan.features.length > 6 && (
                    <li className="flex items-center text-sm text-indigo-600 font-medium">
                      + {plan.features.length - 6} more features
                    </li>
                  )}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Disclaimer */}
      <div className="mt-10 text-center">
        <p className="text-xs text-gray-500">
          *Unique Monthly Users: Individual customers interacting with your AI agent across all channels.
        </p>
      </div>
    </div>
  );
}