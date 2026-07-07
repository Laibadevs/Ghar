import { useEffect, useRef, useState } from 'react'

const PHOTOS = [
  { color:'#d4a8a8', initial:'A', delay:0 },
  { color:'#a8c4d4', initial:'B', delay:150 },
  { color:'#a8d4b4', initial:'C', delay:300 },
  { color:'#d4caa8', initial:'D', delay:450 },
  { color:'#c4a8d4', initial:'E', delay:600 },
  { color:'#d4b8a8', initial:'F', delay:750 },
  { color:'#a8d4d4', initial:'G', delay:900 },
  { color:'#d4a8c4', initial:'H', delay:1050 },
]

const REVIEWS = [
  { quote:'Ghar helped me find a hostel just 5 minutes away from University. The photos were exactly as shown!', name:'Amber', uni:'Fast University,Lahore', delay:1200 },
  { quote:'Very easy to use platform. I compared multiple rooms. and found the best one within my budget.',       name:'Laiba', uni:'Lahore College Women University,Lahore', delay:1350 },
  { quote:'No brokers, direct contact with landlord. Saved time, money and a lot of hassle.',                    name:'Usman', uni:'NUST, Islamabad', delay:1500 },
]

function Photo({ color, initial, delay, vis, cls='' }) {
  return (
    <div
      style={{ animationDelay:`${delay}ms`, opacity: vis ? undefined : 0 }}
      className={`rounded-[20px] overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.18)] flex items-center justify-center font-bold text-white text-xl ${cls} ${vis ? 'api' : ''}`}
      style={{ background: color, animationDelay:`${delay}ms`, opacity: vis ? undefined : 0 }}
    >
      {initial}
    </div>
  )
}

