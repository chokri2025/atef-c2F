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
    "description": "C2F INSTALL, société spécialisée dans l'installation de l'électricité générale et courant faible (système d'alarme intrusion, système sécurité incendie, système vidéosurveillance, contrôle d'accès et réseau informatique).",
    "url": "https://c2f-install.fr",
    "telephone": "+33781221799",
    "email": "c2f.install@gmail.com",
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
    "image": "/images/hero_background.jpg",
    "priceRange": "€€",
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
    "sameAs": [],
    "areaServed": {
      "@type": "City",
      "name": "Montluçon"
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
