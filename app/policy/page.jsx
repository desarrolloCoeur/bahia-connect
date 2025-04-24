"use client";

export default function AvisoPrivacidad() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Swiss design elements */}

      <div className="relative h-[500px] w-full overflow-hidden bg-sky-800">
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
                  AVISO DE PRIVACIDAD
                </h1>
                <div className="flex items-center text-sm text-white/80 uppercase tracking-wider font-light">
                  <p className="text-sm uppercase tracking-widest text-sky-200 font-light">
                    Protección de datos personales
                  </p>
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

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Left column - geometric element */}
          <div className="hidden md:block md:col-span-1">
            <div className="w-8 h-8 border border-sky-800"></div>
          </div>

          {/* Main content */}
          <div className="col-span-12 md:col-span-10">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 font-light">
                De conformidad con lo establecido en la Ley Federal de
                Protección de Datos Personales en Posesión de los Particulares,
                ponemos a su disposición el siguiente aviso de privacidad.
              </p>

              <h2 className="text-xl font-normal uppercase tracking-wide mt-8 mb-4 border-l-2 border-sky-600 pl-4">
                Responsable de la protección de sus datos personales
              </h2>
              <p className="text-gray-700 font-light">
                Bahía Connect, es responsable del tratamiento de sus datos
                personales.
              </p>

              <h2 className="text-xl font-normal uppercase tracking-wide mt-8 mb-4 border-l-2 border-sky-600 pl-4">
                Datos personales que recabamos
              </h2>
              <p className="text-gray-700 font-light">
                Para las finalidades señaladas en el presente aviso de
                privacidad, podemos recabar sus datos personales de distintas
                formas: cuando usted nos los proporciona directamente a través
                de nuestro formulario de contacto, que incluye:
              </p>
              <ul className="list-disc pl-6 text-gray-700 font-light">
                <li>Nombre completo</li>
                <li>Número telefónico</li>
                <li>Correo electrónico</li>
                <li>Mensaje o consulta</li>
              </ul>

              <h2 className="text-xl font-normal uppercase tracking-wide mt-8 mb-4 border-l-2 border-sky-600 pl-4">
                Finalidades del tratamiento de sus datos personales
              </h2>
              <p className="text-gray-700 font-light">
                Sus datos personales serán utilizados para las siguientes
                finalidades:
              </p>
              <ul className="list-disc pl-6 text-gray-700 font-light">
                <li>Proveer los servicios y productos que ha solicitado</li>
                <li>Informarle sobre cambios en los mismos</li>
                <li>Evaluar la calidad del servicio que le brindamos</li>
                <li>Atender sus dudas, comentarios y solicitudes</li>
                <li>
                  Enviarle información promocional sobre nuestros servicios
                </li>
              </ul>

              <h2 className="text-xl font-normal uppercase tracking-wide mt-8 mb-4 border-l-2 border-sky-600 pl-4">
                Medios para ejercer derechos ARCO
              </h2>
              <p className="text-gray-700 font-light">
                Usted tiene derecho a acceder, rectificar y cancelar sus datos
                personales, así como de oponerse al tratamiento de los mismos o
                revocar el consentimiento que para tal fin nos haya otorgado, a
                través de los procedimientos que hemos implementado. Para
                conocer dichos procedimientos, los requisitos y plazos, se puede
                poner en contacto con nuestro departamento de datos personales,
                por correo electrónico a info@bahiaconnect.com, o visitando
                nuestra página de Internet bahiaconnect.com.
              </p>

              <h2 className="text-xl font-normal uppercase tracking-wide mt-8 mb-4 border-l-2 border-sky-600 pl-4">
                Cambios al aviso de privacidad
              </h2>
              <p className="text-gray-700 font-light">
                Nos reservamos el derecho de efectuar en cualquier momento
                modificaciones o actualizaciones al presente aviso de
                privacidad, para la atención de novedades legislativas,
                políticas internas o nuevos requerimientos para la prestación u
                ofrecimiento de nuestros servicios o productos. Estas
                modificaciones estarán disponibles al público a través de
                nuestra página de Internet bahiaconnect.com.
              </p>

              <h2 className="text-xl font-normal uppercase tracking-wide mt-8 mb-4 border-l-2 border-sky-600 pl-4">
                Uso de cookies y web beacons
              </h2>
              <p className="text-gray-700 font-light">
                Le informamos que en nuestra página de Internet utilizamos
                cookies, web beacons y otras tecnologías a través de las cuales
                es posible monitorear su comportamiento como usuario de
                Internet, así como brindarle un mejor servicio y experiencia de
                usuario al navegar en nuestra página.
              </p>

              <p className="text-gray-700 font-light mt-8">
                Fecha última actualización: 24/04/25
              </p>
            </div>
          </div>

          {/* Right column - geometric element */}
          <div className="hidden md:block md:col-span-1">
            <div className="w-8 h-8 bg-sky-600/20 mt-24"></div>
          </div>
        </div>

        {/* Swiss design geometric elements */}
        <div className="grid grid-cols-12 mt-20">
          <div className="col-span-1 col-start-2">
            <div className="w-8 h-8 border border-black"></div>
          </div>
          <div className="col-span-8 col-start-4">
            <div className="h-[1px] w-full bg-black"></div>
          </div>
          <div className="col-span-1 col-start-12">
            <div className="w-4 h-4 bg-sky-600 ml-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
