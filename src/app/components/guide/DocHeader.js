'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function DocHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'User Guide', href: '/guide', pattern: /^\/guide(?:\/[^/]+\/[^/]+)?$/ },
    { name: 'FAQs', href: '/faqs', pattern: /^\/faqs(?:\/[^/]+\/[^/]+)?$/ },
    // { name: 'FAQ', href: '/guide/tools_guide/what_is_tool', pattern: /^\/guide\/tools_guide\// },
  ];

  const isActivePath = (pattern) => {
    return pattern.test(pathname);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <nav className="" aria-label="Top">
        <div className="flex h-16 items-center justify-between border-b border-gray-200">
          <div className="flex items-center h-full pl-8">
            <Link href="/guide" className="flex items-center">
              <Image
                src="/logo.png"
                alt="TailorTalk Logo"
                width={120}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center h-full pr-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  inline-flex items-center h-full px-4
                  text-sm font-medium text-gray-600 hover:text-indigo-600 
                  transition-colors relative
                  ${isActivePath(item.pattern) ? 'text-indigo-600' : ''}
                `}
              >
                {item.name}
                {isActivePath(item.pattern) && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-600" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-b border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActivePath(item.pattern)
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}