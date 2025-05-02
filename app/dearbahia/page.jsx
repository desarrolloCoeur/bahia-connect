"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Contact from "../components/Contact";

export default function AboutPage() {
  return (
    <main>
      {/* Hero section with Swiss design */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/assets/hero-dear.jpg"
          alt="Nosotros"
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
                  Dear bahía
                </h1>
                <div className="flex items-center text-sm text-white/80 uppercase tracking-wider font-light">
                  <a href="/" className="hover:text-sky-600 transition-colors">
                    Inicio
                  </a>
                  <span className="mx-2">/</span>
                  <span className="text-white">dear bahía</span>
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

      {/* About Us section with Swiss design */}

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
                dear bahía
              </h2>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-sky-600 hidden md:block"></div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-lg font-light leading-relaxed">
                Uno de nuestros pilares fundamentales es el apoyo activo a
                asociaciones civiles y organizadas, promoviendo el equilibrio y
                el compromiso comunitario.
                <br />
                <br />
                Dear Bahía es nuestro capítulo o sección de la organización
                donde nos gusta reconocer con la idea de incentivar un mayor
                número de acciones por parte de nuestros clientes y proyectos
                con los que trabajamos. Tenemos clara la importancia de
                contribuir a mantener o mejorar nuestro entorno y aquí nos
                gustaría invitar a todos a agradecer y devolver todo lo que la
                bahía nos ha ofrecido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities section */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <div className="flex items-start mb-6">
                <span className="text-6xl font-light text-sky-600 mr-4">
                  02
                </span>
                <div className="h-[1px] w-full bg-black mt-6"></div>
              </div>
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-8">
                Nuestras Acciones
              </h2>
              <div className="w-8 h-8 border border-black mt-8"></div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-light text-sky-600 mb-4">
                    Conservación Marina
                  </h3>
                  <p className="text-gray-700 font-light">
                    Colaboramos en el monitoreo de nidos, protección de huevos y
                    liberación de tortugas marinas recién nacidas, asegurando su
                    supervivencia y promoviendo la conservación de la fauna
                    marina.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-light text-sky-600 mb-4">
                    Limpieza Costera
                  </h3>
                  <p className="text-gray-700 font-light">
                    Recolectamos residuos, principalmente plásticos, que son
                    arrastrados por las mareas o dejados por visitantes en zonas
                    costeras.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-light text-sky-600 mb-4">
                    Reciclaje
                  </h3>
                  <p className="text-gray-700 font-light">
                    Separamos y clasificamos materiales reciclables, promoviendo
                    su correcta disposición y fomentando una cultura de
                    reciclaje en la comunidad.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-light text-sky-600 mb-4">
                    Reforestación
                  </h3>
                  <p className="text-gray-700 font-light">
                    Participamos en actividades de reforestación de áreas
                    naturales, como manglares y zonas dunares, para preservar el
                    equilibrio ecológico y prevenir la erosión.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-light text-sky-600 mb-4">
                    Voluntariado
                  </h3>
                  <p className="text-gray-700 font-light">
                    Organizamos actividades de limpieza en playas y caminos
                    costeros, en colaboración con voluntarios locales y
                    visitantes.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-light text-sky-600 mb-4">
                    Educación Ambiental
                  </h3>
                  <p className="text-gray-700 font-light">
                    Talleres de educación ambiental, dirigidos a niños, jóvenes
                    y adultos, para concientizar sobre la importancia de cuidar
                    nuestros ecosistemas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community section */}
      <section className="w-full bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <div className="flex items-start mb-6">
                <span className="text-6xl font-light text-sky-600 mr-4">
                  03
                </span>
                <div className="h-[1px] w-full bg-black mt-6"></div>
              </div>
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-8">
                Nuestra Comunidad
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="space-y-6">
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  En DEAR BAHIA te damos las gracias por acompañarnos en este
                  viaje hacia la conservación y el bienestar de nuestra querida
                  bahía.
                </p>
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  Nuestra Bahía es más que un paraíso natural; es nuestra casa,
                  nuestra comunidad, y juntos, podemos garantizar que este lugar
                  siga siendo un ejemplo de armonía entre las personas y la
                  naturaleza. Cada acción cuenta, desde la recolección de
                  residuos hasta la protección de nuestras tortugas marinas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section with Swiss design */}
      <section className="w-full relative h-[60vh] overflow-hidden">
        <Image
          src="/assets/playa.jpg"
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
                <p className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-10 max-w-3xl mx-auto">
                  La bahía nos ha dado mucho, y siempre debemos tener clara la
                  importancia de retribuirle.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl font-light text-sky-400 mb-10 max-w-3xl mx-auto">
                  Unidos hacemos la diferencia
                </p>
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
