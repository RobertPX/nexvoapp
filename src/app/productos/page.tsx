import type { Metadata } from 'next'
import { ArrowRight, BarChart3, Users, Cloud, Package, ShoppingCart, Bell, FileText, Clock } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Techventory — Sistema de Inventario y Ventas para Negocios en Bolivia',
  description:
    'Techventory es el sistema SaaS de gestión de inventario y ventas de NexvoApp. Multiusuario, en la nube, con reportes en tiempo real. Desde Bs 150/mes.',
  keywords: ['sistema inventario Bolivia', 'software ventas Bolivia', 'Techventory', 'gestión inventario La Paz', 'sistema SaaS Bolivia', 'software negocio Bolivia'],
  alternates: { canonical: 'https://nexvoapp.lat/productos' },
  openGraph: {
    title: 'Techventory — Sistema de Inventario y Ventas en Bolivia | NexvoApp',
    description:
      'Sistema SaaS de gestión de inventario y ventas para negocios en Bolivia. Multiusuario, en la nube, con reportes en tiempo real.',
    url: 'https://nexvoapp.lat/productos',
  },
}

const features = [
  { icon: Package,    t: 'Gestión de inventario',   d: 'Control total de stock: entradas, salidas, transferencias y ajustes. Alertas automáticas de stock bajo.' },
  { icon: ShoppingCart,t:'Registro de ventas',      d: 'Registra ventas en segundos. Historial completo, múltiples métodos de pago y tickets.' },
  { icon: FileText,   t: 'Cotizaciones',            d: 'Genera cotizaciones profesionales y compártelas por WhatsApp con un solo clic.' },
  { icon: BarChart3,  t: 'Reportes y analíticas',  d: 'Dashboards en tiempo real con ventas, productos más vendidos y rendimiento del negocio.' },
  { icon: Users,      t: 'Multiusuario',            d: 'Gestiona roles y permisos. Diferentes accesos para administradores, vendedores y almacén.' },
  { icon: Cloud,      t: 'En la nube',              d: 'Accede desde cualquier dispositivo, sin instalaciones. Tu data siempre segura y disponible.' },
  { icon: Bell,       t: 'Notificaciones',          d: 'Alertas por stock bajo, pedidos nuevos y actividad importante en tiempo real.' },
  { icon: Clock,      t: 'Soporte continuo',        d: 'Actualizaciones constantes, soporte técnico y nuevas funcionalidades sin costo adicional.' },
]

