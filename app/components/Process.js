export default function Process() {
  const steps = [
    { icon: "📞", title: "Contact", desc: "Appelez-nous ou remplissez le formulaire" },
    { icon: "🔍", title: "Visite technique", desc: "Étude de vos besoins sur place" },
    { icon: "📋", title: "Devis gratuit", desc: "Proposition détaillée et transparente" },
    { icon: "⚡", title: "Installation", desc: "Réalisation par nos experts" },
    { icon: "✅", title: "Mise en service", desc: "Tests et vérifications complètes" },
    { icon: "🛠️", title: "SAV", desc: "Suivi et maintenance assurés" }
  ];

  return (
    <section className="process-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">NOTRE MÉTHODE</span>
          <h2 className="section-title">Comment ça marche ?</h2>
        </div>

        <div className="process-timeline animate-on-scroll">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step">
              <div className="process-step-number">{idx + 1}</div>
              <div className="process-step-icon">{step.icon}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
