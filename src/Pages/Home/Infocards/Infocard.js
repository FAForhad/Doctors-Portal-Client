import React from 'react';

const Infocard = ({ card }) => {
    const { name, description, icon, bg } = card


    return (
        <div>
            <div className={`card  lg:card-side p-6 shadow-xl ${bg} text-white`} >
                <figure><img src={icon} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Infocard;