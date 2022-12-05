import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

import '../../Home/Banner/Banner.css'


const AppointmentBanner = ({ selected, setSelected }) => {

    return (
        <div className='my-6'>
            <div className="hero banner-bg h-[838px]">
                <div className="hero-content justify-around flex-col lg:flex-row-reverse">
                    <img src={chair} alt='dentist chair' className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker
                            mode='single'
                            selected={selected}
                            onSelect={(data) => {
                                if (data) {
                                    setSelected(data)
                                }
                            }}
                        ></DayPicker>
                        <p>You picked .</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;