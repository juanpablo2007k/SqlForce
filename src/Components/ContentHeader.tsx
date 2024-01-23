"use client";
import { FaDatabase } from "react-icons/fa6";
import Cardside from "../Components/Cardside";
import Cardvertical from "./Cardvertical";
import { Bounce } from "react-awesome-reveal";
import { MdOutlineNetworkCell,MdFindInPage,MdBackup } from "react-icons/md";
import { FaTable,FaUsersCog } from "react-icons/fa";
import { MdOutlineQueryStats } from "react-icons/md";
export default function ContentHeader() {
  return (
    <div className="flex flex-col md:flex-row mt-20 p-5">
      {/* Columna de Información */}
      <div className="md:w-1/2 p-4">
      <h1 className=" opacity-90 text-4xl md:text-6xl font-bold mb-4 text-gray-800 hover:transition-all duration-300 ease-out transform hover:translate-x-2">
      <span className="text-blue-500">Cloud</span> 
      <span className="text-green-500"> Services</span> 
      <span className="text-yellow-500"> Made</span> 
      <span className="text-red-500"> Simple</span>
      <button className="ml-2 p-2 rounded-full  text-white"><FaDatabase /></button>
    </h1>
    <p className="text-gray-500 font-bold mb-8 hover:transition-all duration-300 ease-out transform hover:translate-x-3">
      Connect your databases and interact with tables effortlessly with <strong className="text-blue-500">sqlForce</strong>. 
      Revolutionize your data management experience and simplify SQL operations.
    </p>
    <button className="bg-gray-900 rounded-xl text-white font-bold py-3 px-5 hover:bg-purple-500 transition duration-300 ease-in-out hover:translate-x-2">Click to Watch</button>
      </div>

      {/* Columna de Imagen */}
      <div className="flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-4 w-full md:w-1/2">
        <Bounce cascade={true}>
          <div className="relative w-full md:w-52 h-80 mb-4 md:mb-0">
            <Cardside title="Conexión a la Base de Datos" description="Gestiona las conexiones SQL" icon={<MdOutlineNetworkCell />} />
            <Cardvertical title="Tablas de Datos" description="Visualiza y gestiona las tablas" icon={<FaTable/>} />
          </div>

          <div className="relative w-full md:w-52 h-80 mb-4 md:mb-0">
            <Cardside title="Ejecutar Consultas SQL" description="Realiza consultas para obtener datos" icon={<MdFindInPage />} />
            <Cardvertical title="Gestión de Usuarios" description="Administra los usuarios y permisos" icon={<FaUsersCog/>} />
          </div>

          <div className="relative w-full md:w-52 h-80 mb-4 md:mb-0">
            <Cardside title="Copias de Seguridad" description="Realiza y programa copias de seguridad" icon={<MdBackup />} />
            <Cardvertical title="Optimización de Consultas" description="Mejora el rendimiento de las consultas" icon={<MdOutlineQueryStats/>} />
          </div>
        </Bounce>
      </div>
    </div>
  );
}
