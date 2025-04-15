import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import QuestionScreen from './QuestionScreen';
import ResultsScreen from './ResultsScreen';

const questions = [
  {
    id: 1,
    question: "When emotions hit hard, what do you usually do?",
    options: [
      { id: 'A', text: "I journal and cry until it passes — I just need to *feel it through*", archetype: 'Emotional Drowner' },
      { id: 'B', text: "I mentally name what’s happening — ‘This is my trauma/attachment/MBTI showing again’", archetype: 'Label Lover' },
      { id: 'C', text: "I scroll healing content or find a post that makes me feel seen", archetype: 'Healing Binger' }
    ]
  },
  {
    id: 2,
    question: "What actually makes you feel 'safe' in your healing journey?",
    options: [
      { id: 'A', text: "Letting it all out, even if I never circle back to what I wrote or said", archetype: 'Emotional Drowner' },
      { id: 'B', text: "Having a framework or label to help explain myself", archetype: 'Label Lover' },
      { id: 'C', text: "Watching people talk about healing so I don’t feel alone", archetype: 'Healing Binger' }
    ]
  },
  {
    id: 3,
    question: "When you think about your growth, what truth hits the hardest?",
    options: [
      { id: 'A', text: "I thought I’d healed — until a repeat situation exposed I hadn’t", archetype: 'Emotional Drowner' },
      { id: 'B', text: "I’ve evolved how I talk about my issues, but not how I show up in them", archetype: 'Label Lover' },
      { id: 'C', text: "I’ve convinced myself watching growth content counts as growing", archetype: 'Healing Binger' }
    ]
  },
  {
    id: 4,
    question: "Be honest: How do you actually use journaling?",
    options: [
      { id: 'A', text: "I dump emotions out like a release valve, but don’t challenge what I write", archetype: 'Emotional Drowner' },
      { id: 'B', text: "I analyze my entries through the lens of my personality/trauma/attachment type", archetype: 'Label Lover' },
      { id: 'C', text: "I start journaling, but give up when I don’t feel instant clarity", archetype: 'Healing Binger' }
    ]
  },
  {
    id: 5,
    question: "Which of these confessions feels the most like a punch to your pride?",
    options: [
      { id: 'A', text: "I thought journaling and crying meant I was growing — but I was just venting", archetype: 'Emotional Drowner' },
      { id: 'B', text: "I’ve used self-awareness to dodge the fact that I’m still messy and imperfect", archetype: 'Label Lover' },
      { id: 'C', text: "I sound like someone who’s healed — but live like someone who’s still hiding", archetype: 'Healing Binger' }
    ]
  },
  {
    id: 6,
    question: "Which one of these phrases lowkey makes you defensive?",
    options: [
      { id: 'A', text: "Feeling your feelings isn’t the same as healing them.", archetype: 'Emotional Drowner' },
      { id: 'B', text: "You’re not your trauma, your sign, or your story.", archetype: 'Label Lover' },
      { id: 'C', text: "You don’t need more insight. You need more action.", archetype: 'Healing Binger' }
    ]
  },
  {
    id: 7,
    question: "What’s the version of you you say you’re becoming — but secretly doubt you’ll reach?",
    options: [
      { id: 'A', text: "Someone emotionally unshakable and honest", archetype: 'Emotional Drowner' },
      { id: 'B', text: "Someone who can finally explain who they are", archetype: 'Label Lover' },
      { id: 'C', text: "Someone who doesn’t need content to stay accountable", archetype: 'Healing Binger' }
    ]
  }
];

const descriptions = {
  'Emotional Drowner': "You confuse emotional honesty with transformation. Feeling isn’t the finish line — facing the truth is. It’s time to confront your patterns like your life depends on it.",
  'Label Lover': "You use labels to describe your dysfunction — instead of disrupt it. You’re not your diagnosis — you’re who you choose to become next.",
  'Healing Binger': "You consume healing content — but avoid obedience. You’ve confused exposure with embodiment. You don’t need more insight. You need disruption."
};

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState('');

  const handleAnswer = (optionId, archetype) => {
    const updated = [...answers];
    updated[step] = archetype;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const count = answers.reduce((acc, archetype) => {
        acc[archetype] = (acc[archetype] || 0) + 1;
        return acc;
      }, {});
      const final = Object.entries(count).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
      setResult(final);
    }
  };

  if (result) {
    return <ResultsScreen result={result} description={descriptions[result]} />;
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <ProgressBar progress={((step + 1) / questions.length) * 100} />
      <QuestionScreen
        question={questions[step].question}
        options={questions[step].options}
        selectedAnswer={answers[step] || ''}
        onAnswerSelect={handleAnswer}
        onNext={handleNext}
      />
    </div>
  );
}
