import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="px-10 pt-12 pb-6 bg-white border-t border-gray-100">
      <div className="flex gap-16 mb-10">
        {/* Brand */}
        <div className="w-60 shrink-0">
          <div className="flex items-center gap-2 mb-4">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
              <polyline points="3,28 20,4 37,28" stroke="#A89070" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="27" y="7" width="7" height="14" rx="1.5" fill="#A89070"/>
            </svg>
            <span className="font-serif text-[1.5rem] font-normal text-gray-800">Ghar</span>
          </div>
          <p className="text-[0.82rem] text-gray-500 leading-relaxed mb-4">
            The cleanest way for Pakistani students to discover hostels, shared rooms and PGs near campus.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {['ig','tw','fb','li'].map(s => (
              <div key={s} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-[#2FA084] group transition-colors">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="4" stroke="#999" strokeWidth="1.5" className="group-hover:stroke-white"/>
                  <circle cx="9" cy="9" r="3" stroke="#999" strokeWidth="1.5" className="group-hover:stroke-white"/>
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* For Students */}
        <div>
          <h3 className="font-serif text-[1.2rem] font-normal text-black mb-4">For Students</h3>
          {['Browse rooms','How it works','Safety guide','Student blog'].map(l => (
            <Link key={l} to="#" className="block text-[0.85rem] text-gray-500 mb-2.5 hover:text-[#2FA084] transition-colors">{l}</Link>
          ))}
        </div>

        {/* For Landlords */}
        <div>
          <h3 className="font-serif text-[1.2rem] font-normal text-black mb-4">For Landlords</h3>
          {['List a property','Pricing','Landlord dashboard','Verification Process'].map(l => (
            <Link key={l} to="#" className="block text-[0.85rem] text-gray-500 mb-2.5 hover:text-[#2FA084] transition-colors">{l}</Link>
          ))}
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="font-serif text-[1.2rem] font-normal text-black mb-4">Get in Touch</h3>
          {[
            { icon:'mail',  text:'hello@Ghar.pk' },
            { icon:'phone', text:'923250487822' },
            { icon:'pin',   text:'Lahore, Pakistan' },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 mb-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                {icon==='mail'  && <><rect x="1" y="3" width="14" height="10" rx="2" stroke="#2FA084" strokeWidth="1.3"/><path d="M1 5l7 5 7-5" stroke="#2FA084" strokeWidth="1.3" strokeLinecap="round"/></>}
                {icon==='phone' && <path d="M3 2h3l1.5 3.5-2 1.2a8 8 0 004.8 4.8l1.2-2L15 11v3a1 1 0 01-1 1A13 13 0 012 3a1 1 0 011-1z" stroke="#2FA084" strokeWidth="1.3" strokeLinecap="round"/>}
                {icon==='pin'   && <><path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="#2FA084" strokeWidth="1.3"/><circle cx="8" cy="6" r="1.8" stroke="#2FA084" strokeWidth="1.3"/></>}
              </svg>
              <span className="text-[0.82rem] text-gray-600">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-between pt-5 border-t border-gray-100">
        <p className="text-[0.8rem] text-gray-400">© 2026 Ghar — Made for students in Pakistan.</p>
        <div className="flex items-center gap-8">
          {['Privacy','Contact','Terms'].map(l => (
            <Link key={l} to="#" className="text-[0.8rem] text-gray-400 hover:text-[#2FA084] transition-colors">{l}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}