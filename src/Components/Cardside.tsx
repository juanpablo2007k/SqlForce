interface CardSideProps {
  title: string | any;
  description: string;
  icon: any;
}

const CardSide: React.FC<CardSideProps> = ({ title, description, icon }) => (
  <div className="flex items-center mb-2 p-6 border rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-900" style={{ boxShadow: '0 4px 30px rgba(0, 255, 0, 0.5)' }}>
    <div className="w-20 h-20 flex items-center justify-center mr-4 bg-purple-800 rounded-full">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  </div>
);

export default CardSide;
