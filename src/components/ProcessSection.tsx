'use client'

import { motion } from 'framer-motion'
import { Search, PenTool, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Análisis y entendimiento',
    description: 'Escuchamos tu idea o problema, entendemos el contexto del negocio y definimos el alcance real del proyecto.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Diseño y propuesta',
    description: 'Diseñamos la arquitectura, los flujos y la interfaz. Te presentamos una propuesta clara con tiempos y costos.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Desarrollo por fases',
    description: 'Construimos el software en ciclos cortos con entregas frecuentes para que puedas validar en cada paso.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Despliegue y soporte',
    description: 'Lanzamos el producto en producción y brindamos soporte continuo para que todo funcione sin problemas.',
  },
]

export default function ProcessSection() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-1/4 w-[400px] h-[300px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)',
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-purple-400 text-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Proceso
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Cómo trabajamos
          </h2>
          <p className="text-lg text-[#94A3B8]">
            Un proceso claro, sin sorpresas
          </p>
        </motion.div>

        {/* Timeline — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
              className="h-full origin-left"
              style={{ background: 'linear-gradient(to right, #2563EB, #7C3AED)' }}
            />
          </div>

          {/* Connecting line — mobile only */}
          <div className="lg:hidden absolute top-0 bottom-0 left-9 w-px overflow-hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
              className="w-full h-full origin-top"
              style={{ background: 'linear-gradient(to bottom, #2563EB, #7C3AED)' }}
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  className="relative flex lg:flex-col items-start lg:items-start gap-5 lg:gap-4"
                >
                  {/* Icon bubble */}
                  <div
                    className="relative z-10 w-[4.5rem] h-[4.5rem] flex-shrink-0 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      background: 'linear-gradient(135deg, #0d1225, #131830)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(124,58,237,0.15))' }}
                    />
                    <Icon size={22} className="text-white/60" strokeWidth={1.5} />
                    <span
                      className="absolute -top-2 -right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white"
                      style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 lg:pt-0 pt-2">
                    <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
