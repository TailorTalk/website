'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { guideNavigation } from '@/app/Config/guide/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const currentType = segments[2]; // /guide/[type]/[id]
  const currentId = segments[3];

  return (
    <div className="p-6">
      <h5 className="text-lg font-medium text-gray-900 mb-6">Reference</h5>
      <nav className="space-y-4">
        {guideNavigation.map((category) => (
          <div key={category.id} className="rounded-lg bg-white shadow-sm border border-gray-100">
            <div className="px-4 py-3">
              <span className="text-sm font-medium text-gray-700">
                {category.title}
              </span>
            </div>
            <div className="pb-2">
              {category.items.map((item) => (
                <Link
                  key={item.id}
                  href={`/guide/${category.id}/${item.id}`}
                  className={`block w-full text-left py-2 px-11 text-sm transition-colors ${
                    currentType === category.id && currentId === item.id
                      ? "text-indigo-600 bg-indigo-50 font-normal"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {item.header}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}