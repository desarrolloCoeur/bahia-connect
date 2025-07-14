import {
  Building2,
  ClipboardCheck,
  Shield,
  Wrench,
  ArrowRight,
  Droplets,
  Trees,
  Users,
  RouteIcon as Road,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Contact from "../components/Contact";

export const metadata = {
  title:
    "Servicios | Bahía Connect - Administración y Mantenimiento de Propiedades",
  description:
    "Servicios profesionales de administración, operación, mantenimiento y seguridad para condominios y propiedades en Bahía de Banderas. Soluciones integrales para propietarios e inversionistas.",
  keywords:
    "administración de propiedades, mantenimiento de condominios, seguridad inmobiliaria, operación de condominios, gestión de áreas comunes, servicios para propietarios, Bahía de Banderas, Nayarit, Punta Mita, servicios inmobiliarios",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero section with Swiss design */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/assets/image2.jpg"
          alt="Servicios"
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
                  Servicios
                </h1>
                <div className="flex items-center text-sm text-white/80 uppercase tracking-wider font-light">
                  <a
                    href="/es"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Inicio
                  </a>
                  <span className="mx-2">/</span>
                  <span className="text-white">Servicios</span>
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

      {/* Nuestros Servicios section with Swiss design */}
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
                Nuestros Servicios
              </h2>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-sky-600 hidden md:block"></div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-lg font-light leading-relaxed">
                Con más de 23 años en el sector de la región de Bahía de
                Banderas, hemos gestionado con éxito múltiples proyectos de gran
                escala, desde Punta Mita y sus alrededores hasta Costa Norte de
                Nayarit, Sierra Madre y Costa Alegre de Jalisco, siempre
                enfocándonos en los resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services section with Swiss design */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-3 flex items-start">
              <span className="text-6xl font-light text-sky-600 mr-4">02</span>
              <div className="h-[1px] w-full bg-black mt-6"></div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-8">
                Servicios Especializados
              </h2>
              <p className="text-lg font-light text-gray-600 mb-8">
                Más que administradores, somos aliados estratégicos.
              </p>
              <blockquote className="text-xl font-light italic text-sky-800 border-l-2 border-sky-600 pl-6">
                "Cada acción diaria construye la confianza que nos distingue."
              </blockquote>
            </div>
          </div>

          {/* Services Grid - Modified to 2 columns */}
          <div className="grid grid-cols-12 gap-6">
            {/* Administración Integral */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Building2 className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                  <h3 className="text-lg font-normal uppercase tracking-wide">
                    Administración Integral de Condominios
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Gestión profesional de propiedades residenciales y
                        hoteleras
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Soluciones eficientes y personalizadas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Enfoque en valorización y óptimo funcionamiento de las
                        comunidades
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-sky-600"></div>
            </div>

            {/* Mantenimiento de Áreas Verdes */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Trees className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                  <h3 className="text-lg font-normal uppercase tracking-wide">
                    Mantenimiento de Áreas Verdes
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Coordinación de jardinería en más de 18 proyectos
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Poda, riego automatizado, fertilización y cuidado del
                        paisajismo
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Supervisión de empresas especializadas o equipos propios
                        del condominio
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border border-black"></div>
            </div>

            {/* Limpieza y Conservación */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <ClipboardCheck className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                  <h3 className="text-lg font-normal uppercase tracking-wide">
                    Limpieza y Conservación de Áreas Comunes
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Protocolos basados en estándares comparables a hoteles
                        de lujo
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Mantenimiento diario de pasillos, salones y zonas
                        compartidas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Supervisión de iluminación, ventilación y reparaciones
                        menores
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border border-black"></div>
            </div>

            {/* Sistemas Hidráulicos y Albercas */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Droplets className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                  <h3 className="text-lg font-normal uppercase tracking-wide">
                    Sistemas Hidráulicos y Albercas
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Mantenimiento de más de 140 albercas en residenciales y
                        casas club
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Control de pH, limpieza, filtros y circulación
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Gestión de redes hidráulicas, estaciones de bombeo y
                        riego
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-sky-600"></div>
            </div>

            {/* Seguridad y Control de Acceso */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Shield className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                  <h3 className="text-lg font-normal uppercase tracking-wide">
                    Seguridad y Control de Acceso
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Supervisión de personal de seguridad (interno o externo)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Implementación de sistemas CCTV, controles de acceso y
                        protocolos de emergencia
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Estructura organizacional y manuales operativos
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 w-6 h-6 border border-black"></div>
            </div>

            {/* Infraestructura y Vialidades */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Road className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                  <h3 className="text-lg font-normal uppercase tracking-wide">
                    Infraestructura y Vialidades
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Mantenimiento de caminos internos: concreto, asfalto,
                        empedrado
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Construcción y conservación de casetas y estructuras
                        clave
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-sky-600"></div>
            </div>

            {/* Atención al Cliente */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Phone className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                  <h3 className="text-lg font-normal uppercase tracking-wide">
                    Atención al Cliente y Comunicación
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Departamento especializado en atención a residentes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Canales disponibles: oficina HOA, apps móviles y
                        portales web
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Gestión transparente de reportes, incidencias y
                        solicitudes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border border-black"></div>
            </div>

            {/* Compromiso con la Comunidad */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Users className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                  <h3 className="text-lg font-normal uppercase tracking-wide">
                    Compromiso con la Comunidad
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Gestión eficiente, segura y armoniosa
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Enfoque proactivo y adaptado a cada condominio
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Construcción de comunidades sostenibles y bien
                        gestionadas
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border border-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section with Swiss design */}
      <section className="w-full relative h-[60vh] overflow-hidden">
        <Image
          src="/assets/image4.jpg"
          alt="Servicios"
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
                  Gestión inmobiliaria inteligente para tu condominio
                </p>
                <a
                  href="/es/contact"
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
