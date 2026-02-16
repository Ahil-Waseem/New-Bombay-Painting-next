import AutoScrollGallerySadeCard from '@/app/components/AutoScrollGallerySadeCard';
import ServicePageBanner from '@/app/components/ServicePageBanner'
import React from 'react'

export const metadata = {
  title:
    "Home Renovation Services in Mumbai | Complete House Renovation Experts",
  description:
    "Professional home renovation services in Mumbai, Navi Mumbai & Thane. Interior remodeling, false ceiling, waterproofing, structural repair and complete house renovation with transparent pricing and expert workmanship.",
  keywords: [
    "Home renovation Mumbai",
    "House renovation services Mumbai",
    "Flat renovation Mumbai",
    "Interior remodeling Mumbai",
    "False ceiling renovation",
    "Complete home renovation contractor",
    "Renovation cost per sq ft Mumbai",
    "Home renovation Navi Mumbai"
  ],
  alternates: {
    canonical:
      "https://newbombaypainting.in/services/home-renovation",
  },
  openGraph: {
    title:
      "Home Renovation Services in Mumbai | New Bombay Painting",
    description:
      "End-to-end home renovation including painting, false ceiling, waterproofing, structural upgrades and interior modernization.",
    url: "https://newbombaypainting.in/services/home-renovation",
    siteName: "New Bombay Painting",
    type: "website",
  },
};

