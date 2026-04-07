import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

// Re-using data normally wouldn't be done this way, simulating an API call here.
const PLANTS_DATA = {
  'p1': { name: 'Coconut Palm', price: 1500, type: 'Tree', originState: 'Kerala', watering: 'Moderate', sunlight: 'Full Sun', height: '10-30m', benefits: 'Edible fruit, Timber, Leaves for thatching.' },
  'p6': { name: 'Banana Tree', price: 800, type: 'Tree', originState: 'Tamil Nadu', watering: 'High', sunlight: 'Full Sun', height: '3-7m', benefits: 'Edible fruit, Leaves for traditional food serving.' },
  // Adding default fallback.
};

export default function PlantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(AppContext);
  
  const plant = PLANTS_DATA[id] || { 
    name: 'Generic Plant', price: 500, type: 'Herb', originState: 'Kerala', 
    watering: 'Moderate', sunlight: 'Partial Shade', height: '1m', benefits: 'Air purifying.' 
  };
  
  const isKerala = plant.originState === 'Kerala';

  return (
    <div className="container py-12 animate-fade-in">
      <button onClick={() => navigate(-1)} className="btn btn-outline mb-8">&larr; Back to Nursery</button>
      
      <div className="card grid grid-cols-2" style={{ gap: 0, overflow: 'hidden' }}>
        <div style={{ backgroundColor: '#f3f4f6', height: '500px', backgroundImage: `url(https://images.unsplash.com/photo-1599598425947-33002629b35b?w=800&q=80)`, backgroundSize: 'cover' }}></div>
        <div className="p-6" style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ 
            alignSelf: 'flex-start', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 'bold',
            backgroundColor: isKerala ? 'var(--kerala-green)' : 'var(--tn-red)', color: 'white', marginBottom: '1rem'
          }}>
            {plant.originState} Origin
          </span>
          <h1 className="text-4xl mb-2">{plant.name}</h1>
          <p className="text-muted text-sm mb-6">{plant.type}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="glass-panel p-4" style={{ borderRadius: '8px' }}>
              <p className="text-xs text-muted">Watering</p>
              <p className="font-bold">{plant.watering}</p>
            </div>
            <div className="glass-panel p-4" style={{ borderRadius: '8px' }}>
              <p className="text-xs text-muted">Sunlight</p>
              <p className="font-bold">{plant.sunlight}</p>
            </div>
            <div className="glass-panel p-4" style={{ borderRadius: '8px' }}>
              <p className="text-xs text-muted">Avg. Height</p>
              <p className="font-bold">{plant.height}</p>
            </div>
            <div className="glass-panel p-4" style={{ borderRadius: '8px' }}>
              <p className="text-xs text-muted">Benefits</p>
              <p className="font-bold">{plant.benefits}</p>
            </div>
          </div>
          
          <div className="mt-auto flex items-center justify-between">
            <div className="text-4xl font-bold text-teal">₹{plant.price}</div>
            <button onClick={addToCart} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.25rem' }}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
