import React, { useState } from 'react'
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate=useNavigate();
    const [showMeny,setShowMenu]=useState(false);
    const [token,setToken]=useState(true);
    return (
        <div className='flex items-center justify-between px-6 text-sm py-4 mb-5 border-b border-gray-400'>
            <img onClick={()=>navigate('/')} className='w-50 cursor-pointer' src={assets.logo} alt="" />
            <ul className='absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center gap-5 font-medium'>
                <NavLink  to="/" className="hover:text-gray-600" >
                    <li>Home</li>
                    <hr  className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink  to="/doctors" classN hiddename="hover:text-gray-600">
                    <li>Alldocters</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to="/about" className="hover:text-gray-600">
                    <li>About</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink  to="/contact" className="hover:text-gray-600">
                    <li>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
                <div  className="hidden md:block flex items-center gap-4">
                    {
                        token
                        ?
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                             <img className='w-8 rounded-full ' src={assets.profile_pic} alt="" /> 
                             <img  className='w-2.5' src={assets.dropdown_icon} alt="" />
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 roundedflex flex-col gap-4 p-4'>
                                    <p onClick={()=>navigate("/my-profile")} className='hover:text-black cursor-pointer'>My profile</p>
                                    <p onClick={()=>navigate("/my-appointment")} className='hover:text-black cursor-pointer'>My Appointment</p>
                                    <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                          
                        :
                        <button onClick={()=>navigate('/login')} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 rounded-full">Login</button>

                    }
                </div>
        </div>
    )
} 

export default Navbar
