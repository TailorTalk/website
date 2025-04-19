// app/components/guide/MobileSidebar.jsx
"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import ICONS from "@/app/lib/config/iconRegistry";

export default function MobileSidebar({ currentType, currentId }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-200 active:scale-95"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <ICONS.close className="w-5 h-5" />
        ) : (
          <ICONS.menu className="w-5 h-5" />
        )}
      </button>

      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile sidebar panel */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-40 w-80 bg-white transform shadow-xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out overflow-hidden`}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-150"
            aria-label="Close navigation menu"
          >
            <ICONS.close className="w-5 h-5" />
          </button>
        </div>
        <div className="h-full overflow-y-auto pb-32">
          <Sidebar currentType={currentType} currentId={currentId} />
        </div>
      </div>
    </>
  );
}