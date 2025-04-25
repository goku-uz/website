"use client";
import Link from "next/link";

export default function Handbook() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 skew-y-3 transform origin-top-right h-[105%] -z-10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
          <span className="relative inline-block">
            Bizning qo&apos;llanma
            <div className="absolute -bottom-1 w-full h-3 bg-yellow-200 dark:bg-yellow-500/40 -z-10 opacity-70"></div>
          </span>{" "}
          sizga nimalarni o&apos;rgatadi:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              num: 1,
              title: "Go asoslari",
              desc: "O'zgaruvchilar, funksiyalar, sikllar va boshqa asosiy tushunchalar",
            },
            {
              num: 2,
              title: "Ma'lumotlar tuzilmalari",
              desc: "Massivlar, slicelar, maplar va structlarni qanday ishlatish kerak",
            },
            {
              num: 3,
              title: "Concurrency",
              desc: "Goroutinelar va channellar bilan ishlash usullari",
            },
            {
              num: 4,
              title: "Web dasturlash",
              desc: "Go tilida API va web-ilovalar yaratish",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 sm:p-6 flex gap-4 items-start border border-gray-100 dark:border-gray-700 group hover:border-blue-200 dark:hover:border-blue-700/50"
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-base font-semibold shrink-0 shadow-md group-hover:shadow-lg transition-all">
                {item.num}
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/handbook"
            className="inline-flex items-center px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 font-medium"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            To&apos;liq qo&apos;llanmani ko&apos;rish
          </Link>
        </div>
      </div>
    </section>
  );
}
