import Image from "next/image";
import { HeroSection } from "./components/HeroSection";
import { UspBar } from "./components/UspBar";
import ServiceGrid from "./components/ServiceGrid";
import GoogleReviews from "./components/GoogleReviews";
import ServiceCardsSection from "./components/ServiceCardSection";
import PaintBrandsSection from "./components/PaintBrandsSection";
import HomeFAQ from "./components/HomeFAQ";
import HomeCTA from "./components/Cta";
import PaintingServicesSection from "./components/PaintingServicesSection";
import AutoScrollGallerySadeCard from "./components/AutoScrollGallerySadeCard";


export default function Home() {
   const galleryData = [
    {
      src: "/images/shadecard/colour-shade-card1.webp",
      link: "/service-1",
      buttonText: "Interior Work",
    },
    {
      src: "/images/shadecard/premium-colour-shade-card2.webp",
      link: "/service-2",
      buttonText: "Exterior Work",
    },
    {
      src: "/images/shadecard/premium-melamine-shade-card3.webp",
      link: "/service-3",
      buttonText: "Texture Design",
    },
  ];
     const galleryData2 = [
    {
      src: "/images/shadecard/premium-pu-shade-card7.webp",
      link: "/service-1",
      buttonText: "PU",
    },
    {
      src: "/images/shadecard/premium-exterior-emulsun-sade-card10.webp",
      link: "/service-2",
      buttonText: "Exterior Work",
    },
    {
      src: "/images/shadecard/premium-royle-plat-texture-shade-card5.webp",
      link: "/service-3",
      buttonText: "Texture Design",
    },
  ];

  console.log("HeroSection is:", HeroSection);

  
  return (
    <>
      <HeroSection />
      <UspBar />
      <ServiceGrid/>
      <AutoScrollGallerySadeCard items={galleryData2} speed={30} />;
      {/* <GoogleReviews/> */}
      <ServiceCardsSection/>
      <PaintBrandsSection/>
      <AutoScrollGallerySadeCard items={galleryData} speed={30} />;
      <HomeFAQ/>
      <PaintingServicesSection/>
      <HomeCTA/>
    </>
  );

   }
