import { ArrowRight, Play } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16 px-6"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(129,140,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-radial from-indigo-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#07070f] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Copy */}
          <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-8 hover:border-indigo-500/40 transition-colors cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Nuevo: Alertas automáticas por WhatsApp
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6">
              Software inteligente para{" "}
              <span className="gradient-text">hacer crecer</span>{" "}
              tu negocio
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed mb-10">
              Automatiza tu inventario, ventas y operaciones desde una sola plataforma. Hecho para pequeñas y medianas empresas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <a
                href="#prueba"
                className="btn-primary group flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow w-full sm:w-auto justify-center"
              >
                <span>Probar gratis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" />
              </a>
              <a
                href="#producto"
                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full text-base font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/3 hover:bg-white/6 transition-all w-full sm:w-auto justify-center"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                </div>
                Ver producto
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-10 pt-8 border-t border-white/5">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-gray-500 mt-0.5">Negocios activos</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs text-gray-500 mt-0.5">Disponibilidad</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">4.9★</div>
                <div className="text-xs text-gray-500 mt-0.5">Valoración</div>
              </div>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="flex-1 w-full max-w-2xl lg:max-w-none animate-float">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
