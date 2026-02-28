import Image from "next/image";
import ServiceContactSection from "../components/ServiceContactSection";
import WhyChooseUsAnimated from "../components/WhyChooseUsAnimated";
import ServicePageBanner from "../components/ServicePageBanner";
import Link from "next/link";
import ServicePageComponent from "../components/ServicePageComponent";

export const metadata = {
  title:
    "Best House Painting Services in Mumbai, Navi Mumbai & Pune | New Bombay Painting",

  description:
    "Looking for professional house painting services in Mumbai, Navi Mumbai or Pune? New Bombay Painting offers interior painting, exterior painting, wall texture design, waterproofing and complete home repainting solutions. Book a free site visit today.",

  keywords: [
    "house painting services in Mumbai",
    "painting contractor Mumbai",
    "interior painting Navi Mumbai",
    "exterior painting Pune",
    "wall painting design Mumbai",
    "home painting cost Mumbai"
  ],
};
export default function ServicesPage() {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://newbombaypainting.in/#business",
        "name": "New Bombay Painting",
        "url": "https://newbombaypainting.in/",
        "logo": "https://newbombaypainting.in/logo.png",
        "image": "https://newbombaypainting.in/images/services/service2.webp",
        "telephone": "+919793167187",
        "email": "newbombaypainting302@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "areaServed": [
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Navi Mumbai" },
          { "@type": "City", "name": "Pune" }
        ],
        "priceRange": "₹₹"
      },
      {
        "@type": "Service",
        "@id": "https://newbombaypainting.in/services#painting",
        "serviceType": "House Painting Services",
        "name": "House Painting Services in Mumbai, Navi Mumbai & Pune",
        "provider": {
          "@type": "PaintingContractor",
          "name": "New Bombay Painting",
          "url": "https://newbombaypainting.in/"
        },
        "areaServed": [
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Navi Mumbai" },
          { "@type": "City", "name": "Pune" }
        ],
        "description":
          "Professional interior painting, exterior painting, wall texture design, waterproofing and complete home repainting services for flats, villas and commercial spaces in Mumbai, Navi Mumbai and Pune."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the cost of house painting in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "House painting cost in Mumbai depends on property size and paint quality. A 2BHK flat typically ranges between ₹25,000 to ₹45,000."
            }
          },
          {
            "@type": "Question",
            "name": "Which paint is best for Mumbai weather?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Weather-resistant exterior paints such as Asian Paints Apex, Nerolac Excel and Dulux Weathershield are suitable for Mumbai's humid climate."
            }
          },
          {
            "@type": "Question",
            "name": "How long does interior painting take for a 3BHK flat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Interior painting for a 3BHK flat usually takes 4 to 6 days depending on surface preparation and design requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide waterproofing services in Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, we provide terrace, bathroom and exterior wall waterproofing services in Pune using reliable long-lasting systems."
            }
          }
        ]
      }
    ])
  }}
/>
    <ServicePageBanner
                        title="Professional Painting Services in Mumbai, Navi Mumbai & Pune"
                        description="Trusted interior painting, exterior painting and wall texture design services in Mumbai, Navi Mumbai and Pune with smooth finish, durable quality and professional workmanship."
                        primaryCta={{
                          text: "Book Site Visit",
                          href: "/contact",
                        }}
                        secondaryCta={{
                          text: "View Services",
                          href: "/services",
                        }}
                        bgImage="/images/services/service2.webp"
                        // sideImage="/images/services/"
                        mobileBgImage="/images/services/mob-service9.webp" 
                        sideVideo="/images/services/house-dancing1.mp4"
                      />
    <main className="w-full">

      {/* ===== Banner Section ===== */}
      <section
        className="relative w-full bg-[#0f172a] overflow-hidden"
        aria-label="Painting Services Banner"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 py-16 gap-10">

          {/* Left Content */}
          <div className="text-white space-y-5 z-10">
            <p className="text-sm tracking-widest uppercase text-yellow-400">
              Simple & Professional
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
  Professional <span className="text-yellow-400">Painting Services in Mumbai, Navi Mumbai & Pune</span>
</h1>

            <p className="text-gray-300 max-w-lg">
  We provide interior painting, exterior painting, residential and
  commercial painting services across Mumbai and Navi Mumbai. As part of our{" "}
  <Link 
    href="/" 
    className="text-yellow-400 underline hover:text-yellow-300"
  >
    wall painting design and texture expertise
  </Link>,{" "}
  our experienced painters ensure neat finishing, durable coatings and
  reliable workmanship for long-lasting results.
</p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
    href="/contact" >
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition">
                Contact Us
              </button>
              </Link>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative w-full h-[260px] md:h-[340px] rounded-xl overflow-hidden bg-gray-200">
            {/* Replace src later */}
            <Image
              src="/images/services/re-painting2.webp"
              alt="Professional painting services in Mumbai and Navi Mumbai"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Yellow Accent Shape */}
        <div className="absolute right-0 top-0 h-full w-24 bg-yellow-400 clip-path-banner hidden md:block" />
      </section>
<ServiceContactSection/>
<WhyChooseUsAnimated/>
<ServicePageComponent/>
      {/* ===== Services Content Section ===== */}
    <section
  id="painting-services"
  className="max-w-7xl mx-auto px-6 py-16 space-y-14"
>
  <header className="space-y-4">
    <h2 className="text-3xl font-semibold text-gray-900">
