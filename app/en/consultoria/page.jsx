import Image from "next/image";
import { ClipboardCheck, FileText, Settings, ArrowRight } from "lucide-react";
import Contact from "../components/Contact";

export const metadata = {
  title: "360° Consulting | Bahía Connect - Property Optimization",
  description:
    "Comprehensive consulting service for condominiums and properties. Evaluation, diagnosis and recommendations to optimize management and profitability of your investment.",
  keywords:
    "real estate consulting, 360 consulting, property optimization, condominium evaluation, real estate diagnosis, property profitability, efficient management, Bahía de Banderas, Nayarit, Punta Mita",
};

export default function ConsultoriaPage() {
  return (
    <main>
      {/* Hero section with Swiss design */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/assets/consul.jpg"
          alt="Consulting"
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
                  Consulting
                </h1>
                <div className="flex items-center text-sm text-white/80 uppercase tracking-wider font-light">
                  <a href="/en" className="hover:text-sky-600 transition-colors">
                    Home
                  </a>
                  <span className="mx-2">/</span>
                  <span className="text-white">Consulting</span>
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

      {/* 360° Consulting section with Swiss design */}
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
                360° Consulting
              </h2>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-sky-600 hidden md:block"></div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-lg font-light leading-relaxed">
                Our 360° consulting provides a comprehensive review of your property or development's current status. Based on in-depth analysis, we provide clear, actionable recommendations to improve operation and maintenance plans. The goal is to help make your project more efficient, profitable and sustainable long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objective section with Swiss design */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3 flex items-start">
              <span className="text-6xl font-light text-sky-600 mr-4">02</span>
              <div className="h-[1px] w-full bg-black mt-6"></div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-8">
                Objective
              </h2>
              <p className="text-gray-800 font-light leading-relaxed max-w-3xl">
                Present preliminary analysis results focused on the condominium's common area maintenance and operation program, as well as its infrastructure and assets. This evaluation aims to identify both strengths and improvement opportunities in managing these essential spaces for resident wellbeing and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process section with Swiss design */}
      <section className="w-full bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4 mb-16">
            <div className="col-span-12 md:col-span-3 flex items-start">
              <span className="text-6xl font-light text-sky-600 mr-4">03</span>
              <div className="h-[1px] w-full bg-black mt-6"></div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-4">
                Our Process
              </h2>
              <p className="text-sm uppercase tracking-widest text-gray-600 font-light">
                Structured methodology for optimal results
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4 relative">
              <div className="border-l-2 border-sky-600 pl-6 h-full">
                <div className="flex items-start mb-4">
                  <FileText className="h-6 w-6 text-sky-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-normal uppercase tracking-wide">
                      Data Collection
                    </h3>
                    <p className="text-sm text-gray-600 uppercase tracking-wider">
                      Documentation and initial analysis
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 font-light">
                  We collect and analyze all relevant documentation to understand the condominium's legal, operational and financial structure.
                </p>
              </div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-sky-600"></div>
            </div>

            <div className="col-span-12 md:col-span-4 relative">
              <div className="border-l-2 border-sky-600 pl-6 h-full">
                <div className="flex items-start mb-4">
                  <ClipboardCheck className="h-6 w-6 text-sky-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-normal uppercase tracking-wide">
                      Evaluation
                    </h3>
                    <p className="text-sm text-gray-600 uppercase tracking-wider">
                      Inspection and diagnosis
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 font-light">
                  We conduct detailed inspections of facilities, infrastructure and operational processes to identify strengths and improvement opportunities.
                </p>
              </div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-sky-600"></div>
            </div>

            <div className="col-span-12 md:col-span-4 relative">
              <div className="border-l-2 border-sky-600 pl-6 h-full">
                <div className="flex items-start mb-4">
                  <Settings className="h-6 w-6 text-sky-600 mr-3" />
                  <div>
                    <h3 className="text-xl font-normal uppercase tracking-wide">
                      Recommendations
                    </h3>
                    <p className="text-sm text-gray-600 uppercase tracking-wider">
                      Customized action plan
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 font-light">
                  We develop a detailed plan with specific recommendations to optimize condominium operation, maintenance and management.
                </p>
              </div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-sky-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* First CTA section with Swiss design */}
      <section className="w-full bg-sky-800 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
              <div className="h-[2px] w-16 bg-sky-600 mb-8 mx-auto"></div>
              <p className="text-2xl md:text-3xl font-light text-white mb-10">
                Our priority is optimizing your condominium's management.
              </p>
              <a
                href="/en/contact"
                className="inline-flex items-center border border-white px-8 py-3 text-white uppercase hover:bg-sky-600 hover:border-sky-600 transition-colors group"
              >
                <span className="mr-2">Contact Us</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents section with Swiss design */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4 mb-16">
            <div className="col-span-12 md:col-span-3 flex items-start">
              <span className="text-6xl font-light text-sky-600 mr-4">04</span>
              <div className="h-[1px] w-full bg-black mt-6"></div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-4">
                Required Documents
              </h2>
              <p className="text-sm uppercase tracking-widest text-gray-600 font-light">
                Information needed for complete analysis
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-6 lg:col-span-3 relative">
              <div className="border-t-2 border-sky-600 pt-6">
                <h3 className="text-xl font-normal uppercase tracking-wide mb-6">
                  Legal Documentation
                </h3>
                <ul className="space-y-3">
                  {[
                    "Property Regime",
                    "Internal Regulations",
                    "Construction Regulations",
                    "Assembly Minutes",
                    "Homeowners Association Constitution",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 w-4 h-4 border border-black"></div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3 relative">
              <div className="border-t-2 border-sky-600 pt-6">
                <h3 className="text-xl font-normal uppercase tracking-wide mb-6">
                  Permits and Concessions
                </h3>
                <ul className="space-y-3">
                  {[
                    "Environmental Impact Statement (MIA)",
                    "Federal Zone Concession",
                    "National Water Commission Concession",
                    "PROFEPA Reports",
                    "ZOFEMAT Payments",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 w-4 h-4 border border-black"></div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3 relative">
              <div className="border-t-2 border-sky-600 pt-6">
                <h3 className="text-xl font-normal uppercase tracking-wide mb-6">
                  Technical Documentation
                </h3>
                <ul className="space-y-3">
                  {[
                    "Maintenance policies",
                    "General infrastructure plans",
                    "Landscaping project and plans",
                    "Operation and Maintenance Program for existing plants/equipment",
                    "Warranties (structures, equipment, etc.)",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 w-4 h-4 border border-black"></div>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-3 relative">
              <div className="border-t-2 border-sky-600 pt-6">
                <h3 className="text-xl font-normal uppercase tracking-wide mb-6">
                  Administrative Documentation
                </h3>
                <ul className="space-y-3">
                  {[
                    "Reserve Fund Studies",
                    "Previous audits",
                    "Current year budget",
                    "Monthly Administrator Reports",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute top-0 right-0 w-4 h-4 border border-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA section with Swiss design */}
      <section className="w-full relative h-[60vh] overflow-hidden">
        <Image
          src="/assets/image5.jpg"
          alt="Contact Us"
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
                  Contact us today to schedule an initial consultation
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