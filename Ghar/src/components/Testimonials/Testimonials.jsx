import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import s6 from "../../assets/s6.png";
import s7 from "../../assets/s7.png";
import s8 from "../../assets/s8.png";
import s9 from "../../assets/s9.png";
import s10 from "../../assets/s10.png";
const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};
// Scattered top portraits — positions in % (left, top) + size + rotation
const SCATTER = [
  { src: s1, left: "2%", top: "0%", w: 110, h: 150, r: -6 },
  { src: s6, left: "0%", top: "38%", w: 120, h: 160, r: 4 },
  { src: s3, left: "14%", top: "22%", w: 100, h: 140, r: 5 },
  { src: s2, left: "26%", top: "4%", w: 110, h: 150, r: -4 },
  { src: s5, left: "42%", top: "26%", w: 120, h: 160, r: 2 },
  { src: s7, left: "58%", top: "6%", w: 110, h: 150, r: 3 },
  { src: s4, left: "72%", top: "0%", w: 110, h: 150, r: -3 },
  { src: s8, left: "74%", top: "38%", w: 100, h: 140, r: 6 },
  { src: s9, left: "88%", top: "2%", w: 120, h: 160, r: -5 },
  { src: s10, left: "90%", top: "42%", w: 110, h: 150, r: 4 },
];
const REVIEWS = [
  {
    text: "Ghar helped me find a hostel just 5 minutes away from University. The photos were exactly as shown!",
    name: "Amber",
    role: "Fast University, Lahore",
    avatar: s2,
  },
  {
    text: "Very easy to use platform. I compared multiple rooms and found the best one within my budget.",
    name: "Laiba",
    role: "Lahore College Women University, Lahore",
    avatar: s5,
  },
  {
    text: "No brokers, direct contact with landlord. Saved time, money and a lot of hassle.",
    name: "Usman",
    role: "NUST, Islamabad",
    avatar: s3,
  },
];
function PopImage({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        delay: i * 0.08,
        type: "spring",
        stiffness: 220,
        damping: 14,
      }}
      whileHover={{ scale: 1.06, rotate: 0, zIndex: 20 }}
      className="absolute rounded-[22px] overflow-hidden shadow-xl ring-1 ring-black/5"
      style={{
        left: item.left,
        top: item.top,
        width: item.w,
        height: item.h,
        transform: `rotate(${item.r}deg)`,
      }}
    >
      <img
        src={item.src}
        alt="Happy student"
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
}
// Responsive scaled version for mobile — a simple avatar row
function MobileScatter() {
  return (
    <div className="md:hidden flex justify-center flex-wrap gap-3 mb-8">
      {SCATTER.slice(0, 8).map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.5,
            delay: i * 0.06,
            type: "spring",
            stiffness: 220,
            damping: 14,
          }}
          className="w-14 h-16 rounded-[14px] overflow-hidden shadow-md ring-1 ring-black/5"
          style={{ transform: `rotate(${it.r}deg)` }}
        >
          <img
            src={it.src}
            alt="student"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}
const Testimonials = () => {
  return (
    <section className="container py-20 md:py-28">
      {/* Top: scattered portraits + heading */}
      <div className="relative">
        {/* Desktop scatter */}
        <div className="hidden md:block relative h-[280px] w-full">
          {SCATTER.map((it, i) => (
            <PopImage key={i} item={it} i={i} />
          ))}
        </div>
        {/* Mobile scatter */}
        <MobileScatter />
        {/* Heading */}
        <motion.div {...fade} className="relative text-center mt-8 md:mt-10">
          <span className="inline-block text-sm md:text-base font-bold tracking-[0.25em] text-ink">
            TESTIMONIALS
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
            Loved by <span className="text-primary italic">students</span>{" "}
            across Pakistan
          </h2>
          <p className="mt-3 text-muted-foreground text-base md:text-lg">
            Thousands of Students have already found their perfect place with
            Ghar
          </p>
        </motion.div>
      </div>
      {/* Review cards */}
      <div className="mt-14 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <motion.article
            key={i}
            {...fade}
            transition={{ ...fade.transition, delay: i * 0.1 }}
            className="rounded-[22px] border border-primary/25 bg-card p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col"
          >
            <Quote
              className="h-8 w-8 text-primary"
              strokeWidth={2.5}
              fill="currentColor"
            />
            <p className="mt-4 text-[0.95rem] md:text-base text-foreground/85 leading-relaxed flex-1">
              {r.text}
            </p>
            <div className="mt-5 flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star
                  key={k}
                  className="h-4 w-4"
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3">
              <img
                src={r.avatar}
                alt={r.name}
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/20"
              />
              <div>
                <div className="font-semibold text-foreground text-sm">
                  {r.name}
                </div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
