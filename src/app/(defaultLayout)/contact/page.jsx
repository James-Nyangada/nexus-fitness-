import BookingForm from '@/app/Components/booking/BookingForm';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Contact from '@/app/Components/Contact/Contact';
import Cta2 from '@/app/Components/Cta/Cta2';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/hero.png"
                subTitle="Contact"
                title="Feel Free to Contact with <br>Our Support Team"
                content="Get in touch with us for any questions or concerns. We will do our best to get back to you as soon as possible."
            ></BreadCumb>
            <Contact></Contact>
            <Cta2></Cta2>
            
        </div>
    );
};

export default page;