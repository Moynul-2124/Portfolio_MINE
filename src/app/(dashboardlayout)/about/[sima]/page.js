



'use client';

import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import Curtain from '../Componenets/Shared/Curtain';
import AboutProvider from '../Redux/AboutProvider';
import Header from '../../../(mainlayout)/H&F/Header';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [cartAdded, setCartAdded] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitAndAddToCart = (e) => {
    e.preventDefault();

    console.log('Client Info:', formData);
    setSubmitted(true);

    console.log('Item added to cart!');
    setCartAdded(true);
    setTimeout(() => setCartAdded(false), 1500);
  };

  return (
    <section className="bg-black min-h-screen text-white flex items-center justify-center px-4 sm:px-8 md:px-16 py-10">
      
      
      <AboutProvider><Header></Header><Curtain></Curtain><form
        onSubmit={handleSubmitAndAddToCart}
        className="w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-green-400">
          Connect & Add to Cart
        </h2>

        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            placeholder="How can I help you?"
            required
          />
        </div>

        <button
          type="submit"
          className={`flex items-center justify-center gap-2 w-full py-3 rounded-full transition-all duration-300 ${
            cartAdded
              ? 'bg-green-500 text-black'
              : 'bg-pink-500 hover:bg-pink-600 text-white'
          } font-semibold`}
        >
          <FaCartPlus className={`text-xl ${cartAdded ? 'animate-bounce' : ''}`} />
          {submitted ? 'Sent & Added!' : 'Send & Add to Cart'}
        </button>
      </form></AboutProvider>
    </section>
  );
}
