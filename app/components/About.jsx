import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row bg-sky-100">
      {/* Image container - full width on mobile, 50% on desktop */}
      <div className="hidden w-full lg:w-1/2 lg:inline-block">
        <Image
          className="w-full h-[30vh] lg:h-[80vh] object-cover select-none"
          src="/assets/hero-j.jpg"
          alt="hero-img"
          width={1000}
          height={1000}
          priority
        />
      </div>

      {/* Content container - full width on mobile, 50% on desktop */}
      <div className="w-full lg:w-1/2 bg-sky-100 py-10 lg:py-0 lg:relative">
        <div className="px-6 md:px-10 lg:absolute lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:pl-[10%] lg:pr-[20%] lg:px-0">
          <h1 className="uppercase text-2xl md:text-3xl text-sky-950">Sobre Nosotros</h1>
          <p className="text-base md:text-lg font-light uppercase py-5 md:py-9 text-sky-800">
            Evaluación integral para la mejora continua y sostenibilidad de su condominio.
          </p>
          <p className="text-gray-600 text-base md:text-lg">
            Somos una empresa de administración de propiedades, gestión de condominios y consultoría. Contamos con más
            de 18 años de experiencia en la administración y operación de propiedades en Punta Mita y más de 15 años de
            experiencia en rentas vacacionales, administración y mantenimiento de propiedades residenciales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
