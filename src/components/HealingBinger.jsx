import React from 'react';

export default function HealingBinger() {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-6 p-8">
      <h1 className="text-4xl text-[#F97316]">You’re a Healing Binger</h1>
      <p className="text-lg text-gray-300">
        You consume healing content like it’s oxygen — but don’t pause long enough to apply it. 
        Truth without application is just emotional entertainment.
      </p>
      <a 
        href="https://yourdomain.com/toolkit-binger.pdf" 
        className="inline-block mt-6 bg-[#F97316] text-black px-6 py-3 rounded font-semibold hover:bg-[#ea580c]"
      >
        Download Your Toolkit
      </a>
      <div className="mt-10 border-t border-gray-700 pt-6">
        <h2 className="text-2xl font-bold mb-2">🎯 Ready to go deeper?</h2>
        <p className="text-md text-gray-400 mb-4">
          Join the 21-Day Savage Sprint — a daily dose of self-confrontation to finally break your cycle.
        </p>
        <a 
          href="https://yourgumroad.com/savage-sprint" 
          className="inline-block bg-[#D946EF] text-white px-6 py-3 rounded hover:bg-[#c026d3]"
        >
          Start the Sprint →
        </a>
      </div>
    </div>
  );
}
