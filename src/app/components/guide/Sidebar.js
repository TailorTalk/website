"use client";

import { useState } from "react";
import { guideNavigation } from "@/app/lib/config/navigation";
import Link from "next/link";
import ICONS from "@/app/lib/config/iconRegistry";

export default function Sidebar({ currentType, currentId }) {
  const [openSections, setOpenSections] = useState(() => {
    return guideNavigation.reduce((acc, category) => {
      acc[category.id] = category.id === currentType;
      return acc;
    }, {});
  });

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="fixed inset-y-0 left-0 w-64 flex-shrink-0 border-r bg-white border-gray-200 h-screen overflow-y-auto pt-16">
      <div className="p-6">
        <h5 className="text-lg font-semibold font-mono text-gray-900 mb-6">Reference</h5>
        
        <nav className="space-y-4">
          {guideNavigation.map((category) => (
            <div key={category.id} className="rounded-lg bg-white shadow-sm border border-gray-100">
              <button
                onClick={() => toggleSection(category.id)}
                className="flex cursor-pointer w-full items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors rounded-lg"
              >
                <div className="flex items-center">
                  <ICONS.right 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 
                    ${openSections[category.id] ? 'rotate-90' : ''}`} 
                  />
                  <span className="text-sm font-mono text-gray-700 ml-2">{category.title}</span>
                </div>
              </button>

              {openSections[category.id] && (
                <div className="pb-2">
                  {category.items.map((item) => (
                    <Link
                      key={item.id}
                      href={`/guide/${category.id}/${item.id}`}
                      className={`block w-full text-left py-2 px-11 text-sm transition-colors
                        ${currentType === category.id && currentId === item.id
                          ? "text-indigo-600 bg-indigo-50 font-medium" 
                          : "text-gray-600 hover:bg-gray-50"
                        }`}
                    >
                      {item.header}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}