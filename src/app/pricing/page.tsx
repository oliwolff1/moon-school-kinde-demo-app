import { Check } from "lucide-react";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import HomeHeader from "@/components/HomeHeader";

interface Plan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonVariant: "solid" | "outline";
  buttonText: string;
  highlighted?: boolean;
  badge?: string;
  planId: string;
}

const plans: Plan[] = [
  {
    name: "Lunar Learner",
    price: "Free",
    description: "Launch your journey into space training",
    features: [
      "Moon School Courses",
      "Monthly Newsletter",
      "3 Rocket Simulations/month",
    ],
    buttonVariant: "outline",
    buttonText: "Choose Plan",
    planId: "lunar-learner",
  },
  {
    name: "Martian Explorer",
    price: "$49",
    period: "/mo",
    description: "For crews ready to explore new frontiers",
    features: [
      "Everything in Lunar Learner",
      "Unlimited Rocket Simulations",
      "100kg Cargo Allowance",
    ],
    highlighted: true,
    badge: "Most Popular",
    buttonVariant: "solid",
    buttonText: "Choose Plan",
    planId: "martian-explorer",
  },
  {
    name: "Venus Vanguard",
    price: "$149",
    period: "/mo",
    description: "Lead missions beyond the stars",
    features: [
      "Everything in Martian Explorer",
      "AI Mission Assistant",
      "5,000kg Cargo Allowance",
    ],
    buttonVariant: "outline",
    buttonText: "Choose Plan",
    planId: "venus-vanguard",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <HomeHeader currentPage="pricing" />
      {/* Stars background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-40 left-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full opacity-70"></div>
        <div className="absolute bottom-40 left-20 w-0.5 h-0.5 bg-white rounded-full opacity-50"></div>
        <div className="absolute bottom-60 right-10 w-1 h-1 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-1/3 left-10 w-0.5 h-0.5 bg-white rounded-full opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 mb-4">
            Pricing
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-300">
            Choose the plan that fits your cosmic journey
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col backdrop-blur-sm
                ${
                  plan.highlighted
                    ? "border-orange-500 bg-gradient-to-br from-orange-900/30 to-orange-800/20 shadow-orange-500/20"
                    : "border-gray-600 bg-gradient-to-br from-gray-800/50 to-gray-900/30"
                }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3 right-3 inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full">
                  {plan.badge}
                </span>
              )}

              <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>

              <p className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="ml-1 text-xl font-medium text-gray-300">
                    {plan.period}
                  </span>
                )}
              </p>

              <p className="mt-2 text-gray-300">{plan.description}</p>

              <ul className="mt-4 space-y-2 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    {!feature.startsWith("Everything in") && (
                      <Check className="w-5 h-5 text-orange-400 mr-2" />
                    )}
                    <span
                      className={`text-gray-300 ${feature.startsWith("Everything in") ? "ml-0 text-orange-300 font-medium" : ""}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <RegisterLink
                authUrlParams={{
                  is_create_org: "true",
                  plan: plan.planId,
                }}
                className={`mt-8 w-full px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center inline-block
                  ${
                    plan.buttonVariant === "solid"
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/30"
                      : "border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
                  }`}
              >
                {plan.buttonText}
              </RegisterLink>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
