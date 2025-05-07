import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Contact from "../components/Contact";

export const metadata = {
  title: "Blog | Bahía Connect - Property Management Tips",
  description:
    "Articles and advice about property management, real estate investment, and maximizing profitability for condominiums and vacation properties in Bahía de Banderas.",
  keywords:
    "real estate blog, property management tips, real estate investment, condominium profitability, vacation properties, Bahía de Banderas, Nayarit, Punta Mita, property management, real estate articles",
};

export default function BlogsPage() {
  const blogPosts = [
    {
      id: 1,
      slug: "potencia-valor-propiedad-consultoria-360",
      title: "Maximize your property value with 360° consulting",
      excerpt:
        "Discover how to get the most out of your coastal property with our comprehensive consulting services.",
      date: "2025-04-10",
      category: "Consulting",
      img: "/assets/blog/1.jpg",
    },
    {
      id: 2,
      slug: "administracion-propiedades-inversion-protegida",
      title: "Property management: your year-round protected investment",
      excerpt:
        "How to maintain your beach property while enjoying its benefits.",
      date: "2025-04-10",
      category: "Management",
      img: "/assets/blog/2.jpg",
    },
    {
      id: 3,
      slug: "clave-rentabilizar-inversion-sin-estres",
      title: "Property management: the key to stress-free investment profitability",
      excerpt:
        "Turn your vacation property into a profitable asset without complications.",
      date: "2025-04-10",
      category: "Profitability",
      img: "/assets/blog/3.jpg",
    },
  ];

  // Format date to display in a more readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
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
                  <a href="/en" className="hover:text-sky-600 transition-colors">
                    Home
                  </a>
                  <span className="mx-2">/</span>
                  <span className="text-white">Blog</span>
                </div>
                <p className="text-xl text-white/90 font-light max-w-2xl">
                  Expert advice for managing and maximizing your property's value
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
                Recent Articles
              </h2>
              <p className="text-sm uppercase tracking-widest text-gray-600 font-light">
                Valuable information for property owners and investors
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
                        href={`/en/blogs/${post.slug}`}
                        className="inline-flex items-center border-b border-black pb-1 group-hover:border-sky-600 group-hover:text-sky-600 transition-colors"
                      >
                        <span className="text-sm mr-2">Read more</span>
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
          alt="Contact Us"
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
                  Our commitment is to provide personalized and professional service
                </p>
                <a
                  href="/en/contact"
                  className="inline-flex items-center border border-white px-8 py-3 text-white uppercase hover:bg-sky-600 hover:border-sky-600 transition-colors group"
                >
                  <span className="mr-2">Contact Us</span>
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