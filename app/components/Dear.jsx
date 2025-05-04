import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Dear = () => {
  return (
    <div className="w-full relative overflow-hidden">
      {/* Background with Swiss design treatment */}
      <div className="absolute inset-0 grid grid-cols-12">
        {/* Image container with grayscale effect */}
        <div className="col-span-12 h-full">
          <Image
            src="/assets/playa.jpg"
            alt="Background image"
            fill
            className="object-cover grayscale-[0%]"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Swiss design grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          <div className="col-span-1 h-full border-l border-white/10"></div>
          <div className="col-span-1 col-start-5 h-full border-l border-white/10"></div>
          <div className="col-span-1 col-start-9 h-full border-l border-white/10"></div>
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid grid-cols-12 gap-8">
          {/* Section number */}
          <div className="col-span-12 md:col-span-2 flex items-start">
            <span className="text-6xl font-light text-sky-600">04</span>
          </div>

          {/* Content area */}
          <div className="col-span-12 md:col-span-8">
            <div className="mb-12 relative">
              <div className="w-[180px] h-[180px] relative mx-auto md:mx-0">
                <Image
                  src="/assets/dear-logo.png"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-white/30 hidden md:block"></div>
            </div>

            <div className="relative">
              <div className="h-[2px] w-16 bg-sky-600 mb-8 hidden md:block"></div>
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed md:leading-relaxed lg:leading-relaxed max-w-3xl">
                Dear Bahía es nuestro capítulo o sección de la organización
                donde nos gusta reconocer con la idea de incentivar un mayor
                número de acciones por parte de nuestros clientes y proyectos
                con los que trabajamos.
                <br />
                <span className="font-normal text-sky-400">
                  Unidos hacemos la diferencia.
                </span>
              </p>
            </div>
            <div className="pt-6">
              <a
                href="/dearbahia"
                className="inline-flex items-center group border border-white px-6 py-3 hover:bg-sky-600 hover:border-sky-600 transition-colors duration-300"
              >
                <span className="mr-4 text-sm font-normal text-white">
                  Saber Más
                </span>
                <ArrowRight className="h-4 w-4 text-white transition-all group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right column - geometric element */}
          <div className="hidden md:block md:col-span-2">
            <div className="w-12 h-12 bg-sky-600/20 mt-24"></div>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-16">
          <div className="col-span-3 col-start-2 h-[1px] bg-white/20"></div>
          <div className="col-span-1 col-start-11">
            <div className="w-4 h-4 border border-white/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dear;
