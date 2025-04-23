'use client';

import React from 'react';
import Markdown from 'markdown-to-jsx';

const CustomImage = ({ alt, src, width, ...props }) => {
  const getImagePath = (src) => {
    if (src.startsWith('http')) return src;
    if (src.includes('../images/')) {
      return `/guide/images/${src.replace('../images/', '')}`;
    }
    return src.startsWith('/guide') ? src : `/guide${src}`;
  };

  // Generate descriptive alt text if none provided
  const getAltText = (src, providedAlt) => {
    if (providedAlt) return providedAlt;
    // Extract filename without extension and convert to title case
    const fileName = src.split('/').pop().replace(/\.[^/.]+$/, '');
    return fileName.split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const getWidthClass = (width) => {
    if (!width) return 'w-full';
    const percentage = parseInt(width);
    switch (percentage) {
      case 100: return 'w-full';
      case 90: return 'w-11/12';
      case 80: return 'w-4/5';
      case 75: return 'w-3/4';
      case 60: return 'w-3/5';
      case 50: return 'w-1/2';
      case 40: return 'w-2/5';
      case 25: return 'w-1/4';
      default: return 'w-full';
    }
  };

  const imagePath = getImagePath(src);
  const widthClass = getWidthClass(width?.replace('%', ''));
  const altText = getAltText(src, alt);
  
  return (
    <div className="relative my-4">
      <div className={`${widthClass}`}>
        <img
          src={imagePath}
          alt={altText}
          className="w-full h-auto object-contain rounded-lg border-[1px]"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const CustomHeading = ({ children, level }) => {
  const HeadingTag = `h${level}`;
  const id = children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-') || '';
  
  const className = {
    1: 'text-[2em] font-medium mt-2 mb-6 text-gray-900 border-b border-gray-200 pb-3 scroll-mt-24',
    2: 'text-[1.5em] font-medium mt-8 mb-4 text-gray-900 border-b border-gray-200 pb-2 scroll-mt-24',
    3: 'text-[1.25em] font-medium mt-6 mb-3 text-gray-900 scroll-mt-24',
    4: 'text-[1.1em] font-medium mt-5 mb-2 text-gray-900 scroll-mt-24'
  }[level];

  return (
    <HeadingTag id={id} className={className}>
      {children}
    </HeadingTag>
  );
};

export default function MarkdownRenderer({ children, pageTitle }) {

  return (
    <div className="w-full prose-lg xl:prose-xl max-w-none">
      <Markdown options={{
        overrides: {
          img: CustomImage,
          h1: {
            component: (props) => <CustomHeading level={1} {...props} />
          },
          h2: {
            component: (props) => <CustomHeading level={2} {...props} />
          },
          h3: {
            component: (props) => <CustomHeading level={3} {...props} />
          },
          h4: {
            component: (props) => <CustomHeading level={4} {...props} />
          },
          p: {
            component: 'p',
            props: {
              className: 'mb-4 leading-7 text-gray-700 !font-[340]',
            },
          },
          ul: {
            component: 'ul',
            props: {
              className: 'list-disc pl-6 mb-4 space-y-2',
            },
          },
          ol: {
            component: 'ol',
            props: {
              className: 'list-decimal pl-6 mb-4 space-y-2',
            },
          },
          li: {
            component: 'li',
            props: {
              className: 'text-gray-700 leading-7 !font-[340]',
            },
          },
          a: {
            component: 'a',
            props: {
              className: 'text-blue-600 hover:underline',
            },
          },
          blockquote: {
            component: 'blockquote',
            props: {
              className: 'border-l-4 border-gray-200 pl-4 italic my-4 text-gray-600',
            },
          },
          strong: {
            component: 'strong',
            props: {
              className: 'font-semibold text-gray-900',
            },
          },
          code: {
            component: 'code',
            props: {
              className: 'bg-gray-100 rounded px-1.5 py-0.5 text-sm font-mono text-gray-800',
            },
          },
          pre: {
            component: 'pre',
            props: {
              className: 'bg-gray-100 rounded-lg p-4 mb-4 overflow-x-auto font-mono text-sm leading-6 text-gray-800',
            },
          },
          table: {
            component: 'table',
            props: {
              className: 'min-w-full border border-gray-200 my-4',
            },
          },
          th: {
            component: 'th',
            props: {
              className: 'border border-gray-200 px-4 py-2 bg-gray-50 text-left text-sm font-semibold text-gray-900',
            },
          },
          td: {
            component: 'td',
            props: {
              className: 'border border-gray-200 px-4 py-2 text-sm text-gray-700',
            },
          },
          hr: {
            component: 'hr',
            props: {
              className: 'my-6 border-t border-gray-200',
            },
          },
        },
      }}>
        {children}
      </Markdown>
    </div>
  );
}