import { Check } from "lucide-react"

interface Plan {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  buttonVariant: "solid" | "outline"
  buttonText: string
  highlighted?: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    name: "Lunar Learner",
    price: "$0",
    description: "Moon School Courses, Monthly Newsletter, 3 Rocket Simulations/month",
    features: [
      "Moon School Courses",
      "Monthly Newsletter",
      "3 Rocket Simulations/month",
    ],
    buttonVariant: "outline",
    buttonText: "Get Started",
  },
  {
    name: "Martian Explorer",
    price: "$49",
    period: "/mo",
    description: "Everything in Lunar Learner, Mars Mission Briefings, Spaceport Lounge Access, 10 Teleportation Credits, 100kg Cargo Allowance",
    features: [
      "Everything in Lunar Learner",
      "Mars Mission Briefings",
      "Spaceport Lounge Access",
      "10 Teleportation Credits",
      "100kg Cargo Allowance",
    ],
    highlighted: true,
    badge: "Most Popular",
    buttonVariant: "solid",
    buttonText: "Choose Plan",
  },
  {
    name: "Venus Vanguard",
    price: "$149",
    period: "/mo",
    description: "Everything in Martian Explorer, Live Venus Colony Feed, AI Mission Assistant, 50 Satellite Uplink Minutes, 5 Priority Docking Requests",
    features: [
      "Everything in Martian Explorer",
      "Live Venus Colony Feed",
      "AI Mission Assistant",
      "50 Satellite Uplink Minutes",
      "5 Priority Docking Requests",
    ],
    buttonVariant: "outline",
    buttonText: "Get Started",
  },
]

export default function PricingPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900">Pricing</h1>
        <p className="mt-2 text-lg text-gray-600">
          Choose the plan that fits your needs
        </p>
      </div>

      {/* Plan cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-xl border p-8 shadow-sm transition-shadow hover:shadow-lg
              ${plan.highlighted ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 bg-white'}`}
          >
            {/* Badge */}
            {plan.badge && (
              <span className="absolute -top-3 right-3 inline-block px-3 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full">
                {plan.badge}
              </span>
            )}

            <h2 className="text-2xl font-semibold text-gray-900">
              {plan.name}
            </h2>

            <p className="mt-4 flex items-baseline">
              <span className="text-4xl font-extrabold text-gray-900">
                {plan.price}
              </span>
              {plan.period && (
                <span className="ml-1 text-xl font-medium text-gray-600">
                  {plan.period}
                </span>
              )}
            </p>

            <p className="mt-2 text-gray-700">{plan.description}</p>

            <ul className="mt-4 space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full px-4 py-2 rounded-lg font-semibold transition
                ${plan.buttonVariant === 'solid'
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                  : 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'}`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
