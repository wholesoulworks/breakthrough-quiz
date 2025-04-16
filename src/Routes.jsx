import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz';
import EmotionalDrowner from './components/EmotionalDrowner';
import LabelLover from './components/LabelLover';
import HealingBinger from './components/HealingBinger';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/emotional-drowner" element={<EmotionalDrowner />} />
        <Route path="/label-lover" element={<LabelLover />} />
        <Route path="/healing-binger" element={<HealingBinger />} />
      </Routes>
    </Router>
  );
}
