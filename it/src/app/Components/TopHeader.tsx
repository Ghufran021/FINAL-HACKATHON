import React from 'react'
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';

function TopHeader() {
  return (
    <main className='lg:w-[1490px] lg:h-[46px] bg-[#252b42]'>
         <div className=' flex text-white ml-5 py-1 gap-2 rounded-[5px] lg:py-[10px]'>
           <span className='w-4 h-4 '><Phone/></span>
           <h6 className='font-bold text-[14px]'>(225)555-0118 </h6> 
           <span className='w-4 h-4 pl-5'><Mail /></span>
            <h6 className='font-bold text-[14px] py-1 px-5 '>michelle.rivera@example.com</h6>
    <div>
        <h6 className='text-[14px] font-bold py-1 px-36'>Follow Us  and get a chance to win 80% off</h6>
    </div>
        
        <div className='flex gap-4'>
            <h6 className='text-[14px] font-bold pl-32'>Follow Us  :</h6>
            <span className='w-4 h-4'><Instagram /></span>
            <span className='w-4 h-4'><Youtube /></span>
            <span className='w-4 h-4'><Facebook /></span>
            <span className='w-4 h-4'><Twitter /></span>
        </div>
         </div>

         
         
    </main>

  )
}

export default TopHeader
