// app/guide/[type]/[id]/page.js

import MarkdownRenderer from "@/app/components/guide/MarkdownRenderer";
import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import Script from 'next/script';
import { guideNavigation, getGuideByTypeAndId, getNextGuide, getPreviousGuide } from "@/app/Config/guide/navigation";
import { generateGuideMetadata } from "@/app/Config/metadata/generateGuideMetadata";
import { generateGuideSchema, generateBreadcrumbSchema } from "@/app/Config/metadata/structuredData";
import { LinkedIn, Twitter } from "@mui/icons-material";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { type, id } = params;
  const guide = getGuideByTypeAndId(type, id);
  
  if (!guide) {
    return {
      title: "Guide Not Found - TailorTalk Documentation",
      description: "The guide you are looking for does not exist.",
    };
  }

  let content;
  try {
    const filePath = path.join(process.cwd(), 'public', guide.link);
    content = await fs.readFile(filePath, 'utf8');
  } catch (error) {
    console.error('Error loading guide content:', error);
    content = '';
  }

  return generateGuideMetadata({ type, id, content });
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

    const nextGuide = getNextGuide(type, id);
    const prevGuide = getPreviousGuide(type, id);

    // Generate structured data
    const guideSchema = generateGuideSchema({
      header: guide.header,
      description: content.slice(0, 200).replace(/[#*`]/g, '').trim() + "...",
      type,
      id
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Documentation', path: '/guide' },
      { name: type.replace(/_/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), path: `/guide/${type}` },
      { name: guide.header, path: `/guide/${type}/${id}` }
    ]);

    return (
      <div className="relative">
        <Script id="guide-schema" type="application/ld+json">
          {JSON.stringify(guideSchema)}
        </Script>
        <Script id="breadcrumb-schema" type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </Script>

        <div className="prose max-w-none [&>*]:scroll-mt-24">
          <MarkdownRenderer pageTitle={guide.header}>{content}</MarkdownRenderer>
        </div>

        <nav className="mt-16 pt-8">
          <div className="flex items-center justify-between">
            {prevGuide ? (
              <Link
                href={`/guide/${prevGuide.category}/${prevGuide.id}`}
                className="group flex items-center font-medium text-sm text-gray-600 hover:text-indigo-600"
                rel="prev"
              >
                <svg className="mr-2 h-5 w-5 text-gray-400 group-hover:text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="truncate">{prevGuide.header}</span>
              </Link>
            ) : <div />}

            {nextGuide ? (
              <Link
                href={`/guide/${nextGuide.category}/${nextGuide.id}`}
                className="group flex items-center font-medium text-sm text-gray-600 hover:text-indigo-600"
                rel="next"
              >
                <span className="truncate">{nextGuide.header}</span>
                <svg className="ml-2 h-5 w-5 text-gray-400 group-hover:text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            ) : <div />}
          </div>
        </nav>
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
                  <Image src='/twitterIcon.svg' alt="X" width={20} height={20} className="w-6 h-6"/>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/tailortalk-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-600"
                >
                  <Image src='/linkedinIcon.svg' alt="LinkedIn" width={20} height={20} className="w-6 h-6"/>
                </Link>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>
      </div>
    );
            
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
}