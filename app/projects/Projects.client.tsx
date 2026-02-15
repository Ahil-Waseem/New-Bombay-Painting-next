"use client";

import { useRef } from "react";
import Image from "next/image";

export default function projectssClient() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handlePlay = (currentIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (index !== currentIndex && video && !video.paused) {
        video.pause();
      }
    });
  };

  /* ===================== DATA ===================== */

  const videoGallery = [
    { src: "/images/projects/video1.mp4", cover: "/images/projects/thumbnail/video1.webp" },
    { src: "/images/projects/video2.mp4", cover: "/images/projects/thumbnail/video2.webp" },
    { src: "/images/projects/video3.mp4", cover: "/images/projects/thumbnail/video3.webp" },
    { src: "/images/projects/video4.mp4", cover: "/images/projects/thumbnail/video4.webp" },
    { src: "/images/projects/video5.mp4", cover: "/images/projects/thumbnail/video5.webp" },
    { src: "/images/projects/video6.mp4", cover: "/images/projects/thumbnail/video6.webp" },
    { src: "/images/projects/video7.mp4", cover: "/images/projects/thumbnail/video7.webp" },
    { src: "/images/projects/video8.mp4", cover: "/images/projects/thumbnail/video8.webp" },
  ];

  const paintingGallery = [
    "/images/projects/webp/paint4.webp",
    "/images/projects/webp/paint5.webp",
    "/images/projects/webp/paint6.webp",
  ];

  const polishGallery = [
    "/images/projects/webp/polish1.webp",
    "/images/projects/webp/polish2.webp",
    "/images/projects/webp/polish3.webp",
  ];

  const textureGallery = [
    "/images/projects/webp/texture1.webp",
    "/images/projects/webp/texture2.webp",
    "/images/projects/webp/texture3.webp",
    "/images/projects/webp/texture4.webp",
    "/images/projects/webp/texture5.webp",
    "/images/projects/webp/texture6.webp",
    // "/images/projects/webp/texture7.webp",
  ];

  const laminationGallery = [
    "/images/projects/webp/lamination1.webp",
    "/images/projects/webp/lamination2.webp",
    "/images/projects/webp/lamination3.webp",
  ];

  const popGallery = [
    "/images/projects/webp/pop1.webp",
    "/images/projects/webp/pop2.webp",
    "/images/projects/webp/pop3.webp",
  ];

  const imageGallery = [
    "/images/projects/webp/img1.webp",
    "/images/projects/webp/img2.webp",
    "/images/projects/webp/img3.webp",
    "/images/projects/webp/img4.webp",
    "/images/projects/webp/img5.webp",
    "/images/projects/webp/img6.webp",
    "/images/projects/webp/img18.webp",
    "/images/projects/webp/img19.webp",
    "/images/projects/webp/texture1.webp",
    "/images/projects/webp/texture2.webp",
    "/images/projects/webp/texture3.webp",
    "/images/projects/webp/texture4.webp",
    "/images/projects/webp/texture5.webp",
    "/images/projects/webp/texture6.webp",
     "/images/projects/webp/paint4.webp",
    "/images/projects/webp/paint5.webp",
    "/images/projects/webp/paint6.webp",
     "/images/projects/webp/polish1.webp",
    "/images/projects/webp/polish2.webp",
    "/images/projects/webp/polish3.webp",

  ];

  /* ===================== UI ===================== */

  return (
    <section className="bg-black text-white py-16 px-6 sm:px-12 lg:px-24">

      <GallerySection
        title="Painting Work Gallery"
        desc="Explore premium interior and exterior painting work completed across high-end homes."
        images={paintingGallery}
      />

      <GallerySection
        title="Polish Work Gallery"
        desc="Glossy, matte and PU polish work for premium wood interiors."
        images={polishGallery}
      />

      <GallerySection
        title="Texture Work Gallery"
        desc="Modern texture finishes including metallic, stone, moroccan and more."
        images={textureGallery}
      />

      <GallerySection
        title="Lamination Work Gallery"
        desc="Modern laminate finishes for wardrobes and wall panels."
        images={laminationGallery}
      />

      <GallerySection
        title="POP Work Gallery"
        desc="POP false ceilings, wall mouldings and premium interior designs."
        images={popGallery}
      />

      {/* 🎥 VIDEOS */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          On-Site Work Videos
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {videoGallery.map((video, index) => (
            <div
              key={index}
              className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg bg-gray-900"
            >
              <Image
                src={video.cover}
                alt="projects video thumbnail"
                fill
                className="object-cover"
              />

              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                controls
                muted
                poster={video.cover}
                onPlay={() => handlePlay(index)}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>

      {/* 📸 OLD IMAGES */}
      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageGallery.map((img, index) => (
          <div
            key={index}
            className="relative h-40 sm:h-48 lg:h-56 rounded-lg overflow-hidden shadow-lg"
          >
            <Image src={img} alt="projects image" fill className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===================== REUSABLE GALLERY ===================== */

function GallerySection({
  title,
  desc,
  images,
}: {
  title: string;
  desc: string;
  images: string[];
}) {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-yellow-400 mb-3">{title}</h2>
      <p className="text-gray-300 mb-6">{desc}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative h-40 sm:h-48 lg:h-56 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
          >
            <Image src={img} alt={title} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
