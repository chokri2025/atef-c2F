'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    projectType: '',
    message: '',
    honeypot: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return; // Spam check
    
    // Simulate form submission
    setStatus('success');
    setFormData({
      name: '', phone: '', email: '', address: '', projectType: '', message: '', honeypot: ''
    });
    
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">CONTACTEZ-NOUS</span>
          <h2 className="section-title">Demandez votre devis gratuit</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-form-container animate-on-scroll">
            {status === 'success' && (
              <div className="form-success">
                Votre demande a bien été envoyée. Nous vous contacterons rapidement.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="honeypot" className="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex="-1" autoComplete="off" aria-hidden="true" aria-label="Ne pas remplir ce champ" style={{ display: 'none' }} />
              
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} autoComplete="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Téléphone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="address">Adresse</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} autoComplete="street-address" />
              </div>
              
              <div className="form-group">
                <label htmlFor="projectType">Type de projet</label>
                <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} required>
                  <option value="">Sélectionnez un type</option>
                  <option value="Électricité générale">Électricité générale</option>
                  <option value="Rénovation électrique">Rénovation électrique</option>
                  <option value="Mise aux normes">Mise aux normes</option>
                  <option value="Courant faible / Réseau">Courant faible / Réseau</option>
                  <option value="Alarme intrusion">Alarme intrusion</option>
                  <option value="Vidéosurveillance">Vidéosurveillance</option>
                  <option value="Contrôle d'accès">Contrôle d'accès</option>
                  <option value="Sécurité incendie">Sécurité incendie</option>
                  <option value="Borne de recharge IRVE">Borne de recharge IRVE (Voiture électrique)</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>
              
              <div className="form-group" style={{ gridColumn: '1 / -1' }}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              
              <div className="form-submit" style={{ gridColumn: '1 / -1' }}>
                <button type="submit" className="form-submit-btn">Envoyer ma demande</button>
              </div>
            </form>
          </div>

          <div className="contact-info animate-on-scroll">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h3>Téléphone</h3>
                <a href="tel:+33781221799">+33 7 81 22 17 99</a>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <h3>Email</h3>
                <a href="mailto:contact@c2f-install.fr">contact@c2f-install.fr</a>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h3>Adresse</h3>
                <p>33 Avenue de la République<br/>03100 Montluçon</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <h3>Horaires</h3>
                <p>Lundi - Vendredi: 8h00 - 18h00<br/>Samedi: sur rendez-vous</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
