import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, Mail, Globe, MapPin, Clock, ArrowRight, Code2, Smartphone, Layers, ShoppingBag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contáctanos para hablar sobre tu proyecto. Respondemos en menos de 24 horas.',
}

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    value: '+591 61200378',
    desc: 'Respuesta rápida, generalmente en minutos',
    href: 'https://wa.me/59161200378',
    color: 'text-[#25D366]',
    bg: 'bg-[#25D366]/10',
    border: 'border-[#25D366]/20',
    label: 'Escribir por WhatsApp',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'roberto.zarateaiquipa@gmail.com',
    desc: 'Respondemos en menos de 24 horas',
    href: 'mailto:roberto.zarateaiquipa@gmail.com',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    label: 'Enviar email',
  },
  {
    icon: Globe,
    title: 'Sitio web',
    value: 'nexvoapp.lat',
    desc: 'Explora todos nuestros servicios',
    href: 'https://nexvoapp.lat',
    color: 'text-[var(--primary)]',
    bg: 'bg-[var(--primary-light)]',
    border: 'border-[var(--border-purple)]',
    label: 'Visitar sitio',
  },
]

const services = [
  { icon: Code2,       t: 'Desarrollo Web',        href: '/servicios/desarrollo-web' },
  { icon: Smartphone,  t: 'Apps Móviles',           href: '/servicios/aplicaciones-moviles' },
  { icon: Layers,      t: 'Software a Medida',      href: '/servicios/software-a-medida' },
  { icon: ShoppingBag, t: 'eCommerce',              href: '/servicios/ecommerce' },
]

const faqs = [
  { q: '¿Cuánto cuesta desarrollar un software a medida?', a: 'El costo depende del alcance, la complejidad y los plazos. Ofrecemos una consulta gratuita para entender tu proyecto y darte un presupuesto detallado sin compromiso.' },
  { q: '¿Cuánto tiempo toma desarrollar una aplicación?', a: 'Un proyecto web sencillo puede estar listo en 4-8 semanas. Proyectos más complejos pueden tomar 3-6 meses. Te damos un cronograma detallado en nuestra propuesta.' },
  { q: '¿Trabajan con empresas fuera de Bolivia?', a: 'Sí. Trabajamos de forma remota con clientes en toda Latinoamérica. La comunicación fluida y las demos frecuentes hacen que la distancia no sea un problema.' },
  { q: '¿Qué pasa después del lanzamiento?', a: 'Ofrecemos soporte post-lanzamiento y contratos de mantenimiento. Tu software seguirá actualizado, seguro y funcionando correctamente.' },
]

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-20">
        <div className="container text-center max-w-2xl mx-auto">
          <div className="section-tag mb-6">Contacto</div>
          <h1 className="heading text-5xl sm:text-6xl mb-5">
            Hablemos sobre tu <span className="gradient-text">proyecto</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] leading-relaxed">
            ¿Tienes una idea, un problema que resolver o quieres saber si podemos ayudarte? Escríbenos. Respondemos en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="section">
        <div className="container">
          <div className="grid sm:grid-cols-3 gap-5 mb-16">
            {contactMethods.map((m) => (
              <a
                key={m.title}
                href={m.href}
                target={m.href.startsWith('http') ? '_blank' : undefined}
                rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card p-6 group hover:border-[var(--border-purple)] transition-all"
              >
                <div className={`icon-box icon-box-lg ${m.bg} ${m.color} border ${m.border} mb-4`}>
                  <m.icon size={22} />
                </div>
                <h3 className="font-bold text-[var(--text)] mb-1 group-hover:text-[var(--primary)] transition-colors">{m.title}</h3>
                <p className={`text-sm font-medium mb-1 ${m.color} break-all`}>{m.value}</p>
                <p className="text-xs text-[var(--text-muted)] mb-4">{m.desc}</p>
                <span className="text-sm font-semibold text-[var(--primary)] flex items-center gap-1 group-hover:gap-2 transition-all">
                  {m.label} <ArrowRight size={13} />
                </span>
              </a>
            ))}
          </div>

          {/* Location + hours */}
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            <div className="card card-purple p-5 flex items-start gap-4">
              <div className="icon-box flex-shrink-0"><MapPin size={18} /></div>
              <div>
                <h4 className="font-bold text-[var(--text)] mb-1">Ubicación</h4>
                <p className="text-sm text-[var(--text-muted)]">La Paz, Bolivia</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">Trabajamos de forma remota con clientes en toda Latinoamérica</p>
              </div>
            </div>
            <div className="card card-purple p-5 flex items-start gap-4">
              <div className="icon-box flex-shrink-0"><Clock size={18} /></div>
              <div>
                <h4 className="font-bold text-[var(--text)] mb-1">Horario de atención</h4>
                <p className="text-sm text-[var(--text-muted)]">Lunes a Viernes: 9:00 – 18:00</p>
                <p className="text-xs text-[var(--text-muted)] mt-1">Hora de Bolivia (BOT, UTC-4)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-[var(--bg-soft)]">
        <div className="container">
          <div className="section-header">
            <h2 className="heading text-3xl mb-2">¿En qué podemos ayudarte?</h2>
            <p className="text-[var(--text-muted)]">Explora nuestros servicios para entender mejor cómo podemos colaborar.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="card p-5 flex items-center gap-3 group">
                <div className="icon-box flex-shrink-0"><s.icon size={18} /></div>
                <span className="font-semibold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors text-sm">{s.t}</span>
                <ArrowRight size={13} className="ml-auto text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container max-w-3xl mx-auto">
          <div className="section-header">
            <div className="section-tag">FAQ</div>
            <h2 className="heading text-4xl mt-3 mb-4">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="card p-6">
                <h3 className="font-bold text-[var(--text)] mb-2">{f.q}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="purple-gradient py-20">
        <div className="container text-center max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">¿Listo para comenzar?</h2>
          <p className="text-white/70 mb-8 text-lg">La primera consulta es gratuita. Cuéntanos tu idea y veremos cómo hacerla realidad.</p>
          <a
            href="https://wa.me/59161200378"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-accent text-base px-8 py-4"
          >
            <MessageCircle size={18} /> Escribir por WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
