"use client";

import Image from "next/image";

const paintBrands = [
  { name: "Asian Paints", logo: "/images/brands/asianpaint.jpg" },
  { name: "Nerolac Paints", logo: "/images/brands/nerolacpaint.jpg" },
  { name: "Berger Paints", logo: "/images/brands/bergerpaint.jpg" },
  { name: "Jotun Paints", logo: "/images/brands/jotunpaint.jpg" },
  { name: "ICA Paints & PU", logo: "/images/brands/icapaint.jpg" },
  { name: "Dr. Fixit", logo: "/images/brands/waterproffing.jpg" },
];

export default function PaintBrandsSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#fff8f4] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            We Only Use <span className="text-yellow-500">Brands You Love</span>
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Premium-quality paints from trusted brands to ensure durability,
            finish, and long-lasting beauty.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {paintBrands.map((brand, index) => (
            <div
              key={index}
              className="
                bg-[#fffeda]
                rounded-2xl
                p-5
                flex flex-col
                items-center
                justify-center
                shadow-md
                hover:shadow-xl
                transition
                duration-300
                group
              "
            >
              {/* LOGO WRAPPER (FIXED) */}
              <div className="relative w-[110px] h-[60px] sm:w-[130px] sm:h-[70px] mb-4">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 110px, 130px"
                />
              </div>

              <div className="w-10 h-[2px] bg-yellow-400 mb-2" />

              <p className="text-sm font-semibold text-gray-800 text-center">
                {brand.name}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center mt-8 max-w-3xl mx-auto">
          Logos are trademarks of their respective owners and are used for
          identification purposes only. We are not officially affiliated with
          or endorsed by these brands.
        </p>
      </div>
    </section>
  );
}
