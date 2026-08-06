import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <span style={{ color: '#0077D9', fontWeight: 'bold', fontSize: '24px' }}>C2F</span>
              <span style={{ color: '#F8B400', fontWeight: 'bold', fontSize: '24px' }}> INSTALL</span>
            </div>
            <p className="footer-desc">
              Votre partenaire de confiance pour toutes vos installations électriques et systèmes de sécurité à Montluçon et ses environs.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><a href="#services">Électricité Générale</a></li>
              <li><a href="#services">Réseaux Informatiques</a></li>
              <li><a href="#services">Alarmes Intrusion</a></li>
              <li><a href="#services">Vidéosurveillance</a></li>
              <li><a href="#services">Contrôle d'Accès</a></li>
              <li><a href="#services">Sécurité Incendie</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Contact</h3>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+33781221799">+33 7 81 22 17 99</a>
              </li>
              <li className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:c2f.install@gmail.com">c2f.install@gmail.com</a>
              </li>
              <li className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>33 Avenue de la République<br/>03100 Montluçon</span>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-map" style={{ width: '100%', height: '150px', borderRadius: '8px', overflow: 'hidden' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22066.53!2d2.5925!3d46.3407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f0a6a5b5a5a5a5%3A0x3f1b3c3c3c3c3c3c!2sMontlu%C3%A7on!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mini Carte Montluçon"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 C2F INSTALL - SAS au capital variable - SIREN 992 103 291 - Tous droits réservés</p>
          <div className="footer-legal-links">
            <Link href="/mentions-legales">Mentions légales</Link>
            <span style={{ margin: '0 10px' }}>|</span>
            <Link href="/politique-confidentialite">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
