import Image from "next/image";
import BlogCard from "../components/BlogCard";
import Contact from "../components/Contact";

export const metadata = {
  title: "Blog | Bahía Conectada",
  description:
    "Consejos y estrategias para maximizar el valor de tu propiedad en la costa",
};

const BlogsPage = () => {
  const blogPosts = [
    {
      id: 1,
      slug: "potencia-valor-propiedad-consultoria-360",
      title: "Potencia el valor de tu propiedad con una consultoría 360°",
      excerpt:
        "Descubre cómo aprovechar al máximo tu propiedad en la costa con nuestra consultoría integral.",
      date: "2025-04-10",
      category: "Consultoría",
      img:"/assets/blog/1.jpg"
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
      img:"/assets/blog/2.jpg"
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
      img:"/assets/blog/3.jpg"
    },
  ];

  return (
    <div className="">
      <div className="relative h-[40vh] w-full">
        <Image
          className="h-full w-full object-cover select-none brightness-40"
          src="/assets/blog.jpg"
          alt="hero-img"
          width={1400}
          height={900}
        />

        <div className="absolute text-white bottom-[20%] left-[5%]  md:left-[20%] text-xl md:text-2xl font-light">
          <div className="flex">
            <h1 className="uppercase">Inicio</h1>
            <span className="">/</span>
            <h1 className="uppercase">Blog</h1>{" "}
          </div>
          <h2>
            Consejos expertos para administrar y rentabilizar tu propiedad
          </h2>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[90%] md:w-[80%] lg:w-[60%] my-15">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-sky-800 font-light">BLOGS</h1>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-15">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                img={post.img}
              />
            ))}
          </section>
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
};

export default BlogsPage;
