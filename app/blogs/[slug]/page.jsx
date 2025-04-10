import Image from "next/image";
import BlogContent from "../../components/BlogContent";
import Contact from "../../components/Contact";

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);

  return {
    title: `${post.title} | Bahía Conectada`,
    description: post.excerpt || "Artículo del blog de Bahía Conectada",
  };
}

const getBlogPost = (slug) => {
  const blogPosts = {
    "potencia-valor-propiedad-consultoria-360": {
      img: "/assets/blog/1.jpg",
      img2: "/assets/blog/1.2.jpg",
      title: "Potencia el valor de tu propiedad con una consultoría 360°",
      content: `
        <p class="mb-6">Si ya tienes una propiedad en la costa o estás por recibirla, el siguiente paso es pensar en cómo aprovecharla al máximo. Muchas veces, los propietarios no cuentan con el tiempo, el conocimiento o los contactos para poner en marcha todo lo necesario. Aquí es donde entra la diferencia de una consultoría 360°, pensada para propietarios que buscan una gestión eficiente y soluciones prácticas desde el día uno.</p>
        
        <p class="mb-6">En Bahía Conectada, trabajamos de la mano contigo para entender las necesidades de tu propiedad: ¿Se va a rentar? ¿Requiere mantenimiento? ¿Es parte de una inversión a largo plazo? Todo eso lo abordamos a través de nuestra consultoría 360°, donde no solo te orientamos, sino que coordinamos cada paso para que tú te despreocupes.</p>
        
        <h2 class="text-2xl text-sky-800 mt-8 mb-4">Gestión profesional para tu tranquilidad</h2>
        <p class="mb-6">La administración de propiedades en zonas turísticas puede ser retadora si no vives en la región. Nosotros nos encargamos de supervisar, mantener, preparar y rentar tu inmueble, cuidando cada detalle como si fuera propio. Sumamos nuestra experiencia local, red de proveedores de confianza y un equipo operativo que responde rápido.</p>
        
        <p class="mb-6">El objetivo de nuestra consultoría 360° es que tú te relajes mientras tu propiedad trabaja por ti. Desde la planificación inicial hasta la gestión eficiente del día a día, estamos contigo para que obtengas resultados reales sin complicaciones.</p>
        
        <h2 class="text-2xl text-sky-800 mt-8 mb-4">Ventajas clave</h2>
        <ul class="mb-6 list-disc pl-5 space-y-2">
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
        <p class="mb-6">Tener una propiedad en la playa es un sueño para muchos, pero administrarla correctamente puede convertirse en un verdadero reto si no se cuenta con el apoyo adecuado. En Bahía Conectada, nos especializamos en la administración de propiedades, un servicio diseñado para cuidar tu inversión mientras tú disfrutas de los beneficios.</p>
        
        <h2 class="text-2xl text-sky-800 mt-8 mb-4">¿Qué implica una buena administración de propiedades?</h2>
        <p class="mb-6">La administración de propiedades va mucho más allá de solo vigilar un inmueble. Es un proceso completo que incluye:</p>
        
        <ul class="mb-6 list-disc pl-5 space-y-2">
          <li>Atención personalizada a inquilinos</li>
          <li>Mantenimiento preventivo programado</li>
          <li>Pagos puntuales de servicios y impuestos</li>
          <li>Reportes financieros detallados</li>
          <li>Estrategias para maximizar rentabilidad</li>
        </ul>
        
        <p class="mb-6">Además, con nuestra administración de propiedades, recibirás informes periódicos con resultados claros, para que sepas exactamente cómo se está gestionando tu inversión.</p>
        
        <h2 class="text-2xl text-sky-800 mt-8 mb-4">Servicio profesional que marca la diferencia</h2>
        <p class="mb-6">Uno de los mayores errores de los propietarios es confiar su inmueble a terceros sin experiencia. En Bahía Conectada, ofrecemos un servicio profesional que se distingue por:</p>
        
        <ul class="mb-6 list-disc pl-5 space-y-2">
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
        <p class="mb-6">Tener una propiedad en un destino turístico es un privilegio, pero también una gran responsabilidad. Las tareas de mantenimiento, la coordinación con proveedores, el trato con huéspedes y los aspectos legales pueden convertirse en un dolor de cabeza si no cuentas con el apoyo adecuado. En Bahía Conectada, ofrecemos un servicio completo de administración de propiedades con enfoque estratégico y personalizado.</p>
        
        <h2 class="text-2xl text-sky-800 mt-8 mb-4">Nuestro enfoque estratégico</h2>
        <p class="mb-6">Nuestra consultoría 360° va más allá del típico seguimiento. Te ayudamos a:</p>
        
        <ul class="mb-6 list-disc pl-5 space-y-2">
          <li>Estructurar las necesidades de tu propiedad</li>
          <li>Cumplir con regulaciones locales</li>
          <li>Optimizar la rentabilidad</li>
          <li>Monetizar a través de rentas vacacionales o de largo plazo</li>
        </ul>
        
        <p class="mb-6">Uno de los mayores beneficios de contar con una consultoría 360° es que no tienes que improvisar. Analizamos tu situación, definimos objetivos contigo y creamos un plan claro.</p>
        
        <h2 class="text-2xl text-sky-800 mt-8 mb-4">Adaptamos el servicio a tus necesidades</h2>
        <p class="mb-6">Sabemos que cada propiedad es diferente. Por eso, nuestra administración de propiedades se adapta a ti:</p>
        
        <ul class="mb-6 list-disc pl-5 space-y-2">
          <li>Uso ocasional vs. renta continua</li>
          <li>Propiedades vacacionales vs. residenciales</li>
          <li>Inversiones a corto vs. largo plazo</li>
        </ul>
        
        <p class="mb-6">Diseñamos un esquema de trabajo que se ajusta a tu estilo de vida y metas financieras.</p>
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
        <p class="mb-6">El crecimiento del turismo en la Riviera Nayarit ha disparado la demanda de alojamiento temporal. Si quieres aprovechar esta oportunidad, necesitas una estrategia de renta vacacional eficiente y confiable.</p>
        
        <h2 class="text-2xl text-sky-800 mt-8 mb-4">Nuestro modelo probado</h2>
        <p class="mb-6">En Bahía Conectada te ayudamos a convertir tu propiedad en un activo rentable a través de:</p>
        
        <ul class="mb-6 list-disc pl-5 space-y-2">
          <li>Promoción estratégica en múltiples plataformas</li>
          <li>Gestión profesional de huéspedes</li>
          <li>Mantenimiento entre estancias</li>
          <li>Análisis continuo de rendimiento</li>
          <li>Optimización de tarifas según temporada</li>
        </ul>
        
        <h2 class="text-2xl text-sky-800 mt-8 mb-4">Beneficios clave</h2>
        <p class="mb-6">La renta vacacional bien ejecutada ofrece:</p>
        
        <ul class="mb-6 list-disc pl-5 space-y-2">
          <li>Cobertura de los gastos del inmueble</li>
          <li>Generación de ingresos pasivos</li>
          <li>Mantenimiento constante de la propiedad</li>
          <li>Incremento del valor de la propiedad a largo plazo</li>
        </ul>
        
        <p class="mb-6">Con nuestro acompañamiento, puedes rentar sin complicaciones y con la certeza de que tu propiedad está en buenas manos.</p>
      `,
      date: "2023-08-05",
      category: "Renta Vacacional",
      excerpt:
        "Aprovecha el auge turístico y convierte tu propiedad en una fuente de ingresos.",
    },
  };

  return blogPosts[slug] || null;
};

