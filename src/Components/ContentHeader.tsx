import Cardside from "../Components/Cardside";
import Cardvertical from "./Cardvertical";
export default function ContentHeader() {
    return (
      <div className="flex flex-col md:flex-row mt-20 p-5">
        {/* Columna de Información */}
        <div className="md:w-1/2 p-4">
          <h1 className="text-6xl font-bold mb-4">Clouds Services Made Simples</h1>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, cupiditate deserunt expedita incidunt facere excepturi, quo fugit nemo cum, non possimus consequatur explicabo. Aliquam reiciendis, mollitia cum praesentium nihil eum.
          </p>
          <button className="bg-purple-400 rounded-xl mt-4 text-white font-bold p-5">Click for wacht</button>
        </div>
  
        {/* Columna de Imagen */}
        <div className="flex space-x-4">
      <div className="relative w-52 h-80">
        <Cardside title="Conexión a la Base de Datos" description="Gestiona las conexiones SQL" imageUrl="https://i.pinimg.com/564x/c6/96/03/c696030eac446f4e33f2d9029ac3ca8f.jpg" />
        <Cardvertical title="Tablas de Datos" description="Visualiza y gestiona las tablas" imageUrl="https://i.pinimg.com/564x/e0/29/3c/e0293c2b193859b97d6b290a27d7c74f.jpg" />
      </div>

      <div className="relative w-52 h-80">
        <Cardside title="Ejecutar Consultas SQL" description="Realiza consultas para obtener datos" imageUrl="https://example.com/image1.jpg" />
        <Cardvertical title="Gestión de Usuarios" description="Administra los usuarios y permisos" imageUrl="https://example.com/image2.jpg" />
      </div>

      <div className="relative w-52 h-80">
        <Cardside title="Copias de Seguridad" description="Realiza y programa copias de seguridad" imageUrl="https://example.com/image3.jpg" />
        <Cardvertical title="Optimización de Consultas" description="Mejora el rendimiento de las consultas" imageUrl="https://example.com/image4.jpg" />
      </div>
    </div>
      </div>
    );
  }
  