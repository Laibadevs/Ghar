import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import s1 from '../../assets/s1.png'
import s2 from '../../assets/s2.png'
import s3 from '../../assets/s3.png'
import s4 from '../../assets/s4.png'
import s5 from '../../assets/s5.png'
import s6 from '../../assets/s6.png'
import s7 from '../../assets/s7.png'
import s8 from '../../assets/s8.png'
import s9 from '../../assets/s9.png'
import s10 from '../../assets/s10.png'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

const fadeDelay = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, delay },
})

// Scattered portrait positions — tighter, no overlap
const SCATTER = [
  { src: s1,  left: '0%',   top: '0%',  w: 105, h: 138, r: -4 },
  { src: s6,  left: '0%',   top: '50%', w: 105, h: 138, r:  3 },
  { src: s3,  left: '13%',  top: '18%', w: 98,  h: 130, r:  4 },
  { src: s2,  left: '24%',  top: '4%',  w: 105, h: 138, r: -3 },
  { src: s5,  left: '40%',  top: '22%', w: 112, h: 148, r:  2 },
  { src: s7,  left: '56%',  top: '4%',  w: 105, h: 138, r:  3 },
  { src: s4,  left: '68%',  top: '0%',  w: 105, h: 138, r: -3 },
  { src: s8,  left: '68%',  top: '50%', w: 98,  h: 130, r:  4 },
  { src: s9,  left: '82%',  top: '2%',  w: 112, h: 148, r: -4 },
  { src: s10, left: '84%',  top: '50%', w: 105, h: 138, r:  3 },
]

const REVIEWS = [
  {
    text: 'Ghar helped me find a hostel just 5 minutes away from University. The photos were exactly as shown!',
    name: 'Amber',
    role: 'Fast University, Lahore',
    avatar: s2,
  },
  {
    text: 'Very easy to use platform. I compared multiple rooms. and found the best one within my budget.',
    name: 'Laiba',
    role: 'Lahore College Women University, Lahore',
    avatar: s5,
  },
  {
    text: 'No brokers, direct contact with landlord. Saved time, money and a lot of hassle.',
    name: 'Usman',
    role: 'NUST, Islamabad',
    avatar: s3,
  },
]

/* ── Scattered portrait — pops in with spring ── */
function PopImage({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.55,
        delay: i * 0.08,
        type: 'spring',
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
      <img src={item.src} alt="student" loading="lazy" className="h-full w-full object-cover" />
    </motion.div>
  )
}

/* ── Mobile: simple avatar row ── */
function MobileScatter() {
  return (
    <div className="md:hidden flex justify-center flex-wrap gap-3 mb-8">
      {SCATTER.slice(0, 8).map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: i * 0.06, type: 'spring', stiffness: 220, damping: 14 }}
          className="w-14 h-16 rounded-[14px] overflow-hidden shadow-md ring-1 ring-black/5"
          style={{ transform: `rotate(${it.r}deg)` }}
        >
          <img src={it.src} alt="student" loading="lazy" className="h-full w-full object-cover" />
        </motion.div>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-20 pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16">

      {/* ── Desktop scattered portraits ── */}
      <div className="relative hidden md:block w-full mb-10" style={{ height: '320px' }}>
        {SCATTER.map((item, i) => (
          <PopImage key={i} item={item} i={i} />
        ))}

        {/* TESTIMONIALS label centered over mosaic */}
        <motion.div
          {...fadeDelay(0.5)}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20"
        >
          <span className=" font-serif text-[1.8rem] sm:text-[2.5rem] lg:text-[2.5rem] font-normal text-black text-center leading-tight mb-3 uppercase">
            TESTIMONIALS
          </span>
        </motion.div>
      </div>

      {/* ── Mobile portrait row ── */}
      <MobileScatter />

      {/* ── TESTIMONIALS label mobile ── */}
      <motion.div {...fade} className="md:hidden text-center mb-4">
        <span className="font-sans font-semibold text-[0.78rem] tracking-[0.35em] text-gray-500 uppercase">
          TESTIMONIALS
        </span>
      </motion.div>

      {/* ── Headline ── */}
      <motion.h1
        {...fadeDelay(0.55)}
        className="font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-normal text-black text-center leading-tight mb-3"
      >
        Loved by <span className="text-[#2FA084]">students</span> across Pakistan
      </motion.h1>

      {/* ── Subtitle ── */}
      <motion.p
        {...fadeDelay(0.6)}
        className="text-[0.88rem] sm:text-[0.92rem] text-gray-400 text-center mb-10 sm:mb-12"
      >
        Thousands of Students have already found their prefect place with Ghar
      </motion.p>

      {/* ── Review cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {REVIEWS.map((r, i) => (
          <motion.div {...fadeDelay}
            key={r.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-5 bg-white border border-[#2FA084] rounded-2xl px-6 sm:px-8 py-6 sm:py-8
              shadow-[0_4px_12px_rgba(47,160,132,0.12)] hover:shadow-[0_8px_24px_rgba(47,160,132,0.2)]
              hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            {/* Comma / quote icon */}
            <div className="flex gap-1">
              <span className="font-serif text-[2.8rem] text-[#2FA084] leading-none font-bold" style={{ lineHeight: '0.7' }}>"</span>
            </div>

            {/* Review text */}
            <p className="text-[0.92rem] sm:text-[0.95rem] text-black leading-relaxed flex-1 font-sans">
              {r.text}
            </p>

            {/* Stars */}
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, si) => (
                <svg key={si} width="18" height="18" viewBox="0 0 18 18" fill="#F5A623">
                  <polygon points="9,1 11,7 17,7 12,11 14,17 9,13 4,17 6,11 1,7 7,7"/>
                </svg>
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-1 border-t border-gray-100">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-11 h-11 rounded-full object-cover object-top shadow-sm ring-2 ring-[#2FA084]/20"
              />
              <div>
                <div className="text-[0.9rem] font-semibold text-black">{r.name}</div>
                <div className="text-[0.75rem] text-gray-400 leading-snug">{r.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}