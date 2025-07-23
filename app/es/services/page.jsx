import {
  Building2,
  ClipboardCheck,
  Shield,
  ArrowRight,
  Droplets,
  Trees,
  Users,
  RouteIcon as Road,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Contact from "../components/Contact"

export const metadata = {
  title: "Servicios | Bahía Connect - Administración y Mantenimiento de Propiedades",
  description:
    "Servicios profesionales de administración de propiedades, operación, mantenimiento y seguridad para condominios y propiedades en Bahía de Banderas. Soluciones integrales para propietarios e inversionistas.",
  keywords:
    "administración de propiedades, mantenimiento de condominios, seguridad de propiedades, operaciones de condominios, gestión de áreas comunes, servicios a propietarios, Bahía de Banderas, Nayarit, Punta Mita, servicios inmobiliarios",
}

export default function ServicesPage() {
  return (
    <main>
      {/* Hero section with Swiss design */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image src="/assets/image2.jpg" alt="Servicios" fill className="object-cover grayscale-[70%]" priority />
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
                  <a href="/es" className="hover:text-sky-600 transition-colors">
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

      {/* Our Services section with Swiss design */}
      <section className="w-full bg-sky-800 text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-7 md:col-start-1">
              <div className="flex items-start mb-6">
                <span className="text-6xl font-light text-sky-600 mr-4">01</span>
                <div className="h-[1px] w-full bg-white mt-6"></div>
              </div>
              <h2 className="text-3xl font-light tracking-tight uppercase mb-8">Nuestros Servicios</h2>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-sky-600 hidden md:block"></div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-lg font-light leading-relaxed">
                Con más de 23 años en la región de Bahía de Banderas, hemos gestionado exitosamente múltiples proyectos
                de gran escala, desde Punta Mita y sus alrededores hasta la Costa Norte de Nayarit, Sierra Madre y Costa
                Alegre en Jalisco, siempre enfocados en resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 md:col-span-3 flex items-start">
              <span className="text-6xl font-light text-sky-600 mr-4">02</span>
              <div className="h-[1px] w-full bg-black mt-6"></div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-8">Servicios Especializados</h2>
              <p className="text-lg font-light text-gray-600 mb-8">
                Más que administradores, somos aliados estratégicos.
              </p>
              <blockquote className="text-xl font-light italic text-sky-800 border-l-2 border-sky-600 pl-6">
                "Cada acción diaria construye la confianza que nos distingue."
              </blockquote>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-12 gap-6">
            {/* Comprehensive Management */}
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
                        Soluciones integrales para la gestión eficiente de áreas comunes en proyectos residenciales y
                        hoteleras
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Comprometidos con el crecimiento del valor y la operatividad eficiente de cada comunidad
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-sky-600"></div>
            </div>

            {/* Green Area Maintenance */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Trees className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                  <h3 className="text-lg font-normal uppercase tracking-wide">Mantenimiento de Áreas Verdes</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Coordinamos servicios de jardinería con empresas especializadas o conformamos equipos internos
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Soluciones completas en jardinería, poda profesional, fertilización oportuna y riego eficiente
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Supervisión para garantizar resultados de alta calidad y cuidado del diseño paisajístico
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border border-black"></div>
            </div>

            {/* Cleaning and Conservation */}
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
                        Protocolos basados en estándares comparables a hoteles de lujo (Certificación Cristal)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Limpieza y conservación diaria de pasillos, áreas comunes y espacios sociales
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Supervisión de iluminación, ventilación y reparaciones menores de manera periódica
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border border-black"></div>
            </div>

            {/* Hydraulic Systems and Pools */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Droplets className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                  <h3 className="text-lg font-normal uppercase tracking-wide">Sistemas Hidráulicos y Albercas</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Actualmente damos mantenimiento a más de 150 albercas en unidades residenciales y casas club
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Supervisión integral del pH, limpieza eficiente, cuidado de filtros y circulación adecuada
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Gestión especializada de infraestructura hidráulica, estaciones de bombeo y riego automatizado
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-sky-600"></div>
            </div>

            {/* Security and Access Control */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Shield className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                  <h3 className="text-lg font-normal uppercase tracking-wide">Seguridad y Control de Acceso</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Gestión efectiva del personal de seguridad, tanto propio como de empresas externas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Implementación de sistemas CCTV, controles de acceso y protocolos de emergencia
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">Estructura organizacional y manuales operativos</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 w-6 h-6 border border-black"></div>
            </div>

            {/* Infrastructure and Roads */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Road className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                  <h3 className="text-lg font-normal uppercase tracking-wide">Infraestructura y Vialidades</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Conservación y reparación de caminos internos en concreto, asfalto y empedrado
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Construcción y cuidado especializado de casetas y edificaciones esenciales en áreas estratégicas
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-sky-600"></div>
            </div>

            {/* Customer Service */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Phone className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                  <h3 className="text-lg font-normal uppercase tracking-wide">Atención al Cliente y Comunicación</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Departamento enfocado en brindar atención especializada y soluciones a los residentes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Canales disponibles: oficina de atención a clientes y administración, apps móviles y portales
                        web
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Administración clara y accesible de reportes, incidencias y solicitudes
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border border-black"></div>
            </div>

            {/* Community Commitment */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Users className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
                  <h3 className="text-lg font-normal uppercase tracking-wide">Compromiso con la Comunidad</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Impulsamos una gestión responsable que garantiza eficiencia, seguridad y armonía en la comunidad
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Estrategia dinámica y personalizada, diseñada para satisfacer las necesidades específicas de
                        cada condominio
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">
                        Desarrollo de comunidades responsables, sostenibles y con una gestión eficiente
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
        <Image src="/assets/image4.jpg" alt="Servicios" fill className="object-cover grayscale-[70%]" priority />
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
                  Administración inteligente de propiedades para tu condominio
                </p>
                <a
                  href="/es/contacto"
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
  )
}
