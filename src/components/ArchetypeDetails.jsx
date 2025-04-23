import React from 'react';

const reportContent = {
  "The Tear-Bender": {
    sectionTitles: {
      secret: "Your Super Loud \"Secrets\"",
      pattern: "Your Pattern, Named",
      barrier: "The Real Reason You're Still Here",
      challenge: "The Exit You’ve Been Journaling About Is Right Here."
    },
    intro: [...],
    pattern: [...],
    barrier: [...],
    truth: [...],
    way: [...],
    challenge: [...]
  },
  "The Hyperaware Hostage": {
    sectionTitles: {
      secret: "Your Super Loud \"Secrets\"",
      pattern: "Your Pattern, Named",
      barrier: "The Real Reason You're Still Here",
      challenge: "The Exit You’ve Been Journaling About Is Right Here."
    },
    intro: [...],
    pattern: [...],
    barrier: [...],
    truth: [...],
    way: [...],
    challenge: [...]
  },
  "The Fat Soul with Starving Feet": {
    sectionTitles: {
      secret: "Your Super Loud \"Secrets\"",
      pattern: "Your Pattern, Named",
      barrier: "The Real Reason You're Still Here",
      challenge: "The Exit You’ve Been Journaling About Is Right Here."
    },
    intro: [...],
    pattern: [...],
    barrier: [...],
    truth: [...],
    way: [...],
    challenge: [...]
  }
};

export default function ArchetypeDetails({ archetype }) {
  const content = reportContent[archetype];
  if (!content) return null;

  return (
    <div className="max-w-4xl mx-auto bg-white text-black rounded-lg shadow-lg px-8 py-14 space-y-12 font-sans leading-relaxed">
      <h2 className="text-5xl font-black text-orange-500 text-center uppercase tracking-widest">
        {archetype}
      </h2>

      <section>
        <h3 className="text-2xl font-extrabold text-gray-900 border-b-2 border-orange-300 pb-2 mb-6 tracking-tight">
          {content.sectionTitles.secret}
        </h3>
        {content.intro.map((line, i) => (
          <p key={i} className="text-lg text-gray-700 mb-4 leading-7">{line}</p>
        ))}
      </section>

      <section className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-2xl font-extrabold text-gray-900 border-b border-gray-300 pb-2 mb-4">
          {content.sectionTitles.pattern}
        </h3>
        {content.pattern.map((line, i) => (
          <p key={i} className="text-lg text-gray-700 mb-4 leading-7">{line}</p>
        ))}
      </section>

      <section className="bg-orange-50 p-6 rounded-xl">
        <h3 className="text-2xl font-extrabold text-orange-700 border-b border-orange-300 pb-2 mb-4">
          {content.sectionTitles.barrier}
        </h3>
        {content.barrier.map((line, i) => (
          <p key={i} className="text-gray-800 text-base mb-3 leading-7">{line}</p>
        ))}
      </section>

      <section className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-yellow-800 mb-3 uppercase">Your Hard Truth</h3>
        {content.truth.map((line, i) => (
          <p key={i} className="text-gray-800 text-base mb-3 leading-6">{line}</p>
        ))}
      </section>

      <section className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-blue-800 mb-3 uppercase">Your Way Through</h3>
        {content.way.map((line, i) => (
          <p key={i} className="text-gray-800 text-base mb-3 leading-6">{line}</p>
        ))}
      </section>

      <section className="bg-black text-white rounded-xl p-6 mt-6 shadow-md">
        <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
          {content.sectionTitles.challenge}
        </h3>
        {content.challenge.map((line, i) => (
          <p key={i} className="text-white text-base mb-2 leading-6">{line}</p>
        ))}
      </section>

      <section className="bg-white text-center mt-10">
        <h3 className="text-2xl font-extrabold text-orange-600 mb-4">Ready to Actually Move?</h3>
        <p className="text-gray-700 text-base max-w-xl mx-auto mb-6">
          If this called you out — the Toolkit will walk you out. The <strong>Savage Interruption Invitation</strong> is a 30-day digital weapon for people who don’t want another feel-good worksheet… they want to actually change.
        </p>
        <a
          href="https://yourtoolkitpage.com" // replace with your Gumroad URL
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 rounded-full text-lg shadow-lg transition"
        >
          Grab the Toolkit Now
        </a>
      </section>
    </div>
  );
}
