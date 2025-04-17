import React, { useState } from 'react';

const questions = [/* your existing questions array */];

const archetypeMap = {
  A: "The Tear-Bender",
  B: "The Hyperaware Hostage",
  C: "The Fat Soul with Starving Feet",
};

export default function Quiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const totalQuestions = questions.length;
  const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswer = (letter) => {
    const updated = [...answers, letter];
    setAnswers(updated);

    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const counts = { A: 0, B: 0, C: 0 };
      updated.forEach((ans) => counts[ans]++);
      const max = Object.entries(counts).reduce((a, b) => (a[1] >= b[1] ? a : b));
      const result = archetypeMap[max[0]];
      onComplete(result);
    }
  };

  const q = questions[currentQuestion];

  return (
    <div className="h-screen flex flex-col justify-center items-center px-6 text-center space-y-10">
      {/* Progress Bar */}
      <div className="w-full max-w-xl mb-4">
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div
            className="bg-orange-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Question {currentQuestion + 1} of {totalQuestions}
        </p>
      </div>

      {/* Question */}
      <h2 className="text-2xl md:text-3xl font-bold text-white max-w-4xl leading-snug">
        {q.text}
      </h2>

      {/* Answers */}
      <div className="w-full max-w-2xl flex flex-col gap-4 mt-4">
        {Object.entries(q.options).map(([key, value]) => (
          <button
            key={key}
            onClick={() => handleAnswer(key)}
            className="w-full py-5 px-6 text-lg font-medium bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 rounded-xl transition-all duration-200"
          >
            <span className="font-bold mr-2">{key})</span> {value}
          </button>
        ))}
      </div>
    </div>
  );
}
