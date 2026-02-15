export const metadata = {
  title: "About Us | New Bombay Painting – 30+ Years of Excellence",
  description:
    "Learn about New Bombay Painting – trusted painting, interiors, texture, polish and finishing experts serving Mumbai and beyond for over 30 years.",
};

export default function AboutPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO / VIDEO BANNER ================= */}
      <section className="relative w-full h-[60vh] md:h-[110vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="/images/about/homevideo.mp4"   
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 h-full flex items-center px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              <span className="block text-yellow-400">
                New Bombay Painting
              </span>
              Trusted Painting, Interiors & Finishes
            </h1>
            <p className="mt-4 text-gray-300 text-lg md:text-xl">
              Serving Mumbai & Beyond with quality, discretion and craftsmanship
              for over <strong>30 years</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}
      <section className="py-14 md:py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold">
              Excellence Built on Experience & Trust
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              For three decades, <span className="text-yellow-400 font-semibold">New Bombay Painting</span> has
              transformed homes, luxury bungalows and jewellery showrooms with
              precision workmanship, premium materials and unmatched attention
              to detail.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Our teams have successfully completed projects across{" "}
              <span className="text-yellow-500 font-semibold">Mumbai</span>,{" "}
              <span className="text-blue-500 font-semibold">Lonavala</span>,{" "}
              <span className="text-red-500 font-semibold">Pune</span>,{" "}
              <span className="text-green-500 font-semibold">Khandala</span>, as well as
              cities like{" "}
              <span className="text-yellow-500 font-semibold">Jamshedpur</span>,{" "}
              <span className="text-blue-500 font-semibold">Nashik</span> and{" "}
              <span className="text-red-500 font-semibold">Hyderabad</span>.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              From well-known jewellery showrooms to high-end private residences,
              we continue to deliver consistent quality while maintaining
              complete client discretion.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <Stat number="30+" label="Years of Expertise" />
              <Stat number="100%" label="Client Trust" />
              <Stat number="300+" label="Skilled Workforce" />
            </div>

            <p className="text-sm text-gray-400">
              <strong>Privacy & Discretion:</strong> We respect client privacy,
              especially for high-profile residential and celebrity projects.
              Select references and case studies are shared during on-site
              discussions.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                Notable Projects
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Bharti Jewellers (Thane), Surbhi Jewellers, Chintamani Jewellers,
                premium jewellery showrooms in Prabhadevi and multiple luxury
                bungalows in Lonavala & Khandala.
              </p>

              <p className="mt-3 text-sm text-gray-400">
                We have also completed discreet private works for clients in the
                film and sports industry.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                Our Services
              </h3>

              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Interior & exterior painting</li>
                <li>• Texture & decorative finishes</li>
                <li>• PU, matte & high-gloss polish work</li>
                <li>• Lamination & interior finishing</li>
                <li>• Complete site project management</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

/* ================= SMALL STAT COMPONENT ================= */

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-white">{number}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}
