'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Full-width gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(124,58,237,0.2) 50%, rgba(37,99,235,0.1) 100%)' }}
        />
        {/* Noise grain */}
        <div className="noise-overlay" style={{ position: 'absolute', zIndex: 1, opacity: 0.04 }} />
        {/* Glow spots */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.4), rgba(124,58,237,0.4), transparent)' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.3), rgba(124,58,237,0.3), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            ¿Tienes una idea o un problema que resolver?
          </h2>
          <p className="text-xl text-[#94A3B8] mb-10 leading-relaxed">
            Te ayudamos a construir el software que tu negocio necesita.
          </p>
          <a
            href="https://wa.me/59161200378"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shimmer-hover inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-white shadow-2xl shadow-[#2563EB]/30"
          >
            <MessageCircle size={20} className="relative z-10" />
            <span>Hablemos por WhatsApp</span>
            <ArrowRight size={18} className="relative z-10" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
