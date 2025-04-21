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
            setYears((prev) => (prev < 18 ? prev + 1 : 23));
            setTons((prev) => (prev < 100 ? prev + 5 : 35));
            setClients((prev) => (prev < 40 ? prev + 1 : 33));

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
            <h1 className=" text-6xl max-lg:text-4xl">+{clients}</h1>
            <p className="text-2xl">Clientes</p>
          </div>
        </div>
      </div>
      <About />
      <div className="w-full flex justify-center bg-sky-50">
        <div className="w-[65%] my-[150px] max-md:w-[90%]">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-sky-950 tracking-tighter sm:text-4xl md:text-5xl uppercase font-light">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-4 text-sky-800 uppercase tracking-wide">
              Más que un servicio, una garantía de calidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Servicio 1: Administración de Propiedades */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 text-gray-400"></div>
              <div>
                <h3 className="text-lg font-medium uppercase mb-3">
                  Experiencia comprobada
                </h3>
                <p className="text-gray-600">
                  Con más de 23 años en el sector de la región de Bahía de
                  Banderas, hemos gestionado con éxito múltiples proyectos de
                  gran escala, desde Punta Mita y sus alrededores hasta Costa
                  Norte de Nayarit, Sierra Madre y Costa Alegre de Jalisco,
                  siempre enfocándonos en los resultados.
                </p>
              </div>
            </div>

            {/* Servicio 2: Administración */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 text-gray-400"></div>
              <div>
                <h3 className="text-lg font-medium uppercase mb-3">
                  Soluciones personalizadas
                </h3>
                <p className="text-gray-600">
                  Entendemos que cada proyecto es único. Por eso, ofrecemos
                  soluciones a medida que se adaptan a las necesidades
                  específicas de tu comunidad o empresa.
                </p>
              </div>
            </div>

            {/* Servicio 3: Operación */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 text-gray-400"></div>
              <div>
                <h3 className="text-lg font-medium uppercase mb-3">
                  Transparencia y confianza
                </h3>
                <p className="text-gray-600">
                  Mantenemos una comunicación constante y clara con nuestros
                  clientes, brindando informes detallados y actualizaciones
                  periódicas.
                </p>
              </div>
            </div>

            {/* Servicio 4: Mantenimiento */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 text-gray-400"></div>
              <div>
                <h3 className="text-lg font-medium uppercase mb-3">
                  Compromiso con la excelencia
                </h3>
                <p className="text-gray-600">
                  Nuestra prioridad es la satisfacción de nuestros clientes, por
                  lo que trabajamos bajo los más altos estándares de calidad.
                </p>
              </div>
            </div>

            {/* Servicio 6: Reportes Financieros */}
            {/* <div className="flex gap-6">
            <div className="flex-shrink-0 text-gray-400">
              <BarChart className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-3">
                Reportes Financieros
              </h3>
              <p className="text-gray-600">
                Proporcionamos informes financieros detallados y transparentes
                que permiten a los propietarios y a la administración tomar
                decisiones informadas. Nuestros reportes incluyen balances
                mensuales, control de gastos, presupuestos anuales y
                proyecciones financieras, todo accesible a través de nuestra
                plataforma digital.
              </p>
            </div>
          </div> */}
          </div>
        </div>
      </div>
      <Consultoria />
      <Services />
      <Blogs />
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
              className="object-cover select-none overflow-hidden w-[250px]"
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
