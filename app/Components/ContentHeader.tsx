"use client";
import { FaDatabase } from "react-icons/fa6";
import Cardside from "../Components/Cardside";
import CardVertical from "./Cardvertical";
import { Bounce } from "react-awesome-reveal";
import { MdOutlineNetworkCell, MdFindInPage, MdBackup } from "react-icons/md";
import { FaTable, FaUsersCog } from "react-icons/fa";
import { MdOutlineQueryStats } from "react-icons/md";

export default function ContentHeader() {
  return (
    <div className="flex flex-col md:flex-row mt-10 p-5">
      
      <div className="md:w-1/2 p-4">
        <h1 className="opacity-90 text-4xl md:text-6xl font-bold mb-4 text-gray-800 hover:transition-all duration-300 ease-out transform hover:translate-x-2">
          <span className="text-blue-500">Cloud</span>
          <span className="text-green-500"> Services</span>
          <span className="text-yellow-500"> Made</span>
          <span className="text-red-500"> Simple</span>
          <button className="ml-2 p-2 rounded-full text-white">
            <FaDatabase />
          </button>
        </h1>
        <p className="text-gray-500 font-bold mb-8 hover:transition-all duration-300 ease-out transform hover:translate-x-3">
          Connect your databases and interact with tables effortlessly with{" "}
          <strong className="text-blue-500">sqlForce</strong>. Revolutionize
          your data management experience and simplify SQL operations.
        </p>
        <button
          className="bg-gray-900 rounded-xl text-white font-bold py-3 px-5 hover:bg-purple-500 transition duration-300 ease-in-out"
        >
          Click to Watch
        </button>
        <button
          className="bg-blue-500 rounded-xl text-white font-bold py-3 px-5 ml-4 hover:bg-blue-700 transition duration-300 ease-in-out"
        >
        <a href="https://sql-force-backend.vercel.app/auth/register">Register</a>
        </button>
      </div>

      {/* Columna de Imagen */}
      <div className="flex flex-wrap justify-center w-full md:w-1/2">
       
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Bounce cascade={true}>
            <Cardside
              title="Conexión a la Base de Datos"
              description="Gestiona las conexiones SQL"
              icon={<MdOutlineNetworkCell />}
            />
            <Cardside
              title="Ejecutar Consultas SQL"
              description="Realiza consultas para obtener datos"
              icon={<MdFindInPage />}
            />
            <Cardside
              title="Copias de Seguridad"
              description="Realiza y programa copias de seguridad"
              icon={<MdBackup />}
            />
            <CardVertical
              title="Tablas de Datos sql"
              description="Visualiza y gestiona las tablas"
              icon={<FaTable />}
            />
            <CardVertical
              title="Gestión de Usuarios"
              description="Administra los usuarios y permisos"
              icon={<FaUsersCog />}
            />
            <CardVertical
              title="Optimización de Consultas"
              description="Mejora el rendimiento "
              icon={<MdOutlineQueryStats />}
            />
            </Bounce>
          </div>
        
      </div>
    </div>
  );
}
