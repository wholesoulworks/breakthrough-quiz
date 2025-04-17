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
          <p className="text-xl text-gray-300 max-w-2xl">
            This quiz isn’t a vibe check. It’s a mirror. You’ve healed, reflected, journaled... but what if that’s not what’s keeping you stuck?
          </p>
          <button
            onClick={() => setStarted(true)}
            className="mt-6 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-full text-xl shadow-xl transition"
          >
            🔍 Begin Quiz
          </button>
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
