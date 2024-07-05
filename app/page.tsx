"use client";

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError('');
      // Add your form submission logic here
      console.log('Form submitted:', email);
    } else {
      setError('Please enter a valid email address.');
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <main className="bg-[rgba(2,3,16,0.95)] min-h-screen">
      <div className="text-center p-10 max-w-l mx-auto">
        <h1 className="text-gradient font-black text-[40px] mb-4">
          Sumffy: Personalized AI Activity App
        </h1>
        <p className="text-white font-medium text-[15px] mb-2">
          Get personalized activity suggestions and to-dos tailored to your goals and passion.
        </p>
        <p className="text-white font-medium text-[15px] mb-6">
          Stop worrying about what you should spend your time doing daily, weekly, or monthly -- Sumffy is here to help!
        </p>
        <h2 className="text-gradient font-bold text-[24px] mb-4">
          Join our waitlist to be one of the first early users by just inputting your email below.
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 p-7 lg:flex-row">
          <input
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-[#9195BE] rounded-lg bg-[#040514] w-[20rem] text-white"
          />
          <button
            type="submit"
            className="bg-gradient-to-r text-white p-2 rounded-lg font-bold text-[15px] transition"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </main>
  );
}
