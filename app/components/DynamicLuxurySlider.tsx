"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
interface CardItem {
  id: number;
  title: string;
  price?: string;
  description: string;
  image: string;
  tag?: string;
  buttonText?: string;
}

interface DynamicLuxurySliderProps {
  data: CardItem[];
  bgColor?: string;
}

export default function DynamicLuxurySlider({
  data,
  bgColor = "#000000",
}: DynamicLuxurySliderProps) {
  return (
    <section className="w-full py-16" style={{ backgroundColor: bgColor }}>
      {/* <div className="max-w-7xl mx-auto px-4"> */}
      <div className="max-w-[90rem] mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {data.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-[#F6EFE7] rounded-[40px] p-6 md:p-10 flex flex-col md:flex-row items-center shadow-xl">

                {/* IMAGE */}
                <div className="relative w-full md:w-1/2 h-[280px] md:h-[350px] rounded-[30px] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0 text-center md:text-left">
                  
                  {card.tag && (
                    <p className="text-sm tracking-widest text-gray-500 mb-2">
                      {card.tag}
                    </p>
                  )}

                  <h2 className="text-2xl md:text-3xl font-semibold text-[#5A4634] leading-snug">
                    {card.title}
                  </h2>

                  {/* {card.price && (
                    <p className="text-[#C58B3A] text-lg font-medium mt-3">
                      {card.price}
                    </p>
                  )} */}

                  <p className="text-gray-600 mt-4 text-sm md:text-base">
                    {card.description}
                  </p>

                  <button className="mt-6 px-8 py-3 bg-gradient-to-r from-[#C58B3A] to-[#A56B22] text-white rounded-full shadow-md hover:scale-105 transition">
                    {card.buttonText || "Book Now"}
                  </button>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
