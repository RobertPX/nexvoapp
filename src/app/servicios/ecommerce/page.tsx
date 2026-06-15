import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShoppingBag, CreditCard, Package, BarChart3, Search, Shield, Code2, Smartphone, Layers } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Desarrollo de eCommerce',
  description: 'Construimos tiendas online personalizadas, rápidas y seguras. Gestión de inventario, pagos en línea y experiencia de compra optimizada.',
}

const offerings = [
  { icon: ShoppingBag, t: 'Tiendas personalizadas',   d: 'Sin plantillas. Diseño único que refleja tu marca y está optimizado para conversión.' },
  { icon: CreditCard,  t: 'Pasarelas de pago',        d: 'Integración con Stripe, PayPal, MercadoPago y pasarelas locales de Bolivia.' },
  { icon: Package,     t: 'Gestión de inventario',    d: 'Control de stock, variantes de productos, alertas de agotamiento y reportes de movimiento.' },
  { icon: BarChart3,   t: 'Analíticas y reportes',   d: 'Ventas en tiempo real, productos más vendidos, carritos abandonados y métricas de conversión.' },
  { icon: Search,      t: 'SEO para eCommerce',       d: 'Estructura de URLs, metadatos, schema markup y velocidad de carga optimizados para Google.' },
  { icon: Shield,      t: 'Seguridad y SSL',          d: 'Certificados SSL, protección contra fraudes y cumplimiento PCI DSS para pagos seguros.' },
]

const features = [
  'Catálogo de productos ilimitado',
  'Variantes (talla, color, material)',
  'Carrito y proceso de checkout optimizado',
  'Múltiples métodos de pago',
  'Gestión de pedidos y envíos',
  'Panel de administración intuitivo',
  'Notificaciones automáticas al cliente',
  'Descuentos, cupones y promociones',
  'Valoraciones y reseñas de productos',
  'Integración con WhatsApp Business',
  'App móvil de gestión (opcional)',
  'Soporte multi-idioma y multi-moneda',
]

const steps = [
  { n: '01', t: 'Diseño y planificación', d: 'Definimos la estructura del catálogo, flujo de compra y diseño de la tienda con tu equipo.' },
  { n: '02', t: 'Desarrollo',             d: 'Construimos la tienda con tecnología moderna, optimizada para velocidad y móviles.' },
  { n: '03', t: 'Integración de pagos',   d: 'Configuramos y probamos las pasarelas de pago en entorno seguro antes del lanzamiento.' },
  { n: '04', t: 'Lanzamiento y soporte',  d: 'Publicamos la tienda y te capacitamos para gestionar productos, pedidos y clientes.' },
]

export default function EcommercePage() {
  return (
    <>
      <section className="hero-gradient pt-28 pb-16">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-5">
            <Link href="/" className="hover:text-[var(--primary)]">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-[var(--primary)]">Servicios</Link>
            <span>/</span>
            <span className="text-[var(--primary)] font-medium">eCommerce</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-tag mb-5"><ShoppingBag size={13} /> eCommerce</div>
              <h1 className="heading text-5xl sm:text-6xl mb-5">
                Vende online con una tienda <span className="gradient-text">profesional</span>
              </h1>
              <p className="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
                Construimos tiendas online personalizadas, rápidas y seguras. Desde catálogos simples hasta plataformas de comercio complejo con miles de productos.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/59161200378" target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary px-6 py-3">Consultar proyecto <ArrowRight size={15} /></a>
                <Link href="/servicios" className="btn btn-outline px-6 py-3">Ver todos los servicios</Link>
              </div>
            </div>
            <div className="bg-white border border-[var(--border)] rounded-2xl p-5 shadow-[var(--shadow-lg)]">
              <div className="bg-[var(--bg-soft)] rounded-xl p-3 mb-4 border border-[var(--border)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[var(--text)]">Mi tienda</span>
                  <span className="text-xs text-emerald-600 font-medium">● Online</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { l: 'Ventas hoy', v: 'Bs 3,480', c: 'text-emerald-600' },
                    { l: 'Pedidos',   v: '28',        c: 'text-[var(--primary)]' },
                    { l: 'Productos', v: '342',       c: 'text-blue-600' },
                  ].map((s) => (
                    <div key={s.l} className="bg-white p-2 rounded-lg border border-[var(--border)] text-center">
                      <div className="text-[9px] text-[var(--text-muted)]">{s.l}</div>
                      <div className={`text-sm font-black ${s.c}`}>{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-[var(--bg-soft)] rounded-xl border border-[var(--border)] overflow-hidden">
                    <div className="h-16 bg-gradient-to-br from-[var(--primary-light)] to-white" />
                    <div className="p-2">
                      <div className="h-2 bg-[var(--border)] rounded-full mb-1.5 w-3/4" />
                      <div className="h-3 bg-[var(--primary)] rounded-full w-1/2 opacity-70" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Qué incluye</div>
            <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">Todo lo que necesitas para vender</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o) => (
              <div key={o.t} className="card p-6">
                <div className="icon-box icon-box-accent mb-4"><o.icon size={18} /></div>
                <h3 className="font-bold text-[var(--text)] mb-2">{o.t}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-soft)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-tag mb-4">Funcionalidades</div>
              <h2 className="heading text-4xl mb-5">Características incluidas</h2>
              <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
                Cada tienda que desarrollamos incluye todas las funciones que necesitas para operar, gestionar y escalar tu eCommerce desde el primer día.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2.5 py-2">
                  <span className="check-icon flex-shrink-0">✓</span>
                  <span className="text-sm text-[var(--text-body)]">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Proceso</div>
            <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">Cómo lanzamos tu tienda</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="card p-6">
                <div className="text-4xl font-black text-[var(--primary-light)] mb-3">{s.n}</div>
                <h3 className="font-bold text-[var(--text)] mb-2">{s.t}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{s.d}</p>
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
              { icon: Code2,      t: 'Desarrollo Web',   href: '/servicios/desarrollo-web' },
              { icon: Smartphone, t: 'Apps Móviles',     href: '/servicios/aplicaciones-moviles' },
              { icon: Layers,     t: 'Software a Medida', href: '/servicios/software-a-medida' },
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

      <CTABanner title="¿Listo para vender online?" subtitle="Lanzamos tu tienda lista para recibir pedidos. Cuéntanos tu catálogo y te damos una propuesta." />
    </>
  )
}
