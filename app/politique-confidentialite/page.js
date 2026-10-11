import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Politique de Confidentialité | C2F INSTALL',
  description: 'Politique de confidentialité et protection des données personnelles de C2F INSTALL, électricien à Montluçon.',
  alternates: {
    canonical: '/politique-confidentialite',
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      <main className="legal-page py-20 px-4 max-w-4xl mx-auto mt-20">
        <h1 className="legal-title text-4xl font-bold mb-10 text-center">Politique de Confidentialité</h1>
        
        <div className="legal-content space-y-8 text-gray-700">
          <section className="legal-section">
            <h2 className="legal-heading text-2xl font-semibold mb-4 text-gray-900">1. Collecte des données personnelles</h2>
            <p>Dans le cadre de son activité et pour les besoins des services proposés sur le site, C2F INSTALL est amené à collecter des données personnelles (nom, prénom, adresse e-mail, numéro de téléphone, adresse postale) lorsque vous utilisez notre formulaire de contact ou demandez un devis.</p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading text-2xl font-semibold mb-4 text-gray-900">2. Finalité du traitement</h2>
            <p>Les données collectées sont nécessaires pour :</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Le traitement de vos demandes de contact et devis</li>
              <li>La gestion de la relation client</li>
              <li>La réalisation des prestations de services (installation, dépannage)</li>
              <li>L'amélioration de nos services</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading text-2xl font-semibold mb-4 text-gray-900">3. Durée de conservation</h2>
            <p>Les données personnelles sont conservées pendant la durée nécessaire à la finalité de leur traitement. À savoir :</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Données clients : 3 ans après la fin de la relation commerciale.</li>
              <li>Données prospects : 3 ans à compter du dernier contact.</li>
              <li>Documents comptables : 10 ans (obligation légale).</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading text-2xl font-semibold mb-4 text-gray-900">4. Droits des utilisateurs</h2>
            <p>Conformément à la réglementation applicable (RGPD), vous disposez des droits suivants concernant vos données :</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Droit d'accès et d'information</li>
              <li>Droit de rectification de données erronées</li>
              <li>Droit à l'effacement (« droit à l'oubli »)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
            </ul>
            <p className="mt-4">Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <strong>contact@c2f-install.fr</strong>.</p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading text-2xl font-semibold mb-4 text-gray-900">5. Cookies</h2>
            <p>Le site peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez. Vous pouvez configurer votre navigateur pour refuser ces cookies.</p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading text-2xl font-semibold mb-4 text-gray-900">6. DPO et contact</h2>
            <p>Pour toute question concernant la politique de confidentialité, vous pouvez contacter notre Délégué à la Protection des Données (DPO) :</p>
            <p>Email : <strong>contact@c2f-install.fr</strong></p>
          </section>

          <div className="mt-12 text-center">
            <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
