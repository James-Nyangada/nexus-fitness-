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
                title="Meet Nexus <br>Your Guide to a Healthier Life."
                content="Led by one of the best coaches in the fitness and health industry,Coach Andy. Nexus, as a fitness and health institution has a passion for helping people achieve their wellness goals. With over 10 years of experience in the industry, Nexus combines expertise in exercise science and nutrition to offer a comprehensive approach to fitness."
            ></BreadCumb>
            <About3></About3>
            <Feature3></Feature3>
            {/* <Team></Team> */}
            <Cta></Cta>
        </div>
    );
};

export default page;