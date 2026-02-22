"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const ADMIN_WHATSAPP_NUMBERS = [
    "919819584682",
    "919320837842",
    "918736963061",
    "919793167187",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Please fill your name and phone number");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");

    const adminMessage = encodeURIComponent(
      `📩 New Contact Enquiry – New Bombay Painting\n\n` +
        `Name: ${name}\n` +
        `Phone: +91${cleanPhone}\n` +
        `Message: ${message || "Not Provided"}`
    );

    const customerMessage = encodeURIComponent(
      `Thank you for contacting New Bombay Painting 🎨\n\n` +
        `Your enquiry has been received successfully.\n` +
        `Our team will contact you shortly.\n\n` +
        `– New Bombay Painting Team`
    );

    ADMIN_WHATSAPP_NUMBERS.forEach((num, i) => {
      setTimeout(() => {
        window.open(`https://wa.me/${num}?text=${adminMessage}`, "_blank");
      }, i * 600);
    });

    setTimeout(() => {
      window.open(
        `https://wa.me/91${cleanPhone}?text=${customerMessage}`,
        "_blank"
      );
    }, 3000);
  };

  return (
    <>
      {/* ================= HERO / BANNER SECTION ================= */}
      <section className="relative overflow-hidden bg-[#f6f5f2]">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Let’s Bring <br />
              <span className="text-yellow-500">Color</span> to Your Space
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Talk to New Bombay Painting experts for premium interior,
              exterior & renovation painting solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              {[
                "Expert Painters",
                "Premium Materials",
                "Clean Finish",
                "On-time Delivery",
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-5 py-3 bg-white rounded-xl shadow-md text-sm font-semibold text-gray-800"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-12 flex gap-4 flex-wrap">
              <a
                href="tel:+919819584682"
                className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition shadow-lg"
              >
                Call Now
              </a>

              <Link
                href="/services"
                className="border border-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="absolute w-[420px] h-[420px] bg-yellow-400/90 
              rounded-[65%_35%_55%_45%/45%_55%_45%_55%] 
              blur-md -top-10 -right-10"
            />

            <div className="relative z-10 rounded-[36px] overflow-hidden shadow-2xl">
              <Image
                src="/images/contact/interior.webp"
                alt="Professional Painting Tools"
                width={520}
                height={520}
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute bottom-8 -left-6 bg-white px-6 py-4 rounded-2xl shadow-xl z-20">
              <p className="text-sm font-bold text-gray-900">
                Trusted by 1000+ Homes
              </p>
              <p className="text-xs text-gray-500">
                Mumbai & Navi Mumbai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM SECTION ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT INFO */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Let’s Start Your <br />
              <span className="text-yellow-500">Painting Journey</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Talk to our experts today and get the right guidance for
              interior, exterior or renovation painting – without pressure.
            </p>

            <div className="mt-10 space-y-6 text-gray-800">
           <div>
  <p className="font-semibold">📍 Address</p>
  <p className="text-gray-600">
    New Bombay Painting,<br />
    D-231, Y. Rao Chavan, Link Road,<br />
    Ekta Nagar, Mankhurd,<br />
    Mumbai, Maharashtra – 400043, India
  </p>

  <p className="font-semibold mt-4">📌 Areas Served</p>
  <p className="text-gray-600">
    Mumbai Central, Navi Mumbai, Pune, Khandala, Lonavala
    and nearby areas.
  </p>
</div>

              <div>
                <p className="font-semibold">📞 Phone</p>
                <p className="text-gray-600">
                  +91 98195 84682<br />
                  +91 93208 37842<br/>
                  +91 87369 63061
                </p>
              </div>

              <div>
                <p className="font-semibold">✉ Email</p>
                <p className="text-gray-600">
                  newbombaypainting302@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 border">
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              Get Free Consultation
            </h3>

            <p className="text-center text-gray-500 text-sm mt-2 mb-8">
              Fill the form & we’ll connect with you shortly
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-xl px-4 py-4 focus:ring-2 focus:ring-yellow-400 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-xl px-4 py-4 focus:ring-2 focus:ring-yellow-400 outline-none"
              />

              <textarea
                placeholder="Your Message (Optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full border rounded-xl px-4 py-4 focus:ring-2 focus:ring-yellow-400 outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition"
              >
                Send on WhatsApp
              </button>
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              100% privacy • No spam • Instant response
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