export default function Testimonials() {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.08 })
    if (ref.current) ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])

  return (
    <section ref={ref} className="px-10 py-12 bg-[#f5f5f3]">
      {/* Photo mosaic + TESTIMONIALS title */}
      <div className="flex items-end gap-3 mb-8" style={{ height: '280px' }}>
        {/* Col 1 — 2 stacked */}
        <div className="flex flex-col gap-3 h-full">
          <div style={{ flex:1, background: PHOTOS[0].color, animationDelay:`${PHOTOS[0].delay}ms`, opacity: vis ? undefined : 0 }}
            className={`w-24 rounded-[18px] shadow-[0_4px_10px_rgba(0,0,0,0.18)] flex items-center justify-center font-bold text-white text-lg ${vis?'api':''}`}>{PHOTOS[0].initial}</div>
          <div style={{ flex:1, background: PHOTOS[1].color, animationDelay:`${PHOTOS[1].delay}ms`, opacity: vis ? undefined : 0 }}
            className={`w-24 rounded-[18px] shadow-[0_4px_10px_rgba(0,0,0,0.18)] flex items-center justify-center font-bold text-white text-lg ${vis?'api':''}`}>{PHOTOS[1].initial}</div>
        </div>
        {/* Col 2 — tall */}
        <div style={{ background: PHOTOS[2].color, animationDelay:`${PHOTOS[2].delay}ms`, opacity: vis ? undefined : 0 }}
          className={`w-24 h-48 rounded-[18px] shadow-[0_4px_10px_rgba(0,0,0,0.18)] flex items-center justify-center font-bold text-white text-lg self-start ${vis?'api':''}`}>{PHOTOS[2].initial}</div>
        {/* Col 3 — 3 items staggered heights */}
        <div className="flex items-end gap-3 flex-1">
          <div style={{ background: PHOTOS[3].color, animationDelay:`${PHOTOS[3].delay}ms`, opacity: vis ? undefined : 0 }}
            className={`w-24 h-48 rounded-[18px] shadow-[0_4px_10px_rgba(0,0,0,0.18)] flex items-center justify-center font-bold text-white text-lg ${vis?'api':''}`}>{PHOTOS[3].initial}</div>
          <div style={{ background: PHOTOS[4].color, animationDelay:`${PHOTOS[4].delay}ms`, opacity: vis ? undefined : 0 }}
            className={`w-28 h-64 rounded-[18px] shadow-[0_4px_10px_rgba(0,0,0,0.18)] flex items-center justify-center font-bold text-white text-lg ${vis?'api':''}`}>{PHOTOS[4].initial}</div>
          <div style={{ background: PHOTOS[5].color, animationDelay:`${PHOTOS[5].delay}ms`, opacity: vis ? undefined : 0 }}
            className={`w-24 h-48 rounded-[18px] shadow-[0_4px_10px_rgba(0,0,0,0.18)] flex items-center justify-center font-bold text-white text-lg ${vis?'api':''}`}>{PHOTOS[5].initial}</div>
        </div>
        {/* TESTIMONIALS label */}
        <div className="flex flex-col items-center justify-end pb-2 px-4">
          <h2 className="font-sans text-[1.8rem] font-semibold text-black">TESTIMONIALS</h2>
        </div>
        {/* Col 4 — single */}
        <div style={{ background: PHOTOS[6].color, animationDelay:`${PHOTOS[6].delay}ms`, opacity: vis ? undefined : 0 }}
          className={`w-24 h-44 rounded-[18px] shadow-[0_4px_10px_rgba(0,0,0,0.18)] flex items-center justify-center font-bold text-white text-lg self-start ${vis?'api':''}`}>{PHOTOS[6].initial}</div>
        {/* Col 5 — 2 stacked */}
        <div className="flex flex-col gap-3 h-full">
          <div style={{ flex:1, background: PHOTOS[7].color, animationDelay:`${PHOTOS[7].delay}ms`, opacity: vis ? undefined : 0 }}
            className={`w-24 rounded-[18px] shadow-[0_4px_10px_rgba(0,0,0,0.18)] flex items-center justify-center font-bold text-white text-lg ${vis?'api':''}`}>{PHOTOS[7].initial}</div>
          <div style={{ flex:1, background: PHOTOS[0].color, animationDelay:`${PHOTOS[0].delay+200}ms`, opacity: vis ? undefined : 0 }}
            className={`w-24 rounded-[18px] shadow-[0_4px_10px_rgba(0,0,0,0.18)] flex items-center justify-center font-bold text-white text-lg ${vis?'api':''}`}>Z</div>
        </div>
      </div>

      {/* Headline */}
      <div className="text-center mb-8">
        <h1 className="font-serif text-[2.8rem] font-normal text-black leading-tight">
          Loved by <span className="text-[#2FA084]">students</span> across Pakistan
        </h1>
        <p className="text-[0.88rem] text-gray-500 mt-2">Thousands of Students have already found their prefect place with Ghar</p>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-3 gap-5">
        {REVIEWS.map((r) => (
          <div key={r.name}
            style={{ animationDelay:`${r.delay}ms`, opacity: vis ? undefined : 0 }}
            className={`bg-white border border-[#2FA084] rounded-2xl shadow-[0_4px_12px_rgba(47,160,132,0.12)] p-6 flex flex-col gap-5
              hover:shadow-[0_8px_24px_rgba(47,160,132,0.2)] hover:-translate-y-1 transition-all duration-200 cursor-pointer relative
              ${vis ? 'api' : ''}`}
          >
            {/* Quote icon */}
            <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
              <path d="M0 16h8c0-4.42-3.58-8-8-8v8zM20 16h8c0-4.42-3.58-8-8-8v8z" fill="#2FA084" opacity="0.25"/>
              <path d="M0 16v12h8V16H0zM20 16v12h8V16H20z" fill="#2FA084"/>
            </svg>
            <p className="text-[0.92rem] text-black leading-relaxed font-sans flex-1">{r.quote}</p>
            {/* Stars */}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_,i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill="#F5A623">
                  <polygon points="9,1 11,7 17,7 12,11 14,17 9,13 4,17 6,11 1,7 7,7"/>
                </svg>
              ))}
            </div>
            {/* Author */}
            <div className="flex flex-col gap-0.5 pt-1">
              <span className="text-[1rem] font-medium text-black">{r.name}</span>
              <span className="text-[0.72rem] text-gray-400">{r.uni}</span>
            </div>
            {/* Avatar overlapping bottom */}
            <div className="absolute -bottom-5 left-6 w-10 h-10 rounded-full border-2 border-white shadow-md flex items-center justify-center text-sm font-bold"
              style={{ background:'#E1F5EE', color:'#0F6E56' }}>
              {r.name[0]}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}