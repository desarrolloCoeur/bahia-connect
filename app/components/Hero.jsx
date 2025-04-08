import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div id="home" className="relative h-[100vh] w-full">
      <Image
        className="h-[100vh] w-full object-cover select-none brightness-60"
        src="/assets/hero-1.jpg"
        alt="hero-img"
        width={1920}
        height={1080}
      />
      <div
        className="absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2
        text-sky-50 text-center w-full sm:w-[80%] md:w-[70%] lg:w-[60%]"
      >
        <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mt-6 sm:mt-10 md:mt-16 lg:mb-[20px]">
          Experiencia, Integridad y Excelencia
        </h1>
        <div className="flex justify-center">
          <p className="text-sm sm:text-sm md:text-md lg:text-lg w-[90%] md:w-full uppercase">
            Evaluación integral para la mejora continua y sostenibilidad de su
            condominio.
          </p>
        </div>
        <div className="flex justify-center mt-8 sm:mt-12 md:mt-16 lg:mt-[100px]">
          <a href="#">
            <div
              className="px-4 py-2 sm:px-5 sm:py-3 border border-sky-50 uppercase text-white 
                          text-xs sm:text-sm md:text-md transition-colors duration-300
                          hover:bg-sky-900"
            >
              Solicitar Consultoria
            </div>
          </a>
        </div>
      </div>
      {/* <Image
        className=" absolute top-[50%] left-[50%] 
        translate-x-[-50%] translate-y-[-50%]
        object-cover select-none"
        src="/assets/logo-white.png"
        alt="logo-hero"
        width={900}
        height={900}
      /> */}
      {/* <div className="absolute text-white bottom-[5%] left-[10%] w-[300px] max-md:text-sm">
        Buscamos ser una empresa de gestión proactiva que satisfaga las
        expectativas de servicio en la comunidad a través de un desempeño
        excepcional y la integridad en todas nuestras acciones.
      </div> */}
    </div>
  );
};

export default Hero;
