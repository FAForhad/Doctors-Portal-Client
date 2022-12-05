import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableApointment from '../AvailableApointment/AvailableApointment';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date())

    return (
        <div>
            <AppointmentBanner selected={selected} setSelected={setSelected}></AppointmentBanner>
            <AvailableApointment selected={selected}></AvailableApointment>
        </div>
    );
};

export default Appointment;