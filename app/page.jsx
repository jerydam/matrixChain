'use client'
import { useState, useEffect } from 'react';
import "/styles/global.css";
import Navbar from '@/components/nav';


const Home = () => {
  

  return (
    <>
    
    <Navbar />
     <div className="flex  border-2 border-solid bg-white min-h-screen items-center justify-center">
     <div className='ml-[200px] sm:hidden'
      style={{
        height: '600px',
        width: '500px',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/motor.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        
      }}
    >
        <div className='text-center bg-opacity-50 bg-white p-4 rounded-md mx-5 font-san font-semibold'>
  <img className="mx-auto" src="/images/logo.png" alt="Logo" width="100" height="100" />
  <p className='text-lg'>
    A smart platform for <br />enterprise fleet solution.
  </p>
</div>

    </div>     
     

      <div className='ml-[200px] sm:hidden'
      style={{
        height: '600px',
        width: '500px',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/motor.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        
      }}
    >
        <div className='text-center bg-opacity-50 bg-white p-4 rounded-md mx-5 font-san font-semibold'>
  <img className="mx-auto" src="/images/logo.png" alt="Logo" width="100" height="100" />
  <p className='text-lg'>
    A smart platform for <br />enterprise fleet solution.
  </p>
</div>

    </div>
</div>
   </>
  );
};

export default Home;
