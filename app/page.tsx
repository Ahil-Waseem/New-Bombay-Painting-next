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
import ResponsiveGuranteeImage from "./components/ResponsiveGuranteeImage";

export const metadata = {
  title:
    "New Bombay Painting | Interior & Exterior Painting Services in Mumbai & Navi Mumbai",
  description:
    "New Bombay Painting offers professional interior, exterior & texture painting services in Mumbai & Navi Mumbai. 100% satisfaction guarantee, premium quality finish & affordable pricing. Book your free site visit today.",
  keywords: [
    "painting services in Mumbai",
    "interior painting Mumbai",
    "exterior painting Navi Mumbai",
    "texture painting services",
    "house painting contractor Mumbai",
    "painter near me in Mumbai",
    "painter near me in Navi-Mumbai",
  ],
};

export default function Home() {
   const galleryData = [
    {
      src: "/images/shadecard/colour-shade-card1.webp",
      link: "/services/interior-painting",
      buttonText: "Interior Work",
    },
    {
      src: "/images/shadecard/premium-colour-shade-card2.webp",
      link: "/services/exterior-painting",
      buttonText: "Exterior Work",
    },
    {
      src: "/images/shadecard/premium-melamine-shade-card3.webp",
      link: "/services/texture-painting",
      buttonText: "Texture Design",
    },
  ];
     const galleryData2 = [
    {
      src: "/images/shadecard/premium-pu-shade-card7.webp",
      link: "/services/pop-false-ceiling",
      buttonText: "PU",
    },
    {
      src: "/images/shadecard/premium-exterior-emulsun-sade-card10.webp",
      link: "/services/exterior-painting",
      buttonText: "Exterior Work",
    },
    {
      src: "/images/shadecard/premium-royle-plat-texture-shade-card5.webp",
      link: "/services/texture-painting",
      buttonText: "Texture Design",
    },
  ];

  console.log("HeroSection is:", HeroSection);

  
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "PaintingContractor",
      "@id": "https://newbombaypainting.in/",
      name: "New Bombay Painting",
      url: "https://newbombaypainting.in/",
      email: "newbombaypainting302@gmail.com",
      telephone: [
        "+919793167187",
        "+919819584682",
        "+919320837842",
        "+918736963061"
      ],
      founder: {
        "@type": "Person",
        name: "Waseem Khan",
        jobTitle: "Proprietor"
      },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "D-231, Y.Rao Chavan NGR, Ekata Nagar, Link Road, Govandi, Mankhurd",
        addressLocality: "Mumbai",
        addressRegion: "MH",
        postalCode: "400043",
        addressCountry: "IN"
      },
      areaServed: [
        {
          "@type": "City",
          name: "Mumbai"
        },
        {
          "@type": "City",
          name: "Navi Mumbai"
        },
        {
          "@type": "City",
          name: "Pune"
        }
      ],
      serviceOffered: [
        { "@type": "Service", name: "Interior Painting" },
        { "@type": "Service", name: "Exterior Painting" },
        { "@type": "Service", name: "Texture Painting" },
        { "@type": "Service", name: "Wood Polish" },
        { "@type": "Service", name: "Wallpaper Installation" },
        { "@type": "Service", name: "POP False Ceiling" },
        { "@type": "Service", name: "Home Renovation" },
        { "@type": "Service", name: "Wood Polish Lamination" }
      ],
      sameAs: [
        "https://newbombaypainting.in/"
      ]
    }),
  }}
/>

      <HeroSection />
        <ResponsiveGuranteeImage image="/images/home/responsive-img1.png" />
      
      {/* <UspBar /> */}
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
