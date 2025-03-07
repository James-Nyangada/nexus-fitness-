import About3 from '@/app/Components/About/About3';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta from '@/app/Components/Cta/Cta';
import Feature3 from '@/app/Components/Feature/Feature3';
import Team from '@/app/Components/Team/Team';
import React from 'react';

const page = () => {
    return (
        <div className="about-page">
            <BreadCumb
                bgImg="/assets/images/resource/hero2.webp"
                subTitle="About"
                title="Story of Nexus Fit: Why we are the top gym in Thika Road"
                content="State-of-the-Art Gym Equipment for the Best Workout"
            ></BreadCumb>
            <About3></About3>
            <Feature3></Feature3>
            {/* <Team></Team> */}
            <Cta></Cta>
        </div>
    );
};

export default page;