import React from 'react';

export default function Portfolio() {
  const projects = [
    { city: 'Kochi', state: 'Kerala', name: 'Backwater Villa Retreat', img: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&q=80' },
    { city: 'Chennai', state: 'Tamil Nadu', name: 'Modern Chettinad Home', img: 'https://images.unsplash.com/photo-1582298538104-afbc26284de5?w=400&q=80' },
    { city: 'Trivandrum', state: 'Kerala', name: 'Heritage Nalukettu Restoration', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80' },
    { city: 'Madurai', state: 'Tamil Nadu', name: 'Courtyard Pillared House', img: 'https://images.unsplash.com/photo-1497215848146-24e548174f8c?w=400&q=80' },
  ];

  return (
    <div className="container py-12 animate-fade-in">
      <h1 className="text-4xl text-center mb-8" style={{ color: 'var(--teal)' }}>Completed Projects</h1>
      <div className="grid grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="card relative transition-transform duration-500 hover:scale-[1.02]" style={{ height: '300px', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: `url(${p.img})`, backgroundSize: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, width: '100%', padding: '1.5rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white' }}>
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p>{p.city}, {p.state}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
