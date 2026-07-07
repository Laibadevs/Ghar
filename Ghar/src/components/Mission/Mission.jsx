import { useEffect, useRef, useState } from 'react'

const CARDS = [
  { title:'Accessible to all',  desc:'No hidden fees. No broker cuts. Just honest listings at prices students can actually afford.' },
  { title:'Verified & safe',    desc:'Every landlord and every listing is checked. So students and parents can trust what they see.' },
  { title:'Nationwide reach',   desc:"Starting with Pakistan's top three student cities, with a vision to cover every campus in the country." },
]

export default function Mission() {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  return (
    <section ref={ref} className="px-10 py-6 bg-[#f5f5f3]">
      <div className="rounded-2xl bg-[#2FA084] px-10 py-10 flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full bg-white/20 px-6 py-2">
            <span className="font-serif text-[1.1rem] text-white">Our Mission</span>
          </div>
          <h1 className="font-serif text-[2.2rem] font-normal text-white text-center leading-snug">
            Housing is hard.<br/>Finding it shouldn't be
          </h1>
          <p className="text-[0.88rem] text-white/80 text-center max-w-xl">
            We believe every student deserves a safe, affordable place to call home — without scams, without endless calls, and without settling for less.
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-3 gap-5">
          {CARDS.map((c, i) => (
            <div key={c.title}
              style={{ animationDelay:`${i*120}ms`, opacity: vis?undefined:0 }}
              className={`bg-[#374151] rounded-2xl p-7 flex flex-col gap-4
                hover:bg-[#4B5563] hover:-translate-y-1 transition-all duration-200 cursor-pointer
                ${vis?'afu':''}`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="2" y="2" width="24" height="24" rx="6" stroke="white" strokeWidth="1.8"/>
                  <path d="M8 14l4 4 8-8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="font-cardo text-[1.2rem] text-white font-normal">{c.title}</h3>
              <p className="text-[0.82rem] text-white/70 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}