import { motion } from "framer-motion";

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

const STATS = [
  { num: "3", label: "Cities" },
  { num: "2,300+", label: "Students housed" },
  { num: "50+", label: "Landlords" },
  { num: "2", label: "Team Members" },
];

export default function AboutUs() {
  return (
    <section className="w-full bg-white px-4 sm:px-8 md:px-12 lg:px-20 pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16">
      {/* ── TOP — ABOUT US label + headline + body ── */}
      <motion.p
        {...fade}
        className="text-[0.88rem] font-bold tracking-wide text-[#2FA084] mb-3"
      >
        ABOUT US
      </motion.p>

      <motion.h1
        {...fadeDelay(0.1)}
        className="font-serif text-[2.4rem] sm:text-[2.8rem] lg:text-[3.2rem] font-normal text-black leading-tight mb-5"
      >
        Built to make{" "}
        <span className="text-[#2FA084]">
          student
          <br className="hidden sm:block" /> housing
        </span>{" "}
        simpler and safer
      </motion.h1>

      <motion.p
        {...fadeDelay(0.2)}
        className="text-[0.92rem] sm:text-[0.95rem] text-gray-400 leading-relaxed max-w-[780px] mb-14 sm:mb-16"
      >
        Ghar helps students discover trusted hostels, rooms, and apartments near
        their university through verified listings, map-based browsing, and
        direct landlord communication. Built around real student struggles, Ghar
        makes finding accommodation faster, more transparent, and less
        stressful.
      </motion.p>

      {/* ── BOTTOM — quote card left + story right ── */}
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
        {/* ── LEFT — quote card with 2026 badge ── */}
        <motion.div
          {...fadeDelay(0.25)}
          className="relative w-full lg:w-[380px] lg:shrink-0"
        >
          {/* Quote card */}
          <div
            className="flex items-start gap-7 bg-white border border-[#2FA084] rounded-2xl px-8 py-8
              shadow-[0_4px_12px_rgba(47,160,132,0.12)] hover:shadow-[0_8px_24px_rgba(47,160,132,0.2)]
              hover:-translate-y-0.5 transition-all duration-200 cursor-pointer
              flex-col items-center text-center min-h-[320px] sm:min-h-[360px]"
            style={{
              background: "linear-gradient(160deg, #f0faf7 0%, #e6f5f0 100%)",
            }}
          >
            {/* Big quote mark */}
            <div className="flex justify-center mb-4">
              <svg width="52" height="42" viewBox="0 0 52 42" fill="none">
                <path
                  d="M0 26h14c0-7.73-6.27-14-14-14v14zM28 26h14c0-7.73-6.27-14-14-14v14z"
                  fill="#2FA084"
                  opacity="0.35"
                />
                <path d="M0 26v16h14V26H0zM28 26v16h14V26H28z" fill="#2FA084" />
              </svg>
            </div>

            {/* Quote text */}
            <p className="font-serif text-[1.25rem] sm:text-[1.35rem] font-bold text-[#2FA084] leading-snug text-center">
              "We built the tool we wished existed when we moved to Lahore for
              university."
            </p>
          </div>

          {/* 2026 Founded badge — overlaps bottom right of card */}
          <motion.div
            {...fadeDelay(0.45)}
            className="absolute -bottom-6 right-6 bg-[#2FA084] text-white rounded-2xl px-7 py-4 shadow-[0_8px_24px_rgba(47,160,132,0.35)] ayr z-10"
          >
            <div className="font-serif text-[2rem] font-normal leading-none">
              2026
            </div>
            <div className="text-[0.82rem] text-white/80 mt-1">Founded</div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT — OUR STORY + text + stats ── */}
        <div className="flex-1 w-full flex flex-col gap-6 lg:pt-0 pt-8">
          {/* OUR STORY pill */}
          <motion.div {...fadeDelay(0.3)}>
            <div className="inline-flex items-center border border-gray-200 rounded-full px-5 py-2">
              <span className="text-[0.82rem] font-semibold text-gray-500 tracking-wider uppercase">
                Our Story
              </span>
            </div>
          </motion.div>

          {/* Story headline */}
          <motion.h2
            {...fadeDelay(0.35)}
            className="font-serif text-[2rem] sm:text-[2.4rem] lg:text-[2.8rem] font-normal text-black leading-tight"
          >
            Built by students who lived{" "}
            <span className="text-[#2FA084]">the chaos firsthand.</span>
          </motion.h2>

          {/* Story paragraphs */}
          <motion.div {...fadeDelay(0.4)} className="flex flex-col gap-4">
            <p className="text-[0.9rem] sm:text-[0.95rem] text-gray-400 leading-relaxed">
              Three years ago, we landed in Lahore for our first semester at
              LUMS. What followed were weeks of endless WhatsApp forwards, fake
              listings, and a room that looked nothing like its photos.
            </p>
            <p className="text-[0.9rem] sm:text-[0.95rem] text-gray-400 leading-relaxed">
              We built Roomi to fix that. Every feature — the map, the filters,
              the verified photos — came from a real frustration we faced.
              Today, we're helping thousands of Pakistani students find clean,
              safe housing near campus without the headache.
            </p>
          </motion.div>

          {/* Stats row */}
          <div className="flex items-start gap-6 sm:gap-10 pt-2 flex-wrap">
            {STATS.map(({ num, label }, i) => (
              <motion.div
                key={label}
                {...fadeDelay(0.45 + i * 0.08)}
                className="flex flex-col items-start"
              >
                <span className="font-serif text-[1.8rem] sm:text-[2rem] font-normal text-black leading-none">
                  {num}
                </span>
                <span className="text-[0.8rem] text-gray-400 mt-1 font-sans">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
