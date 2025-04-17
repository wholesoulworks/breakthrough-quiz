import React from 'react';

function App() {
  const handleStartClick = () => {
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-orange-500">
            What If It’s <span className="italic text-white">Not</span> Just a Block —<br />
            But a Trap You Keep Falling Into?
          </h1>

          <div className="text-lg md:text-xl leading-relaxed space-y-2 text-gray-300">
            <p>You’ve journaled. You’ve healed.</p>
            <p>You <span className="italic">speak fluent shadow work</span>.</p>
            <p>But you still feel stuck.</p>
            <p><span className="text-orange-400 font-medium">There’s a reason.</span><br />(And it’s sneakier than you think!)</p>
          </div>

          <p className="italic text-sm text-gray-500">
            This quiz is not a vibe check. It’s a mirror. And it’s about to call your bluff.
          </p>

          <button
            onClick={handleStartClick}
            className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full text-lg shadow-lg transition duration-200 ease-in-out"
          >
            🔍 Reveal My Trap
          </button>
        </div>
      </section>

      {/* “This Quiz Is For You If…” Section */}
      <section className="mt-10 max-w-xl mx-auto px-6 text-left text-sm text-gray-400">
        <h2 className="text-base font-semibold text-white mb-2">This Quiz Is For You If…</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>You’ve done the inner work but your patterns still repeat</li>
          <li>You crave raw, God-truth clarity — not fluffy affirmations</li>
          <li>You’re exhausted by your own emotional reruns</li>
          <li>You’re willing to be uncomfortable if it means you’ll grow</li>
          <li>You secretly fear you’re the reason you’re still stuck</li>
        </ul>
      </section>

      {/* Quiz Placeholder */}
      <section id="quiz" className="py-24 text-center">
        <p className="text-white-500 italic">[ 👇 The quiz will live here — coming up next ]</p>
      </section>
    </div>
  );
}

export default App;
