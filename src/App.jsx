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

