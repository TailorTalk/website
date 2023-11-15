//Importing required component
import Plans from "@/components/PricingPage/Plans";
import PricingLayout from "@/components/PricingPage/PricingLayout";

export const metadata = {
  title: "Pricing | Tailor Talk",
  description:
    "Tailor Talks is your go-to platform for seamless and intelligent conversations. Explore a new era of communication with Tailor Talks.",
};

function Pricing() {
  return (
    <div>
      <PricingLayout>
        <Plans />
      </PricingLayout>
    </div>
  );
}

export default Pricing;
