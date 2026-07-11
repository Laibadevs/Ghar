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

export default function CTA() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-10 pb-12 sm:pb-14 md:pb-16 bg-[#f5f5f3]">
      <motion.div
        {...fade}
        className="max-w-7xl mx-auto rounded-[24px] flex flex-col items-center py-10 sm:py-12 md:py-14 px-6 sm:px-8 md:px-10 gap-3"
        style={{
          background: "linear-gradient(90deg, #2FA084 40.87%, #1F6F5F 100%)",
        }}
      >
        <motion.h1
          {...fadeDelay(0.1)}
          className="font-serif text-[1.7rem] sm:text-[2rem] md:text-[2.2rem] font-normal text-white text-center leading-snug"
        >
          Your next room is one search away.
        </motion.h1>
        <motion.p
          {...fadeDelay(0.2)}
          className="text-[0.85rem] sm:text-[0.9rem] md:text-[0.92rem] font-sans text-white/80 text-center leading-relaxed max-w-lg"
        >
          Join thousands of students who skipped the Facebook groups
          <br className="hidden sm:block" />
          and found home on Ghar
        </motion.p>
        <motion.div {...fadeDelay(0.3)}>
          <Link
            to="/search"
            className="inline-block mt-3 bg-white text-[#2FA084] font-semibold text-[0.9rem] sm:text-[0.95rem] px-6 sm:px-8 py-3 rounded-full hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Find your room now →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
