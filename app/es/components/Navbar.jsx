"use client";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import zenScroll from "zenscroll";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    zenScroll.setup(500, 100);
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);

      if (!scrolled && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  function handleLanguageSwitch() {
    if (pathname.startsWith("/es")) {
      router.push(pathname.replace("/es", "/en"));
    } else {
      router.push("/en");
    }
  }

  return (
    <div>
      {/* Initial header */}
      <div className="absolute w-full z-20">
        <div className="container mx-auto px-6 py-6">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4 md:col-span-3">
              <a href="/es" className="block w-[150px] h-[90px] relative">
                <Image
                  src="/assets/logo-navbar2.png"
                  alt="Bahía Connect"
                  fill
                  className="object-contain"
                  priority
                />
              </a>
            </div>
            <div className="col-span-8 md:col-span-9 flex justify-end items-center">
              <nav className="hidden lg:flex space-x-8">
                <a
                  href="/es/consultoria"
                  className="text-white text-sm uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
                >
                  Consultoría
                </a>
                <a
                  href="/es/services"
                  className="text-white text-sm uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
                >
                  Servicios
                </a>
                <a
                  href="/es/about"
                  className="text-white text-sm uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
                >
                  Nosotros
                </a>
                <a
                  href="/es/blogs"
                  className="text-white text-sm uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
                >
                  Blogs
                </a>
                <a
                  href="/es/contact"
                  className="text-white text-sm uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
                >
                  Contacto
                </a>
                <a
                  href="/es/dearbahia"
                  className="text-white text-sm uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
                >
                  Dear bahía
                </a>
                <button
                  onClick={handleLanguageSwitch}
                  className="cursor-pointer text-white text-sm uppercase tracking-wider font-light hover:text-sky-400 transition-colors border-b border-transparent hover:border-sky-400 pb-1"
                >
                  English
                </button>
              </nav>
              <button
                className="lg:hidden relative z-30 w-10 h-10 flex flex-col justify-center items-center"
                onClick={handleMenu}
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`}
                />
                <span
                  className={`block w-6 h-[2px] bg-white my-1.5 transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolled navbar */}
      <div
        className={`fixed w-full bg-sky-800 border-b border-sky-900 z-20 transition-transform duration-300 ease-in-out ${isScrolled ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-4 md:col-span-3">
              <a href="/es" className="block w-[120px] h-[70px] relative">
                <Image
                  src="/assets/logo-navbar2.png"
                  alt="Bahía Connect"
                  fill
                  className="object-contain"
                  priority
                />
              </a>
            </div>
            <div className="col-span-8 md:col-span-9 flex justify-end items-center">
              <nav className="hidden lg:flex space-x-8">
                <a
                  href="/es/consultoria"
                  className="text-white text-sm uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
                >
                  Consultoría
                </a>
                <a
                  href="/es/services"
                  className="text-white text-sm uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
                >
                  Servicios
                </a>
                <a
                  href="/es/about"
                  className="text-white text-sm uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
                >
                  Nosotros
                </a>
                <a
                  href="/es/blogs"
                  className="text-white text-sm uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
                >
                  Blogs
                </a>
                <a
                  href="/es/contact"
                  className="text-white text-sm uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
                >
                  Contacto
                </a>
                <a
                  href="/es/dearbahia"
                  className="text-white text-sm uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
                >
                  Dear bahía
                </a>
                <button
                  onClick={handleLanguageSwitch}
                  className="cursor-pointer text-white text-sm uppercase tracking-wider font-light hover:text-sky-400 transition-colors border-b border-transparent hover:border-sky-400 pb-1"
                >
                  English
                </button>
              </nav>
              <button
                className="lg:hidden relative z-30 w-10 h-10 flex flex-col justify-center items-center"
                onClick={handleMenu}
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`}
                />
                <span
                  className={`block w-6 h-[2px] bg-white my-1.5 transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={handleMenu}
      ></div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-sky-700 z-40 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-end mb-8">
            <button
              onClick={handleMenu}
              className="p-2"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 items-center text-center">
            <a
              href="/es"
              onClick={handleMenu}
              className="text-white text-base uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
            >
              Inicio
            </a>
            <a
              href="/es/consultoria"
              onClick={handleMenu}
              className="text-white text-base uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
            >
              Consultoría
            </a>
            <a
              href="/es/services"
              onClick={handleMenu}
              className="text-white text-base uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
            >
              Servicios
            </a>
            <a
              href="/es/about"
              onClick={handleMenu}
              className="text-white text-base uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
            >
              Nosotros
            </a>
            <a
              href="/es/blogs"
              onClick={handleMenu}
              className="text-white text-base uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
            >
              Blogs
            </a>
            <a
              href="/es/contact"
              onClick={handleMenu}
              className="text-white text-base uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
            >
              Contacto
            </a>
            <a
              href="/es/dearbahia"
              onClick={handleMenu}
              className="text-white text-base uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
            >
              Dear bahía
            </a>
            <a
              onClick={() => {
                handleMenu();
                handleLanguageSwitch();
              }}
              className="text-white text-base uppercase tracking-wider font-light hover:text-sky-600 transition-colors border-b border-transparent hover:border-sky-600 pb-1"
            >
              English
            </a>
          </nav>
          <div className="mt-auto border-t border-gray-200 pt-6 text-center">
            <p className="text-sm text-sky-200 mb-2">(+52) 329 688 5505</p>
            <p className="text-sm text-sky-200 lowercase">
              info@bahiaconnect.com
            </p>
          </div>
          <div className="absolute bottom-6 left-6 w-6 h-6 bg-sky-600"></div>
          <div className="absolute bottom-6 right-6 w-6 h-6 border border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
