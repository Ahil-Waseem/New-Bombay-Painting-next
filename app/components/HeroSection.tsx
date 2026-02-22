"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* 🔁 HERO SLIDES */
const slides = [
  {
    image: "/images/home/hero/home-banner4.webp",
    mobileImage: "/images/home/hero/home-mob-ban3.webp", 
    heading: "Modern Wall Painting Design Services in Mumbai",
    subheading: "Explore premium wall paint design ideas with flawless finish, on-time completion & post-paint cleanup.",
    alt: "Modern wall painting design ideas for homes in Mumbai",
    button: "Estimate Painting Cost",
  },
  {
    image: "/images/home/hero/home-banner1.webp",
    mobileImage: "/images/home/hero/home-mob-ban1.webp", 
    heading: "Luxury Villa Wall Texture Design Experts",
    subheading: "Creative wall painting ideas and long-lasting texture finishes for villas in Mumbai.",
    alt: "Luxury villa wall texture design services in Mumbai",
    button: "Book Site Visit",
  },
  {
    image: "/images/home/hero/home-banner3.webp",
    mobileImage: "/images/home/hero/home-mob-ban2.webp", 
    heading: "Interior & Exterior Wall Painting Design Specialists",
    subheading: "Professional wall texture design and modern paint ideas for homes in Mumbai & Navi Mumbai.",
    alt: "Interior and exterior wall painting design services in Mumbai", 
    button: "Get Free Consultation",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Mumbai");

  const ADMIN_WHATSAPP_NUMBERS = [
  "919819584682",
  "919320837842",
  "918736963061",
  "919793167187",
];


  /* 🔁 AUTO SLIDER */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  /* 📲 FORM SUBMIT → WHATSAPP (ADMINS + CUSTOMER) */
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!name || !phone) {
    alert("Please fill name and phone number");
    return;
  }
  
  /* ✅ PHONE SANITIZE (IMPORTANT) */
const cleanPhone = phone.replace(/\D/g, ""); 
  /* 🔔 Message for Admins */
  const adminMessage = encodeURIComponent(
    `New Customer Filled The NewBombayPainting Home Banner From\n\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `City: ${city}\n\n` +
    `Contacts are:\n` +
    `+91 98195 84682\n` +
    `+91 93208 37842\n` +
    `+91 87369 63061\n` +
    `+91 97931 67187`
  );

  /* 📩 Message for Customer */
  const customerMessage = encodeURIComponent(
    `Thank you for contacting New Bombay Painting 🎨\n\n` +
    `Your form has been submitted successfully.\n` +
    `Our team will contact you as soon as possible.\n\n` +
    `– New Bombay Painting Team`
  );

  /* 🚀 Open WhatsApp for Admin Numbers */
  ADMIN_WHATSAPP_NUMBERS.forEach((number, index) => {
    setTimeout(() => {
      window.open(
        `https://wa.me/${number}?text=${adminMessage}`,
        "_blank"
      );
    }, index * 600); // delay to avoid popup block
  });

  /* 🚀 Open WhatsApp for Customer */
  setTimeout(() => {
   window.open(
      `https://wa.me/${cleanPhone}?text=${customerMessage}`,
      "_blank"
    );
  }, 3000);
};


  return (
    <section className="relative w-full min-h-[65vh] sm:min-h-[75vh] lg:min-h-[90vh] overflow-hidden">

    {/* 🔁 BACKGROUND SLIDER */}
{slides.map((slide, index) => (
  <div
    key={index}
    className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
      index === current ? "opacity-100" : "opacity-0"
    }`}
  >
    {/* IMAGE WRAPPER — mobile me chhoti height */}
    {/* <div className="relative w-full h-[60vh] sm:h-full">
      <Image
        src={slide.image}
        alt={slide.heading}
        fill
        priority={index === 0}
        draggable={false}
        className="object-cover sm:object-cover select-none"
        sizes="(max-width: 750px) 100vw, 100vw"
      /> */}
      {/* <div className="absolute inset-0 bg-black/55" />
    </div> */}
      {/* Desktop Image */}
<div className="hidden sm:block relative w-full h-full">
  <Image
    src={slide.image}
    alt={slide.alt}
    fill
    priority={index === 0}
    draggable={false}
    className="object-cover select-none"
  />
</div>

{/* Mobile Image */}
<div className="block sm:hidden relative w-full h-full">
  <Image
    src={slide.mobileImage || slide.image}
    alt={slide.heading}
    fill
    priority={index === 0}
    draggable={false}
    className="object-fit select-none"
  />
</div>
  </div>
))}


      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[100svh] flex items-center px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full">

          {/* LEFT TEXT */}
          <div className="text-white flex flex-col justify-center pt-24 lg:pt-0">
          {current === 0 ? (
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight max-w-2xl">
                Wall Painting Design & Wall Texture Experts in Mumbai – Modern Paint Ideas
              </h1>
            ) : (
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-2xl">
                {slides[current].heading}
              </h2>
            )}


            <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
              {slides[current].subheading}
            </p>

            {/* CTA → DIRECT CALL */}
            <a
              href="tel:+919819584682"
              className="mt-8 inline-block bg-yellow-500 text-black px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-400 transition w-fit"
            >
              {slides[current].button}
            </a>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/40 backdrop-blur-xl rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] max-w-lg w-full mx-auto self-center mb-16 lg:mb-0">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-center mb-3">
              BOOK SITE VISIT
            </h3>

            <p className="text-center text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Get a thorough Site Inspection and Colour
              <br className="hidden sm:block" />
              Consultation from Our Experts
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="tel"
                placeholder="+91 Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-5 py-4 text-base bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option>Mumbai</option>
                <option>Navi Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
                <option>Chennai</option>
                <option>Pune</option>
                <option>Ahmedabad</option>
                <option>Kolkata</option>
              </select>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-5 rounded-xl font-extrabold text-base tracking-wide hover:bg-yellow-400 transition"
              >
                BOOK SITE INSPECTION
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
