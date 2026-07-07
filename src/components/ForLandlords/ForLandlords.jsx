export default function ForLandlords() {
  return (
    <section className="px-10 py-12 bg-white">
      <div className="flex items-start justify-between gap-8">

        {/* LEFT */}
        <div className="max-w-[380px] flex flex-col gap-6">
          <p className="text-[0.82rem] font-bold text-[#2FA084]">FOR LANDLORDS</p>
          <h1 className="font-serif text-[2.5rem] font-normal text-black leading-tight">
            Fill your rooms with <span className="text-[#2FA084]">serious students</span> — not 200 random calls.
          </h1>
          <p className="text-[0.9rem] text-gray-500 leading-relaxed">
            List your property for free. We verify it, take real photos, and only forward inquiries from matching students.
          </p>
          <button className="shadow-[0_4px_8px_rgba(0,0,0,0.15)] rounded-2xl bg-[#2FA084] flex items-center gap-2 px-6 py-3 text-[0.9rem] font-semibold text-white w-fit hover:bg-[#1F6F5F] transition-colors">
            List your property
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        {/* MIDDLE — 2 floating stat cards */}
        <div className="flex flex-col gap-5">
          {/* 0% */}
          <div className="w-48 rounded-[22px] shadow-[0_4px_12px_rgba(47,160,132,0.12)] bg-white border border-[rgba(47,160,132,0.2)] p-5 ab1">
            <div className="w-10 h-10 rounded-xl bg-[rgba(47,160,132,0.1)] flex items-center justify-center mb-3">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 18L18 4M6 6a2 2 0 100-4 2 2 0 000 4zM16 22a2 2 0 100-4 2 2 0 000 4z" stroke="#2FA084" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </div>
            <div className="font-serif text-[3.5rem] font-normal text-[#2FA084] leading-none">0<span className="text-[1.8rem]">%</span></div>
            <div className="text-[0.72rem] font-semibold text-gray-400 mt-2 tracking-wide">LISTING FEE</div>
          </div>
          {/* 5★ */}
          <div className="w-48 rounded-[22px] shadow-[0_4px_12px_rgba(47,160,132,0.12)] bg-white border border-[rgba(47,160,132,0.2)] p-5 ab2">
            <div className="w-10 h-10 rounded-xl bg-[rgba(245,166,35,0.15)] flex items-center justify-center mb-3">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="#F5A623"><polygon points="11,2 13.8,8.3 20.5,9 15.5,13.7 17,20.5 11,17 5,20.5 6.5,13.7 1.5,9 8.2,8.3"/></svg>
            </div>
            <div className="font-serif text-[3.5rem] font-normal text-[#2FA084] leading-none">5</div>
            <div className="text-[0.72rem] font-semibold text-gray-400 mt-2 tracking-wide">VERIFICATION</div>
          </div>
        </div>

        {/* RIGHT — 2 larger floating stat cards */}
        <div className="flex flex-col gap-5">
          {/* 48h — dark green */}
          <div className="w-48 rounded-[22px] shadow-[0_4px_12px_rgba(47,160,132,0.15)] bg-[#2FA084] p-5 ab3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="white" strokeWidth="1.8"/><path d="M11 7v4l3 3" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </div>
            <div className="font-serif text-[3rem] font-normal text-white leading-none">48 h</div>
            <div className="text-[0.72rem] font-semibold text-white/70 mt-2 tracking-wide">AVG. INQUIRY</div>
          </div>
          {/* 1.2k+ */}
          <div className="w-48 rounded-[22px] shadow-[0_4px_12px_rgba(47,160,132,0.12)] bg-white border border-[rgba(47,160,132,0.2)] p-5" style={{animation:'bx1 4.5s ease-in-out infinite 1.2s'}}>
            <div className="w-10 h-10 rounded-xl bg-[rgba(47,160,132,0.1)] flex items-center justify-center mb-3">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="8" cy="8" r="3.5" stroke="#2FA084" strokeWidth="1.8"/><path d="M2 20c0-4.42 2.69-8 6-8" stroke="#2FA084" strokeWidth="1.8" strokeLinecap="round"/><circle cx="16" cy="8" r="3.5" stroke="#2FA084" strokeWidth="1.8"/><path d="M20 20c0-4.42-2.69-8-6-8" stroke="#2FA084" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </div>
            <div className="font-serif text-[3rem] font-normal text-[#2FA084] leading-none">1.2k+</div>
            <div className="text-[0.72rem] font-semibold text-gray-400 mt-2 tracking-wide">ACTIVE LANDLORDS</div>
          </div>
        </div>
      </div>
    </section>
  )
}