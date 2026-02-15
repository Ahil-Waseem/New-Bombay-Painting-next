import { CheckCircle, Clock, Sparkles } from "lucide-react";

export function UspBar() {
  return (
    <section className="relative z-20 bg-black">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div
          className="
            -mt-8
            rounded-xl
            bg-black/85
            backdrop-blur-xl
            border border-white/10
            shadow-[0_15px_50px_rgba(0,0,0,0.6)]
            flex items-center justify-between
            divide-x divide-white/10
          "
        >
          {/* USP 1 */}
          <div className="flex items-center gap-3 px-3 sm:px-6 py-4 flex-1 justify-center">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
            <p className="text-xs sm:text-base font-semibold text-white text-left leading-tight">
              Flawless Finish,
              <span className="block text-yellow-400">Guaranteed!</span>
            </p>
          </div>

          {/* USP 2 */}
          <div className="flex items-center gap-3 px-3 sm:px-6 py-4 flex-1 justify-center">
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
            <p className="text-xs sm:text-base font-semibold text-white text-left leading-tight">
              On-time Completion,
              <span className="block text-yellow-400">Guaranteed!</span>
            </p>
          </div>

          {/* USP 3 */}
          <div className="flex items-center gap-3 px-3 sm:px-6 py-4 flex-1 justify-center">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
            <p className="text-xs sm:text-base font-semibold text-white text-left leading-tight">
              Post-painting Cleanup,
              <span className="block text-yellow-400">Guaranteed!</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
