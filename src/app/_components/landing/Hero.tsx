"use client";
import Image from "next/image";
import CodeBlock from "@/components/CodeBlock";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 md:pr-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-100/80 backdrop-blur-sm text-blue-800 rounded-full text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              <span>Go Handbook for Uzbekistan</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
              Go tilini{" "}
              <span className="relative">
                <span className="relative z-10 text-blue-600">o&apos;zbek</span>
                <svg
                  className="absolute -bottom-1 -z-0 w-full"
                  viewBox="0 0 358 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C118.957 4.47226 242.456 -1.86658 355 9"
                    stroke="#93C5FD"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              tilida o&apos;rganing
            </h2>
            <p className="text-lg text-gray-600 mb-6 dark:text-white/50">
              Zamonaviy dasturlash tili Go yordamida kelajak dasturlarini
              yarating.{" "}
              <span className="bg-yellow-100 px-1 dark:text-gray-500 rounded">
                O&apos;zbekistonlik
              </span>{" "}
              dasturchilarga mo&apos;ljallangan qo&apos;llanma.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="relative group px-5 py-2.5 rounded-lg overflow-hidden">
                <span className="relative z-10 flex items-center gap-2 text-white font-medium">
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
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  O&apos;rganishni boshlang
                </span>
                <span className="absolute inset-0 bg-blue-600 group-hover:bg-blue-700 transition-colors duration-200"></span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
              <button className="relative group px-5 py-2.5 rounded-lg overflow-hidden border-2 border-gray-300 hover:border-blue-600 transition-colors">
                <span className="relative z-10 flex items-center gap-2 text-gray-700 font-medium dark:text-gray-100">
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
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  Video darslar
                </span>
              </button>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-blue-400 rounded-full blur-[120px] opacity-20"></div>
              <div className="absolute top-10 right-20 w-12 h-12 bg-yellow-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-20 h-20 bg-emerald-400 rounded-full blur-xl opacity-30 animate-pulse"></div>

              {/* Code block with parallax effect */}
              <div className="relative mx-auto max-w-lg transform hover:-rotate-1 hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-500/20 rounded-xl blur-xl transform -rotate-3"></div>
                <div className="p-3 bg-white rounded-xl shadow-xl border border-gray-100 relative z-10">
                  {/* Decorative code editor header */}
                  <CodeBlock
                    code={`package main

import (
    "fmt"
    "time"
)

func main() {
    go sayHello("O'zbekiston")
    time.Sleep(time.Second)
}

func sayHello(name string) {
    fmt.Printf("Salom, %s! 🚀\\n", name)
}`}
                    language="go"
                    theme="github-dark"
                  />
                </div>
              </div>

              {/* Decorative element - small pattern */}
              <div className="absolute -bottom-6 -right-6 p-3 bg-white rounded-xl shadow-md border border-gray-200 -rotate-6 transform hover:rotate-0 transition-transform z-20">
                <Image
                  src="/logo.jpeg"
                  width={60}
                  height={60}
                  alt="Uzbek Pattern"
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
