import React from 'react';

const AppointmentOptions = ({ option, setModatform }) => {

    const { name, slots, price } = option
    return (
        <div>
            <div className="card shadow-md p-5 mx-5 lg:mx-1">
                <div className="card-body text-center">
                    <h2 className="card-title text-primary">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : ' Try Another DAy'}</p>
                    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} </p>
                    <p> Price : $ {price} </p>
                    <div className="card-actions justify-center">
                        <label disabled={slots.length === 0} onClick={() => setModatform(option)} htmlFor="appointment-modal-1" className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;