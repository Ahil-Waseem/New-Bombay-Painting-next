import DynamicLuxurySlider from "@/app/components/DynamicLuxurySlider";
import ResponsiveImageSection from "@/app/components/ResponsiveImageSection";
import ServicePageBanner from "@/app/components/ServicePageBanner";

export const metadata = {
  title:
    "Painter Near Me in Pune | House Painting Services",
  description:
    "Need a trusted painter near you in Pune? New Bombay Painting offers interior painting, exterior painting, texture finishes, waterproofing and 1BHK–3BHK house painting services with premium finish and transparent pricing.",
  alternates: {
    canonical: "https://newbombaypainting.in/painter-near-me/pune",
  },
  openGraph: {
    title:
      "Painter Near Me in Pune | Trusted House Painters",
    description:
      "Professional painting contractors in Pune for flats, villas and commercial properties. Site visit and transparent pricing available.",
    url: "https://newbombaypainting.in/painter-near-me/pune",
    siteName: "New Bombay Painting",
    type: "website",
  },
};

export const bedroomData = [
  {
    id: 1,
    tag: "HOLIME",
    title: "Modern Minimalist Bedroom Set",
    price: "$3,500 USD",
    description:
      "Timeless bedroom set crafted for comfort and luxury.",
    image: "/images/projects/webp/img2.webp",
    buttonText: "Shop Now",
    link: "/contact",
  },
  {
    id: 2,
    tag: "NEW ARRIVAL",
    title: "Premium King Bed",
    price: "$2,900 USD",
    description:
      "Elegant king-size bed with modern paint finish.",
    image: "/images/projects/webp/img3.webp",
    link: "/contact",
  },
  {
    id: 3,
    tag: "NEW ARRIVAL",
    title: "Premium King Bed for Master Bedroom",
    price: "$2,900 USD",
    description:
      "Elegant king-size bed with modern wood finish.",
    image: "/images/projects/webp/img5.webp",
    link: "/contact",
  },
  {
    id: 4,
    tag: "NEW ARRIVAL",
    title: "Premium King Bed",
    price: "$2,900 USD",
    description:
      "Elegant king-size bed with modern wood finish.",
    image: "/images/projects/webp/paint5.webp",
    link: "/contact",
  },
];

export default function PainterNearMePune() {
  return (
        <>
       <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://newbombaypainting.in/#business",
      name: "New Bombay Painting",
      url: "https://newbombaypainting.in/",
      telephone: "+919819584682",
      email: "newbombaypainting302@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "D-231, Y. Rao Chavan, Link Road, Ekta Nagar, Mankhurd",
        addressLocality: "Mumbai",
        addressRegion: "MH",
        postalCode: "400043",
        addressCountry: "IN"
      },
      areaServed: [
        { "@type": "City", name: "Pune" },
        { "@type": "City", name: "Wakad" },
        { "@type": "City", name: "Hinjewadi" },
        { "@type": "City", name: "Baner" },
        { "@type": "City", name: "Kothrud" },
        { "@type": "City", name: "Aundh" },
        { "@type": "City", name: "Viman Nagar" },
        { "@type": "City", name: "Kharadi" }
      ],
      priceRange: "₹₹",
      description:
        "Professional interior and exterior painting services in Pune including texture finish, waterproofing and complete house painting."
    }),
  }}
/>

    <ServicePageBanner
            title="Painter Near Me in Pune"
            description="Trusted house painting services in Pune for interior, exterior, texture and waterproofing projects. Premium finish and on-time completion."
            primaryCta={{
              text: "Book Site Visit",
              href: "/contact",
            }}
            secondaryCta={{
              text: "View Services",
              href: "/services",
            }}
            bgImage="/images/painternearme/painter-near-me2.webp"
            // sideImage="/images/services/"
            mobileBgImage="/images/services/mob-service4.webp" 
            sideVideo="/images/services/house-dancing1.mp4"
          />
 <DynamicLuxurySlider data={bedroomData} />
  <ResponsiveImageSection image="/images/shadecard/colour-shade-card1.webp" />

<section className="relative w-full overflow-hidden bg-black">
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-12 text-white">

      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400">
Painter Near Me in Pune – Professional House Painting Services</h1>

        <p className="text-lg leading-relaxed text-gray-300">
          Searching for reliable house painters in Pune? New Bombay Painting
          provides professional{" "}<a href="/services/interior-painting" className="text-yellow-400 underline">
Interior Painting Services
</a>,{" "}<a href="/services/exterior-painting" className="text-yellow-400 underline">
Exterior Painting Services
</a>,{" "}texture
          finishes, waterproofing and complete home renovation services across
          Pune with premium materials and skilled workmanship.
        </p>
      </div>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-semibold text-yellow-400">
          Trusted Painting Contractors in Pune
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
      <div className="space-y-6 text-gray-300 leading-relaxed">

  <h2 className="text-2xl font-semibold text-yellow-400">
    Professional House Painting Services in Pune
  </h2>

  <p>
    New Bombay Painting delivers reliable and high-quality painting services
    across Pune including areas like Wakad, Hinjewadi, Baner, Kothrud,
    Aundh, Viman Nagar and Kharadi. Our experienced team understands the
    structural styles and climate conditions in Pune, allowing us to
    recommend durable paint systems suitable for apartments, villas
    and commercial properties.
  </p>

  <p>
    We follow a structured painting process starting with detailed surface
    inspection, crack repair, putty work, sanding, priming and multiple
    finishing coats using premium quality paints. Proper furniture covering,
    floor protection and post-work cleaning ensure a hassle-free
    experience for homeowners.
  </p>

  <p>
    Whether you require complete home repainting, rental property refresh,
    villa exterior painting or office space painting in Pune, our goal is
    to provide smooth finishes, long-lasting protection and timely
    completion. We focus on customer satisfaction, transparent pricing
    and professional execution for every project.
  </p>
  <h3 className="text-yellow-400">You can also visit on these pages:</h3>
 <p className="text-yellow-400"><a href="/painter-near-me/mumbai">Painter in Mumbai</a></p>
<p className="text-yellow-400"><a href="/painter-near-me/navi-mumbai">Painter in Navi Mumbai</a></p>

</div>


    </div>
    </section>
    </>
  );
}
