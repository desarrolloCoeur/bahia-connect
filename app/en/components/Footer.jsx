import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-sky-800 text-white py-16">
      <div className="container mx-auto px-6">
        {/* Swiss grid header */}
        <div className="grid grid-cols-12 gap-4 mb-12">
          <div className="col-span-12 md:col-span-3 flex items-start">
            <div className="h-[2px] w-full bg-sky-600 mt-4"></div>
          </div>
          <div className="col-span-12 md:col-span-9 mt-6 md:mt-0">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-white uppercase">
              Bahía Connect
            </h2>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-12 gap-8">
          {/* Logo column */}
          <div className="col-span-12 md:col-span-4 relative">
            <div className="relative h-[140px] w-[240px] invert">
              <Image
                src="/logo-negro.png"
                alt="Bahía Connect"
                fill
                className="object-contain object-left"
              />
            </div>
            {/* Swiss design element */}
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border border-sky-600 hidden md:block"></div>
          </div>

          {/* Navigation column */}
          <div className="col-span-6 md:col-span-4">
            <h3 className="text-base font-normal uppercase tracking-wide mb-6 border-b border-sky-600 pb-2 inline-block">
              Navigation
            </h3>
            <nav className="space-y-3">
              <a
                href="/en"
                className="block text-sm font-light hover:text-sky-600 transition-colors"
              >
                Home
              </a>
              <a
                href="/en/consultoria"
                className="block text-sm font-light hover:text-sky-600 transition-colors"
              >
                Consulting
              </a>
              <a
                href="/en/services"
                className="block text-sm font-light hover:text-sky-600 transition-colors"
              >
                Services
              </a>
              <a
                href="/en/about"
                className="block text-sm font-light hover:text-sky-600 transition-colors"
              >
                About Us
              </a>
              <a
                href="/en/contact"
                className="block text-sm font-light hover:text-sky-600 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact column */}
          <div className="col-span-6 md:col-span-4">
            <h3 className="text-base font-normal uppercase tracking-wide mb-6 border-b border-sky-600 pb-2 inline-block">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <p className="text-sm font-light">(+52) 329 688 5505</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm font-light lowercase">
                  info@bahiaconnect.com
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8">
              <h4 className="text-sm uppercase tracking-wider mb-4 font-light">
                Follow Us
              </h4>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="border border-white w-10 h-10 flex items-center justify-center hover:border-sky-600 hover:bg-sky-600 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="border border-white w-10 h-10 flex items-center justify-center hover:border-sky-600 hover:bg-sky-600 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Swiss design line */}
        <div className="grid grid-cols-12 mt-16">
          <div className="col-span-1 col-start-1">
            <div className="w-6 h-6 bg-sky-600"></div>
          </div>
          <div className="col-span-10 col-start-2">
            <div className="h-[1px] w-full bg-white/20"></div>
          </div>
          <div className="col-span-1 col-start-12">
            <div className="w-6 h-6 border border-white"></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs font-light text-white/70">
            Copyright © {new Date().getFullYear()}. All rights reserved. Bahía
            Connect
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
