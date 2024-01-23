"use client"
import React from 'react';
import { FaDatabase, FaCode, FaUsers, FaRocket, FaGithub } from 'react-icons/fa';
import {Fade} from "react-awesome-reveal"
const About = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-black to-navy py-16 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-6 text-center text-white">About Us</h2>
          <p className="text-gray-500 text-lg text-center mb-8">
            Cloud Services Made Simple. Connect your databases and interact with tables effortlessly with sqlForce.{' '}
            <span className="text-yellow-300">Revolutionize your data management experience</span> and{' '}
            <span className="text-green-400">simplify SQL operations</span>. Our project is{' '}
            <span className="text-blue-400">Open Source</span>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { icon: <FaDatabase size={40} color="#38B2AC" />, title: 'Efficient Database Management', description: 'Connect your databases and interact with tables effortlessly with sqlForce.' },
            { icon: <FaCode size={40} color="#4299E1" />, title: 'Simplify SQL Operations', description: 'Revolutionize your data management experience and make SQL operations easy and efficient.' },
            { icon: <FaUsers size={40} color="#667EEA" />, title: 'User-Friendly Interface', description: 'Enjoy a user-friendly interface that simplifies database management tasks.' },
            { icon: <FaRocket size={40} color="#9F7AEA" />, title: 'Boost Productivity', description: 'Empower businesses to focus on what matters most with our innovative API, SqlForce.' },
          ].map((item, index) => (
            <div key={index} className="mb-8">
              <div className="flex items-center mb-4">
                <Fade> {item.icon}</Fade>
               
                <h3 className="text-2xl font-bold ml-3 text-yellow-300">{item.title}</h3>
              </div>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
         <button> <a
            href="https://github.com/Juan-Pablo-Castillo-Velasquez/SqlForce"
            target="_blank"
            rel="noopener noreferrer"
            className="w-30 bg-gray-800 text-white  py-1 px-2 rounded-br-xl text-sm transition duration-300 ease-in-out hover:bg-gray-700 flex items-center"
          >
            <FaGithub className="mr-2" /> <span>GitHub - Open Source</span>
          </a></button>
        </div>
      </div>
    </section>
  );
};

export default About;
