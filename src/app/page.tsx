"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 animate-gradient opacity-50 -z-10" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h1 
          className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient ${
            mounted ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          Andrew Li
        </h1>
        <h2 
          className={`text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6 ${
            mounted ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          Software Engineer
        </h2>
        <p 
          className={`text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed ${
            mounted ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          I&apos;m a passionate software engineer interested in fintech, mobile application development, and AI applications. 
          I love building clean solutions to complex problems and creating seemless user experiences.
        </p>
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center ${
            mounted ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.7s" }}
        >
          <Link 
            href="/projects"
            className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link 
            href="/Andrew_Li_Resume.pdf"
            target="_blank"
            className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Download Resume
          </Link>
          <Link 
            href="/contact"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg relative overflow-hidden group"
          >
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity" />
          </Link>
        </div>
      </div>
    </div>
  );
}
