import DocHeader from "../components/guide/DocHeader";
import MobileSidebar from "../components/guide/MobileSidebar";
import Sidebar from "../components/guide/Sidebar";
import { guideMetadata } from "../Config/metadata/index";

export { guideMetadata as metadata };

export default function GuideLayout({ children }) {
  return (
    <>
      <DocHeader />
      <div className="min-h-screen pt-16">

          {/* Main Content Area */}
            <div className="max-w-none prose prose-lg w-full">
              {children}
            </div>
      </div>
    </>
  );
}