import Image from "next/image"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <div id="home" className="relative w-full h-[100vh]">
      {/* Full-width/height background image */}
      <div className="absolute inset-0 w-full h-[100vh]">
        <Image src="/assets/hero-1.jpg" alt="Hero background" fill className="object-cover grayscale-[10%]" priority />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content overlay with Swiss design grid */}
      <div className="relative container mx-auto h-full px-6">
        <div className="grid grid-cols-12 h-full items-center">
          {/* Empty columns for asymmetrical layout */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Content area */}
          <div className="col-span-12 lg:col-span-10 xl:col-span-5 space-y-2 xl:space-y-8">
            <div className="h-1 w-16 bg-sky-600"></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white">
              Experience, Integrity, and Excellence
            </h1>
            <p className="text-lg text-gray-100 max-w-md font-light">
              Comprehensive assessment for continuous improvement and sustainability of your condominium.
            </p>
            <div className="pt-6">
              <a href="https://wa.me/+523221086381?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20consulting%20services." className="inline-flex items-center group">
                <span className="mr-4 text-sm font-normal border-b border-white pb-1 transition-all text-white group-hover:border-sky-600 group-hover:text-sky-600">
                  Request Consultancy
                </span>
                <ArrowRight className="h-4 w-4 text-white transition-all group-hover:translate-x-1 group-hover:text-sky-600" />
              </a>
            </div>
          </div>

          {/* Swiss design geometric element */}
          
        </div>

        {/* Bottom grid line - Swiss design element */}
        <div className="absolute bottom-12 left-0 right-0 px-6">
          <div className="grid grid-cols-12">
            <div className="col-span-3 h-[1px] bg-white/30"></div>
            <div className="col-span-1 h-[1px] bg-sky-600"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
