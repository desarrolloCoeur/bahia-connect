"use client"
import BlogCard from "../components/BlogCard"
import { useMobile } from "../../hooks/use-mobile"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"

export const metadata = {
  title: "Blog | Bahía Conectada",
  description: "Consejos y estrategias para maximizar el valor de tu propiedad en la costa",
}

const Blogs = () => {
  const isMobile = useMobile()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef(null)

  const blogPosts = [
    {
      id: 1,
      slug: "potencia-valor-propiedad-consultoria-360",
      title: "Potencia el valor de tu propiedad con una consultoría 360°",
      excerpt: "Descubre cómo aprovechar al máximo tu propiedad en la costa con nuestra consultoría integral.",
      date: "2025-04-10",
      category: "Consultoría",
      img: "/assets/blog/1.jpg",
    },
    {
      id: 2,
      slug: "administracion-propiedades-inversion-protegida",
      title: "Administración de propiedades: tu inversión protegida todo el año",
      excerpt: "Cómo cuidar tu propiedad en la playa mientras disfrutas de los beneficios.",
      date: "2025-04-10",
      category: "Administración",
      img: "/assets/blog/2.jpg",
    },
    {
      id: 3,
      slug: "clave-rentabilizar-inversion-sin-estres",
      title: "Administración de propiedades: la clave para rentabilizar tu inversión sin estrés",
      excerpt: "Convierte tu propiedad turística en un activo rentable sin complicaciones.",
      date: "2025-04-10",
      category: "Rentabilidad",
      img: "/assets/blog/3.jpg",
    },
  ]

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? blogPosts.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === blogPosts.length - 1 ? 0 : prevIndex + 1))
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      handleNext()
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      handlePrev()
    }
  }

  return (
    <div className="">
      <div className="w-full flex justify-center">
        <div className="w-[90%] md:w-[80%] lg:w-[60%] my-15">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-sky-800 font-light text-center">BLOGS</h1>

          {isMobile ? (
            // Mobile Carousel View
            <div className="relative w-full my-15">
              <div
                className="overflow-hidden"
                ref={carouselRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {blogPosts.map((post) => (
                    <div key={post.id} className="w-full flex-shrink-0 px-2">
                      <BlogCard
                        slug={post.slug}
                        title={post.title}
                        excerpt={post.excerpt}
                        date={post.date}
                        category={post.category}
                        img={post.img}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6 text-gray-800" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6 text-gray-800" />
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center mt-4 gap-2">
                {blogPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-sky-700" : "bg-gray-300"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Desktop Grid View
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
          )}
        </div>
      </div>
    </div>
  )
}

export default Blogs
