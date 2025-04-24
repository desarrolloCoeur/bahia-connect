import Image from "next/image";
import { ClipboardCheck, FileText, Settings, ArrowRight } from "lucide-react";
import Contact from "../components/Contact";

export const metadata = {
  title: "Consultoría 360° | Bahía Connect - Optimización de Propiedades",
  description:
    "Servicio de consultoría integral para condominios y propiedades. Evaluación, diagnóstico y recomendaciones para optimizar la gestión y rentabilidad de tu inversión.",
  keywords:
    "consultoría inmobiliaria, consultoría 360, optimización de propiedades, evaluación de condominios, diagnóstico inmobiliario, rentabilidad inmobiliaria, gestión eficiente, Bahía de Banderas, Nayarit, Punta Mita",
};

export default function ConsultoriaPage() {
  return (
    <main>
      {/* Hero section with Swiss design */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/assets/consul.jpg"
          alt="Consultoría"
          fill
          className="object-cover grayscale-[70%]"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Swiss design grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          <div className="col-span-1 h-full border-l border-white/10"></div>
          <div className="col-span-1 col-start-4 h-full border-l border-white/10"></div>
          <div className="col-span-1 col-start-7 h-full border-l border-white/10"></div>
          <div className="col-span-1 col-start-10 h-full border-l border-white/10"></div>
        </div>

        {/* Content container */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8 md:col-start-3">
                <div className="h-[2px] w-16 bg-sky-600 mb-6"></div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white uppercase mb-4">
                  Consultoría
                </h1>
                <div className="flex items-center text-sm text-white/80 uppercase tracking-wider font-light">
                  <a href="/" className="hover:text-sky-600 transition-colors">
                    Inicio
                  </a>
                  <span className="mx-2">/</span>
                  <span className="text-white">Consultoría</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom grid line */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-12">
              <div className="col-span-3 h-[1px] bg-white/30"></div>
              <div className="col-span-1 col-start-12">
                <div className="w-4 h-4 bg-sky-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultoría 360° section with Swiss design */}
      <section className="w-full bg-sky-800 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7 md:col-start-1">
              <div className="flex items-start mb-6">
                <span className="text-6xl font-light text-sky-600 mr-4">
                  01
                </span>
                <div className="h-[1px] w-full bg-white mt-6"></div>
              </div>
              <h2 className="text-3xl font-light tracking-tight uppercase mb-8">
                Consultoría 360°
              </h2>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-sky-600 hidden md:block"></div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-lg font-light leading-relaxed">
                Nuestra consultoría 360° te ofrece una revisión completa del
                estado actual de tu propiedad o desarrollo. Con base en un
                análisis profundo, te damos recomendaciones claras y accionables
                para mejorar el plan de operación y mantenimiento. El objetivo
                es ayudarte a hacer tu proyecto más eficiente, rentable y
                sostenible a largo plazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo section with Swiss design */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3 flex items-start">
              <span className="text-6xl font-light text-sky-600 mr-4">02</span>
              <div className="h-[1px] w-full bg-black mt-6"></div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-8">
                Objetivo
              </h2>
              <p className="text-gray-800 font-light leading-relaxed max-w-3xl">
                Exponer los resultados preliminares del análisis centrado en el
                estado del programa de mantenimiento y operación de las áreas
                comunes del Condominio, así como en su infraestructura y
                activos. Esta evaluación tiene como propósito identificar tanto
                los puntos fuertes como las oportunidades de mejora en la
                gestión de estos espacios, esenciales para el bienestar y la
                satisfacción de los residentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Proceso section with Swiss design */}
      <section className="w-full bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4 mb-16">
            <div className="col-span-12 md:col-span-3 flex items-start">
              <span className="text-6xl font-light text-sky-600 mr-4">03</span>
              <div className="h-[1px] w-full bg-black mt-6"></div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-4">
                Nuestro Proceso
              </h2>
              <p className="text-sm uppercase tracking-widest text-gray-600 font-light">
                Metodología estructurada para resultados óptimos
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4 relative">
              <div className="border-l-2 border-sky-600 pl-6 h-full">
                <div className="flex items-start mb-4">
                  <FileText className="h-6 w-6 text-sky-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-normal uppercase tracking-wide">
                      Recopilación
                    </h3>
                    <p className="text-sm text-gray-600 uppercase tracking-wider">
                      Documentación y análisis inicial
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 font-light">
                  Recopilamos y analizamos toda la documentación relevante para
                  entender la estructura legal, operativa y financiera del
                  condominio.
                </p>
              </div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-sky-600"></div>
            </div>

            <div className="col-span-12 md:col-span-4 relative">
              <div className="border-l-2 border-sky-600 pl-6 h-full">
                <div className="flex items-start mb-4">
                  <ClipboardCheck className="h-6 w-6 text-sky-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-normal uppercase tracking-wide">
                      Evaluación
                    </h3>
                    <p className="text-sm text-gray-600 uppercase tracking-wider">
                      Inspección y diagnóstico
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 font-light">
                  Realizamos una inspección detallada de las instalaciones,
                  infraestructura y procesos operativos para identificar
                  fortalezas y áreas de oportunidad.
                </p>
              </div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-sky-600"></div>
            </div>

            <div className="col-span-12 md:col-span-4 relative">
              <div className="border-l-2 border-sky-600 pl-6 h-full">
                <div className="flex items-start mb-4">
                  <Settings className="h-6 w-6 text-sky-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-normal uppercase tracking-wide">
                      Recomendaciones
                    </h3>
                    <p className="text-sm text-gray-600 uppercase tracking-wider">
                      Plan de acción personalizado
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 font-light">
                  Desarrollamos un plan detallado con recomendaciones
                  específicas para optimizar la operación, mantenimiento y
                  gestión del condominio.
                </p>
              </div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-sky-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* First CTA section with Swiss design */}
      <section className="w-full bg-sky-800 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
              <div className="h-[2px] w-16 bg-sky-600 mb-8 mx-auto"></div>
              <p className="text-2xl md:text-3xl font-light text-white mb-10">
                Nuestra prioridad es optimizar la gestión de su condominio.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center border border-white px-8 py-3 text-white uppercase hover:bg-sky-600 hover:border-sky-600 transition-colors group"
              >
                <span className="mr-2">Contáctanos</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Documentos Requeridos section with Swiss design */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4 mb-16">
            <div className="col-span-12 md:col-span-3 flex items-start">
              <span className="text-6xl font-light text-sky-600 mr-4">04</span>
              <div className="h-[1px] w-full bg-black mt-6"></div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-4">
                Documentos Requeridos
              </h2>
              <p className="text-sm uppercase tracking-widest text-gray-600 font-light">
                Información necesaria para un análisis completo
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6 lg:col-span-3 relative">
              <div className="border-t-2 border-sky-600 pt-6">
                <h3 className="text-xl font-normal uppercase tracking-wide mb-6">
                  Documentación Legal
                </h3>
                <ul className="space-y-3">
                  {[
                    "Régimen de Propiedad",
                    "Reglamento Interior",
                    "Reglamento de Construcción",
                    "Actas de Asamblea",
                    "Acta Constitutiva de la AC",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 w-4 h-4 border border-black"></div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3 relative">
              <div className="border-t-2 border-sky-600 pt-6">
                <h3 className="text-xl font-normal uppercase tracking-wide mb-6">
                  Permisos y Concesiones
                </h3>
                <ul className="space-y-3">
                  {[
                    "Manifestación de Impacto Ambiental (MIA)",
                    "Concesión de Zona Federal",
                    "Concesión de CNA",
                    "Reportes a PROFEPA",
                    "Pagos a ZOFEMAT",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 w-4 h-4 border border-black"></div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3 relative">
              <div className="border-t-2 border-sky-600 pt-6">
                <h3 className="text-xl font-normal uppercase tracking-wide mb-6">
                  Documentación Técnica
                </h3>
                <ul className="space-y-3">
                  {[
                    "Pólizas de mantenimiento",
                    "Planos de infraestructura general",
                    "Proyecto y plano de áreas verdes",
                    "Programa de Operación y Mantenimiento de Plantas y/o Equipos existentes",
                    "Garantías (estructuras, equipamiento, etc.)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 w-4 h-4 border border-black"></div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3 relative">
              <div className="border-t-2 border-sky-600 pt-6">
                <h3 className="text-xl font-normal uppercase tracking-wide mb-6">
                  Documentación Administrativa
                </h3>
                <ul className="space-y-3">
                  {[
                    "Auditorías previas",
                    "Presupuesto del año actual",
                    "Reportes mensuales del Administrador",                    
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 w-4 h-4 border border-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA section with Swiss design */}
      <section className="w-full relative h-[60vh] overflow-hidden">
        <Image
          src="/assets/image5.jpg"
          alt="Contáctanos"
          fill
          className="object-cover grayscale-[70%]"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Swiss design grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          <div className="col-span-1 h-full border-l border-white/10"></div>
          <div className="col-span-1 col-start-5 h-full border-l border-white/10"></div>
          <div className="col-span-1 col-start-9 h-full border-l border-white/10"></div>
        </div>

        {/* Content container */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                <div className="h-[2px] w-16 bg-sky-600 mb-8 mx-auto"></div>
                <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-10 max-w-3xl mx-auto">
                  Contáctenos hoy mismo para programar una consultoría inicial
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center border border-white px-8 py-3 text-white uppercase hover:bg-sky-600 hover:border-sky-600 transition-colors group"
                >
                  <span className="mr-2">Solicitar información</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom grid line */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-12">
              <div className="col-span-1 col-start-1">
                <div className="w-6 h-6 border border-white"></div>
              </div>
              <div className="col-span-3 col-start-9 h-[1px] bg-white/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <Contact />
    </main>
  );
}
