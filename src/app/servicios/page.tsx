import type { Metadata } from 'next'
import Link from 'next/link'
import { Code2, Smartphone, Layers, ShoppingBag, ArrowRight, CheckCircle2, Zap, Shield, Users, Clock } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Servicios de Desarrollo de Software en Bolivia',
  description:
    'NexvoApp ofrece desarrollo web, aplicaciones móviles iOS y Android, software empresarial a medida y tiendas eCommerce en Bolivia. Presupuesto sin costo.',
  keywords: ['servicios desarrollo software Bolivia', 'empresa desarrollo web Bolivia', 'desarrollo apps móviles Bolivia', 'software empresarial Bolivia'],
  alternates: { canonical: 'https://nexvoapp.lat/servicios' },
  openGraph: {
    title: 'Servicios de Desarrollo de Software en Bolivia | NexvoApp',
    description:
      'Desarrollo web, apps móviles, software a medida y eCommerce para empresas en Bolivia y Latinoamérica. Consulta gratuita.',
    url: 'https://nexvoapp.lat/servicios',
  },
}

const services = [
  {
    icon: Code2,
    title: 'Desarrollo Web',
    subtitle: 'Sitios, plataformas y aplicaciones web',
    href: '/servicios/desarrollo-web',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    desc: 'Construimos desde sitios corporativos modernos hasta complejas aplicaciones web SaaS. Priorizamos rendimiento, accesibilidad y escalabilidad.',
    items: ['Sitios corporativos y landing pages', 'Aplicaciones web y SaaS', 'Portales empresariales', 'Dashboards e intranets'],
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones Móviles',
    subtitle: 'iOS y Android, nativas e híbridas',
    href: '/servicios/aplicaciones-moviles',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    desc: 'Diseñamos y desarrollamos apps móviles con experiencias de usuario fluidas para iOS y Android, desde el prototipo hasta la tienda.',
    items: ['Apps nativas iOS (Swift)', 'Apps nativas Android (Kotlin)', 'Apps híbridas (React Native)', 'Apps multiplataforma (Flutter)'],
  },
  {
    icon: Layers,
    title: 'Software a Medida',
    subtitle: 'Sistemas empresariales personalizados',
    href: '/servicios/software-a-medida',
    color: 'text-[var(--primary)]',
    bg: 'bg-[var(--primary-light)]',
    border: 'border-[var(--border-purple)]',
    desc: 'Desarrollamos sistemas empresariales que se adaptan exactamente a tus procesos: ERPs, CRMs, automatizaciones y mucho más.',
    items: ['ERPs y sistemas de gestión', 'CRMs personalizados', 'Automatización de procesos', 'Integraciones y APIs'],
  },
  {
    icon: ShoppingBag,
    title: 'eCommerce',
    subtitle: 'Tiendas online de alto rendimiento',
    href: '/servicios/ecommerce',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    desc: 'Creamos tiendas online rápidas, seguras y fáciles de gestionar, con todo lo que necesitas para vender en internet desde el primer día.',
    items: ['Tiendas personalizadas', 'Pasarelas de pago', 'Gestión de inventario', 'SEO y optimización de conversión'],
  },
]

const process = [
  { icon: Zap,    n: '01', t: 'Consulta gratuita',   d: 'Analizamos tu idea o problema sin compromiso y te proponemos el mejor enfoque.' },
  { icon: Shield, n: '02', t: 'Propuesta clara',     d: 'Presupuesto detallado, cronograma realista y alcance bien definido desde el inicio.' },
  { icon: Users,  n: '03', t: 'Desarrollo ágil',     d: 'Sprints cortos con demos frecuentes. Estás involucrado en cada decisión importante.' },
  { icon: Clock,  n: '04', t: 'Soporte post-lanzamiento', d: 'Garantía y acompañamiento para que tu software funcione perfectamente en producción.' },
]

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-20">
        <div className="container text-center max-w-3xl mx-auto">
          <div className="section-tag mb-6">Servicios</div>
          <h1 className="heading text-5xl sm:text-6xl mb-5">
            Soluciones de software{' '}
            <span className="gradient-text">a la medida</span>{' '}
            de tu negocio
          </h1>
          <p className="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
            Desde aplicaciones web hasta sistemas empresariales complejos. Construimos el software que necesitas para crecer, sin plantillas ni atajos.
          </p>
          <a href="https://wa.me/59161200378" target="_blank" rel="noopener noreferrer"
            className="btn btn-primary text-base px-7 py-3.5">
            Solicitar consulta gratuita <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-10">
            {services.map((s, i) => (
              <div
                key={s.href}
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 border ${s.bg} ${s.color} ${s.border}`}>
                    <s.icon size={13} />
                    {s.subtitle}
                  </div>
                  <h2 className="heading text-3xl sm:text-4xl mb-4">{s.title}</h2>
                  <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">{s.desc}</p>
                  <ul className="check-list mb-7">
                    {s.items.map((item) => (
                      <li key={item}><span className="check-icon">✓</span>{item}</li>
                    ))}
                  </ul>
                  <Link href={s.href} className="btn btn-primary px-6 py-3">
                    Más sobre {s.title} <ArrowRight size={15} />
                  </Link>
                </div>
                <div className={`${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className={`rounded-2xl border ${s.border} ${s.bg} p-10 flex items-center justify-center min-h-[240px]`}>
                    <s.icon size={80} className={`${s.color} opacity-25`} strokeWidth={1} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-[var(--bg-soft)]">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Nuestro proceso</div>
            <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">De la idea al producto</h2>
            <p className="text-lg text-[var(--text-muted)]">Un proceso probado que minimiza riesgos y maximiza resultados.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.n} className="card p-6 text-center">
                <div className="text-4xl font-black text-[var(--primary-light)] mb-3">{p.n}</div>
                <div className="icon-box mx-auto mb-3"><p.icon size={18} /></div>
                <h3 className="font-bold text-[var(--text)] mb-2">{p.t}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Qué servicio necesitas?"
        subtitle="Cuéntanos tu proyecto y te respondemos en menos de 24 horas con una propuesta."
        primaryLabel="Hablar por WhatsApp"
        secondaryLabel="Ver nuestros productos"
        secondaryHref="/productos"
      />
    </>
  )
}
