import React, { useState } from 'react';

export default function PricingModule() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  
  // Added pricing headers
  const pricingHeaders = {
    title: "Pricing Plans",
    subtitle: "Choose the perfect plan for your needs",
    description: "All plans include unlimited updates and basic support. Start free, upgrade anytime."
  };
  
  const plans = [
    {
      forText: "For beginners",
      title: "Trial",
      description: "Perfect for individuals and small projects.",
      price: {
        monthly: "0",
        annual: "0"
      },
      period: {
        monthly: "15 days",
        annual: "15 days"
      },
      features: [
        "100 leads",
        "1 agent",
        "Stats board"
      ],
      buttonText: "Sign Up",
      buttonStyle: "outline",
      backgroundColor: "bg-white"
    },
    {
      forText: "For small teams",
      title: "Startup",
      description: "Unlock enhanced capabilities with our startup plan.",
      price: {
        monthly: "59",
        annual: "49"
      },
      period: {
        monthly: "/month",
        annual: "/month"
      },
      features: [
        "1,000 leads/month",
        "1 agent",
        "Stats board",
        "Leads Insight",
        "Customer support"
      ],
      buttonText: "Get Started",
      popular: true,
      buttonStyle: "premium",
      backgroundColor: "bg-slate-900",
      textColor: "text-white",
      checkColor: "text-indigo-400"
    },
    {
      forText: "For growing businesses",
      title: "Standard",
      description: "Access the full suite of features for growing teams.",
      price: {
        monthly: "119",
        annual: "99"
      },
      period: {
        monthly: "/month",
        annual: "/month"
      },
      features: [
        "3,000 leads/month",
        "2 agents",
        "Stats board",
        "Leads Insight", 
        "Customer support",
        "Smart Dashboard"
      ],
      buttonText: "Get Started",
      buttonStyle: "outline",
      backgroundColor: "bg-white"
    }
  ];

  // Add Enterprise plan as a separate card
  const enterprisePlan = {
    forText: "For large organizations",
    title: "Enterprise",
    description: "Custom solutions for large enterprises with specific needs.",
    price: {
      monthly: "499",
      annual: "419"
    },
    period: {
      monthly: "/month",
      annual: "/month"
    },
    features: [
      "Unlimited leads",
      "5 agents",
      "Stats board",
      "Leads Insight",
      "Customer support",
      "Smart Dashboard",
      "Custom solutions"
    ],
    buttonText: "Get Started",
    buttonStyle: "outline",
    backgroundColor: "bg-white"
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4">
      {/* Pricing Headers */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{pricingHeaders.title}</h1>
        <h2 className="text-2xl font-medium text-gray-700 mb-4">{pricingHeaders.subtitle}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">{pricingHeaders.description}</p>
      </div>
      
      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 rounded-full bg-gray-100">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-6 py-2 text-sm rounded-full font-medium transition-all ${
              billingPeriod === 'monthly' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod('annual')}
            className={`px-6 py-2 text-sm rounded-full font-medium transition-all flex items-center ${
              billingPeriod === 'annual' 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Annual 
            <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
              Save 16%
            </span>
          </button>
        </div>
      </div>

      {/* Main Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`rounded-3xl overflow-hidden ${plan.backgroundColor} transition-all duration-300 hover:shadow-xl ${
              plan.popular ? 'ring-2 ring-indigo-500 shadow-lg' : 'shadow-md'
            }`}
          >
            <div className="p-8 flex flex-col h-full">
              {/* Header */}
              <div className="mb-2 relative">
                <p className={`text-lg ${plan.textColor || 'text-gray-500'}`}>
                  {plan.forText}
                </p>
                <h2 className={`text-3xl font-bold mt-1 ${plan.textColor || 'text-gray-900'}`}>
                  {plan.title}
                </h2>
                
                {plan.popular && (
                  <div className="absolute top-6 right-6">
                    <span className="px-4 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
              </div>
              
              {/* Description */}
              <p className={`mt-4 ${plan.textColor || 'text-gray-600'}`}>
                {plan.description}
              </p>
              
              {/* Price */}
              <div className={`mt-8 mb-8 text-5xl font-medium ${plan.textColor || 'text-gray-900'}`}>
                <span className="flex items-baseline">
                  ${plan.price[billingPeriod]}
                  <span className={`text-xl ml-1 font-normal ${plan.textColor ? 'opacity-80' : 'text-gray-500'}`}>
                    {plan.period[billingPeriod]}
                  </span>
                </span>
              </div>
              
              {/* Features */}
              <div className="mb-8">
                <h3 className={`text-lg font-medium mb-4 ${plan.textColor || 'text-gray-900'}`}>
                  What's included
                </h3>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className={`mr-3 rounded-full p-1 ${plan.backgroundColor.includes('white') ? 'bg-gray-100' : 'bg-gray-800'}`}>
                        <svg 
                          className={`w-4 h-4 ${plan.checkColor || (plan.backgroundColor.includes('white') ? 'text-gray-900' : 'text-indigo-400')}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className={`${plan.textColor || 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA */}
              <div className="mt-auto">
                <button 
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    plan.buttonStyle === 'outline' 
                      ? `border border-gray-300 ${plan.backgroundColor.includes('white') ? 'text-gray-900 hover:bg-gray-50' : 'text-white hover:bg-gray-800'}` 
                      : plan.buttonStyle === 'premium'
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg'
                        : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {plan.buttonText}
                </button>
                <p className={`text-center mt-4 ${plan.textColor || 'text-gray-600'}`}>
                  Learn More
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enterprise Plan */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
        <div 
          className="rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white h-full flex flex-col"
        >
          <div className="p-8 md:grid md:grid-cols-3 md:gap-8">
            <div className="md:col-span-1">
              <p className="text-lg text-gray-500">{enterprisePlan.forText}</p>
              <h2 className="text-3xl font-bold mt-1 text-gray-900">{enterprisePlan.title}</h2>
              <p className="mt-4 text-gray-600">{enterprisePlan.description}</p>
            </div>

            <div className="mt-8 md:mt-0 md:col-span-1">
              <div className="text-5xl font-bold text-gray-900">
                <span className="flex items-baseline">
                  ${enterprisePlan.price[billingPeriod]}
                  <span className="text-xl ml-1 font-normal text-gray-500">
                    {enterprisePlan.period[billingPeriod]}
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-8 md:mt-0 md:col-span-1 flex flex-col">
              <button 
                className="w-full py-3 rounded-lg font-medium border border-gray-300 text-gray-900 hover:bg-gray-50 transition-all duration-300"
              >
                {enterprisePlan.buttonText}
              </button>
              <p className="text-center mt-4 text-gray-600">
                Learn More
              </p>
            </div>
          </div>

          <div className="px-8 pb-8">
            <h3 className="text-lg font-medium mb-4 text-gray-900">
              What's included
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {enterprisePlan.features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="mr-3 rounded-full p-1 bg-gray-100">
                    <svg 
                      className="w-4 h-4 text-gray-900" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Sales */}
      <div className="mt-16 bg-gray-50 rounded-3xl p-8 shadow-inner text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          Need a custom solution?
        </h3>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          We offer custom plans for large enterprises with specific requirements.
          Contact our sales team to learn more about Enterprise solutions.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}