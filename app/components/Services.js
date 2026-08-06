import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Électricité Générale",
      image: "/images/electricite_generale.jpg",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
      description: "Installation et rénovation complète de vos équipements électriques dans le respect des normes françaises NF C 15-100.",
      features: ["Installation complète", "Rénovation électrique", "Mise aux normes", "Tableaux électriques", "Dépannage urgent"]
    },
    {
      title: "Courant Faible & Réseaux",
      image: "/images/reseau_informatique.jpg",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
      description: "Conception et déploiement de réseaux informatiques performants pour particuliers et entreprises.",
      features: ["Câblage RJ45", "Fibre optique", "Baies de brassage", "Wifi professionnel", "Infrastructure réseau"]
    },
    {
      title: "Alarmes Intrusion",
      image: "/images/alarme_intrusion.jpg",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      description: "Protection de vos locaux avec des systèmes d'alarme intrusion de dernière génération.",
      features: ["Détecteurs de mouvement", "Sirènes", "Centrales", "Contrôle à distance", "Télésurveillance"]
    },
    {
      title: "Vidéosurveillance",
      image: "/images/videosurveillance.jpg",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
      description: "Systèmes de vidéosurveillance HD et IP pour une sécurité optimale de vos biens.",
      features: ["Caméras IP/HD", "Enregistrement", "Vision à distance", "Installation complète", "Maintenance"]
    },
    {
      title: "Contrôle d'Accès",
      image: "/images/controle_acces.jpg",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
      description: "Sécurisez et gérez les accès à vos bâtiments avec des solutions modernes et connectées.",
      features: ["Digicode", "Badge", "Interphone", "Visiophone", "Serrures électriques"]
    },
    {
      title: "Sécurité Incendie",
      image: "/images/securite_incendie.jpg",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
      description: "Protégez vos locaux et vos collaborateurs avec des systèmes de détection incendie conformes.",
      features: ["Détecteurs", "Alarmes incendie", "Maintenance", "Installation", "Mise en conformité"]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">NOS EXPERTISES</span>
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle">Des solutions complètes pour tous vos besoins en électricité et sécurité</p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card animate-on-scroll">
              <div className="service-card-image" style={{ position: 'relative' }}>
                <Image src={service.image} alt={service.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="service-card-content">
                <div className="service-card-icon">{service.icon}</div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.description}</p>
                <ul className="service-card-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="service-card-btn">En savoir plus</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
