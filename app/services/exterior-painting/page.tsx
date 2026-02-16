import AutoScrollGallerySadeCard from "@/app/components/AutoScrollGallerySadeCard";
import ServicePageBanner from "@/app/components/ServicePageBanner";

export const metadata = {
  title:
    "Exterior Painting Services in Mumbai & Navi Mumbai | Weatherproof Experts",
  description:
    "Professional exterior painting services in Mumbai & Navi Mumbai. Crack repair, waterproof primer, weatherproof coating and long-lasting finishes for villas, societies and commercial buildings.",
  keywords: [
    "Exterior painting Mumbai",
    "Exterior painting Navi Mumbai",
    "Weatherproof painting services",
    "Building exterior painting",
    "Society exterior painting Mumbai",
    "Villa exterior painting",
    "Waterproof exterior paint",
    "Asian Paints Ultima Protek Mumbai"
  ],
  alternates: {
    canonical:
      "https://newbombaypainting.in/services/exterior-painting",
  },
  openGraph: {
    title:
      "Exterior Painting Services in Mumbai | New Bombay Painting",
    description:
      "Weather-resistant exterior painting with waterproof protection and long-lasting finish for homes and commercial properties.",
    url: "https://newbombaypainting.in/services/exterior-painting",
    siteName: "New Bombay Painting",
    type: "website",
  },
};


export default function ExteriorPaintingPage() {
  const galleryData = [
    {
      src: "/images/shadecard/colour-shade-card1.webp",
      link: "/service-1",
      buttonText: "Interior Work",
    },
    {
      src: "/images/shadecard/premium-colour-shade-card2.webp",
      link: "/service-2",
      buttonText: "Exterior Work",
    },
    {
      src: "/images/shadecard/premium-melamine-shade-card3.webp",
      link: "/service-3",
      buttonText: "Texture Design",
    },
  ];
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id":
          "https://newbombaypainting.in/services/exterior-painting#service",
        serviceType: "Exterior Painting Services",
        name: "Exterior Painting Services in Mumbai & Navi Mumbai",
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
          email: "newbombaypainting302@gmail.com"
        },
        areaServed: [
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Navi Mumbai" },
          { "@type": "City", "name": "Pune" }
        ],
        description:
          "Professional exterior painting services including crack repair, waterproof primer application and weatherproof coating for residential and commercial properties."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best time to paint a house's exterior?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The best time for exterior painting in Mumbai is during dry months when humidity and rainfall are low. Stable weather ensures proper drying and long-lasting finish."
            }
          },
          {
            "@type": "Question",
            "name": "How long does exterior paint last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "With proper surface preparation and premium weatherproof systems, exterior paint can last between 7–12 years depending on exposure and maintenance."
            }
          },
          {
            "@type": "Question",
            "name": "Which paint is best for exterior painting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "High-quality weatherproof paints such as Asian Paints Apex, Ultima Protek, Nerolac Excel and Dulux Weathershield are ideal for exterior surfaces."
            }
          }
        ]
      }
    ]),
  }}
/>

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
        bgImage="/images/services/service1.webp"
        // sideImage="/images/services/"
        sideVideo="/images/services/house-dancing1.mp4"
      />
      <AutoScrollGallerySadeCard items={galleryData} speed={30} />;

      {/* rest of page */}
      <section className="w-full bg-black text-white py-20">
  <div className="max-w-7xl mx-auto px-6 space-y-14">

    {/* MAIN HEADING */}
    <div className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400">
        Exterior Painting Services in Mumbai & Navi Mumbai
      </h1>
    <p className="text-gray-200 leading-relaxed">
  Your building exterior speaks before you do. Whether it’s a bungalow,
  housing society, commercial building or villa, the outside walls create
  the first impression. At{" "}
  <a
    href="https://newbombaypainting.in/"
    className="text-yellow-400 underline"
  >
    <strong>New Bombay Painting</strong>
  </a>
  , we specialise in high-performance exterior painting systems that not only
  enhance appearance but also protect your property from Mumbai’s harsh
  weather conditions.
