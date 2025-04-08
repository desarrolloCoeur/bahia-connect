"use client";
import { Cross, DollarSign, Mail, Phone, X } from "lucide-react";
import { Madimi_One } from "next/font/google";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import zenScroll from "zenscroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    zenScroll.setup(500, 100);
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);

      if (!scrolled) {
        document.getElementById("menu").style.right = "-600px";
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleMenu() {
    const menu = document.getElementById("menu");
    if (isOpen) {
      menu.style.right = "-600px";
    } else {
      menu.style.right = "0px";
    }
    setIsOpen(!isOpen);
  }

  return (
    <div>
      {/* Initial header (shown at top of page) */}
      <div className="absolute w-full h-[120px] z-10 flex justify-center">
        <div className="w-[80%] flex justify-between max-md:w-[90%]">
          <div>
            <div className="overflow-hidden w-[170px] h-[110px] py-[5px]">
              <a href="/">
                <Image
                  className="object-cover select-none overflow-hidden"
                  src="/assets/logo-navbar2.png"
                  alt="hero-logo"
                  width={800}
                  height={800}
                />
              </a>
            </div>
          </div>
          <div className="flex">
            <div className="flex gap-5 py-[48px] text-sm text-white max-md:hidden uppercase">
              <a href="/consultoria">
                <p>Consultoría</p>
              </a>
              <a href="/services">
                <p>SERVICIOS</p>
              </a>
              <a href="/about">
                <p>NOSOTROS</p>
              </a>

              <a href="/contact">
                <p>CONTACTO</p>
              </a>
            </div>
            <button
              className="hidden relative z-30 flex-col justify-center items-center w-10 h-30 group max-md:flex cursor-pointer"
              onClick={handleMenu}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-8 h-1 bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-8 h-1 bg-white my-1 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-8 h-1 bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll-activated navbar */}
      <div
        className={`fixed h-[90px] bg-sky-950 w-full transition-transform duration-300 ease-in-out flex justify-between items-center z-20 px-[5%] md:px-[10%] ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a href="/">
          <Image
            className="object-cover select-none"
            src="/assets/logo-navbar2.png"
            alt="navbar-logo"
            width={120}
            height={120}
          />
        </a>

        <button
          className="relative z-30 flex flex-col justify-center items-center w-10 h-10 group cursor-pointer"
          onClick={handleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-8 h-1 bg-sky-50 transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-8 h-1 bg-sky-50 my-1 transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-8 h-1 bg-sky-50 transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="menu"
        className="fixed uppercase text-lg p-10 h-[100vh] w-[400px] max-sm:w-[300px] right-[-600px] bg-sky-800 transition-all duration-200 ease-in-out text-right z-40
        text-sky-100"
      >
        <div className="flex justify-center cursor-pointer">
          <X
            onClick={() => {
              handleMenu();
            }}
            className="h-10 w-10"
          />
        </div>
        <div className="text-left text-md py-5 border-b-1">
          <div className="flex mb-5">
            <div className="flex-shrink-0">
              <Phone className="h-5 w-5 mr-4" />
            </div>
            <p className="text-sm">(+52) 329 688 5505</p>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <Mail className="h-5 w-5 mr-4" />
            </div>
            <p className="lowercase text-sm">info@bahiaconnect.com</p>
          </div>
        </div>

        <a href="/">
          <div
            onClick={() => {
              handleMenu();
            }}
            className="my-10 cursor-pointer hover:text-sky-500 transition-colors duration-200"
          >
            inicio
          </div>
        </a>

        <a href="/consultoria">
          <div
            onClick={() => {
              handleMenu();
            }}
            className="my-10 cursor-pointer hover:text-sky-500 transition-colors duration-200"
          >
            Consultoría
          </div>
        </a>
        <a href="/services">
          <div
            onClick={() => {
              handleMenu();
            }}
            className="my-10 cursor-pointer hover:text-sky-500 transition-colors duration-200"
          >
            servicios
          </div>
        </a>
        <a href="/about">
          <div
            onClick={() => {
              handleMenu();
            }}
            className="my-10 cursor-pointer hover:text-sky-500 transition-colors duration-200"
          >
            nosotros
          </div>
        </a>
        <a href="/contact">
          <div
            onClick={() => {
              handleMenu();
            }}
            className="my-10 cursor-pointer hover:text-sky-500 transition-colors duration-200"
          >
            contacto
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
