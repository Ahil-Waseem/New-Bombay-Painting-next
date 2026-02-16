
"use client";
import Image from "next/image";

interface Props {
  image: string;
  alt?: string;
}

function ResponsiveGuranteeImage({ image, alt }: Props) {
  return (
    <>
      <section className="w-full bg-black py-0 md:py-10">
            <div className="relative w-full h-[100px] sm:h-[150px] md:h-[150px] lg:h-[250px]">
              <Image
                src={image}
                alt={alt || "Section Image"}
                fill
                className="object-contain"
                priority
              />
            </div>
          </section>
    </>
  )
}

export default ResponsiveGuranteeImage
