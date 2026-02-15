"use client";

import {
  Users,
  Palette,
  ShieldCheck,
  Award,
  Home,
  Clock
} from "lucide-react";

export default function WhyChooseUsPremium() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Why Homeowners Trust New Bombay Painting
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Quality workmanship, transparent process, and reliable delivery —
            that’s what sets us apart.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-20">

          <Card
            icon={<Users className="icon-yellow" />}
            title="Professional Site Assessment"
            desc="Every project begins with proper inspection and expert planning."
          />

          <Card
            icon={<Palette className="icon-yellow animate-pulse" />}
            title="Smart Colour Guidance"
            desc="Colour suggestions based on lighting, space usage, and durability."
          />

          <Card
            icon={<ShieldCheck className="icon-yellow tick-animate" />}
            title="Trained & Supervised Team"
            desc="Skilled painters working under strict quality supervision."
          />
        </div>

        {/* Bottom Animated Bar */}
        <div className="rounded-3xl bg-gradient-to-r from-yellow-100 to-red-200 py-12 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-900">

            {/* Award */}
            <div className="flex flex-col items-center gap-3">
              <Award className="w-15 h-15 award-glow" />
              <p className="font-medium text-sm">Premium Finish Quality</p>
            </div>

            {/* Warranty */}
            <div className="flex flex-col items-center gap-3">
              <ShieldCheck className="w-15 h-15 tick-animate" />
              <p className="font-medium text-sm">Workmanship Warranty</p>
            </div>

            {/* House */}
            <div className="flex flex-col items-center gap-3">
              <Home className="w-15 h-15 house-paint" />
              <p className="font-medium text-sm">
                Exterior & Interior Protection
              </p>
            </div>

            {/* Clock */}
            <div className="flex flex-col items-center gap-3">
              <Clock className="w-15 h-15 clock-spin" />
              <p className="font-medium text-sm">
                On-Time Delivery Promise
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Animations */}
      <style jsx>{`
        .icon-yellow {
          width: 2rem;
          height: 2rem;
          color: #f59e0b;
        }

        /* Clock needle movement */
        .clock-spin {
          animation: clock 4s linear infinite;
          transform-origin: center;
        }

        @keyframes clock {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Warranty tick animation */
        .tick-animate {
          animation: tick 1.5s ease-in-out infinite;
        }

        @keyframes tick {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
        }

        /* House colour paint effect */
        .house-paint {
          animation: paint 3.5s ease-in-out infinite;
        }

        @keyframes paint {
          0% { color: #f59e0b; }
          33% { color: #fde047; }
          66% { color: #fb923c; }
          100% { color: #f59e0b; }
        }

        /* Gold award shine */
        .award-glow {
          color: #facc15;
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes glow {
          0% {
            filter: drop-shadow(0 0 0px #facc15);
          }
          50% {
            filter: drop-shadow(0 0 8px #fde047);
          }
          100% {
            filter: drop-shadow(0 0 0px #facc15);
          }
        }
      `}</style>
    </section>
  );
}

function Card({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-yellow-100 mb-6">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
