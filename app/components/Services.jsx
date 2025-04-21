import React from "react";
import {
  Building2,
  Home,
  Shield,
  DollarSign,
  PenToolIcon as Tool,
} from "lucide-react";

const Services = () => {
  return (
    <div className="w-full flex justify-center bg-sky-50">
      <div className="w-[65%] my-[150px] max-md:w-[90%]">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-sky-950 tracking-tighter sm:text-4xl md:text-5xl uppercase font-light">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-sky-800 uppercase tracking-wide">
            Ofrecemos una amplia gama de servicios adaptados a tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {/* Servicio 1: Administración de Propiedades */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 text-gray-400">
              <Home className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-3">
                Gestión de Mega Proyectos
              </h3>
              <p className="text-gray-600">
                Desde la planificación del BOH, amenidades, hasta la ejecución y
                monitoreo, asegurando que cada etapa se cumpla según los plazos
                y presupuestos establecidos.
              </p>
            </div>
          </div>

          {/* Servicio 2: Administración */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 text-gray-400">
              <DollarSign className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-3">
                Administración de Condominios y Áreas Comunes
              </h3>
              <p className="text-gray-600">
                Nos encargamos del mantenimiento, la seguridad y el buen
                funcionamiento de todas las instalaciones comunes, garantizando
                la calidad de vida de los residentes.
              </p>
            </div>
          </div>

          {/* Servicio 3: Operación */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 text-gray-400">
              <Tool className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-3">
                Asociaciones Civiles
              </h3>
              <p className="text-gray-600">
                Gestión eficiente y organizada de asociaciones, asegurando su
                buen funcionamiento y el cumplimiento de normativas legales.
              </p>
            </div>
          </div>

          {/* Servicio 4: Mantenimiento */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 text-gray-400">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-3">
                Unidades Residenciales
              </h3>
              <p className="text-gray-600">
                Administración completa de propiedades residenciales, desde el
                alquiler hasta el mantenimiento diario.
              </p>
            </div>
          </div>

          {/* Servicio 6: Reportes Financieros */}
          {/* <div className="flex gap-6">
            <div className="flex-shrink-0 text-gray-400">
              <BarChart className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-3">
                Reportes Financieros
              </h3>
              <p className="text-gray-600">
                Proporcionamos informes financieros detallados y transparentes
                que permiten a los propietarios y a la administración tomar
                decisiones informadas. Nuestros reportes incluyen balances
                mensuales, control de gastos, presupuestos anuales y
                proyecciones financieras, todo accesible a través de nuestra
                plataforma digital.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
