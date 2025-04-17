import React, { useState } from 'react';
import Quiz from './components/Quiz';
import ResultPreview from './components/ResultPreview';
import EmailGate from './components/EmailGate';

function App() {
  const [started, setStarted] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [result, setResult] = useState(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {!started && (
       <section className="h-screen flex flex-col items-center justify-center px-6 text-center space-y-8">
  <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-orange-500">
    What If It’s <span className="italic text-white">Not</span> Just a Block —
    <br />But a Trap You Keep Falling Into?
  </h1>

  <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
    This quiz isn’t a vibe check. It’s a mirror. You’ve healed, reflected, journaled... but what if that’s not what’s keeping you stuck?
  </p>

  <button
    onClick={() => setStarted(true)}
    className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full text-xl shadow-xl transition"
  >
    🔍 Begin Quiz
  </button>

  <div className="mt-10 text-left text-gray-400 text-sm md:text-base">
    <h2 className="text-white font-semibold text-center mb-2 text-base md:text-lg">This Quiz Is For You If…</h2>
    <ul className="list-disc list-inside space-y-1 max-w-md mx-auto">
      <li>You’ve journaled, healed, and reflected — but still feel stuck</li>
      <li>You use phrases like “as someone with…” but aren’t changing</li>
      <li>You know the cycles, the terms, the patterns — and you’re still in them</li>
      <li>You bounce between breakthroughs and burnout</li>
      <li>You’re emotionally self-aware — but spiritually exhausted</li>
      <li>You crave unfiltered truth more than soft motivation</li>
      <li>You’re not afraid to be called out… you’re afraid to waste more time</li>
    </ul>
  </div>
</section>
      )}

      {started && !quizComplete && (
        <Quiz onComplete={(res) => {
          setResult(res);
          setQuizComplete(true);
        }} />
      )}

      {quizComplete && !emailSubmitted && (
        <ResultPreview
          archetype={result}
          onEmailGateTrigger={() => setEmailSubmitted(true)}
        />
      )}

      {quizComplete && emailSubmitted && (
        <EmailGate archetype={result} />
      )}
    </div>
  );
}

export default App;
