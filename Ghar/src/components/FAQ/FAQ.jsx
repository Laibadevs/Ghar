import { useState } from "react";
import { motion } from "framer-motion";
const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};
const fadeDelay = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, delay },
});
const FAQS = [
  {
    q: "Is Ghar free for students?",
    a: "Yes — browsing, saving, and contacting landlords is completely free. We only charge landlords a small success fee when a booking is confirmed, never the student.",
  },
  {
    q: "How do I know the listings are real?",
    a: "Every listing goes through a verification process. We check the landlord's ID, visit the property for photos, and cross-check the address. Verified listings carry a badge you can trust.",
  },
  {
    q: "Can I book a room before arriving in the city?",
    a: "Absolutely. Many students reserve their room online and move in straight from the airport. We offer video tours, landlord chat, and a secure booking hold so you don't lose your spot.",
  },
  {
    q: "What cities do you cover?",
    a: "We are live in Lahore, Karachi, and Islamabad and many more — covering major universities like LUMS, UCP, UET, IBA, NED, NUST, QAU, and COMSATS. More cities are on the way.",
  },
  {
    q: "I'm a landlord. How do I list my property?",
    a: "Tap 'List your property' and fill out a short form. Our team will visit within 48 hours to verify details, shoot photos, and publish your listing. It's free to list.",
  },
  {
    q: "What if I don't like the room after moving in?",
    a: "We encourage every student to book a visit or video call before confirming. If something doesn't match the listing, our support team steps in to mediate and find a replacement quickly.",
  },
];
export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen((p) => (p === i ? null : i));
  return (
    <section className="w-full px-5 py-12 md:px-8 md:py-16 lg:py-20 ">
      <div className="max-w-7xl mx-auto">
        <motion.p {...fade} className="text-sm md:text-base font-bold text-[#2FA084] mb-4">
          FAQ
        </motion.p>
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
          {/* LEFT */}
          <motion.div {...fadeDelay(0.1)} className="w-full lg:w-72 shrink-0 mb-10 lg:mb-0">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.6rem] font-normal text-black leading-tight mb-5">
              Questions we get <span className="text-[#2FA084]">all the time.</span>
            </h1>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-6">
              Still unsure? Here are the answers to what students and landlords ask us most. Can't find yours? Reach out on WhatsApp or email
            </p>
            <button className="flex items-center gap-3 text-[#2FA084] hover:opacity-80 transition-opacity">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="15" stroke="#2FA084" strokeWidth="2" />
                <path d="M18 11v14M11 18h14" stroke="#2FA084" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="font-serif text-lg md:text-[1.2rem]">Ask a question</span>
            </button>
          </motion.div>
          {/* RIGHT — accordion */}
          <motion.div {...fadeDelay(0.2)} className="flex-1 flex flex-col">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                {...fade}
                transition={{ ...fade.transition, delay: 0.25 + i * 0.08 }}
                className="border-b border-gray-100"
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-4 md:py-5 text-left group"
                >
                  <h2 className="font-cardo text-base md:text-[1.1rem] font-bold text-black group-hover:text-[#2FA084] transition-colors pr-4">
                    {faq.q}
                  </h2>
                  {/* Arrow rotates */}
                  <div
                    className="shrink-0 transition-transform duration-300 ease-in-out"
                    style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <svg width="30" height="16" viewBox="0 0 30 16" fill="none" className="w-6 md:w-[30px]">
                      <path
                        d="M3 3l12 10L27 3"
                        stroke="#2FA084"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
                {/* Answer — smooth slide */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: open === i ? "240px" : "0px", opacity: open === i ? 1 : 0 }}
                >
                  <p className="text-sm md:text-[0.85rem] text-[#2E3A59] font-sans leading-relaxed pb-4 pr-4 md:pr-10">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
