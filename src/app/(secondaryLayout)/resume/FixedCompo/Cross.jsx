



"use client";
import { useDispatch } from 'react-redux';
import { returnHome } from '../../../(mainlayout)/Redux/counter/pageTransitionSlice';
import { useRouter } from 'next/navigation';
import {  useState } from 'react';

const Resume = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    dispatch(returnHome());
    setTimeout(() => {
      router.push('/');
    }, 300);
  };

  return (
    <div
      className={`relative px-4 sm:px-6 md:px-10 py-6  bg-black text-white transition-all ${
        closing ? 'animate-fadeOut' : 'animate-fadeIn'
      }`}
    >
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white text-xl bg-black px-3 py-1 rounded-full hover:bg-white hover:text-black transition"
      >
        ❌
      </button>

      {/* Resume Content */}
      <div className="max-w-5xl mx-auto pt-10">
        {/* Add your resume content here */}
      </div>
    </div>
  );
};

export default Resume;
