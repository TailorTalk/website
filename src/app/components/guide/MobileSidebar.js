'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Menu } from 'lucide-react';
import { guideNavigation } from '@/app/Config/guide/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const segments = pathname.split('/');
  const currentType = segments[2];
  const currentId = segments[3];

  return (
    <>
      <button
        type="button"
        className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-5 w-5" />
      </button>

      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center">
                    <button
                      type="button"
                      className="absolute right-4 top-4 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="pt-8">
                    <h5 className="text-lg font-semibold text-gray-900 mb-6">Reference</h5>
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
                                onClick={() => setSidebarOpen(false)}
                                className={`block w-full text-left py-2 px-11 text-sm transition-colors ${
                                  currentType === category.id && currentId === item.id
                                    ? "text-indigo-600 bg-indigo-50 font-medium"
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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}