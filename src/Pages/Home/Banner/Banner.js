import React from 'react';
import './Banner.css'
import chair from '../../../assets/images/chair.png'
import Primarybtn from '../../../Components/Primarybtn/Primarybtn';

const Banner = () => {
    return (
        <div>
            <div className="hero banner-bg h-[838px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className=" lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Primarybtn>{'GET STARTED'}</Primarybtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;