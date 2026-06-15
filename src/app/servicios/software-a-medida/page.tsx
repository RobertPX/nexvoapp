import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Layers, Settings, BarChart3, GitBranch, Lock, RefreshCw, Code2, Smartphone, ShoppingBag } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Software a Medida para Empresas',
  description: 'Desarrollamos ERPs, CRMs, sistemas de gestión y automatizaciones personalizadas. Software que se adapta exactamente a tus procesos.',
}

const offerings = [
  { icon: BarChart3,  t: 'ERPs empresariales',       d: 'Sistemas de planificación de recursos que unifican finanzas, inventario, RRHH y operaciones en una sola plataforma.' },
  { icon: Settings,   t: 'CRMs personalizados',      d: 'Gestión de relaciones con clientes adaptada a tu proceso de ventas, sin pagar por funciones que no usas.' },
  { icon: GitBranch,  t: 'Automatización de procesos', d: 'Reemplaza tareas manuales repetitivas con flujos automatizados que ahorran tiempo y eliminan errores.' },
  { icon: Lock,       t: 'Sistemas de gestión interna', d: 'Herramientas internas para gestionar equipos, aprobaciones, documentos y flujos de trabajo.' },
  { icon: RefreshCw,  t: 'Integraciones y APIs',     d: 'Conectamos tus sistemas existentes (ERP, CRM, contabilidad) con APIs robustas y bien documentadas.' },
  { icon: BarChart3,  t: 'Reportes y analíticas',    d: 'Dashboards ejecutivos en tiempo real con los KPIs que tu negocio necesita monitorear.' },
]

const advantages = [
  { n: '01', t: 'Adaptado a tus procesos',       d: 'El software se construye según cómo trabaja tu empresa, no al revés. Sin necesidad de cambiar tus procesos para usar la herramienta.' },
  { n: '02', t: 'Sin funciones que no necesitas', d: 'Pagas solo por lo que usas. Sin licencias costosas por módulos innecesarios ni funciones que nunca activarás.' },
  { n: '03', t: 'Propiedad total del código',     d: 'El código fuente es tuyo. No dependes de ningún proveedor externo para actualizar, modificar o migrar tu sistema.' },
  { n: '04', t: 'Escalable desde el inicio',      d: 'Arquitectura diseñada para crecer. Puedes agregar módulos, usuarios o integraciones sin reescribir desde cero.' },
]

const technologies = [
  { cat: 'Backend',          items: ['Node.js', 'NestJS', 'Python', 'FastAPI', 'Express'] },
  { cat: 'Frontend',         items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { cat: 'Base de datos',    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma'] },
  { cat: 'Infraestructura',  items: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Nginx'] },
]

export default function SoftwareMedidaPage() {
  return (
    <>
      <section className="hero-gradient pt-28 pb-16">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-5">
            <Link href="/" className="hover:text-[var(--primary)]">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-[var(--primary)]">Servicios</Link>
            <span>/</span>
            <span className="text-[var(--primary)] font-medium">Software a Medida</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-tag mb-5"><Layers size={13} /> Software a Medida</div>
              <h1 className="heading text-5xl sm:text-6xl mb-5">
                Software que se adapta a <span className="gradient-text">tu empresa</span>
              </h1>
              <p className="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
                Desarrollamos sistemas empresariales, ERPs, CRMs y automatizaciones completamente personalizadas. Tu negocio es único — tu software también debería serlo.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/59161200378" target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary px-6 py-3">Consultar proyecto <ArrowRight size={15} /></a>
                <Link href="/servicios" className="btn btn-outline px-6 py-3">Ver todos los servicios</Link>
              </div>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-2xl p-6 shadow-[var(--shadow-lg)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-[var(--text)]">Panel de control</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-medium">En vivo</span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { l: 'Pedidos pendientes', v: '24', c: 'text-[var(--primary)]' },
                  { l: 'Ventas del mes', v: 'Bs 48,200', c: 'text-emerald-600' },
                  { l: 'Clientes activos', v: '1,340', c: 'text-blue-600' },
                  { l: 'Tareas abiertas', v: '7', c: 'text-amber-600' },
                ].map((s) => (
                  <div key={s.l} className="bg-[var(--bg-soft)] p-3 rounded-xl border border-[var(--border)]">
                    <div className="text-[10px] text-[var(--text-muted)] mb-1">{s.l}</div>
                    <div className={`text-xl font-black ${s.c}`}>{s.v}</div>
                  </div>
                ))}
              </div>
              <div className="bg-[var(--bg-soft)] rounded-xl p-3 border border-[var(--border)]">
                <div className="text-xs font-medium text-[var(--text-muted)] mb-2">Flujo de aprobaciones</div>
                <div className="space-y-1.5">
                  {['Solicitud recibida ✓', 'Revisión en curso...', 'Pendiente aprobación'].map((step, i) => (
                    <div key={step} className="flex items-center gap-2 text-xs">
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${i === 0 ? 'bg-emerald-500' : i === 1 ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'}`} />
                      <span className={i === 2 ? 'text-[var(--text-muted)]' : 'text-[var(--text-body)]'}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Qué desarrollamos</div>
            <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">Sistemas que construimos</h2>
            <p className="text-lg text-[var(--text-muted)]">Cada sistema nace de un análisis profundo de tus procesos actuales y tus objetivos de negocio.</p>
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

      <section className="section bg-[var(--bg-soft)]">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Ventajas</div>
            <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">Por qué elegir software a medida</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {advantages.map((a) => (
              <div key={a.n} className="card p-6 flex gap-5">
                <div className="text-3xl font-black text-[var(--primary-light)] flex-shrink-0">{a.n}</div>
                <div>
                  <h3 className="font-bold text-[var(--text)] mb-2">{a.t}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{a.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Stack</div>
            <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">Tecnologías que usamos</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {technologies.map((t) => (
              <div key={t.cat} className="card card-purple p-5">
                <h4 className="font-bold text-[var(--primary)] mb-3 text-sm uppercase tracking-wide">{t.cat}</h4>
                <div className="flex flex-wrap gap-2">
                  {t.items.map((item) => (
                    <span key={item} className="px-2.5 py-1 bg-white border border-[var(--border-purple)] rounded-full text-xs font-medium text-[var(--text-body)]">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-soft)]">
        <div className="container">
          <h2 className="heading text-3xl text-center mb-8">Otros servicios</h2>
          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              { icon: Code2,       t: 'Desarrollo Web',   href: '/servicios/desarrollo-web' },
              { icon: Smartphone,  t: 'Apps Móviles',     href: '/servicios/aplicaciones-moviles' },
              { icon: ShoppingBag, t: 'eCommerce',        href: '/servicios/ecommerce' },
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

      <CTABanner title="¿Tu empresa necesita un sistema a medida?" subtitle="Analizamos tus procesos y te proponemos la solución más eficiente. Sin compromiso." />
    </>
  )
}
