"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  TELEGRAM_CHANNELS,
  YOUTUBE_CHANNELS,
  GITHUB_CONTRIBUTORS,
  DONATION_OPTIONS,
} from "@/app/community/_data";

// Component for the stylized tab buttons
interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`relative px-5 py-3 text-sm font-medium transition-all duration-200 rounded-lg 
    ${
      active
        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
    }`}
  >
    {children}
  </button>
);

// Telegram channel card
const TelegramCard = ({ channel }: { channel: any }) => (
  <a
    href={channel.link}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-4 bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0088CC]"></div>
    <div className="flex items-center mb-3">
      <div className="w-12 h-12 bg-[#0088CC]/10 rounded-full flex items-center justify-center text-[#0088CC]">
        <svg
          width="24"
          height="24"
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
      <div className="ml-3">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
          {channel.name}
          {channel.isOfficial && (
            <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300">
              Rasmiy
            </span>
          )}
        </h3>
        <p className="text-sm text-[#0088CC]">{channel.username}</p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300 text-sm">
      {channel.description}
    </p>
    <div className="mt-3 flex items-center justify-between">
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
        {channel.members} a&apos;zo
      </span>
      <span className="inline-flex items-center text-[#0088CC] text-sm font-medium group-hover:underline">
        Qo&apos;shilish
        <svg
          className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
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
  </a>
);

