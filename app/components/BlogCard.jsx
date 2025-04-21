import Image from "next/image"
import Link from "next/link"

export default function BlogCard({ slug, title, excerpt, date, category, img }) {
  const formattedDate = new Date(date).toLocaleDateString("es-MX", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  return (
    <Link href={`/blogs/${slug}`} className="group">
      <article className="h-full flex flex-col bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="p-6 flex-1">
          <span className="inline-block px-3 py-1 mb-3 bg-sky-700 text-white text-xs">{category}</span>
          <Image
            className="w-full h-[200px] object-cover my-2"
            src={img || "/placeholder.svg"}
            alt={title}
            width={300}
            height={200}
          />
          <h3 className="text-xl text-gray-800 group-hover:text-sky-800 transition-colors">{title}</h3>
          <p className="mt-2 text-gray-600 line-clamp-2">{excerpt}</p>
        </div>
        <div className="px-6 py-4 bg-gray-50">
          <time dateTime={date} className="text-sm text-gray-500">
            {formattedDate}
          </time>
        </div>
      </article>
    </Link>
  )
}
