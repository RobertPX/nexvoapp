import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })

const BASE_URL = 'https://nexvoapp.lat'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'NexvoApp — Desarrollo de Software a Medida en Bolivia',
    template: '%s | NexvoApp',
  },
  description:
    'NexvoApp es un estudio de desarrollo de software en La Paz, Bolivia. Creamos aplicaciones web, apps móviles para iOS y Android, software empresarial a medida y tiendas eCommerce. Consulta gratuita.',
  keywords: [
    'desarrollo de software Bolivia',
    'empresa de software La Paz',
    'desarrollo web Bolivia',
    'aplicaciones móviles Bolivia',
    'apps iOS Android Bolivia',
    'software a medida Bolivia',
    'ERP Bolivia',
    'CRM Bolivia',
    'ecommerce Bolivia',
    'tienda online Bolivia',
    'NexvoApp',
    'Techventory',
    'desarrollo software La Paz',
  ],
  authors: [{ name: 'NexvoApp', url: BASE_URL }],
  creator: 'NexvoApp',
  publisher: 'NexvoApp',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_BO',
    url: BASE_URL,
    siteName: 'NexvoApp',
    title: 'NexvoApp — Desarrollo de Software a Medida en Bolivia',
    description:
      'Estudio de software en La Paz, Bolivia. Desarrollamos aplicaciones web, apps móviles y sistemas empresariales a medida para empresas que quieren crecer.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NexvoApp — Desarrollo de Software a Medida en Bolivia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexvoApp — Desarrollo de Software a Medida en Bolivia',
    description:
      'Estudio de software en La Paz, Bolivia. Desarrollamos aplicaciones web, apps móviles y sistemas empresariales a medida.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: 'technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'NexvoApp',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/og-image.png`,
      },
      description:
        'Estudio de desarrollo de software en La Paz, Bolivia. Especialistas en aplicaciones web, apps móviles, software empresarial a medida y eCommerce.',
      foundingLocation: {
        '@type': 'Place',
        name: 'La Paz, Bolivia',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+591-61200378',
        contactType: 'customer service',
        availableLanguage: 'Spanish',
        areaServed: ['BO', 'LA'],
      },
      sameAs: [],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#localbusiness`,
      name: 'NexvoApp',
      url: BASE_URL,
      telephone: '+591-61200378',
      priceRange: '$$',
      description:
        'Empresa de desarrollo de software en La Paz, Bolivia. Creamos aplicaciones web, apps móviles, sistemas a medida y tiendas eCommerce.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'La Paz',
        addressCountry: 'BO',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -16.5,
        longitude: -68.15,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de desarrollo de software',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desarrollo Web' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aplicaciones Móviles' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Software a Medida' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'eCommerce' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'NexvoApp',
      description: 'Estudio de desarrollo de software en Bolivia',
      publisher: { '@id': `${BASE_URL}/#organization` },
      inLanguage: 'es',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={geist.variable} style={{ colorScheme: 'light' }}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
