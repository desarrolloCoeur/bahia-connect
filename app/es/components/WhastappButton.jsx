import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhastappButton = () => {
  return (
    <div className="relative">
      <a
        className="fixed bottom-10 right-10 z-10 bg-sky-800 p-2 rounded-full "
        href="https://wa.me/+523221086381?text=Hola,%20Me%20gustaria%20saber%20mas%20de%20su%20servicio%20de%20consultoria."
        target="_blank"
      >
        <FaWhatsapp className="text-4xl text-white" />
      </a>
    </div>
  );
};

export default WhastappButton;
