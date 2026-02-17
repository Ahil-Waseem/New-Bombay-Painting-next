import ServicePageBanner from '@/app/components/ServicePageBanner'
import React from 'react'

export const metadata = {
  title: "Wood Polish Services in Mumbai | PU, Matte & High Gloss Finish | New Bombay Painting",
  description:
    "Professional wood polish services in Mumbai by New Bombay Painting. We provide PU polish, matte finish, high-gloss polish, furniture polishing and wood coating solutions for homes and commercial interiors.",
  keywords: [
    "Wood Polish Services Mumbai",
    "PU Polish Mumbai",
    "High Gloss Wood Polish",
    "Matte Wood Finish",
    "Furniture Polishing Services",
    "Wood Coating Services Mumbai",
    "Professional Wood Polish Contractor",
    "New Bombay Painting"
  ],
};

function page() {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://newbombaypainting.in/services/wood-polish#service",
        "serviceType": "Wood Polish & Furniture Polishing Services",
        "name": "Wood Polish Services in Mumbai",
        "description":
          "Professional PU polish, matte finish and high-gloss wood polishing services for residential and commercial interiors in Mumbai.",
        "provider": {
          "@type": "PaintingContractor",
          "name": "New Bombay Painting",
          "url": "https://newbombaypainting.in/",
          "telephone": [
            "+919793167187",
            "+919819584682",
            "+919320837842",
            "+918736963061"
          ],
          "email": "newbombaypainting302@gmail.com"
        },
        "areaServed": [
          { "@type": "City", "name": "Mumbai" },
          { "@type": "City", "name": "Navi Mumbai" },
          { "@type": "City", "name": "Thane" },
          { "@type": "City", "name": "Pune" }
        ],
        "offers": {
          "@type": "Offer",
          "url": "https://newbombaypainting.in/services/wood-polish",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      }
    ]),
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
                    bgImage="/images/services/service2.webp"
                    // sideImage="/images/services/"
                    mobileBgImage="/images/services/mob-service8.webp" 
                    sideVideo="/images/services/house-dancing1.mp4"
                  />
                   <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="mt-16 space-y-12 text-left">

  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-yellow-400">
      Professional Wood Polish Services in Mumbai
    </h2>
    <p className="text-gray-300 leading-relaxed">
      Wood polishing is not just about enhancing shine — it is about protecting,
      restoring and extending the life of wooden furniture and surfaces. At
      New Bombay Painting, we provide expert wood polish services in Mumbai
      designed to improve durability while maintaining a luxurious finish.
      Whether it is doors, wardrobes, kitchen cabinets, office furniture or
      decorative wooden panels, our professional polishing solutions deliver
      long-lasting results.
    </p>
  </div>

  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-yellow-400">
      Types of Wood Polish Finishes We Offer
    </h2>

    <p className="text-gray-300 leading-relaxed">
      We specialise in multiple wood finishing techniques depending on your
      design preference and usage requirements.
    </p>

    <p className="text-gray-300 leading-relaxed">
      <strong>PU Polish:</strong> PU (Polyurethane) polish is one of the most
      durable and premium wood coatings available. It provides a smooth,
      scratch-resistant and moisture-resistant finish, making it ideal for
      modern homes and commercial interiors.
    </p>

    <p className="text-gray-300 leading-relaxed">
      <strong>High-Gloss Finish:</strong> This finish creates a rich, reflective
      surface that enhances the elegance of furniture. It is commonly used for
      luxury wardrobes, cabinets and decorative wood panels.
    </p>

    <p className="text-gray-300 leading-relaxed">
      <strong>Matte Finish:</strong> Matte polish offers a subtle and refined
      appearance without excessive shine. It is perfect for contemporary
      interiors where minimalism and sophistication are preferred.
    </p>
  </div>

  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-yellow-400">
      Why Wood Polishing Is Important
    </h2>

    <p className="text-gray-300 leading-relaxed">
      Wooden surfaces are constantly exposed to dust, humidity, sunlight and
      daily wear. Without proper treatment, wood can fade, crack or lose its
      natural beauty. Professional wood polishing not only enhances appearance
      but also creates a protective barrier against moisture and scratches.
    </p>

    <p className="text-gray-300 leading-relaxed">
      In cities like Mumbai where humidity levels are high, quality polishing
      helps prevent swelling, surface damage and long-term deterioration.
      Our expert team ensures proper sanding, surface preparation and coating
      application for maximum durability.
    </p>
  </div>

  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-yellow-400">
      Our Wood Polishing Process
    </h2>

    <p className="text-gray-300 leading-relaxed">
      We follow a structured polishing process to achieve flawless results.
      The process begins with inspection and assessment of the wooden surface.
      Any scratches, dents or uneven areas are carefully repaired.
    </p>

    <p className="text-gray-300 leading-relaxed">
      Next, professional sanding is performed to smooth the surface and remove
      old coatings. High-quality primer or sealer is applied before the final
      polish coats. Depending on your selected finish — PU, matte or high-gloss —
      multiple layers are applied with proper drying time to ensure uniform
      coverage and durability.
    </p>
  </div>

  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-yellow-400">
      Wood Polish for Homes & Commercial Spaces
    </h2>

    <p className="text-gray-300 leading-relaxed">
      Our wood polish services are suitable for residential apartments,
      luxury bungalows, offices, hotels and retail spaces. We customise the
      finish according to the purpose of the area — high durability for
      commercial usage and refined elegance for home interiors.
    </p>

    <p className="text-gray-300 leading-relaxed">
      Whether you need full furniture polishing during renovation or
      maintenance polishing to restore shine, we provide reliable and
      professional service with transparent pricing.
    </p>
  </div>

  <div className="space-y-6">
    <h2 className="text-2xl font-semibold text-yellow-400">
      Why Choose New Bombay Painting?
    </h2>

    <p className="text-gray-300 leading-relaxed">
      With over 30 years of industry experience, New Bombay Painting is trusted
      for quality craftsmanship and long-lasting finishes. Our skilled
      professionals use premium materials and modern tools to deliver smooth,
      even and durable polish coatings.
    </p>

    <p className="text-gray-300 leading-relaxed">
      We focus on precision, cleanliness and timely completion. From consultation
      to final inspection, our goal is to ensure customer satisfaction and
      superior finish quality on every project.
    </p>
  </div>

</section>

    </main>
    
    </>
  )
}

export default page
