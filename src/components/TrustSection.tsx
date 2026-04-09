import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Desde que empezamos a usar Techventory, el control de nuestro inventario mejoró radicalmente. Antes perdíamos mercancía sin darnos cuenta.",
    name: "Carla Mendoza",
    role: "Dueña, Ferretería El Progreso",
    avatar: "CM",
    color: "from-indigo-500 to-purple-600",
  },
  {
    quote: "Las cotizaciones por WhatsApp cambiaron todo. Ahora los clientes reciben su presupuesto al instante y cerramos más ventas.",
    name: "Rodrigo Vargas",
    role: "Gerente, Distribuidora TechMax",
    avatar: "RV",
    color: "from-purple-500 to-pink-600",
  },
  {
    quote: "Empecé con el plan gratis y en dos semanas ya me había pasado al Pro. La plataforma es increíblemente fácil de usar.",
    name: "Andrea Flores",
    role: "Emprendedora, Tienda Online Moda Urbana",
    avatar: "AF",
    color: "from-cyan-500 to-indigo-600",
  },
];

const stats = [
  { value: "500+", label: "Negocios confían en Nexvo" },
  { value: "50k+", label: "Productos gestionados" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "24/7", label: "Plataforma disponible" },
];

export default function TrustSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-purple-900/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-indigo-900/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm mb-6">
            <Star className="w-3.5 h-3.5 fill-current" /> Lo que dicen nuestros clientes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Diseñado para{" "}
            <span className="gradient-text">negocios reales</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            Pensado para crecer contigo. Desde el primer día hasta que tu negocio escale.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group relative bg-[#0d0d1f] border border-white/8 rounded-2xl p-6 card-hover hover:border-white/15"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-8 h-8 text-indigo-400" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-sm font-bold text-white flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="relative rounded-2xl border border-white/8 bg-gradient-to-r from-[#0d0d1f] via-[#0e0e22] to-[#0d0d1f] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-purple-600/5 to-indigo-600/5" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/5">
            {stats.map((stat) => (
              <div key={stat.label} className="px-8 py-10 text-center">
                <div className="text-4xl font-black gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
