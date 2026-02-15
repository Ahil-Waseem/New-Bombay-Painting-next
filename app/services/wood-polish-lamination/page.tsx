export const metadata = {
  title: "Wood Polish & Lamination Services | New Bombay Painting",
  description:
    "Premium wood polish and lamination services in Mumbai. Coming soon with complete service details.",
};

export default function WoodPolishLaminationPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
          Wood Polish & Lamination
        </h1>

        <p className="text-gray-300 text-lg mb-8">
          We are preparing detailed information about our premium wood polish
          and lamination services. This page will be updated very soon.
        </p>

        <div className="border border-yellow-500/40 rounded-lg p-6 bg-white/5">
          <p className="text-gray-400 text-sm">
            For immediate enquiries, please contact New Bombay Painting for a
            free site visit and consultation.
          </p>
        </div>
      </div>
    </main>
  );
}
