import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServiceDetails1 from '@/app/Components/ServiceDetails/ServiceDetails1';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/hero.png"
                subTitle="Service Details"
                title="We Provide Awesome <br>Nutrition Coaching"
                content="Nourish your body, fuel your goals, and embrace a healthier lifestyle with personalized nutrition coaching tailored to your unique needs."
            ></BreadCumb>
            <ServiceDetails1></ServiceDetails1>
        </div>
    );
};

export default page;