import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../../components/ProductCard';
import { AppContext } from '../../context/AppContext';
import { useSearch } from '../../hooks/useSearch';
import { useStateFilter } from '../../hooks/useStateFilter';

import { plantCollection } from '../../data/plants';

export default function NurseryListing() {
  const { globalStateFilter } = useContext(AppContext);
  const { filter, setFilter, filteredItems } = useStateFilter(plantCollection, globalStateFilter);
  const { searchTerm, setSearchTerm, results } = useSearch(filteredItems, 'name');

  // Manual override for global filter changes
  React.useEffect(() => {
    if (globalStateFilter) {
      setFilter(globalStateFilter);
    }
  }, [globalStateFilter, setFilter]);

  return (
    <div className="container py-12 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl" style={{ color: 'var(--kerala-green)' }}>Our Green Nursery</h1>
        <Link to="/nursery/tips" className="btn btn-outline text-xs">View Care Instructions</Link>
      </div>
      
      <div className="flex gap-4 mb-10 items-end">
        <div className="flex flex-col gap-1 flex-1" style={{ maxWidth: '350px' }}>
          <span className="text-xs font-bold text-muted ml-1">Search Collection</span>
          <input 
            type="text" 
            placeholder="Search by name..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="form-input"
          />
        </div>

        <div className="flex gap-1 bg-gray-100 rounded-lg p-1 border">
          {['All', 'Kerala', 'Tamil Nadu'].map(opt => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              style={{
                padding: '0.4rem 0.8rem', borderRadius: '6px', border: 'none',
                fontSize: '13px', fontWeight: 'bold', cursor: 'pointer',
                backgroundColor: filter === opt ? 'var(--kerala-green)' : 'transparent',
                color: filter === opt ? 'white' : '#666'
              }}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {results.map(p => (
          <ProductCard
            key={p.id}
            name={p.name}
            type={p.type}
            price={p.price}
            originState={p.originState}
            image={p.image}
            linkTo={`/nursery/${p.id}`}
          />
        ))}
      </div>
      
      {results.length === 0 && (
        <div className="text-center py-20 bg-gray-50 rounded-xl mt-8">
           <p className="text-muted">No matching plants found in our {filter} collection.</p>
        </div>
      )}
    </div>
  );
}
