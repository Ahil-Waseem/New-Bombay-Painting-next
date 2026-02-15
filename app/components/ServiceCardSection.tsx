import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "FRESH PAINTING",
    desc: "Add the perfect finishing touch to your newly built home with our painting expertise.",
    image: "/images/services/fresh-painting1.webp",
  },
  {
    title: "RENTAL PAINTING",
    desc: "Get your rental house painted in no time, without breaking the bank.",
    image: "/images/services/rental-painting1.webp",
  },
  {
    title: "RE-PAINTING",
    desc: "Refresh, renew, and rejuvenate – all with a fresh coat of paint.",
    image: "/images/services/re-painting2.webp",
  },
];

export default function ServiceCardsSection() {
  return (
    <section className="py-16 px-4 md:px-8">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Hey! <span className="text-yellow-500">What Are You Looking For?</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="relative rounded-[28px] overflow-hidden shadow-xl group"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={450}
              className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                {item.desc}
              </p>

              {/* CTA → Contact Page */}
              <Link
                href="/contact"
                className="inline-block bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
