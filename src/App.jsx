import React, { useState } from 'react';
import Quiz from './components/Quiz';
import ResultPreview from './components/ResultPreview';
import EmailGate from './components/EmailGate';

function App() {
  const [quizComplete, setQuizComplete] = useState(false);
  const [result, setResult] = useState(null);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

 return (
  <div className="bg-black min-h-screen text-white font-sans px-6 py-12">
    {!quizComplete && (
      <>
        {/* Hero Landing Section */}
        <section className="text-center max-w-3xl mx-auto space-y-6 mb-16">
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
        </section>

        <Quiz onComplete={(res) => {
          setResult(res);
          setQuizComplete(true);
        }} />
      </>
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
  );
}

export default App;

