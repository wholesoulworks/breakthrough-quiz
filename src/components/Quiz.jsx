import React, { useState } from 'react';

const questions = [
  {
    text: "What’s your low-key self-work confession?",
    options: {
      A: "Sometimes crying is my action plan.",
      B: "I can quote my patterns better than I can change them.",
      C: "Watching healing reels feels like I'm doing the work.",
    },
  },
  {
    text: "When emotional overwhelm hits, which feels most comforting?",
    options: {
      A: "Releasing it through writing or crying",
      B: "Naming it with a known pattern (like anxious attachment)",
      C: "Finding content that reminds me I’m not alone",
    },
  },
  {
    text: "Which of these gives you a sense of 'control' in your growth?",
    options: {
      A: "Getting the feelings out — even if it’s chaotic",
      B: "Understanding the label or type behind what I’m feeling",
      C: "Seeing others express what I can’t articulate yet",
    },
  },
  {
    text: "What quietly scares you most about going all-in with healing?",
    options: {
      A: "Discovering how often I’ve avoided honest self-truth",
      B: "Losing the comfort of knowing who I am through my labels",
      C: "Facing the silence where content can’t distract me anymore",
    },
  },
  {
    text: "Be honest — what best describes your journaling habit?",
    options: {
      A: "I pour it all out but rarely read it back",
      B: "I edit myself through the lens of my 'type' or identity",
      C: "I journal inconsistently — healing content feels like enough",
    },
  },
  {
    text: "Which of these lines hits you in the chest — even if you don’t want it to?",
    options: {
      A: "“Release doesn’t guarantee renewal.”",
      B: "“You’re not your label. You’re who you’re becoming.”",
      C: "“You’ve consumed the truth. But you’ve delayed obeying it.”",
    },
  },
  {
    text: "When you imagine the healthiest version of you, what stands out most?",
    options: {
      A: "She feels deeply — but isn’t run by her feelings",
      B: "She’s self-aware, clear, and deeply known",
      C: "She applies what she knows — even when it’s uncomfortable",
    },
  },
  {
    text: "Curveball: You finally had a breakthrough. What’s your first move?",
    options: {
      A: "Cry, process, share it with my journal",
      B: "Analyze what part of me needed that win",
      C: "Scroll for more healing quotes to screenshot",
    },
  },
];

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
