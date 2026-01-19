"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-50 via-white to-pink-50 dark:from-[#0F0F1A] dark:via-[#1a1a2e] dark:to-[#0F0F1A]" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300/30 dark:bg-pink-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-300/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "-1.5s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(124, 58, 237)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left stagger-children">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              New: Home Screen Widgets Available
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Build Habits{" "}
              <span className="gradient-text"> Smartly. </span>
              One Dot at a Time
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Track your daily habits, maintain streaks, and watch your progress
              grow. Habidots makes habit building simple, beautiful, and
              effective.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                href="#download"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-[#7C3AED] to-[#6D28D9] text-white rounded-full font-bold text-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all hover:scale-105"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                Download for iOS
              </Link>
              <Link
                href="#download"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-full font-bold text-lg hover:border-[#7C3AED] hover:text-[#7C3AED] dark:hover:border-[#A78BFA] dark:hover:text-[#A78BFA] transition-all hover:scale-105"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                Get on Android
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {['H', 'K', 'F'].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-linear-to-br from-purple-400 to-pink-400 border-2 border-white dark:border-gray-800 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-bold text-gray-900 dark:text-white">
                  500+
                </span>{" "}
                users building better habits
              </div>
            </div>
          </div>

          {/* Right content - App Preview */}
          <div className="relative flex justify-center">
            {/* Glow effect behind phone */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-[#7C3AED] to-[#F472B6] rounded-full blur-3xl opacity-30 animate-pulse-glow" />
            </div>

            {/* Phone mockup */}
            <div className="relative z-10 animate-float">
              <div className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px]">
                {/* Phone frame */}
                <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl shadow-purple-500/20">
                  {/* Screen */}
                  <div className="absolute inset-3 bg-black rounded-[2.5rem] overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-3xl z-20" />
                    {/* Screenshot */}
                    <Image
                      src="/images/light-hero.jpeg"
                      alt="Habidots App Screenshot"
                      fill
                      className="object-fill"
                      priority
                    />
                  </div>
                </div>

                {/* Side button */}
                <div className="absolute right-[-2px] top-28 w-1 h-12 bg-neutral-700 rounded-l" />
                <div className="absolute left-[-2px] top-24 w-1 h-8 bg-neutral-700 rounded-r" />
                <div className="absolute left-[-2px] top-36 w-1 h-16 bg-neutral-700 rounded-r" />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-10 right-0 md:right-10 bg-white rounded-2xl p-4 shadow-xl animate-float z-20">
              <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-2xl">
                  ✓
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">+25%</div>
                  <div className="text-sm text-gray-900 dark:text-gray-900">
                    This Week
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-10 left-0 md:left-10 bg-white rounded-2xl p-4 shadow-xl animate-float z-20"
              style={{ animationDelay: "-2s" }}
            >
              <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-2xl">
                  <Image src="/images/streak.png" alt="Streak" width={24} height={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-500">21</div>
                  <div className="text-sm text-gray-900 dark:text-gray-900">
                    Day Streak
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link
          href="#features"
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-[#7C3AED] transition-colors"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
