import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';



const TopDoctors = () => {
    const navigate=useNavigate();
    const {doctors}=useContext(AppContext);
   
    return (
        <div className='flex flex-col items-center gap-6 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-semibold'>Top Doctors to Book</h1>
            <p className='sm:w-1/2 text-center text-sm text-gray-600'>Simply browse through our extensive list of trusted doctors.</p>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 px-4 sm:px-0'>
                {
                    doctors.slice(0, 10).map((item, index) => (
                        <div onClick={()=>navigate(`/appointments/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-transform duration-300' key={index}>
                            <img className='w-full h-48 object-cover bg-blue-50' src={item.image} alt="" />
                            <div className='p-4'>
                                <div className='flex items-center gap-4 mb-3 text-sm text-green-500'>
                                    <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                                    <p>Available</p>
                                </div>
                                <p className='font-medium text-lg'>{item.name}</p>
                                <p className='text-gray-500 text-sm'>{item.speciality}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button onClick={()=>{navigate("/doctors"); window.scrollTo(0,0);}}  className='mt-4 py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors'>More</button>
        </div>
    )
}

export default TopDoctors;
