"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TELEGRAM_CHANNELS,
  YOUTUBE_CHANNELS,
  GITHUB_CONTRIBUTORS,
  DONATION_OPTIONS,
} from "./_data";

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<
    "telegram" | "youtube" | "github" | "donate"
  >("telegram");

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero section with improved visual design */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[length:16px_16px]"></div>
        <div className="absolute w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_60%_60%,rgba(55,65,81,0),#1d4ed8)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              O&apos;zbekiston Go{" "}
              <span className="text-cyan-300">Hamjamiyati</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Go dasturlash tili bo&apos;yicha o&apos;zaro tajriba almashish,
              loyihalarda hamkorlik qilish va rivojlanish uchun professional
              jamiyat
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://t.me/golang_uzbek_community"
                className="inline-flex items-center px-6 py-3 rounded-lg text-blue-700 bg-white font-medium hover:bg-blue-50 transition-colors shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.026.293-.126.406-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.497.98z"
                    fill="currentColor"
                  />
                </svg>
                Telegramga qo&apos;shiling
              </a>
              <a
                href="https://github.com/gouz-uz"
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                    fill="currentColor"
                  />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </div>

      {/* Community stats section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col items-center border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.026.293-.126.406-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.497.98z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              3,500+
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Telegram a&apos;zolari soni
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col items-center border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-red-600 dark:text-red-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              10K+
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              YouTube ko&apos;rishlari
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 flex flex-col items-center border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-gray-700 dark:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              320+
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              GitHub commits
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Premium styled tabs */}
        <div className="flex justify-center mb-12">
          <nav className="bg-white dark:bg-gray-800 p-1.5 rounded-xl flex flex-wrap gap-2 shadow-lg border border-gray-100 dark:border-gray-700">
            <button
              onClick={() => setActiveTab("telegram")}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === "telegram"
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.026.293-.126.406-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.497.98z"
                    fill="currentColor"
                  />
                </svg>
                <span>Telegram</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("youtube")}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === "youtube"
                  ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                    fill="currentColor"
                  />
                </svg>
                <span>YouTube</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("github")}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === "github"
                  ? "bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                    fill="currentColor"
                  />
                </svg>
                <span>GitHub</span>
              </div>
            </button>

            <button
              onClick={() => setActiveTab("donate")}
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeTab === "donate"
                  ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.31 8l-2.31 2.31L9.69 8 8 9.69l2.31 2.31L8 14.31 9.69 16l2.31-2.31 2.31 2.31 1.69-1.69-2.31-2.31L16 9.69 14.31 8z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Homiylik</span>
              </div>
            </button>
          </nav>
        </div>

        {/* Tab content with improved styling */}
        <div className="relative">
          {/* Telegram Channels */}
          {activeTab === "telegram" && (
            <div className="animate-fadeIn">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Telegram{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    Kanallar
                  </span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                  Go dasturlash tilini o&apos;rganish, amaliyotda qo&apos;llash
                  va kasbiy aloqalarni kengaytirishga yordam beradigan O&apos;zbek
                  tilidagi Telegram kanallar va guruhlar.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {TELEGRAM_CHANNELS.map((channel, idx) => (
                  <a
                    key={idx}
                    href={channel.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                      <div className="h-3 bg-[#0088CC]"></div>
                      <div className="p-6">
                        <div className="flex items-center mb-5">
                          <div className="w-14 h-14 bg-[#0088CC]/10 rounded-full flex items-center justify-center text-[#0088CC]">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.026.293-.126.406-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.497.98z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <div className="flex items-center">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                {channel.name}
                              </h3>
                              {channel.isOfficial && (
                                <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300">
                                  Rasmiy
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-[#0088CC]">
                              {channel.username}
                            </p>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-5">
                          {channel.description}
                        </p>

                        <div className="flex justify-between items-center">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">
                            {channel.members} a&apos;zo
                          </span>
                          <span className="inline-flex items-center text-[#0088CC] text-sm font-medium group-hover:underline">
                            Qo&apos;shilish
                            <svg
                              className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* YouTube Channels */}
          {activeTab === "youtube" && (
            <div className="animate-fadeIn">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  YouTube{" "}
                  <span className="text-red-600 dark:text-red-500">
                    Kanallar
                  </span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                  Go dasturlash tilini video darsliklar orqali o&apos;rganishni
                  xohlovchilar uchun foydali YouTube kanallar.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {YOUTUBE_CHANNELS.map((channel, idx) => (
                  <a
                    key={idx}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                      <div className="h-3 bg-[#FF0000]"></div>
                      <div className="p-6">
                        <div className="flex items-center mb-5">
                          <div className="w-14 h-14 bg-[#FF0000]/10 rounded-full flex items-center justify-center text-[#FF0000]">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {channel.name}
                            </h3>
                            <p className="text-sm text-[#FF0000]">
                              {channel.subscribers} obunachi
                            </p>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 mb-5 flex-grow">
                          {channel.description}
                        </p>

                        <div className="flex justify-end">
                          <span className="inline-flex items-center text-[#FF0000] text-sm font-medium group-hover:underline">
                            Kanalga o&apos;tish
                            <svg
                              className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* GitHub Contributors */}
          {activeTab === "github" && (
            <div className="animate-fadeIn">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  GitHub{" "}
                  <span className="text-gray-600 dark:text-gray-400">
                    Hissa Qo&apos;shuvchilar
                  </span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                  O&apos;zbek Go hamjamiyatining ochiq kodli loyihalariga hissa
                  qo&apos;shgan dasturchilar.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <svg
                      className="w-7 h-7 mr-2 text-gray-600 dark:text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                    Asosiy Hissa Qo&apos;shuvchilar
                  </h3>
                  <a
                    href="https://github.com/gouz-uz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex items-center text-sm font-medium"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                    GitHub sahifasi
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {GITHUB_CONTRIBUTORS.map((contributor, idx) => (
                    <a
                      key={idx}
                      href={`https://github.com/${contributor.username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/70 transition-colors border border-gray-100 dark:border-gray-700"
                    >
                      <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-600 shadow-sm">
                        <Image
                          src={contributor.avatarUrl}
                          alt={contributor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {contributor.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          @{contributor.username}
                        </p>
                        <div className="mt-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                            {contributor.contributions} commits
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 bg-blue-500/10 p-3 rounded-full">
                      <svg
                        className="h-8 w-8 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11 4h10v2H11V4zm0 4h6v2h-6V8zm0 6h10v2H11v-2zm0 4h6v2h-6v-2zM3 4h6v6H3V4zm2 2v2h2V6H5zm-2 8h6v6H3v-6zm2 2v2h2v-2H5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        Loyihaga hissa qo&apos;shing
                      </h4>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        O&apos;zbek Go hamjamiyatining ochiq manbali
                        loyihalariga siz ham hissa qo&apos;shishingiz mumkin.{" "}
                        <a
                          href="https://github.com/gouz-uz/contributing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                        >
                          Qo&apos;shilish yo&apos;riqnomasi
                          <svg
                            className="ml-1 w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Donation Options */}
          {activeTab === "donate" && (
            <div className="animate-fadeIn">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  <span className="text-green-600 dark:text-green-400">
                    Homiylik
                  </span>{" "}
                  qilish
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
                  Go Uzbekistan loyihasini qo&apos;llab-quvvatlang va
                  o&apos;zbek tilidagi yangi dasturlash resurslari yaratilishiga
                  hissa qo&apos;shing.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="text-center mb-10 max-w-2xl mx-auto">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-green-600 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-14.243l2.121 2.121 1.414-1.414L12 5.929l-3.535 3.535 1.414 1.414L12 8.757zm0 8.486l-3.535-3.535 1.414-1.414L12 13.243l2.121-2.121 1.414 1.414L12 16.071z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Go Uzbekistan loyihasini qo&apos;llab-quvvatlang
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Sizning homiyligingiz tufayli biz ko&apos;proq ta&apos;lim
                    resurslari yaratish, hamjamiyat tadbirlarini tashkil etish
                    va O&apos;zbek Go ekotizimini rivojlantirish imkoniyatiga
                    ega bo&apos;lamiz.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {DONATION_OPTIONS.map((option, idx) => (
                    <div
                      key={idx}
                      className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700"
                    >
                      <div className="flex items-center mb-6">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                          style={{ backgroundColor: `${option.color}20` }}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: option.color }}
                          >
                            <path d={option.icon} fill="currentColor" />
                          </svg>
                        </div>
                        <h3 className="ml-4 text-xl font-bold text-gray-900 dark:text-white">
                          {option.name}
                        </h3>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-8 flex-grow">
                        {option.description}
                      </p>

                      <a
                        href={option.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-6 flex items-center justify-center text-center font-medium rounded-xl text-white shadow-lg transition-all hover:shadow-xl"
                        style={{ backgroundColor: option.color }}
                      >
                        {option.buttonText}
                        <svg
                          className="ml-2 w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30">
                  <div className="flex items-center space-x-5">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-10 w-10 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-1 5v6h7v-2h-5V9h-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-blue-300">
                        Homiylik haqida
                      </h4>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        Sizning har qanday miqdordagi homiyligingiz tashkilotni
                        samarali ishlashiga va Go tilini O&apos;zbekistonda
                        rivojlantirishga katta hissa qo&apos;shadi. Homiylik
                        bilan bog&apos;liq savollar uchun{" "}
                        <a
                          href="mailto:bekzotovich12@gmail.com"
                          className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          bekzotovich12@gmail.com
                        </a>{" "}
                        ga murojaat qiling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
            <div className="inline-flex items-center mb-4 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              1000+ a&apos;zo
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Hamjamiyat bilan birga o&apos;rganish va rivojlanish
            </h2>

            <p className="text-blue-100 text-lg mb-8">
              Go tilini o&apos;rganayotgan yoki ishlatayotgan boshqa
              mutaxassislar bilan tajriba almashing, ular bilan hamkorlik qiling
              va yangi imkoniyatlar yarting
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://t.me/golang_uzbekistan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3.5 rounded-lg text-blue-700 bg-white font-medium hover:bg-blue-50 transition-all shadow-lg shadow-blue-700/20"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.026.293-.126.406-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.497.98z"
                    fill="currentColor"
                  />
                </svg>
                Telegramga qo&apos;shiling
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
