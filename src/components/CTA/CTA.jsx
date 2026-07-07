import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="px-10 pb-16 bg-[#f5f5f3]">
      <div
        className="rounded-[24px] flex flex-col items-center py-14 px-8 gap-3"
        style={{ background: 'linear-gradient(90deg, #2FA084 40.87%, #1F6F5F 100%)' }}
      >
        <h1 className="font-serif text-[2.2rem] font-normal text-white text-center leading-snug">
          Your next room is one search away.
        </h1>
        <p className="text-[0.92rem] font-sans text-white/80 text-center leading-relaxed max-w-lg">
          Join thousands of students who skipped the Facebook groups<br/>and found home on Ghar
        </p>
        <Link
          to="/browse"
          className="mt-3 bg-white text-[#2FA084] font-semibold text-[0.95rem] px-8 py-3 rounded-full hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
        >
          Find your room now →
        </Link>
      </div>
    </section>
  )
}