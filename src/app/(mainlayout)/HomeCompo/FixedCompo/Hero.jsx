



"use client";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleText } from '../../Redux/counter/heroTextSlice';
import { toggleLanguage } from '../../Redux/counter/langugeSlice';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  const dispatch = useDispatch();
  const { texts, index } = useSelector((state) => state.heroText);
  const currentLanguage = useSelector((state) => state.language.current);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        dispatch(toggleText());
        setVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://news.cnrs.fr/sites/default/files/styles/visuel_principal/public/assets/images/adobestock_290833398_72dpi.jpg)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center px-4 sm:px-6 md:px-10">
          <div className="max-w-md mx-auto">
            <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl font-bold">Moynul Islam</h1>
            <p
              className={`mb-5 text-xl sm:text-2xl md:text-3xl font-semibold transition-opacity duration-500 ${
                visible ? 'opacity-100 typewriter' : 'opacity-0'
              }`}
            >
              {texts[index]}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="fixed bottom-4 left-4 right-4 px-4 sm:px-6 md:px-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl hover:text-green-400 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl hover:text-green-400 transition" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-2xl hover:text-green-400 transition" />
            </a>
          </div>

          {/* Language Switcher */}
          <button
            onClick={() => dispatch(toggleLanguage())}
            className="text-white border px-4 py-2 rounded hover:bg-white hover:text-black transition"
          >
            {currentLanguage}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
