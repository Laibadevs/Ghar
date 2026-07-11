import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const fadeDelay = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});

export default function ForLandlords() {
  return (
    <section className="w-full  px-4 sm:px-8 md:px-12 lg:px-20 pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        {/* ── LEFT — text ── */}
        <div className="w-full lg:max-w-[600px] flex flex-col gap-5">
          {/* FOR LANDLORDS label */}
          <motion.p
            {...fade}
            className="text-[0.88rem] font-bold tracking-wide text-[#2FA084]"
          >
            FOR LANDLORDS
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeDelay(0.1)}
            className="font-serif text-[2.4rem] sm:text-[2.8rem] lg:text-[3.2rem] font-normal text-black leading-[1.1] tracking-tight"
          >
            Fill your rooms with{" "}
            <span className="text-[#2FA084]">serious students</span> — not 200
            random calls.
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeDelay(0.2)}
            className="text-[0.92rem] sm:text-[0.95rem] text-gray-400 leading-relaxed max-w-[400px]"
          >
            List your property for free. We verify it, take real photos, and
            only forward inquiries from matching students.
          </motion.p>

          {/* CTA button */}
          <motion.div {...fadeDelay(0.3)}>
            <Link
              to="/landlords"
              className="inline-flex items-center gap-3 bg-[#1F6F5F] text-white font-semibold text-[1rem] px-7 py-4 rounded-2xl hover:bg-[#2FA084] transition-colors duration-200 mt-2 w-fit"
            >
              List your property
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3 9h12M10 5l4 4-4 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* ── RIGHT — 2x2 stat cards ── */}
        <div className="flex-1 grid grid-cols-2 gap-80 sm:gap-5">
          {/* Card 1 — 0% Listing Fee */}
          <motion.div
            {...fadeDelay(0.2)}
            className="flex items-start gap-7 bg-white border border-[#2FA084] rounded-2xl px-6 sm:px-8 py-6 sm:py-8
              shadow-[0_4px_12px_rgba(47,160,132,0.12)] hover:shadow-[0_8px_24px_rgba(47,160,132,0.2)]
              hover:-translate-y-0.5 transition-all duration-200 cursor-pointer
              flex-col ab1"
          >
            {/* Dot indicator */}
            <div className="w-8 h-8 rounded-xl bg-[rgba(47,160,132,0.15)] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2FA084]" />
            </div>
            {/* Number */}
            <div className="flex items-end gap-1 mt-2">
              <span className="font-serif text-[3.5rem] sm:text-[4rem] font-normal text-[#2FA084] leading-none">
                0
              </span>
              <span className="font-serif text-[2rem] sm:text-[2.4rem] font-normal text-[#2FA084] leading-none mb-1">
                %
              </span>
            </div>
            {/* Label */}
            <p className="text-[0.72rem] font-bold tracking-widest text-gray-400 uppercase mt-1">
              Listing Fee
            </p>
          </motion.div>

          {/* Card 2 — 48h Avg Inquiry (dark green) */}
          <motion.div
            {...fadeDelay(0.3)}
            className="flex flex-col bg-[#1F6F5F] rounded-2xl px-6 sm:px-8 py-6 sm:py-8
              shadow-[0_4px_12px_rgba(31,111,95,0.25)] hover:shadow-[0_8px_24px_rgba(31,111,95,0.35)]
              hover:-translate-y-0.5 transition-all duration-200 cursor-pointer ab3"
          >
            {/* Dot indicator */}
            <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-white/60" />
            </div>
            {/* Number */}
            <span className="font-serif text-[3.5rem] sm:text-[4rem] font-normal text-white leading-none mt-2">
              48 h
            </span>
            {/* Label */}
            <p className="text-[0.72rem] font-bold tracking-widest text-white/60 uppercase mt-3">
              Avg. Inquiry
            </p>
          </motion.div>

          {/* Card 3 — 5 Verification */}
          <motion.div
            {...fadeDelay(0.4)}
            className="flex items-start gap-7 bg-white border border-[#2FA084] rounded-2xl px-6 sm:px-8 py-6 sm:py-8
              shadow-[0_4px_12px_rgba(47,160,132,0.12)] hover:shadow-[0_8px_24px_rgba(47,160,132,0.2)]
              hover:-translate-y-0.5 transition-all duration-200 cursor-pointer
              flex-col ab2"
          >
            {/* Dot indicator — amber */}
            <div className="w-8 h-8 rounded-xl bg-[rgba(245,166,35,0.15)] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F5A623]" />
            </div>
            {/* Number */}
            <span className="font-serif text-[3.5rem] sm:text-[4rem] font-normal text-[#2FA084] leading-none mt-2">
              5
            </span>
            {/* Label */}
            <p className="text-[0.72rem] font-bold tracking-widest text-gray-400 uppercase mt-1">
              Verification
            </p>
          </motion.div>

          {/* Card 4 — 1.2k+ Active Landlords */}
          <motion.div
            {...fadeDelay(0.5)}
            className="flex items-start gap-7 bg-white border border-[#2FA084] rounded-2xl px-6 sm:px-8 py-6 sm:py-8
              shadow-[0_4px_12px_rgba(47,160,132,0.12)] hover:shadow-[0_8px_24px_rgba(47,160,132,0.2)]
              hover:-translate-y-0.5 transition-all duration-200 cursor-pointer
              flex-col"
            style={{ animation: "bx1 4.5s ease-in-out infinite 1.2s" }}
          >
            {/* Dot indicator */}
            <div className="w-8 h-8 rounded-xl bg-[rgba(47,160,132,0.15)] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#2FA084]" />
            </div>
            {/* Number */}
            <span className="font-serif text-[3.5rem] sm:text-[4rem] font-normal text-[#2FA084] leading-none mt-2">
              1.2k+
            </span>
            {/* Label */}
            <p className="text-[0.72rem] font-bold tracking-widest text-gray-400 uppercase mt-1">
              Active Landlords
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
