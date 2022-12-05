import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import Primarybtn from '../../../Components/Primarybtn/Primarybtn';
const MakeAppointment = () => {
    return (
        <section className='mt-16' style={{
            background: `url(${appointment})`
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='' className=" hidden lg:block md:block w-1/2 -mt-32 rounded-lg" />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-5xl text-white font-bold">Make an appointment Today</h1>
                        <p className="text-white py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Primarybtn>{'GET STARTED'}</Primarybtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;