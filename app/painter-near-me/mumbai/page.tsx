import DynamicLuxurySlider from "@/app/components/DynamicLuxurySlider";
import ResponsiveImageSection from "@/app/components/ResponsiveImageSection";
import ServicePageBanner from "@/app/components/ServicePageBanner";

export const metadata = {
  title: "Painter Near Me in Mumbai | New Bombay Painting",
  description:
    "Looking for professional painters in Mumbai? New Bombay Painting offers expert interior, exterior and home renovation services with premium quality and on-time delivery.",
};
export const bedroomData = [
  {
    id: 1,
    tag: "HOLIME",
    title: "Modern Minimalist Lamination",
    price: "$3,500 USD",
    description:
      "Timeless colour set crafted for comfort and luxury.",
    image: "/images/projects/webp/lamination2.webp",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    tag: "NEW ARRIVAL",
    title: "Premium King Master Bedroom",
    price: "$2,900 USD",
    description:
      "Elegant king-size Master bed with modern finish.",
    image: "/images/projects/webp/img5.webp",
  },
  {
    id: 3,
    tag: "NEW ARRIVAL",
    title: "Premium Texture Design",
    price: "$2,900 USD",
    description:
      "Elegant king-size bed with modern texture finish.",
    image: "/images/projects/webp/texture5.webp",
  },
  {
    id: 4,
    tag: "NEW ARRIVAL",
    title: "Premium Polish",
    price: "$2,900 USD",
    description:
      "Elegant polish service with modern wood finish.",
    image: "/images/projects/webp/polish2.webp",
  },
];


export default function PainterNearMeMumbai() {
  return (
    <>
<ServicePageBanner
        title="Professional Painting Services"
        description="High-quality interior and exterior painting solutions tailored for your space."
        primaryCta={{
          text: "Book Site Visit",
          href: "#contact",
        }}
        secondaryCta={{
          text: "View Services",
          href: "/services",
        }}
        bgImage="/images/painternearme/painter-near-me3.webp"
        // sideImage="/images/services/"
        sideVideo="/images/services/house-dancing1.mp4"
      />

  <DynamicLuxurySlider data={bedroomData} />
  <ResponsiveImageSection image="/images/shadecard/colour-shade-card1.webp" />

  <section className="relative w-full overflow-hidden bg-black">
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-12 text-white">

      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400">
          Painter Near Me in Mumbai
        </h1>

        <p className="text-lg leading-relaxed text-gray-300">
          Searching for reliable house painters in Mumbai? New Bombay Painting
          provides professional interior painting, exterior painting, texture
          finishes, waterproofing and complete home renovation services across
          Mumbai with premium materials and skilled workmanship.
        </p>
      </div>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-semibold text-yellow-400">
          Trusted Painting Contractors in Mumbai
        </h2>

        <p>
          Our experienced team handles everything from surface preparation,
          crack repairs, priming and painting to final finishing and cleaning.
          We ensure smooth finish, long-lasting durability and on-time
          project completion.
        </p>

        <p>
          Whether you need 1BHK repainting, 2BHK renovation, villa exterior
          painting or commercial property painting in Mumbai, we deliver
          cost-effective and high-quality solutions.
        </p>
      </div>

    </div>
    </section>
    </>
  );
}
