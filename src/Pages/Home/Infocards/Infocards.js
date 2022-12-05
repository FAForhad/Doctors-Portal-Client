import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import markar from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import Infocard from './Infocard';

const Infocards = () => {

    const cardata = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9.00 am to 5.00 pm',
            icon: clock,
            bg: ' bg-gradient-to-r from-secondary to-primary'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Open 9.00 am to 5.00 pm',
            icon: markar,
            bg: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: 'Open 9.00 am to 5.00 pm',
            icon: phone,
            bg: ' bg-gradient-to-r from-secondary to-primary'
        },
    ]

    return (
        <div className='grid mt-8 grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2'>
            {
                cardata.map(card => <Infocard key={card.id} card={card}></Infocard>)
            }
        </div>
    );
};

export default Infocards;