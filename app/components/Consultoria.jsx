import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Consultoria = () => {
  return (
    <div className="w-full relative h-[70vh] overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/image4.jpg"
          alt="Consultoria background"
          fill
          className="object-cover grayscale-[70%]"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Swiss design grid overlay */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
        <div className="col-span-1 h-full border-l border-white/10"></div>
        <div className="col-span-1 col-start-4 h-full border-l border-white/10"></div>
        <div className="col-span-1 col-start-7 h-full border-l border-white/10"></div>
        <div className="col-span-1 col-start-10 h-full border-l border-white/10"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto h-full px-6">
        <div className="grid grid-cols-12 h-full items-center">
          {/* Left column - sky accent */}
          <div className="hidden md:block md:col-span-1">
            <div className="h-32 w-[2px] bg-sky-600"></div>
          </div>

          {/* Middle column - content */}
          <div className="col-span-12 md:col-span-12 space-y-8">
            <div className="flex items-center">
              <span className="text-6xl font-light text-sky-600 mr-4">02</span>
              <div className="h-[1px] w-24 bg-white/50"></div>
            </div>

            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white uppercase">
              Consultoría 360°
            </h2>

            <p className="text-xl text-gray-200 max-w-2xl font-light">
              El objetivo es ayudarte a que la realización de tu proyecto sea
              más eficiente, rentable y sostenible a largo plazo.
            </p>

            <div className="pt-6">
              <a
                href="https://wa.me/+523221086381?text=Hola,%20Me%20gustaria%20saber%20mas%20de%20su%20servicio%20de%20consultoria."
                className="inline-flex items-center group border border-white px-6 py-3 hover:bg-sky-600 hover:border-sky-600 transition-colors duration-300"
              >
                <span className="mr-4 text-sm font-normal text-white">
                  Solicitar Consultoria
                </span>
                <ArrowRight className="h-4 w-4 text-white transition-all group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right column - geometric element */}
          <div className="hidden md:block md:col-span-1">
            <div className="w-12 h-12 border border-white/30 ml-auto"></div>
          </div>
        </div>

        {/* Bottom grid line */}
        <div className="absolute bottom-12 left-0 right-0 px-6">
          <div className="grid grid-cols-12">
            <div className="col-span-3 col-start-9 h-[1px] bg-white/20"></div>
            <div className="col-span-1 col-start-12">
              <div className="w-4 h-4 bg-sky-600 ml-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultoria;
