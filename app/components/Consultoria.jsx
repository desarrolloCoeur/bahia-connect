import Image from "next/image";
import React from "react";

const Consultoria = () => {
  return (
    <div className="w-full flex justify-center bg-sky-100 relative">
      <Image
        className="absolute top-0 left-0 h-full w-full object-cover select-none brightness-25 z-[0]"
        src="/assets/image4.jpg"
        alt="hero-img"
        width={1300}
        height={1300}
      />
      <div className="w-[80%] z-[1] max-md:w-[90%]">
        <div className="flex flex-col items-center justify-center space-y-4 text-center my-[100px]">
          <h2 className="text-5xl uppercase tracking-tighter sm:text-6xl md:text-8xl text-sky-50">
            Consultoría 360°
          </h2>
          <p className="max-w-[750px] text-gray-50 md:text-xl/relaxed lg:text-xl/relaxed">
            El objetivo es ayudarte a hacer tu proyecto más eficiente, rentable
            y sostenible a largo plazo.
          </p>
          <a href="#">
            <div className="p-3 bg-sky-800 text-white mt-9 hover:bg-sky-900">
              Solicitar Consultoria
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Consultoria;
