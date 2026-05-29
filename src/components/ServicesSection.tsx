'use client'

import { motion } from 'framer-motion'
import { Code2, Smartphone, Globe } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Desarrollo de Software a Medida',
    description:
      'Sistemas empresariales, ERPs, automatizaciones y gestión interna. Construimos exactamente lo que tu negocio necesita.',
    gradient: 'from-[#2563EB]/20 to-[#2563EB]/5',
    border: 'border-[#2563EB]/15',
    hoverBorder: 'hover:border-[#2563EB]/50',
    iconBg: 'from-[#2563EB] to-[#3b82f6]',
    glow: 'hover:shadow-[0_24px_64px_rgba(37,99,235,0.18)]',
    tags: ['ERP', 'SaaS', 'APIs', 'Automatización'],
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones Móviles',
    description:
      'Apps iOS y Android con experiencia de usuario premium. Nativas o híbridas, con diseño cuidado y rendimiento real.',
    gradient: 'from-[#7C3AED]/20 to-[#7C3AED]/5',
    border: 'border-[#7C3AED]/15',
    hoverBorder: 'hover:border-[#7C3AED]/50',
    iconBg: 'from-[#7C3AED] to-[#8b5cf6]',
    glow: 'hover:shadow-[0_24px_64px_rgba(124,58,237,0.18)]',
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
  },
  {
    icon: Globe,
    title: 'Páginas y Aplicaciones Web',
    description:
      'Sitios modernos, rápidos y optimizados para SEO y conversión. Desde landing pages hasta plataformas web completas.',
    gradient: 'from-[#2563EB]/10 via-[#7C3AED]/15 to-[#7C3AED]/5',
    border: 'border-white/10',
    hoverBorder: 'hover:border-white/25',
    iconBg: 'from-[#2563EB] to-[#7C3AED]',
    glow: 'hover:shadow-[0_24px_64px_rgba(124,58,237,0.15)]',
    tags: ['Next.js', 'SEO', 'Landing Page', 'Web App'],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] } },
}

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-blue-400 text-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Servicios
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Lo que hacemos
          </h2>
          <p className="text-lg text-[#94A3B8] leading-relaxed">
            Tecnología a medida para resolver problemas reales
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                variants={item}
                className={`group relative bg-gradient-to-br ${svc.gradient} border ${svc.border} ${svc.hoverBorder} rounded-2xl p-7 card-hover ${svc.glow} gradient-border transition-all duration-300 cursor-default overflow-hidden`}
              >
                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden rounded-2xl pointer-events-none">
                  <div
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle, rgba(37,99,235,0.15), transparent 70%)` }}
                  />
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.iconBg} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}
                >
                  <Icon size={20} className="text-white" strokeWidth={1.75} />
                </div>

                <h3 className="text-lg font-semibold text-white mb-3 leading-snug">{svc.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-5 group-hover:text-white/70 transition-colors">
                  {svc.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/50 group-hover:text-white/70 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
