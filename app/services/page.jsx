import { Building2, ClipboardCheck, Shield, Wrench, ArrowRight } from "lucide-react"
import Image from "next/image"
import Contact from "../components/Contact"

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
                  <a href="/" className="hover:text-sky-600 transition-colors">
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
                <span className="text-6xl font-light text-sky-600 mr-4">01</span>
                <div className="h-[1px] w-full bg-white mt-6"></div>
              </div>
              <h2 className="text-3xl font-light tracking-tight uppercase mb-8">Nuestros Servicios</h2>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-sky-600 hidden md:block"></div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-lg font-light leading-relaxed">
                Durante 18 años, hemos realizado gestión de propiedades y consultoría en Punta Mita, siempre buscando
                adaptarnos a las necesidades de los clientes para ofrecer servicios excepcionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview section with Swiss design */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3 flex items-start">
              <span className="text-6xl font-light text-sky-600 mr-4">02</span>
              <div className="h-[1px] w-full bg-black mt-6"></div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-8">
                Entre los servicios que ofrecemos se incluyen:
              </h2>
              <ul className="space-y-4 max-w-3xl">
                {[
                  "Mantenimiento de la propiedad",
                  "Limpieza diaria",
                  "Gestión de pagos y administración de la propiedad",
                  "Suministro de productos de limpieza según requerimientos",
                  "Inspección semanal de la propiedad con mantenimiento preventivo",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-sky-600 mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-800 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service categories with Swiss design */}
      <section className="w-full bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4 mb-16">
            <div className="col-span-12 md:col-span-3 flex items-start">
              <span className="text-6xl font-light text-sky-600 mr-4">03</span>
              <div className="h-[1px] w-full bg-black mt-6"></div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-4">Categorías de Servicios</h2>
              <p className="text-sm uppercase tracking-widest text-gray-600 font-light">
                Soluciones integrales para su propiedad
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* ADMINISTRACIÓN */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Building2 className="h-6 w-6 text-sky-600 mr-4" />
                  <h3 className="text-xl font-normal uppercase tracking-wide">Administración</h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {[
                      "Establecer vínculos profesionales con los propietarios",
                      "Gestión de la administración y cobranza",
                      "Control y administración del presupuesto",
                      "Auditorias administrativas",
                      "Atención en línea (APP) 24/7",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-sky-600"></div>
            </div>

            {/* OPERACIÓN */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <ClipboardCheck className="h-6 w-6 text-sky-600 mr-4" />
                  <h3 className="text-xl font-normal uppercase tracking-wide">Operación</h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {[
                      "Oficina en sitio",
                      "Inspecciones periódicas para detectar problemas",
                      "Mantenimiento preventivo y correctivo (plomería, electricidad, pintura, etc.)",
                      "Gestión de proveedores y contratistas",
                      "Jardinería y áreas comunes",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 border border-black"></div>
            </div>

            {/* MANTENIMIENTO */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Wrench className="h-6 w-6 text-sky-600 mr-4" />
                  <h3 className="text-xl font-normal uppercase tracking-wide">Mantenimiento</h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {["Preventivo", "Correctivo", "Estético", "Gestión y control del mantenimiento"].map(
                      (item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 font-light">{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border border-black"></div>
            </div>

            {/* SEGURIDAD */}
            <div className="col-span-12 md:col-span-6 relative">
              <div className="border border-black h-full">
                <div className="p-6 border-b border-black flex items-start">
                  <Shield className="h-6 w-6 text-sky-600 mr-4" />
                  <h3 className="text-xl font-normal uppercase tracking-wide">Seguridad</h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {[
                      "Plan integral de seguridad (CCTV)",
                      "Planes de evacuación",
                      "Accesos controlados",
                      "Protocolos para accidentes",
                      "Seguridad perimetral",
                      "Regulación del tránsito vehicular dentro del condominio",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-sky-600"></div>
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
                  Gestión inmobiliaria inteligente para tu condominio
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
  )
}
