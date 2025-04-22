import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Contact from "../components/Contact";

export const metadata = {
  title: "Blog | Bahía Connect - Consejos sobre Administración de Propiedades",
  description:
    "Artículos y consejos sobre administración de propiedades, inversión inmobiliaria y maximización de rentabilidad en condominios y propiedades vacacionales en Bahía de Banderas.",
  keywords:
    "blog inmobiliario, consejos administración propiedades, inversión inmobiliaria, rentabilidad condominios, propiedades vacacionales, Bahía de Banderas, Nayarit, Punta Mita, gestión inmobiliaria, artículos inmobiliarios",
};

export default function BlogsPage() {
  const blogPosts = [
    {
      id: 1,
      slug: "potencia-valor-propiedad-consultoria-360",
      title: "Potencia el valor de tu propiedad con una consultoría 360°",
      excerpt:
        "Descubre cómo aprovechar al máximo tu propiedad en la costa con nuestra consultoría integral.",
      date: "2025-04-10",
      category: "Consultoría",
      img: "/assets/blog/1.jpg",
    },
    {
      id: 2,
      slug: "administracion-propiedades-inversion-protegida",
      title:
        "Administración de propiedades: tu inversión protegida todo el año",
      excerpt:
        "Cómo cuidar tu propiedad en la playa mientras disfrutas de los beneficios.",
      date: "2025-04-10",
      category: "Administración",
      img: "/assets/blog/2.jpg",
    },
    {
      id: 3,
      slug: "clave-rentabilizar-inversion-sin-estres",
      title:
        "Administración de propiedades: la clave para rentabilizar tu inversión sin estrés",
      excerpt:
        "Convierte tu propiedad turística en un activo rentable sin complicaciones.",
      date: "2025-04-10",
      category: "Rentabilidad",
      img: "/assets/blog/3.jpg",
    },
  ];

  // Format date to display in a more readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main>
      {/* Hero section with Swiss design */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/assets/blog.jpg"
          alt="Blog"
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
                  Blog
                </h1>
                <div className="flex items-center text-sm text-white/80 uppercase tracking-wider font-light mb-4">
                  <a href="/" className="hover:text-sky-600 transition-colors">
                    Inicio
                  </a>
                  <span className="mx-2">/</span>
                  <span className="text-white">Blogs</span>
                </div>
                <p className="text-xl text-white/90 font-light max-w-2xl">
                  Consejos expertos para administrar y rentabilizar tu propiedad
                </p>
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

      {/* Blog posts section with Swiss design */}
      <section className="w-full bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12 gap-4 mb-16">
            <div className="col-span-12 md:col-span-3 flex items-start">
              <div className="h-[1px] w-full bg-black mt-6"></div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="text-3xl font-light tracking-tight text-black uppercase mb-4">
                Artículos Recientes
              </h2>
              <p className="text-sm uppercase tracking-widest text-gray-600 font-light">
                Información valiosa para propietarios e inversionistas
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-x-8 gap-y-16">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className={`col-span-12 md:col-span-6 lg:col-span-4 ${
                  index === 0
                    ? "md:col-start-1"
                    : index === 1
                      ? "md:col-start-7 lg:col-start-5"
                      : "lg:col-start-9"
                }`}
              >
                <article className="group relative">
                  {/* Image container with Swiss design elements */}
                  <div className="relative overflow-hidden mb-6">
                    <div className="aspect-[16/9] relative">
                      <Image
                        src={post.img || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Category tag with Swiss design */}
                    <div className="absolute top-0 right-0 bg-white px-4 py-1">
                      <span className="text-xs uppercase tracking-wider font-light">
                        {post.category}
                      </span>
                    </div>
                    {/* Swiss design element */}
                    <div className="absolute bottom-0 left-0 w-6 h-6 bg-sky-600"></div>
                  </div>

                  {/* Content with Swiss typography */}
                  <div className="flex flex-col">
                    <div className="mb-2">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h3 className="text-lg font-normal mb-3 group-hover:text-sky-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 font-light text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="mt-4">
                      <a
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center border-b border-black pb-1 group-hover:border-sky-600 group-hover:text-sky-600 transition-colors"
                      >
                        <span className="text-sm mr-2">Leer más</span>
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
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
                  href="/contact"
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
