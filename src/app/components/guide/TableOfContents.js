// app/components/guide/TableOfContents.jsx
"use client";

import { useEffect, useState } from "react";

export default function TableOfContents({ content }) {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!content) return;

    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const matches = [...content.matchAll(headingRegex)];
    
    const extractedHeadings = matches.map(match => {
      const level = match[1].length;
      const text = match[2].trim();
      const slug = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      
      return { level, text, slug };
    });
    
    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    headings.forEach(({ slug }) => {
      const element = document.getElementById(slug);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="hidden xl:block sticky top-16 w-64 pl-8 pr-4 py-6">
      <div className="border-l border-gray-200 pl-4">
        <h3 className="text-sm text-gray-900 mb-4">On this page</h3>
        <nav className="space-y-1">
          {headings.map((heading, index) => (
            <a
              key={index}
              href={`#${heading.slug}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.slug)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className={`block text-sm py-1.5 rounded transition-colors duration-400 ${
                heading.level === 1 
                  ? "font-normal text-gray-800 hover:text-black" 
                  : heading.level === 2 
                    ? `pl-2 ${activeId === heading.slug ? "text-black bg-gray-100 font-semibold" : "text-gray-700 hover:text-black"}` 
                    : `pl-4 ${activeId === heading.slug ? "text-black bg-gray-100 font-semibold" : "text-gray-600 hover:text-black"}`
              }`}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}