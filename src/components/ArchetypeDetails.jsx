import React from 'react';

const reportContent = {
  "The Tear-Bender": {
    color: "text-orange-400",
    intro: "You feel everything — and your tears are sacred. But you’ve turned crying into a lifestyle.",
    truth: "You’ve mastered emotional release but avoided internal rebuilding.",
    shift: "Your next level won’t come from deeper catharsis — but from disciplined obedience.",
    reminder: "You don’t have to feel healed to move in truth.",
  },
  "The Hyperaware Hostage": {
    color: "text-purple-400",
    intro: "You know your cycles. You’ve named them. But you’ve stayed loyal to the label, not the breakthrough.",
    truth: "You’ve confused identity with insight — and insight isn’t the same as freedom.",
    shift: "This isn’t about better understanding. It’s about surrendering the self you’ve constructed.",
    reminder: "God’s truth rewrites what your trauma narrated.",
  },
  "The Fat Soul with Starving Feet": {
    color: "text-pink-400",
    intro: "You’ve consumed the truth. You’ve reposted the truth. But you haven’t walked it out.",
    truth: "Revelation without response has bloated your soul and paralyzed your obedience.",
    shift: "You don’t need more content — you need conviction, clarity, and consistent action.",
    reminder: "He didn’t say, 'understand Me.' He said, 'Follow Me.'",
  },
};

export default function ArchetypeDetails({ archetype }) {
  const info = reportContent[archetype];

  return (
    <div className="max-w-3xl mx-auto text-center mt-20 space-y-6 px-4">
      <h2 className={`text-4xl font-bold ${info.color}`}>{archetype}</h2>
      <p className="text-lg text-gray-300 italic">{info.intro}</p>
      <div className="text-left text-base text-gray-400 space-y-4 mt-8">
        <p><span className="text-white font-bold">🔍 The Honest Truth:</span> {info.truth}</p>
        <p><span className="text-white font-bold">⛓️ What’s Keeping You Stuck:</span> {info.shift}</p>
        <p><span className="text-white font-bold">📿 Spiritual Reminder:</span> {info.reminder}</p>
      </div>

      {/* Optional CTA */}
      <div className="mt-10">
        <a
          href="#"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 rounded-full text-lg transition"
        >
          🛠️ Unlock the Savage Self-Awareness Toolkit
        </a>
      </div>
    </div>
  );
}

