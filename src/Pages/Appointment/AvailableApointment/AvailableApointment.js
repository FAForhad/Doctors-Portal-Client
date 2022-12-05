import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOptions from './AppointmentOptions';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableApointment = ({ selected }) => {
    const [modalForm, setModatform] = useState(null)

    const date = format(selected, "PP")
    console.log(date)

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p className=' text-center text-secondary font-bold'>Available Appointments on {format(selected, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOptions key={option._id} option={option} setModatform={setModatform}></AppointmentOptions>)
                }
            </div>
            {modalForm &&

                <AppointmentModal
                    selected={selected}
                    modalForm={modalForm}
                    setModatform={setModatform}
                    refetch={refetch}
                ></AppointmentModal>
            }
        </div>
    );
};

export default AvailableApointment;