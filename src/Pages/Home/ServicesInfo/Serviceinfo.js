import React from 'react';

const Serviceinfo = ({ service }) => {
    const { name, description, icon } = service
    return (
        <div>
            <div className="card shadow-md">
                <figure><img src={icon} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="text-[20px]  font-semibold text-center">{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Serviceinfo;