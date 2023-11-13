import IntroSection from "@/components/IntroSection";
import FAQSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import IntegrateSection from "@/components/IntegrateSection";
import OutroSection from "@/components/OutroSection";
import Testimonials from "@/components/Testimonials";

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
