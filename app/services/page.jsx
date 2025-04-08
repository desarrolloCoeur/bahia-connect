import { Building2, ClipboardCheck, Shield, Wrench } from "lucide-react";
import Image from "next/image";
import React from "react";
import Contact from "../components/Contact";

const page = () => {
  return (
    <div>
      <div className="relative h-[40vh] w-full">
        <Image
          className="h-full w-full object-cover select-none brightness-40"
          src="/assets/image2.jpg"
          alt="services image 1"
          width={1920}
          height={1080}
        />

        <div className="absolute text-white bottom-[20%] left-[5%]  md:left-[20%] flex text-xl md:text-2xl font-light">
          <h1 className="uppercase">Inicio</h1>
          <span className="">/</span>
          <h1 className="uppercase">servicios</h1>
        </div>
      </div>
      <div className="flex justify-center bg-sky-900">
        <div className="w-[90%] md:w-[80%] lg:w-[60%]">
          <div className="py-[100px] text-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-full md:w-1/2 flex">
                <h1 className="p-5 uppercase text-4xl md:text-5xl font-light text-sky-50">
                  Nuestros Servicios
                </h1>
              </div>
              <div className="w-full md:w-1/2  text-left">
                <div className="p-5 text-xl text-sky-100 font-light">
                  <p>
                    Durante 18 años, hemos realizado gestión de propiedades y
                    consultoría en Punta Mita, siempre buscando adaptarnos a las
                    necesidades de los clientes para ofrecer servicios
                    excepcionales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="p-4 max-w-6xl mx-auto w-[90%] md:w-[80%] lg:w-[60%]">
          <div className="mb-10">
            <h2 className="text-4xl font-light mb-4">
              Entre los servicios que ofrecemos se incluyen:
            </h2>
            <ul className="list-disc pl-6 space-y-2 mb-10">
              <li>Mantenimiento de la propiedad</li>
              <li>Limpieza diaria</li>
              <li>Gestión de pagos y administración de la propiedad</li>
              <li>Suministro de productos de limpieza según requerimientos</li>
              <li>
                Inspección semanal de la propiedad con mantenimiento preventivo
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-start space-x-4">
                  <Building2 className="h-8 w-8  mt-1" />
                  <h3 className="text-xl ">ADMINISTRACIÓN</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li>
                    • Establecer vínculos profesionales con los propietarios
                  </li>
                  <li>• Gestión de la administración y cobranza</li>
                  <li>• Control y administración del presupuesto</li>
                  <li>• Auditorias administrativas</li>
                  <li>• Atención en línea (APP) 24/7</li>
                </ul>
              </div>
            </div>

            <div className=" overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-start space-x-4">
                  <ClipboardCheck className="h-8 w-8  mt-1" />
                  <h3 className="text-xl ">OPERACIÓN</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li>• Oficina en sitio</li>
                  <li>• Inspecciones periódicas para detectar problemas</li>
                  <li>
                    • Mantenimiento preventivo y correctivo (plomería,
                    electricidad, pintura, etc.)
                  </li>
                  <li>• Gestión de proveedores y contratistas</li>
                  <li>• Jardinería y áreas comunes</li>
                </ul>
              </div>
            </div>

            <div className=" overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-start space-x-4">
                  <Wrench className="h-8 w-8  mt-1" />
                  <h3 className="text-xl ">MANTENIMIENTO</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li>• Preventivo</li>
                  <li>• Correctivo</li>
                  <li>• Estético</li>
                  <li>• Gestión y control del mantenimiento</li>
                </ul>
              </div>
            </div>

            <div className=" overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-start space-x-4">
                  <Shield className="h-8 w-8  mt-1" />
                  <h3 className="text-xl ">SEGURIDAD</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  <li>• Plan integral de seguridad (CCTV)</li>
                  <li>• Planes de evacuación</li>
                  <li>• Accesos controlados</li>
                  <li>• Protocolos para accidentes</li>
                  <li>• Seguridad perimetral</li>
                  <li>
                    • Regulación del tránsito vehicular dentro del condominio
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full flex justify-center bg-sky-800 py-20">
        {/* <Image
          className="absolute top-0 left-0 h-full w-full object-cover select-none brightness-25 z-[0]"
          src="/assets/image4.jpg"
          alt="about-relleno"
          width={1920}
          height={900}
        /> */}
        <div className="relative w-[80%] md:w-[60%] text-center">
          <p className="text-sky-50 font-light text-4xl mb-8">
            Gestión inmobiliaria inteligente para tu condominio
          </p>
          <button className="cursor-pointer px-6 py-2 border border-sky-50 text-sky-50 uppercase hover:bg-sky-800 hover:text-white transition-colors">
            Solicitar información
          </button>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default page;
