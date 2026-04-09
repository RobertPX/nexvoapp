import { ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";

export default function FreeTrialSection() {
  const perks = [
    "Sin tarjeta de crédito",
    "Acceso inmediato",
    "Cancela cuando quieras",
  ];

  return (
    <section id="prueba" className="relative py-20 px-6 overflow-hidden">
      <div className="relative max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0e0e22] via-[#0d0d1e] to-[#0a0a18]">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl" />
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(129,140,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,1) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative px-8 py-14 sm:px-16 text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 mb-6">
              <Zap className="w-7 h-7 text-white" strokeWidth={2} />
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Empieza gratis,{" "}
              <span className="gradient-text">sin tarjeta</span>
            </h2>

            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
              Crea hasta{" "}
              <span className="text-white font-semibold">20 productos</span> y prueba todas las funciones básicas de Techventory, completamente gratis. Sin compromisos.
            </p>

            {/* Perks */}
            <div className="flex flex-wrap items-center justify-center gap-5 mb-10">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" strokeWidth={2} />
                  {perk}
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#"
              className="btn-primary group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow"
            >
              <span>Crear cuenta gratis</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Fine print */}
            <div className="flex items-center justify-center gap-1.5 mt-5 text-xs text-gray-600">
              <Shield className="w-3.5 h-3.5" />
              Tu información está segura y protegida
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
