import BreadCumb from '@/app/Components/Common/BreadCumb';

import ServiceDetails5 from '@/app/Components/ServiceDetails/ServiceDetails5';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/hero.png"
                subTitle="Service Details"
                title="We Provide Awesome <br>Karate and Boxing Sessions"
                content="Build discipline, strength, and self-defense skills with engaging Karate and Boxing sessions designed for all levels."
            ></BreadCumb>
            <ServiceDetails5></ServiceDetails5>
        </div>
    );
};

export default page;