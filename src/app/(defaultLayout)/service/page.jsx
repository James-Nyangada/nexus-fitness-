import About4 from '@/app/Components/About/About4';
import Choose from '@/app/Components/Choose/Choose';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Cta from '@/app/Components/Cta/Cta';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/hero.png"
                subTitle="Services"
                title="Achieve Your Best Self with Our Coaching Programs"
                content="Explore our range of services designed to help you reach optimal health and wellness."
            ></BreadCumb>
            <About4></About4>
            <Choose></Choose>
            <Cta></Cta>
        </div>
    );
};

export default page;