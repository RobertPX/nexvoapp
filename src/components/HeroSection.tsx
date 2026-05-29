'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react'

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: {
      x: number; y: number; vx: number; vy: number
      size: number; opacity: number; color: string
    }[] = []

    const colors = ['#2563EB', '#7C3AED', '#60a5fa', '#a78bfa']

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0')
        ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  )
}

function AbstractOrb() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow */}
      <div
        className="absolute w-80 h-80 rounded-full animate-glow-pulse"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(124,58,237,0.1) 50%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      {/* Main orb */}
      <div className="relative w-56 h-56 animate-float">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(37,99,235,0.8) 0%, rgba(124,58,237,0.9) 60%, rgba(192,132,252,0.7) 100%)',
            boxShadow: '0 0 60px rgba(124,58,237,0.4), 0 0 120px rgba(37,99,235,0.2), inset 0 1px 0 rgba(255,255,255,0.15)',
          }}
        />
        {/* Inner highlight */}
        <div
          className="absolute top-6 left-8 w-20 h-12 rounded-full opacity-30"
          style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, transparent 70%)' }}
        />
        {/* Gradient letter N */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-7xl font-black text-white/20 select-none"
            style={{ textShadow: '0 0 30px rgba(255,255,255,0.3)' }}
          >
            N
          </span>
        </div>
      </div>

      {/* Orbiting rings */}
      <div className="absolute w-72 h-72">
        <div
          className="absolute inset-0 rounded-full border border-[#2563EB]/20"
          style={{ transform: 'rotateX(75deg)' }}
        />
      </div>
      <div className="absolute w-56 h-56">
        <div
          className="absolute inset-0 rounded-full border border-[#7C3AED]/15"
          style={{ transform: 'rotateX(75deg) rotateZ(30deg)' }}
        />
      </div>

      {/* Orbiting dots */}
      <div className="absolute w-80 h-80">
        <div className="absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 animate-orbit">
          <div className="w-full h-full rounded-full bg-[#2563EB] shadow-lg shadow-blue-500/50" />
        </div>
      </div>
      <div className="absolute w-64 h-64">
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 animate-orbit-reverse">
          <div className="w-full h-full rounded-full bg-[#7C3AED] shadow-lg shadow-purple-500/50" />
        </div>
      </div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -top-4 -right-4 bg-[#0d1225] border border-[#2563EB]/30 rounded-lg px-3 py-1.5 text-xs font-medium text-blue-400 shadow-lg shadow-blue-500/10"
      >
        ⚡ SaaS Moderno
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute -bottom-4 -left-4 bg-[#0d1225] border border-[#7C3AED]/30 rounded-lg px-3 py-1.5 text-xs font-medium text-purple-400 shadow-lg shadow-purple-500/10"
      >
        🚀 A medida
      </motion.div>
    </div>
  )
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden circuit-bg"
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <Particles />
        {/* Aurora spotlight */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-40"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.25) 0%, rgba(124,58,237,0.15) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute top-1/3 right-0 w-[400px] h-[400px] opacity-20"
          style={{
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.4) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0E1A] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left copy */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Badge */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/25 text-blue-400 text-sm mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Estudio de software a medida
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-white mb-6"
            >
              Construimos software que{' '}
              <span className="gradient-text-bright">impulsa</span>{' '}
              tu negocio
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="text-lg sm:text-xl text-[#94A3B8] leading-relaxed mb-10"
            >
              Desarrollamos sistemas a medida, aplicaciones móviles y páginas web modernas para empresas que quieren crecer.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href="#productos"
                className="btn-primary shimmer-hover group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white shadow-lg shadow-[#2563EB]/25 w-full sm:w-auto justify-center"
              >
                <span>Ver productos</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1 relative z-10" />
              </a>
              <a
                href="https://wa.me/59161200378"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white w-full sm:w-auto justify-center"
              >
                <MessageCircle size={16} className="text-[#94A3B8] group-hover:text-white transition-colors" />
                Hablar con nosotros
              </a>
            </motion.div>
          </div>

          {/* Right 3D orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="flex-1 flex items-center justify-center w-full max-w-sm lg:max-w-md mx-auto lg:mx-0"
            style={{ height: 380 }}
          >
            <AbstractOrb />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce-soft"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  )
}
