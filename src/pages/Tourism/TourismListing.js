import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';
import { AppContext } from '../../context/AppContext';
import { useStateFilter } from '../../hooks/useStateFilter';

const PACKAGES = [
  { id: 't1', name: 'Alleppey Backwaters', price: 15000, type: 'Cruise', originState: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80' },
  { id: 't2', name: 'Munnar Hills', price: 12000, type: 'Nature', originState: 'Kerala', image: 'https://images.unsplash.com/photo-1593693397690-362cb9666dc2?w=600&q=80' },
  { id: 't3', name: 'Fort Kochi Heritage', price: 8000, type: 'Culture', originState: 'Kerala', image: 'https://images.unsplash.com/photo-1596414963503-68d1eb16acb3?w=600&q=80' },
  { id: 't4', name: 'Ooty Hill Station', price: 13000, type: 'Nature', originState: 'Tamil Nadu', image: 'https://images.unsplash.com/photo-1588614631355-66795b54637d?w=600&q=80' },
  { id: 't5', name: 'Madurai Meenakshi', price: 6000, type: 'Pilgrimage', originState: 'Tamil Nadu', image: 'https://images.unsplash.com/photo-1605555462788-b2fc29c8e82b?w=600&q=80' },
  { id: 't6', name: 'Mahabalipuram Heritage', price: 9000, type: 'Culture', originState: 'Tamil Nadu', image: 'https://images.unsplash.com/photo-1555363402-23c21c6ba545?w=600&q=80' },
];

export default function TourismListing() {
  const { globalStateFilter } = useContext(AppContext);
  const { filter, setFilter, filteredItems } = useStateFilter(PACKAGES, globalStateFilter);

  return (
    <div className="container py-12 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl" style={{ color: 'var(--tn-red)' }}>SouthVista Tourism</h1>
        <div className="flex gap-4">
          <Link to="/tourism/itinerary" className="btn btn-outline">6-Day Grand Itinerary</Link>
          <Link to="/tourism/booking" className="btn btn-primary" style={{ backgroundColor: 'var(--tn-red)' }}>Book Now</Link>
        </div>
      </div>
      
      <div className="flex gap-8 mb-8 items-center p-4 rounded-xl shadow-sm glass-panel justify-center">
        <div className="flex gap-2">
          {['All', 'Kerala Tours', 'Tamil Nadu Tours'].map(opt => {
            const displayOpt = opt === 'All' ? 'All' : opt.split(' ')[0] === 'Tamil' ? 'Tamil Nadu' : 'Kerala';
            return (
              <button
                key={opt}
                onClick={() => setFilter(displayOpt)}
                style={{ 
                  backgroundColor: filter === displayOpt ? 'var(--tn-red)' : 'transparent', 
                  border: '1px solid', 
                  borderColor: filter === displayOpt ? 'var(--tn-red)' : 'var(--border-color)', 
                  color: filter === displayOpt ? '#fff' : 'var(--text-primary)',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}
              >
                {opt}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-3">
        {filteredItems.map(j => (
          <ProductCard key={j.id} id={j.id} name={j.name} type={j.type} price={j.price} originState={j.originState} image={j.image} linkTo={`/tourism/${j.id}`} />
        ))}
      </div>
    </div>
  );
}
