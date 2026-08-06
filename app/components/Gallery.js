'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const filters = ['Tous', 'Électricité', 'Réseaux', 'Vidéosurveillance', 'Alarmes'];
  
  const galleryItems = [
    { id: 1, title: 'Installation Électrique', category: 'Électricité', image: '/images/electricite_generale.jpg' },
    { id: 2, title: 'Câblage Réseau', category: 'Réseaux', image: '/images/reseau_informatique.jpg' },
    { id: 3, title: 'Caméras de Sécurité', category: 'Vidéosurveillance', image: '/images/videosurveillance.jpg' },
    { id: 4, title: 'Système d\'Alarme', category: 'Alarmes', image: '/images/alarme_intrusion.jpg' },
    { id: 5, title: 'Contrôle d\'accès', category: 'Réseaux', image: '/images/controle_acces.jpg' },
    { id: 6, title: 'Sécurité Incendie', category: 'Alarmes', image: '/images/securite_incendie.jpg' },
  ];

  const filteredItems = activeFilter === 'Tous' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="realisations" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">NOS RÉALISATIONS</span>
          <h2 className="section-title">Galerie de nos travaux</h2>
        </div>

        <div className="gallery-filters animate-on-scroll">
          {filters.map(filter => (
            <button 
              key={filter} 
              className={`gallery-filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-item animate-on-scroll" style={{ position: 'relative' }}>
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
              <div className="gallery-item-overlay">
                <h3 className="gallery-item-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
