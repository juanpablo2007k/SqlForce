import Image from "next/image";

export default function ContentHeader() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Columna de Información */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Información Importante</h2>
        <p>
          Aquí puedes agregar tu información importante. Este contenido será visible en pantallas grandes (md y superiores).
        </p>
      </div>

     
      <div className="md:w-1/2 p-4">
        <div className="relative w-full h-0 pb-150">
          <Image
            layout="fill"
            objectFit="cover"
            alt="Descripción de la imagen"
            className="rounded-md shadow"
            src="/sql_manager/public/image/img1.jpg"
          />
        </div>
      </div>
    </div>
  );
}
