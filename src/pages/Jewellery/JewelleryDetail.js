import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

export default function JewelleryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(AppContext);
  
  const origin = parseInt(id.replace(/\\D/g, '') || '1') > 3 ? 'Tamil Nadu' : 'Kerala';
  const jewel = { name: 'Exquisite Heritage Piece', price: 45000, type: 'Necklace', originState: origin, karat: '22K Gold', weight: '45g', occasion: 'Wedding / Festive', features: 'Handcrafted ancient motifs' };
  
  return (
    <div className="container py-12 animate-fade-in">
      <button onClick={() => navigate(-1)} className="btn btn-outline mb-8">&larr; Back</button>
      <div className="card grid grid-cols-2" style={{ gap: 0, overflow: 'hidden' }}>
        <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1599643478514-4a884f186357?w=800&q=80)', backgroundSize: 'cover', height: '500px' }}></div>
        <div className="p-8 flex flex-col">
          <span style={{ color: 'var(--gold)', fontWeight: 'bold' }}>{jewel.originState} Heritage</span>
          <h1 className="text-4xl my-4">{jewel.name}</h1>
          <p className="text-muted mb-6">{jewel.features}</p>
          <ul className="flex flex-col gap-2 mb-8 p-4 rounded-lg" style={{ backgroundColor: 'var(--bg-color)' }}>
            <li><strong>Karat:</strong> {jewel.karat}</li>
            <li><strong>Weight:</strong> {jewel.weight}</li>
            <li><strong>Occasion:</strong> {jewel.occasion}</li>
            <li><strong>Type:</strong> {jewel.type}</li>
          </ul>
          <div className="mt-auto flex justify-between items-center">
            <span className="text-4xl font-bold" style={{ color: 'var(--gold)' }}>₹{jewel.price}</span>
            <button onClick={addToCart} className="btn" style={{ backgroundColor: 'var(--gold)', color: 'black' }}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
