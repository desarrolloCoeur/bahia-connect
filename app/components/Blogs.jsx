import Image from "next/image";
import BlogCard from "../components/BlogCard";
import Contact from "../components/Contact";

export const metadata = {
  title: "Blog | Bahía Conectada",
  description:
    "Consejos y estrategias para maximizar el valor de tu propiedad en la costa",
};

const Blogs = () => {
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
      <div className="w-full flex justify-center">
        <div className="w-[90%] md:w-[80%] lg:w-[60%] my-15">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-sky-800 font-light text-center">BLOGS</h1>
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
    </div>
  );
};

export default Blogs;
