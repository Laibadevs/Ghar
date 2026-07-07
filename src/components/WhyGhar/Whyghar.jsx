import { useEffect, useRef, useState } from 'react'

const FEATURES = [
  { title:'Map-first browsing',       desc:'See every hostel and shared room plotted around your campus. Walk-time, not guesswork.' },
  { title:'Filters that matter',      desc:'Gender, budget, distance from gate, attached bath, Wi-Fi, mess included — narrow it in seconds' },
  { title:'Real photo galleries',     desc:'Verified pictures of every room, washroom, kitchen and street. No more bait-and-switch.' },
  { title:'Student & landlord views', desc:'Students browse and book. Landlords list, manage inquiries and confirm bookings — one app.' },
  { title:'Save & compare',           desc:'Wishlist your top picks, compare them side-by-side, and share the shortlist with your parents.' },
  { title:'Verified listings',        desc:'Every landlord is ID-checked and every address is visited. Safer for you, easier for your family.' },
  { title:'University-Based Search',  desc:'Search accommodation by university name, nearby areas, or city to quickly discover rooms near your campus.' },
  { title:'Direct Contact',           desc:'Contact landlords instantly through WhatsApp for faster, broker-free communication on a platform students already use.' },
]

const ICONS = [
  <svg key="0" width="52" height="50" viewBox="0 0 52 50" fill="none"><rect x="2" y="2" width="48" height="46" rx="10" stroke="#2FA084" strokeWidth="2"/><circle cx="26" cy="22" r="7" stroke="#2FA084" strokeWidth="1.8"/><path d="M26 42s-12-8-12-20c0-6.63 5.37-12 12-12s12 5.37 12 12c0 12-12 20-12 20z" stroke="#2FA084" strokeWidth="1.8" fill="none"/></svg>,
  <svg key="1" width="52" height="50" viewBox="0 0 52 50" fill="none"><rect x="2" y="2" width="48" height="46" rx="10" stroke="#2FA084" strokeWidth="2"/><path d="M13 17h26M18 25h16M22 33h8" stroke="#2FA084" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg key="2" width="52" height="50" viewBox="0 0 52 50" fill="none"><rect x="2" y="2" width="48" height="46" rx="10" stroke="#2FA084" strokeWidth="2"/><rect x="11" y="14" width="30" height="22" rx="4" stroke="#2FA084" strokeWidth="1.8"/><circle cx="26" cy="25" r="5.5" stroke="#2FA084" strokeWidth="1.8"/><circle cx="36" cy="18" r="2" fill="#2FA084"/></svg>,
  <svg key="3" width="52" height="50" viewBox="0 0 52 50" fill="none"><rect x="2" y="2" width="48" height="46" rx="10" stroke="#2FA084" strokeWidth="2"/><circle cx="20" cy="20" r="5" stroke="#2FA084" strokeWidth="1.8"/><path d="M8 38c0-6.63 5.37-12 12-12" stroke="#2FA084" strokeWidth="1.8" strokeLinecap="round"/><circle cx="34" cy="20" r="5" stroke="#2FA084" strokeWidth="1.8"/><path d="M44 38c0-6.63-5.37-12-12-12" stroke="#2FA084" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  <svg key="4" width="52" height="50" viewBox="0 0 52 50" fill="none"><rect x="2" y="2" width="48" height="46" rx="10" stroke="#2FA084" strokeWidth="2"/><path d="M26 38S12 30 12 20a10 10 0 0120 0 10 10 0 0120 0c0 10-14 18-14 18" stroke="#2FA084" strokeWidth="1.8" fill="none"/></svg>,
  <svg key="5" width="52" height="50" viewBox="0 0 52 50" fill="none"><rect x="2" y="2" width="48" height="46" rx="10" stroke="#2FA084" strokeWidth="2"/><path d="M26 8l13 6v11c0 8-6 14.5-13 17-7-2.5-13-9-13-17V14z" stroke="#2FA084" strokeWidth="1.8" fill="none"/><path d="M19 25l5 5 9-9" stroke="#2FA084" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  <svg key="6" width="52" height="50" viewBox="0 0 52 50" fill="none"><rect x="2" y="2" width="48" height="46" rx="10" stroke="#2FA084" strokeWidth="2"/><path d="M26 10l-16 9 16 9 16-9z" stroke="#2FA084" strokeWidth="1.8" strokeLinejoin="round"/><path d="M14 23v9c3.5 2.5 7 4 12 4s8.5-1.5 12-4v-9" stroke="#2FA084" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  <svg key="7" width="52" height="50" viewBox="0 0 52 50" fill="none"><rect x="2" y="2" width="48" height="46" rx="10" stroke="#2FA084" strokeWidth="2"/><circle cx="26" cy="25" r="11" stroke="#2FA084" strokeWidth="1.8"/><path d="M20 25c0 3.31 2.69 6 6 6 1.3 0 2.5-.41 3.48-1.1l3.43.46-.46-3.43A5.99 5.99 0 0020 25z" stroke="#2FA084" strokeWidth="1.5" fill="none"/></svg>,
]

export default function WhyGhar() {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  return (
    <section ref={ref} className="px-10 py-12 bg-[#f5f5f3]">
      <p className="text-[0.9rem] font-bold text-[#2FA084] font-sans mb-3">WHY GHAR</p>
      <h1 className="font-serif text-[2.8rem] font-normal text-black leading-tight mb-8">
        Everything Facebook groups <br />
        <span className="text-[#2FA084] underline underline-offset-4">never had</span>.
      </h1>

      {/* Row 1 — 3 cards */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {FEATURES.slice(0,3).map((f,i) => <FCard key={f.title} f={f} icon={ICONS[i]} delay={i*80} vis={vis}/>)}
      </div>
      {/* Row 2 — 3 cards */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {FEATURES.slice(3,6).map((f,i) => <FCard key={f.title} f={f} icon={ICONS[i+3]} delay={(i+3)*80} vis={vis}/>)}
      </div>
      {/* Row 3 — 2 cards */}
      <div className="grid grid-cols-3 gap-4">
        {FEATURES.slice(6,8).map((f,i) => <FCard key={f.title} f={f} icon={ICONS[i+6]} delay={(i+6)*80} vis={vis}/>)}
      </div>
    </section>
  )
}

function FCard({ f, icon, delay, vis }) {
  return (
    <div
      style={{ animationDelay: `${delay}ms`, opacity: vis ? undefined : 0 }}
      className={`bg-white rounded-[22px] shadow-[2px_4px_10px_rgba(0,0,0,0.08)] p-8 flex flex-col gap-4
        hover:shadow-[2px_6px_20px_rgba(47,160,132,0.18)] hover:-translate-y-1 transition-all duration-200 cursor-pointer
        ${vis ? 'afu' : ''}`}
    >
      <div className="w-16 h-14 rounded-xl bg-[rgba(47,160,132,0.08)] flex items-center justify-center">{icon}</div>
      <h3 className="font-cardo text-[1.35rem] font-normal text-black">{f.title}</h3>
      <p className="text-[0.82rem] text-gray-500 font-sans leading-relaxed">{f.desc}</p>
    </div>
  )
}