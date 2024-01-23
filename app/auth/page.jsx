"use client"
import { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar que los campos no estén en blanco
    if (!email || !password) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    // Limpiar mensaje de error
    setErrorMessage('');

    // Enviar datos al backend (Node.js/Express)
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Manejar la respuesta del servidor
      if (response.ok) {
        // Éxito
        console.log('Login exitoso');
      } else {
        // Error
        console.error('Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error de red', error);
    }
  };

  return (
    <>
      <div id="about" className="h-screen md:flex" style={{ background: 'linear-gradient(to bottom, #000000, #020411)', color: 'white' }}>
        <div
          className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-gray-800 to-pick-700 i justify-around items-center hidden"
          style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2023/08/28/02/58/village-8218204_1280.png')" }}
        >
          <div className="bg-black p-10 bg-opacity-70 ">
            <h1 className="text-white font-bold text-4xl font-sans">Bienvenido freeshop</h1>
            <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
            <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div id="about" className="flex md:w-1/2 justify-center py-10 items-center ">
          <form onSubmit={handleSubmit} method="post" action="http://localhost:3000/auth" id="about" className="bg-white" style={{ color: 'black' }}>
            <h1 className="text-gray-300 font-bold text-2xl mb-1">Inicia sesión nuevamente</h1>
            <p className="text-sm font-normal text-gray-200 mb-7">Bienvenido de vuelta</p>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <FaEnvelope className="h-5 w-5 text-gray-400" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black text-pink-400 pl-2 outline-none border-none hover: hover:text-white font-bold transition-all duration-300 hover:scale-90 ease-out transform hover:translate-x-2"
                type="text" name="email" id="email" placeholder="Correo Electrónico"
              />
            </div>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <FaLock className="h-5 w-5 text-gray-400" />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-black text-pink-400 pl-2 outline-none border-none hover: hover:text-white font-bold transition-all duration-300 hover:scale-90 ease-out transform hover:translate-x-2"
                type="password" name="password" id="password" placeholder="Contraseña"
              />
            </div>

            <button
              type="submit"
              className="block w-full bg-pink-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Ingresar
            </button>

            <span className="text-sm ml-2 text-white hover:text-blue-500 cursor-pointer">
              <a href="/register">Haz clic para registrarte</a>
            </span>

            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
