'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#services', label: 'Services' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#avis', label: 'Avis' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="/" className="logo">
          <span className="logo-c2f" style={{ color: '#0077D9', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>C2F</span>
          <span className="logo-install" style={{ color: '#F8B400', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}> INSTALL</span>
        </a>

        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-menu active' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={closeMobileMenu}>{link.label}</a>
          ))}
          <a href="#contact" className="btn-primary nav-cta" onClick={closeMobileMenu}>Devis gratuit</a>
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="nav-link" onClick={closeMobileMenu}>{link.label}</a>
        ))}
        <a href="#contact" className="btn-primary" onClick={closeMobileMenu}>Devis gratuit</a>
      </div>
    </header>
  );
}
