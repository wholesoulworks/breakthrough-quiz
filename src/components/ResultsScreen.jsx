import React from 'react';

export default function ResultsScreen({ result, description }) {
  return (
    <div className="w-full max-w-3xl mx-auto text-center p-8">
      <div className="inline-block mb-6 p-3 bg-orange-100 rounded-full">
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
      </div>
      <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
        You're a <span className="text-orange-500 font-normal">{result}</span>
      </h1>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">{description}</p>
      <a
        href="https://yoursite.com/toolkit"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-10 py-4 text-lg rounded bg-orange-500 hover:bg-orange-600 text-white transition-colors"
      >
        Get Your Personalized Toolkit
      </a>
    </div>
  );
}
