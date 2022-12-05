import React from 'react';
import Primarybtn from '../../../Components/Primarybtn/Primarybtn';
import appointment from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section className='w-full py-6 my-24' style={{ backgroundImage: `url(${appointment})`, backgroundSize: 'cover' }}>
            <div className='text-center'>
                <h4 className='text-primary text-[20px] font-semibold'>Contact Us</h4>
                <h1 className='text-4xl py-3 text-white'>Stay connected with us</h1>
            </div>
            <form>
                <div className='w-1/3 mx-auto py-6 '>
                    <div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full mb-3 " />
                    </div>
                    <div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full mb-3" />
                    </div>
                    <div>
                        <textarea className="w-full textarea textarea-bordered mb-3" placeholder="Bio"></textarea>
                    </div>
                    <div className='text-center'>
                        <Primarybtn>Submit </Primarybtn>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default ContactUs;