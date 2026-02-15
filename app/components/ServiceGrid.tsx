import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Interior Spaces",
    image: "/images/services/interior.webp",
    link: "/services/interior-painting",
  },
  {
    title: "Villas / Bungalows",
    image: "/images/services/banglow.webp",
    link: "/services/painting-services-mumbai",
  },
  {
    title: "High-Rise Apartments",
    image: "/images/services/our-work1.webp",
    link: "/services/exterior-painting",
  },
  {
    title: "Commercial Spaces",
    image: "/images/services/our-work2.webp",
    link: "/services/commercial-painting",
  },
  {
    title: "Wallpapers",
    image: "/images/services/wallpaper-installation.webp",
    link: "/services/wallpaper-installation",
  },
  {
    title: "Textures & Designs",
    image: "/images/services/texture.webp",
    link: "/services/texture-painting",
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-24 px-6 bg-[#f9f7f3]">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Crafted Services for <br />
            <span className="text-yellow-500">
              Homes That Deserve the Best
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Thoughtfully designed painting solutions — tailored for elegance,
            durability, and a finish that speaks quality at first glance.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.slice(0, 6).map((service, index) => (
            <Link
              href={service.link}
              key={index}
              className="group bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 tracking-wide">
                  {service.title}
                </h3>

                <span className="inline-block mt-4 text-sm font-semibold text-yellow-600">
                  Explore Service →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
