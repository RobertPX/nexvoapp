'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 8, suffix: '+', label: 'Proyectos en producción' },
  { value: 4, suffix: '+', label: 'Años de experiencia combinada' },
  { value: 6, suffix: '+', label: 'Clientes acompañados' },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1600
          const steps = 40
          const step = target / steps
          let current = 0
          const interval = setInterval(() => {
            current += step
            if (current >= target) {
              setCount(target)
              clearInterval(interval)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="counter-value">
      {count}{suffix}
    </span>
  )
}

function CircuitDecoration() {
  return (
    <div className="relative w-full h-72 lg:h-full min-h-64">
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circuit lines */}
        <line x1="40" y1="80" x2="120" y2="80" stroke="#2563EB" strokeWidth="1" />
        <line x1="120" y1="80" x2="120" y2="160" stroke="#2563EB" strokeWidth="1" />
        <line x1="120" y1="160" x2="200" y2="160" stroke="#7C3AED" strokeWidth="1" />
        <line x1="200" y1="160" x2="200" y2="240" stroke="#7C3AED" strokeWidth="1" />
        <line x1="200" y1="240" x2="280" y2="240" stroke="#2563EB" strokeWidth="1" />
        <line x1="60" y1="140" x2="160" y2="140" stroke="#7C3AED" strokeWidth="1" />
        <line x1="160" y1="140" x2="160" y2="200" stroke="#2563EB" strokeWidth="1" />
        <line x1="160" y1="200" x2="240" y2="200" stroke="#7C3AED" strokeWidth="1" />
        <line x1="80" y1="200" x2="80" y2="280" stroke="#2563EB" strokeWidth="1" />
        <line x1="80" y1="280" x2="180" y2="280" stroke="#7C3AED" strokeWidth="1" />
        <line x1="240" y1="60" x2="240" y2="120" stroke="#7C3AED" strokeWidth="1" />
        <line x1="240" y1="120" x2="280" y2="120" stroke="#2563EB" strokeWidth="1" />

        {/* Nodes */}
        {[
          [120, 80], [120, 160], [200, 160], [200, 240],
          [160, 140], [160, 200], [80, 280], [240, 120],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#7C3AED" opacity="0.8" />
        ))}
        {[
          [40, 80], [280, 240], [60, 140], [240, 200],
          [80, 200], [180, 280], [240, 60], [280, 120],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.5" fill="#2563EB" opacity="0.6" />
        ))}
      </svg>

      {/* Center orb */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div
            className="w-32 h-32 rounded-full animate-glow-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, rgba(124,58,237,0.2) 50%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
          <div
            className="absolute inset-4 rounded-full animate-float"
            style={{
              background: 'linear-gradient(135deg, rgba(37,99,235,0.6), rgba(124,58,237,0.7))',
              boxShadow: '0 0 40px rgba(124,58,237,0.3)',
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-black text-white/30 select-none">N</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="nosotros" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)',
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
            Nosotros
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Sobre NexvoApp
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="text-lg text-[#94A3B8] leading-relaxed mb-6">
              Somos un equipo pequeño y enfocado, especializado en construir software a medida para empresas y emprendimientos.
            </p>
            <p className="text-lg text-[#94A3B8] leading-relaxed mb-6">
              Combinamos arquitectura moderna, diseño cuidado y entregas rápidas.
            </p>
            <p className="text-lg text-[#94A3B8] leading-relaxed">
              Trabajamos directo con el cliente, sin intermediarios.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div
                className="h-px flex-1"
                style={{ background: 'linear-gradient(to right, rgba(37,99,235,0.5), transparent)' }}
              />
              <span className="text-sm text-[#94A3B8] italic">La Paz, Bolivia</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <CircuitDecoration />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="bg-[#0b0f1e] border border-white/8 rounded-2xl p-7 text-center hover:border-[#2563EB]/30 transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-black gradient-text mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-[#94A3B8] text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
