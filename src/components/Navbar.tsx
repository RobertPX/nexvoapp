'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Code2, Smartphone, Layers, ShoppingBag, ExternalLink } from 'lucide-react'

const services = [
  { icon: Code2,       label: 'Desarrollo Web',         href: '/servicios/desarrollo-web',        desc: 'Sitios y aplicaciones web a medida' },
  { icon: Smartphone,  label: 'Aplicaciones Móviles',   href: '/servicios/aplicaciones-moviles',  desc: 'Apps iOS y Android nativas e híbridas' },
  { icon: Layers,      label: 'Software a Medida',      href: '/servicios/software-a-medida',     desc: 'ERPs, CRMs y sistemas empresariales' },
  { icon: ShoppingBag, label: 'eCommerce',              href: '/servicios/ecommerce',             desc: 'Tiendas online de alto rendimiento' },
]

const navLinks = [
  { label: 'Inicio',     href: '/' },
  { label: 'Nosotros',   href: '/nosotros' },
  { label: 'Productos',  href: '/productos' },
  { label: 'Contacto',   href: '/contacto' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[var(--border)] shadow-[var(--shadow-sm)]'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <span className="text-2xl font-black gradient-text leading-none">N</span>
              <span className="text-lg font-bold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                NexvoApp
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Inicio */}
              <Link href="/" className={`nav-link px-3 py-2 ${isActive('/') ? 'active' : ''}`}>
                Inicio
              </Link>

              {/* Servicios dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`nav-link px-3 py-2 flex items-center gap-1 ${pathname.startsWith('/servicios') ? 'active text-[var(--primary)]' : ''}`}
                >
                  Servicios
                  <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                      style={{ transformOrigin: 'top center' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[340px] bg-white border border-[var(--border)] rounded-2xl shadow-[var(--shadow-lg)] p-2"
                    >
                      <div className="px-3 py-2 mb-1">
                        <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
                          Nuestros servicios
                        </span>
                      </div>
                      {services.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--bg-soft)] transition-colors group/item"
                        >
                          <div className="icon-box w-9 h-9 rounded-lg flex-shrink-0">
                            <s.icon size={15} />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-[var(--text)] group-hover/item:text-[var(--primary)] transition-colors">
                              {s.label}
                            </div>
                            <div className="text-xs text-[var(--text-muted)]">{s.desc}</div>
                          </div>
                        </Link>
                      ))}
                      <div className="border-t border-[var(--border)] mt-2 pt-2 px-3 pb-1">
                        <Link
                          href="/servicios"
                          className="text-xs font-semibold text-[var(--primary)] hover:underline flex items-center gap-1"
                        >
                          Ver todos los servicios →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`nav-link px-3 py-2 ${isActive(l.href) ? 'active' : ''}`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://techventory.nexvoapp.lat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
              >
                Techventory <ExternalLink size={12} />
              </a>
              <a
                href="https://wa.me/59161200378"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm py-2 px-4"
              >
                Hablemos
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-[var(--text-body)] hover:text-[var(--primary)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.12 }} style={{ display: 'block' }}>
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.12 }} style={{ display: 'block' }}>
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', duration: 0.35, bounce: 0.08 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-white border-l border-[var(--border)] flex flex-col lg:hidden shadow-[var(--shadow-xl)]"
            >
              <div className="flex items-center justify-between p-5 border-b border-[var(--border)]">
                <span className="text-lg font-bold gradient-text">NexvoApp</span>
                <button onClick={() => setMobileOpen(false)} className="p-1 text-[var(--text-muted)]">
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-0.5">
                <Link href="/" className="px-3 py-3 rounded-xl text-sm font-medium text-[var(--text-body)] hover:bg-[var(--bg-soft)] hover:text-[var(--primary)] transition-all">
                  Inicio
                </Link>

                <div className="px-3 pt-3 pb-1">
                  <span className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Servicios</span>
                </div>
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[var(--text-body)] hover:bg-[var(--bg-soft)] hover:text-[var(--primary)] transition-all"
                  >
                    <div className="icon-box w-8 h-8 rounded-lg flex-shrink-0">
                      <s.icon size={13} />
                    </div>
                    {s.label}
                  </Link>
                ))}

                {navLinks.slice(1).map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="px-3 py-3 rounded-xl text-sm font-medium text-[var(--text-body)] hover:bg-[var(--bg-soft)] hover:text-[var(--primary)] transition-all"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>

              <div className="p-4 border-t border-[var(--border)] flex flex-col gap-2">
                <a
                  href="https://techventory.nexvoapp.lat"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline text-sm justify-center"
                >
                  Techventory <ExternalLink size={13} />
                </a>
                <a
                  href="https://wa.me/59161200378"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary text-sm justify-center"
                >
                  Hablemos
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
