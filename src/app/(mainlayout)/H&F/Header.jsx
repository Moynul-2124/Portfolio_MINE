


"use client"
import React, { useState } from 'react';
import AnimatedLink from '../../(dashboardlayout)/about/Componenets/Shared/AnimatedLink';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-xl">
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            className="rounded-b-sm rounded-t-xl rounded-l-4xl"
            width={50}
            height={20}
            src="https://cdn.worldvectorlogo.com/logos/anzu-wordpress-theme.svg"
            alt="Theme"
          />
          <span className="text-xl text-white font-semibold">InYourOwn</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-[15px] text-white">
          <AnimatedLink href="/about" className="cursor-pointer">About</AnimatedLink>
          <AnimatedLink href="/resume" className="cursor-pointer">Resume</AnimatedLink>
          <AnimatedLink href="/portfolio" className="cursor-pointer">Portfolio</AnimatedLink>
          <AnimatedLink href="/blog" className="cursor-pointer">Blog</AnimatedLink>
          <AnimatedLink href="/contact" className="cursor-pointer">Contact</AnimatedLink>
        </ul>


        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-white text-[15px]">
            <AnimatedLink href="/about">About</AnimatedLink>
            <AnimatedLink href="/resume">Resume</AnimatedLink>
            <AnimatedLink href="/portfolio">Portfolio</AnimatedLink>
            <AnimatedLink href="/blog">Blog</AnimatedLink>
            <AnimatedLink href="/contact">Contact</AnimatedLink>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
