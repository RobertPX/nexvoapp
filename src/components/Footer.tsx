import { MessageCircle, Zap, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#producto" },
  { label: "Precios", href: "#precios" },
  { label: "Contacto", href: "#contacto" },
];

const legalLinks = [
  { label: "Privacidad", href: "#" },
  { label: "Términos", href: "#" },
  { label: "Cookies", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contacto" className="relative border-t border-white/5 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-radial from-indigo-900/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-2.5 group mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow">
                <Zap className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Nexvo</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-6">
              Software inteligente para pequeñas y medianas empresas. Simplificamos la gestión para que puedas enfocarte en crecer.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5 mb-6">
              <a
                href="https://wa.me/59170000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors group/wa"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center group-hover/wa:border-[#25D366]/40 transition-colors">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                </div>
                +591 7000 0000 (WhatsApp)
              </a>
              <a
                href="mailto:hola@nexvo.io"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                hola@nexvo.io
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-white/3 border border-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-gray-600" />
                </div>
                Bolivia
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2">
              {[
                { label: "X (Twitter)", href: "#", svg: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.736-8.856L2.25 2.25h6.844l4.255 5.626zm-1.161 17.52h1.833L7.084 4.126H5.117z" /> },
                { label: "Instagram", href: "#", svg: <><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></> },
                { label: "LinkedIn", href: "#", svg: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></> },
              ].map(({ svg, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{svg}</svg>
                </a>
              ))}
              <a
                href="https://wa.me/59170000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5">Techventory</h4>
            <ul className="space-y-3">
              {[
                { label: "Funciones", href: "#funciones" },
                { label: "Precios", href: "#precios" },
                { label: "Demo gratis", href: "#prueba" },
                { label: "Documentación", href: "#" },
                { label: "Actualizaciones", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Nexvo. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/59170000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#25D366] shadow-[0_8px_32px_rgba(37,211,102,0.4)] flex items-center justify-center text-white hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.5)] transition-all z-40"
      >
        <MessageCircle className="w-6 h-6 fill-white" strokeWidth={1.5} />
      </a>
    </footer>
  );
}
