import { motion } from "framer-motion";
import { Globe, ShieldCheck, Circle } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const cards = [
  {
    icon: Circle,
    title: "Accessible to all",
    text: "No hidden fees. No broker cuts. Just honest listings at prices students can actually afford.",
  },
  {
    icon: ShieldCheck,
    title: "Verified & safe",
    text: "Every landlord and every listing is checked. So students and parents can trust what they see.",
  },
  {
    icon: Globe,
    title: "Nationwide reach",
    text: "Starting with Pakistan's top three student cities, with a vision to cover every campus in the country.",
  },
];

export default function Mission() {
  return (
    <section className="px-5 lg:px-20 py-20">
      <div className="bg-[#1F6F5F] rounded-[34px] lg:rounded-[42px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-14 py-16 lg:py-20">
          {/* Badge */}
          <motion.div {...fade} className="flex justify-center">
            <div className="rounded-full bg-[#2FA084]/30 border border-white/20 backdrop-blur-md px-10 py-4">
              <span className="text-white font-serif text-3xl font-semibold">
                Our Mission
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div {...fade} className="max-w-4xl mx-auto text-center mt-12">
            <h2 className="font-serif text-white text-4xl md:text-6xl leading-tight">
              Housing is hard.
              <br />
              Finding it shouldn't be
            </h2>

            <p className="mt-8 text-white/90 text-lg md:text-[1.6rem] leading-relaxed">
              We believe every student deserves a safe, affordable place to call
              home — without scams, without endless calls, and without settling
              for less.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={index}
                  {...fade}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="rounded-[34px]
                  bg-[#2FA084]/18
                  border border-white/15
                  shadow-[0_15px_35px_rgba(0,0,0,0.18)]
                  backdrop-blur-sm
                  p-12
                  min-h-[100px]
                  hover:-translate-y-2
                  hover:bg-[#2FA084]/24
                  transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Icon size={34} strokeWidth={1.7} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-10 text-white font-serif text-[2rem]">
                    {card.title}
                  </h3>

                  {/* Text */}
                  <p className="mt-6 text-white/90 text-[1.35rem] leading-relaxed">
                    {card.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
