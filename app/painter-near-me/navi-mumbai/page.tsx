import DynamicLuxurySlider from "@/app/components/DynamicLuxurySlider";
import ResponsiveImageSection from "@/app/components/ResponsiveImageSection";
import ServicePageBanner from "@/app/components/ServicePageBanner";

export const metadata = {
  title:
    "Painter Near Me in Navi Mumbai | House Painting Services in Navi Mumbai",
  description:
    "Looking for a reliable painter near you in Navi Mumbai? New Bombay Painting provides expert interior painting, exterior painting, texture finishes, waterproofing and home renovation services with premium materials and timely completion.",
  keywords: [
    "Painter near me in Navi Mumbai",
    "House painters Navi Mumbai",
    "Interior painting Navi Mumbai",
    "Exterior painting Navi Mumbai",
    "Wall painting services Navi Mumbai",
    "Home painting contractor Navi Mumbai",
    "Texture painting Navi Mumbai",
    "1BHK painting Navi Mumbai",
    "2BHK painting Navi Mumbai"
  ],
  alternates: {
    canonical: "https://newbombaypainting.in/painter-near-me/navi-mumbai",
  },
  openGraph: {
    title:
      "Painter Near Me in Navi Mumbai | Professional Painting Services",
    description:
      "Trusted painting contractors in Navi Mumbai for interior, exterior and renovation projects with premium finish and skilled workmanship.",
    url: "https://newbombaypainting.in/painter-near-me/navi-mumbai",
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
    image: "/images/projects/webp/img1.webp",
    buttonText: "Shop Now",
  },
  {
    id: 2,
    tag: "NEW ARRIVAL",
    title: "Lamination",
    price: "$2,900 USD",
    description:
      "Modern wood finish laminatation.",
    image: "/images/projects/webp/lamination3.webp",
  },
  {
    id: 3,
    tag: "NEW ARRIVAL",
    title: "Master Bed Room Painting",
    price: "$2,900 USD",
    description:
      "Elegant king-size maaster bedroom with modern painting finish.",
    image: "/images/projects/webp/img5.webp",
  },
  {
    id: 4,
    tag: "NEW ARRIVAL",
    title: "Premium King Bed",
    price: "$2,900 USD",
    description:
      "Elegant king-size bed with modern wood finish.",
    image: "/images/projects/webp/paint5.webp",
  },
];

export default function PainterNearMeNaviMumbai() {
  return (
        <>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "@id":
        "https://newbombaypainting.in/painter-near-me/navi-mumbai#service",
      serviceType: "House Painting Services",
      name: "Painter Near Me in Navi Mumbai",
      provider: {
        "@type": "PaintingContractor",
        name: "New Bombay Painting",
        url: "https://newbombaypainting.in/",
        telephone: [
          "+919793167187",
          "+919819584682",
          "+919320837842",
          "+918736963061"
        ],
        email: "newbombaypainting302@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "D-231, Y.Rao Chavan NGR, Ekata Nagar, Link Road, Govandi, Mankhurd",
          addressLocality: "Mumbai",
          addressRegion: "MH",
          postalCode: "400043",
          addressCountry: "IN"
        }
      },
      areaServed: {
        "@type": "City",
        name: "Navi Mumbai"
      },
      description:
        "Professional painter near you in Navi Mumbai offering interior painting, exterior painting, texture finishes, waterproofing and home renovation services with premium materials and skilled workforce."
    }),
  }}
/>

    <ServicePageBanner
            title="Professional Painting Services"
            description="High-quality interior and exterior painting solutions tailored for your space."
            primaryCta={{
              text: "Book Site Visit",
              href: "/contact",
            }}
            secondaryCta={{
              text: "View Services",
              href: "/services",
            }}
            bgImage="/images/painternearme/painter-near-me.webp"
            // sideImage="/images/services/"
            mobileBgImage="/images/services/mob-service3.webp" 
            sideVideo="/images/services/house-dancing1.mp4"
          />
         <DynamicLuxurySlider data={bedroomData} />
           <ResponsiveImageSection image="/images/shadecard/colour-shade-card1.webp" />
<section className="relative w-full overflow-hidden bg-black">
    <div className="max-w-7xl  mx-auto px-6 py-16 space-y-12 text-white">

      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400">
          Painter Near Me in Navi-Mumbai
        </h1>

        <p className="text-lg leading-relaxed text-gray-300">
          Searching for reliable house painters in Navi-Mumbai? New Bombay Painting
          provides professional interior painting, exterior painting, texture
          finishes, waterproofing and complete home renovation services across
          Mumbai with premium materials and skilled workmanship.
        </p>
      </div>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-semibold text-yellow-400">
          Trusted Painting Contractors in Navi-Mumbai
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
    Why Choose Our Painting Services in Navi Mumbai?
  </h2>

  <p>
    New Bombay Painting brings over 30 years of experience in delivering
    professional painting services across Navi Mumbai. Our team understands
    the unique residential layouts, high-rise apartments and independent
    homes commonly found in areas such as Vashi, Nerul, Kharghar,
    Panvel and Belapur. This allows us to provide tailored solutions
    based on surface condition, climate exposure and property type.
  </p>

  <p>
    We follow a systematic painting process that includes detailed site
    inspection, surface preparation, crack filling, sanding, priming and
    multiple coats of premium quality paint for a smooth and durable finish.
    Furniture protection, floor covering and proper cleanup are handled
    carefully to ensure minimal disruption to your daily routine.
  </p>

  <p>
    Whether you need complete house repainting, rental property refresh,
    villa exterior protection or commercial space painting in Navi Mumbai,
    we provide transparent pricing, professional supervision and on-time
    project delivery. Our focus is to create elegant, long-lasting finishes
    that enhance the beauty and value of your property.
  </p>

</div>


    </div>
    
    </section>
    </>
  );
}
