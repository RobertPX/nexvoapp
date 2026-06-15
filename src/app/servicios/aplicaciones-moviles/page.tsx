import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Smartphone, Zap, Shield, Users, Star, Code2, Layers, ShoppingBag } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Desarrollo de Apps Móviles en Bolivia — iOS y Android',
  description:
    'Creamos aplicaciones móviles para iOS y Android en Bolivia. Apps nativas (Swift, Kotlin) e híbridas (React Native, Flutter). Diseño premium y rendimiento real.',
  keywords: ['aplicaciones móviles Bolivia', 'desarrollo apps iOS Android Bolivia', 'app móvil La Paz', 'React Native Bolivia', 'Flutter Bolivia', 'empresa apps móviles Bolivia'],
  alternates: { canonical: 'https://nexvoapp.lat/servicios/aplicaciones-moviles' },
  openGraph: {
    title: 'Desarrollo de Apps Móviles iOS y Android en Bolivia | NexvoApp',
    description:
      'Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android en Bolivia. React Native, Flutter, Swift y Kotlin.',
    url: 'https://nexvoapp.lat/servicios/aplicaciones-moviles',
  },
}

const offerings = [
  { t: 'Apps iOS nativas',        d: 'Desarrolladas en Swift con UIKit o SwiftUI. Rendimiento y experiencia nativa impecable.' },
  { t: 'Apps Android nativas',    d: 'Desarrolladas en Kotlin con Jetpack Compose. Integración profunda con el ecosistema Android.' },
  { t: 'Apps híbridas (React Native)', d: 'Una sola base de código para iOS y Android. Tiempo de desarrollo reducido, calidad nativa.' },
  { t: 'Apps multiplataforma (Flutter)', d: 'UI consistente en iOS, Android y web con el motor de renderizado de Flutter.' },
  { t: 'Apps con backend integrado', d: 'APIs, autenticación, notificaciones push, pagos y almacenamiento en la nube incluidos.' },
  { t: 'Publicación en tiendas',  d: 'Gestionamos el proceso completo de publicación en App Store y Google Play.' },
]

const process = [
  { n: '01', t: 'Diseño UX/UI',    d: 'Prototipado interactivo, flujos de usuario y diseño de interfaces antes de escribir código.' },
  { n: '02', t: 'Desarrollo',      d: 'Sprints iterativos con builds de prueba frecuentes para que experimentes la app en tu dispositivo.' },
  { n: '03', t: 'Testing',         d: 'Pruebas en múltiples dispositivos, versiones de OS y condiciones de red reales.' },
  { n: '04', t: 'Publicación',     d: 'Proceso de revisión, metadatos optimizados y lanzamiento en App Store y Google Play.' },
]

const features = [
  { icon: Zap,    t: 'Alto rendimiento',     d: 'Animaciones fluidas, carga rápida y consumo de batería optimizado.' },
  { icon: Shield, t: 'Seguridad',            d: 'Cifrado de datos, autenticación segura y cumplimiento de políticas de tiendas.' },
  { icon: Users,  t: 'Experiencia de usuario', d: 'Interfaces intuitivas que siguen los HIG de Apple y las guías de Material Design.' },
  { icon: Star,   t: 'Calidad premium',      d: 'Apps que parecen, funcionan y se sienten profesionales desde el primer día.' },
]

const technologies = ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase', 'Redux', 'Zustand', 'Stripe', 'Push Notifications', 'AsyncStorage', 'REST APIs']

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://nexvoapp.lat' },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: 'https://nexvoapp.lat/servicios' },
        { '@type': 'ListItem', position: 3, name: 'Aplicaciones Móviles', item: 'https://nexvoapp.lat/servicios/aplicaciones-moviles' },
      ],
    },
    {
      '@type': 'Service',
      name: 'Desarrollo de Aplicaciones Móviles',
      description: 'Apps iOS y Android nativas e híbridas. React Native, Flutter, Swift y Kotlin. Diseño premium y rendimiento real.',
      provider: { '@type': 'Organization', name: 'NexvoApp', url: 'https://nexvoapp.lat' },
      areaServed: { '@type': 'Country', name: 'Bolivia' },
      serviceType: 'Desarrollo de Software',
    },
  ],
}

