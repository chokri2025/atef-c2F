import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import InterventionZone from './components/InterventionZone';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollAnimator from './components/ScrollAnimator';

export default function Home() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Electrician"],
    "name": "C2F INSTALL",
    "description": "C2F INSTALL, entreprise spécialisée dans l'installation d'électricité générale, bornes de recharge pour véhicules électriques (IRVE) et systèmes de sécurité (alarme intrusion, vidéosurveillance, contrôle d'accès, sécurité incendie et réseaux informatiques).",
    "url": "https://c2f-install.fr",
    "telephone": "+33781221799",
    "email": "contact@c2f-install.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "33 Avenue de la République",
      "addressLocality": "Montluçon",
      "postalCode": "03100",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "46.3407",
      "longitude": "2.5925"
    },
    "image": "https://c2f-install.fr/images/hero_background.jpg",
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Espèces, Carte bancaire, Virement bancaire, Chèque",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "13",
      "bestRating": "5"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      { "@type": "City", "name": "Montluçon" },
      { "@type": "City", "name": "Commentry" },
      { "@type": "City", "name": "Désertines" },
      { "@type": "City", "name": "Domérat" },
      { "@type": "City", "name": "Prémilhat" },
      { "@type": "City", "name": "Huriel" },
      { "@type": "AdministrativeArea", "name": "Allier" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services C2F INSTALL",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Électricité Générale",
            "description": "Installation et rénovation électrique complète conforme à la norme NF C 15-100."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bornes de Recharge (IRVE)",
            "description": "Installation certifiée IRVE de bornes de recharge pour véhicules électriques et Wallbox."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Courant Faible & Réseaux Informatiques",
            "description": "Câblage RJ45, fibre optique, baies de brassage et infrastructures réseau."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Alarmes Intrusion & Sécurité Incendie",
            "description": "Systèmes d'alarme sans fil et filaire, télésurveillance et sécurité incendie."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vidéosurveillance & Contrôle d'Accès",
            "description": "Caméras IP/HD haute définition, interphones, visiophones et serrures connectées."
          }
        }
      ]
    },
    "legalName": "C2F INSTALL",
    "taxID": "FR06 992 103 291",
    "foundingDate": "2025-09-24"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <ScrollAnimator />
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Gallery />
        <Testimonials />
        <Process />
        <InterventionZone />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
