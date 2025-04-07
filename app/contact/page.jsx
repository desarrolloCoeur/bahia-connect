"use client";
import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

const page = () => {
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
    <div>
      <div className="relative h-[40vh] w-full">
        <Image
          className="h-full w-full object-cover select-none brightness-40"
          src="/assets/image6.jpg"
          alt="hero-img"
          width={1920}
          height={1080}
        />

        <div className="absolute text-white bottom-[20%] left-[5%]  md:left-[20%] flex text-xl md:text-2xl font-light">
          <h1 className="uppercase">Inicio</h1>
          <span className="">/</span>
          <h1 className="uppercase">Contacto</h1>
        </div>
      </div>
      <div id="contact" className="relative flex justify-center">
        <div className="flex justify-center py-10 w-[50%] max-md:py-0 max-lg:w-[90%] max-md:w-full">
          <div
            className="align-center text-white w-[70%]  p-8 
           bg-[#ffffff] z-[1] max-md:w-[95%] font-light"
          >
            <form onSubmit={handleSubmit} className="w-full text-black ">
              <h1 className=" text-4xl text-black uppercase">Déjanos tu información</h1>
              <h2 className="text-xl py-5 text-gray-600">
                Nos pondremos en contacto contigo
              </h2>
              <input
                type="text"
                placeholder="Nombre completo"
                name="name"
                onChange={handleChange}
                className="p-1 border-b-[1px] bg-transparent h-[40px]  hover:bg-[#e0e0e0] w-full  my-5"
              />
              <br />
              <input
                type="text"
                inputMode="numeric"
                placeholder="Tel. Celular"
                name="phone"
                onChange={handleChange}
                className="p-1 border-b-[1px] bg-transparent h-[40px]  hover:bg-[#e0e0e0] w-full  my-5"
              />
              <br />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                className="p-1 border-b-[1px] bg-transparent h-[40px]  hover:bg-[#e0e0e0] w-full  my-5"
              />
              <br />
              <textarea
                type="text"
                placeholder="Déjanos un mensaje"
                name="message"
                onChange={handleChange}
                className="resize-none bg-transparent p-2 border-[1px] h-[100px]  hover:bg-[#e0e0e0] w-full my-5"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="align-self text-white bg-sky-800 border-[1px] border-black w-full py-4 hover:bg-sky-900
          ease-in-out duration-200
          "
                >
                  {loading ? "Enviando..." : "Contactar"}
                </button>
                <br />
              </div>
              <div className="text-center text-black py-5">
                {" "}
                {renderMessage()}
              </div>
            </form>
          </div>
        </div>
        <Image
          className="  object-cover object-center w-[50%] z-[0] max-lg:hidden"
          src="/assets/image5.jpg"
          alt="contact"
          height={900}
          width={1200}
        />
      </div>
    </div>
  );
};

export default page;
