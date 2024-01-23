'use client'
import { CiCircleChevUp } from "react-icons/ci";

import { FaGithub, FaDiscord, FaStar, FaBars, FaLinkedin } from "react-icons/fa";
import { useState } from 'react';
import { PiFileSqlDuotone } from "react-icons/pi";

 export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const scrollToSqlForce = () => {
    const SqlForce = document.getElementById('scrollToSqlForce');
    
    if (SqlForce) {
      SqlForce.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Element with ID 'Experience' not found");
    }
  };
  const scrollToProduct = () => {
    const Product = document.getElementById('scrollToProducts');
    
    if (Product) {
      Product.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Element with ID 'Experience' not found");
    }
  };
  const scrollToContact = () => {
    const Contact = document.getElementById('formid');
    
    if (Contact) {
      Contact.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Element with ID 'Experience' not found");
    }
  };
  const scrollToService = () => {
    const Service = document.getElementById('scrollToServiceId');
    
    if (Service) {
      Service.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Element with ID 'Experience' not found");
    }
  };
  const scrollToAbout = () => {
    const about = document.getElementById('about');
    
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Element with ID 'Experience' not found");
    }
  };
  function ScrolltoHome(){
    const Home = document.getElementById('Home1');
    
    if (Home) {
      Home.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Element with ID 'Experience' not found");
    }
  }
  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  

  return (
    <div className='flex flex-col md:flex-row items-center justify-between mb-4 mt-7'>
 
      <div className="flex items-center space-x-4 mr-4">
     
        <button className="border border-gray-500 rounded-3xl p-2 text-lg">
          <strong>V 1.91</strong>
        </button>
        <a href='https://www.linkedin.com/in/juan-pablo-castillo-86542a214/'>
          <button className="p-2">
            <PiFileSqlDuotone size={40} />
          </button>
        </a>
        <p className='font-bold text-1xl '>sqlForce</p>
      </div>
      <div className='md:hidden'>
      
        <button className='text-gray-700 text-lg ml-2' onClick={toggleMenu}>
          <FaBars size={30} />
        </button>
      </div>
      <nav className={`text-center flex flex-col list-none space-x-4 items-center md:flex ${menuVisible ? 'block' : 'hidden'} md:space-x-4 md:flex-row md:mb-0`}>
        <li className={`font-bold text-lg hover:text-gray-400 mb-2 md:mb-0  ? 'text-gray-400' : 'text-gray-700'}`}>
          <button >Home</button>
        </li>
        <li className='font-bold text-lg hover:text-gray-400 mb-2 md:mb-0'>
        <button onClick={scrollToSqlForce}>what is SqlForce</button>
        </li>
        <li className='font-bold text-lg hover:text-gray-400 mb-2 md:mb-0'>
        <button onClick={scrollToAbout}>About</button>
        </li>
        <li className='font-bold text-lg hover:text-gray-400 mb-2 md:mb-0'>
        <button onClick={scrollToProduct}>Product</button>
        </li>
        <li className='font-bold text-lg hover:text-gray-400 mb-2 md:mb-0'>
        <button onClick={scrollToService}>Services</button>
        </li>
        <li className='font-bold text-lg hover:text-gray-400 mb-2 md:mb-0'>
        <button onClick={scrollToContact} className="mr-5 " >Contact to me</button>
        </li>

      </nav>
      <div className='md:flex space-x-4 items-center hidden'>
        {/* Agrega los botones adicionales aquí */}
        <button className='border border-gray-500 rounded-3xl p-3 text-2xl hover:text-gray-400'>
          <FaStar />
        </button>
        <a href='https://github.com/Juan-Pablo-Castillo-Velasquez'>
          <button className='border border-gray-500 rounded-3xl p-3 text-2xl hover:text-gray-400'>
            <FaGithub />
          </button>
        </a>
        <a href='https://discord.com/channels/@me'>
          <button className='border border-gray-500 rounded-3xl p-3 text-2xl hover:text-gray-400'>
            <FaDiscord />
          </button>
        </a>
        <a href='https://wa.me/qr/KCU5V5VTL6SEE1'>
          <button className='bg-green-400 text-white rounded-3xl p-2 text-1xl hover:bg-gray-700'>
            WhatSaap
          </button>
        </a>
      </div>
      <button onClick={ScrolltoHome}
        className="fixed right-4 bottom-5 text-6xl font-extrabold text-green-500 py-2 px-4 rounded-3xl"
     
      >
      <CiCircleChevUp/>
      </button>
    </div>
  );
}


