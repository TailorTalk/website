import React, { useState } from 'react';
import Button from './ui/button';
import { plans } from '../Config/pricing';

export default function PricingModule() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      {/* Pricing Headers */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5">
          Simple <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">pricing</span>
        </h2>    
        <p className="text-[#61646b] text-[17px] max-w-2xl mx-auto">Choose the plan that fits your needs and boost your productivity with TailorTalk.</p>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {plans.map((plan, index) => {
          const isPopular = plan.popular;
          const isEnterprise = plan.title === "Enterprise";
          const isStarter = plan.title === "Starter"
          
          return (
            <div 
              key={index}
              style={{
                boxShadow: isPopular
                  ? '0 6px 10px 0 rgba(99,102,241,0.4), inset 0 2px 0 0 white, inset 0 -1px 0 0 #E2E8F0'
                  : 'inset 0 2px 0 0 white, inset 0 -1px 0 0 #E2E8F0, 0 4px 8px 0 rgba(0,0,0,0.08)'
              }}
              className={`flex flex-col h-full rounded-xl overflow-hidden bg-zinc-50 hover:shadow-lg transition-all ${
                isPopular 
                  ? 'shadow-lg ring-[1px] ring-indigo-200/50'
                  : ' shadow-md'
              }`}
            >
              {isPopular && (
                <span className="inline-block absolute md:right-[33%] md:top-[-0.5rem] right-[5%] top-[32.5%] mb-2 px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-700 shadow-sm">
                  Popular
                </span>
              )}
              {/* Card Header */}
              <div className="px-6 pt-2 pb-4 flex flex-col">
                <h2 className="text-2xl font-medium text-gray-900 mb-1 min-h-[32px]">
                  {plan.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4 min-h-[48px]">
                  {plan.description}
                </p>
                
                {/* Price */}
                <div className={`mt-4 ${isPopular ? 'mb-5' : 'mb-6'}`}>
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
                    <div className={`flex items-baseline ${isStarter ? 'mt-2' : ''}`}>
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
              <div className={`px-6`}>
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