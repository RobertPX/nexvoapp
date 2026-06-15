import type { Metadata } from 'next'
import { ArrowRight, Zap, Shield, Users, Star } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Sobre NexvoApp — Empresa de Software en La Paz, Bolivia',
  description:
    'NexvoApp es un estudio de desarrollo de software en La Paz, Bolivia. Construimos software a medida, aplicaciones web y apps móviles con calidad y transparencia.',
  keywords: ['empresa software Bolivia', 'estudio desarrollo software La Paz', 'NexvoApp Bolivia', 'quienes somos NexvoApp'],
  alternates: { canonical: 'https://nexvoapp.lat/nosotros' },
  openGraph: {
    title: 'Sobre NexvoApp — Empresa de Software en La Paz, Bolivia',
    description:
      'Estudio de desarrollo de software en La Paz, Bolivia. Aplicaciones web, apps móviles y sistemas empresariales a medida con calidad y transparencia.',
    url: 'https://nexvoapp.lat/nosotros',
  },
}

const values = [
  { icon: Zap,    t: 'Calidad sobre cantidad',  d: 'Preferimos tomar pocos proyectos y hacerlos extraordinariamente bien que escalar sin cuidado.' },
  { icon: Shield, t: 'Transparencia total',     d: 'Comunicación directa, precios claros y sin sorpresas. El cliente siempre sabe dónde estamos.' },
  { icon: Users,  t: 'Colaboración real',       d: 'Trabajamos como un equipo extendido de tu empresa, no como un proveedor distante.' },
  { icon: Star,   t: 'Aprendizaje continuo',   d: 'Nos mantenemos actualizados con las mejores tecnologías para darte siempre lo mejor.' },
]

const team = [
  { name: 'Roberto Zárate',   role: 'Fundador & Developer',   initials: 'RZ', color: 'from-[var(--primary)] to-[#7C3AED]' },
]

const technologies = ['Next.js', 'React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'React Native', 'Flutter', 'Docker', 'AWS', 'Figma', 'Tailwind CSS']

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-20">
        <div className="container text-center max-w-3xl mx-auto">
          <div className="section-tag mb-6">Sobre nosotros</div>
          <h1 className="heading text-5xl sm:text-6xl mb-5">
            Construimos software con <span className="gradient-text">propósito</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] leading-relaxed">
            Somos un equipo pequeño, enfocado y apasionado por crear software que realmente funcione y ayude a los negocios a crecer.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag mb-4">Nuestra historia</div>
              <h2 className="heading text-4xl mb-5">Nació de un problema real</h2>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-4">
                NexvoApp nació de la necesidad de crear soluciones de software accesibles y de alta calidad para empresas en Bolivia y Latinoamérica que merecen herramientas tan buenas como las de las grandes corporaciones.
              </p>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-4">
                Comenzamos desarrollando Techventory, nuestro propio sistema de gestión de inventario y ventas, para entender de primera mano los desafíos que enfrentan los negocios locales.
              </p>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                Hoy ofrecemos servicios completos de desarrollo de software: desde aplicaciones web y móviles hasta sistemas empresariales a medida, siempre con el mismo compromiso de calidad.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { n: '8+',   l: 'Proyectos en producción' },
                { n: '4+',   l: 'Años de experiencia combinada' },
                { n: '6+',   l: 'Clientes satisfechos' },
                { n: '100%', l: 'Código a medida, sin plantillas' },
              ].map((s) => (
                <div key={s.l} className="card card-purple p-5 flex items-center gap-5">
                  <div className="text-4xl font-black text-[var(--primary)] w-20 flex-shrink-0">{s.n}</div>
                  <div className="text-[var(--text-body)] font-medium">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-[var(--bg-soft)]">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Valores</div>
            <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">Lo que nos guía</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.t} className="card p-6 text-center">
                <div className="icon-box mx-auto mb-4"><v.icon size={18} /></div>
                <h3 className="font-bold text-[var(--text)] mb-2">{v.t}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Equipo</div>
            <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">Las personas detrás de NexvoApp</h2>
            <p className="text-lg text-[var(--text-muted)]">Un equipo pequeño con enfoque y pasión por construir buen software.</p>
          </div>
          <div className="flex justify-center">
            {team.map((m) => (
              <div key={m.name} className="card p-8 text-center max-w-xs w-full">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center text-white text-2xl font-black mx-auto mb-4`}>
                  {m.initials}
                </div>
                <h3 className="font-bold text-[var(--text)] text-lg mb-1">{m.name}</h3>
                <p className="text-sm text-[var(--text-muted)]">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="section bg-[var(--bg-soft)]">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Stack</div>
            <h2 className="heading text-4xl mt-3 mb-8">Tecnologías con las que trabajamos</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((t) => (
              <span key={t} className="px-4 py-2 bg-white border border-[var(--border)] rounded-full text-sm font-medium text-[var(--text-body)] shadow-[var(--shadow-sm)]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Te gustaría trabajar con nosotros?"
        subtitle="Cuéntanos tu proyecto. Respondemos en menos de 24 horas."
        primaryLabel="Contactarnos"
        primaryHref="https://wa.me/59161200378"
        secondaryLabel="Ver nuestros servicios"
        secondaryHref="/servicios"
      />
    </>
  )
}
