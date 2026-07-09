import { useState, useEffect, useRef } from "react";
import listing1 from "../../assets/listing1.png";
import listing2 from "../../assets/listing2.png";
import listing3 from "../../assets/listing3.png";
import { motion } from "framer-motion";
import {
  Wifi,
  UtensilsCrossed,
  CookingPot,
  Snowflake,
  BookOpen,
  WashingMachine,
} from "lucide-react";
const CARDS = [
  {
    id: 1,
    name: "Students Inn",
    location: "Gulshan Town, Lahore",
    walk: "7 min walk to UET",
    type: "Private Room",
    price: "Rs. 20,000",
    amenities: ["Wifi", "Meals", "Kitchen", "Laundary"],
    verified: true,
    bgFrom: "#BE976E",
    bgTo: "#5F3E2E",
    image: listing1,
  },

  {
    id: 2,
    name: "Girls Hostel",
    location: "North Nazimabad, Karachi",
    walk: "7 min walk to FAST",
    type: "Shared Room",
    price: "Rs. 12,000",
    amenities: ["Wifi", "Meals", "AC", "S.Room"],
    verified: true,
    bgFrom: "#BE976E",
    bgTo: "#584633",
    image: listing2,
  },
  {
    id: 3,
    name: "Prime Room",
    location: "North Nazimabad, Karachi",
    walk: "7 min walk to FAST",
    type: "Entire Place",
    price: "Rs. 25,000",
    amenities: ["Wifi", "Meals", "AC", "Laundary"],
    verified: false,
    bgFrom: "#BE976E",
    bgTo: "#2f1a1f",
    image: listing3,
  },
  {
    id: 4,
    name: "Shared Room",
    location: "DHA phase",
    walk: "7 min walk to FAST",
    type: "Entire Place",
    price: "Rs. 25,000",
    amenities: ["Wifi", "Meals", "AC", "Laundary"],
    verified: false,
    bgFrom: "#BE976E",
    bgTo: "#2f1a1f",
    image: listing3,
  },
];
const ICONS = {
  Wifi: Wifi,
  Meals: UtensilsCrossed,
  Kitchen: CookingPot,
  Laundry: WashingMachine,
  Laundary: WashingMachine,
  AC: Snowflake,
  "Study Room": BookOpen,
  "S.Room": BookOpen,
};
const fade = {
  initial: {
    opacity: 0,
    y: 24,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    margin: "-80px",
  },
  transition: {
    duration: 0.6,
  },
};
const OFFSETS = [
  { sx: "-200px", sy: "-140px", sr: "-10deg" },
  { sx: "180px", sy: "-120px", sr: "8deg" },
  { sx: "-160px", sy: "150px", sr: "-6deg" },
  { sx: "-160px", sy: "150px", sr: "-6deg" },
];

