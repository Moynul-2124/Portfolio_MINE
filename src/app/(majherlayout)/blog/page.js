






import Title from '../../(mainlayout)/H&F/Title';
import React from 'react';
import BlogProvider from './Redux/BlogProvider';
import Resume from '../../(secondaryLayout)/resume/FixedCompo/Cross';
import AnimatedLink from '../../(dashboardlayout)/about/Componenets/Shared/AnimatedLink';
import BlogPage from './Compo/Shared/BlogPage';
import Header from '../../(mainlayout)/H&F/Header';

const page = () => {
    return (
        <div className='min-h-screen text-white bg-black'>
            <div>

                <BlogProvider>
                        <Header></Header>
                    <Resume></Resume>
                    <AnimatedLink></AnimatedLink>


                        <Title gud="Check out my latest blog posts" voda="My Blog"></Title>

                
                
                        
                        <BlogPage></BlogPage>
                
                
                
                
                
                
                
                
                
                </BlogProvider>


            </div>
        </div>
    );
};

export default page;