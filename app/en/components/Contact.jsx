"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
          Your message has been sent. We'll get back to you soon.
        </p>
      );
    } else if (val) {
      return (
        <p className="text-sm font-light text-red-600">
          Please fill in all required information
        </p>
      );
    } else if (success === false) {
      return (
        <p className="text-sm font-light text-red-600">
          There was an error sending your message. Please try again.
        </p>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Swiss grid header with numbered title */}
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 md:col-span-3 flex items-start">
            <div className="h-[1px] w-full bg-black mt-6"></div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-3xl font-light tracking-tight text-black mb-4">
              CONTACT US
            </h2>
            <p className="text-sm uppercase tracking-widest text-gray-600 font-light">
              We're ready to help with your project
            </p>
          </div>
        </div>

        {/* Contact content with Swiss design */}
        <div className="grid grid-cols-12 gap-8">
          {/* Form section */}
          <div className="col-span-12 md:col-span-6 md:col-start-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-wider font-light"
                >
                  Full Name
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
                  Mobile Phone
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
                  Message
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
                href="/en/policy"
                className="text-sky-800 hover:text-sky-600 mx-2 text-sm"
              >
                Privacy Policy
              </a>
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center border border-black px-6 py-3 group hover:bg-sky-600 hover:border-sky-600 transition-colors duration-300"
                >
                  <span className="mr-3 text-sm font-normal text-black group-hover:text-white transition-colors duration-300">
                    {loading ? "Sending..." : "Send Message"}
                  </span>
                  <ArrowRight className="h-4 w-4 text-black group-hover:text-white transition-colors duration-300" />
                </button>
              </div>

              <div className="pt-2">{renderMessage()}</div>
            </form>
          </div>

          {/* Map section with Swiss design elements */}
          <div className="col-span-12 md:col-span-5 relative">
            {/* Swiss design geometric elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-sky-600 z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-black z-10"></div>

            <div className="relative h-[400px] border border-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.310630830032!2d-105.29883765553248!3d20.697606999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842146a4987d0337%3A0xb93b92efcc8dd4f5!2sCentro%20Empresarial%20Nuevo%20Vallarta!5e0!3m2!1ses-419!2smx!4v1743791388740!5m2!1ses-419!2smx"
                className="w-full h-full transition-all duration-700"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Centro Empresarial Nuevo Vallarta"
                aria-label="Google Map showing the location of Centro Empresarial Nuevo Vallarta"
              ></iframe>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-normal uppercase tracking-wide mb-2">
                Our Location
              </h3>
              <p className="text-gray-700 font-light">
                Centro Empresarial Nuevo Vallarta
                <br />
                Bahía de Banderas, Nayarit
              </p>
            </div>
          </div>
        </div>

        {/* Swiss design geometric element */}
        <div className="grid grid-cols-12 mt-20">
          <div className="col-span-1 col-start-1">
            <div className="w-6 h-6 border border-black"></div>
          </div>
          <div className="col-span-10 col-start-2">
            <div className="h-[1px] w-full bg-black"></div>
          </div>
          <div className="col-span-1 col-start-12">
            <div className="w-6 h-6 bg-sky-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
