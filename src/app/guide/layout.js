import DocHeader from "../components/guide/DocHeader";
import MobileSidebar from "../components/guide/MobileSidebar";
import Sidebar from "../components/guide/Sidebar";

export const metadata = {
  title: "TailorTalk Documentation - Guides",
  description: "Learn how to use TailorTalk's AI-powered customer communication platform with our comprehensive guides covering WhatsApp automation, campaign management, and more.",
  openGraph: {
    title: 'TailorTalk Documentation - Guides',
    description: 'Comprehensive guides and documentation for TailorTalk platform',
    type: 'article',
    images: ['/logoPng.png'],
  }
};

export default function GuideLayout({ children }) {
  return (
    <>
      <DocHeader />
      <div className="min-h-screen pt-16">
        <div className="flex">
          {/* Navigation Landmark */}
          <nav aria-label="Documentation navigation" className="hidden lg:block fixed top-[64px] left-0 w-72 h-[calc(100vh-64px)] border-r border-gray-200 overflow-y-auto bg-white">
            <Sidebar />
          </nav>

          {/* Mobile Navigation */}
          <nav aria-label="Mobile documentation navigation" className="lg:hidden">
            <MobileSidebar />
          </nav>

          {/* Main Content Area */}
          <main className="flex-1 lg:pl-72 w-full" role="main" aria-label="Documentation content">
            <div className="max-w-none prose prose-lg w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}