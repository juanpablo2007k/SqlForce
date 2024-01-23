interface Date{
    title:String|any,
    description:string,
    imageUrl:string
}
const Cardside: React.FC<Date>=({ title, description, imageUrl })=>{
    return (
        <div className="flex items-center p-4 border rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-900" style={{ boxShadow: '0 4px 40px rgba(0, 255, 0, 0.5)' }}>
        <img className="w-16 h-16 rounded-full object-cover" src={imageUrl} alt={title} />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
        </div>
    );
  }


  export default Cardside