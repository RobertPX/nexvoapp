"use client";

export default function DashboardMockup() {
  const products = [
    { name: "Laptop HP 15\"", sku: "LPT-001", stock: 12, price: "1,850 Bs", status: "ok" },
    { name: "Monitor LG 24\"", sku: "MON-042", stock: 4, price: "980 Bs", status: "low" },
    { name: "Teclado Logitech", sku: "TCL-017", stock: 28, price: "215 Bs", status: "ok" },
    { name: "Mouse Inalámbrico", sku: "MSE-033", stock: 0, price: "140 Bs", status: "out" },
    { name: "Auriculares Sony", sku: "AUR-009", stock: 7, price: "640 Bs", status: "ok" },
  ];

  const stats = [
    { label: "Productos", value: "248", change: "+12", color: "indigo" },
    { label: "Ventas hoy", value: "34", change: "+8", color: "purple" },
    { label: "Ingresos", value: "12.4k", change: "+23%", color: "cyan" },
    { label: "Stock bajo", value: "6", change: "-2", color: "amber" },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow behind */}
      <div className="absolute inset-0 blur-3xl rounded-3xl bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-cyan-600/10 scale-95 animate-glow-pulse" />

      {/* Main Window */}
      <div className="relative bg-[#0d0d1f] border border-white/10 rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.8)]">
        {/* Window Chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0a0a18]">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <div className="flex-1 mx-3">
            <div className="mx-auto w-48 h-5 bg-white/5 rounded-full flex items-center justify-center">
              <span className="text-[10px] text-gray-500">app.techventory.io</span>
            </div>
          </div>
        </div>

        {/* App Layout */}
        <div className="flex h-[340px] sm:h-[400px]">
          {/* Sidebar */}
          <div className="w-14 sm:w-48 bg-[#080814] border-r border-white/5 flex flex-col py-4 px-2 sm:px-3 flex-shrink-0">
            <div className="flex items-center gap-2 px-2 mb-6 hidden sm:flex">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex-shrink-0" />
              <span className="text-xs font-bold text-white">Techventory</span>
            </div>
            {[
              { icon: "▤", label: "Inventario", active: true },
              { icon: "◉", label: "Ventas" },
              { icon: "◈", label: "Cotizaciones" },
              { icon: "◇", label: "Reportes" },
              { icon: "⊙", label: "Alertas" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 px-2 py-2 rounded-lg mb-0.5 cursor-pointer transition-all ${
                  item.active
                    ? "bg-indigo-500/15 text-indigo-300"
                    : "text-gray-600 hover:text-gray-400 hover:bg-white/3"
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span className="text-xs font-medium hidden sm:block">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-hidden flex flex-col">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <div>
                <h3 className="text-xs font-semibold text-white">Inventario</h3>
                <p className="text-[10px] text-gray-500 mt-0.5 hidden sm:block">248 productos registrados</p>
              </div>
              <div className="flex gap-2">
                <div className="h-6 px-3 bg-white/5 rounded-full flex items-center gap-1.5 border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span className="text-[10px] text-gray-400 hidden sm:block">Filtrar</span>
                </div>
                <div className="h-6 px-3 bg-indigo-500/20 rounded-full flex items-center border border-indigo-500/30">
                  <span className="text-[10px] text-indigo-300 font-medium">+ Agregar</span>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-1.5 px-3 py-2.5 border-b border-white/5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`bg-white/3 rounded-lg p-2 border border-white/5`}
                >
                  <div className="text-[10px] text-gray-500 mb-0.5 hidden sm:block">{stat.label}</div>
                  <div className={`text-sm font-bold ${
                    stat.color === "indigo" ? "text-indigo-300" :
                    stat.color === "purple" ? "text-purple-300" :
                    stat.color === "cyan" ? "text-cyan-300" : "text-amber-300"
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-[9px] text-green-400 hidden sm:block">{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Table */}
            <div className="flex-1 overflow-hidden px-3 py-2">
              <div className="hidden sm:grid grid-cols-4 gap-2 px-2 py-1 mb-1">
                {["Producto", "SKU", "Stock", "Estado"].map((h) => (
                  <span key={h} className="text-[9px] font-medium text-gray-600 uppercase tracking-wider">{h}</span>
                ))}
              </div>
              <div className="space-y-1">
                {products.map((p) => (
                  <div
                    key={p.sku}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-2 py-1.5 rounded-lg hover:bg-white/3 transition-colors cursor-pointer group"
                  >
                    <span className="text-[10px] text-gray-300 truncate group-hover:text-white transition-colors">{p.name}</span>
                    <span className="text-[10px] text-gray-600 font-mono hidden sm:block">{p.sku}</span>
                    <div className="hidden sm:flex items-center gap-1.5">
                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            p.status === "ok" ? "bg-emerald-500" :
                            p.status === "low" ? "bg-amber-500" : "bg-red-500"
                          }`}
                          style={{ width: p.status === "ok" ? "70%" : p.status === "low" ? "20%" : "0%" }}
                        />
                      </div>
                      <span className="text-[9px] text-gray-500">{p.stock}</span>
                    </div>
                    <div className="flex items-center justify-end sm:justify-start">
                      <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium ${
                        p.status === "ok" ? "bg-emerald-500/10 text-emerald-400" :
                        p.status === "low" ? "bg-amber-500/10 text-amber-400" :
                        "bg-red-500/10 text-red-400"
                      }`}>
                        {p.status === "ok" ? "Disponible" : p.status === "low" ? "Poco stock" : "Agotado"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute -right-4 top-12 bg-[#0f0f24] border border-white/10 rounded-xl px-3 py-2.5 shadow-xl hidden lg:block animate-float" style={{ animationDelay: "1s" }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center">
            <span className="text-xs">📈</span>
          </div>
          <div>
            <div className="text-[10px] text-gray-500">Ventas hoy</div>
            <div className="text-sm font-bold text-white">+Bs 4,320</div>
          </div>
        </div>
      </div>

      <div className="absolute -left-4 bottom-16 bg-[#0f0f24] border border-amber-500/20 rounded-xl px-3 py-2.5 shadow-xl hidden lg:block animate-float" style={{ animationDelay: "2s" }}>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/20 flex items-center justify-center">
            <span className="text-xs">⚠️</span>
          </div>
          <div>
            <div className="text-[10px] text-gray-500">Alerta stock</div>
            <div className="text-sm font-bold text-amber-300">Monitor LG</div>
          </div>
        </div>
      </div>
    </div>
  );
}
