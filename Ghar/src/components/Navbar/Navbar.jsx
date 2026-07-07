import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { motion } from "framer-motion"

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
}

const stagger = (delay = 0) => ({
  ...fade,
  transition: { duration: 0.6, delay },
})

export default function Navbar() {
  return (
    <motion.nav
      {...stagger(0)}
      className="w-full flex items-center justify-between px-20 py-4 bg-[#f5f5f3]"
    >
      {/* Logo */}
      <Link to="/" className="flex items-center w-16">
        <img src={logo} alt='logo' className="block w-full" />
      </Link>

      {/* Nav pill — whole pill fades in at once, no individual stagger */}
      <div className="shadow-[0_2px_2px_rgba(0,0,0,0.18)] rounded-full bg-white flex items-center px-10 py-2.5 gap-25">
        {['Browse Listings','About','How its works','For Landlords'].map(l => (
          <Link
            key={l}
            to="#"
            className="font-noto text-[1rem] text-black hover:text-[#2FA084] transition-colors whitespace-nowrap"
          >
            {l}
          </Link>
        ))}
      </div>

      {/* Auth */}
      <div className="flex items-center gap-8">
        <Link to="/login" className="font-noto font-semibold text-[1rem] text-black hover:text-[#2FA084] transition-colors">Login</Link>
        <Link to="/signup" className="shadow-[0_4px_4px_rgba(0,0,0,0.18)] rounded-full bg-[#1F6F5F] text-white font-noto font-semibold text-[1rem] px-7 py-2.5 hover:bg-[#2FA084] transition-colors">Sign up</Link>
      </div>

    </motion.nav>
  )
}