Our Painting Services in Mumbai, Navi Mumbai & Pune    </h2>
    <p className="text-gray-700 max-w-3xl">
     At {" "}<a
    href="https://newbombaypainting.in/"
    className="text-yellow-400 underline"
  >
    <strong>New Bombay Painting</strong>
  </a>, we provide professional painting services in Mumbai, Navi Mumbai and Pune, offering complete interior and exterior painting solutions for residential and commercial properties. With years of practical experience, we focus on proper surface preparation, premium materials and long-lasting finishes suited to local weather conditions.
    </p>
  </header>

  <div className="space-y-10 text-gray-700">

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
<a
    href="https://newbombaypainting.in/services/interior-painting"
    className="text-yellow-400 underline"
  >
    <strong>Interior Painting Services</strong>
  </a>{" "}in Mumbai & Pune      </h3>
      <p>
       Our interior painting services are designed to transform flats, apartments, villas and offices with smooth, elegant finishes. We handle walls, ceilings, doors and furniture using proper sanding, crack filling and priming techniques. Whether you need 1BHK, 2BHK, 3BHK or 4BHK painting in Mumbai or Pune, our expert painters ensure clean execution and durable results.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
<a
    href="https://newbombaypainting.in/services/exterior-painting"
    className="text-yellow-400 underline"
  >
    <strong>Exterior Painting </strong>
  </a>{" "}Contractor in Navi Mumbai & Mumbai      </h3>
      <p>
        Exterior painting is not only about appearance but also protection from heat, rain and moisture. As a trusted exterior painting contractor in Mumbai and Navi Mumbai, we use high-quality exterior paints that withstand weather conditions and enhance the overall building appearance.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
Residential House Painting (Flats & Villas)      </h3>
      <p>
        We provide complete house painting services for flats, apartments, bungalows and villas across Mumbai, Navi Mumbai and Pune. From fresh painting to complete repainting, our team ensures minimal disturbance, proper coverage and a clean handover.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
Commercial Painting Services      </h3>
      <p>
       Our commercial painting services cover offices, shops, showrooms, restaurants and hospitality spaces. We understand the importance of timelines and work discipline in commercial environments, ensuring professional finishing with minimal downtime.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
Wall Texture & Decorative Painting Design      </h3>
      <p>
        Looking for modern wall painting designs or unique wall paint colour combinations? We offer designer wall textures, stencil patterns and decorative finishes including premium texture and feature wall concepts. Our team helps you choose styles that match your interior lighting and layout.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
Waterproofing Services for Homes & Buildings      </h3>
      <p>
       Our waterproofing services in Mumbai and Pune protect your property from leakage, dampness and moisture damage. We provide terrace waterproofing, bathroom waterproofing and exterior wall waterproofing using reliable materials to ensure long-term durability.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
Wood Painting & Polishing Services      </h3>
      <p>
        Wooden doors, windows, cabinets and furniture require special treatment. Our wood painting and polishing services enhance the natural look of wood while protecting it from wear, termites and environmental damage.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
Metal Painting Services      </h3>
      <p>
       We provide metal painting services for grills, gates, railings and structural fixtures. Proper anti-rust priming and coating ensures protection from corrosion and long-term performance.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        Surface Preparation & Quality Control
      </h3>
      <p>
        A durable paint finish always begins with correct preparation. Our process includes cleaning, crack repair, sanding, putty work and priming before final coats are applied. Every project in Mumbai, Navi Mumbai and Pune is supervised to maintain safety standards, quality workmanship and a neat final finish.
      </p>
    </div>

  </div>
</section>
<section className="w-full bg-white text-black py-20">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-3xl font-semibold text-yellow-400 mb-10">
      Frequently Asked Questions – Exterior Painting
    </h2>

    <div className="space-y-6">

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
What is the best wall paint colour combination for living rooms?</summary>
        <p className="mt-4 text-black-200 leading-relaxed">
                  The best wall paint colour combination for living rooms depends on space size and lighting. Popular choices include beige and white, grey and pastel blue, or cream and brown. Our experts help homeowners in Mumbai and Pune select combinations that create a modern and elegant look.

        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
        Which wall painting designs are trending for hall areas?
        </summary>
        <p className="mt-4 text-black-200 leading-relaxed">
                 Modern wall painting designs for hall areas include geometric patterns, two colour wall combinations, textured finishes and accent walls. These designs enhance visual appeal without overwhelming the space.

        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
        What is Royal Play design in wall painting?
        </summary>
        <p className="mt-4 text-black-200 leading-relaxed">
                 Royal Play design is a premium decorative wall finish that adds texture and depth to interiors. It is ideal for feature walls in living rooms and bedrooms and gives a luxury appearance.

        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
        What is the average home painting cost in Mumbai?
        </summary>
        <p className="mt-4 text-black-200 leading-relaxed">
                  The average home painting cost in Mumbai depends on property size and paint quality. For a 2BHK flat, it generally ranges between ₹25,000 to ₹45,000.

        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
        How long does interior painting take for a 3BHK flat?
        </summary>
        <p className="mt-4 text-black-200 leading-relaxed">
                 Interior painting for a 3BHK flat usually takes 4–6 days depending on surface condition, preparation work and design requirements.

        </p>
      </details>

    </div>
  </div>
</section>

    </main>
    </>
  );
}
