"use client";

import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { privacyPolicies } from "@/data/privacyPolicies";

const PolicySection = () => {
    
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return(
        <div className="my-6">
        {privacyPolicies.map((section, index) => (
          <details key={index} className="mb-4 mx-80 border-b border-gray-200">
            <summary className="p-3 my-2 list-none text-md text-gray-950 cursor-pointer" onClick={() => toggleAccordion(index)}>
              <strong className="flex justify-between">
                {section.title}
                {openIndex === index ? (
                <IoIosArrowUp className="w-6 h-6" />
              ) : (
                <IoIosArrowDown className="w-6 h-6" />
              )}
              </strong>
              
            </summary>
            <p className="p-3 pl-4 text-sm rounded-lg">
              {section.content}
            </p>
          </details>
        ))}
      </div>
    )
}

export default PolicySection;