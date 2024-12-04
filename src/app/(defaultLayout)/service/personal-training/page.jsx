import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServiceDetails from '@/app/Components/ServiceDetails/ServiceDetails';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/hero.png"
                subTitle="Service Details"
                title="We Provide Awesome <br>Service Details"
                content="Unlock your full potential with customized fitness plans designed just for you. Whether your goal is weight loss, strength building, or overall well-being, we guide you every step of the way."
            ></BreadCumb>
            <ServiceDetails></ServiceDetails>
        </div>
    );
};

export default page;