'use client'

import { MessageCircle, Mail, Globe } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Productos', href: '#productos' },
  { label: 'Sobre Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer id="contacto" className="relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left: brand + socials */}
          <div>
            <a href="#inicio" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black gradient-text leading-none">N</span>
              <span className="text-lg font-semibold text-white">NexvoApp</span>
            </a>
            <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 max-w-xs">
              Construimos software a medida para empresas que quieren crecer. La Paz, Bolivia.
            </p>
            <div className="flex items-center gap-2">
              {[
                {
                  href: 'https://instagram.com',
                  label: 'Instagram',
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  href: 'https://linkedin.com',
                  label: 'LinkedIn',
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
                {
                  href: 'https://github.com',
                  label: 'GitHub',
                  svg: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  ),
                },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-[#94A3B8] hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Center: navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: contact info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Contacto</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/59161200378"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={14} className="text-[#25D366]" />
                </div>
                61200378
              </a>
              <a
                href="mailto:roberto.zarateaiquipa@gmail.com"
                className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-blue-400" />
                </div>
                roberto.zarateaiquipa@gmail.com
              </a>
              <a
                href="https://nexvoapp.lat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center flex-shrink-0">
                  <Globe size={14} className="text-purple-400" />
                </div>
                nexvoapp.lat
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-10 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.3), rgba(124,58,237,0.3), transparent)' }}
        />

        {/* Bottom */}
        <div className="text-center">
          <p className="text-sm text-[#94A3B8]/60">
            © 2026 NexvoApp · Hecho con ❤️ en La Paz, Bolivia
          </p>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/59161200378"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#25D366] shadow-[0_8px_32px_rgba(37,211,102,0.4)] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] transition-all z-40"
      >
        <MessageCircle size={24} className="fill-white" strokeWidth={1.5} />
      </a>
    </footer>
  )
}
