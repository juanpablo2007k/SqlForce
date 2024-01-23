"use client";
import { FaDatabase } from "react-icons/fa6";
import Cardside from "../Components/Cardside";
import Cardvertical from "./Cardvertical";
import { Bounce } from "react-awesome-reveal";

export default function ContentHeader() {
  return (
    <div className="flex flex-col md:flex-row mt-20 p-5">
      {/* Columna de Información */}
      <div className="md:w-1/2 p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Cloud Services Made Simple 
         <button style={{ display: 'inline-block', marginLeft: '8px' }}><FaDatabase color="white"  /></button> 
        </h1>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, cupiditate deserunt expedita incidunt facere excepturi, quo fugit nemo cum, non possimus consequatur explicabo. Aliquam reiciendis, mollitia cum praesentium nihil eum.
        </p>
        <button className="bg-purple-400 rounded-xl mt-4 text-white font-bold p-3 md:p-5">Click for Watch</button>
      </div>

      {/* Columna de Imagen */}
      <div className="flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-4 w-full md:w-1/2">
        <Bounce cascade={true}>
          <div className="relative w-full md:w-52 h-80 mb-4 md:mb-0">
            <Cardside title="Conexión a la Base de Datos" description="Gestiona las conexiones SQL" imageUrl="https://i.pinimg.com/564x/47/0a/d9/470ad9d44eb4e98487ab704be55d7c0f.jpg" />
            <Cardvertical title="Tablas de Datos" description="Visualiza y gestiona las tablas" imageUrl="https://i.pinimg.com/564x/2b/8c/db/2b8cdb0c33ccd8082c1d9accb0a601ee.jpg" />
          </div>

          <div className="relative w-full md:w-52 h-80 mb-4 md:mb-0">
            <Cardside title="Ejecutar Consultas SQL" description="Realiza consultas para obtener datos" imageUrl="https://i.pinimg.com/564x/6e/50/25/6e5025fa8a34f69d83d1f50cbc669f16.jpg" />
            <Cardvertical title="Gestión de Usuarios" description="Administra los usuarios y permisos" imageUrl="https://i.pinimg.com/736x/22/79/2e/22792eabcd6df8f72a77dffd3e65a829.jpg" />
          </div>

          <div className="relative w-full md:w-52 h-80 mb-4 md:mb-0">
            <Cardside title="Copias de Seguridad" description="Realiza y programa copias de seguridad" imageUrl="https://i.pinimg.com/564x/86/b3/1f/86b31f18cec6f80ddc5db57754446cfd.jpg" />
            <Cardvertical title="Optimización de Consultas" description="Mejora el rendimiento de las consultas" imageUrl="https://i.pinimg.com/564x/7d/77/6f/7d776f2cee4ee414f83874bbf485e8e0.jpg" />
          </div>
        </Bounce>
      </div>
    </div>
  );
}
