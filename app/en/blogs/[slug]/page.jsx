import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Contact from "../../components/Contact";

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  return {
    title: `${post.title} | Bahía Connect Blog`,
    description:
      post.excerpt ||
      "Bahía Connect blog article about property management",
    keywords: `${post.category.toLowerCase()}, property management, Bahía de Banderas, Nayarit, ${post.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .split(" ")
      .join(", ")}`,
  };
}

const getBlogPost = (slug) => {
  const blogPosts = {
    "potencia-valor-propiedad-consultoria-360": {
      img: "/assets/blog/1.jpg",
      img2: "/assets/blog/1.2.jpg",
      title: "Maximize your property value with 360° consulting",
      content: `
        <p>If you already own a coastal property or are about to acquire one, the next step is to consider how to maximize its potential. Many owners lack the time, knowledge, or contacts to implement everything needed. This is where 360° consulting makes the difference - designed for owners seeking efficient management and practical solutions from day one.</p>
        
        <p>At Bahía Connect, we work closely with you to understand your property's needs: Will it be rented? Does it require maintenance? Is it part of a long-term investment? We address all this through our 360° consulting, where we don't just advise you but coordinate every step so you don't have to worry.</p>
        
        <h2>Professional management for your peace of mind</h2>
        <p>Managing properties in tourist areas can be challenging if you don't live in the region. We handle supervision, maintenance, preparation, and rental of your property, attending to every detail as if it were our own. We bring our local expertise, trusted provider network, and responsive operational team.</p>
        
        <p>The goal of our 360° consulting is for you to relax while your property works for you. From initial planning to efficient day-to-day management, we're with you to deliver real results without complications.</p>
        
        <h2>Key benefits</h2>
        <ul>
          <li>Time savings and stress reduction</li>
          <li>Professional preventive maintenance</li>
          <li>Maximized return on investment</li>
          <li>Access to reliable providers</li>
          <li>Transparent financial reporting</li>
        </ul>
      `,
      date: "2025-04-10",
      category: "Consulting",
      excerpt:
        "Discover how to get the most out of your coastal property with our comprehensive consulting services.",
    },
    "administracion-propiedades-inversion-protegida": {
      img: "/assets/blog/2.jpg",
      img2: "/assets/blog/2.2.jpg",
      title: "Property management: your year-round protected investment",
      content: `
        <p>Owning a beach property is many people's dream, but managing it properly can become a real challenge without the right support. At Bahía Connect, we specialize in property management - a service designed to protect your investment while you enjoy the benefits.</p>
        
        <h2>What does good property management involve?</h2>
        <p>Property management goes far beyond just watching over a property. It's a complete process that includes:</p>
        
        <ul>
          <li>Personalized tenant service</li>
          <li>Scheduled preventive maintenance</li>
          <li>Timely payment of utilities and taxes</li>
          <li>Detailed financial reports</li>
          <li>Strategies to maximize profitability</li>
        </ul>
        
        <p>Additionally, with our property management service, you'll receive periodic reports with clear results, so you know exactly how your investment is being managed.</p>
        
        <h2>Professional service that makes the difference</h2>
        <p>One of owners' biggest mistakes is entrusting their property to inexperienced third parties. At Bahía Connect, we offer professional service distinguished by:</p>
        
        <ul>
          <li>Organization and strategic planning</li>
          <li>Transparency in all operations</li>
          <li>Focus on measurable results</li>
          <li>Clear service protocols</li>
        </ul>
      `,
      date: "2025-04-10",
      category: "Management",
      excerpt:
        "How to maintain your beach property while enjoying its benefits.",
    },
    "clave-rentabilizar-inversion-sin-estres": {
      img: "/assets/blog/3.jpg",
      img2: "/assets/blog/3.2.jpg",
      title: "Property management: the key to stress-free investment profitability",
      content: `
        <p>Owning property in a tourist destination is a privilege but also a great responsibility. Maintenance tasks, vendor coordination, guest relations, and legal aspects can become headaches without proper support. At Bahía Connect, we offer complete property management service with strategic, personalized focus.</p>
        
        <h2>Our strategic approach</h2>
        <p>Our 360° consulting goes beyond typical follow-up. We help you:</p>
        
        <ul>
          <li>Structure your property's needs</li>
          <li>Comply with local regulations</li>
          <li>Optimize profitability</li>
          <li>Monetize through vacation or long-term rentals</li>
        </ul>
        
        <p>One of the biggest benefits of 360° consulting is that you don't have to improvise. We analyze your situation, define objectives with you, and create a clear plan.</p>
        
        <h2>We adapt service to your needs</h2>
        <p>We know every property is different. That's why our property management adapts to you:</p>
        
        <ul>
          <li>Occasional use vs. continuous rental</li>
          <li>Vacation vs. residential properties</li>
          <li>Short-term vs. long-term investments</li>
        </ul>
        
        <p>We design a work scheme that fits your lifestyle and financial goals.</p>
      `,
      date: "2025-04-10",
      category: "Profitability",
      excerpt:
        "Turn your vacation property into a profitable asset without complications.",
    },
    "vacation-rental-guaranteed-returns": {
      img: "/assets/blog/2.jpg",
      img2: "/assets/blog/2.2.jpg",
      title: "Well-managed vacation rental = guaranteed returns",
      content: `
        <p>The growth of tourism in Riviera Nayarit has skyrocketed demand for temporary lodging. If you want to take advantage of this opportunity, you need an efficient, reliable vacation rental strategy.</p>
        
        <h2>Our proven model</h2>
        <p>At Bahía Connect we help turn your property into a profitable asset through:</p>
        
        <ul>
          <li>Strategic promotion on multiple platforms</li>
          <li>Professional guest management</li>
          <li>Between-stay maintenance</li>
          <li>Continuous performance analysis</li>
          <li>Seasonal rate optimization</li>
        </ul>
        
        <h2>Key benefits</h2>
        <p>Well-executed vacation rentals offer:</p>
        
        <ul>
          <li>Coverage of property expenses</li>
          <li>Passive income generation</li>
          <li>Consistent property maintenance</li>
          <li>Long-term property value increase</li>
        </ul>
        
        <p>With our support, you can rent without complications and with confidence your property is in good hands.</p>
      `,
      date: "2023-08-05",
      category: "Vacation Rental",
      excerpt:
        "Take advantage of the tourism boom and turn your property into an income source.",
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
            Article not found
          </h1>
          <p className="text-gray-600 font-light mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <a
            href="/en/blogs"
            className="inline-flex items-center border border-black px-6 py-3 text-black uppercase hover:bg-sky-600 hover:border-sky-600 hover:text-white transition-colors group"
          >
            <span className="mr-2">View all articles</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </main>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
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
                  <a href="/en" className="hover:text-sky-600 transition-colors">
                    Home
                  </a>
                  <span className="mx-2">/</span>
                  <a
                    href="/en/logs"
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
                      Category
                    </span>
                    <span className="text-base font-normal">
                      {post.category}
                    </span>
                  </div>
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-wider text-gray-500 block mb-1">
                      Date
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
                      href="/en/blogs"
                      className="inline-flex items-center text-sm border-b border-black pb-1 hover:border-sky-600 hover:text-sky-600 transition-colors"
                    >
                      <span className="mr-2">Back to blog</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main article content */}
            <div className="col-span-12 md:col-span-9">
              {/* Feature image */}
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