import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NexvoApp — Desarrollo de Software a Medida en Bolivia',
  description:
    'Desarrollamos aplicaciones web, apps móviles para iOS y Android, software empresarial a medida y tiendas eCommerce en La Paz, Bolivia. Consulta gratuita sin compromiso.',
  alternates: { canonical: 'https://nexvoapp.lat' },
  openGraph: {
    title: 'NexvoApp — Desarrollo de Software a Medida en Bolivia',
    description:
      'Estudio de software en La Paz, Bolivia. Aplicaciones web, apps móviles, sistemas empresariales a medida y eCommerce. Consulta gratuita.',
    url: 'https://nexvoapp.lat',
  },
}
import { ArrowRight, Code2, Smartphone, Layers, ShoppingBag, CheckCircle2, Users, Briefcase, Star, Zap, Shield, Clock, Globe, BarChart3 } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

/* ── Hero ── */
function Hero() {
  return (
    <section className="hero-gradient pt-28 pb-20 overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-tag mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
            Estudio de software · La Paz, Bolivia
          </div>
          <h1 className="heading text-5xl sm:text-6xl lg:text-7xl mb-6">
            Desarrollamos software que{' '}
            <span className="gradient-text">transforma</span>{' '}
            tu negocio
          </h1>
          <p className="text-xl text-[var(--text-body)] leading-relaxed mb-10 max-w-2xl mx-auto">
            Construimos aplicaciones web, apps móviles y sistemas empresariales a medida.
            Soluciones completas, de principio a fin, para empresas que quieren crecer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/servicios" className="btn btn-primary text-base px-7 py-3.5">
              Ver servicios <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/59161200378"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-outline text-base px-7 py-3.5"
            >
              Hablar con nosotros
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            {[
              { n: '8+',  label: 'Proyectos entregados' },
              { n: '4+',  label: 'Años de experiencia' },
              { n: '6+',  label: 'Clientes satisfechos' },
              { n: '100%', label: 'Código a medida' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-[var(--primary)]">{s.n}</div>
                <div className="text-sm text-[var(--text-muted)]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Services grid ── */
const services = [
  {
    icon: Code2,
    title: 'Desarrollo Web',
    desc: 'Sitios web corporativos, aplicaciones web, portales y plataformas SaaS. Rápidos, modernos y escalables.',
    href: '/servicios/desarrollo-web',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    desc: 'Aplicaciones nativas e híbridas para iOS y Android con experiencia de usuario impecable.',
    href: '/servicios/aplicaciones-moviles',
    color: 'bg-purple-50 text-purple-700',
  },
  {
    icon: Layers,
    title: 'Software a Medida',
    desc: 'ERPs, CRMs, sistemas de gestión, automatizaciones y software empresarial completamente personalizado.',
    href: '/servicios/software-a-medida',
    color: 'bg-[var(--primary-light)] text-[var(--primary)]',
  },
  {
    icon: ShoppingBag,
    title: 'eCommerce',
    desc: 'Tiendas online de alto rendimiento con gestión de inventario, pagos y experiencia de compra optimizada.',
    href: '/servicios/ecommerce',
    color: 'bg-amber-50 text-amber-700',
  },
]

function ServicesGrid() {
  return (
    <section className="section bg-[var(--bg-soft)]">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Servicios</div>
          <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">Lo que construimos</h2>
          <p className="text-lg text-[var(--text-muted)]">
            Soluciones de software completas, desde la idea hasta el despliegue en producción.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="card p-6 flex flex-col group"
            >
              <div className={`icon-box icon-box-lg ${s.color} mb-5`}>
                <s.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                {s.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1 mb-4">{s.desc}</p>
              <span className="text-sm font-semibold text-[var(--primary)] flex items-center gap-1 group-hover:gap-2 transition-all">
                Ver más <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Why us ── */
const reasons = [
  { icon: Zap,        title: 'Entrega rápida',       desc: 'Ciclos de desarrollo cortos con entregas frecuentes para que veas avances desde el primer sprint.' },
  { icon: Shield,     title: 'Código de calidad',    desc: 'Arquitectura moderna, pruebas automatizadas y documentación clara en cada proyecto.' },
  { icon: Users,      title: 'Trato directo',        desc: 'Trabajas directamente con los desarrolladores, sin intermediarios ni burocracia.' },
  { icon: Clock,      title: 'Soporte continuo',     desc: 'Acompañamiento post-lanzamiento para garantizar que todo funcione como se espera.' },
]

function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-tag mb-4">¿Por qué NexvoApp?</div>
            <h2 className="heading text-4xl sm:text-5xl mb-5">
              Software a medida, construido para durar
            </h2>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8">
              No somos una fábrica de software. Somos un equipo pequeño, enfocado y especializado que se involucra profundamente en cada proyecto. Combinamos arquitectura moderna con diseño cuidado y entregas que realmente funcionan.
            </p>
            <ul className="check-list">
              {['Desarrollo 100% personalizado, sin plantillas', 'Stack tecnológico moderno y mantenible', 'Comunicación clara y transparente en cada etapa', 'Escalabilidad pensada desde el diseño inicial'].map((item) => (
                <li key={item}>
                  <span className="check-icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r) => (
              <div key={r.title} className="card card-purple p-5">
                <div className="icon-box mb-3">
                  <r.icon size={18} />
                </div>
                <h4 className="font-bold text-[var(--text)] mb-1.5">{r.title}</h4>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Techventory feature ── */
function TechventoryFeature() {
  return (
    <section className="section bg-[var(--bg-soft)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
              style={{ background: 'linear-gradient(135deg, #2D1B69, #7C3AED)' }} />
            <div className="relative bg-white border border-[var(--border)] rounded-2xl overflow-hidden shadow-[var(--shadow-xl)]">
              <div className="bg-[var(--bg-soft)] border-b border-[var(--border)] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[#7C3AED] flex items-center justify-center">
                    <span className="text-white font-bold text-xs">T</span>
                  </div>
                  <span className="text-sm font-semibold text-[var(--text)]">Techventory</span>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> En vivo
                </span>
              </div>
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { l: 'Ventas hoy', v: 'Bs 4,280', c: 'text-emerald-600' },
                    { l: 'Productos', v: '1,248', c: 'text-[var(--primary)]' },
                    { l: 'Pedidos', v: '37', c: 'text-[var(--accent-hover)]' },
                  ].map((s) => (
                    <div key={s.l} className="bg-[var(--bg-soft)] rounded-xl p-3 border border-[var(--border)]">
                      <div className="text-[10px] text-[var(--text-muted)] mb-1">{s.l}</div>
                      <div className={`text-lg font-black ${s.c}`}>{s.v}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-[var(--bg-soft)] rounded-xl p-3 border border-[var(--border)]">
                  <div className="text-[10px] text-[var(--text-muted)] mb-2">Ventas esta semana</div>
                  <div className="flex items-end gap-1.5 h-14">
                    {[35, 62, 45, 80, 55, 92, 70].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col justify-end">
                        <div className="w-full rounded-t-sm" style={{
                          height: `${h}%`,
                          background: i === 5 ? 'linear-gradient(to top, #2D1B69, #7C3AED)' : '#E5E7EB',
                        }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <div className="section-tag mb-4">Nuestro producto</div>
            <h2 className="heading text-4xl sm:text-5xl mb-4">
              Conoce <span className="gradient-text">Techventory</span>
            </h2>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
              Sistema SaaS de gestión de inventario y ventas, desarrollado por NexvoApp. Multiusuario, en la nube y simple de usar desde cualquier dispositivo.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: BarChart3, t: 'Reportes en tiempo real' },
                { icon: Users,     t: 'Multiusuario' },
                { icon: Globe,     t: 'Acceso desde cualquier lugar' },
                { icon: Star,      t: 'Fácil de usar' },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="flex items-center gap-2.5">
                  <div className="icon-box w-8 h-8 rounded-lg flex-shrink-0">
                    <Icon size={14} />
                  </div>
                  <span className="text-sm font-medium text-[var(--text-body)]">{t}</span>
                </div>
              ))}
            </div>
            <a
              href="https://techventory.nexvoapp.lat"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-primary text-base px-7 py-3.5"
            >
              Conocer Techventory <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Process ── */
const steps = [
  { n: '01', title: 'Descubrimiento',     desc: 'Entendemos tu negocio, tus objetivos y los problemas que necesitas resolver.' },
  { n: '02', title: 'Diseño y propuesta', desc: 'Definimos la arquitectura, el diseño de interfaz y presentamos una propuesta detallada.' },
  { n: '03', title: 'Desarrollo',         desc: 'Construimos en sprints cortos con demos frecuentes para que valides cada etapa.' },
  { n: '04', title: 'Lanzamiento',        desc: 'Desplegamos en producción y brindamos soporte continuo para asegurar el éxito.' },
]

function Process() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Proceso</div>
          <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">Cómo trabajamos</h2>
          <p className="text-lg text-[var(--text-muted)]">Un proceso claro, transparente y orientado a resultados.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-[var(--border-purple)] to-transparent z-10" />
              )}
              <div className="card p-6">
                <div className="text-4xl font-black text-[var(--primary-light)] mb-3">{s.n}</div>
                <h3 className="font-bold text-[var(--text)] mb-2">{s.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Tech stack ── */
const tech1 = ['Next.js', 'React', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL', 'Docker', 'Tailwind', 'Cloudflare', 'Linux', 'Figma']
const tech2 = ['React Native', 'Flutter', 'Prisma', 'Redis', 'GraphQL', 'REST APIs', 'AWS', 'CI/CD', 'Nginx', 'JWT', 'Stripe']

function TechPill({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[var(--border)] text-sm font-medium text-[var(--text-body)] shadow-[var(--shadow-sm)] hover:border-[var(--border-purple)] hover:text-[var(--primary)] transition-colors cursor-default">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]" />
      {name}
    </div>
  )
}

function TechStack() {
  return (
    <section className="section bg-[var(--bg-soft)] overflow-hidden">
      <div className="container mb-10">
        <div className="section-header">
          <div className="section-tag">Stack tecnológico</div>
          <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">Tecnologías modernas</h2>
          <p className="text-lg text-[var(--text-muted)]">Usamos herramientas probadas en producción para cada tipo de proyecto.</p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[var(--bg-soft)] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[var(--bg-soft)] to-transparent" />
        <div className="flex flex-col gap-4 py-2">
          <div className="marquee-left gap-3">
            {[...tech1, ...tech1].map((t, i) => <TechPill key={`${t}-${i}`} name={t} />)}
          </div>
          <div className="marquee-right gap-3">
            {[...tech2, ...tech2].map((t, i) => <TechPill key={`${t}-${i}`} name={t} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Stats bar ── */
function Stats() {
  return (
    <section className="py-12 bg-[var(--primary)]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: '8+',   l: 'Proyectos entregados' },
            { n: '4+',   l: 'Años de experiencia' },
            { n: '6+',   l: 'Clientes satisfechos' },
            { n: '100%', l: 'Código a medida' },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-4xl font-black text-[var(--accent)] mb-1">{s.n}</div>
              <div className="text-sm text-white/70">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Page ── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyUs />
      <Stats />
      <TechventoryFeature />
      <Process />
      <TechStack />
      <CTABanner />
    </>
  )
}
