import { blogs } from "../../data/blogs";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetails({ params }: Props) {
  const { slug } = await params;   // ✅ IMPORTANT FIX

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pb-20">

      <div className="max-w-5xl mx-auto px-5 pt-10">
        <Link
          href="/blog"
          className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold"
        >
          ← Back to Blogs
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-5 mt-5">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 md:h-[500px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div className="max-w-5xl mx-auto px-5 mt-8">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 leading-tight">
          {blog.title}
        </h1>
        <p className="text-gray-400 mt-3 text-sm">
          Published on {blog.date} • By{" "}
          <span className="text-yellow-400">New Bombay Painting</span>
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-5 mt-12">
 <div
  className="
    max-w-4xl mx-auto
    [&>h1]:text-4xl [&>h1]:text-yellow-400 [&>h1]:mb-6

    [&>h2]:text-3xl [&>h2]:text-yellow-400 [&>h2]:mt-10 [&>h2]:mb-4
    [&>h3]:text-2xl [&>h3]:text-yellow-300 [&>h3]:mt-8 [&>h3]:mb-3
    [&>h4]:text-xl [&>h4]:text-yellow-300 [&>h4]:mt-6 [&>h4]:mb-2

    [&>p]:text-gray-300 [&>p]:leading-8 [&>p]:mb-6

    [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6
    [&>ul>li]:mb-2

    [&>hr]:my-10 [&>hr]:border-gray-700
  "
  dangerouslySetInnerHTML={{ __html: blog.content }}
/>


      </div>
    </div>
  );
}
