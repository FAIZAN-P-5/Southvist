import React, { useState } from 'react';
import { galleryData } from '../data/galleryData';

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openedImage, setOpenedImage] = useState(null);

  // Filter based on the selected tag
  const imagesToShow = activeCategory === 'All' 
    ? galleryData 
    : galleryData.filter(i => i.category === activeCategory);

  return (
    <div className="container py-12 animate-fade-in">
      <h1 className="text-4xl text-center mb-10" style={{ fontWeight: '800' }}>Inspiration Gallery</h1>
      
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {['All', 'Nursery', 'Jewellery', 'Interior', 'Tourism'].map(cat => (
          <button 
            key={cat} 
            onClick={() => setActiveCategory(cat)}
            className="btn"
            style={{ 
              borderRadius: '99px',
              padding: '0.6rem 1.4rem',
              fontSize: '14px',
              backgroundColor: activeCategory === cat ? 'var(--kerala-green)' : 'transparent',
              color: activeCategory === cat ? '#fff' : 'inherit',
              border: '1px solid var(--border-color)'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {imagesToShow.map(img => (
          <div 
            key={img.id} 
            className="card overflow-hidden shadow-lg hover:shadow-2xl transition-all" 
            style={{ cursor: 'zoom-in', height: '300px', borderRadius: '15px' }} 
            onClick={() => setOpenedImage(img.url)}
          >
            <img 
              src={img.url} 
              alt="Gallery" 
              className="img-base" 
              style={{ objectPosition: 'center' }}
            />
          </div>
        ))}
      </div>

      {openedImage && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setOpenedImage(null)}>
          <img src={openedImage} alt="Expanded" style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '8px', objectFit: 'contain' }} />
          <button style={{ position: 'absolute', top: '20px', right: '20px', background: 'transparent', color: 'white', border: 'none', fontSize: '2rem', cursor: 'pointer' }}>&times;</button>
        </div>
      )}
    </div>
  );
}

export default Gallery;
