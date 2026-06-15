import Link from 'next/link'
import { MessageCircle, Mail, Globe, MapPin } from 'lucide-react'

const serviceLinks = [
  { label: 'Desarrollo Web',        href: '/servicios/desarrollo-web' },
  { label: 'Aplicaciones Móviles',  href: '/servicios/aplicaciones-moviles' },
  { label: 'Software a Medida',     href: '/servicios/software-a-medida' },
  { label: 'eCommerce',             href: '/servicios/ecommerce' },
]

const companyLinks = [
  { label: 'Inicio',      href: '/' },
  { label: 'Nosotros',    href: '/nosotros' },
  { label: 'Productos',   href: '/productos' },
  { label: 'Contacto',    href: '/contacto' },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--text)] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <span className="text-2xl font-black text-[var(--accent)]">N</span>
              <span className="text-lg font-bold text-white">NexvoApp</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Desarrollamos software a medida que impulsa el crecimiento de empresas en Bolivia y Latinoamérica.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/8 border border-white/12 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/15 transition-all"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://techventory.nexvoapp.lat"
                  target="_blank" rel="noopener noreferrer"
                  className="text-sm text-white/55 hover:text-[var(--accent)] transition-colors"
                >
                  Techventory ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <a href="https://wa.me/59161200378" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors">
                <MessageCircle size={14} className="text-[#25D366] flex-shrink-0" /> 61200378
              </a>
              <a href="mailto:roberto.zarateaiquipa@gmail.com"
                className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors">
                <Mail size={14} className="text-[var(--accent)] flex-shrink-0" />
                <span className="truncate">roberto.zarateaiquipa@gmail.com</span>
              </a>
              <a href="https://nexvoapp.lat" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/55 hover:text-white transition-colors">
                <Globe size={14} className="text-blue-400 flex-shrink-0" /> nexvoapp.lat
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/40">
                <MapPin size={14} className="flex-shrink-0" /> La Paz, Bolivia
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/40">© 2026 NexvoApp · Todos los derechos reservados.</p>
          <p className="text-sm text-white/30">Hecho con ❤️ en La Paz, Bolivia</p>
        </div>
      </div>

      {/* WhatsApp float */}
      <a
        href="https://wa.me/59161200378"
        target="_blank" rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center text-white z-40 hover:scale-110 transition-transform"
        style={{ boxShadow: '0 8px 24px rgba(37,211,102,0.4)' }}
      >
        <MessageCircle size={24} className="fill-white" strokeWidth={1.5} />
      </a>
    </footer>
  )
}
