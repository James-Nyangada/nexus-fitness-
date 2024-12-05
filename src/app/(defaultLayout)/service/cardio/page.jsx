import BreadCumb from '@/app/Components/Common/BreadCumb';

import ServiceDetails4 from '@/app/Components/ServiceDetails/ServiceDetails4';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/hero.png"
                subTitle="Service Details"
                title="We Provide Awesome <br>Cardio Sessions"
                content="Pump your heart, boost your stamina, and burn calories with specialized cardio training programs tailored to your needs."
            ></BreadCumb>
            <ServiceDetails4></ServiceDetails4>
        </div>
    );
};

export default page;