"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryItem {
  src: string;
  link: string;
  buttonText?: string;
}

interface Props {
  items: GalleryItem[];
  speed?: number; // animation duration
}

export default function AutoScrollGallerySadeCard({ items, speed = 25 }: Props) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
     <section className="w-full overflow-hidden py-16 bg-black">

      {/* Side Spacing Wrapper */}
      <div className="px-6 md:px-12 lg:px-20">

        <div className="relative overflow-hidden">
  <div
    className="flex gap-15 w-max"
    style={{
      animation: `scroll ${speed}s linear infinite`,
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.animationPlayState = "paused")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.animationPlayState = "running")
    }
  >

            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] sm:min-w-[340px] md:min-w-[400px] lg:min-w-[450px] flex-shrink-0"
              >
                <div
                  className="relative h-[220px] sm:h-[280px] md:h-[320px] rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setActiveImage(item.src)}
                >
                  <Image
                    src={item.src}
                    alt="Gallery Image"
                    fill
                    className="object-contain hover:scale-105 transition duration-500"
                  />
                </div>

                <a
                  href={item.link}
                  className="block mt-4 text-center bg-yellow-500 text-black py-3 rounded-xl font-medium hover:bg-yellow-400 transition"
                >
                  {item.buttonText || "View Details"}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Popup */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-full max-w-5xl h-[75vh]">
            <Image
              src={activeImage}
              alt="Zoomed"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}</style>
    </section>
  );
}
