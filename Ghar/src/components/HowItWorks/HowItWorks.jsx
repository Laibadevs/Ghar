export default function HowItWorks() {
  const steps = [
    { num:'01', title:'Pick your campus', desc:'Search by university or city or area and discover verified hostels, rooms and apartments nearby.' },
    { num:'02', title:'Browse the map',   desc:'Filter by budget, gender, facilities, and walking distance. Open any listing to explore photos, rules, and room details.' },
    { num:'03', title:'Save & connect',   desc:'Wishlist your favourites, chat the landlord, book a visit — or reserve online.' },
  ]
  return (
    <section className="px-10 py-12 bg-white">
      <div className="flex items-start gap-16">
        {/* Left */}
        <div className="w-72 shrink-0">
          <p className="text-[0.88rem] font-bold text-[#2FA084] mb-2">HOW ITS WORKS</p>
          <h1 className="font-serif text-[2.6rem] font-normal text-black leading-tight mb-4">
            From <span className="text-[#2FA084]">"where<br/>do I live?"</span> to<br/>keys in hand.
          </h1>
          <p className="text-[0.88rem] text-gray-500 leading-relaxed">
            Most students sign their first lease in under a week with Ghar — without flying in for visits.
          </p>
        </div>
        {/* Steps */}
        <div className="flex-1 flex flex-col gap-5">
          {steps.map((s,i) => (
            <div key={s.num}
              className="flex items-start gap-7 bg-white border border-[#2FA084] rounded-2xl px-8 py-8
                shadow-[0_4px_12px_rgba(47,160,132,0.12)] hover:shadow-[0_8px_24px_rgba(47,160,132,0.2)]
                hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              <span className="font-cardo text-[2.4rem] font-bold text-[#2FA084] leading-none shrink-0">{s.num}</span>
              <div className="flex flex-col gap-2">
                <h2 className="font-serif text-[1.7rem] font-normal text-black leading-tight">{s.title}</h2>
                <p className="text-[0.85rem] text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}