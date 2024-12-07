import Contact2 from '@/app/Components/booking/Contact2';
import BreadCumb from '@/app/Components/Common/BreadCumb';

import Cta2 from '@/app/Components/Cta/Cta2';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/hero.png"
                subTitle="Book now"
                title="Book your Serivce now"
                content="Get in touch with us for any questions or concerns. We will do our best to get back to you as soon as possible."
            ></BreadCumb>
            <Contact2></Contact2>
            <Cta2></Cta2>
        </div>
    );
};

export default page;