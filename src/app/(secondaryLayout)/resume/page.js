



import React from 'react';
import Cross from './FixedCompo/Cross';
import Title from '../../(mainlayout)/H&F/Title';
import CertResume from './FixedCompo/CertResume';
import BlogProvider from '../../(majherlayout)/blog/Redux/BlogProvider';

const Page = () => {
  return (
    <BlogProvider>
      <div className="bg-black  min-h-screen tracking-wide text-white">
        <section className="px-4 sm:px-6 md:px-10 lg:px-20">
          <Cross />

          <div className="py-10   text-center">
            <Title gud="Check out my Resume" voda="Resume" />
          </div>

          <div>
            <CertResume />
          </div>
        </section>
      </div>
    </BlogProvider>
  );
};

export default Page;
