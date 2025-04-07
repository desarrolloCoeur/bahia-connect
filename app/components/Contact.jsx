"use client";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(null);
  const [val, setVal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      details.name === "" ||
      details.phone === "" ||
      details.message === "" ||
      details.email === ""
    ) {
      setVal(true);
      setSuccess(false);
      return;
    }

    setVal(false);
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const renderMessage = () => {
    if (success) {
      return (
        <p>Tu mensaje ha sido enviado. Nos comunicaremos contigo pronto.</p>
      );
    } else if (val) {
      return <p>Favor de llenar la información correspondiente</p>;
    } else if (success === false) {
      return <p>Hubo un error al enviar tu mensaje. Intenta nuevamente.</p>;
    }
  };
  function handleMenu() {
    if (isOpen === true) {
      document.getElementById("menu").style.transform = "translate(100%, 0%)";
      setIsOpen(false);
    } else {
      document.getElementById("menu").style.transform = "translate(0%, 0%)";
      setIsOpen(true);
    }
  }

  return (
    <div className="w-full flex justify-center bg-sky-50">
      <div className="w-full max-md:w-full flex flex-col lg:flex-row">
        {/* Form Section */}
        <div className="flex justify-center w-full lg:w-1/2  p-6 md:p-8">
          <form onSubmit={handleSubmit} className="w-full md:w-2/3 text-black">
            <h1 className="text-3xl md:text-4xl text-sky-900 uppercase ">
              Déjanos tu información
            </h1>
            <h2 className="text-lg md:text-xl py-3 md:py-5 text-sky-800 ">
              Nos pondremos en contacto contigo
            </h2>

            <input
              type="text"
              placeholder="Nombre completo"
              name="name"
              onChange={handleChange}
              className="p-2 border-b-[1px] bg-transparent h-[40px] border-gray-600 hover:bg-sky-200 w-full my-4 md:my-5 focus:outline-none focus:border-sky-800"
              required
            />

            <input
              type="text"
              inputMode="numeric"
              placeholder="Tel. Celular"
              name="phone"
              onChange={handleChange}
              className="p-2 border-b-[1px] bg-transparent h-[40px] border-gray-600 hover:bg-sky-200 w-full my-4 md:my-5 focus:outline-none focus:border-sky-800"
              required
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              className="p-2 border-b-[1px] bg-transparent h-[40px] border-gray-600 hover:bg-sky-200 w-full my-4 md:my-5 focus:outline-none focus:border-sky-800"
              required
            />

            <textarea
              placeholder="Déjanos un mensaje"
              name="message"
              onChange={handleChange}
              className="resize-none bg-transparent p-2 border-[1px] h-[100px] border-gray-600 hover:bg-sky-200 w-full my-4 md:my-5 focus:outline-none focus:border-sky-800"
              required
            />

            <div className="mt-2">
              <button
                type="submit"
                className="text-white bg-sky-800 border-[1px] border-sky-800 w-full py-3 md:py-4 hover:bg-sky-900 transition-colors duration-200 font-medium"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Contactar"}
              </button>
            </div>

            <div className="text-center py-4">{renderMessage()}</div>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.310630830032!2d-105.29883765553248!3d20.697606999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842146a4987d0337%3A0xb93b92efcc8dd4f5!2sCentro%20Empresarial%20Nuevo%20Vallarta!5e0!3m2!1ses-419!2smx!4v1743791388740!5m2!1ses-419!2smx"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Centro Empresarial Nuevo Vallarta"
            aria-label="Mapa de Google mostrando la ubicación de Centro Empresarial Nuevo Vallarta"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
