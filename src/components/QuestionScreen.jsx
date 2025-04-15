import React from 'react';

export default function QuestionScreen({ question, options, selectedAnswer, onAnswerSelect, onNext }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-2xl md:text-3xl font-light text-gray-800 mb-8 max-w-2xl">{question}</h2>
      <div className="w-full max-w-xl space-y-4 mb-10">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => onAnswerSelect(option.id, option.archetype)}
            className={`p-5 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:border-orange-500 ${
              selectedAnswer === option.archetype ? 'border-orange-500 bg-orange-50' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                  selectedAnswer === option.archetype ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-500'
                }`}
              >
                {option.id}
              </div>
              <span className="text-lg text-gray-700 text-left">{option.text}</span>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={onNext}
        disabled={!selectedAnswer}
        className="px-10 py-4 text-lg rounded bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
}
