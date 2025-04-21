// app/guide/[type]/[id]/page.js

import MarkdownRenderer from "@/app/components/guide/MarkdownRenderer";
// import TableOfContents from "@/app/components/guide/TableOfContents";
import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import { guideNavigation, getGuideByTypeAndId, getNextGuide, getPreviousGuide } from "@/app/Config/guide/navigation";

export async function generateMetadata({ params }) {
  const { type, id } = params;
  const guide = getGuideByTypeAndId(type, id);
  
  if (!guide) {
    return {
      title: "Guide Not Found - TailorTalk Documentation",
      description: "The guide you are looking for does not exist.",
    };
  }
  
  return {
    title: `${guide.header} - TailorTalk Documentation`,
    description: `Learn about ${guide.header} in the TailorTalk documentation.`,
  };
}

export async function generateStaticParams() {
  const paths = [];
  
  guideNavigation.forEach(category => {
    category.items.forEach(item => {
      paths.push({
        type: category.id,
        id: item.id,
      });
    });
  });
  
  return paths;
}

export default async function GuidePage({ params }) {
  const { type, id } = params;
  const guide = getGuideByTypeAndId(type, id);
  const nextGuide = getNextGuide(type, id);
  const prevGuide = getPreviousGuide(type, id);

  if (!guide) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Guide not found</h1>
          <p className="text-gray-600">The guide you are looking for does not exist.</p>
          <Link href="/guide" className="text-indigo-600 hover:text-indigo-700 mt-4 inline-block">
            Return to Guides
          </Link>
        </div>
      </div>
    );
  }

  let content;
  try {
    const filePath = path.join(process.cwd(), 'public', guide.link);
    content = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.error('Error loading guide content:', error);
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Guide</h1>
        <p className="text-gray-600 mb-8">We encountered an error while loading the guide content. Please try again later.</p>
        <Link href="/guide" className="text-indigo-600 hover:text-indigo-700 font-medium">
          Return to Guides
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Main content */}
      <div className="">
        <div className="prose max-w-none [&>*]:scroll-mt-24">
          <MarkdownRenderer>{content}</MarkdownRenderer>
        </div>

        {/* Navigation */}
        <nav className="mt-16 pt-8 ">
          <div className="flex items-center justify-between">
            {prevGuide ? (
              <Link
                href={`/guide/${prevGuide.category}/${prevGuide.id}`}
                className="group flex items-center font-medium text-sm text-gray-600 hover:text-indigo-600"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {prevGuide.header}
              </Link>
            ) : <div />}

            {nextGuide ? (
              <Link
                href={`/guide/${nextGuide.category}/${nextGuide.id}`}
                className="group flex items-center font-medium text-sm text-gray-600 hover:text-indigo-600"
              >
                {nextGuide.header}
                <svg className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            ) : <div />}
          </div>
        </nav>
      </div>
      {/*company home page social media links */}
      <div>
        <div className="mt-8 mb-8 flex">
          <div className="flex w-[95%] lg:w-[68%]">
            <div className="flex flex-1 space-x-4">
            <Link
              href="https://x.com/tailortalk_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.72-2.165-10.148-5.144-.422.722-.666 1.561-.666 2.475 0 1.708.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.175-.067 2.179 1.396 4.768 2.209 7.548 2.209 9.057 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.634.961-.695 1.8-1.562 2.46-2.549z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/tailortalk-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.998 3a2.002 2.002 0 0 1 2.002 2.002v13.996a2.002 2.002 0 0 1-2.002 2.002h-15.996a2.002 2.002 0 0 1-2.002-2.002v-13.996a2.002 2.002 0 0 1 2.002-2.002h15.996zm-11.996 16v-8h-3v8h3zm-1.5-9.25c.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75-1.75.784-1.75 1.75.784 1.75 1.75 1.75zm13.5 9.25v-4.5c0-2.485-1.015-4.5-3.5-4.5-1.5 0-2.25.75-2.625 1.5v-1.25h-3v8h3v-4.5c0-1.25.25-2.5 1.875-2.5 1.625 0 1.625 1.5 1.625 2.625v4.375h3z" />
              </svg>
            </Link>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      {/* <div className="hidden xl:block fixed top-[90px] right-0 w-80 h-[calc(100vh-80px)] overflow-y-auto bg-white z-50">
        <TableOfContents content={content} />
      </div> */}
    </div>
  );
}