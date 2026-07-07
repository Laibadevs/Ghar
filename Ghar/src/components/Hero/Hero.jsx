import { useState } from 'react'
import { Link } from 'react-router-dom'
import front from '../../assets/front.png'
import student from '../../assets/student.png'
import st1 from '../../assets/st1.png'
import st2 from '../../assets/st2.png'
import { motion } from "framer-motion";

import { GrLocationPin } from "react-icons/gr";

import { MapPin, Filter, Heart, Camera, Users, Search, ArrowRight, GraduationCap, ShieldCheck, Star, Quote, Target, Globe, ContactRound, Mail, Phone, HelpCircle, Wallet, MessageCircle } from "lucide-react";
//import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckBadgeIcon, AcademicCapIcon, WalletIcon, UserIcon } from "@heroicons/react/24/solid";
const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const stagger = (delay = 0) => ({
  ...fade,
  transition: {
    duration: 0.6,
    delay,
  },
});
export default function Hero() {
  const [q, setQ] = useState('')
  const avatars = [student, st1, st2];
  return (
    <section className="w-full bg-[#f5f5f3] px-20 pt-8 pb-0 overflow-hidden">
      <div className="flex items-start gap-12">
        {/* ── LEFT ── */}
        <div className="flex flex-col gap-5 max-w-[550px] pb-10">
          {/* Live badge */}
          <motion.div {...stagger(0)}>
          <div className="flex items-center gap-2 bg-[rgba(47,160,132,0.18)] text-[#2FA084] text-[0.82rem] font-semibold px-3.5 py-2 rounded-full w-fit border border-[rgba(47,160,132,0.35)]">
            <GrLocationPin className="w-4 h-4 text-[#2FA084]" />
            Now Live in Karachi, Lahore &amp; Islamabad
          </div>
          </motion.div>

         {/* Headline */}
   <motion.div {...stagger(0.1)}> 
  <h1 className="font-serif text-[4.5rem] font-normal leading-[1.08] tracking-[-1px] text-#000000">
    Find your <span className="text-[#2FA084]">room</span><br/>
    <span className="text-[#2FA084]">near campus</span><br/>
    <span className="inline-flex items-center gap-3">
      <span className="inline-block w-12 h-[2.5px] bg-black rounded-full shrink-0"/>
      without the
    </span><br/>
    chaos.
  </h1>
</motion.div>
          {/* Subtitle */}
          <motion.p
    {...stagger(0.2)} className="text-[1rem] text-[#555] leading-relaxed max-w-[450px]">
            Verified hostels, shared rooms and PGs near your campus — map-first, no middlemen. Built for students, by students.
          </motion.p>

         {/* Search bar */}
 <motion.div
    {...stagger(0.3)}
    className="w-[850px] shadow-[1px_4px_6px_rgba(0,0,0,0.12)] rounded-2xl bg-white flex items-center justify-between pl-4 pr-2 py-2 gap-3"
  >
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="11" cy="11" r="7" stroke="#2FA084" strokeWidth="2"/>
      <line x1="16" y1="16" x2="23" y2="23" stroke="#2FA084" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>

    <input
      value={q}
      onChange={(e)=>setQ(e.target.value)}
      placeholder="Search your university or area ......"
      className="flex-1 min-w-0 text-[0.9rem] bg-transparent outline-none"
    />
     <Link
      to={`/browse${q ? `?q=${q}` : ""}`}
      className="bg-[#2FA084] text-white rounded-xl px-4 py-2.5 flex items-center gap-2"
    >
      Search Rooms
    </Link>
  </motion.div>

 {/* Filters */}
  <div className="flex gap-7">
    {["Near University","Move in-Date","Budget filter"].map((item,index)=>(
      <motion.button
        key={item}
        {...stagger(0.4 + index*0.1)}
        whileHover={{
          y:-3,
          scale:1.02
        }}
        whileTap={{
          scale:0.98
        }}
        className="h-12 min-w-[185px] shadow-[0_3px_4px_rgba(0,0,0,0.12)] rounded-xl bg-white flex items-center justify-between px-4"
      >
        <span>{item}</span>

        <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
          <path
            d="M1 1l6 6 6-6"
            stroke="#555"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </motion.button>
    ))}
  </div>
          {/* Social proof */}
        <div className="flex items-center gap-3">
  <div className="flex">
    {avatars.map((avatar, i) => (
      <div
        key={i}
        className="w-10 h-10
         rounded-full overflow-hidden  shadow-sm"
        style={{
          marginLeft: i > 0 ? '-10px' : '0',
          zIndex: 10 - i,
        }}
      >
        <img
          src={avatar}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
    ))}
  </div>
            <div>
              <div className="flex items-center gap-1 text-[0.82rem] font-semibold text-black">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="#F5A623"><polygon points="7,1 8.8,5 13,5.5 10,8.4 10.8,12.6 7,10.5 3.2,12.6 4,8.4 1,5.5 5.2,5"/></svg>
                4.8 &nbsp;•&nbsp; 2,300+ students
              </div>
              <div className="text-[0.75rem] text-gray-400 pl-1">already found their next room</div>
            </div>
          </div>
        </div>

        {/* ── RIGHT — room image ── */}
        <div className="flex-1 relative flex items-start px-6 justify-end" style={{minHeight:'440px'}}>
          {/* Saved badge — floats */}
          <div className="absolute top-10 left-115 z-40 af">
            <div className="flex items-center gap-2 bg-white rounded-2xl shadow-[2px_3px_8px_rgba(0,0,0,0.15)] px-3 py-2 text-[0.8rem] font-semibold text-black">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="#2FA084"><path d="M9 16s-7-4.5-7-9.5A4.5 4.5 0 019 3.5 4.5 4.5 0 0116 6.5C16 11.5 9 16 9 16z"/></svg>
              Saved • 12 rooms
            </div>
          </div>

          {/* Room image card */}
          <div className="w-full max-w-[400px] rounded-[28px]  shadow-[0_20px_60px_rgba(0,0,0,0.2)] relative" style={{height:'600px'}}>
            {/* Warm room background */}
             <div className="absolute inset-0 rounded-[28px] overflow-hidden">
    <img src={front} alt="front" className="w-full h-full object-cover"/>
  </div>
            {/* Verified Landlords badge — floats with delay */}
              <div className="absolute bottom-40 right-[-70px] z-40 af2">
    <div className="flex items-center gap-2 bg-black text-white rounded-2xl shadow-xl px-3 py-2 text-[0.78rem] font-medium">
     
    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="size-6"
>
  {/* outer badge */}
  <path
    fill="#F5A623"
    d="M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
  />

  {/* white tick */}
  <path
    d="M9 12.75 11.25 15 15 9.75"
    fill="none"
    stroke="#FFFFFF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

      Verified Landlords
    </div>
  </div>


            {/* Listing info */}
            <div className="absolute bottom-8 left-5 right-5 bg-white px-4 py-3 flex items-center justify-between rounded-[15px]">
              <div>
                <div className="font-serif text-[1rem] font-normal text-black">Gulberg Girls Hostel</div>
                <div className="flex items-center gap-2 text-[0.72rem] text-gray-400 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1C3.8 1 2 2.8 2 5c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4z" stroke="#2FA084" strokeWidth="1.2"/><circle cx="6" cy="5" r="1.5" stroke="#2FA084" strokeWidth="1.2"/></svg>
                  6 min walk &nbsp;•&nbsp; LUMS
                </div>
              </div>
              <div className="text-right">
                <div className="text-[0.85rem] font-bold text-[#2FA084]">PKR 8K</div>
                <div className="text-[0.68rem] text-gray-400">per month</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Trust strip ── */}
        <div className="container max-w-7.5xl">
        
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden"
>
  {[
    {
      icon: CheckBadgeIcon,
      title: "Verified Listing",
      body: "All things are verified for your safety.",
    },
    {
      icon: AcademicCapIcon,
      title: "Near your University",
      body: "Find place close to your campus.",
    },
    {
      icon: WalletIcon,
      title: "Affordable Options",
      body: "Filter by price and find what fits your budget.",
    },
    {
      icon: UserIcon,
      title: "Easy Contact",
      body: "Connect direct with owners on WhatsApp.",
    },
  ].map((f, i) => (
    <div
      key={f.title}
      className={`flex items-center gap-4 px-6 py-5 hover:bg-gray-50 transition-colors ${
        i < 3 ? "lg:border-r border-gray-100" : ""
      }`}
    >
      <div className="w-14 h-14 rounded-xl bg-[#E8F5F1] flex items-center justify-center shrink-0">
        <f.icon className="w-8 h-8 text-[#2FA084]" />
      </div>

      <div>
        <h3 className="text-[18px] font-semibold text-[#111] leading-tight">
          {f.title}
        </h3>
        <p className="mt-1 text-[14px] text-[#7A7A7A] leading-snug">
          {f.body}
        </p>
      </div>
    </div>
  ))}
</motion.div>
        </div>
    </section>
  )
}