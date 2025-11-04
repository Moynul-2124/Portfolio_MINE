



import BlogProvider from '../../(majherlayout)/blog/Redux/BlogProvider';
import React from 'react';
import Resume from '../resume/FixedCompo/Cross';
import Curtain from '../../(dashboardlayout)/about/Componenets/Shared/Curtain';
import PortfolioPage from './Compo/Fixed/PortfolioPage';
import Title from '../../(mainlayout)/H&F/Title';

const page = () => {
    return (
        <div className='bg-black min-h-screen text-white'>
            <BlogProvider>

                <Resume></Resume>

                <Curtain></Curtain>

                    
                    
                    <Title gud="Showcasing some of my best work" voda="Portfolio"></Title>
                    
                    <PortfolioPage></PortfolioPage>




            </BlogProvider>
        </div>
    );
};

export default page;