import './globals.css'
import { Inter, Outfit } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-outfit' })

export const metadata = {
  title: 'C2F INSTALL | Électricien à Montluçon - Installation Électrique, Alarmes, Vidéosurveillance',
  description: 'C2F INSTALL, votre électricien professionnel à Montluçon (03100). Installation électrique, rénovation, mise aux normes, alarmes, vidéosurveillance, contrôle d\'accès, réseau informatique, fibre optique. Devis gratuit.',
  keywords: 'électricien Montluçon, électricité générale Montluçon, installation électrique Montluçon, alarme Montluçon, vidéosurveillance Montluçon, courant faible Montluçon, réseau informatique Montluçon, fibre optique Montluçon, contrôle d\'accès Montluçon, électricien Allier, électricien 03100',
  openGraph: {
    title: 'C2F INSTALL | Électricien à Montluçon - Installation Électrique, Alarmes, Vidéosurveillance',
    description: 'C2F INSTALL, votre électricien professionnel à Montluçon (03100). Installation électrique, rénovation, mise aux normes, alarmes, vidéosurveillance, contrôle d\'accès, réseau informatique, fibre optique. Devis gratuit.',
    locale: 'fr_FR',
    type: 'website',
    siteName: 'C2F INSTALL'
  },
  twitter: {
    card: 'summary_large_image'
  },
  robots: 'index, follow'
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
