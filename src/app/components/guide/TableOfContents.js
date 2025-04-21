// // app/components/guide/TableOfContents.jsx
// "use client";

// import { AlignLeft } from 'lucide-react';
// import { useEffect, useState } from 'react';

// const getHeadings = (content) => {
//   const headingRegex = /^(#{1,6})\s+(.+)$/gm;
//   const headings = [];
//   let match;

//   while ((match = headingRegex.exec(content)) !== null) {
//     const level = match[1].length;
//     const text = match[2].trim();
//     const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
//     // Only include h2 and h3 headings for the table of contents
//     if (level <= 3) {
//       headings.push({ level, text, id });
//     }
//   }

//   return headings;
// };

// export default function TableOfContents({ content }) {
//   const [activeHeading, setActiveHeading] = useState('');
//   const headings = getHeadings(content);

//   useEffect(() => {
//     if (!headings.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         // Find the first heading that is intersecting
//         const visibleHeading = entries.find((entry) => entry.isIntersecting);
//         if (visibleHeading) {
//           setActiveHeading(visibleHeading.target.id);
//         }
//       },
//       {
//         rootMargin: '-80px 0px -80% 0px',
//         threshold: [0, 1],
//       }
//     );

//     const headingElements = document.querySelectorAll('h2, h3');
//     headingElements.forEach((element) => observer.observe(element));

//     return () => {
//       headingElements.forEach((element) => observer.unobserve(element));
//     };
//   }, [headings]);

//   const scrollToHeading = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const yOffset = -80; // Account for fixed header
//       const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//       setActiveHeading(id); // Update active heading immediately on click
//     }
//   };

//   if (headings.length === 0) {
//     return null;
//   }

//   return (
//     <nav aria-label="Table of contents" className="sticky top-[90px] pl-6">
//       <div className='flex gap-2'>
//         <AlignLeft size={14} strokeWidth={2.4} className=" text-gray-900 mt-[3px]" />
//       <h2 className="text-sm font-semibold mb-4 text-gray-900">On this page</h2>
//       </div>
      
//       <ul className="space-y-3 text-sm">
//         {headings.map((heading) => (
//           <li
//             key={heading.id}
//             className={`${
//               heading.level === 3 ? 'pl-4' : ''
//             }`}
//           >
//             <button
//               onClick={() => scrollToHeading(heading.id)}
//               className={`
//                 block w-full text-left py-1 transition-colors duration-200 ease-in-out
//                 ${activeHeading === heading.id 
//                   ? 'text-indigo-600 font-medium' 
//                   : 'text-gray-600 hover:text-indigo-600'
//                 }
//               `}
//             >
//               {heading.text}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }