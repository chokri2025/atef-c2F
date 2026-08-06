import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner-content animate-on-scroll">
          <h2 className="cta-banner-title">Un projet électrique ?</h2>
          <p className="cta-banner-text">
            Obtenez votre devis personnalisé gratuitement. Notre équipe est à votre écoute pour étudier votre projet.
          </p>
          <a href="#contact" className="cta-banner-btn">
            Demander un devis gratuit
          </a>
          <div className="cta-banner-phone">
            <a href="tel:+33781221799" style={{ color: 'white', textDecoration: 'underline' }}>ou appelez-nous au +33 7 81 22 17 99</a>
          </div>
        </div>
      </div>
    </section>
  );
}
