import DynamicLuxurySlider from "@/app/components/DynamicLuxurySlider";
import ResponsiveImageSection from "@/app/components/ResponsiveImageSection";
import ServicePageBanner from "@/app/components/ServicePageBanner";

export const metadata = {
  title:
    "Painter Near Me in Mumbai | House Painting Services in Mumbai",
  description:
    "Need a trusted painter near you in Mumbai? New Bombay Painting provides interior painting, exterior painting, texture finishes, waterproofing and 1BHK–3BHK home painting services with premium finish and transparent pricing.",
  alternates: {
    canonical: "https://newbombaypainting.in/painter-near-me/mumbai",
  },
  openGraph: {
    title:
      "Painter Near Me in Mumbai | Trusted House Painters",
    description:
      "Professional house painters in Mumbai for interior, exterior and texture painting. Site visit, transparent pricing and premium finish.",
    url: "https://newbombaypainting.in/painter-near-me/mumbai",
    siteName: "New Bombay Painting",
    type: "website",
  },
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
    // buttonText: "Shop Now",
    link: "/contact",
  },
  {
    id: 2,
    tag: "NEW ARRIVAL",
    title: "Premium King Master Bedroom",
    price: "$2,900 USD",
    description:
      "Elegant king-size Master bed with modern finish.",
    image: "/images/projects/webp/img5.webp",
    link: "/contact",
  },
  {
    id: 3,
    tag: "NEW ARRIVAL",
    title: "Premium Texture Design",
    price: "$2,900 USD",
    description:
      "Elegant king-size bed with modern texture finish.",
    image: "/images/projects/webp/texture5.webp",
    link: "/contact",
  },
  {
    id: 4,
    tag: "NEW ARRIVAL",
    title: "Premium Polish",
    price: "$2,900 USD",
    description:
      "Elegant polish service with modern wood finish.",
    image: "/images/projects/webp/polish2.webp",
    link: "/contact",
  },
];


export default function PainterNearMeMumbai() {
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
      image: "https://newbombaypainting.in/images/logo.png",
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
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Navi Mumbai" },
        { "@type": "City", name: "Pune" },
        { "@type": "City", name: "Khandala" },
        { "@type": "City", name: "Lonavala" }
      ],
      priceRange: "₹₹",
      description:
        "Professional interior and exterior painting services in Mumbai including texture finish, waterproofing and complete house painting."
    }),
  }}
/>

<ServicePageBanner
        title="Painter Near Me in Mumbai"
        description="Trusted house painting services in Mumbai for interior, exterior, texture and waterproofing projects. Premium finish and on-time completion."
        primaryCta={{
          text: "Book Site Visit",
          href: "/contact",
        }}
        secondaryCta={{
          text: "View Services",
          href: "/services",
        }}
        bgImage="/images/painternearme/painter-near-me3.webp"
        // sideImage="/images/services/"
        mobileBgImage="/images/services/mob-service2.webp" 
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
Looking for a reliable painter near you in Mumbai? New Bombay Painting offers professional{" "}<a href="/services/interior-painting" className="text-yellow-400 underline">
Interior Painting Services
</a>,{" "}<a href="/services/exterior-painting" className="text-yellow-400 underline">
Exterior Painting Services
</a>,{" "}texture finishes, waterproofing and complete house painting solutions for flats, villas and commercial properties across Mumbai and nearby areas.
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

      <div className="space-y-6 text-gray-300 leading-relaxed">

  <h2 className="text-2xl font-semibold text-yellow-400">
    Why Choose New Bombay Painting in Mumbai?
  </h2>

  <p>
    With over 30 years of experience in residential and commercial painting,
    New Bombay Painting has built a strong reputation for quality,
    reliability and professional project execution in Mumbai. Our skilled
    painters understand local weather conditions, building structures and
    surface types, allowing us to recommend the right paint systems and
    finishes for long-lasting durability.
  </p>

  <p>
    We use premium quality paints, advanced tools and systematic
    application techniques to ensure smooth walls, clean edges and a
    flawless finish. From careful furniture covering and surface
    preparation to crack filling, sanding, priming and final coating,
    every step is handled with precision and attention to detail.
  </p>

  <p>
    Whether you are looking for full home repainting, apartment touch-ups,
    villa exterior protection or commercial painting in Mumbai, we provide
    transparent pricing, site inspection support and timely completion.
    Our goal is to deliver beautiful spaces with minimal disruption and
    maximum customer satisfaction.
  </p>

</div>


    </div>
    </section>
    </>
  );
}