</p>

<p className="text-gray-200 leading-relaxed">
  With over 30 years of hands-on experience, we provide professional
  exterior painting services across Mumbai, Navi Mumbai, Pune, Lonavala
  and nearby cities, delivering crack-resistant, waterproof and
  long-lasting finishes. We also offer{" "}
  <a
    href="/services/interior-painting"
    className="text-yellow-400 underline"
  >
    interior painting services
  </a>{" "}
  for complete residential and commercial transformation solutions.
</p>

    </div>

    {/* WHY EXTERIOR PAINTING */}
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold text-yellow-400">
        Why Exterior Painting Is More Than Just Colour
      </h2>
      <p className="text-gray-200 leading-relaxed">
        Exterior walls in cities like Mumbai constantly face heavy rainfall,
        humidity, intense sunlight and pollution. Without proper treatment,
        walls start peeling, developing cracks and showing damp patches.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-200">
        <li>Protects walls from moisture and seepage</li>
        <li>Prevents cracks and surface damage</li>
        <li>Increases building lifespan</li>
        <li>Improves curb appeal and property value</li>
      </ul>
    </div>

    {/* WHAT WE INCLUDE */}
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold text-yellow-400">
        What We Include in Our Exterior Painting Service
      </h2>
      <p className="text-gray-200 leading-relaxed">
        Every project begins with detailed inspection and proper preparation.
        The durability of exterior paint depends largely on how well the
        surface is treated before application.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-200">
        <li>Exterior wall cleaning, sanding and scraping</li>
        <li>Crack filling and surface repairs</li>
        <li>Waterproof primer application</li>
        <li>Premium weatherproof paint coating</li>
        <li>Professional scaffolding and masking</li>
        <li>Final inspection and quality check</li>
      </ul>
    </div>

    {/* WEATHER SECTION */}
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold text-yellow-400">
        Designed for Indian Weather Conditions
      </h2>
      <p className="text-gray-200 leading-relaxed">
        Mumbai and surrounding regions experience extreme weather
        fluctuations. That’s why we use UV-resistant, anti-fungal and
        waterproof systems specifically designed for Indian climates.
      </p>
      <p className="text-gray-200 leading-relaxed">
        With proper material selection and correct application, exterior paint
        can last between <strong>7–12 years</strong>, depending on exposure
        level and maintenance.
      </p>
    </div>

    {/* PROPERTY TYPES */}
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold text-yellow-400">
        Suitable for All Types of Properties
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-200">
        <li>Residential buildings</li>
        <li>Housing societies</li>
        <li>Villas and bungalows</li>
        <li>Commercial complexes</li>
        <li>Hotels and office buildings</li>
      </ul>
    </div>

    {/* COST SECTION */}
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold text-yellow-400">
        Exterior Painting Cost in Mumbai
      </h2>
      <p className="text-gray-200 leading-relaxed">
        The cost of exterior painting depends on wall condition, repair depth,
        scaffolding requirements and paint brand selection.
      </p>

      <ul className="list-disc pl-6 space-y-2 text-gray-200">
        <li>₹18 – ₹28 per sq. ft. (Standard Exterior Painting)</li>
        <li>₹30 – ₹45 per sq. ft. (Weatherproof + Waterproof Primer)</li>
        <li>₹45 – ₹75 per sq. ft. (Premium Asian Paints Ultima Protek System)</li>
      </ul>

      <p className="text-gray-200 leading-relaxed">
        Final pricing is provided after site inspection to ensure transparency
        and accuracy.
      </p>
    </div>

    {/* PROCESS */}
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold text-yellow-400">
        Our Professional Work Process
      </h2>

      <ul className="list-disc pl-6 space-y-2 text-gray-200">
        <li>On-site inspection and surface assessment</li>
        <li>Detailed quotation with material options</li>
        <li>Cleaning, crack treatment and primer application</li>
        <li>Premium paint coating using modern tools</li>
        <li>Final protection coat and inspection</li>
        <li>Complete site clean-up before handover</li>
      </ul>
    </div>

    <div className="space-y-5">
     <h2 className="text-2xl font-semibold text-yellow-400">
  Why Choose New Bombay Painting?
