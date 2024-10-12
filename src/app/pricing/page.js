import React from 'react';
import pricingData from '../Config/pricing.json';
import { Check } from 'lucide-react';


const Pricing = () => {
  return (
    <div className="flex justify-center py-10 bg-gray-50">
      <div className="max-w-7xl w-full px-4">
        <h1 className="text-6xl font-semibold text-center mt-10 bg-clip-text text-black">
        Predictable Pricing
        </h1>
        <h2 className="text-6xl font-semibold  text-center  mb-12 text-transparent bg-clip-text bg-gradient-2">
          Scalable Plans
        </h2>

        {/*Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {pricingData.plans.map((plan, index) => (
            <div
              key={index}
              className="p-6 border flex flex-col border-gray-300 rounded-lg bg-white shadow-lg transform transition-transform hover:cursor-pointer hover:scale-105 hover:shadow-xl"
            >
              <div className='flex-1'>
                <h3 className="text-2xl mb-4 text-gray-800">{plan.name}</h3>

                <div className="flex items-center mb-4">
                <span className='text-2xl mt-3 text-gray-900'>{plan.currency}</span>
                <span className="text-5xl font-semibold text-gray-900">{plan.price}</span>
                </div>
                <p className="text-gray-500 mb-3">{plan.duration}</p>
                <div className='border-[0.06rem] mb-5'></div>

                <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                    <li key={i} className="text-black h-8 text-sm flex">
                    <span className="inline-block"><Check size={20}/></span>
                    <span className='pl-2'>{feature}</span> 
                    </li>
                ))}
                </ul>
              </div>
              

              <a href="https://calendly.com/shiva-tailortalk/30min" target="_blank"><button className="w-full py-2 px-4 globalBgColor text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
                {plan.cta}
              </button></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
