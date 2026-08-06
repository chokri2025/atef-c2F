'use client';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      author: "Sophie M.",
      text: "Excellent travail pour la rénovation électrique de notre maison. Équipe professionnelle et ponctuelle. Je recommande vivement !",
      rating: 5
    },
    {
      author: "Jean-Pierre D.",
      text: "Installation complète de vidéosurveillance dans nos locaux professionnels. Travail impeccable et conseils pertinents.",
      rating: 5
    },
    {
      author: "Marie L.",
      text: "Mise aux normes de notre tableau électrique. Intervention rapide, prix correct et travail très soigné. Merci C2F !",
      rating: 5
    },
    {
      author: "Thomas R.",
      text: "Installation réseau informatique et fibre optique pour notre entreprise. Service professionnel du début à la fin.",
      rating: 5
    },
    {
      author: "Isabelle F.",
      text: "Système d'alarme installé rapidement et efficacement. L'équipe a pris le temps de tout nous expliquer. Top !",
      rating: 5
    },
    {
      author: "Laurent B.",
      text: "Dépannage électrique en urgence un samedi. Réactif, compétent et tarif honnête. Je recommande sans hésiter.",
      rating: 5
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="avis" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="google-rating">
            <div className="google-logo">Google</div>
            <div className="google-rating-score">5.0</div>
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" fill="#FFC107" width="24" height="24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
            <div className="rating-subtitle">Basé sur 13 avis Google</div>
          </div>
        </div>

        <div className="testimonials-carousel animate-on-scroll">
          <div className="testimonials-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {testimonials.map((testi, idx) => (
              <div key={idx} className="testimonial-card" style={{ flex: '0 0 100%' }}>
                <div className="testimonial-stars">
                  {[...Array(testi.rating)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="#FFC107" width="20" height="20">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="testimonial-text">"{testi.text}"</p>
                <h4 className="testimonial-author">- {testi.author}</h4>
              </div>
            ))}
          </div>
          
          <div className="carousel-controls">
            <button className="carousel-arrow" onClick={prevSlide}>&lt;</button>
            <div className="carousel-dots">
              {testimonials.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`carousel-dot ${idx === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Aller au slide ${idx + 1}`}
                ></button>
              ))}
            </div>
            <button className="carousel-arrow" onClick={nextSlide}>&gt;</button>
          </div>
        </div>
      </div>
    </section>
  );
}
