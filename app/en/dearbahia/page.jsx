"use client";

import Image from "next/image";
import Contact from "../components/Contact";

export default function AboutPage() {
  return (
    <main>
      {/* Hero section with Swiss design */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/assets/hero-dear.jpg"
          alt="About Us"
          fill
          className="object-cover grayscale-[40%]"
          priority
        />

        <div className="absolute inset-0 bg-black/30"></div>

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
            <div className="">
              <div className="w-full justify-center flex">
                <Image
                  src="/assets/dear-logo.png"
                  alt="Logo"
                  width={500}
                  height={200}
                  className="object-contain brightness-85"
                />
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
                dear bahía
              </h2>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-sky-600 hidden md:block"></div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-lg font-light leading-relaxed">
                One of our fundamental pillars is actively supporting civil and organized associations, promoting balance and community commitment.
                <br />
                <br />
                Dear Bahía is our organization's chapter or section where we like to recognize and incentivize more actions from our clients and projects we work with. We clearly understand the importance of contributing to maintain or improve our environment, and here we'd like to invite everyone to appreciate and give back to everything the bay has offered us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities section */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <div className="flex items-start mb-6">
                <span className="text-6xl font-light text-sky-600 mr-4">
                  02
                </span>
                <div className="h-[1px] w-full bg-black mt-6"></div>
              </div>
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-8">
                Our Actions
              </h2>
              <div className="w-8 h-8 border border-black mt-8"></div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-light text-sky-600 mb-4">
                    Marine Conservation
                  </h3>
                  <p className="text-gray-700 font-light">
                    We collaborate in nest monitoring, egg protection, and release of newborn sea turtles, ensuring their survival and promoting marine wildlife conservation.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-light text-sky-600 mb-4">
                    Coastal Cleanup
                  </h3>
                  <p className="text-gray-700 font-light">
                    We collect waste, primarily plastics, that are washed ashore by tides or left by visitors in coastal areas.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-light text-sky-600 mb-4">
                    Recycling
                  </h3>
                  <p className="text-gray-700 font-light">
                    We separate and classify recyclable materials, promoting their proper disposal and fostering a recycling culture in the community.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-light text-sky-600 mb-4">
                    Reforestation
                  </h3>
                  <p className="text-gray-700 font-light">
                    We participate in reforestation activities of natural areas, such as mangroves and dune zones, to preserve ecological balance and prevent erosion.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-light text-sky-600 mb-4">
                    Volunteering
                  </h3>
                  <p className="text-gray-700 font-light">
                    We contribute to beach and coastal path cleanup activities, collaborating with local volunteers and visitors.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-light text-sky-600 mb-4">
                    Environmental Education
                  </h3>
                  <p className="text-gray-700 font-light">
                    Environmental education workshops for children, youth and adults, raising awareness about the importance of caring for our ecosystems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community section */}
      <section className="w-full bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <div className="flex items-start mb-6">
                <span className="text-6xl font-light text-sky-600 mr-4">
                  03
                </span>
                <div className="h-[1px] w-full bg-black mt-6"></div>
              </div>
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-8">
                Our Community
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="space-y-6">
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  At DEAR BAHIA we thank you for joining us on this journey toward conservation and wellbeing of our beloved bay.
                </p>
                <p className="text-lg font-light leading-relaxed text-gray-700">
                  Our Bay is more than a natural paradise; it's our home, our community, and together, we can ensure this place remains an example of harmony between people and nature. Every action counts, from waste collection to protecting our sea turtles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section with Swiss design */}
      <div className="w-full relative overflow-hidden">
        {/* Background with Swiss design treatment */}
        <div className="absolute inset-0 grid grid-cols-12">
          {/* Image container with grayscale effect */}
          <div className="col-span-12 h-full">
            <Image
              src="/assets/playa.jpg"
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
                  The bay has given us so much, and we must always remember the importance of giving back.
                  <br />
                  <span className="font-normal text-sky-400">
                    Together we make a difference.
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

      {/* Contact section */}
      <Contact />
    </main>
  );
}