// app/guide/[type]/[id]/page.js
import { guideNavigation, getGuideByTypeAndId, getNextGuide, getPreviousGuide } from "@/app/lib/config/navigation";
import MarkdownRenderer from "@/app/components/guide/MarkdownRenderer";
import MobileSidebar from "@/app/components/guide/MobileSidebar";
import Sidebar from "@/app/components/guide/Sidebar";
import TableOfContents from "@/app/components/guide/TableOfContents";
import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';

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
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Guide not found</h1>
          <p className="text-gray-600">The guide you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  let content;
  try {
    // Remove the leading slash and '/guide' prefix from the link path
    const relativePath = guide.link.replace(/^\/guide\//, '');
    const filePath = path.join(process.cwd(), 'public', 'guide', relativePath);
    
    try {
      content = await fs.readFile(filePath, 'utf8');
    } catch (error) {
      console.error('Error reading markdown file:', error);
      throw new Error(`Failed to read markdown file: ${error.message}`);
    }
  } catch (error) {
    console.error('Error loading guide content:', error);
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="hidden lg:block">
          <Sidebar currentType={type} currentId={id} />
        </div>

        <div className="lg:hidden">
          <MobileSidebar currentType={type} currentId={id} />
        </div>

        <main className="lg:pl-72 xl:pr-64">
          <div className="max-w-4xl mx-auto px-4 py-8 lg:px-8 bg-white min-h-screen shadow-sm">
            <div className="text-center py-16">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Guide</h1>
              <p className="text-gray-600 mb-8">We encountered an error while loading the guide content. Please try again later.</p>
              <Link href="/guide" className="text-indigo-600 hover:text-indigo-700 font-medium">
                Return to Guides
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      <main className="">
        <div className="py-8 bg-white min-h-screen">
            <div className="text-sm text-gray-600">
              {guideNavigation.find(cat => cat.id === type)?.title}
            </div>

          <MarkdownRenderer>{content}</MarkdownRenderer>

          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex items-center justify-between">
              {prevGuide ? (
                <Link
                  href={`/guide/${prevGuide.category}/${prevGuide.id}`}
                  className="group flex items-center text-sm text-gray-600 hover:text-indigo-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400 group-hover:text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="group-hover:underline">{prevGuide.header}</span>
                </Link>
              ) : <div />}

              {nextGuide ? (
                <Link
                  href={`/guide/${nextGuide.category}/${nextGuide.id}`}
                  className="group flex items-center text-sm text-gray-600 hover:text-indigo-600"
                >
                  <span className="group-hover:underline">{nextGuide.header}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-gray-400 group-hover:text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </main>

      <div className="hidden xl:block fixed top-0 right-0 bottom-0 w-64 bg-white border-l border-gray-100">
        <TableOfContents content={content} />
      </div>
    </div>
  );
}