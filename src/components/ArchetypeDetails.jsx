import React from 'react';

const reportContent = {
  "The Tear-Bender": {
    sectionTitles: {
      secret: "Your Super Loud \"Secrets\"",
      pattern: "Your Pattern, Named",
      barrier: "The Real Reason You're Still Here"
    },
    intro: [
      "You call it healing.",
      "But really? You’ve perfected the art of emotional reruns.",
      "Every time the feelings creep in, you light a candle, cue the playlist, hit record on your voice note app…",
      "and boom — you're in your healing bag like Issa in Season Four of Insecure — still lighting candles over light skin with his (or her — it is 2025, and we got darkness to light up, you hear me?) light skin problems… or chocolate, whatever. Girl. You know who I’m talkin’ about.",
      "You're not being reborn. You're just rehearsing."
    ],
    pattern: [
      "You’re fluent in grief.",
      "You can narrate your sadness in three emotional languages — but what you avoid is the boring, bloodless obedience that doesn’t go viral.",
      "You hit that emotional climax like a scene you’ve rehearsed.",
      "You package pain like content — polished, poetic, and one heartbreak away from a caption.",
      "You’ve turned pain into your performance art… and every post is a plot twist that never ends in change.",
      "Be real: How many times have you cried over the same thing, only to text it back the next day?"
    ],
    barrier: [
      "You’ve built a healing identity that rewards breakdowns over breakthroughs.",
      "You journal like a prophet. You process like a poet. But peace? It feels too quiet. Too plain. Too... unbranded.",
      "So when stability knocks, you say you’re “not ready” — because pain is familiar, and peace doesn’t trend.",
      "Let’s keep it 100:",
      "You’ve cried over the same man three different playlists deep.",
      "You’ve mourned the situation — but kept the number.",
      "You’ve had an emotional epiphany… and still went.",
      "Do you feel lighter… or just more lyrically in touch with your dysfunction?"
    ],
    truth: [
      "You don’t need another emotional purge — you need the kind of discipline that doesn’t beg your feelings for permission.",
      "You’ve mistaken emotional depth for growth — but that’s just emotional gymnastics.",
      "Crying doesn’t equal clarity. Self-awareness doesn’t mean self-mastery. And feeling it? That’s not the flex. Doing it anyway is.",
      "You don’t need another catharsis. You need consistency that doesn’t need applause."
    ],
    way: [
      "Start building a life that doesn’t depend on emotional check-ins to feel real.",
      "Let your tears inform you — not lead you.",
      "Let your sadness speak — but don’t let it narrate.",
      "This next version of you doesn’t need a trigger warning or a trauma timestamp.",
      "She needs a quiet morning, an unchecked task list, and a holy kind of follow-through.",
      "What’s one truth you’ve written about 10 times that still hasn’t made it into your daily behavior?"
    ],
    challenge: [
      "For the next 3 days — no journaling.",
      "No caption-worthy clarity. No playlist-based purging. No “I’m just in my feels today.”",
      "Just action.",
      "Make the call. Block the number. Submit the application. Get out the bed. Start the fast.",
      "Let your soul shut up and move for once.",
      "You’ve cried enough. It’s time to shift."
    ]
  }
};

export default function ArchetypeDetails({ archetype }) {
  const content = reportContent[archetype];

  if (archetype !== 'The Tear-Bender') return null;

  return (
    <div className="max-w-4xl mx-auto bg-white text-black rounded-lg shadow-lg px-8 py-12 space-y-10 font-sans leading-relaxed">
      <h2 className="text-4xl font-extrabold text-orange-500 text-center uppercase tracking-wider">
        {archetype}
      </h2>

      <section>
        <h3 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-2 mb-4">
          {content.sectionTitles.secret}
        </h3>
        {content.intro.map((line, i) => (
          <p key={i} className="text-lg text-gray-700 mb-4">{line}</p>
        ))}
      </section>

      <section>
        <h3 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-2 mb-4">
          {content.sectionTitles.pattern}
        </h3>
        {content.pattern.map((line, i) => (
          <p key={i} className="text-lg text-gray-700 mb-4">{line}</p>
        ))}
      </section>

      <section>
        <h3 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-2 mb-4">
          {content.sectionTitles.barrier}
        </h3>
        {content.barrier.map((line, i) => (
          <p key={i} className="text-lg text-gray-700 mb-4">{line}</p>
        ))}
      </section>

      <section className="bg-orange-50 border-l-4 border-orange-500 p-6">
        <h3 className="text-xl font-bold text-orange-700 mb-3">Your Hard Truth</h3>
        {content.truth.map((line, i) => (
          <p key={i} className="text-gray-800 text-base mb-3">{line}</p>
        ))}
      </section>

      <section className="bg-gray-50 border-l-4 border-gray-400 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">Your Way Through</h3>
        {content.way.map((line, i) => (
          <p key={i} className="text-gray-800 text-base mb-3">{line}</p>
        ))}
      </section>

      <section className="bg-black text-white rounded-xl p-6 mt-6">
        <h3 className="text-xl font-bold text-white mb-3">Try This</h3>
        {content.challenge.map((line, i) => (
          <p key={i} className="text-white text-base mb-2">{line}</p>
        ))}
      </section>
    </div>
  );
}
