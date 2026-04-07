import React from 'react';

export default function CareTips() {
  const tips = [
    { rule: "Avoid Liquid Contact", detail: "Remove jewellery before applying perfumes or lotions." },
    { rule: "Proper Storage", detail: "Store in a fabric-lined box or soft pouches separate from other pieces." },
    { rule: "Gentle Cleaning", detail: "Use warm water and soft brush. No harsh chemicals." },
    { rule: "Polishing", detail: "Use a specialized gold polishing cloth to maintain shine." },
    { rule: "Check prongs", detail: "Regularly check gem settings to avoid loss." },
    { rule: "Wear last", detail: "Put on your jewellery after clothing to avoid snags." }
  ];
  return (
    <div className="container py-12 animate-fade-in">
      <h1 className="text-4xl text-center mb-8" style={{ color: 'var(--gold)' }}>Jewellery Care Guide</h1>
      <div className="grid grid-cols-3 gap-6">
        {tips.map((t, i) => (
          <div key={i} className="card p-6" style={{ borderTop: `4px solid var(--gold)` }}>
            <h3 className="font-bold text-xl mb-2">{t.rule}</h3>
            <p className="text-muted">{t.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
