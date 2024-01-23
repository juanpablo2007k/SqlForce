import React from 'react';

interface CardVerticalProps {
  title: string | any;
  description: string;
  imageUrl: string;
}

const CardVertical: React.FC<CardVerticalProps> = ({ title, description, imageUrl }) => (
  <div className="p-4 border rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-900" style={{ boxShadow: '0 4px 40px rgba(0, 255, 0, 0.5)' }}>
    <img className="w-full h-32 object-cover mb-4" src={imageUrl} alt={title} />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

export default CardVertical;
