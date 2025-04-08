import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-center bg-sky-800 text-sky-50">
      <div className="w-[80%]">
        <div className="flex justify-between py-[20px]">
          <Image
            src="/assets/logo-white.png"
            alt="logo-footer"
            className="object-cover select-none h-[180px] w-[320px]"
            width={370}
            height={370}
          />
          <div className="w-[50%]">
            <h2 className="text-lg font-bold text-sky-50">Navegación</h2>
            <a href="/">
              <p>Inicio</p>
            </a>
            <a href="/consultoria">
              <p>Consultoría</p>
            </a>
            <a href="/services">
              <p>Servicios</p>
            </a>
            <a href="/about">
              <p>Nosotros</p>
            </a>
            <a href="/contact">
              <p>Contacto</p>
            </a>
          </div>
        </div>
        <div className="w-full  text-xs ">
          <div className="text-left text-md flex py-2">
            <div className="flex mr-5">
              <div className="flex-shrink-0">
                <Phone className="h-4 w-4 mr-2" />
              </div>
              <p className="text-md">(+52) 329 688 5505</p>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <Mail className="h-4 w-4 mr-2" />
              </div>
              <p className="lowercase">info@bahiaconnect.com</p>
            </div>
          </div>
          <div className="flex pb-2">
            <a href="/contact">
              <p className="mr-4">Contacto</p>
            </a>
            <a href="#">
              <p className="mr-4">Facebook</p>
            </a>
            <a href="#">
              <p>Instagram</p>
            </a>
          </div>
          <div className="py-[30px] border-t-[1px]">
            <p>
              Copyright © 2025. Todos los derechos reservados. Bahia Connect
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
