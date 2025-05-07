"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Consultoria from "./components/Consultoria";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Dear from "./components/Dear";

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
        max-lg:w-[80%]  text-white text-center py-11 max-md:grid-cols-1 font-light"
        >
          <div className="max-lg:py-5">
            <h1 className="text-6xl max-lg:text-4xl">{years}</h1>
            <p className="text-2xl">Years of Experience</p>
          </div>
          <div className="max-lg:py-5">
            <h1 className=" text-6xl max-lg:text-4xl">
              +{tons.toLocaleString()}
            </h1>
            <p className="text-2xl">Projects</p>
          </div>
          <div className="max-lg:py-5">
            <h1 className=" text-6xl max-lg:text-4xl">+{clients}</h1>
            <p className="text-2xl">Clients</p>
          </div>
        </div>
      </div>
      <About />
      <div className="w-full bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4 mb-16">
            <div className="col-span-12 md:col-span-2 flex items-center">
              <span className="text-6xl font-light text-sky-600">01</span>
            </div>
            <div className="col-span-12 md:col-span-10">
              <div className="h-[1px] w-full bg-black mb-8"></div>
              <h2 className="text-3xl font-light tracking-tight text-black mb-4">
                WHY CHOOSE US?
              </h2>
              <p className="text-sm uppercase tracking-widest text-gray-600 font-light">
                More than a service, a quality guarantee
              </p>
            </div>
          </div>

          {/* Reasons grid with Swiss design */}
          <div className="grid grid-cols-12 gap-y-12 gap-x-8">
            {/* Reason 1 */}
            <div className="col-span-12 md:col-span-5 md:col-start-3">
              <div className="border-l-2 border-sky-600 pl-6">
                <h3 className="text-base font-normal uppercase tracking-wide mb-4">
                  Proven experience
                </h3>
                <p className="text-gray-700 font-light">
                  With over 23 years in the Bahía de Banderas region, we have successfully managed multiple large-scale projects, from Punta Mita and its surroundings to the Northern Coast of Nayarit, Sierra Madre, and the Happy Coast of Jalisco, always focusing on results.
                </p>
              </div>
            </div>

            {/* Reason 2 */}
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <div className="border-l-2 border-sky-600 pl-6">
                <h3 className="text-base font-normal uppercase tracking-wide mb-4">
                  Customized solutions
                </h3>
                <p className="text-gray-700 font-light">
                  We understand that each project is unique. That's why we offer tailored solutions that adapt to the specific needs of your community or business.
                </p>
              </div>
            </div>

            {/* Reason 3 */}
            <div className="col-span-12 md:col-span-5 md:col-start-3">
              <div className="border-l-2 border-sky-600 pl-6">
                <h3 className="text-base font-normal uppercase tracking-wide mb-4">
                  Transparency and trust
                </h3>
                <p className="text-gray-700 font-light">
                  We maintain constant and clear communication with our clients, providing detailed reports and regular updates.
                </p>
              </div>
            </div>

            {/* Reason 4 */}
            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <div className="border-l-2 border-sky-600 pl-6">
                <h3 className="text-base font-normal uppercase tracking-wide mb-4">
                  Commitment to excellence
                </h3>
                <p className="text-gray-700 font-light">
                  Our priority is our clients' satisfaction, which is why we work under the highest quality standards.
                </p>
              </div>
            </div>
          </div>

          {/* Swiss design geometric elements */}
          <div className="grid grid-cols-12 mt-20">
            <div className="col-span-1 col-start-2">
              <div className="w-8 h-8 border border-black"></div>
            </div>
            <div className="col-span-8 col-start-4">
              <div className="h-[1px] w-full bg-black"></div>
            </div>
            <div className="col-span-1 col-start-12">
              <div className="w-4 h-4 bg-sky-600 ml-4"></div>
            </div>
          </div>
        </div>
      </div>
      <Consultoria />
      <Services />
      <Dear/>
      <Blogs />
      <div className="w-full relative overflow-hidden">
        {/* Background with Swiss design treatment */}
        <div className="absolute inset-0 grid grid-cols-12">
          {/* Image container with grayscale effect */}
          <div className="col-span-12 h-full">
            <Image
              src="/assets/hero-q.jpg"
              alt="Background image"
              fill
              className="object-cover grayscale-[60%]"
              priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
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
              <span className="text-6xl font-light text-sky-600">06</span>
            </div>

            {/* Content area */}
            <div className="col-span-12 md:col-span-8">              
              <div className="mb-12 relative">
                <div className="w-[180px] h-[180px] relative mx-auto md:mx-0">
                  <Image
                    src="/assets/logo-navbar2.png"
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
                  We take care of the maintenance, security and administration of your property so you only need to worry about what's important:{" "}
                  <span className="font-normal text-sky-400">
                    living or investing with peace of mind.
                  </span>
                </p>
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
      <Contact />
    </div>
  );
}