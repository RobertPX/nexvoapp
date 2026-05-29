'use client'

import { motion } from 'framer-motion'

const techRow1 = [
  { name: 'Next.js' },
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'Node.js' },
  { name: 'NestJS' },
  { name: 'PostgreSQL' },
  { name: 'Docker' },
  { name: 'Tailwind CSS' },
  { name: 'Cloudflare' },
  { name: 'Linux' },
  { name: 'Figma' },
]

const techRow2 = [
  { name: 'Prisma' },
  { name: 'Redis' },
  { name: 'GraphQL' },
  { name: 'REST APIs' },
  { name: 'CI/CD' },
  { name: 'AWS' },
  { name: 'React Native' },
  { name: 'Git' },
  { name: 'Nginx' },
  { name: 'JWT Auth' },
  { name: 'Stripe' },
]

function TechItem({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/4 border border-white/8 hover:border-white/20 hover:bg-white/8 transition-all duration-200 cursor-default">
      <div
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
      />
      <span className="text-sm font-medium text-[#94A3B8] whitespace-nowrap hover:text-white transition-colors">
        {name}
      </span>
    </div>
  )
}

function MarqueeRow({ items, direction }: { items: typeof techRow1; direction: 'left' | 'right' }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden relative">
      <div
        className={direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}
        style={{ display: 'flex', gap: '12px', width: 'max-content' }}
      >
        {doubled.map((tech, i) => (
          <TechItem key={`${tech.name}-${i}`} name={tech.name} />
        ))}
      </div>
    </div>
  )
}

export default function TechStackSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-y-0 left-0 w-32 z-10"
          style={{ background: 'linear-gradient(to right, #0A0E1A, transparent)' }}
        />
        <div
          className="absolute inset-y-0 right-0 w-32 z-10"
          style={{ background: 'linear-gradient(to left, #0A0E1A, transparent)' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#94A3B8] text-sm mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#94A3B8]" />
            Stack tecnológico
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Tecnologías que usamos
          </h2>
          <p className="text-lg text-[#94A3B8]">
            Herramientas modernas y probadas en producción
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={techRow1} direction="left" />
        <MarqueeRow items={techRow2} direction="right" />
      </div>
    </section>
  )
}
