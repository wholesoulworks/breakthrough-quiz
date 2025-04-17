import React from 'react';
import AppRoutes from './Routes';

export default function App() {
 return (
  <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
    <div className="max-w-3xl text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-orange-500">
        What If It’s <span className="italic text-white">Not</span> Just a Block —<br />
        But a Trap You Keep Falling Into?
      </h1>

      <div className="text-lg md:text-xl leading-relaxed space-y-2 text-gray-300">
        <p>You’ve journaled. You’ve healed.</p>
        <p>You <span className="italic">speak fluent shadow work</span>.</p>
        <p>But you still feel stuck.</p>
        <p><span className="text-orange-400 font-medium">There’s a reason.</span><br />And it’s sneakier than you think.</p>
      </div>

      <p className="italic text-sm text-gray-500">
        This quiz is not a vibe check. It’s a mirror. And it’s about to call your bluff.
      </p>

      <button
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full text-lg shadow-lg transition duration-200 ease-in-out"
      >
        🔍 Reveal My Trap
      </button>
    </div>

    <div className="mt-16 max-w-xl text-left text-sm text-gray-400">
      <h2 className="text-base font-semibold text-white mb-2">This Quiz Is For You If…</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>You’ve done the inner work but your patterns still repeat</li>
        <li>You crave raw, God-truth clarity — not fluffy affirmations</li>
        <li>You’re exhausted by your own emotional reruns</li>
        <li>You’re willing to be uncomfortable if it means you’ll grow</li>
        <li>You secretly fear you’re the reason you’re still stuck</li>
      </ul>
    </div>
  </main>
);
