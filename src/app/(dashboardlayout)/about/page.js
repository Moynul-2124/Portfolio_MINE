


"use client";
import Title from '../../(mainlayout)/H&F/Title';
import React from 'react';
import HeroAbout from './Componenets/Fixed/HeroAbout';
import ServicesAbout from './Componenets/Fixed/ServicesAbout';
import TestiAbout from './Componenets/Fixed/TestiAbout';
import ProAbout from './Componenets/Fixed/ProAbout';
import AboutProvider from './Redux/AboutProvider';
import Header from './Componenets/Fixed/Header';
import Curtain from './Componenets/Shared/Curtain';

const Page = () => {
  return (
    <AboutProvider>
      <main className="bg-black text-white min-h-screen px-4 sm:px-6 md:px-10">
        
        <Header></Header>

        <Curtain></Curtain>
        
        
        {/* Hero Section */}
        <section className="py-10">
          <Title gud="Get to know me" voda="About Me" />
          <HeroAbout />
        </section>

        {/* Services Section */}
        <section className="py-10">
          <div className="text-start max-w-5xl mx-auto">
            <Title gud="Services I offer to my clients" voda="My Services" />
          </div>
          <ServicesAbout />
        </section>

        {/* Testimonials Section */}
        <section className="py-10">
          <div className="flex justify-center max-w-5xl mx-auto">
            <Title gud="What my clients think about me" voda="Testimonials" />
          </div>
          <TestiAbout />
        </section>

        {/* Plans Section */}
        <section className="py-10">
          <div className="text-start max-w-5xl mx-auto">
            <Title gud="Get started with my services" voda="Choose a Plan" />
          </div>
          <ProAbout />
        </section>
      </main>
    </AboutProvider>
  );
};

export default Page;
