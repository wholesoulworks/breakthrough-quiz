import React, { useState } from 'react';

export default function EmailGate({ archetype }) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Hook to Tally, FormSubmit, or backend email logic
    console.log(`Captured email: ${email} | Archetype: ${archetype}`);
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto mt-16 text-center space-y-6">
      {!submitted ? (
        <>
          <p className="text-gray-300 text-lg">Enter your email to unlock your full breakdown + receive the Savage Self-Awareness Toolkit 💥</p>
     <form
  action="https://formsubmit.co/your@email.com"
  method="POST"
  className="space-y-4"
>
  <input type="hidden" name="_captcha" value="false" />
  <input
    type="email"
    name="email"
    required
    placeholder="you@email.com"
    className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
  />
  <button
    type="submit"
    className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 rounded transition"
  >
    Send Me the Report 🔥
  </button>
</form>
        </>
      ) : (
        <p className="text-green-400 font-semibold">
          🔥 Check your inbox — your full result is on its way!
        </p>
      )}
    </div>
  );
}