export default function Listings() {
  const [city, setCity] = useState("All Cities");
  const [vis, setVis] = useState(false);
  const [tick, setTick] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.12 },
    );
    if (ref.current) ob.observe(ref.current);
    return () => ob.disconnect();
  }, []);

  const switchCity = (c) => {
    setCity(c);
    setVis(false);
    setTick((t) => t + 1);
    setTimeout(() => setVis(true), 60);
  };

  return (
    <motion.section
      {...fade}
      ref={ref}
      className="max-w-[1600px] mx-auto px-12 py-10"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-[rgba(47,160,132,0.14)] text-[#2FA084] text-[0.78rem] font-semibold px-3 py-1.5 rounded-full border border-[rgba(47,160,132,0.3)] mb-3">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect
                x="1"
                y="1"
                width="12"
                height="12"
                rx="2"
                stroke="#2FA084"
                strokeWidth="1.4"
              />
              <path
                d="M4 7h6M4 4.5h3M4 9.5h5"
                stroke="#2FA084"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            Latest Listings
          </div>
          <h2 className="font-serif text-[2.4rem] font-normal text-black leading-tight">
            Rooms Students are looking at right now
          </h2>
          <p className="text-[0.82rem] text-gray-500 mt-1">
            Verified hostels, PGs and shared rooms across Pakistan's top
            university cities
          </p>
        </div>
        <button className="flex items-center gap-1 text-[0.9rem] font-semibold text-[#2FA084] mt-6 hover:underline">
          View all
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="#2FA084"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* City tabs */}
      <div className="flex gap-4 mb-6 mt-3">
        {["All Cities", "Lahore", "Karachi", "Islamabad"].map((c) => (
          <button
            key={c}
            onClick={() => switchCity(c)}
            className={`flex items-center gap-2 shadow-[0_3px_6px_rgba(0,0,0,0.12)] rounded-full py-1.5 px-5 text-[0.85rem] font-cardo transition-all
              ${city === c ? "bg-[#2FA084] text-white" : "bg-white text-black hover:shadow-md"}`}
          >
            {c !== "All Cities" && (
              <svg width="10" height="15" viewBox="0 0 10 15" fill="none">
                <path
                  d="M5 1C2.79 1 1 2.79 1 5c0 3.25 4 9 4 9s4-5.75 4-9c0-2.21-1.79-4-4-4z"
                  stroke={city === c ? "white" : "#2FA084"}
                  strokeWidth="1.2"
                />
                <circle
                  cx="5"
                  cy="5"
                  r="1.5"
                  stroke={city === c ? "white" : "#2FA084"}
                  strokeWidth="1.2"
                />
              </svg>
            )}
            {c}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {CARDS.map((card, i) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.12,
            }}
          >
            <Card card={card} />
          </motion.div>
        ))}
      </div>

      {/* Bottom stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 font-cardo font-bold text-[1rem]"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M4 28V18l12-10 12 10v10"
                stroke="#2FA084"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <rect
                x="12"
                y="20"
                width="8"
                height="8"
                rx="1"
                stroke="#2FA084"
                strokeWidth="1.5"
              />
            </svg>
            1,240+ active listings
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 font-cardo font-bold text-[1rem]"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M14 3L2 10l12 7 12-7z"
                stroke="#2FA084"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M6 14v7c2.5 2 5.5 3.5 8 3.5s5.5-1.5 8-3.5v-7"
                stroke="#2FA084"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            18 Universities Covered
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 font-cardo font-bold text-[1rem]"
          >
            <svg width="22" height="28" viewBox="0 0 22 28" fill="none">
              <path
                d="M11 2C6.58 2 3 5.58 3 10c0 5.25 8 18 8 18S19 15.25 19 10c0-4.42-3.58-8-8-8z"
                stroke="#2FA084"
                strokeWidth="1.8"
              />
              <circle
                cx="11"
                cy="10"
                r="2.5"
                stroke="#2FA084"
                strokeWidth="1.5"
              />
            </svg>
            All Cities
          </motion.div>
        </div>
        <motion.button
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="shadow-[0_3px_8px_rgba(0,0,0,0.15)] rounded-[20px] bg-[#2FA084] flex items-center gap-2 px-6 py-3 text-[0.92rem] font-semibold text-white hover:bg-[#1F6F5F] transition-colors"
        >
          Browse all listings
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3 9h12M10 5l4 4-4 4"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </div>
    </motion.section>
  );
}

function Card({ card }) {
  const [saved, setSaved] = useState(false);
  return (
    <div className="relative h-[470px] rounded-[28px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.2)] group cursor-pointer">
      <img
        src={card.image}
        alt={card.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      {/* Gradient overlay bottom */}
      <div
        className="absolute inset-0 rounded-[28px]"
        style={{
          background: `linear-gradient(180deg,transparent 40%,rgba(190,151,110,0.55) 60%,${card.bgTo} 180%)`,
        }}
      />
      {/* Heart */}
      <button
        onClick={() => setSaved((s) => !s)}
        className="absolute
top-5
right-5
z-20
transition
duration-300
hover:scale-110 "
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 18 18"
          fill={saved ? "white" : "none"}
        >
          <path
            d="M9 16S2 11.5 2 6.5A4.5 4.5 0 019 3.5a4.5 4.5 0 017 3c0 5-7 9.5-7 9.5z"
            stroke="white"
            strokeWidth="1.5"
          />
        </svg>
      </button>
      {/* Verified */}
      {card.verified && (
        <div
          className="absolute
top-5
left-5
z-20
px-4
py-2
rounded-full
backdrop-blur-xl
bg-white/10
border
border-white/20
text-white
text-xs
font-semibold
shado"
        >
          Verified
        </div>
      )}
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 flex flex-col gap-3">
        <div>
          <div className="flex items-center justify-between text-[0.7rem] text-white/80 mb-1">
            <div className="flex items-center gap-1">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path
                  d="M5.5 1C3.57 1 2 2.57 2 4.5c0 2.63 3.5 6.5 3.5 6.5S9 7.13 9 4.5C9 2.57 7.43 1 5.5 1z"
                  stroke="white"
                  strokeWidth="1"
                />
                <circle
                  cx="5.5"
                  cy="4.5"
                  r="1.2"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
              {card.walk}
            </div>
            <span className="font-semibold text-[0.75rem]">{card.type}</span>
          </div>
          <h3 className="font-serif text-[1.9rem] font-normal text-white leading-tight">
            {card.name}
          </h3>
          <div className="flex items-center gap-1 text-[0.68rem] text-white/80 mt-0.5">
            <svg width="7" height="9" viewBox="0 0 7 9" fill="white">
              <path d="M3.5 0C1.57 0 0 1.57 0 3.5c0 2.63 3.5 5.5 3.5 5.5S7 6.13 7 3.5C7 1.57 5.43 0 3.5 0z" />
            </svg>
            {card.location}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[1.1rem] font-extrabold text-white">
            {card.price}
          </span>
          <span className="text-[0.72rem] text-white/70 pt-1">/ month</span>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          {card.amenities.map((a) => {
            const Icon = ICONS[a];

            return (
              <div
                key={a}
                className="flex items-center gap-2 text-white text-sm"
              >
                {Icon && <Icon size={16} />}
                <span>{a}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
