// Cardvertical.jsx
import React from 'react';

interface CardVerticalProps {
  title: string | any;
  description: string;
  icon: any | string;
}

const CardVertical: React.FC<CardVerticalProps> = ({ title, description, icon }) => (
  <div className="p-4 border rounded-md shadow-md hover:scale-105 hover:shadow-lg hover:bg-gray-900 transition-transform transform" style={{ transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s', boxShadow: '0 4px 30px rgba(0, 255, 0, 0.5)' }}>
    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-slate-500 rounded-full">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-center">{title}</h3>
    <p className="text-gray-500 text-center">{description}</p>
  </div>
);

export default CardVertical;