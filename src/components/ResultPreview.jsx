import React from 'react';

const resultTeasers = {
  'The Tear-Bender': {
    vibe: "You’re not just emotional — you’re stuck in a sacred loop that’s no longer healing you.",
    color: 'text-orange-400',
  },
  'The Hyperaware Hostage': {
    vibe: "You know the cycle. You name the cycle. You *are* the cycle — but you’re not meant to stay here.",
    color: 'text-purple-400',
  },
  'The Fat Soul with Starving Feet': {
    vibe: "You’ve learned everything except what obedience feels like.",
    color: 'text-pink-400',
  }
};

export default function ResultPreview({ archetype, onEmailGateTrigger }) {
  const teaser = resultTeasers[archetype];

  return (
    <div className="max-w-2xl mx-auto text-center mt-20 space-y-6">
      <h2 className={`text-3xl font-bold ${teaser.color}`}>
        You got: {archetype}
      </h2>
      <p className="text-gray-300 italic">{teaser.vibe}</p>
      <p className="text-sm text-gray-500">
        Your result breakdown is ready. It’s personal, disruptive, and loving — just like you need.
      </p>
      <button
        onClick={onEmailGateTrigger}
        className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full text-lg shadow-lg transition duration-200 ease-in-out"
      >
        Unlock My Full Mini-Report 🔓
      </button>
    </div>
  );
}
