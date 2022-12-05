import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const AppointmentModal = ({ modalForm, selected, setModatform, refetch }) => {


    const { user } = useContext(AuthContext)
    const date = format(selected, 'PP')

    const { name: treatment, slots, price } = modalForm


    const handleSubmitAppointment = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const number = form.number.value
        const slot = form.slot.value

        const booking = {
            selectedDate: date,
            treatment: treatment,
            patient: name,
            email,
            number,
            slot,
            price
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setModatform(null)
                    toast.success('Booking Confirmed')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="appointment-modal-1" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="appointment-modal-1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatment}</h3>
                    <form className='w-full mx-auto' onSubmit={handleSubmitAppointment}>
                        <input readOnly value={date} className="input input-bordered w-full mb-4" />
                        <input readOnly value={price} className="input input-bordered w-full mb-4" />
                        <select name='slot' className="select select-bordered w-full mb-4">
                            {
                                slots?.map((slot, i) => <option key={i} value={slot}>{slot} </option>)
                            }
                        </select>
                        <input name='name' value={user?.displayName} readOnly type="text" placeholder="Name" className="input input-bordered w-full mb-3" />
                        <input name='number' type="text" placeholder="Phone number" className="input input-bordered w-full mb-3" />
                        <input name='email' value={user?.email} readOnly type="email" placeholder="Email" className="input input-bordered w-full mb-3" />

                        <button type='submit' className='w-full text-center btn btn-primary bg-gradient-to-r from-secondary to-primary text-white'>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;