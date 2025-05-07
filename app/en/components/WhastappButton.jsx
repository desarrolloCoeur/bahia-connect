import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhastappButton = () => {
  return (
    <div className="relative">
      <a
        className="fixed bottom-10 right-10 z-10 bg-sky-800 p-2 rounded-full "
        href="https://wa.me/+523221086381?text=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20consulting%20services."
        target="_blank"
      >
        <FaWhatsapp className="text-4xl text-white" />
      </a>
    </div>
  );
};

export default WhastappButton;
