import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Consultoria from "./components/Consultoria";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Consultoria />
      <Services />
      <div className="w-full flex justify-center bg-sky-100 relative">
        <Image
          className="absolute top-0 left-0 h-full w-full object-cover select-none brightness-45 z-[0]"
          src="/assets/hero-q.jpg"
          alt="hero-img"
          width={1920}
          height={900}
        />
        <div className="w-[80%] z-[1] max-md:w-[90%]">
          <div className="flex flex-col items-center justify-center space-y-4 text-center my-[100px]">
            <Image
              className="object-cover select-none overflow-hidden w-[350px]"
              src="/assets/logo-navbar.png"
              alt="hero-logo"
              width={800}
              height={800}
            />
            {/* <h2 className="text-xl uppercase tracking-tighter sm:text-4xl md:text-4xl text-sky-200">
              Cuidamos cada detalle para que tú solo disfrutes.
            </h2> */}
            <p className="max-w-[700px] text-gray-50 md:text-xl/relaxed lg:text-xl/relaxed">
              Nos encargamos del mantenimiento, seguridad y administración de tu
              propiedad para que tú solo te preocupes por lo importante: vivir o
              invertir con tranquilidad.
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