// YouTube channel card
const YouTubeCard = ({ channel }: { channel: any }) => (
  <a
    href={channel.url}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-4 bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group relative overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-1.5 bg-[#FF0000]"></div>
    <div className="flex items-center mb-3">
      <div className="w-12 h-12 bg-[#FF0000]/10 rounded-full flex items-center justify-center text-[#FF0000]">
        <svg
          width="24"
          height="24"
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
      <div className="ml-3">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {channel.name}
        </h3>
        <p className="text-sm text-[#FF0000]">{channel.subscribers} obunachi</p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300 text-sm">
      {channel.description}
    </p>
    <div className="mt-3 flex justify-end">
      <span className="inline-flex items-center text-[#FF0000] text-sm font-medium group-hover:underline">
        Kanalga o&apos;tish
        <svg
          className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1"
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
  </a>
);

// GitHub contributor card
const ContributorCard = ({ contributor }: { contributor: any }) => (
  <a
    href={`https://github.com/${contributor.username}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group"
  >
    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-600 shadow-sm">
      <Image
        src={contributor.avatarUrl}
        alt={contributor.name}
        fill
        className="object-cover"
      />
    </div>
    <div className="flex-1 min-w-0">
      <p className="text-sm font-semibold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {contributor.name}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
        @{contributor.username}
      </p>
    </div>
    <div>
      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300">
        {contributor.contributions} commits
      </span>
    </div>
  </a>
);

// Donation card
const DonationCard = ({ option }: { option: any }) => (
  <div className="p-5 bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full">
    <div className="flex items-center mb-4">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: `${option.color}20` }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: option.color }}
        >
          <path d={option.icon} fill="currentColor" />
        </svg>
      </div>
      <h3 className="ml-3 text-lg font-bold text-gray-900 dark:text-white">
        {option.name}
      </h3>
    </div>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
      {option.description}
    </p>
    <a
      href={option.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-2.5 px-4 text-center text-sm font-medium rounded-lg text-white transition-all"
      style={{ backgroundColor: option.color }}
    >
      {option.buttonText}
    </a>
  </div>
);

export default function Community() {
  const [activeTab, setActiveTab] = useState<
    "telegram" | "youtube" | "github" | "donate"
  >("telegram");

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient blobs for dark mode */}
        <div className="hidden dark:block">
          <div className="absolute top-10 left-20 w-72 h-72 rounded-full bg-blue-500/5 filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-purple-500/5 filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/5 filter blur-3xl"></div>
        </div>

        {/* Light patterns for light mode */}
        <div className="dark:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block mb-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-400/30">
              O&apos;zbekiston Go dasturchilari
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Bizning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Hamjamiyatimiz
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Go dasturlash tili bo&apos;yicha o&apos;zaro tajriba almashish va
            rivojlanish uchun foydali resurslar
          </p>
        </div>

        {/* Tabs navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <TabButton
            active={activeTab === "telegram"}
            onClick={() => setActiveTab("telegram")}
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
          </TabButton>

          <TabButton
            active={activeTab === "youtube"}
            onClick={() => setActiveTab("youtube")}
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
          </TabButton>

          <TabButton
            active={activeTab === "github"}
            onClick={() => setActiveTab("github")}
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
          </TabButton>

          <TabButton
            active={activeTab === "donate"}
            onClick={() => setActiveTab("donate")}
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
          </TabButton>
        </div>

        {/* Content sections */}
        <div className="relative">
          {/* Telegram Channels */}
          <div
            className={`transition-all duration-500 ${
              activeTab === "telegram"
                ? "opacity-100 translate-y-0"
                : "absolute opacity-0 translate-y-8 pointer-events-none"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TELEGRAM_CHANNELS.map((channel, idx) => (
                <TelegramCard key={idx} channel={channel} />
              ))}
            </div>
          </div>

          {/* YouTube Channels */}
          <div
            className={`transition-all duration-500 ${
              activeTab === "youtube"
                ? "opacity-100 translate-y-0"
                : "absolute opacity-0 translate-y-8 pointer-events-none"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {YOUTUBE_CHANNELS.map((channel, idx) => (
                <YouTubeCard key={idx} channel={channel} />
              ))}
            </div>
          </div>

          {/* GitHub Contributors */}
          <div
            className={`transition-all duration-500 ${
              activeTab === "github"
                ? "opacity-100 translate-y-0"
                : "absolute opacity-0 translate-y-8 pointer-events-none"
            }`}
          >
            <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Asosiy Hissa Qo&apos;shuvchilar
                </h3>
                <a
                  href="https://github.com/gouz-uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline flex items-center"
                >
                  <span>GitHub sahifasi</span>
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {GITHUB_CONTRIBUTORS.map((contributor, idx) => (
                  <ContributorCard key={idx} contributor={contributor} />
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                      Loyihaga hissa qo&apos;shing
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      O&apos;zbek Go hamjamiyatining ochiq manbali loyihalariga
                      siz ham hissa qo&apos;shishingiz mumkin.
                      <a
                        href="https://github.com/gouz-uz/contributing"
                        className="ml-1 font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Qo&apos;shilish yo&apos;riqnomasi
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Options */}
          <div
            className={`transition-all duration-500 ${
              activeTab === "donate"
                ? "opacity-100 translate-y-0"
                : "absolute opacity-0 translate-y-8 pointer-events-none"
            }`}
          >
            <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Go Uzbekistan loyihasini qo&apos;llab-quvvatlang
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Sizning homiyligingiz tufayli biz ko&apos;proq ta&apos;lim
                  resurslari va tadbirlarni tashkil eta olamiz
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DONATION_OPTIONS.map((option, idx) => (
                  <DonationCard key={idx} option={option} />
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <svg
                      className="h-5 w-5 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-blue-300">
                      Homiylik haqida
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                      Sizning har qanday miqdordagi homiyligingiz tashkilotni
                      samarali ishlashiga va Go tilini O&apos;zbekistonda
                      rivojlantirishga katta hissa qo&apos;shadi. Homiylik bilan
                      bog&apos;liq savollar uchun
                      <a
                        href="mailto:bekzotovich12@gmail.com"
                        className="ml-1 font-medium text-blue-600 dark:text-blue-400 hover:underline"
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
        </div>

        {/* Join the community CTA section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center mb-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-1 rounded-full text-sm font-medium">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            1000+ a&apos;zo
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Bizning jamoa bilan birga o&apos;rganish va rivojlanish
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Go tilini o&apos;rganayotgan yoki ishlatayotgan boshqa mutaxassislar
            bilan tajriba almashing, ular bilan hamkorlik qiling va yangi
            imkoniyatlar yarting
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/golang_uzbekistan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-[#0088CC] hover:bg-[#0077B5] transition-all shadow-lg hover:shadow-[#0088CC]/20"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.026.293-.126.406-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.497.98z"
                  fill="currentColor"
                />
              </svg>
              Telegramga qo&apos;shiling
            </a>
            <a
              href="https://github.com/gouz-uz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg text-gray-700 dark:text-white bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                  fill="currentColor"
                />
              </svg>
              GitHub sahifasi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