export default function AppsMobilesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <section className="hero-gradient pt-28 pb-16">
        <div className="container">
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mb-5">
            <Link href="/" className="hover:text-[var(--primary)]">Inicio</Link>
            <span>/</span>
            <Link href="/servicios" className="hover:text-[var(--primary)]">Servicios</Link>
            <span>/</span>
            <span className="text-[var(--primary)] font-medium">Apps Móviles</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="section-tag mb-5"><Smartphone size={13} /> Aplicaciones Móviles</div>
              <h1 className="heading text-5xl sm:text-6xl mb-5">
                Apps móviles con experiencia <span className="gradient-text">premium</span>
              </h1>
              <p className="text-xl text-[var(--text-muted)] leading-relaxed mb-8">
                Desarrollamos aplicaciones para iOS y Android que usuarios descargan, usan y recomiendan. Diseño cuidado, rendimiento real y publicación en tiendas incluida.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/59161200378" target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary px-6 py-3">
                  Consultar proyecto <ArrowRight size={15} />
                </a>
                <Link href="/servicios" className="btn btn-outline px-6 py-3">Ver todos los servicios</Link>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              {[0, 1].map((i) => (
                <div key={i} className={`w-40 bg-white border border-[var(--border)] rounded-3xl shadow-[var(--shadow-lg)] overflow-hidden ${i === 1 ? 'mt-8' : ''}`}>
                  <div className="bg-[var(--primary)] h-10 flex items-end justify-center pb-1.5">
                    <div className="w-8 h-1 rounded-full bg-white/40" />
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-12 bg-[var(--bg-soft)] rounded-xl" />
                    <div className="grid grid-cols-2 gap-1.5">
                      {[...Array(4)].map((_, j) => <div key={j} className="h-10 bg-[var(--bg-soft)] rounded-lg" />)}
                    </div>
                    <div className="h-3 bg-[var(--bg-soft)] rounded-full w-3/4" />
                    <div className="h-3 bg-[var(--bg-soft)] rounded-full w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Qué desarrollamos</div>
            <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">Tipos de apps que construimos</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o) => (
              <div key={o.t} className="card p-5">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)] mb-3" />
                <h3 className="font-bold text-[var(--text)] mb-1.5">{o.t}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{o.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-soft)]">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Beneficios</div>
            <h2 className="heading text-4xl mt-3 mb-4">Apps que los usuarios aman</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.t} className="card p-6 text-center">
                <div className="icon-box mx-auto mb-3"><f.icon size={18} /></div>
                <h3 className="font-bold text-[var(--text)] mb-2">{f.t}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Proceso</div>
            <h2 className="heading text-4xl sm:text-5xl mt-3 mb-4">De la idea a la tienda</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.n} className="card p-6">
                <div className="text-4xl font-black text-[var(--primary-light)] mb-3">{p.n}</div>
                <h3 className="font-bold text-[var(--text)] mb-2">{p.t}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-[var(--bg-soft)]">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Stack</div>
            <h2 className="heading text-4xl mt-3 mb-8">Tecnologías para desarrollo móvil</h2>
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

      <section className="section">
        <div className="container">
          <h2 className="heading text-3xl text-center mb-8">Otros servicios</h2>
          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              { icon: Code2,       t: 'Desarrollo Web',    href: '/servicios/desarrollo-web' },
              { icon: Layers,      t: 'Software a Medida', href: '/servicios/software-a-medida' },
              { icon: ShoppingBag, t: 'eCommerce',         href: '/servicios/ecommerce' },
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

      <CTABanner title="¿Tienes una idea de app móvil?" subtitle="Conviértela en realidad. Cuéntanos tu proyecto y construimos juntos." />
    </>
  )
}
