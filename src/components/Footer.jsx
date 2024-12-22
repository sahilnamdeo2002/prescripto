import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div className='md:mx-10 px-4 py-8 bg-gray-100'>
            {/* Main container */}
            <div className='flex flex-col md:grid md:grid-cols-3 gap-10 my-10 text-sm'>

                {/* Left part */}
                <div className='space-y-4'>
                    <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
                    <p className='text-gray-600 leading-6'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>

                {/* Center part */}
                <div className='space-y-4'>
                    <p className='text-xl font-medium'>Company</p>
                    <ul className='space-y-2 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/* Right part */}
                <div className='space-y-4'>
                    <p className='text-xl font-medium'>GET IN TOUCH</p>
                    <ul className='space-y-2 text-gray-600'>
                        <li>+0-000-000-000</li>
                        <li>greatstackdev@gmail.com</li>
                    </ul>
                </div>
            </div>

            <hr className='my-5' />

            {/* Footer copyright */}
            <p className='text-sm text-center text-gray-500'>
                © 2024 Greatstack.dev - All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
