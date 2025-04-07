import Image from "next/image";
import React from "react";
import Contact from "../components/Contact";
import { ClipboardCheck, FileText, Settings } from "lucide-react";

const page = () => {
  return (
    <div className="bg-sky-50">
      <div className="relative h-[40vh] w-full">
        <Image
          className="h-full w-full object-cover select-none brightness-40"
          src="/assets/image2.jpg"
          alt="hero-img"
          width={1920}
          height={1080}
        />

        <div className="absolute text-white bottom-[20%] left-[5%]  md:left-[20%] flex text-xl md:text-2xl font-light">
          <h1 className="uppercase">Inicio</h1>
          <span className="">/</span>
          <h1 className="uppercase">Consultoría</h1>
        </div>
      </div>
      <div className="flex justify-center bg-black">
        <div className="w-[90%] md:w-[80%] lg:w-[60%]">
          <div className="py-[100px] text-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-full md:w-1/2 flex">
                <h1 className="p-5 uppercase text-4xl md:text-5xl font-light text-sky-50">
                  Consultoría 360°
                </h1>
              </div>
              <div className="w-full md:w-1/2  text-left">
                <div className="p-5 text-xl text-sky-100 font-light">
                  <p>
                    Evaluación integral del programa de mantenimiento, operación
                    e infraestructura de las áreas comunes de su condominio para
                    garantizar la sostenibilidad a largo plazo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* body */}
      <div className="w-full flex justify-center">
        <div className="w-full md:w-2/3 p-6 md:p-8 my-2">
          <h1 className="uppercase text-4xl md:text-5xl font-light">
            Objetivo
          </h1>
          <p className="font-light text-gray-900">
            Exponer los resultados preliminares del análisis centrado en el
            estado del programa de mantenimiento y operación de las áreas
            comunes del Condominio, así como en su infraestructura y activos.
            Esta evaluación tiene como propósito identificar tanto los puntos
            fuertes como las oportunidades de mejora en la gestión de estos
            espacios, esenciales para el bienestar y la satisfacción de los
            residentes.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full md:w-2/3 p-6 md:p-8 my-2">
          <h2 className="mb-4 text-4xl font-light">Nuestro Proceso</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex flex-row items-center gap-4 p-6">
                <div className="flex h-12 w-12 justify-center">
                  <FileText className="h-10 w-10 text-gray-600 font-light" />
                </div>
                <div>
                  <h3 className="text-xl">Recopilación</h3>
                  <p className="text-lg font-light">
                    Documentación y análisis inicial
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <p className="font-light italic">
                  Recopilamos y analizamos toda la documentación relevante para
                  entender la estructura legal, operativa y financiera del
                  condominio.
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center gap-4 p-6">
                <div className="flex h-12 w-12 justify-center">
                  <ClipboardCheck className="h-10 w-10 text-gray-600 font-light" />
                </div>
                <div>
                  <h3 className="text-xl">Evaluación</h3>
                  <p className="text-lg font-light">Inspección y diagnóstico</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <p className="font-light italic">
                  Realizamos una inspección detallada de las instalaciones,
                  infraestructura y procesos operativos para identificar
                  fortalezas y áreas de oportunidad.
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center gap-4 p-6">
                <div className="flex h-12 w-12 justify-center">
                  <Settings className="h-10 w-10 text-gray-600 font-light" />
                </div>
                <div>
                  <h3 className="text-xl">Recomendaciones</h3>
                  <p className="text-lg font-light">
                    Plan de acción personalizado
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <p className="font-light italic">
                  Desarrollamos un plan detallado con recomendaciones
                  específicas para optimizar la operación, mantenimiento y
                  gestión del condominio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full flex justify-center bg-sky-900 py-20">
        {/* <Image
          className="absolute top-0 left-0 h-full w-full object-cover select-none brightness-25 z-[0]"
          src="/assets/image5.jpg"
          alt="about-relleno"
          width={1920}
          height={900}
        /> */}
        <div className="relative w-[80%] md:w-[60%] text-center">
          <p className="text-sky-50 font-light text-4xl mb-8">
            Nuestra prioridad es optimizar la gestión de su condominio.
          </p>
          <button className="cursor-pointer px-6 py-2 border border-sky-50 text-sky-50 uppercase hover:bg-sky-800 hover:text-white transition-colors">
            Contáctanos
          </button>
        </div>
      </div>
      {/* documentos requeridos */}
      <div className="flex justify-center w-full font-light">
        <section className="w-full md:w-2/3 p-6 md:p-8 my-12">
          <h2 className="mb-8 text-4xl font-light">Documentos Requeridos</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className=" ">
              <div className="p-6">
                <h3 className="text-xl font-normal">Documentación Legal</h3>
              </div>
              <div className="px-6 pb-6">
                <ul className="list-inside list-disc space-y-2">
                  <li>Régimen de Propiedad</li>
                  <li>Reglamento Interior</li>
                  <li>Reglamento de Construcción</li>
                  <li>Actas de Asamblea</li>
                  <li>Acta Constitutiva de la AC</li>
                </ul>
              </div>
            </div>
            <div className=" ">
              <div className="p-6">
                <h3 className="text-xl font-normal">Permisos y Concesiones</h3>
              </div>
              <div className="px-6 pb-6">
                <ul className="list-inside list-disc space-y-2">
                  <li>Manifestación de Impacto Ambiental (MIA)</li>
                  <li>Concesión de Zona Federal</li>
                  <li>Concesión de CNA</li>
                  <li>Reportes a PROFEPA</li>
                  <li>Pagos a ZOFEMAT</li>
                </ul>
              </div>
            </div>
            <div className=" ">
              <div className="p-6">
                <h3 className="text-xl font-normal">Documentación Técnica</h3>
              </div>
              <div className="px-6 pb-6">
                <ul className="list-inside list-disc space-y-2">
                  <li>Planos de infraestructura general</li>
                  <li>Proyecto y plano de áreas verdes</li>
                  <li>Programa de operación de planta de tratamiento</li>
                  <li>Garantías (estructuras, equipamiento, etc.)</li>
                </ul>
              </div>
            </div>
            <div className=" ">
              <div className="p-6">
                <h3 className="text-xl font-normal">
                  Documentación Administrativa
                </h3>
              </div>
              <div className="px-6 pb-6">
                <ul className="list-inside list-disc space-y-2">
                  <li>Auditorías previas</li>
                  <li>Presupuesto del año actual</li>
                  <li>Reportes mensuales del Administrador</li>
                  <li>Pólizas de mantenimiento</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="relative w-full flex justify-center bg-black py-20">
        <Image
          className="absolute top-0 left-0 h-full w-full object-cover select-none brightness-25 z-[0]"
          src="/assets/image5.jpg"
          alt="about-relleno"
          width={1920}
          height={900}
        />
        <div className="relative w-[80%] md:w-[60%] text-center">
          <p className="text-sky-50 font-light text-4xl mb-8">
            Contáctenos hoy mismo para programar una consultoría inicial
          </p>
          <button className="cursor-pointer px-6 py-2 border border-sky-50 text-sky-50 uppercase hover:bg-sky-800 hover:text-white transition-colors">
            Solicitar información
          </button>
        </div>
      </div>
      <Contact/>
    </div>
  );
};

export default page;
