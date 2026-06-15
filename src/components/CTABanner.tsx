import { MessageCircle, ArrowRight } from 'lucide-react'

interface CTABannerProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTABanner({
  title = '¿Tienes un proyecto en mente?',
  subtitle = 'Cuéntanos tu idea y construimos juntos el software que tu negocio necesita.',
  primaryLabel = 'Hablemos por WhatsApp',
  primaryHref = 'https://wa.me/59161200378',
  secondaryLabel = 'Ver nuestros servicios',
  secondaryHref = '/servicios',
}: CTABannerProps) {
  return (
    <section className="purple-gradient">
      <div className="container py-20 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={primaryHref}
            target={primaryHref.startsWith('http') ? '_blank' : undefined}
            rel={primaryHref.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="btn btn-accent text-base px-7 py-3.5"
          >
            <MessageCircle size={18} />
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            className="btn text-base px-7 py-3.5 bg-white/10 text-white border border-white/20 hover:bg-white/20"
          >
            {secondaryLabel}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
