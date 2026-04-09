import { ArrowRight, BarChart3, Bell, CheckSquare, Package, Tag } from "lucide-react";

const highlights = [
  { icon: Package, label: "Gestión de inventario completa" },
  { icon: Tag, label: "Catálogo de productos ilimitado" },
  { icon: CheckSquare, label: "Control de ventas en tiempo real" },
  { icon: BarChart3, label: "Reportes y analíticas avanzadas" },
  { icon: Bell, label: "Alertas automáticas por WhatsApp" },
];

export default function ProductSection() {
  return (
    <section id="producto" className="relative py-28 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-indigo-900/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: UI Preview */}
          <div className="flex-1 w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-indigo-600/20 to-purple-600/15 rounded-3xl scale-90 animate-glow-pulse" style={{ animationDelay: "0.5s" }} />

              {/* Main Card */}
              <div className="relative bg-[#0d0d1f] border border-white/10 rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)]">
                {/* Header */}
                <div className="bg-[#090918] border-b border-white/5 px-5 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600" />
                    <div>
                      <div className="text-sm font-semibold text-white">Techventory</div>
                      <div className="text-[10px] text-gray-500">Panel de control</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] text-gray-500">En vivo</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  {/* Sales Chart mock */}
                  <div className="bg-[#080816] rounded-xl border border-white/5 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-xs text-gray-500">Ventas esta semana</div>
                        <div className="text-xl font-bold text-white mt-1">Bs 28,450</div>
                      </div>
                      <div className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        +18.4%
                      </div>
                    </div>
                    {/* Mini bar chart */}
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end">
                          <div
                            className={`w-full rounded-t-sm transition-all ${
                              i === 5
                                ? "bg-gradient-to-t from-indigo-600 to-indigo-400"
                                : "bg-white/10"
                            }`}
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      {["L", "M", "X", "J", "V", "S", "D"].map((d) => (
                        <span key={d} className="text-[9px] text-gray-600 flex-1 text-center">{d}</span>
                      ))}
                    </div>
                  </div>

                  {/* Recent Sales */}
                  <div className="bg-[#080816] rounded-xl border border-white/5 p-4">
                    <div className="text-xs font-medium text-gray-400 mb-3">Últimas ventas</div>
                    <div className="space-y-2.5">
                      {[
                        { name: "Juan García", product: "Laptop HP 15\"", amount: "Bs 1,850", time: "hace 5 min" },
                        { name: "María López", product: "Teclado + Mouse", amount: "Bs 355", time: "hace 18 min" },
                        { name: "Carlos Ruiz", product: "Monitor LG 24\"", amount: "Bs 980", time: "hace 41 min" },
                      ].map((sale) => (
                        <div key={sale.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex items-center justify-center text-[9px] text-indigo-300 font-medium">
                              {sale.name[0]}
                            </div>
                            <div>
                              <div className="text-[10px] text-gray-300">{sale.name}</div>
                              <div className="text-[9px] text-gray-600">{sale.product}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-[10px] font-semibold text-emerald-400">{sale.amount}</div>
                            <div className="text-[9px] text-gray-600">{sale.time}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="flex-1 max-w-xl lg:max-w-none">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-6">
              <Package className="w-3.5 h-3.5" />
              Nuestro producto principal
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              <span className="gradient-text">Techventory</span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Una solución completa para gestionar tu inventario y ventas sin complicaciones. Diseñada para que cualquier negocio, sin importar su tamaño, opere como una empresa de primer nivel.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-10">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-indigo-400" strokeWidth={1.75} />
                  </div>
                  <span className="text-sm text-gray-300">{label}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#prueba"
                className="btn-primary group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/45 transition-shadow"
              >
                <span>Probar ahora</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#precios"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/3 hover:bg-white/6 transition-all"
              >
                Ver planes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
