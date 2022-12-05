import React from 'react';
import dental from '../../../assets/images/treatment.png'
import Primarybtn from '../../../Components/Primarybtn/Primarybtn';

const Dentalcare = () => {
    return (
        <div>
            <div className="hero min-h-full py-12">
                <div className="hero-content flex-col lg:flex-row md:flex-row">
                    <div className='w-full'>
                        <img src={dental} className=" w-[458px] rounded-lg" />
                    </div>
                    <div className='w-full'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Primarybtn>{'GET STARTED'}</Primarybtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dentalcare;