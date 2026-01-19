"use client";

const testimonials = [
  {
    name: "Fabian Sundholm",
    role: "Play Store",
    avatar: "F",
    content:
      "Downloaded like 4 different ones and this one was the only one that didn't have stupid paywall limitations. Does what it's supposed to.",
    rating: 5,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Krishna Adhikari",
    role: "Play Store",
    avatar: "K",
    content:
      "Flawless app I could give 7 stars if the ratings were available for more than 5 star very very good app",
    rating: 5,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Harish K",
    role: "Play Store",
    avatar: "H",
    content:
      "Habidots makes habit-building simple and satisfying. Clean design, easy tracking, and motivating streaks!",
    rating: 5,
    gradient: "from-orange-500 to-red-500",
  },
  
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-900/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium mb-4">
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Loved by <span className="gradient-text">Habit Builders</span>{" "}
            Worldwide
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join thousands of people who have transformed their lives with
            Habidots.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 rounded-3xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-purple-200 dark:hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
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
