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
      <div className="w-full lg:w-1/2 bg-sky-50 py-10 lg:py-0 lg:relative">
        <div className="px-6 md:px-10 lg:absolute lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:pl-[10%] lg:pr-[20%] lg:px-0">
          <h1 className="uppercase text-2xl md:text-3xl text-sky-950 pb-10 text-center md:text-left">
            Sobre Nosotros
          </h1>
          <p className="text-gray-900 text-base md:text-lg text-center md:text-left">
            Nos dedicamos a la administración de propiedades, gestión de
            condominios y consultoría especializada. Tenemos más de 18 años de
            experiencia trabajando en la operación y cuidado de propiedades en
            Punta Mita, así como más de 15 años administrando rentas
            vacacionales y residencias de forma integral. Nuestro enfoque es
            brindar soluciones confiables, personalizadas y con atención al
            detalle, para que tú solo te preocupes por disfrutar tu inversión.
          </p>
          <div className="flex justify-center md:justify-start">
            <a href="/about">
              <div className="p-3 bg-sky-700 text-sky-50 mt-9 hover:bg-sky-900">
                Ver Más
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
