import ServicePageBanner from '@/app/components/ServicePageBanner'
import React from 'react'

function page() {
  return (
    <>
         <ServicePageBanner
                    title="Professional Painting Services"
                    description="High-quality interior and exterior painting solutions tailored for your space."
                    primaryCta={{
                      text: "Book Site Visit",
                      href: "#contact",
                    }}
                    secondaryCta={{
                      text: "View Services",
                      href: "/services",
                    }}
                    bgImage="/images/services/service2.webp"
                    // sideImage="/images/services/"
                    sideVideo="/images/services/house-dancing1.mp4"
                  />
    </>
  )
}

export default page
