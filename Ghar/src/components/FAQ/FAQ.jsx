import { useState } from 'react'

const FAQS = [
  { q:'Is Ghar free for students?',                           a:'Yes — browsing, saving, and contacting landlords is completely free. We only charge landlords a small success fee when a booking is confirmed, never the student.' },
  { q:'How do I know the listings are real?',                 a:"Every listing goes through a verification process. We check the landlord's ID, visit the property for photos, and cross-check the address. Verified listings carry a badge you can trust." },
  { q:'Can I book a room before arriving in the city?',       a:"Absolutely. Many students reserve their room online and move in straight from the airport. We offer video tours, landlord chat, and a secure booking hold so you don't lose your spot." },
  { q:'What cities do you cover?',                            a:'We are live in Lahore, Karachi, and Islamabad and many more — covering major universities like LUMS, UCP, UET, IBA, NED, NUST, QAU, and COMSATS. More cities are on the way.' },
  { q:"I'm a landlord. How do I list my property?",           a:"Tap 'List your property' and fill out a short form. Our team will visit within 48 hours to verify details, shoot photos, and publish your listing. It's free to list." },
  { q:"What if I don't like the room after moving in?",       a:"We encourage every student to book a visit or video call before confirming. If something doesn't match the listing, our support team steps in to mediate and find a replacement quickly." },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const toggle = i => setOpen(p => p === i ? null : i)

  return (
    <section className="px-10 py-12 bg-white">
      <div className="px-2 mb-5">
        <p className="text-[0.88rem] font-bold text-[#2FA084] mb-4">FAQ</p>
      </div>

      <div className="flex items-start gap-16">
        {/* LEFT */}
        <div className="w-72 shrink-0">
          <h1 className="font-serif text-[2.6rem] font-normal text-black leading-tight mb-5">
            Questions we get <span className="text-[#2FA084]">all the time.</span>
          </h1>
          <p className="text-[0.88rem] text-gray-500 leading-relaxed mb-6">
            Still unsure? Here are the answers to what students and landlords ask us most. Can't find yours? Reach out on WhatsApp or email
          </p>
          <button className="flex items-center gap-3 text-[#2FA084] hover:opacity-80 transition-opacity">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="15" stroke="#2FA084" strokeWidth="2"/>
              <path d="M18 11v14M11 18h14" stroke="#2FA084" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="font-serif text-[1.2rem]">Ask a question</span>
          </button>
        </div>

        {/* RIGHT — accordion */}
        <div className="flex-1 flex flex-col">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-gray-100">
              {/* Question row */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                <h2 className="font-cardo text-[1.1rem] font-bold text-black group-hover:text-[#2FA084] transition-colors pr-4">
                  {faq.q}
                </h2>
                {/* Arrow rotates */}
                <div
                  className="shrink-0 transition-transform duration-300 ease-in-out"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  <svg width="30" height="16" viewBox="0 0 30 16" fill="none">
                    <path d="M3 3l12 10L27 3" stroke="#2FA084" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>

              {/* Answer — smooth slide */}
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open === i ? '240px' : '0px', opacity: open === i ? 1 : 0 }}
              >
                <p className="text-[0.85rem] text-[#2E3A59] font-sans leading-relaxed pb-4 pr-10">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}