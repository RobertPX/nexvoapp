import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Code2, Globe, Zap, BarChart3, Shield, Layers, Smartphone, ShoppingBag } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Desarrollo Web a Medida',
  description: 'Desarrollamos sitios web, aplicaciones web, plataformas SaaS y portales empresariales modernos, rápidos y escalables.',
}

const offerings = [
  { icon: Globe,    t: 'Sitios corporativos',    d: 'Presencia digital profesional que transmite confianza y convierte visitantes en clientes.' },
  { icon: Code2,    t: 'Aplicaciones web',       d: 'Plataformas complejas con autenticación, dashboards, paneles de control y flujos de trabajo.' },
  { icon: BarChart3,t: 'Plataformas SaaS',       d: 'Software como servicio multi-tenant con billing, roles, módulos y escalabilidad desde el diseño.' },
  { icon: Layers,   t: 'Portales y extranets',   d: 'Portales para clientes, proveedores o empleados con acceso controlado y flujos personalizados.' },
  { icon: Zap,      t: 'Landing pages',          d: 'Páginas de conversión optimizadas para captar leads, vender productos o promover eventos.' },
  { icon: Shield,   t: 'Intranets y sistemas internos', d: 'Herramientas internas para gestionar procesos, equipos y recursos de tu empresa.' },
]

const technologies = [
  { cat: 'Frontend', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { cat: 'Backend',  items: ['Node.js', 'NestJS', 'Python', 'REST APIs', 'GraphQL'] },
  { cat: 'Base de datos', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma ORM'] },
  { cat: 'Infraestructura', items: ['Cloudflare', 'AWS', 'Docker', 'CI/CD', 'Linux', 'Nginx'] },
]

const benefits = [
  'Código limpio, mantenible y bien documentado',
  'Optimizado para motores de búsqueda (SEO)',
  'Diseño responsive y accesible en todos los dispositivos',
  'Rendimiento optimizado — Core Web Vitals en verde',
  'Seguridad integrada desde el diseño',
  'Paneles de administración intuitivos',
  'Integraciones con APIs de terceros',
  'Escalable para crecer junto a tu negocio',
]

export default function DesarrolloWebPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-5">
            <Link href="/" className="hover:text-[var(--primary)]">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-[var(--primary)]">Servicios</Link>
            <span>/</span>
            <span className="text-[var(--primary)] font-medium">Desarrollo Web</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-tag mb-5">
                <Code2 size={13} /> Desarrollo Web
              </div>
              <h1 className="heading text-5xl sm:text-6xl mb-5">
                Aplicaciones web que <span className="gradient-text">funcionan</span>
              </h1>
              <p className="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
                Desarrollamos desde sitios corporativos hasta plataformas SaaS complejas. Cada proyecto es único, construido con las mejores tecnologías web actuales.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/59161200378" target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary px-6 py-3">
                  Consultar proyecto <ArrowRight size={15} />
                </a>
                <Link href="/servicios" className="btn btn-outline px-6 py-3">Ver todos los servicios</Link>
              </div>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-2xl p-8 shadow-[var(--shadow-lg)]">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="bg-[var(--bg-soft)] rounded-lg px-3 py-2 text-xs text-[var(--text-muted)] mb-4 text-center">
                https://tu-empresa.com
              </div>
              <div className="space-y-2">
                <div className="h-8 bg-[var(--primary-light)] rounded-md flex items-center px-3">
                  <div className="w-20 h-2 rounded-full bg-[var(--primary)] opacity-40" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-16 bg-[var(--bg-soft)] rounded-md border border-[var(--border)]" />
                  ))}
                </div>
                <div className="h-4 bg-[var(--bg-soft)] rounded-full w-3/4" />
                <div className="h-4 bg-[var(--bg-soft)] rounded-full w-1/2" />
                <div className="h-8 rounded-md w-32" style={{ background: 'var(--primary)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Qué construimos</div>
            <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">Tipos de proyectos web</h2>
            <p className="text-lg text-[var(--text-muted)]">Cada proyecto tiene sus propios requisitos. Nos adaptamos a lo que tu negocio necesita.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o) => (
              <div key={o.t} className="card p-6">
                <div className="icon-box mb-4"><o.icon size={18} /></div>
                <h3 className="font-bold text-[var(--text)] mb-2">{o.t}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-[var(--bg-soft)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag mb-4">Beneficios</div>
              <h2 className="heading text-4xl mb-5">Lo que incluye cada proyecto</h2>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-7">
                No entregamos solo código. Entregamos productos web completos, listos para producción, con todo lo que necesitas para operar y escalar.
              </p>
              <ul className="check-list">
                {benefits.map((b) => (
                  <li key={b}><span className="check-icon">✓</span>{b}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="card p-5 border-l-4 border-l-[var(--primary)]">
                <h4 className="font-bold text-[var(--text)] mb-1">Desarrollo full-cycle</h4>
                <p className="text-sm text-[var(--text-muted)]">Nos encargamos de todo: diseño UX/UI, frontend, backend, base de datos y despliegue.</p>
              </div>
              <div className="card p-5 border-l-4 border-l-[var(--accent)]">
                <h4 className="font-bold text-[var(--text)] mb-1">Entrega transparente</h4>
                <p className="text-sm text-[var(--text-muted)]">Repositorio propio, acceso a staging desde el inicio y demos al final de cada sprint.</p>
              </div>
              <div className="card p-5 border-l-4 border-l-emerald-500">
                <h4 className="font-bold text-[var(--text)] mb-1">Soporte post-lanzamiento</h4>
                <p className="text-sm text-[var(--text-muted)]">Período de garantía incluido y contratos de mantenimiento opcionales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Stack tecnológico</div>
            <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">Tecnologías que usamos</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {technologies.map((t) => (
              <div key={t.cat} className="card card-purple p-5">
                <h4 className="font-bold text-[var(--primary)] mb-3 text-sm uppercase tracking-wide">{t.cat}</h4>
                <div className="flex flex-wrap gap-2">
                  {t.items.map((item) => (
                    <span key={item} className="px-2.5 py-1 bg-white border border-[var(--border-purple)] rounded-full text-xs font-medium text-[var(--text-body)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section bg-[var(--bg-soft)]">
        <div className="container">
          <h2 className="heading text-3xl text-center mb-8">Otros servicios</h2>
          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              { icon: Smartphone,  t: 'Apps Móviles',      href: '/servicios/aplicaciones-moviles' },
              { icon: Layers,      t: 'Software a Medida',  href: '/servicios/software-a-medida' },
              { icon: ShoppingBag, t: 'eCommerce',          href: '/servicios/ecommerce' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="card p-5 flex items-center gap-3 group">
                <div className="icon-box flex-shrink-0"><s.icon size={18} /></div>
                <span className="font-semibold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">{s.t}</span>
                <ArrowRight size={14} className="ml-auto text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="¿Listo para construir tu próxima aplicación web?" subtitle="Contáctanos y te respondemos con una propuesta en menos de 24 horas." />
    </>
  )
}
