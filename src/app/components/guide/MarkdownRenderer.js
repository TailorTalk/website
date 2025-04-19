"use client";

import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";

export default function MarkdownRenderer({ children }) {
  const [content, setContent] = useState("");
  
  useEffect(() => {
    setContent(children || "");
  }, [children]);

  const CustomImage = ({ alt, src, width, ...props }) => {
    const getImagePath = (src) => {
      if (src.startsWith("http")) return src;
      // Handle relative paths and point to the correct images directory
      if (src.includes("../images/")) {
        return `/guide/images/${src.split("../images/")[1]}`;
      }
      if (!src.startsWith("/")) {
        return `/guide/images/${src}`;
      }
      return src;
    };
  
    const getWidthClass = (width) => {
      if (!width) return "w-full";
      const percentage = parseInt(width);
      switch (percentage) {
        case 100: return "w-full";
        case 90: return "w-11/12";
        case 80: return "w-4/5";
        case 75: return "w-3/4";
        case 60: return "w-3/5";
        case 50: return "w-1/2";
        case 40: return "w-2/5";
        case 25: return "w-1/4";
        default: return "w-full";
      }
    };
  
    const imagePath = getImagePath(src);
    const widthClass = getWidthClass(width?.replace("%", ""));
    
    return (
      <div className="my-8 flex justify-center">
        <div className={`${widthClass} max-w-4xl`}>
          <img
            src={imagePath}
            alt={alt || ""}
            className="w-full h-auto object-contain rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            loading="lazy"
          />
        </div>
      </div>
    );
  };

  if (!content) {
    return (
      <div className="flex items-center justify-center h-full w-full">
        <div className="w-8 h-8 border-t-2 border-indigo-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className=" max-w-none w-full bg-white">
      <Markdown options={{
        overrides: {
          h1: {
            component: "h1",
            props: {
              className: "text-4xl font-bold mt-8 mb-6 text-gray-900 pb-4 border-b border-gray-200",
            },
          },
          h2: {
            component: "h2",
            props: {
              className: "text-2xl font-semibold mt-12 mb-6 text-gray-900 pb-2 border-b border-gray-100",
            },
          },
          h3: {
            component: "h3",
            props: {
              className: "text-xl font-semibold mt-8 mb-4 text-gray-900",
            },
          },
          h4: {
            component: "h4",
            props: {
              className: "text-lg font-semibold mt-6 mb-3 text-gray-900",
            },
          },
          p: {
            component: "p",
            props: {
              className: "mb-6 leading-7 text-gray-700",
            },
          },
          ul: {
            component: "ul",
            props: {
              className: "list-disc pl-6 mb-6 space-y-2 text-gray-700",
            },
          },
          ol: {
            component: "ol",
            props: {
              className: "list-decimal pl-6 mb-6 space-y-2 text-gray-700",
            },
          },
          li: {
            component: "li",
            props: {
              className: "text-gray-700 leading-7 pl-2",
            },
          },
          a: {
            component: "a",
            props: {
              className: "text-indigo-600 hover:text-indigo-700 decoration-2 hover:underline transition-colors duration-150",
            },
          },
          blockquote: {
            component: "blockquote",
            props: {
              className: "border-l-4 border-indigo-200 pl-6 my-6 text-gray-600 italic bg-gray-50 py-4 rounded-r-lg",
            },
          },
          code: {
            component: "code",
            props: {
              className: "bg-gray-100 rounded-md px-2 py-1 text-sm font-mono text-gray-800 border border-gray-200",
            },
          },
          pre: {
            component: "pre",
            props: {
              className: "bg-gray-50 rounded-xl p-4 mb-6 overflow-x-auto font-mono text-sm leading-6 text-gray-800 border border-gray-200",
            },
          },
          table: {
            component: "div",
            props: {
              className: "overflow-x-auto my-6",
            },
            children: (children) => (
              <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                {children}
              </table>
            ),
          },
          th: {
            component: "th",
            props: {
              className: "border-b border-gray-200 px-4 py-3 bg-gray-50 text-left text-sm font-semibold text-gray-900",
            },
          },
          td: {
            component: "td",
            props: {
              className: "border-b border-gray-200 px-4 py-3 text-sm text-gray-700",
            },
          },
          hr: {
            component: "hr",
            props: {
              className: "my-8 border-t border-gray-200",
            },
          },
          img: {
            component: CustomImage
          },
        },
      }}>
        {content}
      </Markdown>
    </div>
  );
}