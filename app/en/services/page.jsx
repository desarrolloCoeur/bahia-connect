import {
  Building2,
  ClipboardCheck,
  Shield,
  Wrench,
  ArrowRight,
  Droplets,
  Trees,
  Users,
  RouteIcon as Road,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Contact from "../components/Contact";

export const metadata = {
  title:
    "Services | Bahía Connect - Property Management and Maintenance",
  description:
    "Professional property management, operation, maintenance and security services for condominiums and properties in Bahía de Banderas. Comprehensive solutions for owners and investors.",
  keywords:
    "property management, condominium maintenance, property security, condominium operations, common area management, owner services, Bahía de Banderas, Nayarit, Punta Mita, real estate services",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero section with Swiss design */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/assets/image2.jpg"
          alt="Services"
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
                  Services
                </h1>
                <div className="flex items-center text-sm text-white/80 uppercase tracking-wider font-light">
                  <a href="/en" className="hover:text-sky-600 transition-colors">
                    Home
                  </a>
                  <span className="mx-2">/</span>
                  <span className="text-white">Services</span>
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

      {/* Our Services section with Swiss design */}
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
                Our Services
              </h2>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-sky-600 hidden md:block"></div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-lg font-light leading-relaxed">
                With over 23 years in the Bahía de Banderas region, we have successfully managed multiple large-scale projects, from Punta Mita and its surroundings to the Northern Coast of Nayarit, Sierra Madre, and Costa Alegre in Jalisco, always focusing on results.
              </p>
            </div>
          </div>
        </div>
      </section>

<section className="w-full bg-white py-24">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-12 gap-8 mb-16">
      <div className="col-span-12 md:col-span-3 flex items-start">
        <span className="text-6xl font-light text-sky-600 mr-4">02</span>
        <div className="h-[1px] w-full bg-black mt-6"></div>
      </div>
      <div className="col-span-12 md:col-span-9">
        <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-8">Specialized Services</h2>
        <p className="text-lg font-light text-gray-600 mb-8">
          More than managers, we are strategic allies.
        </p>
        <blockquote className="text-xl font-light italic text-sky-800 border-l-2 border-sky-600 pl-6">
          "Each daily action builds the trust that sets us apart."
        </blockquote>
      </div>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-12 gap-6">
      {/* Comprehensive Management */}
      <div className="col-span-12 md:col-span-6 relative">
        <div className="border border-black h-full">
          <div className="p-6 border-b border-black flex items-start">
            <Building2 className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
            <h3 className="text-lg font-normal uppercase tracking-wide">Comprehensive Condominium Management</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Professional management of residential and hospitality properties
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">Efficient and personalized solutions</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Focus on value increase and optimal community operation
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute -top-3 -left-3 w-6 h-6 bg-sky-600"></div>
      </div>

      {/* Green Area Maintenance */}
      <div className="col-span-12 md:col-span-6 relative">
        <div className="border border-black h-full">
          <div className="p-6 border-b border-black flex items-start">
            <Trees className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
            <h3 className="text-lg font-normal uppercase tracking-wide">Green Area Maintenance</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">Gardening coordination in over 18 projects</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Pruning, automated irrigation, fertilization, and landscaping care
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Supervision of specialized companies or internal teams
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute -top-3 -right-3 w-6 h-6 border border-black"></div>
      </div>

      {/* Cleaning and Conservation */}
      <div className="col-span-12 md:col-span-6 relative">
        <div className="border border-black h-full">
          <div className="p-6 border-b border-black flex items-start">
            <ClipboardCheck className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
            <h3 className="text-lg font-normal uppercase tracking-wide">Cleaning and Common Area Maintenance</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Protocols based on standards comparable to luxury hotels
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Daily maintenance of hallways, lounges, and shared zones
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Supervision of lighting, ventilation, and minor repairs
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute -bottom-3 -left-3 w-6 h-6 border border-black"></div>
      </div>

      {/* Hydraulic Systems and Pools */}
      <div className="col-span-12 md:col-span-6 relative">
        <div className="border border-black h-full">
          <div className="p-6 border-b border-black flex items-start">
            <Droplets className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
            <h3 className="text-lg font-normal uppercase tracking-wide">Hydraulic Systems and Pools</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Maintenance of over 140 pools in residential areas and clubhouses
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">pH control, cleaning, filters, and circulation</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Management of hydraulic networks, pump stations, and irrigation
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-sky-600"></div>
      </div>

      {/* Security and Access Control */}
      <div className="col-span-12 md:col-span-6 relative">
        <div className="border border-black h-full">
          <div className="p-6 border-b border-black flex items-start">
            <Shield className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
            <h3 className="text-lg font-normal uppercase tracking-wide">Security and Access Control</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Supervision of security personnel (internal or external)
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Implementation of CCTV systems, access control, and emergency protocols
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">Organizational structure and operational manuals</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute -top-3 -left-3 w-6 h-6 border border-black"></div>
      </div>

      {/* Infrastructure and Roads */}
      <div className="col-span-12 md:col-span-6 relative">
        <div className="border border-black h-full">
          <div className="p-6 border-b border-black flex items-start">
            <Road className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
            <h3 className="text-lg font-normal uppercase tracking-wide">Infrastructure and Roads</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Maintenance of internal roads: concrete, asphalt, cobblestone
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Construction and preservation of security booths and key structures
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-sky-600"></div>
      </div>

      {/* Customer Service */}
      <div className="col-span-12 md:col-span-6 relative">
        <div className="border border-black h-full">
          <div className="p-6 border-b border-black flex items-start">
            <Phone className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
            <h3 className="text-lg font-normal uppercase tracking-wide">Customer Service and Communication</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Dedicated department for resident attention
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Available channels: HOA office, mobile apps, and web portals
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Transparent handling of reports, issues, and requests
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute -bottom-3 -left-3 w-6 h-6 border border-black"></div>
      </div>

      {/* Community Commitment */}
      <div className="col-span-12 md:col-span-6 relative">
        <div className="border border-black h-full">
          <div className="p-6 border-b border-black flex items-start">
            <Users className="h-6 w-6 text-sky-600 mr-4 flex-shrink-0" />
            <h3 className="text-lg font-normal uppercase tracking-wide">Community Commitment</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">Efficient, safe, and harmonious management</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">Proactive and customized approach for each condominium</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700 font-light">
                  Building sustainable and well-managed communities
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border border-black"></div>
      </div>
    </div>
  </div>
</section>


      {/* CTA section with Swiss design */}
      <section className="w-full relative h-[60vh] overflow-hidden">
        <Image
          src="/assets/image4.jpg"
          alt="Services"
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
                  Smart property management for your condominium
                </p>
                <a
                  href="/en/contact"
                  className="inline-flex items-center border border-white px-8 py-3 text-white uppercase hover:bg-sky-600 hover:border-sky-600 transition-colors group"
                >
                  <span className="mr-2">Request information</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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