</h2>

<p className="text-gray-200 leading-relaxed">
  With decades of field experience, we focus on durability, safety and finish quality. Our trained painters follow safety standards, use proper scaffolding and deliver work with attention to detail. We believe in honest communication, transparent pricing and long-term client relationships.
  If your exterior walls are fading, cracking or showing signs of dampness, this is the right time to act. Contact{" "}
  <a
    href="/services/texture-painting"
    className="text-yellow-400 underline"
  >
    New Bombay Painting
  </a>{" "}
  today for a free site visit and expert consultation. We also provide{" "}
  <a
    href="/services/pop-false-ceiling"
    className="text-yellow-400 underline"
  >
    POP false ceiling services
  </a>{" "}
  to ensure complete property transformation. We don’t just paint walls — we protect and enhance your property for years to come.
</p>

   
    </div>

    {/* CTA SECTION */}
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold text-yellow-400">
        Get Professional Exterior Painting Today
      </h2>
      <p className="text-gray-200 leading-relaxed">
        If your exterior walls are fading, cracking or showing signs of
        dampness, this is the right time to act. Contact New Bombay Painting
        today for a free site visit and expert consultation.
      </p>
      <p className="text-gray-200 leading-relaxed">
        We don’t just paint walls — we protect and enhance your property for
        years to come.
      </p>
    </div>

  </div>
</section>
<section className="w-full bg-black text-white py-20">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-3xl font-semibold text-yellow-400 mb-10">
      Frequently Asked Questions – Exterior Painting
    </h2>

    <div className="space-y-6">

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          What is the best time to paint a house's exterior?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          The best time for exterior painting in Mumbai and nearby regions is
          during early winter or dry summer months when humidity and rainfall
          are minimal. Stable weather conditions help the paint dry properly
          and ensure a long-lasting, flawless finish.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          How much paint is required for a 2000 sq. ft. house exterior?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          The exact quantity depends on wall condition, number of coats, surface
          texture and paint type. During our site inspection, New Bombay
          Painting provides an accurate material estimation and cost breakdown
          so you know exactly how much paint is required.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          Is it better to spray or roll exterior paint?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Rolling is generally preferred for exterior walls as it provides
          better thickness, even coverage and durability. Spraying may be used
          in certain cases for smooth surfaces, but our team selects the method
          based on wall condition to ensure long-lasting results.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          Which paint is best for exterior painting?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          High-quality acrylic and weatherproof exterior paints such as Asian
          Paints Apex, Ultima Protek, Nerolac Excel and Dulux Weathershield are
          excellent choices. The right paint depends on exposure level,
          waterproofing needs and budget, which we help you decide during site
          consultation.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          How long does exterior paint last?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          With proper surface preparation and premium weatherproof systems,
          exterior paint can last between 7–12 years. Longevity depends on paint
          quality, climate exposure, maintenance and waterproofing treatment.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          Is exterior paint washable?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Yes, most modern exterior paints are washable. Walls can be cleaned
          using mild soap water, a sponge or pressure washing depending on the
          paint type. Regular cleaning helps maintain brightness and durability.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          Which exterior colours are Vastu-friendly?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          As per Vastu preferences, colours like light blue, green, white,
          beige, yellow, peach and soft brown are considered positive and
          balanced. We guide you in selecting shades that match both aesthetic
          appeal and traditional preferences.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          Is exterior paint safe?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Yes. Modern exterior paints are formulated for outdoor use and are
          safe when applied correctly. However, exterior paints should not be
          used indoors due to higher VOC levels designed specifically for
          exterior durability.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          Is exterior painting necessary?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Yes, exterior painting is essential for protecting your structure
          from UV rays, moisture, dust, pollution and weather damage. It not
          only enhances appearance but also increases the lifespan of your
          building.
        </p>
      </details>

    </div>
  </div>
</section>


    </>
  );
}
