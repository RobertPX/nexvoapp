import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'NexvoApp — Construimos software que impulsa tu negocio',
  description:
    'Estudio de software a medida. Desarrollamos sistemas empresariales, aplicaciones móviles y webs modernas para empresas que quieren crecer. La Paz, Bolivia.',
  keywords: ['software a medida', 'desarrollo web', 'apps móviles', 'NexvoApp', 'Bolivia', 'Techventory'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}
