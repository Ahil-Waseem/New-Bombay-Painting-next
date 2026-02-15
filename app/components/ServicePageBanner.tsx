"use client";
import Image from "next/image";

interface PageBannerProps {
  title: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  bgImage: string;
  sideImage: string;
  sideVideo?: string;
}

export default function ServicePageBanner({
  title,
  description,
  primaryCta,
  secondaryCta,
  bgImage,
  sideImage,
  sideVideo,
}: PageBannerProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="Banner Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            {title}
          </h2>

          {description && (
            <p className="mt-5 max-w-xl text-gray-700 text-lg">
              {description}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            {primaryCta && (
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-700 text-white font-medium hover:bg-blue-800 transition"
              >
                {primaryCta.text}
              </a>
            )}

            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-400 text-gray-900 font-medium hover:bg-gray-100 transition"
              >
                {secondaryCta.text}
              </a>
            )}
          </div>
        </div>

        {/* RIGHT IMAGE WITH TRANSPARENT BORDER EFFECT */}
      <div className="relative">
  {/* <div className="absolute -inset-4 rounded-3xl bg-white/40 backdrop-blur-xl" /> */}
  <div className="relative rounded-2xl overflow-hidden shadow-xl">
    
    {sideVideo ? (
      <video
        src={sideVideo}
        autoPlay
        loop
        muted
        playsInline
        width={900}
        height={520}
        className="object-cover"
      />
    ) : (
      <Image
        src={sideImage as string}
        alt="Banner Visual"
        width={900}
        height={520}
        className="object-cover"
      />
    )}

  </div>
</div>

      </div>
    </section>
  );
}
