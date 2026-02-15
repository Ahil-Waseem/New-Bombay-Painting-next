import ServicePageBanner from '@/app/components/ServicePageBanner'
import React from 'react'

function page() {
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
                    bgImage="/images/services/service2.webp"
                    // sideImage="/images/services/"
                    sideVideo="/images/services/house-dancing1.mp4"
                  />
                   <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
          Wood Polish Services
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          We offer premium PU polish, matte finish and high-gloss wood polish
          services for homes, offices and luxury interiors.
          Detailed service information will be available soon.
        </p>

        <div className="border border-yellow-500/40 rounded-lg p-6 bg-white/5">
          <p className="text-gray-400 text-sm">
            For immediate enquiries, contact New Bombay Painting for expert
            consultation and a free site visit.
          </p>
        </div>
      </div>
    </main>
    </>
  )
}

export default page
