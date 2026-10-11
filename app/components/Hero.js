export default function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/hero_background.jpg"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Votre expert en installations électriques et solutions de sécurité à Montluçon</h1>
          
          <div className="hero-badges">
            <span className="hero-badge">Électricité générale</span>
            <span className="hero-badge">Réseaux informatiques</span>
            <span className="hero-badge">Alarmes</span>
            <span className="hero-badge">Vidéosurveillance</span>
            <span className="hero-badge">Contrôle d'accès</span>
            <span className="hero-badge">Fibre optique</span>
          </div>
          
          <div className="hero-buttons">
            <a href="tel:+33781221799" className="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Appeler
            </a>
            <a href="#contact" className="btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
