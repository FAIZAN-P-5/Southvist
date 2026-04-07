import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export const ProductCard = ({ name, type, price, originState, image, linkTo }) => {
  const { addToCart, appTheme } = useContext(AppContext);
  
  // Choose accent color based on state
  let cardClass = "card animate-fade-in ";
  cardClass += (originState === 'Kerala' ? 'accent-kerala' : 'accent-tn');
  
  const labelColor = originState === 'Kerala' ? 'var(--kerala-green)' : 'var(--tn-red)';

  return (
    <div className={cardClass} style={{ display: 'flex', flexDirection: 'column', height: '100%', border: appTheme === 'dark' ? '1px solid #334' : '1px solid #eee' }}>
      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
         {image ? (
            <img src={image} alt={name} className="img-base" />
         ) : (
            <div style={{ padding: '2rem', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa', color: '#888' }}>
              Pending Image
            </div>
         )}
         <span style={{ 
           position: 'absolute', top: '12px', right: '12px', 
           backgroundColor: labelColor, color: 'white', 
           padding: '5px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' 
         }}>
           {originState}
         </span>
      </div>
      <div className="p-6" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '10px', textTransform: 'uppercase', marginBottom: '5px' }}>
          {type}
        </p>
        <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px 0' }}>{name}</h3>
        {price && <div style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--teal)', marginTop: 'auto', marginBottom: '15px' }}>₹{price}</div>}
        
        <div className="flex" style={{ gap: '8px', marginTop: 'auto' }}>
          <Link to={linkTo} className="btn btn-outline" style={{ flex: 1, padding: '0.6rem', fontSize: '13px' }}>Details</Link>
          <button onClick={() => {
            console.log("Adding:", name);
            addToCart({ name, type, price, originState, image, id: Math.random().toString() }); 
          }} className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '13px' }}>Add</button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number,
  originState: PropTypes.oneOf(['Kerala', 'Tamil Nadu']).isRequired,
  image: PropTypes.string,
  linkTo: PropTypes.string.isRequired
};
