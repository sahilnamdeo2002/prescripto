import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
   <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
     {/* // {---------- left side-------------} */}
    <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'> 
      <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'> 
        Book Appointment <br /> with trusted doctors``
      </p>
      <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
        <img className='w-28' src={assets.group_profiles} alt="" />
        <p>simply browse through our extension list of trusted doctos <br className='hidden sm:block' /> schedule</p>
      </div>
      <a href="#speciality"  className='flex items-center gap-3 bg-white px-8 rounded-full text-gray-600 text-sm m-auto md:m-2 hover:scale-105 transition-all duration-300'>
        Book appointment <img src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
      </a>
    </div>

       {/* // {---------- right side-------------} */}
       <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />

       </div>
   </div>
  )
}

export default Header