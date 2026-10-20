import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Mentions Légales | C2F INSTALL',
  description: 'Mentions légales du site C2F INSTALL, électricien à Montluçon (03100).',
  alternates: {
    canonical: '/mentions-legales',
  },
};

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-content">
          <h1 className="legal-title">Mentions Légales</h1>
          <section className="legal-section">
            <h2 className="legal-heading">1. Éditeur du site</h2>
            <p><strong>C2F INSTALL</strong>, SAS</p>
            <p>Siège social : 33 Avenue de la République, 03100 Montluçon</p>
            <p>SIREN : 992 103 291</p>
            <p>SIRET : 992 103 291 00017</p>
            <p>TVA intracommunautaire : FR06 992 103 291</p>
            <p>Activité : Travaux d'installation électrique dans tous locaux (NAF 43.21A)</p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">2. Responsable de la publication</h2>
            <p>Le responsable de la publication est <strong>C2F INSTALL</strong>.</p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">3. Contact</h2>
            <p>Téléphone : <a href="tel:+33781221799">+33 7 81 22 17 99</a></p>
            <p>Email : <a href="mailto:contact@c2f-install.fr">contact@c2f-install.fr</a></p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">4. Hébergeur</h2>
            <p>Ce site est hébergé par :</p>
            <p>Vercel Inc.</p>
            <p>440 N Baxter St, Covina, CA 91723</p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">5. Propriété intellectuelle</h2>
            <p>Tous les éléments du site C2F INSTALL sont et restent la propriété intellectuelle et exclusive de C2F INSTALL. Nul n'est autorisé à reproduire, exploiter, rediffuser, ou utiliser à quelque titre que ce soit, même partiellement, des éléments du site qu'ils soient logiciels, visuels ou sonores.</p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">6. Limitation de responsabilité</h2>
            <p>C2F INSTALL ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.</p>
          </section>

          <section className="legal-section">
            <h2 className="legal-heading">7. Droit applicable et attribution de juridiction</h2>
            <p>Tout litige en relation avec l'utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents.</p>
          </section>

          <div className="legal-back">
            <Link href="/" className="btn-primary">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
