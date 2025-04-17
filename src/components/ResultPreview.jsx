import React from 'react';

const resultTeasers = {
  "The Tear-Bender": {
    color: "text-orange-400",
    lines: [
      "You’re the Tear-Bender.",
      "Here’s the part no one else says out loud:",
      "You’ve mastered the art of emotional release — but lowkey, it’s become your hiding place.",
      "Crying feels productive. Journaling feels like movement. But you and I both know… you’ve been circling.",
      "So here’s your quiet truth:",
      "Are you really processing — or are you just postponing?"
    ]
  },
  "The Hyperaware Hostage": {
    color: "text-purple-400",
    lines: [
      "You’re the Hyperaware Hostage.",
      "I’ll tell you what I see — and it might sting a little:",
      "You know too much to be this stuck.",
      "You’ve collected every term, diagnosis, pattern, type…",
      "But at some point, “understanding yourself” became your favorite excuse not to become someone new.",
      "So let me ask:",
      "Are you healing — or are you just hoarding insight?"
    ]
  },
  "The Fat Soul with Starving Feet": {
    color: "text-pink-400",
    lines: [
      "You’re the Fat Soul with Starving Feet.",
      "You’ve consumed enough truth to change your life ten times over.",
      "But here’s the secret you don’t say out loud:",
      "You’re overfed on insight… and undernourished in action.",
      "You’re not lazy. You’re not unaware. You’re just full of reasons not to move.",
      "So here’s your wake-up whisper:",
      "Are you still learning — or are you just delaying obedience?"
    ]
  }
};

export default function ResultPreview({ archetype, onEmailGateTrigger }) {
  const teaser = resultTeasers[archetype];

  return (
    <div className="max-w-2xl mx-auto text-center mt-20 space-y-6 px-4">
      <h2 className={`text-3xl md:text-4xl font-bold ${teaser.color}`}>
        {archetype}
      </h2>

      <div className="text-left text-lg md:text-xl text-gray-300 space-y-4 mt-6">
        {teaser.lines.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>

      <div className="mt-10">
        <button
          onClick={onEmailGateTrigger}
          className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full text-lg shadow-lg transition duration-200 ease-in-out"
        >
          Unlock My Full Breakdown 🔓
        </button>
        <p className="text-xs text-gray-500 mt-2">
          (It’s short. It’s savage. And it might be the realest thing you’ve read all year.)
        </p>
      </div>
    </div>
  );
}
