# NexvoApp — Marketing Website

Sitio web de marketing para **NexvoApp**, un estudio de desarrollo de software a medida. Construido con Next.js 16, TypeScript, Tailwind CSS 4 y Framer Motion.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- **Framer Motion 12** — animaciones scroll-triggered, spring, AnimatePresence
- **Lucide React** — iconografía
- **Geist** (next/font) — tipografía

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata SEO
│   ├── page.tsx            # Página principal (composición de secciones)
│   └── globals.css         # Sistema de colores, animaciones CSS, utilidades
└── components/
    ├── Navbar.tsx           # Sticky navbar glassmorphic + dropdown + drawer móvil
    ├── HeroSection.tsx      # Hero fullscreen con partículas canvas + orb 3D CSS
    ├── ServicesSection.tsx  # 3 tarjetas de servicios con gradient borders
    ├── ProductsSection.tsx  # Sección de productos + dashboard mockup Techventory
    ├── AboutSection.tsx     # Sobre nosotros + contadores animados + SVG circuito
    ├── ProcessSection.tsx   # Timeline de 4 pasos con línea animada
    ├── TechStackSection.tsx # Marquee bidireccional de tecnologías
    ├── CTASection.tsx       # Llamada a la acción con fondo gradiente
    └── Footer.tsx           # Footer 3 columnas + WhatsApp flotante
```

## Colores

| Token | Valor |
|---|---|
| Background | `#0A0E1A` |
| Foreground | `#F8FAFC` |
| Primary Blue | `#2563EB` |
| Primary Purple | `#7C3AED` |
| Muted text | `#94A3B8` |
| Accent glow | `rgba(124, 58, 237, 0.2)` |

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Secciones

1. **Navbar** — Transparente al tope, glassmorphic al hacer scroll. Dropdown animado en "Productos" con Techventory y badge "coming soon". Drawer móvil con animación spring.
2. **Hero** — Partículas canvas, orb CSS con anillos orbitantes, aurora spotlight, CTA a productos y WhatsApp.
3. **Servicios** — Desarrollo a medida, apps móviles, webs. Cards con gradient border y glow hover.
4. **Productos** — Techventory con dashboard mockup en vivo. Card placeholder "coming soon".
5. **Sobre Nosotros** — Texto + decoración SVG de circuito + contadores animados (IntersectionObserver).
6. **Cómo trabajamos** — 4 pasos en timeline horizontal/vertical con línea que se dibuja al hacer scroll.
7. **Tech Stack** — Dos filas de marquee infinito en sentidos opuestos.
8. **CTA** — Gradiente azul-púrpura con grain texture + botón WhatsApp.
9. **Footer** — Brand + sociales, navegación, contacto. Botón flotante de WhatsApp.

---

© 2026 NexvoApp · La Paz, Bolivia
