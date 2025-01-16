import BookingForm from '@/app/Components/booking/BookingForm';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Contact from '@/app/Components/Contact/Contact';
import Cta2 from '@/app/Components/Cta/Cta2';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/contact-hero.webp"
                subTitle="Contact"
                title="Feel Free to Contact with <br>Our Support Team"
                content="Get in touch with us for any questions or concerns. We will do our best to get back to you as soon as possible."
            ></BreadCumb>
            <Contact></Contact>
             {/* map */}
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.984119970695!2d36.9709760749655!3d-1.1716659988171272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTAnMTguMCJTIDM2wrA1OCcyNC44IkU!5e0!3m2!1sen!2ske!4v1737012069884!5m2!1sen!2ske"
            allowFullScreen=""
            loading="lazy"
            samesite="Strict"
            title="map"
            style={{ width: "100%", height: "45rem", border: "0px" }}
            ></iframe>
            <Cta2></Cta2>
            
        </div>
    );
};

export default page;