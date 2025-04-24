"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
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
              Go <span className="text-cyan-300">Tadbirlar</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Go dasturlash tili bo'yicha o'tkaziladigan tadbirlar, uchrashuvlar
              va konferensiyalar
            </p>

            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white backdrop-blur-sm rounded-full shadow-md">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm0-9a1 1 0 011 1v3a1 1 0 01-1 1H7a1 1 0 110-2h2V8a1 1 0 011-1z" />
              </svg>
              <span>Tez orada tadbirlar e'lon qilinadi</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </div>

      {/* Coming Soon Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-16 border border-gray-100 dark:border-gray-700">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tadbirlar sahifasi tayyorlanmoqda
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Tez orada bu yerda Go dasturchilar uchun tadbirlar, uchrashuvlar
              va konferensiyalar haqida ma'lumotlar paydo bo'ladi. O'zbek Go
              hamjamiyatining barcha tadbirlari va soha yangiliklari uchun
              bizning telegram kanalimizga qo'shiling.
            </p>

            <div className="space-y-6">
              <div className="flex flex-col items-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Telegram kanalimizga qo'shiling
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
                  Go dasturlash tili bo'yicha barcha tadbirlar haqida
                  birinchilardan bo'lib xabardor bo'lish uchun rasmiy telegram
                  kanalimizga qo'shiling.
                </p>
                <a
                  href="https://t.me/golang_uzbek_community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 font-medium flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                    <path
                      fill="#29b6f6"
                      d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                    ></path>
                    <path
                      fill="#b0bec5"
                      d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                    ></path>
                    <path
                      fill="#cfd8dc"
                      d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                    ></path>
                  </svg>
                  Telegram kanalga o'tish
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Xabarnomalar
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                    Tadbirlar haqida xabarnomalarni olish uchun pochta
                    ro'yxatimizga yoziling
                  </p>
                </div>

                <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Onlayn va oflayn tadbirlar
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                    Go meetup, workshop va webinarlar haqida ma'lumotlar tez
                    orada e'lon qilinadi
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-100 dark:border-yellow-900/30">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-yellow-600 dark:text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                      O'z tadbiringizni taklif qilish
                    </h3>
                    <p className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                      Agar siz Go dasturlash tili bo'yicha tadbir o'tkazishni
                      istasangiz,{" "}
                      <a
                        href="mailto:bekzotovich12@gmail.com"
                        className="font-medium underline"
                      >
                        bekzotovich12@gmail.com
                      </a>{" "}
                      manziliga murojaat qiling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-900 dark:to-blue-800 rounded-2xl overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Go tadbirlari haqida xabardor bo'lishni xohlaysizmi?
            </h2>
            <p className="text-blue-100 mb-8">
              Email ro'yxatimizga qo'shiling va Go tadbirlari, meetuplar va
              konferensiyalar haqida birinchilardan bo'lib bilib oling
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="px-4 py-3 rounded-lg flex-1 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700"
              />
              <button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all">
                Obuna bo'lish
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 mb-8 lg:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Go'zbekiston jamiyatiga qo'shiling
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Go dasturlash tili hamjamiyati bilan birga o'rganing, tajriba
                almashing va rivojlaning
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3.5 rounded-lg text-white bg-blue-600 hover:bg-blue-700 font-medium transition-all shadow-lg shadow-blue-700/20"
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Bosh sahifaga qaytish
              </Link>

              <Link
                href="/community"
                className="inline-flex items-center px-6 py-3.5 rounded-lg border-2 border-blue-700 dark:border-blue-500 text-blue-700 dark:text-blue-500 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Jamiyatga o'tish
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