export default function BlogPost({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <main className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl text-gray-800">Artículo no encontrado</h1>
        <p className="mt-4 text-gray-600">
          El blog que buscas no existe o ha sido removido.
        </p>
        <a
          href="/blogs"
          className="mt-6 inline-block px-6 py-2 bg-sky-800 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Ver todos los artículos
        </a>
      </main>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <div className="relative h-[40vh] w-full">
        <Image
          className="h-full w-full object-cover select-none brightness-40"
          src={post.img}
          alt="top image slug"
          width={1400}
          height={900}
        />

        <div className="absolute text-white bottom-[20%] left-[5%]  md:left-[20%] text-xl md:text-2xl font-light">
          <div className="flex">
            <h1 className="uppercase">Inicio</h1>
            <span className="">/</span>
            <h1 className="uppercase">Blog</h1>{" "}
          </div>
          <h2>{post.title}</h2>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[90%] md:w-[80%] lg:w-[60%] mb-15">
          <header className="text-center mb-12">
            <Image
              className="h-[500px] w-full object-cover select-none"
              src={post.img2}
              alt="slug image 1"
              width={1400}
              height={900}
            />
            <h1 className="mt-4 text-3xl md:text-4xl text-sky-800">
              {post.title}
            </h1>
            <time dateTime={post.date} className="block mt-4 text-gray-500">
              Publicado el {formattedDate}
            </time>
          </header>
          <BlogContent content={post.content} />
        </div>
      </div>
      <div className="relative w-full flex justify-center bg-white py-20">
        <Image
          className="absolute top-0 left-0 h-full w-full object-cover select-none brightness-25 z-[0]"
          src="/assets/hero-z.jpg"
          alt="about-relleno"
          width={1920}
          height={900}
        />
        <div className="relative w-[80%] md:w-[60%] text-center">
          <p className="text-sky-50 font-light text-4xl mb-8">
            Nuestro compromiso es brindar un servicio personalizado y
            profesional
          </p>
          <button className="cursor-pointer px-6 py-2 border border-sky-50 text-sky-50 uppercase hover:bg-sky-800 hover:text-white transition-colors">
            Contáctanos
          </button>
        </div>
      </div>
      <Contact />
    </div>
  );
}
