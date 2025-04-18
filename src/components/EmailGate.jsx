import React, { useState } from 'react';
import ArchetypeDetails from './ArchetypeDetails';

export default function EmailGate({ archetype }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 py-16 font-sans">
      <div className="max-w-xl w-full space-y-6 text-center">
        {submitted ? (
          <ArchetypeDetails archetype={archetype} />
        ) : (
          <>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500">
              Enter your email to unlock your full breakdown
            </h2>

            <p className="text-base md:text-lg text-gray-300">
              You’ll get access to the full report for <span className="font-semibold">{archetype}</span>, plus the Savage Self-Awareness Toolkit 🔥
            </p>

            <form
              action="https://formsubmit.co/YOUR@EMAIL.COM"
              method="POST"
              className="space-y-4 mt-6"
              onSubmit={() => setSubmitted(true)}
            >
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none text-base"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded-full text-lg transition"
              >
                Send It Over 🔓
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
