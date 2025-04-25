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
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-xl overflow-hidden transition-all hover:shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-0 left-0 w-1 h-0 bg-blue-600 dark:bg-blue-500 group-hover:h-full transition-all duration-300"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors shadow-sm">
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
                    className="text-blue-600 dark:text-blue-400"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-14 text-center">
          <a 
            href="/handbook" 
            className="inline-flex items-center px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Go qo'llanmani o'qing
          </a>
        </div>
      </div>
    </section>
  );
}