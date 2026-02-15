"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* ⭐ REVIEWS DATA */
const reviews = [
  {
    name: "Sachin Udupa",
    city: "Bangalore",
    rating: 5,
    date: "January 26, 2026",
    review:
      "Had a great experience with the team. Very professional and on-time completion.",
  },
  {
    name: "Nazir Samer",
    city: "Mumbai",
    rating: 5,
    date: "January 24, 2026",
    review:
      "Great quality work with reasonable pricing. Staff was well trained.",
  },
  {
    name: "Sriram Balasubramanian",
    city: "Hyderabad",
    rating: 5,
    date: "January 22, 2026",
    review:
      "Repeat customer. Excellent coordination and flawless execution.",
  },
  {
    name: "Kapil R",
    city: "Pune",
    rating: 5,
    date: "January 22, 2026",
    review:
      "Very satisfied with service. Finished on time without delays.",
  },
  {
    name: "Amit Verma",
    city: "Delhi",
    rating: 4,
    date: "January 20, 2026",
    review:
      "Good overall experience. Team was cooperative and polite.",
  },
];

const cities = ["ALL", "BANGALORE", "MUMBAI", "HYDERABAD", "PUNE", "DELHI"];

export default function GoogleReviews() {
  const [activeCity, setActiveCity] = useState("ALL");

  const filteredReviews =
    activeCity === "ALL"
      ? reviews
      : reviews.filter(
          (r) => r.city.toUpperCase() === activeCity
        );

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

          {/* Left Title */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            What <br />
            <span className="text-gray-900">People Say</span>
          </h2>

          {/* Right Google Rating */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo/googlr-rating-1.png"
              alt="Google"
              width={150}
              height={150}
            />
            <div>
              <p className="font-semibold text-lg">4.6 / 5 Rating</p>
              <div className="flex text-yellow-500 text-lg">
                ★ ★ ★ ★ ★
              </div>
              <p className="font-semibold text-lg">Ratings shown are based on publicly available Google customer reviews.</p>
              

            </div>
          </div>
        </div>

        {/* CITY FILTER */}
        <div className="flex gap-3 overflow-x-auto pb-4 mb-10">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-6 py-2 rounded-full border text-sm font-semibold whitespace-nowrap transition
                ${
                  activeCity === city
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-600 border-gray-300 hover:border-orange-400"
                }`}
            >
              {city}
            </button>
          ))}
        </div>

        {/* REVIEWS SLIDER */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {filteredReviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-6 h-full flex flex-col">

                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="text-yellow-500 mb-3">
                  {"★".repeat(review.rating)}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                  {review.review}
                </p>

                {/* Google Badge */}
                <div className="mt-auto pt-4 flex items-center gap-2 text-xs text-gray-500">
                  <Image
                    src="/images/logo/googlr-rating-1.png"
                    alt="Google"
                    width={150}
                    height={150}
                  />
                  Verified Google Review
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
