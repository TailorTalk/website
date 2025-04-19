// app/guide/page.jsx
import { redirect } from "next/navigation";
import { guideNavigation } from "@/app/lib/config/navigation";

export default function DefaultGuidePage() {
  const firstCategory = guideNavigation[0];
  const firstItem = firstCategory?.items[0];
  
  if (firstCategory && firstItem) {
    redirect(`/guide/${firstCategory.id}/${firstItem.id}`);
  }
  
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Loading guides...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
      </div>
    </div>
  );
}