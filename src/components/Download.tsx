"use client";

import Image from "next/image";

export default function Download() {
  return (
    <section
      id="download"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-[#7C3AED]/10 via-transparent to-[#F472B6]/10 dark:from-[#7C3AED]/5 dark:to-[#F472B6]/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-r from-[#7C3AED] to-[#6D28D9]" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
          />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 md:p-16">
            {/* Content */}
            <div className="text-white text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Start Building Better Habits Today
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
                Download Habidots now and join thousands of people transforming
                their lives one habit at a time.
              </p>

              {/* App store buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://apps.apple.com/app/id6771414409"
                  target="_blank"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-black rounded-xl hover:bg-gray-900 transition-all hover:scale-105 shadow-lg"
                >
                  <svg
                    className="w-8 h-8"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-lg font-semibold text-white">
                      App Store
                    </div>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.glactic.streakit"
                  target="_blank"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-black rounded-xl hover:bg-gray-900 transition-all hover:scale-105 shadow-lg"
                >
                  <svg
                    className="w-8 h-8"
                    fill="white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="text-lg font-semibold text-white">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start mt-8 text-white/70">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
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
                  <span className="text-sm">Privacy Focused</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <span className="text-sm">Secure Data</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                    />
                  </svg>
                  <span className="text-sm">Offline Support</span>
                </div>
              </div>
            </div>

            {/* App preview */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 bg-white/20 rounded-full blur-3xl" />
              </div>

              {/* Phone mockups */}
              <div className="relative">
                {/* Back phone */}
                <div className="absolute -left-16 top-8 w-[200px] h-[400px] opacity-50 rotate-[-8deg]">
                  <div className="absolute inset-0 bg-gray-900 rounded-4xl shadow-2xl">
                    <div className="absolute inset-2 bg-black rounded-[1.7rem] overflow-hidden">
                      <Image
                        src="/images/1.jpeg"
                        alt="Habidots Light Mode"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Front phone */}
                <div className="relative w-[240px] md:w-[260px] h-[480px] md:h-[520px] z-10">
                  <div className="absolute inset-0 bg-gray-900 rounded-[2.5rem] shadow-2xl">
                    <div className="absolute inset-2.5 bg-black rounded-4xl overflow-hidden">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-20" />
                      <Image
                        src="/images/hero.jpeg"
                        alt="Habidots Dark Mode"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
