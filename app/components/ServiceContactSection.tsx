"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ServiceContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    services: [] as string[],
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleService = (s: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    // 1️⃣ ADMIN EMAIL (team ko jaata hai)
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name: form.name,
        phone: form.phone,
        email: form.email,
        city: form.city,
        services: form.services.join(", "),
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    // 2️⃣ AUTO-REPLY EMAIL (client ko jaata hai)
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!,
      {
        name: form.name,
        phone: form.phone,
        email: form.email, // 👈 client ka email
        city: form.city,
        services: form.services.join(", "),
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    setSuccess(true);
    setForm({
      name: "",
      phone: "",
      email: "",
      city: "",
      services: [],
    });
  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <section className="w-full bg-white">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="relative min-h-[420px]">
            <Image
              src="/images/services/exterior.webp"
              alt="Site Visit"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 flex items-center">
              <div className="pl-16 max-w-lg">
                <h2 className="text-white text-4xl md:text-6xl font-semibold">
                  Unlock Better Results <br /> With a Site Visit
                </h2>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="px-5 py-5 md:px-40 py-30">
            <h3 className="text-2xl font-semibold">Book Site Visit</h3>
            <p className="text-gray-600 mt-2 mb-8">
              Get proper inspection and painting guidance from our experts.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                required
                placeholder="Full Name"
                className="w-full border px-4 py-3 text-sm"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                required
                placeholder="Phone Number"
                className="w-full border px-4 py-3 text-sm"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />

              <input
                placeholder="Email (Optional)"
                className="w-full border px-4 py-3 text-sm"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <input
                placeholder="City / Location"
                className="w-full border px-4 py-3 text-sm"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />

              <div>
                <p className="text-sm font-medium mb-3">Service Required</p>
                <div className="flex gap-6 text-sm">
                  {["Interior", "Exterior", "Waterproofing"].map((s) => (
                    <label key={s} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={form.services.includes(s)}
                        onChange={() => toggleService(s)}
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 text-sm font-medium disabled:opacity-60"
              >
                {loading ? "Submitted" : "Request Site Visit"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md text-center">
            <h4 className="text-lg font-semibold text-green-600">
              Request Sent Successfully
            </h4>
            <p className="text-sm mt-2">
              Our team will contact you shortly.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-4 bg-black text-white px-6 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
