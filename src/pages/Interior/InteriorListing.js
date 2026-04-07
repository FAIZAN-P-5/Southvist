import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';
import { AppContext } from '../../context/AppContext';
import { useStateFilter } from '../../hooks/useStateFilter';

const STYLES = [
  { id: 'i1', name: 'Nalukettu', price: null, type: 'Architecture', originState: 'Kerala', vastuCompliant: true, image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80' },
  { id: 'i2', name: 'Modern Kerala', price: null, type: 'Interior', originState: 'Kerala', vastuCompliant: false, image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&q=80' },
  { id: 'i3', name: 'Eco Interior', price: null, type: 'Design', originState: 'Kerala', vastuCompliant: true, image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=400&q=80' },
  { id: 'i4', name: 'Chettinad Mansion', price: null, type: 'Architecture', originState: 'Tamil Nadu', vastuCompliant: true, image: 'https://images.unsplash.com/photo-1582298538104-afbc26284de5?w=400&q=80' },
  { id: 'i5', name: 'Dravidian Pillared Hall', price: null, type: 'Interior', originState: 'Tamil Nadu', vastuCompliant: false, image: 'https://images.unsplash.com/photo-1606822269222-b52adfe5a3fe?w=400&q=80' },
  { id: 'i6', name: 'Tamil Courtyard Home', price: null, type: 'Architecture', originState: 'Tamil Nadu', vastuCompliant: true, image: 'https://images.unsplash.com/photo-1497215848146-24e548174f8c?w=400&q=80' },
];

export default function InteriorListing() {
  const { globalStateFilter } = useContext(AppContext);
  const { filter, setFilter, filteredItems } = useStateFilter(STYLES, globalStateFilter);
  const [vastuOnly, setVastuOnly] = useState(false);

  const displayedStyles = vastuOnly ? filteredItems.filter(item => item.vastuCompliant) : filteredItems;

  return (
    <div className="container py-12 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl" style={{ color: 'var(--teal)' }}>SouthVista Interiors</h1>
        <div className="flex gap-4">
          <Link to="/interior/portfolio" className="btn btn-outline">Our Portfolio</Link>
          <Link to="/interior/consultation" className="btn btn-primary" style={{ backgroundColor: 'var(--teal)' }}>Book Consultation</Link>
        </div>
      </div>
      
      <div className="flex gap-8 mb-8 items-center p-4 rounded-xl shadow-sm glass-panel justify-between">
        <div className="flex gap-2">
          {['All', 'Kerala Style', 'Tamil Nadu Style'].map(opt => {
            const displayOpt = opt === 'All' ? 'All' : opt.split(' ')[0] === 'Tamil' ? 'Tamil Nadu' : 'Kerala';
            return (
              <button
                key={opt}
                onClick={() => setFilter(displayOpt)}
                style={{ 
                  backgroundColor: filter === displayOpt ? 'var(--teal)' : 'transparent', 
                  border: '1px solid', 
                  borderColor: filter === displayOpt ? 'var(--teal)' : 'var(--border-color)', 
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
        
        <label className="flex items-center gap-2 cursor-pointer font-bold">
          <input type="checkbox" checked={vastuOnly} onChange={e => setVastuOnly(e.target.checked)} style={{ width: '1.25rem', height: '1.25rem' }} />
          Vastu Compliant Only
        </label>
      </div>

      <div className="grid grid-cols-3">
        {displayedStyles.map(j => (
          <ProductCard key={j.id} id={j.id} name={j.name} type={j.type} originState={j.originState} image={j.image} linkTo={`/interior/${j.id}`} />
        ))}
        {displayedStyles.length === 0 && <p className="text-muted col-span-full">No styles found.</p>}
      </div>
    </div>
  );
}
