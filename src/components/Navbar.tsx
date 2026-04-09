"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Package, Zap } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Precios", href: "#precios" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#07070f]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Nexvo
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href="#inicio"
              className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              Inicio
            </a>

            {/* Productos Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                Productos
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                className={`absolute top-full left-0 mt-2 w-64 transition-all duration-200 ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="bg-[#0e0e1e] border border-white/10 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-2 backdrop-blur-xl">
                  <a
                    href="#producto"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-all group/item"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover/item:border-indigo-500/40 transition-colors">
                      <Package className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Techventory</div>
                      <div className="text-xs text-gray-500 mt-0.5">Sistema de inventario y ventas</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
            >
              Iniciar sesión
            </a>
            <a
              href="#prueba"
              className="btn-primary px-5 py-2 rounded-full text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-shadow"
            >
              <span>Comenzar</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a0a18]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 space-y-1">
          <a href="#inicio" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all" onClick={() => setMobileOpen(false)}>Inicio</a>
          <a href="#producto" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all" onClick={() => setMobileOpen(false)}>Techventory</a>
          <a href="#precios" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all" onClick={() => setMobileOpen(false)}>Precios</a>
          <a href="#contacto" className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all" onClick={() => setMobileOpen(false)}>Contacto</a>
          <div className="pt-2 flex flex-col gap-2">
            <a href="#" className="block px-4 py-2.5 text-sm text-gray-300 text-center border border-white/10 rounded-xl hover:bg-white/5 transition-all">Iniciar sesión</a>
            <a href="#prueba" className="block px-4 py-2.5 text-sm font-semibold text-white text-center btn-primary rounded-xl" onClick={() => setMobileOpen(false)}><span>Comenzar</span></a>
          </div>
        </div>
      </div>
    </nav>
  );
}
