"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "📊",
    title: "Visual Progress Tracking",
    description:
      "See your habits come to life with beautiful calendar views and streak visualizations that keep you motivated.",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: "🔥",
    title: "Streak Counter",
    description:
      "Build momentum with streak tracking. Watch your consistency grow and never want to break your chain.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: "📱",
    title: "Home Screen Widgets",
    description:
      "Quick access right from your home screen. Track and complete habits without even opening the app.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: "📈",
    title: "Detailed Analytics",
    description:
      "Understand your patterns with comprehensive analytics. See completion rates, best days, and trends over time.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: "🔔",
    title: "Smart Reminders",
    description:
      "Never forget a habit with customizable notifications. Set reminders that fit your schedule perfectly.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: "🌙",
    title: "Dark & Light Themes",
    description:
      "Beautiful in any lighting. Automatically adapts to your system preferences or choose your favorite theme.",
    gradient: "from-violet-500 to-purple-500",
  },
];

export default function Features() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/50 to-transparent dark:via-purple-900/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
            <span>Features</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Build Habits That Stick</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Habidots combines powerful features with beautiful design to make
            habit tracking a joy, not a chore.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`group relative p-6 md:p-8 rounded-3xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-purple-200 dark:hover:border-purple-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-2 ${
                visibleCards.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl md:text-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[#7C3AED] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
