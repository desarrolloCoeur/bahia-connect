"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Contact from "../components/Contact";

export default function AboutPage() {
  const teamMembers = [
    // {
    //   name: "Luis Flores",
    //   title: "Director de Ingeniería",
    //   credentials: "",
    //   email: "lauro@bahiaconnect.com",
    //   phone: "(855) 655-5544",
    //   image: "/assets/flower.png",
    // },
    // {
    //   name: "Luis Montero",
    //   title: "Gerente Administrativo",
    //   credentials: "",
    //   email: "luis@bahiaconnect.com",
    //   phone: "(855) 655-5544",
    //   image: "/assets/flower.png",
    // },
    // {
    //   name: "Noé Flores",
    //   title: "Supervisor de Mantenimiento",
    //   credentials: "CPA, MBA",
    //   email: "info@bahiaconnect.com",
    //   phone: "(855) 655-5544",
    //   image: "/assets/flower.png",
    // },
    {
      name: "Martha Castor",
      title: "Property Management",
      credentials: "J.D., CCIM",
      email: "martha@bahiaconnect.com",
      phone: "(855) 655-5544",
      image: "/assets/team/mart.jpeg",
    },
    {
      name: "Gillermo Poegner",
      title: "Property Management",
      credentials: "CPM, ARM",
      email: "guillermo@bahiaconnect.com",
      phone: "(855) 655-5544",
      image: "/assets/team/IMG_0197.jpg",
    },
    {
      name: "Omar Guevara",
      title: "Property Management",
      credentials: "CPA, MBA",
      email: "omar@bahiaconnect.com",
      phone: "(855) 655-5544",
      image: "/assets/team/IMG_0180.jpg",
    },
    {
      name: "Jose Carlos Tapia",
      title: "Property Management",
      credentials: "CPA, MBA",
      email: "jose@bahiaconnect.com",
      phone: "(855) 655-5544",
      image: "/assets/team/IMG_0189.jpg",
    },
    // {
    //   name: "Iris Ponce",
    //   title: "pendiente",
    //   credentials: "MBA, CCIM",
    //   email: "iris@bahiaconnect.com",
    //   phone: "(855) 655-5544",
    //   image: "/assets/flower.png",
    // },
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
    <main>
      {/* Hero section with Swiss design */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/assets/about.jpg"
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
                  Nosotros
                </h1>
                <div className="flex items-center text-sm text-white/80 uppercase tracking-wider font-light">
                  <a href="/es" className="hover:text-sky-600 transition-colors">
                    Inicio
                  </a>
                  <span className="mx-2">/</span>
                  <span className="text-white">Nosotros</span>
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
                Sobre Nosotros
              </h2>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-sky-600 hidden md:block"></div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-lg font-light leading-relaxed">
                Nos dedicamos a la administración de propiedades, gestión de
                condominios y consultoría especializada. Tenemos más de 18 años
                de experiencia trabajando en la operación y cuidado de
                propiedades en Punta Mita, así como más de 15 años administrando
                rentas vacacionales y residencias de forma integral. Nuestro
                enfoque es brindar soluciones confiables, personalizadas y con
                atención al detalle, para que tú solo te preocupes por disfrutar
                tu inversión.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision section with Swiss design */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8 mb-20">
            <div className="col-span-12 md:col-span-3 flex items-start">
              <span className="text-6xl font-light text-sky-600 mr-4">02</span>
              <div className="h-[1px] w-full bg-black mt-6"></div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-8">
                Visión
              </h2>
              <p className="text-gray-800 font-light leading-relaxed max-w-3xl">
                Nuestra visión es consolidarnos como líderes en el sector de
                administración de propiedades y rentas vacacionales de alto
                nivel, ofreciendo soluciones innovadoras y personalizadas que
                garanticen el máximo rendimiento de cada propiedad. A través de
                un{" "}
                <span className="font-normal text-sky-600">
                  equipo altamente capacitado
                </span>{" "}
                y comprometido, buscamos superar los estándares de calidad,
                brindando tranquilidad y confianza a nuestros clientes mediante
                un servicio transparente, eficiente y orientado a resultados.
                Con un enfoque en la excelencia operativa y la sostenibilidad,
                nos esforzamos por crear valor a largo plazo para propietarios,
                inquilinos y comunidades.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3 md:col-start-4">
              <div className="w-8 h-8 border border-black"></div>
            </div>
            <div className="col-span-12 md:col-span-6">
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-8">
                Objetivo
              </h2>
              <p className="text-gray-800 font-light leading-relaxed">
                Nuestro objetivo principal es proporcionar servicios de
                administración de propiedades de alta calidad que maximicen el
                valor de las inversiones de nuestros clientes. Nos esforzamos
                por mantener las propiedades en óptimas condiciones, garantizar
                la satisfacción de los inquilinos y propietarios, y optimizar
                los rendimientos financieros a través de una gestión eficiente y
                transparente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team section with Swiss design */}
      <section className="w-full bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4 mb-16">
            <div className="col-span-12 md:col-span-3 flex items-start">
              <span className="text-6xl font-light text-sky-600 mr-4">03</span>
              <div className="h-[1px] w-full bg-black mt-6"></div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-4">
                Nuestro Equipo
              </h2>
              <p className="text-sm uppercase tracking-widest text-gray-600 font-light">
                Profesionales comprometidos con la excelencia
              </p>
            </div>
          </div>

          <div className="relative mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                  >
                    <div className="flex flex-col items-start h-full">
                      <div className="relative mb-6 w-full overflow-hidden">
                        <div className="aspect-square relative">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover transition-all duration-500"
                          />
                        </div>
                        {/* Swiss design element */}
                        <div className="absolute top-0 right-0 w-6 h-6 bg-sky-600"></div>
                      </div>
                      <h3 className="text-xl font-normal uppercase tracking-wide mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 font-light mb-3">
                        {member.title}
                      </p>
                      {/* {member.credentials && (
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                          {member.credentials}
                        </p>
                      )} */}
                      <div className="flex items-center mt-2">
                        <Mail className="h-4 w-4 text-sky-600 mr-2" />
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-600 text-sm font-light hover:text-sky-600 transition-colors"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Swiss design navigation */}
            <div className="flex justify-center gap-6 mt-12">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 border border-black flex items-center justify-center hover:bg-sky-600 hover:border-sky-600 hover:text-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-12 h-12 border border-black flex items-center justify-center hover:bg-sky-600 hover:border-sky-600 hover:text-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Swiss design dots */}
            <div className="flex justify-center gap-4 mt-8">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  className={`w-8 h-[2px] transition-colors ${
                    index === selectedIndex ? "bg-sky-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section with Swiss design */}
      <section className="w-full relative h-[60vh] overflow-hidden">
        <Image
          src="/assets/hero-z.jpg"
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
                <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-10 max-w-3xl mx-auto">
                  Nuestro compromiso es brindar un servicio personalizado y
                  profesional
                </p>
                <a
                  href="/es/contact"
                  className="inline-flex items-center border border-white px-8 py-3 text-white uppercase hover:bg-sky-600 hover:border-sky-600 transition-colors group"
                >
                  <span className="mr-2">Contáctanos</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
  );
}
