import React from "react";
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
       
      <div>
        <div>
          <h2 className="text-2xl font-bold text-blue-600">Bandage</h2>

        </div>
        <div>
        <div className='flex justify-end pl-[1050px] gap-4'>
            <span className='w-4 h-4'><Instagram /></span>
            <span className='w-4 h-4'><Facebook /></span>
            <span className='w-4 h-4'><Twitter /></span>
        </div>
        </div>
        </div>
<br />

        <div>
          
          <ul className="text-gray-500 space-y-2">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

<br />  
<div>
          <h3 className="text-lg font-semibold mb-4">Company Info</h3>
          <ul className="text-gray-500 space-y-2">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Carrier</a></li>
            <li><a href="#" className="hover:text-blue-600">We are hiring</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="text-gray-500 space-y-2">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Carrier</a></li>
            <li><a href="#" className="hover:text-blue-600">We are hiring</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Features</h3>
          <ul className="text-gray-500 space-y-2">
            <li><a href="#" className="hover:text-blue-600">Business Marketing</a></li>
            <li><a href="#" className="hover:text-blue-600">User Analytic</a></li>
            <li><a href="#" className="hover:text-blue-600">Live Chat</a></li>
            <li><a href="#" className="hover:text-blue-600">Unlimited Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="text-gray-500 space-y-2">
            <li><a href="#" className="hover:text-blue-600">IOS & Android</a></li>
            <li><a href="#" className="hover:text-blue-600">Watch a Demo</a></li>
            <li><a href="#" className="hover:text-blue-600">Customers</a></li>
            <li><a href="#" className="hover:text-blue-600">API</a></li>
          </ul>
        </div>
      </div>
      <div className="pl-[1090px] ">
                        <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
                        <div className="mt-3">
                            <div className="relative justify-end mb-4">
                                <input
                                    type="email"
                                    className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
                                    placeholder="Your Email"
                                />
                                <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg">
                                    Subscribe
                                </button>
                            </div>
                            <p className="pl-[5px] text-[#727272] text-xs">Lore imp sum dolor Amit</p>
                        </div>
                    </div>
        

      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6">
        <p className="text-black">Made With Love By Finland All Right Reserved </p>

        </div>
        </footer>


  );
};

export default Footer;
