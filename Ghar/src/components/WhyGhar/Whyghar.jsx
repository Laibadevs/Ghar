import { motion } from "framer-motion";
import {
  MapPin,
  MessageCircle,
  Share2,
  Users,
  Heart,
  ShieldCheck,
  Building2,
} from "lucide-react";
// Smooth easing curve (easeOutExpo-like) used across room.pk-style reveals
const EASE = [0.22, 1, 0.36, 1];
const fade = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.9, ease: EASE },
};
const fadeDelay = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.9, ease: EASE, delay },
});
const FEATURES = [
  {
    icon: MapPin,
    title: "Map-first browsing",
    desc: "See every hostel and shared room plotted around your campus. Walk-time, not guesswork.",
  },
  {
    icon: MessageCircle,
    title: "Pick your roommate",
    desc: "Browse verified student profiles by university, budget and habits. Match with someone you actually vibe with before you move in.",
  },
  {
    icon: Share2,
    title: "Share with Parents",
    desc: "One tap sends a clean summary — price, distance, facilities, safety score and landlord verification — straight to WhatsApp or email.",
  },
  {
    icon: Users,
    title: "Student & landlord views",
    desc: "Students browse and book. Landlords list, manage inquiries and confirm bookings — one app.",
  },
  {
    icon: Heart,
    title: "Save & compare",
    desc: "Wishlist your top picks, compare them side-by-side, and share the shortlist with your parents.",
  },
  {
    icon: ShieldCheck,
    title: "Verified listings",
    desc: "Every landlord is ID-checked and every address is visited. Safer for you, easier for your family.",
  },
  {
    icon: Building2,
    title: "University-Based Search",
    desc: "Search accommodation by university name, nearby areas, or city to quickly discover rooms near your campus.",
  },
];
// Container that staggers children — gives that fluid room.pk cascade feel
const gridContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.12, delayChildren: 0.05 },
};
const cardVariant = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE },
};
export default function WhyGhar() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16">
      {/* ── Header ── */}
      <motion.p
        {...fade}
        className="text-[0.88rem] font-bold tracking-wide text-[#2FA084] mb-3"
      >
        WHY GHAR
      </motion.p>
      <motion.h1
        {...fadeDelay(0.15)}
        className="font-serif text-[2rem] sm:text-[2.4rem] md:text-[2.8rem] lg:text-[3.2rem] font-normal text-black leading-tight mb-8 sm:mb-10 lg:mb-12"
      >
        Everything Facebook groups{" "}
        <span className="block sm:inline">
          <span className="text-[#2FA084]">never had</span>
          <span className="text-black">.</span>
        </span>
      </motion.h1>
      {/* Row 1 */}
      <motion.div
        variants={gridContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-4 sm:mb-5"
      >
        {FEATURES.slice(0, 4).map((f) => (
          <FeatureCard key={f.title} f={f} />
        ))}
      </motion.div>
      {/* Row 2 */}
      <motion.div
        variants={gridContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-4 sm:mb-5"
      >
        {FEATURES.slice(4, 7).map((f) => (
          <FeatureCard key={f.title} f={f} />
        ))}
      </motion.div>
    </section>
  );
}
function FeatureCard({ f }) {
  const Icon = f.icon;
  return (
    <motion.div
      variants={cardVariant}
      whileHover={{
        y: -6,
        boxShadow: "0 12px 32px rgba(47,160,132,0.22)",
        transition: { duration: 0.35, ease: EASE },
      }}
      className="bg-white border border-gray-100 hover:border-[#2FA084] rounded-[20px] shadow-[2px_4px_16px_rgba(0,0,0,0.06)] px-5 py-6 sm:px-6 sm:py-7 lg:px-8 lg:py-8 flex flex-col gap-4 sm:gap-5 cursor-pointer transition-colors duration-300"
    >
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[12px] bg-[rgba(47,160,132,0.12)] flex items-center justify-center">
        <Icon
          className="w-5 h-5 sm:w-6 sm:h-6 text-[#2FA084]"
          strokeWidth={1.6}
        />
      </div>
      <h3 className="font-serif text-[1.15rem] sm:text-[1.25rem] lg:text-[1.35rem] font-normal text-black leading-snug">
        {f.title}
      </h3>
      <p className="text-[0.82rem] sm:text-[0.85rem] lg:text-[0.88rem] text-gray-400 leading-relaxed font-sans">
        {f.desc}
      </p>
    </motion.div>
  );
}
