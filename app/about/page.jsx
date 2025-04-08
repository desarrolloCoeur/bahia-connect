"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import Contact from "../components/Contact";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const page = () => {
  const teamMembers = [
    {
      name: "Ricardo Trueba",
      title: "Director General",
      credentials: "California Bar, CAR, NAR, NARPM, AAGLA",
      email: "ricardo@bahiaconnect.com",
      phone: "(855) 655-5544",
      image: "/assets/flower.png",
    },
    {
      name: "Luis Flores",
      title: "Director de Ingeniería",
      credentials: "",
      email: "lauro@bahiaconnect.com",
      phone: "(855) 655-5544",
      image: "/assets/flower.png",
    },
    {
      name: "Luis Montero",
      title: "Gerente Administrativo",
      credentials: "",
      email: "luis@bahiaconnect.com",
      phone: "(855) 655-5544",
      image: "/assets/flower.png",
    },
    {
      name: "Noé Flores",
      title: "Supervisor de Mantenimiento",
      credentials: "CPA, MBA",
      email: "info@bahiaconnect.com",
      phone: "(855) 655-5544",
      image: "/assets/flower.png",
    },
    {
      name: "Gillermo Poegner",
      title: "Pendiente",
      credentials: "CPM, ARM",
      email: "guillermo@bahiaconnect.com",
      phone: "(855) 655-5544",
      image: "/assets/flower.png",
    },
    {
      name: "Martha Castor",
      title: "pendiente",
      credentials: "J.D., CCIM",
      email: "martha@bahiaconnect.com",
      phone: "(855) 655-5544",
      image: "/assets/flower.png",
    },
    {
      name: "Iris Ponce",
      title: "pendiente",
      credentials: "MBA, CCIM",
      email: "iris@bahiaconnect.com",
      phone: "(855) 655-5544",
      image: "/assets/flower.png",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);
  return (
    <div>
      <div className="relative h-[40vh] w-full">
        <Image
          className="h-full w-full object-cover select-none brightness-40"
          src="/assets/image7.jpg"
          alt="hero-img"
          width={1400}
          height={900}
        />

        <div className="absolute text-white bottom-[20%] left-[5%]  md:left-[20%] flex text-xl md:text-2xl font-light">
          <h1 className="uppercase">Inicio</h1>
          <span className="">/</span>
          <h1 className="uppercase">Nosotros</h1>
        </div>
      </div>
      <div className="flex justify-center bg-sky-900">
        <div className="w-[90%] md:w-[80%] lg:w-[60%]">
          <div className="py-[100px] text-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-full md:w-1/2 flex">
                <h1 className="p-5 uppercase text-4xl md:text-5xl font-light text-sky-50">
                  Sobre Nosotros
                </h1>
              </div>
              <div className="w-full md:w-1/2  text-left">
                <div className="p-5 text-xl text-sky-100 font-light">
                  <p>
                    Nos dedicamos a la administración de propiedades, gestión de
                    condominios y consultoría especializada. Tenemos más de 18
                    años de experiencia trabajando en la operación y cuidado de
                    propiedades en Punta Mita, así como más de 15 años
                    administrando rentas vacacionales y residencias de forma
                    integral. Nuestro enfoque es brindar soluciones confiables,
                    personalizadas y con atención al detalle, para que tú solo
                    te preocupes por disfrutar tu inversión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Relleno simple entre secciones */}

      <div className="py-20">
        <div className="w-full flex justify-center">
          <div className="w-[90%] md:w-[80%] lg:w-[60%] p-4 my-2">
            <h1 className="uppercase text-4xl md:text-5xl font-light">
              visión
            </h1>
            <p className="font-light text-gray-900">
              Nuestra visión es consolidarnos como líderes en el sector de
              administración de propiedades y rentas vacacionales en Punta Mita,
              ofreciendo soluciones innovadoras y personalizadas que garanticen
              el máximo rendimiento de cada propiedad. A través de un{" "}
              <span className="font-normal text-sky-800">
                equipo altamente capacitado
              </span>{" "}
              y comprometido, buscamos superar los estándares de calidad,
              brindando tranquilidad y confianza a nuestros clientes mediante un
              servicio transparente, eficiente y orientado a resultados. Con un
              enfoque en la excelencia operativa y la sostenibilidad, nos
              esforzamos por crear valor a largo plazo para propietarios,
              inquilinos y comunidades.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center gap-10">
          <div className="w-[90%] md:w-[80%] lg:w-[60%] p-4 my-2">
            <h1 className="uppercase text-4xl md:text-5xl font-light">
              Objetivo
            </h1>
            <p className="font-light text-gray-900">
              Nuestro objetivo principal es proporcionar servicios de
              administración de propiedades de alta calidad que maximicen el
              valor de las inversiones de nuestros clientes. Nos esforzamos por
              mantener las propiedades en óptimas condiciones, garantizar la
              satisfacción de los inquilinos y propietarios, y optimizar los
              rendimientos financieros a través de una gestión eficiente y
              transparente.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center gap-10">
          <div className="w-[90%] md:w-[80%] lg:w-[60%] p-4 my-10">
            <h1 className="uppercase text-4xl md:text-5xl font-light">
              Nuestro Equipo
            </h1>
            <div className="relative mx-auto py-12">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                    >
                      <div className="flex flex-col items-start h-full">
                        <div className="border-4 border-gray-200 mb-4 w-full">
                          <Image
                            src={
                              member.image ||
                              "/placeholder.svg?height=400&width=400"
                            }
                            alt={member.name}
                            width={400}
                            height={400}
                            className="w-full h-auto"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium text-gray-800 mb-1">
                            {member.name}
                          </h3>
                          <p className="text-gray-600 mb-1">{member.title}</p>
                          <div className="flex items-center mt-2">
                            <Mail className="h-5 w-5 text-gray-500 mr-2" />
                            <a
                              href={`mailto:${member.email}`}
                              className="text-gray-600 hover:text-gray-800"
                            >
                              {member.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                <div
                  onClick={scrollPrev}
                  className="border-gray-200 p-2 border-2 rounded-full cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </div>
                <div
                  onClick={scrollNext}
                  className="border-gray-200 p-2 border-2 rounded-full cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" />
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full ${
                      index === selectedIndex ? "bg-sky-800" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => emblaApi?.scrollTo(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center bg-white py-20">
        <Image
          className="absolute top-0 left-0 h-full w-full object-cover select-none brightness-25 z-[0]"
          src="/assets/hero-z.jpg"
          alt="about-relleno"
          width={1920}
          height={900}
        />
        <div className="relative w-[80%] md:w-[60%] text-center">
          <p className="text-sky-50 font-light text-4xl mb-8">
            Nuestro compromiso es brindar un servicio personalizado y
            profesional
          </p>
          <button className="cursor-pointer px-6 py-2 border border-sky-50 text-sky-50 uppercase hover:bg-sky-800 hover:text-white transition-colors">
            Contáctanos
          </button>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default page;
