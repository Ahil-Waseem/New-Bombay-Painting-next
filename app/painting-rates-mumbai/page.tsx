import ServicePageBanner from '@/app/components/ServicePageBanner'
import React from 'react'

export const metadata = {
  title: "Painting Rates in Mumbai | Per Sq Ft Cost Guide | New Bombay Painting",
  description:
    "Check updated painting rates in Mumbai per sq ft. Interior, exterior, texture, polish, duco and lamination cost details by New Bombay Painting.",
  alternates: {
    canonical:
      "https://newbombaypainting.in/painting-rates-mumbai",
  },
};

export default function PaintingRatesPage() {
  return (
    <>
      <ServicePageBanner
        title="Painting Rates in Mumbai"
        description="Transparent pricing for painting, polishing, texture and lamination services."
        primaryCta={{
          text: "Book Site Visit",
          href: "/contact",
        }}
        secondaryCta={{
          text: "Call Now",
          href: "tel:+919819584682",
        }}
        bgImage="/images/services/service3.webp"
        mobileBgImage="/images/services/mob-service4.webp"
        sideVideo="/images/services/house-dancing1.mp4"
      />

      <section className="w-full bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">

          <h1 className="text-3xl md:text-4xl font-semibold text-yellow-400">
            Updated Painting & Polish Rates in Mumbai (Per Sq Ft)
          </h1>

          {/* WALL PAINTING */}
          <div>
         <h2 className="text-2xl font-semibold text-yellow-400">
Wall Painting Rates (Per Sq. Ft.)
</h2>

<div className="overflow-x-auto">
<table className="w-full border border-gray-700 text-sm">
  <thead className="bg-gray-900 text-yellow-400">
    <tr>
      <th className="p-3 border border-gray-700 text-left">Service</th>
      <th className="p-3 border border-gray-700 text-left">Rate (₹)</th>
      <th className="p-3 border border-gray-700 text-left">Unit</th>
    </tr>
  </thead>
  <tbody className="text-white">
    <tr><td className="p-3 border">Luster Finish + Ceiling Emulsion</td><td className="p-3 border">38</td><td className="p-3 border">Per Sq. Ft.</td></tr>
    <tr><td className="p-3 border">Dark Shade Luster</td><td className="p-3 border">50</td><td className="p-3 border">Per Sq. Ft.</td></tr>
    <tr><td className="p-3 border">Enamel Paint (3 Coats)</td><td className="p-3 border">38</td><td className="p-3 border">Per Sq. Ft.</td></tr>
    <tr><td className="p-3 border">Enamel (4 Coat Water Cutting)</td><td className="p-3 border">68.25</td><td className="p-3 border">Per Sq. Ft.</td></tr>
    <tr><td className="p-3 border">Texture Finish (Without Paint)</td><td className="p-3 border">55</td><td className="p-3 border">Per Sq. Ft.</td></tr>
    <tr><td className="p-3 border">Heavy Texture</td><td className="p-3 border">115</td><td className="p-3 border">Per Sq. Ft.</td></tr>
    <tr><td className="p-3 border">Velvet Touch Finish</td><td className="p-3 border">44</td><td className="p-3 border">Per Sq. Ft.</td></tr>
    <tr><td className="p-3 border">Satin Finish</td><td className="p-3 border">44</td><td className="p-3 border">Per Sq. Ft.</td></tr>
    <tr><td className="p-3 border">Sandtex (2 Coats)</td><td className="p-3 border">23.5</td><td className="p-3 border">Per Sq. Ft.</td></tr>
    <tr><td className="p-3 border">Snowcem (2 Coats)</td><td className="p-3 border">21.5</td><td className="p-3 border">Per Sq. Ft.</td></tr>
  </tbody>
</table>
</div>
<h2 className="text-2xl font-semibold text-yellow-400 mt-12">
RFT Painting Rates
</h2>

<table className="w-full border border-gray-700 text-sm mt-4">
<thead className="bg-gray-900 text-yellow-400">
<tr>
<th className="p-3 border text-left">Service</th>
<th className="p-3 border text-left">Rate (₹)</th>
<th className="p-3 border text-left">Unit</th>
</tr>
</thead>
<tbody className="text-white">
<tr><td className="p-3 border">Luster in RFT</td><td className="p-3 border">19</td><td className="p-3 border">Per RFT</td></tr>
<tr><td className="p-3 border">Dark Shade Luster RFT</td><td className="p-3 border">25</td><td className="p-3 border">Per RFT</td></tr>
<tr><td className="p-3 border">Enamel in RFT</td><td className="p-3 border">19</td><td className="p-3 border">Per RFT</td></tr>
<tr><td className="p-3 border">Water Cutting RFT</td><td className="p-3 border">34.25</td><td className="p-3 border">Per RFT</td></tr>
<tr><td className="p-3 border">Duco RFT</td><td className="p-3 border">127</td><td className="p-3 border">Per RFT</td></tr>
</tbody>
</table>

<h2 className="text-2xl font-semibold text-yellow-400 mt-12">
Wood Polish & Premium Finishes
</h2>

<table className="w-full border border-gray-700 text-sm mt-4">
<thead className="bg-gray-900 text-yellow-400">
<tr>
<th className="p-3 border text-left">Service</th>
<th className="p-3 border text-left">Rate (₹)</th>
<th className="p-3 border text-left">Unit</th>
</tr>
</thead>
<tbody className="text-white">
<tr><td className="p-3 border">French Polish</td><td className="p-3 border">38</td><td className="p-3 border">Per Sq. Ft.</td></tr>
<tr><td className="p-3 border">French Polish White Zinc</td><td className="p-3 border">42</td><td className="p-3 border">Per Sq. Ft.</td></tr>
<tr><td className="p-3 border">Melamine Antic</td><td className="p-3 border">195</td><td className="p-3 border">Per Sq. Ft.</td></tr>
<tr><td className="p-3 border">Melamine Matt (3 Coats)</td><td className="p-3 border">110</td><td className="p-3 border">Per Sq. Ft.</td></tr>
<tr><td className="p-3 border">Melamine Glossy (3 Coats)</td><td className="p-3 border">120</td><td className="p-3 border">Per Sq. Ft.</td></tr>
<tr><td className="p-3 border">PU Matt Finish</td><td className="p-3 border">240</td><td className="p-3 border">Per Sq. Ft.</td></tr>
<tr><td className="p-3 border">PU Semi Gloss</td><td className="p-3 border">250</td><td className="p-3 border">Per Sq. Ft.</td></tr>
<tr><td className="p-3 border">2K Metallic Paint</td><td className="p-3 border">330</td><td className="p-3 border">Per Sq. Ft.</td></tr>
<tr><td className="p-3 border">Colour Lamination</td><td className="p-3 border">500</td><td className="p-3 border">Per Sq. Ft.</td></tr>
<tr><td className="p-3 border">Colour Lamination Pearl</td><td className="p-3 border">580</td><td className="p-3 border">Per Sq. Ft.</td></tr>
<tr><td className="p-3 border">Imported Polyester Lamination</td><td className="p-3 border">440</td><td className="p-3 border">Per Sq. Ft.</td></tr>
</tbody>
</table>

            <table className="w-full border border-gray-700 text-sm">
              <thead className="bg-gray-900 text-yellow-400">
                <tr>
                  <th className="p-3 border text-left">Service</th>
                  <th className="p-3 border text-left">Rate (₹)</th>
                  <th className="p-3 border text-left">Unit</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border">Luster / Acrylic Emulsion</td><td className="p-3 border">38</td><td className="p-3 border">Per Sq Ft</td></tr>
                <tr><td className="p-3 border">Dark Shade Luster</td><td className="p-3 border">50</td><td className="p-3 border">Per Sq Ft</td></tr>
                <tr><td className="p-3 border">Enamel (3 Coats)</td><td className="p-3 border">38</td><td className="p-3 border">Per Sq Ft</td></tr>
                <tr><td className="p-3 border">Enamel (Water Cutting)</td><td className="p-3 border">68.25</td><td className="p-3 border">Per Sq Ft</td></tr>
                <tr><td className="p-3 border">Texture Finish</td><td className="p-3 border">55</td><td className="p-3 border">Per Sq Ft</td></tr>
                <tr><td className="p-3 border">Heavy Texture</td><td className="p-3 border">115</td><td className="p-3 border">Per Sq Ft</td></tr>
              </tbody>
            </table>
          </div>

     

          {/* NOTES */}
         <div className="mt-12 text-sm text-gray-300 space-y-2">
<p>• Cleaning & covering charges extra as per requirement.</p>
<p>• Above 10 ft height measurement = 1.5 times.</p>
<p>• Lamination on ceiling = 2 times measurement.</p>
<p>• Round surface measurement = 2 times.</p>
<p>• Out of Mumbai projects = 20% extra.</p>
<p className='text-yellow-400'>• Payment Terms: 50% Advance | 45% During Work | 5% After Completion.</p>
</div>

        </div>
      </section>
    </>
  )
}