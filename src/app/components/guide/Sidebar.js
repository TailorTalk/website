'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { guideNavigation } from '@/app/Config/guide/navigation';
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const currentType = segments[2]; // /guide/[type]/[id]
  const currentId = segments[3];

  const [openSections, setOpenSections] = useState({});
  const [initializedSections, setInitializedSections] = useState(false);

  useEffect(() => {
    if (!initializedSections && guideNavigation.length > 0) {
      const initialState = Object.fromEntries(
        guideNavigation.map((cat) => [cat.id, cat.id === currentType])
      );
      setOpenSections(initialState);
      setInitializedSections(true);
    }
  }, [initializedSections, currentType]);

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="p-6">
      <h5 className="text-lg font-medium text-gray-900 mb-6">Reference</h5>
      <nav className="space-y-4">
        {guideNavigation.map((category) => (
          <div key={category.id} className="rounded-lg bg-white shadow-sm border border-gray-100">
            <button
              onClick={() => toggleSection(category.id)}
              className="flex cursor-pointer w-full items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors rounded-lg"
            >
              <div className="flex items-center">
                <ChevronRight 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 
                  ${openSections[category.id] ? 'rotate-90' : ''}`}
                />
                <span className="text-sm font-normal text-gray-700 ml-2">
                  {category.title}
                </span>
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
                        ? "text-indigo-600 bg-indigo-50 font-normal"
                        : "text-gray-600 hover:bg-gray-50 font-[340]"
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
  );
}