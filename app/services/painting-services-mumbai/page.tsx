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
                    bgImage="/images/services/service3.webp"
                    // sideImage="/images/services/"
                    sideVideo="/images/services/house-dancing1.mp4"
                  />
                   

    {/* PAGE TITLE */}
    <section className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16 text-white">
    <div className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400">
Professional Painting Services in Mumbai      </h1>

    </div>

    

     <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-yellow-400">
        Trusted House Painting Experts – New Bombay Painting
      </h2>

      <p className="leading-relaxed">

Your home is more than just four walls. It reflects your lifestyle, personality, and the energy you carry every day. A well-painted home does not just look beautiful—it feels fresh, inviting, and uplifting. At New Bombay Painting, we provide professional painting services in Mumbai designed to transform your residential or commercial space with precision, durability, and premium finish.

Whether you are planning a complete home makeover or simply refreshing your interiors, our experienced painters ensure a smooth, hassle-free and high-quality painting experience from start to finish.
      </p>
    
    </div>

     <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-yellow-400">
        Complete Painting Solutions Under One Roof
      </h2>

      <p className="leading-relaxed">

At New Bombay Painting, we believe that painting is not just about colour application. It is a systematic process that involves inspection, preparation, execution and finishing. Our team handles everything professionally so you can relax while we upgrade your space.

      </p>
      <p className='leading-relaxed'>Our painting services in Mumbai include:</p>
      <ul>
        <li>Interior Painting</li>
        <li>Exterior Painting</li>

        <li>Texture & Designer Wall Finishes</li>

        <li>Waterproofing & Damp Protection</li>
        <li>Wood Coating & Polish</li>
        <li>Metal Painting</li>
<li>Minor Wall Repairs & Crack Filling</li>
      </ul>
    <p className='leading-relaxed'>Every project is handled with attention to detail, proper surface preparation and premium materials to ensure long-lasting results.</p>
    </div>

     <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-yellow-400">
        Why Choose Professional Painting Services in Mumbai?
      </h2>

      <p className="leading-relaxed">
Painting may look simple, but achieving a flawless and durable finish requires expertise. Hiring professional painters saves time, avoids material wastage, and ensures better durability.
      </p>
      <p className="leading-relaxed">
At New Bombay Painting, we focus on:
      </p>
 <h3 className="text-2xl font-semibold text-yellow-400">
Enhancing Your Property’s Appearance
      </h3>
       <p className="leading-relaxed">
A professionally painted home instantly improves curb appeal and indoor ambiance. The right colour combinations can make rooms appear larger, brighter, and more elegant.
      </p>


      <h3 className="text-2xl font-semibold text-yellow-400">
  Protecting Your Walls from Damage
      </h3>
      <p className="leading-relaxed">
Mumbai’s climate includes heavy rainfall, humidity and pollution. We use high-quality paints and waterproof primers to protect walls from moisture, peeling, cracks and fading.
      </p>

      <h3 className="text-2xl font-semibold text-yellow-400">
  Health-Friendly & Low VOC Paint Options
      </h3>
      <p className="leading-relaxed">
We offer eco-friendly and low-odor paint options that reduce harmful emissions and create a safer indoor environment for your family.
      </p>

      <h2 className="text-2xl font-semibold text-yellow-400">
  Interior & Exterior Painting Services in Mumbai
      </h2>
      <p className="leading-relaxed">
Interior painting brings new life into your living spaces. From single-room repainting to complete flat renovation, we ensure smooth finishes, neat edges and clean execution.

Exterior painting is equally important. It protects your building from harsh sun exposure, heavy rains and dust accumulation. We use weather-resistant exterior paints that maintain colour stability and structural protection for years.
      </p>

      <h2 className="text-2xl font-semibold text-yellow-400">
  Step-by-Step Painting Process
      </h2>
      <p className="leading-relaxed">
We follow a structured approach to deliver professional results:
      </p>
    </div>

     <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-yellow-400">
        Consultation & Site Inspection
      </h2>

      <p className="leading-relaxed">
Our team visits your site, evaluates wall condition, discusses your colour preferences, budget and timeline.
      </p>

     
    </div>

     <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-yellow-400">
        Surface Preparation & Priming
      </h2>

      <p className="leading-relaxed">

Proper cleaning, sanding, crack repair and priming are carried out before painting begins. This ensures paint adhesion and durability.
      </p>

      
    </div>

     <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-yellow-400">
        Paint Application & Finishing
      </h2>

      <p className="leading-relaxed">
Paint Application & Finishing

      </p>

    </div>

     <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-yellow-400">
        Eco-Friendly Painting for Modern Homes
      </h2>

      <p className="leading-relaxed">
Sustainable living is becoming increasingly important. We offer low-VOC and eco-conscious paint solutions that are safe for children, pets and elderly residents. We also minimise waste during execution by using controlled material management practices.
      </p>

    </div>
    </div>
</section>

<section className="w-full bg-black text-white py-20">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-3xl font-semibold text-yellow-400 mb-10">
      Frequently Asked Questions – Painting Services in Mumbai
    </h2>

    <div className="space-y-6">

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          What type of paint is best for home interiors in Mumbai?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Water-based emulsion paints are generally the most suitable choice for Mumbai homes. They provide excellent durability, easy maintenance and resistance against stains. High-quality emulsions offer long-lasting performance compared to traditional oil-based paints.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          What sheen level should I choose for my home?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Sheen determines durability and appearance. Gloss and semi-gloss are ideal for doors and trims. Satin works well for living rooms and high-traffic areas. Matte finishes are suitable for bedrooms where a soft, non-reflective look is preferred.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          How long does a paint job typically last?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          A professionally executed paint job using premium materials can last between 5 to 10 years. Durability depends on surface preparation, paint quality, climate exposure and maintenance.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          Is primer necessary before repainting?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Yes. Primer improves paint adhesion, enhances colour depth and prevents uneven patches. It is especially important when changing from dark to light shades.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          Can dark walls be converted to lighter colours?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Yes, with proper priming and multiple coats, dark walls can be successfully transformed into lighter shades with smooth and uniform finish.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          How long does interior paint take to dry?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Most water-based paints become touch-dry within a few hours but require 24–48 hours for complete curing. Drying time may vary depending on humidity and ventilation.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          Do you handle minor wall repairs before painting?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Yes. Our team repairs cracks, dents and surface imperfections before painting to ensure a flawless finish.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          How much does painting cost in Mumbai?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Painting cost depends on area size, wall condition, paint brand, number of coats and additional services like waterproofing or texture finishes. We provide detailed and transparent quotations after site inspection.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          Do you offer warranty on painting services?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Yes, we provide service assurance based on paint type and scope of work. Warranty details are shared clearly during quotation.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          How long does it take to paint a 2BHK or 3BHK flat?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          On average, a 2BHK or 3BHK flat may take between 3 to 7 days depending on surface condition and design complexity.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          Can I schedule painting work on weekends?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          Yes. We offer flexible scheduling options to suit your convenience and minimise disruption.
        </p>
      </details>

      <details className="border border-gray-700 rounded-lg p-5">
        <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
          What precautions should I take before painting starts?
        </summary>
        <p className="mt-4 text-gray-200 leading-relaxed">
          We recommend removing fragile items and decluttering the space. Our team covers furniture and flooring to ensure complete protection.
        </p>
      </details>

    </div>
  </div>
</section>



    </>
  )
}

export default page
