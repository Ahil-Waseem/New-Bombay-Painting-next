"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Home } from "lucide-react";

/* ✅ Services Pages List (Next.js paths) */
const servicesList = [
  { name: "Interior Painting", link: "/services/interior-painting" },
  { name: "Exterior Painting", link: "/services/exterior-painting" },
  { name: "Texture Painting", link: "/services/texture-painting" },
  { name: "Wood Polish", link: "/services/wood-polish" },
  { name: "Wallpaper Installation", link: "/services/wallpaper-installation" },
  { name: "POP False Ceiling", link: "/services/pop-false-ceiling" },
  { name: "Home Renovation", link: "/services/home-renovation" },
  { name: "Wood Polish", link: "/services/wood-polish"},
  { name: "Wood Polish Lamination", link: "/services/wood-polish-lamination"},

];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">

        {/* ---------------- LEFT SECTION ---------------- */}
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo/logo.png"
              alt="New Bombay Painting"
              width={180}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Bringing colors to life with professional and high-quality painting
            services. Transforming spaces with creativity, care, and perfection.
          </p>
           <p className="font-semibold">📍 Address</p>
  <p className="text-gray-600">
    New Bombay Painting,<br />
    D-231, Y. Rao Chavan, Link Road,<br />
    Ekta Nagar, Mankhurd,<br />
    Mumbai, Maharashtra – 400043, India
  </p>

          <div className="flex space-x-3 mt-6">
            <a
              href="tel:+919819584682"
              className="bg-yellow-500 text-black px-3 py-2 rounded-lg text-sm font-semibold flex items-center hover:bg-yellow-400 transition"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </a>
          </div>
        </div>

        {/* ---------------- SUPPORT SECTION ---------------- */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Support
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/services" className="hover:text-yellow-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-yellow-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-yellow-400 transition">
                Blog
              </Link>
            </li>
             <li>
              <Link href="/painting-rates-mumbai" className="hover:text-yellow-400 transition">
                Rates
              </Link>
            </li>
            <li>
              <a
                href="tel:+919819584682"
                className="hover:text-yellow-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* ---------------- SERVICES SECTION ---------------- */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Services
          </h3>

          <ul className="space-y-2 text-gray-300">
            {servicesList.map((service) => (
              <li key={service.name}>
                <Link
                  href={service.link}
                  className="hover:text-yellow-400 transition"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* ---------------- CITIES SECTION ---------------- */}
<div>
  <h3 className="text-lg font-semibold text-yellow-400 mb-4">
    Painter Near Me
  </h3>

  <ul className="space-y-2 text-gray-300">
    <li>
      <Link href="/painter-near-me/mumbai" className="hover:text-yellow-400 transition">
        Painter Near Me in Mumbai
      </Link>
    </li>
    <li>
      <Link href="/painter-near-me/pune" className="hover:text-yellow-400 transition">
        Painter Near Me in Pune
      </Link>
    </li>
    <li>
      <Link href="/painter-near-me/navi-mumbai" className="hover:text-yellow-400 transition">
        Painter Near Me in Navi Mumbai
      </Link>
    </li>
  </ul>
</div>


        {/* ---------------- RIGHT SECTION ---------------- */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-4 tracking-wide">
            Your Home Design Is Waiting For Us
          </h3>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <div className="p-3 bg-yellow-500 rounded-full text-black shadow-lg hover:scale-110 transition">
              <Home size={22} />
            </div>
            <div className="p-3 bg-red-500 rounded-full text-white shadow-lg hover:scale-110 transition">
              <Home size={22} />
            </div>
            <div className="p-3 bg-green-500 rounded-full text-white shadow-lg hover:scale-110 transition">
              <Home size={22} />
            </div>
            <div className="p-3 bg-blue-500 rounded-full text-white shadow-lg hover:scale-110 transition">
              <Home size={22} />
            </div>

            <div className="hidden md:flex p-3 bg-purple-500 rounded-full text-white shadow-lg hover:scale-110 transition">
              <Home size={22} />
            </div>
            <div className="hidden md:flex p-3 bg-orange-500 rounded-full text-white shadow-lg hover:scale-110 transition">
              <Home size={22} />
            </div>
            <div className="hidden md:flex p-3 bg-pink-500 rounded-full text-white shadow-lg hover:scale-110 transition">
              <Home size={22} />
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            Get updates about our latest painting projects and offers.
          </p>
        </div>
      </div>

      {/* ---------------- FOOTER BOTTOM ---------------- */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} New Bombay Painting. All Rights Reserved. |
        <Link
          href="/privacy-policy"
          className="text-yellow-400 hover:underline ml-1"
        >
          Privacy Policy
        </Link>{" "}
        |
        <Link
          href="/terms"
          className="text-yellow-400 hover:underline ml-1"
        >
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}
