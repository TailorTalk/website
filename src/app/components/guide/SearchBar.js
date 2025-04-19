// app/components/guide/Sidebar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { guideNavigation } from "@/app/lib/config/navigation";

export default function Sidebar({ currentType, currentId }) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState({});
  
  useEffect(() => {
    // Initialize open sections based on current type
    if (currentType) {
      const initialState = {};
      guideNavigation.forEach(category => {
        initialState[category.id] = category.id === currentType;
      });
      setOpenSections(initialState);
    }
  }, [currentType]);
  
  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };
  
  return (
    <div className="w-64 flex-shrink-0 h-full overflow-y-auto bg-white border-r border-gray-200">
      <div className="p-6">
        <nav className="space-y-4">
          {guideNavigation.map((category) => (
            <div key={category.id} className="mb-4">
              <button
                onClick={() => toggleSection(category.id)}
                className="flex w-full items-center justify-between py-2 text-gray-800 hover:text-black"
              >
                <span className="text-sm font-medium">{category.title}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform ${
                    openSections[category.id] ? "transform rotate-90" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              
              {openSections[category.id] && (
                <div className="mt-1 ml-2 space-y-1">
                  {category.items.map((item) => {
                    const isActive = currentType === category.id && currentId === item.id;
                    return (
                      <Link
                        key={item.id}
                        href={`/guide/${category.id}/${item.id}`}
                        className={`block py-2 px-3 text-sm rounded-md ${
                          isActive
                            ? "bg-gray-100 text-black font-medium"
                            : "text-gray-600 hover:text-black hover:bg-gray-50"
                        }`}
                      >
                        {item.header}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}