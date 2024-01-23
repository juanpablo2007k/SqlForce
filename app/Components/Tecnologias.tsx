import { FaJs, FaReact, FaNodeJs, FaDatabase, FaServer, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';

export default function Technologies() {

  const technologies = [
    { id: 1, icon: <FaJs size={80} color="#F7DF1E" />, name: "JavaScript" },
    { id: 2, icon: <SiNextdotjs size={80} color="#007ACC" />, name: "Next.js" },
    { id: 3, icon: <FaNodeJs size={80} color="#8CC84B" />, name: "Node.js" },
    { id: 4, icon: <FaServer size={80} color="#000000" />, name: "Express" },
    { id: 5, icon: <SiTypescript size={80} color="#3178C6" />, name: "TypeScript" },
    { id: 6, icon: <FaDatabase size={80} color="#336791" />, name: "SQL" },
  ];

  return (
    <>
      <h1 className="text-gray-400 text-center font-bold text-5xl mt-20 mb-10">Technologies Used</h1>
      <div className="flex flex-wrap justify-center mx-auto max-w-screen-lg">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className="m-2 flex flex-col items-center"
          >
            <div className="bg-white p-4 rounded-full shadow-md mb-2 hover:transition-all duration-300 ease-out transform hover:translate-y-2">
              {tech.icon}
            </div>
            <div className="text-gray-200 font-bold text-xl">{tech.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
