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
      B: "“You’re not your label. You’re
