import { useEffect, useRef, useState } from 'react'

export default function AboutUs() {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  return (
    <section ref={ref} className="px-10 py-12 bg-white">
      <p className="text-[0.82rem] font-bold text-[#2FA084] mb-2">ABOUT US</p>
      <h1 className="font-serif text-[2.5rem] font-normal text-black leading-tight mb-4">
        Built to make <span className="text-[#2FA084]">student housing</span> simpler and safer
      </h1>
      <p className="text-[0.9rem] text-gray-500 leading-relaxed mb-10 max-w-[700px]">
        Ghar helps students discover trusted hostels, rooms, and apartments near their university through verified listings,
        map-based browsing, and direct landlord communication. Built around real student struggles, Ghar makes finding
        accommodation faster, more transparent, and less stressful.
      </p>

      <div className="flex items-start justify-end">
        <div className="w-[650px] flex flex-col gap-6">
          {/* OUR STORY */}
          <div className="flex flex-col items-center gap-4 px-12">
            <div className="rounded-full bg-[rgba(47,160,132,0.12)] px-6 py-2">
              <span className="text-[0.85rem] font-semibold text-[#2FA084]">OUR STORY</span>
            </div>
            <h1 className="font-serif text-[2.8rem] font-normal text-black text-center leading-tight">
              Built by students who lived <span className="text-[#2FA084]">the chaos firsthand.</span>
            </h1>
          </div>

          {/* Quote + year + text */}
          <div className="flex items-end gap-6">
            {/* Quote card + 2026 */}
            <div className="relative shrink-0">
              {/* Light quote card behind */}
              <div
                style={{ background:'linear-gradient(180deg,#fff 0%,rgba(47,160,132,0.08) 100%)' }}
                className={`w-52 rounded-[26px] p-6 absolute -top-32 -left-24 z-0 ${vis?'afu':''}`}
                style={{ background:'linear-gradient(180deg,#fff 0%,rgba(47,160,132,0.08))', animationDelay:'0ms', opacity: vis?undefined:0 }}
              >
                <svg width="36" height="28" viewBox="0 0 36 28" fill="none" className="mb-3">
                  <path d="M0 16h8c0-4.42-3.58-8-8-8v8zM20 16h8c0-4.42-3.58-8-8-8v8z" fill="#2FA084" opacity="0.25"/>
                  <path d="M0 16v12h8V16H0zM20 16v12h8V16H20z" fill="#2FA084"/>
                </svg>
                <p className="font-serif text-[1.1rem] text-[#2FA084] leading-snug italic">
                  "We built the tool we wished existed when we moved to Lahore for university."
                </p>
              </div>

              {/* 2026 Founded — floating */}
              <div className="shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-2xl bg-[#2FA084] px-7 py-4 relative z-10 ayr">
                <div className="font-serif text-[2.2rem] font-normal text-white leading-none">2026</div>
                <div className="text-[0.85rem] text-white/80 mt-1">Founded</div>
              </div>
            </div>

            {/* Story text + stats */}
            <div className="flex-1 flex flex-col gap-6">
              <p className="text-[0.88rem] text-gray-500 leading-relaxed">
                Three years ago, we landed in Lahore for our first semester at LUMS. What followed were weeks of endless
                WhatsApp forwards, fake listings, and a room that looked nothing like its photos.
                <br/><br/>
                We built Roomi to fix that. Every feature — the map, the filters, the verified photos — came from a real
                frustration we faced. Today, we're helping thousands of Pakistani students find clean, safe housing near
                campus without the headache.
              </p>

              {/* Stats */}
              <div className="flex items-start gap-8">
                {[
                  { num:'3',     label:'Cities' },
                  { num:'2,300', label:'Students housed', plus:true },
                  { num:'50',    label:'Landlords',       plus:true },
                  { num:'2',     label:'Team Members' },
                ].map(({ num, label, plus }, i) => (
                  <div key={label}
                    style={{ animationDelay:`${i*80}ms`, opacity: vis?undefined:0 }}
                    className={`flex flex-col ${vis?'afu':''}`}
                  >
                    <div className="flex items-center gap-0.5">
                      <span className="font-serif text-[2rem] font-normal text-[#2FA084] leading-none">{num}</span>
                      {plus && <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-1"><path d="M9 4v10M4 9h10" stroke="#2FA084" strokeWidth="2" strokeLinecap="round"/></svg>}
                    </div>
                    <span className="text-[0.8rem] text-black font-sans mt-1">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}