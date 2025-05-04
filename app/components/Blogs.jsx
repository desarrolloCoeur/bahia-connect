"use client"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Blogs = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef(null)

  // Check if mobile on mount and window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

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

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="w-full bg-white py-24">
      <div className="container mx-auto px-6">        
        <div className="grid grid-cols-12 gap-4 mb-20">
          <div className="col-span-12 md:col-span-3 flex items-start">
            <span className="text-6xl font-light text-sky-600 mr-4">05</span>
            <div className="h-[1px] w-full bg-black mt-6"></div>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="text-3xl font-light tracking-tight text-black mb-4">BLOGS</h2>
            <p className="text-sm uppercase tracking-widest text-gray-600 font-light">
              Artículos y noticias sobre administración de propiedades
            </p>
          </div>
        </div>

        {isMobile ? (
          // Mobile Carousel View with Swiss design
          <div className="relative w-full mb-16">
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
                    {/* Blog Card - Swiss Design */}
                    <a href={`/blogs/${post.slug}`} className="group block">
                      <article className="flex flex-col h-full">
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
                            <span className="text-xs uppercase tracking-wider font-light">{post.category}</span>
                          </div>
                        </div>

                        {/* Content with Swiss typography */}
                        <div className="flex flex-col flex-grow">
                          <div className="mb-2">
                            <span className="text-xs text-gray-500 uppercase tracking-wider">
                              {formatDate(post.date)}
                            </span>
                          </div>
                          <h3 className="text-lg font-normal mb-3 group-hover:text-sky-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 font-light text-sm mb-4 flex-grow">{post.excerpt}</p>
                          <div className="mt-auto">
                            <div className="inline-flex items-center border-b border-black pb-1 text-sm group-hover:border-sky-600 group-hover:text-sky-600 transition-colors">
                              Leer más
                            </div>
                          </div>
                        </div>
                      </article>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Swiss minimalist navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-1/4 bottom-0 -translate-y-1/2 bg-white border border-black p-3 z-10 hover:bg-sky-600 hover:border-sky-600 hover:text-white transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-1/4 bottom-0 -translate-y-1/2 bg-white border border-black p-3 z-10 hover:bg-sky-600 hover:border-sky-600 hover:text-white transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Swiss minimalist dots indicator */}
            <div className="flex justify-center mt-8 gap-4">
              {blogPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-[2px] w-8 ${currentIndex === index ? "bg-sky-600" : "bg-gray-300"} transition-colors`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop Grid View with Swiss design
          <div className="grid grid-cols-12 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className={`col-span-12 md:col-span-6 lg:col-span-4 ${
                  index === 0 ? "md:col-start-1" : index === 1 ? "md:col-start-7 lg:col-start-5" : "lg:col-start-9"
                }`}
              >
                {/* Blog Card - Swiss Design */}
                <a href={`/blogs/${post.slug}`} className="group block">
                  <article className="flex flex-col h-full">
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
                        <span className="text-xs uppercase tracking-wider font-light">{post.category}</span>
                      </div>
                    </div>

                    {/* Content with Swiss typography */}
                    <div className="flex flex-col flex-grow">
                      <div className="mb-2">
                        <span className="text-xs text-gray-500 uppercase tracking-wider">{formatDate(post.date)}</span>
                      </div>
                      <h3 className="text-lg font-normal mb-3 group-hover:text-sky-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 font-light text-sm mb-4 flex-grow">{post.excerpt}</p>
                      <div className="mt-auto">
                        <div className="inline-flex items-center border-b border-black pb-1 text-sm group-hover:border-sky-600 group-hover:text-sky-600 transition-colors">
                          Leer más
                        </div>
                      </div>
                    </div>
                  </article>
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Swiss design geometric element */}
        <div className="grid grid-cols-12 mt-20">
          <div className="col-span-1 col-start-1">
            <div className="w-6 h-6 bg-sky-600"></div>
          </div>
          <div className="col-span-10 col-start-2">
            <div className="h-[1px] w-full bg-black"></div>
          </div>
          <div className="col-span-1 col-start-12">
            <div className="w-6 h-6 border border-black"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
