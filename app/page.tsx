"use client";

import { useState } from 'react';
import { sendEmail } from '@/actions/email.action';
import Modal from '@/components/Modal';
import Link from 'next/link';

export default function Home() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [disable, setDisable] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean | null>(false);

  const handleCloseModal = () => {
    setIsModalOpen(null);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError('');
      setDisable(true);
      // Add your form submission logic here
      const response = await sendEmail({ email: email })
      if (response) {
        setIsModalOpen(true);
        setDisable(false);
      } else {
        setError("Invalid email. Please try again");
        setDisable(false);
      }
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
      <div className="text-center p-10 max-w-l mx-auto pt-[8rem] md:pt-[13rem]">
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
            disabled={disable}
            className="p-2 border border-[#9195BE] rounded-lg bg-[#040514] w-[20rem] text-white"
          />
          <button
            type="submit"
            disabled={disable}
            className="bg-gradient-to-r text-white p-2 rounded-lg font-bold text-[15px] transition"
          >
            Join Waitlist
          </button>
        </form>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="text-center mx-auto">
          <h1 className='text-[32px] font-bold m-3'>Hooray! 🎉</h1>
          <p className='text-[24px] font-medium m-3'>You're in!</p>
          <p className='text-[24px] font-medium m-3'>Join our WhatsApp Community so that you don't miss any update!</p>
          <Link href="https://chat.whatsapp.com/IjwXpAeullwIZvH1cewRKc">
            <button
              type="submit"
              className="bg-gradient-to-r text-white p-2 rounded-lg font-bold text-[15px] mt-3 transition"
            >
              Join Community
            </button>
          </Link>
        </div>
      </Modal>
    </main>
  );
}
