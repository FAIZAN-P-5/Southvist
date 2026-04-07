import React, { useState } from 'react';

// Combined Garden Tips and Care Guide
export default function GardenTips() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const seasons = [
    { title: 'Northeast Monsoon (Oct - Dec)', content: 'Protect delicate plants from heavy downpours. Ensure proper drainage to avoid waterlogging. Tamil Nadu coastal areas receive high rainfall, so rely on raised beds.' },
    { title: 'Summer (Mar - May)', content: 'Increase watering frequency. Provide afternoon shade for tender plants. Mulching is critical to retain soil moisture during the intense tropical sun.' },
    { title: 'Southwest Monsoon (Jun - Sep)', content: 'Kerala receives ample rainfall. Harvest rainwater and perform pruning. Plant fruit trees like Mango and Jackfruit during this ideal vegetative period.' }
  ];

  const careTips = [
    { title: 'Soil Preparation', desc: 'Mix red laterite with compost for optimal tropical growth.' },
    { title: 'Organic Pest Control', desc: 'Use Neem oil spray every 2 weeks to deter aphids.' },
    { title: 'Pruning Techniques', desc: 'Prune directly above the node at a 45-degree angle.' },
    { title: 'Watering Rules', desc: 'Water deeply early morning rather than shallow daily splashes.' },
    { title: 'Fertilization', desc: 'Use cow dung manure or vermicompost once a month.' },
    { title: 'Repotting', desc: 'Repot every 1-2 years before monsoon begins.' }
  ];

  return (
    <div className="container py-12 animate-fade-in">
      <h1 className="text-4xl text-center mb-8">South Indian Gardening Tips</h1>
      
      <div className="grid grid-cols-2 gap-8">
        <div>
           <h2 className="text-2xl mb-6">Seasonal Advice</h2>
           <div className="card p-2">
             {seasons.map((season, i) => (
                <div key={i} style={{ borderBottom: i !== seasons.length - 1 ? '1px solid var(--border-color)' : 'none' }}>
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === i ? -1 : i)}
                    style={{ width: '100%', textAlign: 'left', padding: '1rem', background: 'none', border: 'none', fontWeight: 'bold', fontSize: '1.125rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
                  >
                    {season.title}
                    <span>{openAccordion === i ? '-' : '+'}</span>
                  </button>
                  {openAccordion === i && (
                    <div style={{ padding: '0 1rem 1rem 1rem', color: 'var(--text-secondary)' }}>
                      {season.content}
                    </div>
                  )}
                </div>
             ))}
           </div>
        </div>
        
        <div>
           <h2 className="text-2xl mb-6">6-Step Care Guide</h2>
           <div className="grid grid-cols-2 gap-4">
             {careTips.map((tip, i) => (
               <div key={i} className="card p-4" style={{ borderLeft: `4px solid ${i % 2 === 0 ? 'var(--kerala-green)' : 'var(--tn-red)'}` }}>
                 <h4 className="font-bold mb-2">{tip.title}</h4>
                 <p className="text-sm text-muted">{tip.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
