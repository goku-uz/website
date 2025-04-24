"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HANDBOOK_CHAPTERS,
  ADDITIONAL_RESOURCES,
  AUTHORS,
  READING_PROGRESS,
} from "./_data";

export default function HandbookPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeHashtags, setActiveHashtags] = useState<string[]>([]);
  const [activeTitleFilter, setActiveTitleFilter] = useState<string>("");

  // Handle hashtag click
  const handleHashtagClick = (hashtag: string) => {
    // Ensure hashtag is in consistent format with # prefix
    const formattedHashtag = hashtag.startsWith('#') ? hashtag.toLowerCase() : `#${hashtag.toLowerCase()}`;
    
    if (activeHashtags.includes(formattedHashtag)) {
      setActiveHashtags(activeHashtags.filter(tag => tag !== formattedHashtag));
    } else {
      setActiveHashtags([...activeHashtags, formattedHashtag]);
    }
  };

  // Handle chapter title click
  const handleChapterTitleClick = (title: string) => {
    if (activeTitleFilter === title) {
      setActiveTitleFilter(""); // Clear the filter if clicking the same title
    } else {
      setActiveTitleFilter(title);
      setSearchQuery(""); // Clear search query when filtering by title
    }
  };

  // Extract all available hashtags for display and ensure they have # prefix
  const allHashtags = Array.from(
    new Set(
      HANDBOOK_CHAPTERS.flatMap(chapter => 
        chapter.sections.flatMap(section => 
          [...(section.hashtags || []).map(tag => tag.startsWith('#') ? tag : `#${tag}`),
          ...(section.isNew ? ['#new'] : []),
          ...(section.isUpdated ? ['#updated'] : []),
          ...(section.isPremium ? ['#premium'] : [])
          ]
        )
      )
    )
  ).sort();

  // Function to check if a section matches active hashtags
  const matchesHashtags = (section: any) => {
    if (activeHashtags.length === 0) return true;
    
    // Create a complete set of section hashtags including special tags
    const sectionTags = [
      // @ts-expect-error resolve types || fix type any
      ...(section.hashtags || []).map(tag => tag.toLowerCase().startsWith('#') ? tag.toLowerCase() : `#${tag.toLowerCase()}`),
      ...(section.isNew ? ['#new'] : []),
      ...(section.isUpdated ? ['#updated'] : []),
      ...(section.isPremium ? ['#premium'] : [])
    ];
    
    return activeHashtags.some(tag => sectionTags.includes(tag.toLowerCase()));
  };

  // Filter chapters based on search query, active filter, hashtags, and title filter
  const filteredChapters = HANDBOOK_CHAPTERS.filter((chapter) => {
    // If title filter is active, only show that chapter
    if (activeTitleFilter && chapter.title !== activeTitleFilter) {
      return false;
    }

    // If search query exists, filter by title, description, or hashtags
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesTitle = chapter.title.toLowerCase().includes(query);
      const matchesDescription = chapter.description
        .toLowerCase()
        .includes(query);
      const matchesSectionTitles = chapter.sections.some((section) =>
        section.title.toLowerCase().includes(query)
      );
      const matchesSectionHashtags = chapter.sections.some((section) =>
        section.hashtags?.some(tag => tag.toLowerCase().includes(query))
      );

      if (!(matchesTitle || matchesDescription || matchesSectionTitles || matchesSectionHashtags)) {
        return false;
      }
    }

    // Apply category filter
    if (activeFilter !== "all" && chapter.id !== activeFilter) {
      return false;
    }

    // Check if any section matches active hashtags
    if (activeHashtags.length > 0 && !chapter.sections.some(matchesHashtags)) {
      return false;
    }

    return true;
  });

  // Calculate stats
  const totalSections = HANDBOOK_CHAPTERS.reduce(
    (acc, chapter) => acc + chapter.sections.length,
    0
  );
  const totalChapters = HANDBOOK_CHAPTERS.length;
  const completionPercentage = Math.floor(
    (READING_PROGRESS.completed / totalSections) * 100
  );

  // Reset all filters function
  const resetAllFilters = () => {
    setSearchQuery("");
    setActiveFilter("all");
    setActiveHashtags([]);
    setActiveTitleFilter("");
  };

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
              Go <span className="text-cyan-300">Qo&apos;llanma</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Go dasturlash tilini o&apos;rganish va amaliyotda qo&apos;llash
              uchun to&apos;liq qo&apos;llanma — asoslaridan ilg&apos;or
              mavzulargacha
            </p>

            {/* Search box with gradient border */}
            <div className="max-w-2xl mx-auto relative mt-8 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg p-0.5 shadow-xl">
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-[7px]"></div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Mavzularni yoki hashtag-larni qidirish..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white dark:bg-gray-800 rounded-lg py-4 pl-12 pr-4 shadow-inner focus:outline-none text-gray-700 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg
                    className="w-5 h-5 text-gray-400 dark:text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Hashtags filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-6 z-50 relative">
              {allHashtags.slice(0, 10).map((hashtag) => (
                <button
                  key={hashtag}
                  onClick={() => handleHashtagClick(hashtag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    activeHashtags.includes(hashtag.toLowerCase())
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100"
                      : "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-800/50"
                  }`}
                >
                  {hashtag}
                </button>
              ))}
              {activeHashtags.length > 0 && (
                <button
                  onClick={() => setActiveHashtags([])}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-800/50"
                >
                  Hashtag-larni tozalash
                </button>
              )}
            </div>

 
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </div>

      {/* Main content - Chapters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {activeTitleFilter || (activeFilter === "all" ? "Barcha bo'limlar" : filteredChapters[0]?.title)}
              </h2>
              
              {/* Filter indicators and reset button */}
              {(activeTitleFilter || activeHashtags.length > 0 || searchQuery) && (
                <div className="flex items-center space-x-2">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {activeTitleFilter && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mr-2">
                        {activeTitleFilter}
                      </span>
                    )}
                    {activeHashtags.length > 0 && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 mr-2">
                        {activeHashtags.length} hashtag
                      </span>
                    )}
                    {searchQuery && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                        Qidiruv: "{searchQuery}"
                      </span>
                    )}
                  </div>
                  <button 
                    onClick={resetAllFilters}
                    className="p-1 rounded-full text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-400"
                    title="Filtrlarni tozalash"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {filteredChapters.length > 0 ? (
              <div className="space-y-10">
                {filteredChapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 relative"
                  >
                    {/* Add subtle gradient accent at the top */}
                    <div 
                      className="h-1.5 w-full absolute top-0 left-0"
                      style={{ 
                        background: `linear-gradient(to right, ${chapter.color}, ${chapter.color}99)` 
                      }}
                    ></div>
                    
                    <div className="p-7">
                      <div className="flex items-start mb-7">
                        <div
                          className="h-14 w-14 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 shadow-sm transition-transform transform group-hover:scale-110"
                          style={{ 
                            background: `linear-gradient(135deg, ${chapter.color}15, ${chapter.color}30)`
                          }}
                        >
                          <svg
                            className="h-7 w-7"
                            style={{ color: chapter.color }}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d={chapter.icon}
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 
                            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors inline-flex items-center group"
                            onClick={() => handleChapterTitleClick(chapter.title)}
                          >
                            {chapter.title}
                            <svg 
                              className="ml-2 w-5 h-5 text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" 
                              />
                            </svg>
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mt-1.5 leading-relaxed">
                            {chapter.description}
                          </p>
                        </div>
                      </div>

                      {/* Section counter badge */}
                      <div className="mb-4 flex items-center justify-between">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                          <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V4z" clipRule="evenodd"></path>
                          </svg>
                          {chapter.sections.length} mavzular
                        </span>
                        
                        {/* Active title filter indicator */}
                        {activeTitleFilter === chapter.title && (
                          <span className="inline-flex items-center text-xs font-medium text-blue-700 dark:text-blue-300">
                            <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd"></path>
                            </svg>
                            Filtrlangan
                          </span>
                        )}
                      </div>

                      {/* Sections list with better dividers */}
                      <div className="space-y-2 divide-y divide-gray-100 dark:divide-gray-700">
                        {chapter.sections.filter(matchesHashtags).map((section, idx) => (
                          <Link
                            href={`/handbook/${chapter.slug}/${section.slug}`}
                            key={section.slug}
                            className="group flex items-start py-4 px-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors relative"
                          >
                            <div className="flex-shrink-0 pt-1">
                              <div 
                                className="h-7 w-7 rounded-full flex items-center justify-center text-white dark:text-gray-900 shadow-sm transition-transform group-hover:scale-110"
                                style={{ backgroundColor: chapter.color }}
                              >
                                <span className="text-xs font-medium">
                                  {idx + 1}
                                </span>
                              </div>
                            </div>
                            <div className="ml-4 flex-1">
                              <div className="flex items-center flex-wrap gap-2">
                                <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {section.title}
                                </h4>
                                
                                {/* Hashtags */}
                                <div className="flex flex-wrap gap-1.5 mt-1 relative z-10">
                                  {section.isNew && (
                                    <span 
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleHashtagClick("#new");
                                      }}
                                      className="inline-flex items-center px-2 py-0.5 text-xs font-medium text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20 cursor-pointer rounded transition-colors group-hover:text-green-800 dark:group-hover:text-green-200"
                                    >
                                      #new
                                    </span>
                                  )}
                                  {section.isUpdated && (
                                    <span 
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleHashtagClick("#updated");
                                      }}
                                      className="inline-flex items-center px-2 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-900/20 cursor-pointer rounded transition-colors group-hover:text-amber-800 dark:group-hover:text-amber-200"
                                    >
                                      #updated
                                    </span>
                                  )}
                                  {section.isPremium && (
                                    <span 
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleHashtagClick("#premium");
                                      }}
                                      className="inline-flex items-center px-2 py-0.5 text-xs font-medium text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 cursor-pointer rounded transition-colors group-hover:text-purple-800 dark:group-hover:text-purple-200"
                                    >
                                      #premium
                                    </span>
                                  )}
                                  {/* Add all defined hashtags */}
                                  {section.hashtags?.map((tag) => (
                                    <span 
                                      key={tag}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleHashtagClick(tag);
                                      }}
                                      className="inline-flex items-center px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 cursor-pointer rounded transition-colors group-hover:text-blue-800 dark:group-hover:text-blue-200"
                                    >
                                      {tag.startsWith('#') ? tag : `#${tag}`}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                                {section.description}
                              </p>
                            </div>
                            <div className="flex items-center self-center ml-2">
                              <svg
                                className="h-5 w-5 text-gray-400 dark:text-gray-500 flex-shrink-0 transition-transform transform group-hover:translate-x-1 group-hover:text-blue-500 dark:group-hover:text-blue-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 text-center border border-gray-100 dark:border-gray-700">
                <div className="flex justify-center mb-4">
                  <svg
                    className="h-16 w-16 text-gray-300 dark:text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                  Natija topilmadi
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Qidiruv so&apos;roviga mos kelgan ma&apos;lumot topilmadi.
                  Iltimos, qidiruv so&apos;rovingizni o&apos;zgartiring.
                </p>
                <button
                  onClick={resetAllFilters}
                  className="inline-flex items-center px-4 py-2 rounded-lg text-blue-700 border border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium"
                >
                  Barcha bo&apos;limlarni ko&apos;rsatish
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Chapter Titles Filter Section - New Addition */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Bo&apos;limlar
                </h3>
                <div className="space-y-2">
                  {HANDBOOK_CHAPTERS.map((chapter) => (
                    <button
                      key={chapter.id}
                      onClick={() => handleChapterTitleClick(chapter.title)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center ${
                        activeTitleFilter === chapter.title 
                          ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      }`}
                    >
                      <div 
                        className="w-4 h-4 mr-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: chapter.color }}  
                      ></div>
                      <span className="font-medium">{chapter.title}</span>
                      <div className="ml-auto text-xs text-gray-500 dark:text-gray-400">
                        {chapter.sections.length}
                      </div>
                    </button>
                  ))}
                </div>
                {activeTitleFilter && (
                  <div className="mt-4">
                    <button
                      onClick={() => setActiveTitleFilter("")}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 font-medium hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-sm"
                    >
                      Barcha bo&apos;limlarni ko&apos;rsatish
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Authors */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Qo&apos;llanma Mualiflari
                </h3>

                <div className="space-y-4">
                  {AUTHORS.map((author, idx) => (
                    <a
                      key={idx}
                      href={author.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 p-2 rounded-lg transition-colors"
                    >
                      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-600 shadow-sm">
                        <Image
                          src={author.image}
                          alt={author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {author.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {author.role}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href="https://github.com/gouz-uz/handbook-contributors"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-2 rounded-lg text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                    </svg>
                    Qo&apos;llanmaga hissa qo&apos;shish
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Qo&apos;shimcha Resurslar
                </h3>

                <div className="space-y-3">
                  {ADDITIONAL_RESOURCES.map((resource, idx) => (
                    <Link
                      key={idx}
                      href={resource.url}
                      className="flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                        style={{ backgroundColor: `${resource.color}15` }}
                      >
                        <svg
                          className="h-5 w-5"
                          style={{ color: resource.color }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d={resource.icon}
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 dark:text-white truncate">
                          {resource.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                          {resource.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-800/30 p-2 rounded-lg">
                      <svg
                        className="h-5 w-5 text-blue-600 dark:text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 005.5 14c1.669 0 3.218.51 4.5 1.385A7.96 7.96 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-blue-800 dark:text-blue-300">
                        Qo&apos;llanmani yuklab oling
                      </h4>
                      <p className="text-xs text-blue-600 dark:text-blue-400">
                        PDF formatida o&apos;qish uchun
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <button className="p-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20 relative z-10">
          <div className="relative rounded-2xl bg-white dark:bg-gray-800 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 h-full w-1/3 lg:w-1/2 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 transform -skew-x-12 -translate-x-40"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-10 p-6 md:p-10 items-center">
              <div className="lg:col-span-3">
                <div className="flex items-center space-x-2 mb-4">
                  <svg
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Bepul
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Go yangiliklari va o&apos;quv materiallarini olish uchun obuna
                  bo&apos;ling
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Go tilidagi eng so&apos;nggi yangiliklar, qiziqarli maqolalar
                  va o&apos;quv materiallarini muntazam ravishda olib turing.
                  Elektron pochtangiz spam uchun ishlatilmaydi.
                </p>
              </div>

              <div className="lg:col-span-2">
                <form className="space-y-2">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email manzil
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Elektron pochta manzilingiz"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full px-4 py-3 border border-transparent rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Obuna bo&apos;lish
                    </button>
                  </div>
                </form>
                <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  Obuna bo&apos;lib, siz bizning{" "}
                  <a
                    href="/privacy"
                    className="underline hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Maxfiylik siyosatimizga
                  </a>{" "}
                  rozilik bildirasiz.
                </p>
              </div>
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
