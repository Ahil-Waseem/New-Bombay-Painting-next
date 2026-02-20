import DynamicLuxurySlider from "@/app/components/DynamicLuxurySlider";
import ResponsiveImageSection from "@/app/components/ResponsiveImageSection";
import ServicePageBanner from "@/app/components/ServicePageBanner";

export const metadata = {
  title:
    "Painter Near Me in Mumbai | Professional House Painters in Mumbai",
  description:
    "Looking for a reliable painter near you in Mumbai? New Bombay Painting offers expert interior painting, exterior painting, texture finishes, waterproofing and home renovation services across Mumbai with premium materials, skilled workmanship and on-time delivery.",
  keywords: [
    "Painter near me in Mumbai",
    "House painters in Mumbai",
    "Interior painting Mumbai",
    "Exterior painting Mumbai",
    "Home painting contractor Mumbai",
    "Wall painting services Mumbai",
    "Texture painting Mumbai",
    "Waterproofing services Mumbai",
    "1BHK painting Mumbai",
    "2BHK painting Mumbai"
  ],
  alternates: {
    canonical: "https://newbombaypainting.in/painter-near-me/mumbai",
  },
  openGraph: {
    title:
      "Painter Near Me in Mumbai | Professional House Painting Services",
    description:
      "Trusted painting contractors in Mumbai for interior, exterior, texture and renovation services. Premium finish and timely completion.",
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
      "@type": "Service",
      "@id":
        "https://newbombaypainting.in/painter-near-me/mumbai#service",
      serviceType: "House Painting Services",
      name: "Painter Near Me in Mumbai",
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
        name: "Mumbai"
      },
      description:
        "Professional painter near you in Mumbai offering interior painting, exterior painting, texture finishes, waterproofing and complete home renovation services with premium materials and skilled workforce.",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceLocation: {
          "@type": "City",
          name: "Mumbai"
        }
      }
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
