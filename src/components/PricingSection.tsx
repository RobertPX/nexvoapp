import { ArrowRight, Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Gratis",
    price: "0",
    currency: "Bs",
    period: "para siempre",
    description: "Perfecto para empezar y probar la plataforma sin riesgos.",
    cta: "Comenzar gratis",
    ctaHref: "#",
    featured: false,
    features: [
      "Hasta 20 productos",
      "Registro de ventas básico",
      "Panel de control",
      "Acceso web",
      "Soporte por email",
    ],
    missing: [
      "Cotizaciones",
      "Alertas WhatsApp",
      "Reportes avanzados",
    ],
  },
  {
    name: "Pro",
    price: "130",
    currency: "Bs",
    period: "por mes",
    description: "Para negocios que quieren crecer sin límites ni restricciones.",
    cta: "Comenzar ahora",
    ctaHref: "#",
    featured: true,
    badge: "Más popular",
    features: [
      "Productos ilimitados",
      "Ventas y cotizaciones ilimitadas",
      "Alertas automáticas por WhatsApp",
      "Reportes y analíticas completas",
      "Acceso multi-dispositivo",
      "Exportación en PDF/Excel",
      "Historial completo",
      "Soporte prioritario",
    ],
    missing: [],
  },
];

export default function PricingSection() {
  return (
    <section id="precios" className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-radial from-indigo-900/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm mb-6">
            <span>✦</span> Precios simples y transparentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Elige el plan que se adapta{" "}
            <span className="gradient-text">a tu negocio</span>
          </h2>
          <p className="text-lg text-gray-400">
            Sin sorpresas, sin costos ocultos. Cancela o cambia de plan cuando quieras.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 card-hover ${
                plan.featured
                  ? "bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-[#0e0e22] border-2 border-indigo-500/40 shadow-[0_0_60px_rgba(99,102,241,0.15)]"
                  : "bg-[#0d0d1f] border border-white/8"
              }`}
            >
              {/* Featured Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-xs font-semibold text-white shadow-lg shadow-indigo-500/40">
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{plan.description}</p>

                <div className="flex items-end gap-1.5">
                  <span className="text-sm text-gray-400 mb-1.5">{plan.currency}</span>
                  <span className="text-5xl font-black text-white leading-none">{plan.price}</span>
                </div>
                <div className="text-sm text-gray-500 mt-1.5">{plan.period}</div>
              </div>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all mb-8 ${
                  plan.featured
                    ? "btn-primary text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50"
                    : "bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                <span className={plan.featured ? "relative z-10" : ""}>{plan.cta}</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${plan.featured ? "relative z-10" : ""}`} />
              </a>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.featured ? "bg-indigo-500/20" : "bg-emerald-500/15"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.featured ? "text-indigo-400" : "text-emerald-400"}`} strokeWidth={2.5} />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
                {plan.missing.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 opacity-35">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/5">
                      <div className="w-3 h-px bg-gray-600" />
                    </div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm text-gray-600 mt-8">
          ¿Necesitas un plan personalizado?{" "}
          <a href="#contacto" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            Contáctanos
          </a>
        </p>
      </div>
    </section>
  );
}
