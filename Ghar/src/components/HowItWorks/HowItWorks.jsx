import { motion } from "framer-motion";

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  },
};

const fadeDelay = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

const STEPS = [
  {
    num: "01",
    title: "Pick your campus",
    desc: "Search by university or city or area and discover verified hostels, rooms and apartments nearby.",
  },
  {
    num: "02",
    title: "Browse the map",
    desc: "Filter by budget, gender, facilities, and walking distance. Open any listing to explore photos, rules, and room details.",
  },
  {
    num: "03",
    title: "Save & connect",
    desc: "Wishlist your favourites, chat the landlord, book a visit — or reserve online.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full  px-4 sm:px-8 md:px-12 lg:px-20 pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16">
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
        {/* ── LEFT ── */}
        <div className="w-full lg:w-[550px] lg:shrink-0">
          {/* HOW ITS WORKS label */}
          <motion.p
            {...fade}
            className="text-[0.88rem] font-bold tracking-wide text-[#2FA084] mb-4"
          >
            HOW ITS WORKS
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeDelay(0.1)}
            className="font-serif text-[2.6rem] sm:text-[3rem] lg:text-[3.4rem] font-normal text-black leading-[1.08] tracking-tight mb-5"
          >
            From{" "}
            <span className="text-[#2FA084]">
              "where
              <br className="hidden sm:block" /> do I live?"
            </span>{" "}
            to
            <br />
            keys in hand.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            {...fadeDelay(0.2)}
            className="text-[0.95rem] text-gray-400 leading-relaxed max-w-[340px]"
          >
            Most students sign their first lease in under a week with Ghar —
            without flying in for visits.
          </motion.p>
        </div>

        {/* ── RIGHT — steps ── */}
        <div className="flex-1 w-full max-w-[900px] flex flex-col gap-5">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              {...fadeDelay(0.15 + i * 0.15)}
              className="flex items-start gap-7 bg-white border border-[#2FA084] rounded-2xl px-6 sm:px-8 py-7 sm:py-8
                shadow-[0_4px_12px_rgba(47,160,132,0.12)] hover:shadow-[0_8px_24px_rgba(47,160,132,0.2)]
                hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              {/* Step number */}
              <span className="font-serif text-[2rem] sm:text-[2.4rem] font-bold text-[#2FA084] leading-none shrink-0 mt-1">
                {step.num}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-2.5">
                <h2 className="font-serif text-[1.5rem] sm:text-[1.7rem] lg:text-[1.9rem] font-normal text-black leading-tight">
                  {step.title}
                </h2>
                <p className="text-[0.88rem] sm:text-[0.92rem] text-gray-400 leading-relaxed font-sans max-w-[600px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
