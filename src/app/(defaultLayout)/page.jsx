import React from 'react';
import HeroBanner1 from '../Components/HeroBanner/HeroBanner1';
import Feature1 from '../Components/Feature/Feature1';
import Service1 from '../Components/Services/Service1';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Cta from '../Components/Cta/Cta';

const Home = () => {
    return (
        <div>
            <HeroBanner1
                bgmage="/assets/images/resource/cardio-1.webp"
                Title1="Transform Your Health body and mind"
                Title2="with Nexus"
                content="Personalized Training for Strength & Weight Loss"
                btnName=" Get Started Today"
                btnUrl="/Schedule"
                heroShape1="/assets/images/slider/hero-shp1.png"
                heroShape2="/assets/images/slider/hero-shp2.png"
                heroShape3="/assets/images/slider/circle.png"
            ></HeroBanner1>
            <Feature1></Feature1>
            <Service1></Service1>
            {/* <Testimonial1></Testimonial1> */}
            <Cta></Cta>
        </div>
    );
};

export default Home;