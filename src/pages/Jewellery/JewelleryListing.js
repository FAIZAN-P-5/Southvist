import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';
import { AppContext } from '../../context/AppContext';
import { useStateFilter } from '../../hooks/useStateFilter';

import { jewelryData } from '../../data/jewelry';

export default function JewelleryListing() {
  const { globalStateFilter } = useContext(AppContext);
  // Filtering logic
  const { filter, setFilter, filteredItems } = useStateFilter(jewelryData, globalStateFilter);
  const [priceRange, setPriceRange] = useState(100000); 

  // Secondary filter for price
  const displayedJewels = filteredItems.filter(item => item.price <= priceRange);

  return (
    <div className="container py-12 animate-fade-in">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl" style={{ color: 'var(--gold)', fontWeight: 'bold' }}>Jewellery Collection</h1>
        <div className="flex gap-4">
          <Link to="/jewellery/custom" className="btn btn-primary" style={{ backgroundColor: 'var(--gold)', color: '#000', border: 'none' }}>Start Custom Design</Link>
          <Link to="/jewellery/care" className="btn btn-outline">Cleaning Guide</Link>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mb-12 p-6 rounded-2xl shadow-lg" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
        <div className="flex flex-col gap-3 flex-1">
          <div className="flex justify-between">
            <span className="text-xs font-bold uppercase tracking-wider">Price Filter</span>
            <span className="text-xs font-mono">Max: ₹{priceRange.toLocaleString()}</span>
          </div>
          <input 
             type="range" 
             min="5000" 
             max="100000" 
             step="5000" 
             value={priceRange} 
             onChange={e => setPriceRange(Number(e.target.value))} 
             style={{ accentColor: 'var(--gold)' }}
          />
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-wider">Style Category</span>
          <div className="flex gap-2">
            <button 
              onClick={() => setFilter('All')}
              className="btn-pill"
              style={{ padding: '6px 15px', fontSize: '12px', borderRadius: '20px', border: '1px solid var(--gold)', backgroundColor: filter === 'All' ? 'var(--gold)' : 'transparent', color: filter === 'All' ? '#000' : 'inherit' }}
            >
              Show All
            </button>
            <button 
              onClick={() => setFilter('Kerala')}
              className="btn-pill"
              style={{ padding: '6px 15px', fontSize: '12px', borderRadius: '20px', border: '1px solid var(--gold)', backgroundColor: filter === 'Kerala' ? 'var(--gold)' : 'transparent', color: filter === 'Kerala' ? '#000' : 'inherit' }}
            >
              Kerala
            </button>
            <button 
              onClick={() => setFilter('Tamil Nadu')}
              className="btn-pill"
              style={{ padding: '6px 15px', fontSize: '12px', borderRadius: '20px', border: '1px solid var(--gold)', backgroundColor: filter === 'Tamil Nadu' ? 'var(--gold)' : 'transparent', color: filter === 'Tamil Nadu' ? '#000' : 'inherit' }}
            >
              Tamil Nadu
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3">
        {displayedJewels.map(j => (
          <ProductCard key={j.id} id={j.id} name={j.name} type={j.type} price={j.price} originState={j.originState} image={j.image} linkTo={`/jewellery/${j.id}`} />
        ))}
        {displayedJewels.length === 0 && <p className="text-muted col-span-full">No jewellery found in this range.</p>}
      </div>
    </div>
  );
}
