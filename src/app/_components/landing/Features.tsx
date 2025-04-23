"use client";

export default function Features() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h3 className="text-2xl sm:text-3xl font-bold relative inline-block">
            Go dasturlash tilining afzalliklari
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>,
              title: "Tezkor bajarish",
              description:
                "Go dasturlash tili C tiliga yaqin tezlikda ishlaydi va yuqori unumdorlikka ega.",
            },
            {
              icon: (
                <>
                  <rect
                    x="2"
                    y="7"
                    width="20"
                    height="14"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </>
              ),
              title: "Parallel dasturlash",
              description:
                "Goroutine va channellar yordamida sodda va samarali parallel dasturlar yarating.",
            },
            {
              icon: (
                <>
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </>
              ),
              title: "Sodda sintaksis",
              description:
                "Go'ning sintaksisi sodda va tushunarli, yangi dasturchilarga o'rganish oson.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative bg-white p-5 rounded-lg overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 left-0 w-1 h-0 bg-blue-600 group-hover:h-full transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 dark:text-gray-600">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}