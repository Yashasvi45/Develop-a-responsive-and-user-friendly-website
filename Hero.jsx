import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          Welcome to CodeMasters
        </p>
       
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Empowering 
        </h1>
        <Typed
          className='md:text-5xl sm:text-6xl text-xl font-bold md:pl-4 pl-2'
            strings={['Coding', 'Develop', 'Build']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Enabling Dreams
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Learn to
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Coding', 'Develop', 'Build']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Choose CodeMasters for an unparalleled coding experience</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
