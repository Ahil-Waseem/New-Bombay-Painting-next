"use client";
import Image from "next/image";

interface Props {
  image: string;
  alt?: string;
}

export default function ResponsiveImageSection({ image, alt }: Props) {
  return (
    <section className="w-full bg-black">
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
        <Image
          src={image}
          alt={alt || "Section Image"}
          fill
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
