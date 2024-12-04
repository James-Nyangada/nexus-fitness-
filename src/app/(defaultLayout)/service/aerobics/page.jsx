import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServiceDetails2 from '@/app/Components/ServiceDetails/ServiceDetails2';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/hero.png"
                subTitle="Service Details"
                title="We Provide Awesome <br>Aerobics Sessions"
                content="Dance, sweat, and energize your body with dynamic aerobics classes designed to make fitness fun and effective."
            ></BreadCumb>
            <ServiceDetails2></ServiceDetails2>
        </div>
    );
};

export default page;