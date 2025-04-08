import Image from "next/image";
import React from "react";
import Contact from "../components/Contact";

const page = () => {
  return (
    <div>
      <div className="relative h-[40vh] w-full">
        <Image
          className="h-full w-full object-cover select-none brightness-40"
          src="/assets/hero-w.jpg"
          alt="hero-img"
          width={1920}
          height={1080}
        />

        <div className="absolute text-white bottom-[20%] left-[5%]  md:left-[20%] flex text-xl md:text-2xl font-light">
          <h1 className="uppercase">Inicio</h1>
          <span className="">/</span>
          <h1 className="uppercase">Nosotros</h1>
        </div>
      </div>
      <div className="flex justify-center bg-black">
        <div className="w-[90%] md:w-[80%] lg:w-[60%]">
          <div className="py-[100px] text-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-full md:w-1/2 flex">
                <h1 className="p-5 uppercase text-4xl md:text-5xl font-light text-sky-50">
                  Sobre Nosotros
                </h1>
              </div>
              <div className="w-full md:w-1/2  text-left">
                <div className="p-5 text-xl text-sky-100 font-light">
                  <p>
                    Somos una empresa de administración de propiedades, gestión
                    de condominios y consultoría. Contamos con más de 18 años de
                    experiencia en la administración y operación de propiedades
                    en Punta Mita y más de 15 años de experiencia en rentas
                    vacacionales, administración y mantenimiento de propiedades
                    residenciales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Relleno simple entre secciones */}
      

      <div className="py-20">
        <div className="w-full flex justify-center">
          <div className="w-[90%] md:w-[80%] lg:w-[60%] p-4 my-2">
            <h1 className="uppercase text-4xl md:text-5xl font-light">
              visión
            </h1>
            <p className="font-light text-gray-900">
              Nuestra visión es consolidarnos como líderes en el sector de
              administración de propiedades y rentas vacacionales en Punta Mita,
              ofreciendo soluciones innovadoras y personalizadas que garanticen
              el máximo rendimiento de cada propiedad. A través de un{" "}
              <span className="font-normal text-sky-800">
                equipo altamente capacitado
              </span>{" "}
              y comprometido, buscamos superar los estándares de calidad,
              brindando tranquilidad y confianza a nuestros clientes mediante un
              servicio transparente, eficiente y orientado a resultados. Con un
              enfoque en la excelencia operativa y la sostenibilidad, nos
              esforzamos por crear valor a largo plazo para propietarios,
              inquilinos y comunidades.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center gap-10">
          <div className="w-[90%] md:w-[80%] lg:w-[60%] p-4 my-2">
            <h1 className="uppercase text-4xl md:text-5xl font-light">
              Objetivo
            </h1>
            <p className="font-light text-gray-900">
              Nuestro objetivo principal es proporcionar servicios de
              administración de propiedades de alta calidad que maximicen el
              valor de las inversiones de nuestros clientes. Nos esforzamos por
              mantener las propiedades en óptimas condiciones, garantizar la
              satisfacción de los inquilinos y propietarios, y optimizar los
              rendimientos financieros a través de una gestión eficiente y
              transparente.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full flex justify-center bg-white py-20">
        <Image
          className="absolute top-0 left-0 h-full w-full object-cover select-none brightness-25 z-[0]"
          src="/assets/hero-z.jpg"
          alt="about-relleno"
          width={1920}
          height={900}
        />
        <div className="relative w-[80%] md:w-[60%] text-center">
          <p className="text-sky-50 font-light text-4xl mb-8">
            Nuestro compromiso es brindar un servicio personalizado y
            profesional
          </p>
          <button className="cursor-pointer px-6 py-2 border border-sky-50 text-sky-50 uppercase hover:bg-sky-800 hover:text-white transition-colors">
            Contáctanos
          </button>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default page;
