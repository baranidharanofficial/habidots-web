"use client";

import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Create Your Habits",
    description:
      "Add the habits you want to build. Choose from icons, set your schedule, and customize reminders.",
    image: "/images/1l.jpeg",
  },
  {
    number: "02",
    title: "Track Daily",
    description:
      "Simply tap to mark habits complete each day. Use widgets for even faster tracking without opening the app.",
    image: "/images/2l.jpeg",
  },
  {
    number: "03",
    title: "Watch Your Growth",
    description:
      "View your progress over time with beautiful analytics. Celebrate streaks and see how far you've come.",
    image: "/images/3l.jpeg",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-32 relative overflow-hidden bg-gray-50 dark:bg-[#0a0a15]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start Building Habits in{" "}
            <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Getting started with Habidots is easy. Here&apos;s how you can begin
            your journey to better habits today.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:order-2" : ""
                } text-center lg:text-left`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#F472B6] text-white text-2xl font-bold mb-6 shadow-lg shadow-purple-500/30">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-4xl font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:order-1" : ""
                } relative flex justify-center`}
              >
                {/* Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-r from-[#7C3AED] to-[#F472B6] rounded-full blur-3xl opacity-20" />
                </div>

                {/* Phone mockup */}
                <div className="relative w-[240px] md:w-[280px] h-[480px] md:h-[560px]">
                  {/* Phone frame */}
                  <div className="absolute inset-0 bg-neutral-900 rounded-[2.5rem] shadow-2xl shadow-purple-500/20">
                    {/* Screen */}
                    <div className="absolute inset-2 bg-black rounded-4xl overflow-hidden">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20" />
                      {/* Screenshot */}
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-fill"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
