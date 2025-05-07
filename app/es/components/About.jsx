import Image from "next/image"
import { Plus } from "lucide-react"

const About = () => {
  return (
    <div className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        {/* Swiss grid header with sky line */}
        <div className="grid grid-cols-12 mb-16">
          <div className="col-span-12 md:col-span-3">
            <div className="h-[2px] w-full bg-sky-600 mt-4"></div>
          </div>
          <div className="col-span-12 md:col-span-9 mt-6 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-black uppercase">Sobre Nosotros</h2>
          </div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {/* Left column - empty space for asymmetry */}
          <div className="hidden md:block md:col-span-1">
            <div className="w-6 h-6 bg-sky-600"></div>
          </div>

          {/* Middle column - text content */}
          <div className="col-span-12 md:col-span-4 flex flex-col justify-between">
            <p className="text-gray-800 font-light leading-relaxed mb-12">
              En Bahía Connect, somos expertos en la administración de condominios y asociaciones civiles. Ofrecemos
              soluciones integrales para la gestión de áreas comunes y unidades residenciales.
            </p>
            <p className="text-gray-800 font-light leading-relaxed">
              Asegurando eficiencia, seguridad y bienestar para todos los usuarios. Contando con más de 23 años de
              experiencia que nos avalan.
            </p>
            <div className="mt-12">
              <a
                href="/es/about"
                className="inline-flex items-center border border-black px-5 py-2 group hover:bg-sky-600 hover:border-sky-600 transition-colors duration-300"
              >
                <span className="mr-3 text-sm font-normal text-black group-hover:text-white transition-colors duration-300">
                  Conócenos
                </span>
                <Plus className="h-4 w-4 text-black group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Right column - image with geometric elements */}
          <div className="col-span-12 md:col-span-7 relative mt-12 md:mt-0">
            <div className="absolute top-0 left-0 right-0 bottom-0 grid grid-cols-6 grid-rows-6 z-10 pointer-events-none">
              <div className="col-start-6 col-span-1 row-start-1 row-span-1 bg-sky-600"></div>
              <div className="col-start-1 col-span-1 row-start-6 row-span-1 bg-sky-800"></div>
            </div>

            <div className="relative h-[400px] md:h-[500px] ml-0 md:ml-8">
              <Image
                src="/assets/hero-j.jpg"
                alt="About us image"
                fill
                className="object-cover transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
            </div>

            {/* Swiss grid lines */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-sky-800 bg-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
