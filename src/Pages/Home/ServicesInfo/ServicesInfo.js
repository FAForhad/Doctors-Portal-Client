import React from 'react';
import whitening from '../../../assets/images/whitening.png'
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import Serviceinfo from './Serviceinfo';
import Dentalcare from '../Dentalcare/Dentalcare';

const ServicesInfo = () => {
    const serviceInfo = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
        },
    ]
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl lg:mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px text-sm font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400 text-primary ">
                        OUR SERVICES
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-[#3A4256] sm:text-4xl md:mx-auto ">
                    Services We Provide
                </h2>
            </div>
            <div className='gap-8 lg:my-16 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 text-center'>
                {
                    serviceInfo.map(service => <Serviceinfo key={service.id} service={service}></Serviceinfo>)
                }
            </div>
            <Dentalcare></Dentalcare>
        </div>
    );
};

export default ServicesInfo;