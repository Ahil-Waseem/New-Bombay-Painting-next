"use client";

import { useState } from "react";
import Image from "next/image";

export default function PremiumInlineCTA() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Please enter name and contact number");
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");

    const message = encodeURIComponent(
      `🎨 New CTA Lead – NewBombayPainting\n\n` +
        `Name: ${name}\n` +
        `Contact: +91 ${cleanPhone}\n`
    );

    window.open(
      `https://wa.me/919819584682?text=${message}`,
      "_blank"
    );
  };

  return (
    <section className="relative px-4 py-16">
      <div className="relative max-w-7xl mx-auto rounded-[28px] overflow-hidden shadow-2xl">

        {/* Background Image */}
        <Image
          src="/images/home/cta2.webp"
          alt="Premium Painting Services"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 px-6 py-14 md:px-12 md:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Left Text */}
            <div className="text-white max-w-xl text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                Paint Your Home With Confidence
              </h2>
              <p className="mt-3 text-gray-200 text-sm md:text-base">
                Premium painting services crafted for modern living spaces.
              </p>
            </div>

            {/* Inline Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full lg:w-auto bg-white/95 backdrop-blur-md rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-center gap-3 shadow-xl"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full md:w-[180px] rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full md:w-[180px] rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <button
                type="submit"
                className="w-full md:w-auto bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-xl transition whitespace-nowrap"
              >
                Get Callback
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
