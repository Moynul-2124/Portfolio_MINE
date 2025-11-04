


import Link from 'next/link';
import React from 'react';
import AnimatedLink from '../Shared/AnimatedLink';

const Header = () => {
  return (
    <header className="bg-black shadow-sm">
      <nav className="navbar px-4 sm:px-6 md:px-10 flex items-center justify-between">
        {/* Left: Dropdown Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-32 p-3 shadow z-50"
            >
              <div className="flex flex-col gap-2 text-sm">
                <AnimatedLink href="/">Home</AnimatedLink>
                <AnimatedLink href="/resume">Resume</AnimatedLink>
                <AnimatedLink href="/portfolio">Portfolio</AnimatedLink>
                <AnimatedLink href="/blog">Blog</AnimatedLink>
                <AnimatedLink href="/contact">Contact</AnimatedLink>
              </div>
            </ul>
          </div>
        </div>

        {/* Center: About Link */}
        <div className="navbar-center hidden md:flex">
          <Link href="/about">
            <h1 className="btn btn-ghost text-lime-400 text-xl">About</h1>
          </Link>
        </div>

        {/* Right: Icons */}
        <div className="navbar-end flex gap-2">
          <button className="btn btn-ghost btn-circle" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle" aria-label="Notifications">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