function page() {
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
          "https://newbombaypainting.in/services/home-renovation#service",
        serviceType: "Home Renovation Services",
        name: "Home Renovation Services in Mumbai",
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
          { "@type": "City", "name": "Thane" }
        ],
        description:
          "Complete home renovation services including structural upgrades, false ceiling, painting, waterproofing, flooring and interior modernization."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does home renovation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Renovation timelines depend on the size of the property and scope of work. Minor upgrades may take a few days, while complete home renovation projects can take several weeks."
            }
          },
          {
            "@type": "Question",
            "name": "What is the cost of home renovation in Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Renovation costs vary based on materials, labour, structural modifications and finishing details. A clear quotation is provided after site inspection."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle complete renovation including painting and ceiling work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, we provide complete renovation services including painting, POP false ceiling, waterproofing, wall repairs and finishing work."
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
                          bgImage="/images/services/service4.webp"
                          // sideImage="/images/services/"
                          sideVideo="/images/services/house-dancing2.mp4"
                        />
                              <AutoScrollGallerySadeCard items={galleryData} speed={30} />;
                        
                          <div className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16 text-white">

        {/* PAGE TITLE */}
        <div className="space-y-6">
  <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400">
    Home Renovation Services in Mumbai
  </h1>

  <p className="text-lg leading-relaxed">
    Home renovation refers to the process of upgrading and improving the existing structure of your house to enhance its appearance, boost functionality, or fix structural issues. It may involve small updates such as repainting walls and installing wallpaper, or larger modifications like redesigning the kitchen, upgrading bathrooms, or even constructing additional rooms.
  </p>

  <p className="text-lg leading-relaxed">
    Your home deserves more than just maintenance — it deserves transformation.
    At{" "}
    <a
      href="https://newbombaypainting.in/"
      className="text-yellow-400 underline"
    >
      New Bombay Painting
    </a>
    , we provide complete home renovation services in Mumbai,
    Navi Mumbai, Thane and nearby areas. From structural upgrades and modern interiors
    to repainting, false ceiling, waterproofing and finishing touches, we handle
    everything with precision and professional expertise, including professional{" "}
    <a
      href="/services/interior-painting"
      className="text-yellow-400 underline"
    >
      interior painting services
    </a>.
  </p>

  <p className="text-lg leading-relaxed">
    Whether you are renovating a flat, bungalow, office or commercial space,
    our team ensures high-quality workmanship, timely completion and complete
    transparency in pricing. We convert outdated spaces into modern,
    functional and aesthetically appealing homes.
  </p>
</div>


        {/* OUR RENOVATION SERVICES */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
            Complete Home Renovation Solutions
          </h2>

          <p className="leading-relaxed">
            We offer end-to-end renovation services that cover structural improvements,
            interior upgrades and finishing enhancements. Our renovation services include
            wall modifications, POP & false ceiling work, electrical updates, plumbing adjustments,
            flooring upgrades, painting, texture finishes and waterproofing treatments.
          </p>

          <p className="leading-relaxed">
            Every renovation project begins with a detailed site inspection and planning phase.
            We understand your vision, budget and timeline before creating a customised
            renovation plan tailored specifically to your property.
          </p>
        </div>

        {/* INTERIOR RENOVATION */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
            Interior Renovation & Modernisation
          </h2>

          <p className="leading-relaxed">
            Interior renovation is not just about changing colours — it’s about upgrading
            your lifestyle. We modernise living rooms, bedrooms, kitchens and bathrooms
            using premium materials, trending colour palettes and smart layout improvements.
          </p>

          <p className="leading-relaxed">
            From elegant wall finishes and designer ceilings to smart lighting upgrades
            and modular improvements, we create interiors that are both functional
            and visually impressive.
          </p>
        </div>

        {/* STRUCTURAL & PROTECTION WORK */}
       <div className="space-y-6">
  <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
    Structural Repairs & Waterproofing
  </h2>

  <p className="leading-relaxed">
    Renovation is incomplete without proper structural care. Our team handles
    crack repairs, damp treatment, terrace{" "}
    <a
      href="/services/pop-false-ceiling"
      className="text-yellow-400 underline"
    >
      waterproofing
    </a>{" "}
    and anti-leak solutions to strengthen your property before final finishing work begins.
  </p>

  <p className="leading-relaxed">
    We use high-quality materials and proven techniques to ensure long-lasting
    protection against moisture, seepage and environmental damage through professional{" "}
    <a
      href="/services/exterior-painting"
      className="text-yellow-400 underline"
    >
      exterior painting services
    </a>.
  </p>
</div>


          <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
Kitchen Renovation:
          </h2>

          <p className="leading-relaxed">
          Revamp your kitchen with an improved layout, upgraded fittings, modern equipment, and better storage solutions for enhanced convenience and style.
          </p>
           <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
           Bathroom Renovation:

          </h2>

          <p className="leading-relaxed">
         Redesign your bathroom into a comfortable and elegant space with updated sanitary fittings, stylish tiles, improved plumbing, and contemporary shower systems.
          </p>
  <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
           Basement Renovation:

          </h2>

          <p className="leading-relaxed">
         Convert unused basement areas into productive spaces such as a home office, fitness room, entertainment area, or additional living space.
          </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
           Interior Remodeling:
          </h2>

          <p className="leading-relaxed">
         Upgrade your interiors with fresh paint, new flooring, modern lighting systems, and customized design elements to create a refined living environment.
          </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
           Exterior Renovation:
          </h2>

          <p className="leading-relaxed">
         Enhance your property’s exterior appeal with professional exterior painting, surface repairs, cladding updates, or landscaping improvements.
          </p>

        </div>

        {/* WHY CHOOSE US */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
Why Choose New Bombay Painting for Home Renovation Services          </h2>

<h3 className="text-2xl md:text-3xl font-semibold text-yellow-400">
Skilled & Experienced Team:

</h3>
          <p className="leading-relaxed">
           Our professionals have extensive experience handling a wide variety of renovation projects with precision and expertise.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400">
    Commitment to Quality:
</h3>

          <p className="leading-relaxed">
          We maintain strict quality standards in workmanship and use reliable materials to ensure durable and long-lasting results.
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400">
    Customized Renovation Solutions:

</h3>
<p className="leading-relaxed">
           Every renovation plan is designed according to your space requirements, style preferences, and financial considerations.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400">
    End-to-End Project Coordination:

</h3>
<p className="leading-relaxed">
           From initial planning to final completion, we manage every stage of the renovation process to deliver a smooth and hassle-free experience.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400">
    Clear & Honest Pricing:

</h3>
<p className="leading-relaxed">
           We provide competitive rates with transparent quotations and no hidden costs, ensuring complete clarity before work begins.
          </p>
        </div>

        {/* PROCESS SECTION */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400">
Our Home Renovation Process
          </h2>

          <p className="leading-relaxed">
        At New Bombay Painting, we follow a structured approach to guarantee successful renovation outcomes:
          </p>
    <h4 className="text-2xl md:text-2xl font-semibold text-yellow-400">
  
Initial Consultation:

</h4>
          <p className="leading-relaxed">
        We start with a detailed discussion to understand your ideas, expectations, property condition, and budget.
          </p>
            <h4 className="text-2xl md:text-2xl font-semibold text-yellow-400">
  
Planning & Designing:

</h4>
          <p className="leading-relaxed">
        Our specialists prepare a detailed renovation plan and layout that matches your preferences and project goals.
          </p>
            <h4 className="text-2xl md:text-2xl font-semibold text-yellow-400">
  Project Execution:
</h4>
          <p className="leading-relaxed">
        Our trained team carries out the renovation efficiently while maintaining high standards of workmanship and accuracy.
          </p>
            <h4 className="text-2xl md:text-2xl font-semibold text-yellow-400">
  Quality Inspection:
</h4>
          <p className="leading-relaxed">
        We perform thorough inspections at every stage to ensure that all work meets our quality benchmarks.
          </p>
            <h4 className="text-2xl md:text-2xl font-semibold text-yellow-400">
Final Completion & Handover:
Once the renovation is complete, we ensure the area is properly cleaned and ready for use, along with necessary project documentation.
</h4>
          <p className="leading-relaxed">
        
          </p>

        </div>

      </div>


      {/* FAQ SECTION */}
      <section className="w-full bg-black text-white py-20 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-yellow-400 mb-10">
            Frequently Asked Questions – Home Renovation
          </h2>

          <div className="space-y-6">

            <details className="border border-gray-700 rounded-lg p-5">
              <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
                How long does home renovation take?
              </summary>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Renovation timelines depend on the size of the property and scope of work.
                Minor upgrades may take a few days, while complete home renovation
                projects can take several weeks. We provide a clear timeline
                before starting the project.
              </p>
            </details>

            <details className="border border-gray-700 rounded-lg p-5">
              <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
                What is the cost of home renovation in Mumbai?
              </summary>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Renovation costs vary based on material selection, labour requirements,
                structural modifications and finishing details. We offer transparent
                quotations after site inspection to ensure clarity in pricing.
              </p>
            </details>

            <details className="border border-gray-700 rounded-lg p-5">
              <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
                Do you handle complete renovation including painting and ceiling work?
              </summary>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Yes, we provide complete renovation services including painting,
                POP & false ceiling, waterproofing, wall repairs and finishing work.
                Our goal is to offer an end-to-end renovation solution under one roof.
              </p>
            </details>

            <details className="border border-gray-700 rounded-lg p-5">
              <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
                Do you provide warranty on renovation work?
              </summary>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Yes, we provide service assurance depending on the type of work
                and materials used. Warranty details are shared clearly during
                quotation and project discussion.
              </p>
            </details>

             <details className="border border-gray-700 rounded-lg p-5">
              <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
                How do I find the best home renovators near me?
              </summary>
              <p className="mt-4 text-gray-200 leading-relaxed">
                HomeTriangle has a database of the best professionals offering home renovation services all over India. Check out their ratings and testimonials from previous customers before choosing a service provider.
              </p>
            </details>

  <details className="border border-gray-700 rounded-lg p-5">
              <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
                How much does it cost to renovate a house per square foot?
              </summary>
              <p className="mt-4 text-gray-200 leading-relaxed">
                If you have an empty flat, the cost of interiors could go up to Rs 1,800 to Rs 3,000 per sq foot, while for a flat with basic amenities provided by the developer, it could vary from Rs 1,200 to Rs 1,800 per square foot. The price varies depending on the quality of the materials and the total time taken.
              </p>
            </details>

              <details className="border border-gray-700 rounded-lg p-5">
              <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
                What comes first in a home renovation?
              </summary>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Roof, Foundation, Water Issues, Siding, Windows. This is the order to go about doing home renovations. Large projects must be done first because subsequent projects are impacted by them. Protect your future renovation work by making certain the house won't collapse on you (foundation, major structural problems) and that it will remain dry (roof, siding, windows).
              </p>
            </details>

              <details className="border border-gray-700 rounded-lg p-5">
              <summary className="cursor-pointer text-yellow-400 font-medium text-lg">
                Should I buy the materials needed for the renovation?
              </summary>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Our professionals are quite flexible when it comes to buying the materials you need. You can either buy it or you can talk to them and they’ll help you get it cheaper. You can talk to our professionals in detail about it when they call you.
              </p>
            </details>
            
          </div>
        </div>
      </section>

    </div>
    </>
  )
}

export default page;
