"use client"
import React, { ReactNode, ReactElement, FC, cloneElement } from 'react';
import { Slide } from 'react-awesome-reveal';
import { MdWork } from 'react-icons/md';
import PropTypes from 'prop-types';
import { GoDatabase, GoTools, GoGraph, GoPerson } from 'react-icons/go';
import { FaServer, FaRegLightbulb } from 'react-icons/fa';
import { IoIosDoneAll } from "react-icons/io";
interface LinkButtonProps {
  href: string;
  children: ReactNode;
}

const LinkButton: FC<LinkButtonProps> = ({ href, children }) => (
  <a href={href} className="underline text-blue-500 hover:text-blue-700">
    {children}
  </a>
);

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

interface ProductProps {
  date: string;
  title: string;
  description: string;
  icon: ReactElement;
  link?: string;
}

const Product: FC<ProductProps> = ({ date, title, description, icon, link }) => (
    <div className="relative flex items-center mb-4 ms-4">
      {icon && (
        <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700"></div>
      )}
      <div className="border-l-2 border-gray-700 pl-4">
        <time className="text-sm font-normal leading-none text-blue-200 dark:text-sky-200/80">
          {date}
        </time>
        <div className="flex items-center">
          {icon && (
            <div className="w-6 h-6 mr-2">
              {cloneElement(icon)}
            </div>
          )}
          <h3 id="nigthol" className="text-left text-gray-600 font-bold mt-2">
            {title}
          </h3>
        </div>
        <p className="mb-4 text-left font-bold dark:text-gray-200 text-pretty">
          {description}
        </p>
        {link && (
          <LinkButton href={link}>
            Saber más...{' '}
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </LinkButton>
        )}
      </div>
      <div className="flex items-center ml-auto text-green-500">
        <IoIosDoneAll style={{ fontSize: '2.5em', textShadow: '0 0 30px rgba(0, 255, 0, 0.10)' }} />
      </div>
    </div>
  );

Product.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  link: PropTypes.string,
};

const EXPERIENCES = [
    {
      date: 'Interfaz db',
      title: 'Administering Different Types of Data',
      description: 'Removing that problematic interface, utilizing SQLForce.',
      icon: <GoDatabase style={{ color: '#4CAF50', fontSize: '1.5em', boxShadow: '0 0 10px rgba(76, 175, 80, 0.8)',borderRadius:"30px", }} />, // Verde
      company: 'Open LMS',
    },
    {
      date: 'Database Connections',
      title: 'Connecting to the Database',
      description: 'Manage SQL connections effortlessly with SQLForce.',
      icon: <FaServer style={{ fontSize: '1.5em', textShadow: '0 0 30px rgba(255, 215, 0, 0.10)', color: '#FFD700', boxShadow: '0 0 10px rgba(255, 215, 0, 0.8)',borderRadius:"30px" }} />, // Amarillo
      company: 'Your Company Name',
    },
    {
      date: 'SQL Queries',
      title: 'Executing SQL Queries',
      description: 'Perform queries to fetch data using SQLForce.',
      icon: <GoTools style={{ color: '#2196F3', fontSize: '1.5em', boxShadow: '0 0 10px rgba(33, 150, 243, 0.8)',borderRadius:"30px" }} />, // Azul
      company: 'Your Company Name',
    },
    {
      date: 'Backups',
      title: 'Performing Backups',
      description: 'Execute and schedule backups with ease using SQLForce.',
      icon: <FaRegLightbulb style={{ color: '#FF5722', fontSize: '1.5em', boxShadow: '0 0 10px rgba(255, 87, 34, 0.8)',borderRadius:"30px" }} />, // Naranja
      company: 'Your Company Name',
    },
    {
      date: 'Data Tables',
      title: 'Managing Data Tables',
      description: 'Visualize and manage data tables efficiently with SQLForce.',
      icon: <GoGraph style={{ color: '#9C27B0', fontSize: '1.5em', boxShadow: '0 0 10px rgba(156, 39, 176, 0.8)',borderRadius:"30px"}} />, // Morado
      company: 'Your Company Name',
    },
    {
      date: 'User Management',
      title: 'Managing Users and Permissions',
      description: 'Administer users and their permissions effectively with SQLForce.',
      icon: <GoPerson style={{ color: '#FFEB3B', fontSize: '1.5em', boxShadow: '0 0 10px rgba(255, 235, 59, 0.8)',borderRadius:"30px" }} />, // Amarillo
      company: 'Your Company Name',
    },
    
  ];
  

const Experience = () => (
    <div id="scrollToProducts">
      <div className="container mx-auto p-8 max-w-2xl">
        <h1 className="text-5xl font-bold flex items-center mb-10">
          <MdWork className="mr-6" />Product SqlForce
        </h1>
        {EXPERIENCES.map((experience, index) => (
          <Slide cascade={true}  key={index} duration={2500}>
            <Product {...experience} />
          </Slide>
        ))}
      </div>
    </div>
  );
export default Experience;
