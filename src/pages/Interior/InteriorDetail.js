import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function InteriorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const origin = parseInt(id.replace(/\\D/g, '') || '1') > 3 ? 'Tamil Nadu' : 'Kerala';
  const detail = { name: 'Traditional Courtyard Home', type: 'Architecture', originState: origin, area: '2000 - 5000 sq.ft', duration: '6-8 Months', material: 'Teak Wood, Laterite, Terracotta', highlights: 'Eco-friendly cooling, Natural daylighting, Rainwater harvesting integration.' };
  
  return (
    <div className="container py-12 animate-fade-in">
      <button onClick={() => navigate(-1)} className="btn btn-outline mb-8">&larr; Back</button>
      <div className="card grid grid-cols-2" style={{ gap: 0, overflow: 'hidden' }}>
        <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80)', backgroundSize: 'cover', height: '500px' }}></div>
        <div className="p-8 flex flex-col">
          <span style={{ color: 'var(--teal)', fontWeight: 'bold' }}>{detail.originState} {detail.type}</span>
          <h1 className="text-4xl my-4">{detail.name}</h1>
          <p className="text-muted mb-6">{detail.highlights}</p>
          <ul className="flex flex-col gap-2 mb-8 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-color)' }}>
            <li><strong>Ideal Area:</strong> {detail.area}</li>
            <li><strong>Duration:</strong> {detail.duration}</li>
            <li><strong>Key Materials:</strong> {detail.material}</li>
          </ul>
          <div className="mt-auto flex justify-end">
            <Link to="/interior/consultation" className="btn btn-primary" style={{ backgroundColor: 'var(--teal)' }}>Book Consultation</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
