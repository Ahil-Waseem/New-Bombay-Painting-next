import Image from "next/image";
import ServiceContactSection from "../components/ServiceContactSection";
import WhyChooseUsAnimated from "../components/WhyChooseUsAnimated";
import ServicePageBanner from "../components/ServicePageBanner";

export default function ServicesPage() {
  return (
    <>
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
                        mobileBgImage="/images/services/mob-service10.webp" 
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
              Painting <span className="text-yellow-400">Services</span>
            </h1>

            <p className="text-gray-300 max-w-lg">
              Interior, exterior, residential and commercial painting services
              with neat finishing, durable quality, and trusted workmanship by
              New Bombay Painting.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-300 transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative w-full h-[260px] md:h-[340px] rounded-xl overflow-hidden bg-gray-200">
            {/* Replace src later */}
            <Image
              src="/images/services/re-painting2.webp"
              alt="Painting Services"
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
      {/* ===== Services Content Section ===== */}
    <section
  id="painting-services"
  className="max-w-7xl mx-auto px-6 py-16 space-y-14"
>
  <header className="space-y-4">
    <h2 className="text-3xl font-semibold text-gray-900">
      Our Painting Services
    </h2>
    <p className="text-gray-700 max-w-3xl">
      At New Bombay Painting, we offer complete painting and surface protection
      solutions for homes and commercial spaces. Our work is driven by practical
      experience, honest guidance, and a strong focus on durability, finish, and
      long-term satisfaction.
    </p>
  </header>

  <div className="space-y-10 text-gray-700">

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        Interior Painting Services
      </h3>
      <p>
        Refresh your interiors with smooth, elegant finishes that enhance the
        look and comfort of your home. We handle walls, ceilings, doors, and
        furniture with proper surface preparation, clean execution, and careful
        detailing so the finish looks good and lasts longer.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        Exterior Painting Services
      </h3>
      <p>
        Exterior painting is not just about appearance—it’s also about
        protection. Our team helps you choose the right exterior paints and
        finishes that can withstand weather conditions while improving the
        overall appeal of your building.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        Residential Painting
      </h3>
      <p>
        We provide complete residential painting solutions for flats, apartments,
        houses, and bungalows. Whether it’s a fresh paint job or repainting, our
        focus remains on neat work, minimal disturbance, and a finish that feels
        like home.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        Commercial Painting
      </h3>
      <p>
        From offices and shops to showrooms and hospitality spaces, we handle
        commercial painting projects with proper planning and time discipline.
        Our team understands the importance of clean execution and timely
        completion in working environments.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        Wall Texture & Decorative Painting
      </h3>
      <p>
        Add character to your walls with modern textures, stencil designs, and
        decorative finishes. We help you choose styles that suit your space,
        lighting, and usage—so the result looks stylish without feeling overdone.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        Waterproofing Services
      </h3>
      <p>
        Our waterproofing services protect your home from dampness, leakage, and
        moisture-related damage. From terraces and bathrooms to exterior walls
        and basements, we use proven methods to improve durability and prevent
        recurring issues.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        Wood Painting & Polishing
      </h3>
      <p>
        Wooden doors, windows, furniture, and cabinets need special care. Our
        wood painting and polishing services enhance natural beauty while
        protecting surfaces from wear, insects, and ageing.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        Metal Painting Services
      </h3>
      <p>
        We offer metal painting for grills, railings, gates, and metal fixtures.
        Proper priming and coating not only improve appearance but also help
        protect metal surfaces from rust and weather damage.
      </p>
    </div>

    <div>
      <h3 className="text-xl font-semibold text-gray-900">
        Surface Preparation & Quality Control
      </h3>
      <p>
        A good paint finish starts with the right preparation. Our team takes
        care of cleaning, crack filling, sanding, and priming before painting.
        Every project is supervised to ensure quality, safety, and a clean final
        handover.
      </p>
    </div>

  </div>
</section>

    </main>
    </>
  );
}
