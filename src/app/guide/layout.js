
import MobileSidebar from "../components/guide/MobileSidebar";
import Sidebar from "../components/guide/Sidebar";
// import TableOfContents from "../components/guide/TableOfContents";
export const metadata = {
  title: "TailorTalk Documentation - Guides",
  description: "Learn how to use TailorTalk with our comprehensive guides",
};

export default function GuideLayout({ children, params }) {
  // Extract currentType and currentId from params for Sidebar highlighting
  const currentType = params?.type || null;
  const currentId = params?.id || null;

  // Optionally, extract content for TableOfContents if needed
  // For now, pass null or children as content

  return (
    <div className="flex min-h-screen bg-white pt-16">
      <div className="hidden lg:block w-64 border-r border-gray-200 h-screen overflow-y-auto pt-16">
      <Sidebar currentType={currentType} currentId={currentId} />
      </div>
      <div className="lg:hidden fixed inset-y-0 left-0 w-64 border-r border-gray-200 h-screen overflow-y-auto pt-16">
        <MobileSidebar currentType={currentType} currentId={currentId} />
      </div>
      <main className="flex justify-center">
        <div className="w-full ml-52">
          {children}
        </div>
      </main>
    </div>
  );
}