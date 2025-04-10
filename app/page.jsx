"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Consultoria from "./components/Consultoria";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";

export default function Home() {
  const [years, setYears] = useState(0);
  const [tons, setTons] = useState(0);
  const [clients, setClients] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true); // Prevents re-triggering

          let yearsCount = 0;
          let tonsCount = 0;
          let clientsCount = 0;

          const interval = setInterval(() => {
            setYears((prev) => (prev < 18 ? prev + 1 : 18));
            setTons((prev) => (prev < 100 ? prev + 5 : 100));
            setClients((prev) => (prev < 40 ? prev + 2 : 40));

            yearsCount += 2;
            tonsCount += 1200;
            clientsCount += 8;

            if (yearsCount >= 50 && tonsCount >= 30000 && clientsCount >= 200) {
              clearInterval(interval);
            }
          }, 50);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasAnimated]); // Ensures animation runs only once

  return (
    <div>
      <Hero />
      <div ref={ref} className="bg-sky-800 flex justify-center">
        <div
          className=" grid grid-cols-3 grid-rows-auto gap-5 w-[80%] 
        max-lg:w-[80%]  text-white text-center py-11 max-md:grid-cols-1"
        >
          <div className="max-lg:py-5">
            <h1 className=" text-6xl max-lg:text-4xl">{years}</h1>
            <p className="text-2xl">Años de Experiencia</p>
          </div>
          <div className="max-lg:py-5">
            <h1 className=" text-6xl max-lg:text-4xl">
              +{tons.toLocaleString()}
            </h1>
            <p className="text-2xl">Proyectos</p>
          </div>
          <div className="max-lg:py-5">
            <h1 className=" text-6xl max-lg:text-4xl">
              +{clients}
            </h1>
            <p className="text-2xl">Clientes</p>
          </div>
        </div>
      </div>
      <About />
      <Consultoria />
      <Services />
      <Blogs/>
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
              src="/assets/logo-navbar2.png"
              alt="hero-logo"
              width={800}
              height={800}
            />
            {/* <h2 className="text-xl uppercase tracking-tighter sm:text-4xl md:text-4xl text-sky-200">
              Cuidamos cada detalle para que tú solo disfrutes.
            </h2> */}
            <p className="max-w-[700px] text-gray-50 md:text-xl/relaxed lg:text-2xl/relaxed font-light">
              Nos encargamos del mantenimiento, seguridad y administración de tu
              propiedad para que tú solo te preocupes por lo importante:{" "}
              <span className="italic font-normal">
                vivir o invertir con tranquilidad.
              </span>
            </p>
          </div>
        </div>
      </div>    
      <Contact />
    </div>
  );
}
