import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border-color)', padding: '3rem 0', marginTop: 'auto' }}>
      <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
        <div>
          <h3 className="text-kerala" style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)' }}>SouthVista</h3>
          <p className="text-muted mt-4" style={{ fontSize: '0.875rem' }}>Discover the rich heritage and aesthetic beauty of God's Own Countries, Kerala and Tamil Nadu.</p>
        </div>
        <div>
          <h4 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Quick Links</h4>
          <div className="flex flex-col" style={{ gap: '0.5rem', fontSize: '0.875rem' }}>
            <Link to="/about">About Us</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Categories</h4>
          <div className="flex flex-col" style={{ gap: '0.5rem', fontSize: '0.875rem' }}>
            <Link to="/nursery">Nursery</Link>
            <Link to="/jewellery">Jewellery</Link>
            <Link to="/interior">Interior Design</Link>
            <Link to="/tourism">Tourism</Link>
          </div>
        </div>
        <div>
          <h4 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>Offices</h4>
          <div className="flex flex-col" style={{ gap: '1rem', fontSize: '0.875rem' }}>
            <div>
              <p className="font-bold text-kerala">Kozhikode (Kerala)</p>
              <p className="text-muted">Cyberpark, Nellikode PO</p>
            </div>
            <div>
              <p className="font-bold text-tn">Chennai (Tamil Nadu)</p>
              <p className="text-muted"> Anna Salai, T. Nagar</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
        &copy; {new Date().getFullYear()} SouthVista. All rights reserved.
      </div>
    </footer>
  );
};
