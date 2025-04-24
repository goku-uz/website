"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GITHUB_EXAMPLES, COMING_SOON_CATEGORIES } from "./_data";

export default function ExamplesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]"></div>
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_60%_60%,rgba(55,65,81,0),#1d4ed8)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Go <span className="text-cyan-300">Misollar</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Go dasturlash tilida amaliy loyihalarni o'rganish uchun misollar, shablonlar va kodlar
            </p>

            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white backdrop-blur-sm rounded-full">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm0-9a1 1 0 011 1v3a1 1 0 01-1 1H7a1 1 0 110-2h2V8a1 1 0 011-1z" />
              </svg>
              <span>Tez orada barcha misollar</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </div>

      {/* GitHub Examples */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-16 border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <svg className="w-8 h-8 text-gray-900 dark:text-white mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                GitHub dan namunaviy loyihalar
              </h2>
            </div>
            <a 
              href="https://github.com/golang" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex items-center text-sm font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              Ko'proq topish
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GITHUB_EXAMPLES.map((repo, idx) => (
              <a
                key={idx}
                href={repo.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                        <Image
                          src={repo.authorAvatar}
                          alt={repo.authorName}
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {repo.authorName}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {repo.stars.toLocaleString()} stars
                        </div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {repo.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {repo.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {repo.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="inline-flex items-center px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Bu misollar Go jamiyati tomonidan yaratilgan ochiq kodli loyihalardan olingan.
            </p>
          </div>
        </div>
      </div>

      {/* Coming Soon Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium mb-4">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Tez orada
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Misollar kategoriyalari
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Quyidagi kategoriyalar bo'yicha amaliy misollar va shablonlar tez orada qo'shiladi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMING_SOON_CATEGORIES.map((category, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
              <div className="p-8">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <svg 
                    className="w-8 h-8" 
                    style={{ color: category.color }} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d={category.icon} 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  {category.description}
                </p>
                <div className="flex justify-center">
                  <span className="inline-flex items-center px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium">
                    <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Tez orada
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="smallGrid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              O'z misolingizni qo'shishni xohlaysizmi?
            </h2>

            <p className="text-blue-100 text-lg mb-8">
              Sizning amaliy misol va loyihalaringiz Go Uzbekistan jamiyatiga katta yordam beradi
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/goku-uz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3.5 rounded-lg text-blue-700 bg-white font-medium hover:bg-blue-50 transition-all shadow-lg shadow-blue-700/20"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
                Hissa qo'shish
              </a>

              <Link
                href="/"
                className="inline-flex items-center px-6 py-3.5 rounded-lg border-2 border-white text-white font-medium hover:bg-white/10 transition-all"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Bosh sahifaga qaytish
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }

        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h-40V0h40v40z'/%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </main>
  );
}