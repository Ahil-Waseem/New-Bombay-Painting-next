import Link from "next/link";

export default function BlogCard({ blog }: any) {
  return (
    <div className="bg-[#111] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-800 hover:border-yellow-500">

      <Link href={`/blog/${blog.slug}`}>
        <div className="overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-56 object-cover hover:scale-110 transition-all duration-500"
          />
        </div>
      </Link>

      <div className="p-5">
        <p className="text-gray-500 text-sm">{blog.date}</p>

        <Link href={`/blog/${blog.slug}`}>
          <h2 className="text-xl font-bold text-yellow-400 mt-2 hover:text-yellow-300 transition">
            {blog.title}
          </h2>
        </Link>

        <p className="text-gray-300 mt-2 line-clamp-3">
          {blog.shortDesc}
        </p>

        <Link
          href={`/blog/${blog.slug}`}
          className="inline-block mt-4 text-yellow-400 hover:text-yellow-300 font-semibold"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
