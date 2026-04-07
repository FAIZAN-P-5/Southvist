import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ShoppingCart, Moon, Sun } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { StateToggle } from './StateToggle';

export const Navbar = () => {
  const { appTheme, toggleTheme, cartItems, globalStateFilter, setGlobalStateFilter } = useContext(AppContext);
  const cartCount = cartItems ? cartItems.reduce((acc, item) => acc + item.qty, 0) : 0;

  return (
    <header className="glass-panel" style={{ position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid var(--border-color)' }}>
      <div className="container flex items-center justify-between" style={{ padding: '1rem 1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-serif)', display: 'flex', gap: '5px', whiteSpace: 'nowrap' }}>
          <span className="text-kerala">South</span><span className="text-tn">Vista</span>
        </Link>

        <nav className="flex items-center" style={{ gap: '1rem', fontWeight: '500', flexWrap: 'wrap', fontSize: '0.9rem' }}>
          <Link to="/" style={{ whiteSpace: 'nowrap' }}>Home</Link>
          <Link to="/about" style={{ whiteSpace: 'nowrap' }}>About Us</Link>
          <Link to="/gallery" style={{ whiteSpace: 'nowrap' }}>Gallery</Link>
          <Link to="/contact" style={{ whiteSpace: 'nowrap' }}>Contact</Link>
          <span style={{ margin: '0 0.25rem', color: 'var(--border-color)' }}>|</span>
          <Link to="/nursery" className="text-kerala" style={{ whiteSpace: 'nowrap' }}>Nursery</Link>
          <Link to="/jewellery" className="text-gold" style={{ whiteSpace: 'nowrap' }}>Jewellery</Link>
          <Link to="/interior" className="text-teal" style={{ whiteSpace: 'nowrap' }}>Interior</Link>
          <Link to="/tourism" className="text-tn" style={{ whiteSpace: 'nowrap' }}>Tourism</Link>
        </nav>

        <div className="flex items-center" style={{ gap: '1.5rem' }}>
          <StateToggle value={globalStateFilter} onChange={setGlobalStateFilter} />
          
          <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}>
             {appTheme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
          </button>
          
          <Link to="/cart" style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <ShoppingCart size={24} style={{ color: 'var(--text-primary)' }} />
            {cartCount > 0 && (
              <span style={{ 
                position: 'absolute', top: '-8px', right: '-8px', 
                backgroundColor: 'var(--tn-red)', color: 'white', 
                fontSize: '0.75rem', width: '20px', height: '20px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' 
              }}>
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

// Navbar doesn't receive direct props from parent strictly as it uses Context, so no explicit PropTypes for variables here, but component exports need to be robust. 
