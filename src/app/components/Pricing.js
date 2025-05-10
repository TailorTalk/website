import React, { useState } from 'react';

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
        "Core AI Agent Capabilities",
        "1 Channel Integration (Choose WhatsApp or Instagram)",
        "Knowledge Base Access (FAQs & Documents)",
        "Basic Workflow Automation (Lead Capture, Simple Q&A)",
        "Basic Lead Status Tagging",
        "Easy Natural Language Setup",
        "Standard Email & Chat Support",
        "Basic Analytics Dashboard"
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
        "Up to 3,000 Unique Monthly Users*",
        "Everything in Starter, plus:",
        "Up to 3 Channels (WhatsApp, Instagram, Website Chat)",
        "Advanced Workflow Automation",
        "Automated Contextual Follow-ups",
        "Rich Media Handling (Send & Receive Images, Docs, Video, Audio)",
        "Booking Management Automation",
        "In-Chat Payments (UPI & More)",
        "Shopify Integration",
        "Smart Data Organization (Custom Fields)",
        "Basic API Access",
        "Personalized WhatsApp Campaigns (Up to 3,000 contacts/month)",
        "Priority Email & Chat Support",
        "Enhanced Analytics",
        "Up to 3 Team Member Seats"
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
        "Custom Unique Monthly User Volume",
        "Everything in Growth, plus:",
        "Unlimited Channels",
        "Advanced & Custom API Integrations",
        "Complex, Multi-Step Workflow Design",
        "Volume Personalized Campaigns",
        "Advanced AI Capabilities (Potential Fine-tuning)",
        "Natural Language Insights Querying",
        "Dedicated Account Manager",
        "Premium SLA Support",
        "Advanced Security & Compliance Options",
        "Multi-Language Support at Scale",
        "Custom Onboarding & Training",
        "Unlimited Team Member Seats w/ Roles"
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
              Save 16%
            </span>
          </button>
        </div>
      </div>

      {/* All Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => {
          const isPopular = plan.popular;
          const isEnterprise = plan.title === "Enterprise";
          
          return (
            <div 
              key={index}
              className={`rounded-lg border transition-all duration-300 hover:shadow-lg bg-white ${
                isPopular 
                  ? 'border-indigo-200 shadow-md' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="p-6 flex flex-col h-full relative">
                {/* Status badge for popular plan */}
                {isPopular && (
                  <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/3">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full shadow-sm">
                      Popular
                    </span>
                  </div>
                )}
                
                {/* Header */}
                <div className="mb-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-indigo-600 mb-1">
                    {plan.forText}
                  </p>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {plan.title}
                  </h2>
                  <p className="mt-2 text-xs text-gray-500 min-h-12">
                    {plan.description}
                  </p>
                </div>
                
                {/* Divider */}
                <div className="w-full h-px bg-gray-100 my-4"></div>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    {isEnterprise ? (
                      <span className="text-2xl font-bold text-gray-900">
                        {plan.price[billingPeriod]}
                        <span className="text-sm font-normal text-gray-500">
                          {plan.period[billingPeriod]}
                        </span>
                      </span>
                    ) : (
                      <>
                        <span className="text-3xl font-bold text-gray-900">
                          ${plan.price[billingPeriod]}
                        </span>
                        <span className="text-sm ml-1 font-normal text-gray-500">
                          {plan.period[billingPeriod]}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Features */}
                <div className="mb-6 flex-grow">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-900 mb-3">
                    Features
                  </h3>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => {
                      const isHighlight = feature.includes("Everything in") || 
                                        feature.includes("Custom") || 
                                        feature.includes("Unlimited") ||
                                        feature.includes("Advanced") ||
                                        feature.includes("Dedicated") ||
                                        feature.includes("Premium") ||
                                        feature.includes("Natural Language");
                      
                      return (
                        <li key={idx} className="flex items-start">
                          <div className="mr-2 rounded-full p-0.5 mt-0.5 bg-indigo-50">
                            <svg 
                              className="w-3 h-3 text-indigo-600" 
                              fill="currentColor" 
                              viewBox="0 0 20 20"
                            >
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className={`text-xs ${isHighlight ? 'font-medium text-gray-800' : 'text-gray-600'}`}>
                            {feature}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                {/* CTA */}
                <div className="mt-auto">
                  <button 
                    className={`w-full py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isPopular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
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