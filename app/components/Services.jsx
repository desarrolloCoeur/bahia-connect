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
            ADMINISTRACIÓN SIN COMPLICACIONES
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
                Administración de Propiedades
              </h3>
              <p className="text-gray-600">
                Durante 18 años, hemos realizado gestión de propiedades y
                consultoría en Punta Mita, siempre buscando adaptarnos a las
                necesidades de los clientes para ofrecer servicios
                excepcionales.
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
                Administración
              </h3>
              <p className="text-gray-600">
                Gestionamos eficientemente todos los aspectos administrativos de
                su condominio, garantizando transparencia y resultados óptimos.
              </p>
            </div>
          </div>

          {/* Servicio 3: Operación */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 text-gray-400">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-3">Operación</h3>
              <p className="text-gray-600">
                Nos encargamos de la operación diaria de su condominio,
                asegurando que todo funcione correctamente y resolviendo
                cualquier incidencia de manera inmediata.
              </p>
            </div>
          </div>

          {/* Servicio 4: Mantenimiento */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 text-gray-400">
              <Tool className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-3">
                Mantenimiento
              </h3>
              <p className="text-gray-600">
                Implementamos programas de mantenimiento integral para preservar
                y mejorar las instalaciones de su condominio, prolongando su
                vida útil y valor.
              </p>
            </div>
          </div>

          {/* Servicio 5: Seguridad */}
          <div className="flex gap-6">
            <div className="flex-shrink-0 text-gray-400">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium uppercase mb-3">Seguridad</h3>
              <p className="text-gray-600">
                Desarrollamos e implementamos planes integrales de seguridad
                para proteger a los residentes y sus propiedades con los más
                altos estándares.
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
