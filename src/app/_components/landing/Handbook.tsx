"use client";
import Link from "next/link";

export default function Handbook() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-blue-50 skew-y-3 transform origin-top-right h-[105%] -z-10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">
          <span className="relative inline-block">
            Bizning qo&apos;llanma
            <div className="absolute -bottom-1 w-full h-3 bg-yellow-200 -z-10 opacity-70"></div>
          </span>{" "}
          sizga nimalarni o&apos;rgatadi:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 sm:p-5 flex gap-4 items-start border border-gray-100"
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-sm font-semibold shrink-0">
                {item.num}
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-1 dark:text-gray-600">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:text-right">
          <Link
            href="/handbook"
            className="inline-flex items-center gap-2 text-blue-600 font-medium group"
          >
            <span>To&apos;liq qo&apos;llanmani ko&apos;rish</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
