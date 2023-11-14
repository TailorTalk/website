import IntroSection from "@/components/HomePage/IntroSection";
import FAQSection from "@/components/HomePage/FaqSection";
import FeaturesSection from "@/components/HomePage/FeatureSection";
import Footer from "@/components/ui/Footer";
import IntegrateSection from "@/components/HomePage/IntegrateSection";
import OutroSection from "@/components/HomePage/OutroSection";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <IntroSection />
      <FeaturesSection />
      <Testimonials />
      <IntegrateSection />
      <FAQSection />

      <OutroSection />
      <Footer />
    </>
  );
}
