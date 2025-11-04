






import React from 'react';
import BlogProvider from '../blog/Redux/BlogProvider';
import Curtain from '../../(dashboardlayout)/about/Componenets/Shared/Curtain';
import Resume from '../../(secondaryLayout)/resume/FixedCompo/Cross';
import ContactPage from './COmpo/Fixed/ContactPage';
import Title from '../../(mainlayout)/H&F/Title';

const page = () => {
    return (
        <div className='min-h-screen text-white bg-black'>
            <BlogProvider>


                <Curtain></Curtain>

                <Resume></Resume>

                    <Title gud="Feel free to contact me anytimes" voda="Get in Touch"></Title>

                    <ContactPage></ContactPage>


            </BlogProvider>
        </div>
    );
};

export default page;