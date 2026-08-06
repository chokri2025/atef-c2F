'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Always force scrolled style on legal subpages since they have a white background
    if (!isHomePage) {
      setIsScrolled(true);
    } else {
      setIsScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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

  const getHref = (href) => {
    if (isHomePage) return href;
    return '/' + href;
  };

  return (
    <header className={`header ${isScrolled || isMobileMenuOpen ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href={isHomePage ? '#accueil' : '/'} className="logo" onClick={closeMobileMenu}>
          <span className="logo-c2f">C2F</span>
          <span className="logo-install"> INSTALL</span>
        </a>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={getHref(link.href)} className="nav-link">{link.label}</a>
          ))}
          <a href={getHref('#contact')} className="btn-primary nav-cta">Devis gratuit</a>
        </nav>

        <button
          className={`mobile-toggle ${isMobileMenuOpen ? 'menu-open' : ''}`}
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
          <a key={link.href} href={getHref(link.href)} className="nav-link" onClick={closeMobileMenu}>{link.label}</a>
        ))}
        <a href={getHref('#contact')} className="btn-primary" onClick={closeMobileMenu}>Devis gratuit</a>
      </div>
    </header>
  );
}
