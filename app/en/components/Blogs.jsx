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
      slug: "excelencia-administracion-condominios",
      title: "Bahía Connect: Excellence in Condominium Management",
      excerpt:
        "Comprehensive management of residential and hotel condominiums focused on quality, sustainability, and attention to detail.",
      date: "2025-06-17",
      category: "Property Management",
      img: "/assets/blog/4.jpeg",
    },
    {
      id: 2,
      slug: "potencia-valor-propiedad-consultoria-360",
      title: "Enhance the value of your property with a 360° consultancy",
      excerpt: "Discover how to make the most of your coastal property with our comprehensive consultancy.",
      date: "2025-04-10",
      category: "Consulting",
      img: "/assets/blog/1.jpg",
    },
    {
      id: 3,
      slug: "administracion-propiedades-inversion-protegida",
      title: "Property management: your investment protected year-round",
      excerpt: "How to care for your beach property while enjoying the benefits.",
      date: "2025-04-10",
      category: "Management",
      img: "/assets/blog/2.jpg",
    },
    // {
    //   id: 3,
    //   slug: "clave-rentabilizar-inversion-sin-estres",
    //   title: "Property management: the key to monetizing your investment stress-free",
    //   excerpt: "Turn your vacation property into a profitable asset without complications.",
    //   date: "2025-04-10",
    //   category: "Profitability",
    //   img: "/assets/blog/3.jpg",
    // },
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
      handleNext()
    }

    if (touchStart - touchEnd < -75) {
      handlePrev()
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
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
              Articles and news about property management
            </p>
          </div>
        </div>

        {isMobile ? (
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
                    <a href={`/en/blogs/${post.slug}`} className="group block">
                      <article className="flex flex-col h-full">
                        <div className="relative overflow-hidden mb-6">
                          <div className="aspect-[16/9] relative">
                            <Image
                              src={post.img || "/placeholder.svg"}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute top-0 right-0 bg-white px-4 py-1">
                            <span className="text-xs uppercase tracking-wider font-light">{post.category}</span>
                          </div>
                        </div>

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
                              Read more
                            </div>
                          </div>
                        </div>
                      </article>
                    </a>
                  </div>
                ))}
              </div>
            </div>

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
          <div className="grid grid-cols-12 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={post.id}
                className={`col-span-12 md:col-span-6 lg:col-span-4 ${
                  index === 0 ? "md:col-start-1" : index === 1 ? "md:col-start-7 lg:col-start-5" : "lg:col-start-9"
                }`}
              >
                <a href={`/en/blogs/${post.slug}`} className="group block">
                  <article className="flex flex-col h-full">
                    <div className="relative overflow-hidden mb-6">
                      <div className="aspect-[16/9] relative">
                        <Image
                          src={post.img || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute top-0 right-0 bg-white px-4 py-1">
                        <span className="text-xs uppercase tracking-wider font-light">{post.category}</span>
                      </div>
                    </div>

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
                          Read more
                        </div>
                      </div>
                    </div>
                  </article>
                </a>
              </div>
            ))}
          </div>
        )}

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
