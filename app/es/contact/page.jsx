"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(null);
  const [val, setVal] = useState(null);
  const [loading, setLoading] = useState(false);

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
        setDetails({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
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
        <p className="text-sm font-light">
          Tu mensaje ha sido enviado. Nos comunicaremos contigo pronto.
        </p>
      );
    } else if (val) {
      return (
        <p className="text-sm font-light text-sky-600">
          Favor de llenar la información correspondiente
        </p>
      );
    } else if (success === false) {
      return (
        <p className="text-sm font-light text-sky-600">
          Hubo un error al enviar tu mensaje. Intenta nuevamente.
        </p>
      );
    }
    return null;
  };

  return (
    <main>
      {/* Hero section with Swiss design */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/assets/image6.jpg"
          alt="Contacto"
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
                  Contacto
                </h1>
                <div className="flex items-center text-sm text-white/80 uppercase tracking-wider font-light">
                  <a href="/es" className="hover:text-sky-600 transition-colors">
                    Inicio
                  </a>
                  <span className="mx-2">/</span>
                  <span className="text-white">Contacto</span>
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

      {/* Contact form section with Swiss design */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            {/* Form column */}
            <div className="col-span-12 lg:col-span-6 relative">
              <div className="flex items-start mb-10">
                <span className="text-6xl font-light text-sky-600 mr-4">
                  01
                </span>
                <div className="h-[1px] w-full bg-black mt-6"></div>
              </div>
              <h2 className="text-3xl font-light tracking-tight uppercase mb-6">
                Déjanos tu información
              </h2>
              <p className="text-gray-600 font-light mb-10">
                Nos pondremos en contacto contigo
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-wider font-light"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={details.name}
                    onChange={handleChange}
                    className="w-full border-b border-black bg-transparent py-2 focus:outline-none focus:border-sky-600 transition-colors font-light"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="phone"
                    className="text-xs uppercase tracking-wider font-light"
                  >
                    Tel. Celular
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    id="phone"
                    name="phone"
                    value={details.phone}
                    onChange={handleChange}
                    className="w-full border-b border-black bg-transparent py-2 focus:outline-none focus:border-sky-600 transition-colors font-light"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-wider font-light"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={details.email}
                    onChange={handleChange}
                    className="w-full border-b border-black bg-transparent py-2 focus:outline-none focus:border-sky-600 transition-colors font-light"
                    required
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="text-xs uppercase tracking-wider font-light"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={details.message}
                    onChange={handleChange}
                    className="w-full border border-black bg-transparent p-3 h-32 focus:outline-none focus:border-sky-600 transition-colors font-light resize-none"
                    required
                  />
                </div>
                <a
                  href="/es/policy"
                  className="text-sky-800 hover:text-sky-600 mx-2 text-sm"
                >
                  Aviso de Privacidad
                </a>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center border border-black px-6 py-3 group hover:bg-sky-600 hover:border-sky-600 transition-colors duration-300 w-full justify-center"
                  >
                    <span className="mr-3 text-sm font-normal text-black group-hover:text-white transition-colors duration-300">
                      {loading ? "Enviando..." : "Enviar mensaje"}
                    </span>
                    <ArrowRight className="h-4 w-4 text-black group-hover:text-white transition-colors duration-300" />
                  </button>
                </div>

                <div className="pt-2">{renderMessage()}</div>
              </form>

              {/* Swiss design element */}
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-sky-600 hidden md:block"></div>
            </div>

            {/* Image column */}
            <div className="col-span-12 lg:col-span-6 relative">
              <div className="h-full w-full relative">
                <Image
                  src="/assets/image5.jpg"
                  alt="Contacto"
                  fill
                  className="object-cover transition-all duration-700"
                />
              </div>
              {/* Swiss design elements */}
              <div className="absolute top-0 right-0 w-12 h-12 border border-black hidden md:block"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border border-black hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Map section with Swiss design */}
      <section className="w-full bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4 mb-16">
            <div className="col-span-12 md:col-span-3 flex items-start">
              <span className="text-6xl font-light text-sky-600 mr-4">02</span>
              <div className="h-[1px] w-full bg-black mt-6"></div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-4">
                Nuestra Ubicación
              </h2>
              <p className="text-sm uppercase tracking-widest text-gray-600 font-light">
                Centro Empresarial Nuevo Vallarta
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 relative">
              <div className="relative h-[400px] border border-black">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.310630830032!2d-105.29883765553248!3d20.697606999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842146a4987d0337%3A0xb93b92efcc8dd4f5!2sCentro%20Empresarial%20Nuevo%20Vallarta!5e0!3m2!1ses-419!2smx!4v1743791388740!5m2!1ses-419!2smx"
                  className="w-full h-full transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Centro Empresarial Nuevo Vallarta"
                  aria-label="Mapa de Google mostrando la ubicación de Centro Empresarial Nuevo Vallarta"
                ></iframe>
              </div>
              {/* Swiss design elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-sky-600"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border border-black"></div>
            </div>
          </div>

          {/* Contact information */}
          <div className="grid grid-cols-12 gap-8 mt-16">
            <div className="col-span-12 md:col-span-4">
              <div className="border-l-2 border-sky-600 pl-6">
                <h3 className="text-xl font-normal uppercase tracking-wide mb-2">
                  Dirección
                </h3>
                <p className="text-gray-700 font-light">
                  Centro Empresarial Nuevo Vallarta
                  <br />
                  Bahía de Banderas, Nayarit
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="border-l-2 border-sky-600 pl-6">
                <h3 className="text-xl font-normal uppercase tracking-wide mb-2">
                  Teléfono
                </h3>
                <p className="text-gray-700 font-light">(+52) 329 688 5505</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="border-l-2 border-sky-600 pl-6">
                <h3 className="text-xl font-normal uppercase tracking-wide mb-2">
                  Email
                </h3>
                <p className="text-gray-700 font-light lowercase">
                  info@bahiaconnect.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
