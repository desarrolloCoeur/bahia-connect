import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Contact from "../../components/Contact";

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  return {
    title: `${post.title} | Blog de Bahía Connect`,
    description:
      post.excerpt ||
      "Artículo del blog de Bahía Connect sobre administración de propiedades",
    keywords: `${post.category.toLowerCase()}, administración de propiedades, Bahía de Banderas, Nayarit, ${post.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .split(" ")
      .join(", ")}`,
  };
}

const getBlogPost = (slug) => {
  const blogPosts = {
    "excelencia-administracion-condominios": {
      img: "/assets/blog/4.jpeg",
      img2: "/assets/blog/4.2.jpeg",
      title: "Bahía Connect: Excelencia en Administración de Condominios",
      content: `
    <h2>Nuestra Esencia</h2>
    <p>Bahía Connect es una empresa mexicana especializada en la administración integral de condominios residenciales y hoteleros con un alto nivel de calidad y atención al detalle. Nuestro compromiso es ofrecer soluciones eficientes y personalizadas que aseguren el óptimo funcionamiento y contribuyan a mantener la valorización de las propiedades que gestionamos.</p>

    <p>Contamos con un equipo multidisciplinario de profesionales altamente capacitados en áreas clave como administración, mantenimiento de áreas comunes, sistemas hidráulicos y eléctricos, seguridad, infraestructura y atención al cliente. Nuestra experiencia nos permite implementar y liderar prácticas operativas y financieras que garantizan la sostenibilidad y el bienestar de las comunidades que servimos.</p>

    <h2>Lo que hacemos</h2>

    <h3>Mantenimiento de Áreas Verdes</h3>
    <p>Gestionamos más de 18 proyectos donde coordinamos el mantenimiento de jardines en áreas comunes, adaptándonos a las necesidades de cada proyecto. Esto incluye la supervisión de empresas especializadas en jardinería o la formación de equipos multidisciplinarios con personal propio del condominio. Nuestras tareas abarcan desde la poda regular de césped y arbustos hasta el manejo eficiente y automatización del sistema de riego, la fertilización y fumigación adecuada, cuidando el paisajismo y la imagen general de las áreas verdes durante todo el año.</p>

    <h3>Limpieza y Conservación de Áreas Comunes</h3>
    <p>Contamos con protocolos y procedimientos específicos basados en sistemas de certificaciones en limpieza y mantenimiento de áreas comunes. Los estándares establecidos en las comunidades que atendemos son de alta exigencia y comparables con certificaciones en hoteles de lujo. La formalidad con la que procuramos dar mantenimiento y limpieza de todas las áreas comunes nos permite cuidar la experiencia del cliente y mantener espacios como pasillos, salones y otras zonas compartidas en óptimas condiciones. Esto incluye la limpieza regular, reparaciones menores y la supervisión de sistemas de iluminación y ventilación.</p>

    <h3>Sistemas Hidráulicos y Albercas</h3>
    <p>Gestionamos el mantenimiento de albercas en más de 140 unidades residenciales y casas club, asegurando la limpieza del agua, el control del pH y la revisión periódica de filtros y sistemas de circulación. También nos encargamos del mantenimiento integral de sistemas hidráulicos, incluyendo redes de distribución de agua, sistemas de riego y estaciones de bombeo.</p>

    <h3>Seguridad y Control de Acceso</h3>
    <p>Colaboramos con empresas especializadas para implementar sistemas de seguridad eficientes, que incluyen CCTV, centros de control y protocolos de acceso y emergencia. Supervisamos al personal de seguridad, ya sea propio o de terceros, y desarrollamos organigramas y órdenes de puesto para garantizar una operación segura y organizada.</p>

    <h3>Infraestructura y Vialidades</h3>
    <p>Nos encargamos del mantenimiento de vialidades internas, incluyendo caminos de concreto, asfalto y empedrados. También gestionamos proyectos de infraestructura como la construcción y mantenimiento de casetas de ingreso y otras edificaciones necesarias para el funcionamiento óptimo del condominio.</p>

    <h3>Atención al Cliente</h3>
    <p>Contamos con un departamento especializado en la atención a residentes, diseñado para facilitar una comunicación fluida y efectiva. A través de diversos canales, oficina HOA, aplicaciones móviles y portales web, los residentes pueden reportar incidencias, solicitar servicios y mantenerse informados sobre las actividades y proyectos en curso dentro del condominio. Este enfoque integral garantiza una gestión transparente y eficiente, mejorando la experiencia de vida en la comunidad.</p>

    <p>Cada día, nos dedicamos a garantizar que las comunidades que administramos funcionen de manera eficiente, segura y armoniosa. Nuestro equipo trabaja incansablemente para mantener y mejorar cada aspecto del condominio, desde el mantenimiento de áreas comunes y sistemas hidráulicos hasta la implementación de protocolos de seguridad y atención al cliente.</p>

    <p>Entendemos que la administración de un condominio va más allá de las tareas operativas; se trata de crear un entorno donde los residentes se sientan cómodos y orgullosos de su comunidad. Por ello, adoptamos un enfoque proactivo y personalizado, adaptándonos a las necesidades específicas de cada propiedad y sus habitantes.</p>

    <p>Nuestro compromiso es ser más que administradores; aspiramos a ser aliados estratégicos en la construcción de comunidades sostenibles y bien gestionadas. Con una gestión transparente, eficiente y centrada en las personas, trabajamos día a día para superar las expectativas y contribuir al bienestar de todos los residentes.</p>

    <p>Con nuestra experiencia y compromiso, trabajamos día a día para garantizar que cada condominio bajo nuestra administración funcione de manera eficiente, segura y armoniosa. Si deseas más información o requieres una cotización personalizada, no dudes en contactarnos. Estamos aquí para ayudarte a crear y mantener una comunidad donde todos se sientan cómodos y satisfechos.</p>

    <blockquote>“Cada acción diaria construye la confianza que nos distingue.”</blockquote>
  `,
      date: "2025-06-17",
      category: "Administración",
      excerpt:
        "Descubre cómo Bahía Connect transforma la administración de condominios con soluciones integrales, sostenibles y enfocadas en el bienestar comunitario.",
    },
    "potencia-valor-propiedad-consultoria-360": {
      img: "/assets/blog/1.jpg",
      img2: "/assets/blog/1.2.jpg",
      title: "Potencia el valor de tu propiedad con una consultoría 360°",
      content: `
        <p>Si ya tienes una propiedad en la costa o estás por recibirla, el siguiente paso es pensar en cómo aprovecharla al máximo. Muchas veces, los propietarios no cuentan con el tiempo, el conocimiento o los contactos para poner en marcha todo lo necesario. Aquí es donde entra la diferencia de una consultoría 360°, pensada para propietarios que buscan una gestión eficiente y soluciones prácticas desde el día uno.</p>
        
        <p>En Bahía Conectada, trabajamos de la mano contigo para entender las necesidades de tu propiedad: ¿Se va a rentar? ¿Requiere mantenimiento? ¿Es parte de una inversión a largo plazo? Todo eso lo abordamos a través de nuestra consultoría 360°, donde no solo te orientamos, sino que coordinamos cada paso para que tú te despreocupes.</p>
        
        <h2>Gestión profesional para tu tranquilidad</h2>
        <p>La administración de propiedades en zonas turísticas puede ser retadora si no vives en la región. Nosotros nos encargamos de supervisar, mantener, preparar y rentar tu inmueble, cuidando cada detalle como si fuera propio. Sumamos nuestra experiencia local, red de proveedores de confianza y un equipo operativo que responde rápido.</p>
        
        <p>El objetivo de nuestra consultoría 360° es que tú te relajes mientras tu propiedad trabaja por ti. Desde la planificación inicial hasta la gestión eficiente del día a día, estamos contigo para que obtengas resultados reales sin complicaciones.</p>
        
        <h2>Ventajas clave</h2>
        <ul>
          <li>Ahorro de tiempo y reducción de estrés</li>
          <li>Mantenimiento preventivo profesional</li>
          <li>Maximización del retorno de inversión</li>
          <li>Conexión con proveedores confiables</li>
          <li>Reportes financieros transparentes</li>
        </ul>
      `,
      date: "2025-04-10",
      category: "Consultoría",
      excerpt:
        "Descubre cómo aprovechar al máximo tu propiedad en la costa con nuestra consultoría integral.",
    },
    "administracion-propiedades-inversion-protegida": {
      img: "/assets/blog/2.jpg",
      img2: "/assets/blog/2.2.jpg",
      title:
        "Administración de propiedades: tu inversión protegida todo el año",
      content: `
        <p>Tener una propiedad en la playa es un sueño para muchos, pero administrarla correctamente puede convertirse en un verdadero reto si no se cuenta con el apoyo adecuado. En Bahía Conectada, nos especializamos en la administración de propiedades, un servicio diseñado para cuidar tu inversión mientras tú disfrutas de los beneficios.</p>
        
        <h2>¿Qué implica una buena administración de propiedades?</h2>
        <p>La administración de propiedades va mucho más allá de solo vigilar un inmueble. Es un proceso completo que incluye:</p>
        
        <ul>
          <li>Atención personalizada a inquilinos</li>
          <li>Mantenimiento preventivo programado</li>
          <li>Pagos puntuales de servicios y impuestos</li>
          <li>Reportes financieros detallados</li>
          <li>Estrategias para maximizar rentabilidad</li>
        </ul>
        
        <p>Además, con nuestra administración de propiedades, recibirás informes periódicos con resultados claros, para que sepas exactamente cómo se está gestionando tu inversión.</p>
        
        <h2>Servicio profesional que marca la diferencia</h2>
        <p>Uno de los mayores errores de los propietarios es confiar su inmueble a terceros sin experiencia. En Bahía Conectada, ofrecemos un servicio profesional que se distingue por:</p>
        
        <ul>
          <li>Organización y planificación estratégica</li>
          <li>Transparencia en todas las operaciones</li>
          <li>Enfoque en resultados medibles</li>
          <li>Protocolos claros de atención</li>
        </ul>
      `,
      date: "2025-04-10",
      category: "Administración",
      excerpt:
        "Cómo cuidar tu propiedad en la playa mientras disfrutas de los beneficios.",
    },
    "clave-rentabilizar-inversion-sin-estres": {
      img: "/assets/blog/3.jpg",
      img2: "/assets/blog/3.2.jpg",
      title:
        "Administración de propiedades: la clave para rentabilizar tu inversión sin estrés",
      content: `
        <p>Tener una propiedad en un destino turístico es un privilegio, pero también una gran responsabilidad. Las tareas de mantenimiento, la coordinación con proveedores, el trato con huéspedes y los aspectos legales pueden convertirse en un dolor de cabeza si no cuentas con el apoyo adecuado. En Bahía Conectada, ofrecemos un servicio completo de administración de propiedades con enfoque estratégico y personalizado.</p>
        
        <h2>Nuestro enfoque estratégico</h2>
        <p>Nuestra consultoría 360° va más allá del típico seguimiento. Te ayudamos a:</p>
        
        <ul>
          <li>Estructurar las necesidades de tu propiedad</li>
          <li>Cumplir con regulaciones locales</li>
          <li>Optimizar la rentabilidad</li>
          <li>Monetizar a través de rentas vacacionales o de largo plazo</li>
        </ul>
        
        <p>Uno de los mayores beneficios de contar con una consultoría 360° es que no tienes que improvisar. Analizamos tu situación, definimos objetivos contigo y creamos un plan claro.</p>
        
        <h2>Adaptamos el servicio a tus necesidades</h2>
        <p>Sabemos que cada propiedad es diferente. Por eso, nuestra administración de propiedades se adapta a ti:</p>
        
        <ul>
          <li>Uso ocasional vs. renta continua</li>
          <li>Propiedades vacacionales vs. residenciales</li>
          <li>Inversiones a corto vs. largo plazo</li>
        </ul>
        
        <p>Diseñamos un esquema de trabajo que se ajusta a tu estilo de vida y metas financieras.</p>
      `,
      date: "2025-04-10",
      category: "Rentabilidad",
      excerpt:
        "Convierte tu propiedad turística en un activo rentable sin complicaciones.",
    },
    "renta-vacacional-retorno-asegurado": {
      img: "/assets/blog/2.jpg",
      img2: "/assets/blog/2.2.jpg",
      title: "Renta vacacional bien gestionada = retorno asegurado",
      content: `
        <p>El crecimiento del turismo en la Riviera Nayarit ha disparado la demanda de alojamiento temporal. Si quieres aprovechar esta oportunidad, necesitas una estrategia de renta vacacional eficiente y confiable.</p>
        
        <h2>Nuestro modelo probado</h2>
        <p>En Bahía Conectada te ayudamos a convertir tu propiedad en un activo rentable a través de:</p>
        
        <ul>
          <li>Promoción estratégica en múltiples plataformas</li>
          <li>Gestión profesional de huéspedes</li>
          <li>Mantenimiento entre estancias</li>
          <li>Análisis continuo de rendimiento</li>
          <li>Optimización de tarifas según temporada</li>
        </ul>
        
        <h2>Beneficios clave</h2>
        <p>La renta vacacional bien ejecutada ofrece:</p>
        
        <ul>
          <li>Cobertura de los gastos del inmueble</li>
          <li>Generación de ingresos pasivos</li>
          <li>Mantenimiento constante de la propiedad</li>
          <li>Incremento del valor de la propiedad a largo plazo</li>
        </ul>
        
        <p>Con nuestro acompañamiento, puedes rentar sin complicaciones y con la certeza de que tu propiedad está en buenas manos.</p>
      `,
      date: "2023-08-05",
      category: "Renta Vacacional",
      excerpt:
        "Aprovecha el auge turístico y convierte tu propiedad en una fuente de ingresos.",
    },
  };

  return blogPosts[slug] || null;
};

