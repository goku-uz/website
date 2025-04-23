"use client";

export default function Newsletter() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-12 my-8 bg-blue-900 rounded-md">
      <div className="absolute inset-0 -z-10 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
        <div className="absolute inset-0 bg-[url('/uzbek-pattern-light.svg')] opacity-10 bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 py-8">
        <div className="inline-block mb-6 p-2 bg-white/10 backdrop-blur-sm rounded-full">
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
            className="text-white"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
          Yangiliklarga obuna bo&apos;ling
        </h3>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
          Go ekotizimi yangiliklari, qo&apos;llanmadagi o&apos;zgarishlar va
          jamiyat tadbirlari haqida xabardor bo&apos;ling
        </p>
        <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Email manzilingiz"
            className="px-4 py-3 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800 bg-white/95"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
          >
            Obuna bo&apos;lish
          </button>
        </form>

        {/* get start button */}
      </div>
    </section>
  );
}
