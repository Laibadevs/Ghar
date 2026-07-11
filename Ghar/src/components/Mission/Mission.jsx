import { motion } from "framer-motion";
import { Layers, ShieldCheck, Globe } from "lucide-react";

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

const CARDS = [
  {
    icon: Layers,
    title: "Accessible to all",
    desc: "No hidden fees. No broker cuts. Just honest listings at prices students can actually afford.",
  },
  {
    icon: ShieldCheck,
    title: "Verified & safe",
    desc: "Every landlord and every listing is checked. So students and parents can trust what they see.",
  },
  {
    icon: Globe,
    title: "Nationwide reach",
    desc: "Starting with Pakistan's top three student cities, with a vision to cover every campus in the country.",
  },
];

export default function Mission() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 ">
      {/* ── outer rounded green container ── */}
      <div
        className="w-full rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] px-5 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-14 flex flex-col items-center gap-8 sm:gap-10"
        style={{ background: "#1F6F5F" }}
      >
        {/* ── Our Mission pill ── */}
        <motion.div {...fade}>
          <div className="inline-flex items-center justify-center bg-[rgba(255,255,255,0.18)] border border-white/20 rounded-full px-7 py-2.5">
            <span className="font-serif text-[1rem] sm:text-[1.1rem] font-normal text-white tracking-wide">
              Our Mission
            </span>
          </div>
        </motion.div>

        {/* ── Headline ── */}
        <motion.h1
          {...fadeDelay(0.1)}
          className="font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-normal text-white text-center leading-tight tracking-tight"
        >
          Housing is hard.
          <br />
          Finding it shouldn't be
        </motion.h1>

        {/* ── Subtitle ── */}
        <motion.p
          {...fadeDelay(0.2)}
          className="text-[0.88rem] sm:text-[0.95rem] text-white/80 text-center leading-relaxed max-w-[640px] -mt-4"
        >
          We believe every student deserves a safe, affordable place to call
          home — without scams, without endless calls, and without settling for
          less.
        </motion.p>

        {/* ── Cards ── */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-2">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                {...fadeDelay(0.25 + i * 0.12)}
                className="flex items-start gap-7 border border-[#ffffff26] rounded-2xl px-6 sm:px-8 py-6 sm:py-8
                  shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)]
                  hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex-col"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Icon box */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/15 flex items-center justify-center">
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-[1.2rem] sm:text-[1.35rem] font-normal text-white leading-snug -mt-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[0.82rem] sm:text-[0.88rem] text-white/70 leading-relaxed font-sans -mt-2">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
