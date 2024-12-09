import React from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
function Header() {
  return (
    
    <div className=' flex lg:w-[187px] lg:h-[58px] px-38 mt-10 text-black ml-5 py-1 gap-2 rounded-[5px] lg:py-[10px]'>
    
      <h3 className='font-bold text-[24px] lg:w-[108px] lg:h-[32px]'>Bandage</h3> 
   <div className='hidden lg:block py-4 px-52 flex '>
    <Link className='text-[16px] font-medium px-6'href='' >Home</Link>
    <Link className='text-[16px] font-medium px-6'href='' >Shop</Link>
    <Link className='text-[16px] font-medium px-6'href='' >About</Link>
    <Link className='text-[16px] font-medium px-6'href='' >Blog</Link>
    <Link className='text-[16px] font-medium px-6'href='' >Contact</Link>
    <Link className='text-[16px] font-medium px-6'href='' >Pages</Link>
    </div>
    <div className=' flex w-[220px] h-[24px] text-black py-1 gap-2  rounded-[5px] lg:py-[10px]'>
    
    <Link className='text-[16px] text-[#23A6F0] font-medium px-2'href='' >Login/Register</Link>
    <Search /> <ShoppingCart /> <Heart />
</div>
   </div>
   
  )
}

export default Header
