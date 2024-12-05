import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServiceDetails3 from '@/app/Components/ServiceDetails/ServiceDetails3';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/hero.png"
                subTitle="Service Details"
                title="We Provide Awesome <br>Athletic Mentoring"
                content="Develop your athletic potential and reach peak performance with personalized mentoring programs tailored for aspiring and professional athletes."
            ></BreadCumb>
            <ServiceDetails3></ServiceDetails3>
        </div>
    );
};

export default page;