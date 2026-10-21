import './globals.css'
import { Inter, Outfit } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' })

export const metadata = {
  metadataBase: new URL('https://c2f-install.fr'),
  title: 'Électricien à Montluçon (03) | C2F INSTALL - IRVE & Sécurité',
  description: 'C2F INSTALL, votre électricien à Montluçon (03100) : électricité générale, bornes IRVE, alarmes, vidéosurveillance et fibre. Devis gratuit : 07 81 22 17 99.',
  keywords: 'électricien Montluçon, borne de recharge Montluçon, installateur IRVE Montluçon, électricité générale Montluçon, installation électrique Montluçon, alarme Montluçon, vidéosurveillance Montluçon, courant faible Montluçon, réseau informatique Montluçon, fibre optique Montluçon, contrôle d\'accès Montluçon, électricien Allier, électricien 03100',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Électricien à Montluçon (03) | C2F INSTALL - IRVE & Sécurité',
    description: 'C2F INSTALL, votre électricien à Montluçon (03100) : électricité générale, bornes IRVE, alarmes, vidéosurveillance et fibre. Devis gratuit : 07 81 22 17 99.',
    url: 'https://c2f-install.fr',
    siteName: 'C2F INSTALL',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/hero_background.jpg',
        width: 1200,
        height: 630,
        alt: 'C2F INSTALL - Électricien et installateur de sécurité à Montluçon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Électricien à Montluçon (03) | C2F INSTALL - IRVE & Sécurité',
    description: 'Votre électricien à Montluçon (03100) : électricité générale, bornes de recharge IRVE, alarmes et vidéosurveillance. Devis gratuit.',
    images: ['/images/hero_background.jpg'],
  },
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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'googlea4e9dc21fbf9ebc0',
  },
  authors: [{ name: 'C2F INSTALL', url: 'https://c2f-install.fr' }],
  creator: 'C2F INSTALL',
  publisher: 'C2F INSTALL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport = {
  themeColor: '#0077D9',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1GXT9N13KV"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1GXT9N13KV');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
