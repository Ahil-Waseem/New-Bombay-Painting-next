"use client";
import Image from "next/image";
import Link from "next/link";
export default function ServicePageComponent() {
  const designs = [
    {
      title: "Modern Wall Paint Colour Combination",
      description:
        "Elegant two colour wall paint colour combinations for living rooms and bedrooms that create a modern and spacious look.",
      image: "/images/services/colour-combination1.webp",
      alt: "Wall paint colour combination for living room in Mumbai home",
    },
    {
      title: "Wall Painting Designs for Hall",
      description:
        "Trending wall painting designs for hall areas including accent walls and geometric patterns.",
      image: "/images/services/hall-design1.webp",
      alt: "Modern wall painting designs for hall in Navi Mumbai flat",
    },
    {
      title: "Royal Play Texture Design",
      description:
        "Premium royal play design and textured wall finishes for luxury interiors.",
      image: "/images/services/royal-play1.webp",
      alt: "Royal play texture wall design in Pune apartment",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold text-gray-900 text-center">
        Wall Painting Design & Colour Ideas
      </h2>

      <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto">
        Explore modern wall paint colour combinations, wall painting designs
        for hall, and premium royal play texture ideas for homes in Mumbai,
        Navi Mumbai and Pune.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {designs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-64">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
               <Link href="/contact">
                <button className="w-full bg-yellow-400 text-black font-medium py-2 rounded-full hover:bg-yellow-300 transition">
                  Get Free Quotation
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}