import React from 'react';

const Primarybtn = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">{children}</button>
        </div>
    );
};

export default Primarybtn;