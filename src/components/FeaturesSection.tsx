import { Package, ShoppingCart, FileText, Smartphone } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Control total de inventario",
    description:
      "Gestiona entradas, salidas y transferencias de productos. Alertas automáticas cuando el stock es bajo para nunca quedarte sin mercancía.",
    color: "indigo",
    gradient: "from-indigo-500/20 to-indigo-600/5",
    border: "border-indigo-500/15 hover:border-indigo-500/35",
    iconBg: "bg-indigo-500/15",
    iconColor: "text-indigo-400",
    glow: "hover:shadow-[0_24px_64px_rgba(99,102,241,0.15)]",
  },
  {
    icon: ShoppingCart,
    title: "Registro rápido de ventas",
    description:
      "Registra ventas en segundos con búsqueda inteligente. Historial completo, métodos de pago y reportes diarios en tiempo real.",
    color: "purple",
    gradient: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/15 hover:border-purple-500/35",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
    glow: "hover:shadow-[0_24px_64px_rgba(168,85,247,0.15)]",
  },
  {
    icon: FileText,
    title: "Cotizaciones en segundos",
    description:
      "Genera cotizaciones profesionales al instante y compártelas directamente por WhatsApp. Convierte cotizaciones en ventas con un clic.",
    color: "cyan",
    gradient: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/15 hover:border-cyan-500/35",
    iconBg: "bg-cyan-500/15",
    iconColor: "text-cyan-400",
    glow: "hover:shadow-[0_24px_64px_rgba(6,182,212,0.15)]",
  },
  {
    icon: Smartphone,
    title: "Acceso desde cualquier dispositivo",
    description:
      "Accede desde tu computadora, tablet o celular. Tu negocio siempre en la palma de tu mano, sin instalaciones complicadas.",
    color: "emerald",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/15 hover:border-emerald-500/35",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    glow: "hover:shadow-[0_24px_64px_rgba(16,185,129,0.15)]",
  },
];

export default function FeaturesSection() {
  return (
    <section id="funciones" className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-purple-900/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm mb-6">
            <span>✦</span> Funciones principales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Todo lo que necesitas,{" "}
            <span className="gradient-text">sin complicaciones</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Herramientas diseñadas específicamente para que los negocios reales funcionen mejor desde el primer día.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group relative bg-gradient-to-br ${feature.gradient} border ${feature.border} rounded-2xl p-6 card-hover ${feature.glow} cursor-default`}
              >
                {/* Inner glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-300" />

                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${feature.iconBg} flex items-center justify-center mb-5 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${feature.iconColor}`} strokeWidth={1.75} />
                </div>

                {/* Text */}
                <h3 className="text-base font-semibold text-white mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  {feature.description}
                </p>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 rounded-2xl overflow-hidden">
                  <div className={`absolute -top-4 -right-4 w-16 h-16 ${feature.iconBg} rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
