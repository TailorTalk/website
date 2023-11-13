import IntroSection from "@/components/IntroSection";
import FAQSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import IntegrateSection from "@/components/IntegrateSection";
import JoinFuture from "@/components/joinFuture";
import Testimonials from "@/components/testimonial";

export default function Home() {
  return (
    <>
      <IntroSection />
      <FeaturesSection />
      <Testimonials />
      <IntegrateSection />
      <FAQSection />

      <JoinFuture />
      <Footer />
    </>
  );
}
