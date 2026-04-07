import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

export default function PackageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const origin = parseInt(id.replace(/\\D/g, '') || '1') > 3 ? 'Tamil Nadu' : 'Kerala';
  const pkg = { name: 'Majestic Heritage Tour', duration: '3 Days / 2 Nights', bestTime: 'Oct - March', groupSize: '2-12 Persons', rating: '4.8/5', originState: origin, includes: ['Accommodation', 'Breakfast', 'Local Guide', 'Transfers'] };
  
  return (
    <div className="container py-12 animate-fade-in">
      <button onClick={() => navigate(-1)} className="btn btn-outline mb-8">&larr; Back</button>
      <div className="card grid grid-cols-2" style={{ gap: 0, overflow: 'hidden' }}>
        <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1605555462788-b2fc29c8e82b?w=800&q=80)', backgroundSize: 'cover', height: '500px' }}></div>
        <div className="p-8 flex flex-col">
          <span style={{ color: 'var(--tn-red)', fontWeight: 'bold' }}>{pkg.originState} Travel</span>
          <h1 className="text-4xl my-4">{pkg.name}</h1>
          
          <ul className="grid grid-cols-2 gap-4 mb-6">
            <li className="glass-panel p-4 rounded-lg"><strong>Duration:</strong> <br/>{pkg.duration}</li>
            <li className="glass-panel p-4 rounded-lg"><strong>Best Time:</strong> <br/>{pkg.bestTime}</li>
            <li className="glass-panel p-4 rounded-lg"><strong>Group Size:</strong> <br/>{pkg.groupSize}</li>
            <li className="glass-panel p-4 rounded-lg flex items-center justify-between"><strong>Rating:</strong> <span className="text-xl font-bold" style={{ color: 'var(--gold)' }}>★ {pkg.rating}</span></li>
          </ul>
          
          <div className="mb-8">
            <h3 className="font-bold mb-2">Package Includes:</h3>
            <ul className="flex gap-2 flex-wrap">
              {pkg.includes.map((inc, i) => (
                <li key={i} className="px-3 py-1 bg-gray-100 rounded-full text-sm" style={{ backgroundColor: 'var(--bg-color)' }}>✓ {inc}</li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex justify-end">
            <Link to="/tourism/booking" className="btn btn-primary" style={{ backgroundColor: 'var(--tn-red)' }}>Book This Package</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
