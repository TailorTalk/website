export const basePlans = [
  {
    forText: "For small businesses & startups",
    title: "Starter",
    description: "Perfect for small businesses & startups getting started with sales & support automation.",
    price: {
      monthly: "59",
      annual: "49"
    },
    period: {
      monthly: "/month",
      annual: "/yearly"
    },
    features: [
      "Up to 1,000 Unique Monthly Users*",
      "All channel Integration",
      "Access to All Tools & Features (excluding API tool access)"
    ],
    buttonText: "Start Free Trial",
    buttonStyle: "outline"
  },
  {
    forText: "For growing businesses",
    title: "Growth",
    description: "Ideal for growing businesses aiming to automate sales, support & marketing across key channels with advanced features.",
    price: {
      monthly: "119",
      annual: "99"
    },
    period: {
      monthly: "/month",
      annual: "/yearly"
    },
    features: [
      "Up to 2,000 Unique Monthly Users*",
      "All channel Integration",
      "Access to All Tools & Features, including API Tool Access",
      "Initial Agent Setup & Tutorials"
    ],
    buttonText: "Start Free Trial",
    popular: true,
    buttonStyle: "premium"
  },
  {
    forText: "For established businesses",
    title: "Enterprise",
    description: "For established businesses with high volume, complex workflows, deep integration needs, and requirements for dedicated support.",
    price: {
      monthly: "Custom",
      annual: "Custom"
    },
    period: {
      monthly: " pricing",
      annual: " pricing"
    },
    features: [
      "Unlimited Monthly Users",
      "All channel Integration",
      "Access to All Tools & Features, including API Tool Access",
      "Advanced & Custom Integrations",
      "Agent Setup & 24*7 support"
    ],
    buttonText: "Contact Sales",
    buttonStyle: "outline"
  }
];

const discountPercentage = 20;

function calculateAnnual(monthly, discount) {
  if (isNaN(Number(monthly))) return monthly;
  const annual = Number(monthly) * 12;
  const discounted = Math.floor(annual * (1 - discount / 100));
  return discounted.toString();
}

export const plans = basePlans.map(plan => ({
  ...plan,
  price: {
    monthly: plan.price.monthly,
    annual: calculateAnnual(plan.price.monthly, discountPercentage)
  }
}));