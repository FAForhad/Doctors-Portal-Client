import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Infocards from '../Infocards/Infocards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServicesInfo from '../ServicesInfo/ServicesInfo';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Infocards></Infocards>
            <ServicesInfo className></ServicesInfo>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;