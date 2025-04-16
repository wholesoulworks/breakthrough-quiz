import React, { useState } from 'react';

const questions = [
  {
    question: "What’s your low-key self-work confession?",
    answers: {
      A: "Sometimes crying *is* my action plan.",
      B: "I can quote my patterns better than I can change them.",
      C: "Watching healing reels *feels* like I'm doing the work."
    }
  },
  {
    question: "When emotional overwhelm hits, which feels most comforting?",
    answers: {
      A: "Releasing it through writing or crying",
      B: "Naming it with a known pattern (like anxious attachment)",
      C: "Finding content that reminds me I’m not alone"
    }
  },
  {
    question: "Which of these gives you a sense of “control” in your growth?",
    answers: {
      A: "Getting the feelings out — even if it’s chaotic",
      B: "Understanding the label or type behind what I’m feeling",
      C: "Seeing others express what I can’t articulate yet"
    }
  },
  {
    question: "What quietly scares you most about going all-in with healing?",
    answers: {
      A: "Discovering how often I’ve avoided honest self-truth",
      B: "Losing the comfort of knowing who I am through my labels",
      C: "Facing the silence where content can’t distract me anymore"
    }
  },
  {
    question: "Be honest — what best describes your journaling habit?",
    answers: {
      A: "I pour it all out but rarely read it back",
      B: "I edit myself through the lens of my “type” or identity",
      C: "I journal inconsistently — healing content feels like enough"
    }
  },
  {
    question: "Which of these lines hits you in the chest — even if you don’t want it to?",
    answers: {
      A: "“Release doesn’t guarantee renewal.”",
      B: "“You’re not your label. You’re who you’re becoming.”",
      C: "“You’ve consumed the truth. But you’ve delayed obeying it.”"
    }
  },
  {
    question: "When you imagine the healthiest version of you, what stands out most?",
    answers: {
      A: "She feels deeply — but isn’t run by her feelings",
      B: "She’s self-aware, clear, and deeply known",
      C: "She applies what she knows — even when it’s uncomfortable"
    }
  }
];

const archetypes = {
  A: 'Emotional Drowner',
  B: 'Label Lover',
  C: 'Healing Binger'
};

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (choice) => {
    setAnswers([...answers, choice]);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate most frequent answer
      const tally = answers.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, { [choice]: 1 });
      const final = Object.entries(tally).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
      setResult(final);
    }
  };

  if (result) {
    const type = archetypes[result];
    const reveal = {
      'Emotional Drowner': "You confuse emotional honesty with transformation. Feeling isn’t the finish line — facing the truth is.",
      'Label Lover': "You name your patterns perfectly — but describing dysfunction isn’t disrupting it.",
      'Healing Binger': "You’ve consumed the truth. But you delay obeying it. Awareness isn’t embodiment."
    };
    return (
     <div>
  <form
    onSubmit={(e) => {
      e.preventDefault();
      // Redirect user after fake email capture
      if (type === 'Emotional Drowner') window.location.href = '/emotional-drowner';
      else if (type === 'Label Lover') window.location.href = '/label-lover';
      else window.location.href = '/healing-binger';
    }}
    className="space-y-4"
  >
    <input
      type="email"
      required
      placeholder="Enter your email"
      className="w-full px-4 py-3 rounded bg-[#1A1A1A] border border-gray-700 text-white placeholder-gray-500"
    />
    <button
      type="submit"
      className="w-full bg-[#F97316] text-black py-3 rounded hover:bg-[#ea580c]"
    >
      Send Me the Toolkit
    </button>
  </form>
</div>

    );
  }

  const current = questions[step];
  return (
    <div className="max-w-xl w-full space-y-8">
      <h1 className="text-4xl font-bold text-center text-[#F97316]">What’s Secretly Sabotaging Your Self-Work?</h1>
      {step === 0 && (
        <div className="text-gray-300 text-sm text-center leading-relaxed space-y-4">
          <p>👋 Welcome, Beautiful Mess.</p>
          <p>You’ve journaled. You’ve cried. You’ve reposted all the right quotes. You *know* the lingo — shadow work, boundaries, healing, patterns. But somewhere between the “aha!” and the actual change… you get stuck.</p>
          <p>This quiz won’t fix you. But it *will* expose the trap you’ve been calling growth.</p>
          <p>No sugar. No shame. Just surgical truth and a mirror you can’t scroll past.</p>
          <p>Let’s find the block before it costs you your breakthrough.</p>
        </div>
      )}
      <div className="bg-[#1A1A1A] p-6 rounded shadow-lg">
        <h2 className="text-2xl mb-4">{current.question}</h2>
        <div className="space-y-3">
          {Object.entries(current.answers).map(([key, text]) => (
            <button
              key={key}
              onClick={() => handleAnswer(key)}
              className="block w-full bg-[#333] hover:bg-[#F97316] hover:text-black px-4 py-3 rounded text-left"
            >
              <strong>{key}.</strong> {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
