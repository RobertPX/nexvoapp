'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Package, Clock, Check, BarChart3, Users, Cloud, Layers } from 'lucide-react'

const features = [
  { icon: Layers, label: 'Inventario en tiempo real' },
  { icon: Users, label: 'Multiusuario' },
  { icon: BarChart3, label: 'Reportes y ventas' },
  { icon: Cloud, label: 'Acceso en la nube' },
]

function DashboardMockup() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 scale-95 rounded-3xl blur-3xl opacity-50"
        style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(124,58,237,0.25))' }}
      />
      <div className="relative bg-[#0b0f1e] border border-white/10 rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)]">
        {/* Window bar */}
        <div className="bg-[#080c18] border-b border-white/5 px-4 py-3 flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-4">
            <div className="bg-white/5 rounded-md px-3 py-1 text-[10px] text-white/30 text-center">
              techventory.nexvoapp.lat
            </div>
          </div>
        </div>

        {/* App header */}
        <div className="bg-[#090d1c] border-b border-white/5 px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center">
              <span className="text-white font-bold text-xs">T</span>
            </div>
            <span className="text-sm font-semibold text-white">Techventory</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-[#94A3B8]">En vivo</span>
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Ventas hoy', value: 'Bs 4,280', color: 'text-emerald-400', up: true },
              { label: 'Productos', value: '1,248', color: 'text-blue-400', up: null },
              { label: 'Stock bajo', value: '7', color: 'text-orange-400', up: false },
            ].map((s) => (
              <div key={s.label} className="bg-white/4 rounded-xl p-3 border border-white/5">
                <div className="text-[9px] text-[#94A3B8] mb-1">{s.label}</div>
                <div className={`text-sm font-bold ${s.color}`}>{s.value}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="bg-white/3 rounded-xl border border-white/5 p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-[#94A3B8]">Ventas esta semana</span>
              <span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-full">+18.4%</span>
            </div>
            <div className="flex items-end gap-1.5 h-12">
              {[35, 60, 42, 78, 55, 92, 70].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end">
                  <div
                    className="w-full rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background: i === 5
                        ? 'linear-gradient(to top, #2563EB, #7C3AED)'
                        : 'rgba(255,255,255,0.08)',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Recent sales */}
          <div className="bg-white/3 rounded-xl border border-white/5 p-3">
            <div className="text-[10px] font-medium text-[#94A3B8] mb-2.5">Últimas ventas</div>
            <div className="space-y-2">
              {[
                { name: 'J. García', product: 'Laptop HP', amount: 'Bs 1,850' },
                { name: 'M. López', product: 'Teclado + Mouse', amount: 'Bs 355' },
                { name: 'C. Ruiz', product: 'Monitor LG 24"', amount: 'Bs 980' },
              ].map((s) => (
                <div key={s.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#2563EB]/30 to-[#7C3AED]/30 flex items-center justify-center text-[8px] text-blue-300 font-bold">
                      {s.name[0]}
                    </div>
                    <div>
                      <div className="text-[9px] text-white/80">{s.name}</div>
                      <div className="text-[8px] text-white/30">{s.product}</div>
                    </div>
                  </div>
                  <span className="text-[9px] font-semibold text-emerald-400">{s.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  return (
    <section id="productos" className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)',
            filter: 'blur(80px)',
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
            <Package size={13} />
            Productos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Nuestros productos
          </h2>
          <p className="text-lg text-[#94A3B8]">
            Software propio resolviendo problemas reales
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Featured: Techventory — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-2 bg-[#0b0f1e] border border-white/10 rounded-2xl overflow-hidden hover:border-[#2563EB]/40 transition-all duration-300 hover:shadow-[0_24px_64px_rgba(37,99,235,0.12)]"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left: mockup */}
              <div className="md:w-56 lg:w-64 flex-shrink-0 p-5 bg-[#080c18] border-b md:border-b-0 md:border-r border-white/5">
                <DashboardMockup />
              </div>

              {/* Right: info */}
              <div className="flex-1 p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <Package size={16} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Techventory</h3>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                        En producción
                      </span>
                    </div>
                  </div>

                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">
                    Sistema SaaS de gestión de inventario y ventas. Multiusuario, en la nube, simple de usar.
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 mb-6">
                    {features.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
                          <Icon size={11} className="text-blue-400" />
                        </div>
                        <span className="text-xs text-white/70">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="https://techventory.nexvoapp.lat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shimmer-hover inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white self-start"
                >
                  <span>Conocer más</span>
                  <ArrowRight size={14} className="relative z-10" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Coming soon card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="bg-[#0b0f1e] border border-white/8 rounded-2xl p-7 flex flex-col items-center justify-center text-center min-h-[240px] opacity-60"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <Clock size={20} className="text-white/40" />
            </div>
            <h3 className="text-white/60 font-semibold mb-2">Más productos en camino</h3>
            <p className="text-[#94A3B8]/60 text-sm mb-4">Nuevas soluciones en desarrollo activo</p>
            <span className="text-xs px-3 py-1 rounded-full bg-purple-500/15 text-purple-400/80 border border-purple-500/20 animate-pulse-badge">
              Coming soon
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
