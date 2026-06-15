import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })

export const metadata: Metadata = {
  title: { default: 'NexvoApp — Desarrollo de Software a Medida', template: '%s | NexvoApp' },
  description: 'Desarrollamos software a medida, aplicaciones web, apps móviles y sistemas empresariales. La Paz, Bolivia.',
  keywords: ['desarrollo software', 'apps móviles', 'desarrollo web', 'software a medida', 'NexvoApp', 'Bolivia'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={geist.variable} style={{ colorScheme: 'light' }}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
