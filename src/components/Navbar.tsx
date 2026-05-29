'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ExternalLink, ChevronDown, Package, Clock } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Productos', href: '#productos', hasDropdown: true },
  { label: 'Sobre Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

const products = [
  {
    name: 'Techventory',
    description: 'Sistema SaaS de gestión de inventario y ventas para negocios',
    href: 'https://techventory.nexvoapp.lat',
    icon: Package,
    active: true,
  },
  {
    name: 'Más productos próximamente',
    description: 'Nuevas soluciones en desarrollo',
    href: null,
    icon: Clock,
    active: false,
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(10,14,26,0.85)] backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2 group">
              <span className="text-2xl font-black gradient-text leading-none">N</span>
              <span className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors">
                NexvoApp
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm text-[#94A3B8] hover:text-white transition-colors relative group">
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                      />
                      <span className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-[#2563EB] to-[#7C3AED] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                    </button>

                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-xl bg-[#0d1225] border border-white/10 shadow-2xl shadow-black/60 p-2"
                          style={{ transformOrigin: 'top center' }}
                        >
                          {products.map((p) =>
                            p.active ? (
                              <a
                                key={p.name}
                                href={p.href!}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group/item"
                              >
                                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2563EB]/20 to-[#7C3AED]/20 border border-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                                  <p.icon size={15} className="text-blue-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-sm font-medium text-white">{p.name}</span>
                                    <ExternalLink size={11} className="text-white/30 group-hover/item:text-white/60 transition-colors" />
                                  </div>
                                  <p className="text-xs text-[#94A3B8] mt-0.5 leading-relaxed">{p.description}</p>
                                </div>
                              </a>
                            ) : (
                              <div
                                key={p.name}
                                className="flex items-start gap-3 p-3 rounded-lg opacity-40 cursor-not-allowed select-none"
                              >
                                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                  <p.icon size={15} className="text-white/30" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-white/60">{p.name}</span>
                                    <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 animate-pulse-badge">
                                      Soon
                                    </span>
                                  </div>
                                  <p className="text-xs text-white/30 mt-0.5">{p.description}</p>
                                </div>
                              </div>
                            )
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2 text-sm text-[#94A3B8] hover:text-white transition-colors relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-[#2563EB] to-[#7C3AED] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  </a>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="https://wa.me/59161200378"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shimmer-hover inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white"
              >
                <span>Hablemos</span>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: 'block' }}
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ display: 'block' }}
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', duration: 0.4, bounce: 0.1 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-[#0d1225] border-l border-white/10 p-6 flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold gradient-text">NexvoApp</span>
                <button onClick={() => setMobileOpen(false)} className="p-1 text-white/50 hover:text-white transition-colors">
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-3 py-3 text-[#94A3B8] hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-auto pt-6">
                <a
                  href="https://wa.me/59161200378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shimmer-hover w-full inline-flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold text-white"
                >
                  <span>Hablemos</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
