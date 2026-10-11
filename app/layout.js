import './globals.css'
import { Inter, Outfit } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-outfit' })

export const metadata = {
  metadataBase: new URL('https://c2f-install.fr'),
  title: 'C2F INSTALL | Électricien à Montluçon - Installation Électrique, Bornes IRVE, Sécurité',
  description: 'C2F INSTALL, votre électricien professionnel à Montluçon (03100). Installation électrique, bornes de recharge IRVE, rénovation, alarmes, vidéosurveillance, contrôle d\'accès, réseau informatique, fibre optique. Devis gratuit.',
  keywords: 'électricien Montluçon, borne de recharge Montluçon, installateur IRVE Montluçon, électricité générale Montluçon, installation électrique Montluçon, alarme Montluçon, vidéosurveillance Montluçon, courant faible Montluçon, réseau informatique Montluçon, fibre optique Montluçon, contrôle d\'accès Montluçon, électricien Allier, électricien 03100',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'C2F INSTALL | Électricien à Montluçon - Installation Électrique, Bornes IRVE, Sécurité',
    description: 'C2F INSTALL, votre électricien professionnel à Montluçon (03100). Installation électrique, bornes de recharge IRVE, rénovation, alarmes, vidéosurveillance, réseau informatique. Devis gratuit.',
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
    title: 'C2F INSTALL | Électricien à Montluçon - Installation Électrique, Bornes IRVE, Sécurité',
    description: 'Votre électricien de référence à Montluçon (03100). Électricité générale, bornes de recharge IRVE, alarmes et vidéosurveillance.',
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
}

export const viewport = {
  themeColor: '#0077D9'
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${outfit.variable}`}>{children}</body>
    </html>
  )
}
