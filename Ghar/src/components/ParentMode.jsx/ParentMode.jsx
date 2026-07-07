import { motion } from 'framer-motion'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6 },
}

const stagger = (delay = 0) => ({
  ...fade,
  transition: { duration: 0.6, delay },
})

export default function ParentMode() {
  return (
    <section className="px-10 py-16 bg-white">
      <div className="flex items-start gap-16">

        {/* ── LEFT ── */}
        <div className="flex flex-col gap-7 max-w-[440px]">

          {/* Parent Mode badge */}
          <motion.div {...fade}>
            <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-[0.85rem] text-gray-600 w-fit">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="6" r="3" stroke="#555" strokeWidth="1.4"/>
                <path d="M3 15c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="#555" strokeWidth="1.4" strokeLinecap="round"/>
                <circle cx="14" cy="5" r="2" stroke="#555" strokeWidth="1.2"/>
              </svg>
              Parent Mode
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 {...stagger(0.1)} className="font-serif text-[3rem] font-normal text-black leading-[1.1] tracking-tight">
            In Pakistan, parents help decide{' '}
            <span className="text-[#2FA084]">We made it easy.</span>
          </motion.h1>

          {/* Description */}
          <motion.p {...stagger(0.2)} className="text-[0.95rem] text-gray-500 leading-relaxed">
            Tap <strong className="text-black font-semibold">"Share with Parents"</strong> on any listing and Ghar
            generates a clean, one-tap summary — price, distance, facilities, a safety score and landlord
            verification — ready to send on WhatsApp.
          </motion.p>

          {/* Feature points */}
          <div className="flex flex-col gap-4">
            {[
              'Auto-calculated safety score based on verification, walk-time & amenities',
              'Forwards on WhatsApp, email or any chat — no app install needed for parents',
              'Clear PKR pricing, distance to your university, and verified landlord profile',
            ].map((text, i) => (
              <motion.div
                key={i}
                {...stagger(0.3 + i * 0.1)}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full border-2 border-[#2FA084] flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#2FA084" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[0.88rem] text-gray-500 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA buttons */}
          <motion.div {...stagger(0.6)} className="flex flex-col gap-3">
            <button className="flex items-center gap-3 bg-[#1F6F5F] text-white rounded-full px-6 py-3 text-[0.9rem] font-semibold w-fit hover:bg-[#2FA084] transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M9 5l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.5"/>
              </svg>
              Try Parent Mode
            </button>
            <button className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2.5 text-[0.85rem] text-gray-600 w-fit hover:border-[#2FA084] hover:text-[#2FA084] transition-colors">
              See a sample summary
            </button>
          </motion.div>
        </div>

        {/* ── RIGHT — WhatsApp chat + listing card ── */}
        <motion.div
          {...stagger(0.25)}
          className="flex-1 flex flex-col gap-0 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-gray-100 max-w-[520px]"
        >
          {/* WhatsApp header — Ammi */}
          <div className="bg-[#2FA084] flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1F6F5F] flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <div>
                <div className="text-white font-semibold text-[0.95rem]">Ammi</div>
                <div className="text-white/70 text-[0.75rem]">online</div>
              </div>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Listing summary card */}
          <div className="bg-[#f0faf7] px-6 py-6 flex flex-col gap-5">

            {/* Card title */}
            <div>
              <h3 className="font-serif text-[1.4rem] font-normal text-[#2FA084] mb-1">
                Ghar -For Your Review
              </h3>
              <h4 className="font-serif text-[1.15rem] font-bold text-black mb-2">
                Sunny single room near LUMS
              </h4>
              <div className="flex items-center gap-1.5 text-[0.8rem] text-gray-500">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C4.24 1 2 3.24 2 6c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5z" stroke="#2FA084" strokeWidth="1.3"/>
                  <circle cx="7" cy="6" r="1.5" stroke="#2FA084" strokeWidth="1.3"/>
                </svg>
                DHA Phase 5, Lahore · 8 min walk
              </div>
            </div>

            {/* 4 info boxes */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'price',    label: 'Price',      value: 'PKR 12000/mon' },
                { icon: 'safety',   label: 'Safety',     value: '92/100 Excellent' },
                { icon: 'facility', label: 'Facilities', value: 'Wi-Fi · AC · Mess' },
                { icon: 'distance', label: 'Distance',   value: '8 min walk' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="bg-white rounded-xl px-4 py-3 flex flex-col gap-1 border border-gray-100">
                  <div className="flex items-center gap-1.5 text-[0.72rem] text-gray-400 font-medium">
                    {/* Icon per type */}
                    {icon === 'price'    && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="3" width="12" height="8" rx="2" stroke="#999" strokeWidth="1.2"/><path d="M4 6.5h6M7 5v3" stroke="#999" strokeWidth="1.1" strokeLinecap="round"/></svg>}
                    {icon === 'safety'   && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l5 2v5c0 3-2.5 5-5 6C4.5 13 2 11 2 8V3z" stroke="#999" strokeWidth="1.2"/><path d="M4.5 7l2 2 3-3" stroke="#999" strokeWidth="1.1" strokeLinecap="round"/></svg>}
                    {icon === 'facility' && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1" y="1" width="12" height="12" rx="2" stroke="#999" strokeWidth="1.2"/><path d="M4 5h6M4 7.5h4M4 10h5" stroke="#999" strokeWidth="1.1" strokeLinecap="round"/></svg>}
                    {icon === 'distance' && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5" stroke="#999" strokeWidth="1.2"/><path d="M7 4v3l2 2" stroke="#999" strokeWidth="1.1" strokeLinecap="round"/></svg>}
                    {label}
                  </div>
                  <div className="text-[0.82rem] font-semibold text-black">{value}</div>
                </div>
              ))}
            </div>

            {/* Landlord */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2FA084] flex items-center justify-center text-white font-bold text-sm shrink-0">
                M
              </div>
              <div>
                <div className="text-[0.88rem] font-semibold text-black">Mr. Mahmood</div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1l5 2v5c0 3.5-2.5 6-5 7C5.5 14 3 11.5 3 8V3z" stroke="#2FA084" strokeWidth="1.3"/>
                  <path d="M5.5 8l2 2 3-3" stroke="#2FA084" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Message input bar */}
          <div className="bg-white border-t border-gray-100 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[0.82rem] text-gray-400">
              <span className="font-medium text-gray-600">Ammi</span>
              <span>•</span>
              <span>just now</span>
            </div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 10l16-8-8 16-2-6z" stroke="#2FA084" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  )
}