const plans = [
  {
    name: 'Básico',
    price: 'Bs 150',
    period: '/mes',
    desc: 'Para negocios pequeños que quieren comenzar a ordenar su inventario.',
    items: ['Hasta 2 usuarios', '500 productos', 'Inventario y ventas', 'Reportes básicos', 'Soporte por WhatsApp'],
    cta: 'Comenzar gratis',
    featured: false,
  },
  {
    name: 'Profesional',
    price: 'Bs 320',
    period: '/mes',
    desc: 'Para negocios en crecimiento que necesitan más control y automatización.',
    items: ['Hasta 10 usuarios', 'Productos ilimitados', 'Inventario, ventas y cotizaciones', 'Reportes avanzados', 'Notificaciones WhatsApp', 'API de integración', 'Soporte prioritario'],
    cta: 'Elegir Profesional',
    featured: true,
  },
  {
    name: 'Empresarial',
    price: 'A consultar',
    period: '',
    desc: 'Para empresas con necesidades específicas de personalización e integración.',
    items: ['Usuarios ilimitados', 'Módulos personalizados', 'Integraciones a medida', 'Soporte dedicado', 'Onboarding personalizado'],
    cta: 'Contactar',
    featured: false,
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Techventory',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, iOS, Android',
  description:
    'Sistema SaaS de gestión de inventario y ventas multiusuario en la nube. Control de stock, registro de ventas, cotizaciones y reportes en tiempo real.',
  url: 'https://techventory.nexvoapp.lat',
  offers: [
    { '@type': 'Offer', name: 'Básico', price: '150', priceCurrency: 'BOB', billingIncrement: 'P1M' },
    { '@type': 'Offer', name: 'Profesional', price: '320', priceCurrency: 'BOB', billingIncrement: 'P1M' },
  ],
  provider: { '@type': 'Organization', name: 'NexvoApp', url: 'https://nexvoapp.lat' },
}

export default function ProductosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-tag mb-5">
                <Package size={13} /> Producto NexvoApp
              </div>
              <h1 className="heading text-5xl sm:text-6xl mb-5">
                <span className="gradient-text">Techventory</span>
                <br />Gestión de inventario y ventas
              </h1>
              <p className="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
                Sistema SaaS multiusuario en la nube para gestionar tu inventario, ventas y cotizaciones desde cualquier dispositivo. Simple, rápido y pensado para negocios reales.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://techventory.nexvoapp.lat" target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary px-6 py-3">
                  Probar Techventory <ArrowRight size={15} />
                </a>
                <a href="https://wa.me/59161200378" target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline px-6 py-3">
                  Solicitar demo
                </a>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-3xl opacity-15" style={{ background: 'linear-gradient(135deg, #2D1B69, #7C3AED)' }} />
              <div className="relative bg-white border border-[var(--border)] rounded-2xl shadow-[var(--shadow-xl)] overflow-hidden">
                <div className="bg-[var(--text)] px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[#7C3AED] flex items-center justify-center">
                      <span className="text-white font-black text-xs">T</span>
                    </div>
                    <span className="text-white font-semibold text-sm">Techventory</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    En vivo
                  </span>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { l: 'Ventas hoy', v: 'Bs 4,280', c: 'text-emerald-600' },
                      { l: 'Productos', v: '1,248', c: 'text-[var(--primary)]' },
                      { l: 'Pedidos', v: '37', c: 'text-[var(--accent-hover)]' },
                    ].map((s) => (
                      <div key={s.l} className="bg-[var(--bg-soft)] rounded-xl p-3 border border-[var(--border)]">
                        <div className="text-[10px] text-[var(--text-muted)] mb-1">{s.l}</div>
                        <div className={`text-xl font-black ${s.c}`}>{s.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[var(--bg-soft)] rounded-xl p-3 mb-3 border border-[var(--border)]">
                    <div className="text-[10px] text-[var(--text-muted)] mb-2">Ventas esta semana</div>
                    <div className="flex items-end gap-1.5 h-16">
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
                  <div className="bg-[var(--bg-soft)] rounded-xl p-3 border border-[var(--border)]">
                    <div className="text-[10px] font-medium text-[var(--text-muted)] mb-2">Últimas ventas</div>
                    <div className="space-y-2">
                      {[
                        { n: 'J. García', p: 'Laptop HP', a: 'Bs 1,850' },
                        { n: 'M. López', p: 'Teclado + Mouse', a: 'Bs 355' },
                      ].map((s) => (
                        <div key={s.n} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)] font-bold text-[9px]">{s.n[0]}</div>
                            <div>
                              <div className="font-medium text-[var(--text)]">{s.n}</div>
                              <div className="text-[var(--text-muted)]">{s.p}</div>
                            </div>
                          </div>
                          <span className="font-bold text-emerald-600">{s.a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Funcionalidades</div>
            <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">Todo lo que necesita tu negocio</h2>
            <p className="text-lg text-[var(--text-muted)]">Techventory incluye las herramientas esenciales para gestionar tu inventario y ventas sin complicaciones.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.t} className="card p-5">
                <div className="icon-box mb-3"><f.icon size={18} /></div>
                <h3 className="font-bold text-[var(--text)] mb-1.5 text-sm">{f.t}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="section bg-[var(--bg-soft)]">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Planes</div>
            <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">Precios simples y transparentes</h2>
            <p className="text-lg text-[var(--text-muted)]">Sin sorpresas. Elige el plan que mejor se adapta al tamaño de tu negocio.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-6 flex flex-col ${
                  p.featured
                    ? 'purple-gradient text-white shadow-[var(--shadow-xl)]'
                    : 'card'
                }`}
              >
                {p.featured && (
                  <div className="text-xs font-bold text-[var(--accent)] bg-[var(--accent)]/15 border border-[var(--accent)]/30 rounded-full px-3 py-1 self-start mb-3">
                    Más popular
                  </div>
                )}
                <h3 className={`text-lg font-bold mb-1 ${p.featured ? 'text-white' : 'text-[var(--text)]'}`}>{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-3xl font-black ${p.featured ? 'text-white' : 'text-[var(--primary)]'}`}>{p.price}</span>
                  <span className={`text-sm ${p.featured ? 'text-white/70' : 'text-[var(--text-muted)]'}`}>{p.period}</span>
                </div>
                <p className={`text-sm mb-5 ${p.featured ? 'text-white/70' : 'text-[var(--text-muted)]'}`}>{p.desc}</p>
                <ul className="space-y-2.5 flex-1 mb-6">
                  {p.items.map((item) => (
                    <li key={item} className={`text-sm flex items-start gap-2 ${p.featured ? 'text-white/80' : 'text-[var(--text-body)]'}`}>
                      <span className={`mt-0.5 flex-shrink-0 text-xs ${p.featured ? 'text-[var(--accent)]' : 'text-[var(--primary)]'}`}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://techventory.nexvoapp.lat"
                  target="_blank" rel="noopener noreferrer"
                  className={`btn justify-center text-sm ${
                    p.featured
                      ? 'btn-accent'
                      : 'btn-outline'
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Quieres una demo de Techventory?"
        subtitle="Te mostramos cómo funciona en 20 minutos adaptado a tu tipo de negocio."
        primaryLabel="Solicitar demo"
        secondaryLabel="Ver todos nuestros servicios"
        secondaryHref="/servicios"
      />
    </>
  )
}