// Custom BlogContent component with Swiss design styling
function BlogContent({ content }) {
  // Convert HTML string to React components with Swiss styling
  const formattedContent = content
    .replace(
      /<p>(.*?)<\/p>/g,
      '<p class="text-gray-700 font-light leading-relaxed mb-8">$1</p>'
    )
    .replace(
      /<h2>(.*?)<\/h2>/g,
      '<h2 class="text-2xl font-normal uppercase tracking-wide mb-6 mt-12 border-l-2 border-sky-600 pl-4">$1</h2>'
    )
    .replace(/<ul>(.*?)<\/ul>/gs, '<ul class="space-y-4 mb-8 pl-6">$1</ul>')
    .replace(
      /<li>(.*?)<\/li>/g,
      '<li class="flex items-start"><div class="w-1.5 h-1.5 bg-sky-600 mt-2 mr-3 flex-shrink-0"></div><span class="text-gray-700 font-light">$1</span></li>'
    );

  return <div dangerouslySetInnerHTML={{ __html: formattedContent }} />;
}

export default function BlogPost({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <main className="w-full bg-white py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="h-[2px] w-16 bg-sky-600 mb-8 mx-auto"></div>
          <h1 className="text-3xl font-light uppercase tracking-tight mb-6">
            Artículo no encontrado
          </h1>
          <p className="text-gray-600 font-light mb-8">
            El blog que buscas no existe o ha sido removido.
          </p>
          <a
            href="/es/blogs"
            className="inline-flex items-center border border-black px-6 py-3 text-black uppercase hover:bg-sky-600 hover:border-sky-600 hover:text-white transition-colors group"
          >
            <span className="mr-2">Ver todos los artículos</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </main>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main>
      {/* Hero section with Swiss design */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src={post.img || "/placeholder.svg"}
          alt={post.title}
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
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-4 line-clamp-2 max-md:text-xl">
                  {post.title}
                </h1>
                <div className="flex items-center text-sm text-white/80 uppercase tracking-wider font-light mb-4">
                  <a
                    href="/es"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Inicio
                  </a>
                  <span className="mx-2">/</span>
                  <a
                    href="/es/blogs"
                    className="hover:text-sky-600 transition-colors"
                  >
                    Blog
                  </a>
                  <span className="mx-2">/</span>
                  <span className="text-white">{post.category}</span>
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

      {/* Blog content section with Swiss design */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-8">
            {/* Article metadata */}
            <div className="col-span-12 md:col-span-3">
              <div className="sticky top-24">
                <div className="border-t-2 border-sky-600 pt-6">
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-wider text-gray-500 block mb-1">
                      Categoría
                    </span>
                    <span className="text-base font-normal">
                      {post.category}
                    </span>
                  </div>
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-wider text-gray-500 block mb-1">
                      Fecha
                    </span>
                    <time
                      dateTime={post.date}
                      className="text-base font-normal"
                    >
                      {formattedDate}
                    </time>
                  </div>
                  <div className="mb-6">
                    <a
                      href="/es/blogs"
                      className="inline-flex items-center text-sm border-b border-black pb-1 hover:border-sky-600 hover:text-sky-600 transition-colors"
                    >
                      <span className="mr-2">Volver al blog</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main article content */}
            <div className="col-span-12 md:col-span-9">
              {/* Featusky image */}
              <div className="relative mb-12 overflow-hidden">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={post.img2 || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
                {/* Swiss design element */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-sky-600"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border border-black"></div>
              </div>

              {/* Article content */}
              <article className="max-w-3xl">
                <BlogContent content={post.content} />
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section with Swiss design */}
      <section className="w-full relative h-[60vh] overflow-hidden">
        <Image
          src="/assets/hero-z.jpg"
          alt="Contáctanos"
          fill
          className="object-cover grayscale-[70%]"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Swiss design grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 pointer-events-none">
          <div className="col-span-1 h-full border-l border-white/10"></div>
          <div className="col-span-1 col-start-5 h-full border-l border-white/10"></div>
          <div className="col-span-1 col-start-9 h-full border-l border-white/10"></div>
        </div>

        {/* Content container */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
                <div className="h-[2px] w-16 bg-sky-600 mb-8 mx-auto"></div>
                <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-10 max-w-3xl mx-auto">
                  Nuestro compromiso es brindar un servicio personalizado y
                  profesional
                </p>
                <a
                  href="/es/contact"
                  className="inline-flex items-center border border-white px-8 py-3 text-white uppercase hover:bg-sky-600 hover:border-sky-600 transition-colors group"
                >
                  <span className="mr-2">Contáctanos</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom grid line */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-12">
              <div className="col-span-1 col-start-1">
                <div className="w-6 h-6 border border-white"></div>
              </div>
              <div className="col-span-3 col-start-9 h-[1px] bg-white/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <Contact />
    </main>
  );
}
