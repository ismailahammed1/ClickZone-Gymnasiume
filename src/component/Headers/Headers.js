import React from 'react';
import logo from '../../images/logo.png';
const Headers = () => {
    return (
     
        <div  className='Header text-center flex justify-center bg-gray-400'>
           <img className='h-14' src={logo} alt="" />
        <h1 className='mt-3 font-bold text-2xl'><samp className='text-[#ffffff]'>Click</samp><samp className='text-[#fc960f]'>Zone</samp><samp className=''>-Gymn</samp><samp className='text-[#fc960f]'>asiume</samp></h1>
        
        </div>
    );
};

export default Headers;