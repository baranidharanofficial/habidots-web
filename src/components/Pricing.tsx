"use client";

import { useState } from "react";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: { monthly: 0, yearly: 0 },
    features: [
      "Track up to 3 habits",
      "Basic streak tracking",
      "Daily reminders",
      "Light & dark themes",
      "Basic analytics",
    ],
    cta: "Get Started Free",
    popular: false,
    gradient: "from-gray-500 to-gray-600",
  },
  {
    name: "Pro",
    description: "For serious habit builders",
    price: { monthly: 4.99, yearly: 29.99 },
    features: [
      "Unlimited habits",
      "Home screen widgets",
      "Advanced analytics",
      "Custom icons & emojis",
      "Data export & backup",
      "Priority support",
      "No ads",
    ],
    cta: "Start Pro Trial",
    popular: true,
    gradient: "from-[#7C3AED] to-[#F472B6]",
  },
  {
    name: "Lifetime",
    description: "One-time purchase",
    price: { monthly: 49.99, yearly: 49.99 },
    features: [
      "Everything in Pro",
      "Lifetime access",
      "All future updates",
      "Family sharing (up to 5)",
      "Early access to features",
      "Direct developer support",
    ],
    cta: "Get Lifetime Access",
    popular: false,
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section
      id="pricing"
      className="py-20 md:py-32 relative overflow-hidden bg-gray-50 dark:bg-[#0a0a15]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
            <span>Pricing</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Choose the plan that fits your habit-building journey. Start free
            and upgrade anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                !isYearly
                  ? "bg-white dark:bg-gray-700 shadow-md text-[#7C3AED]"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 ${
                isYearly
                  ? "bg-white dark:bg-gray-700 shadow-md text-[#7C3AED]"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              Yearly
              <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">
                Save 50%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-white shadow-2xl shadow-purple-500/30 scale-105 lg:scale-110"
                  : "bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full text-sm font-bold text-white shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={
                    plan.popular
                      ? "text-white/80"
                      : "text-gray-600 dark:text-gray-400"
                  }
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold">
                    $
                    {plan.name === "Lifetime"
                      ? plan.price.monthly
                      : isYearly
                      ? plan.price.yearly
                      : plan.price.monthly}
                  </span>
                  {plan.name !== "Lifetime" && plan.price.monthly > 0 && (
                    <span
                      className={
                        plan.popular
                          ? "text-white/70"
                          : "text-gray-500 dark:text-gray-400"
                      }
                    >
                      /{isYearly ? "year" : "month"}
                    </span>
                  )}
                </div>
                {plan.name === "Lifetime" && (
                  <p
                    className={`text-sm mt-1 ${
                      plan.popular
                        ? "text-white/70"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    One-time payment
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.popular ? "text-green-300" : "text-green-500"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={
                        plan.popular
                          ? "text-white/90"
                          : "text-gray-600 dark:text-gray-300"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.popular
                    ? "bg-white text-[#7C3AED] hover:bg-gray-100"
                    : "bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white hover:shadow-lg hover:shadow-purple-500/30"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <div className="text-center mt-12">
          <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            7-day free trial on Pro • Cancel anytime • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
