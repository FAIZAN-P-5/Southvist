import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HERO_SLIDES = [
  { img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80', title: "God's Own Country", subtitle: "Kerala's Backwaters" },
  { img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80', title: "Land of Temples", subtitle: "Tamil Nadu's Heritage" },
  { img: 'https://images.unsplash.com/photo-1605555462788-b2fc29c8e82b?auto=format&fit=crop&q=80', title: "Lush Nurseries", subtitle: "Tropical Plants & Shrubs" }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Banner */}
      <div className="hero">
        {HERO_SLIDES.map((slide, idx) => (
          <div key={idx} style={{ 
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            opacity: currentSlide === idx ? 1 : 0, transition: 'opacity 1s ease',
            backgroundImage: `url(${slide.img})`, backgroundSize: 'cover', backgroundPosition: 'center'
          }} />
        ))}
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            {HERO_SLIDES[currentSlide].title}
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '300', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
            {HERO_SLIDES[currentSlide].subtitle}
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/about" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>Discover SouthVista</Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <section className="py-12 bg-white" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container">
          <h2 className="text-center text-4xl mb-8">Our Categories</h2>
          <div className="grid grid-cols-4">
            {[
              { title: 'Nursery', link: '/nursery', img: 'https://images.unsplash.com/photo-1466692476878-159c0d32115d?auto=format&fit=crop&w=400&q=80' },
              { title: 'Jewellery', link: '/jewellery', img: 'https://images.unsplash.com/photo-1599643478514-4a884f186357?auto=format&fit=crop&w=400&q=80' },
              { title: 'Interior', link: '/interior', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80' },
              { title: 'Tourism', link: '/tourism', img: 'https://images.unsplash.com/photo-1593693397690-362cb9666dc2?auto=format&fit=crop&w=400&q=80' }
            ].map(cat => (
              <Link to={cat.link} key={cat.title} className="card" style={{ display: 'block', textDecoration: 'none' }}>
                <div style={{ height: '150px', background: `url(${cat.img}) center/cover` }} />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{cat.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12" style={{ backgroundColor: 'var(--card-bg)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <h2 className="text-center text-4xl mb-8">Heritage & Legacy</h2>
          <div className="grid grid-cols-2 text-center" style={{ gap: '4rem' }}>
            <div className="glass-panel p-6 accent-kerala" style={{ borderRadius: '12px' }}>
              <h3 className="text-kerala text-2xl font-serif">Kerala</h3>
              <p className="text-4xl font-bold mt-4">15+</p>
              <p className="text-muted text-sm mt-2">Tourism Destinations</p>
              <p className="text-4xl font-bold mt-4">1200+</p>
              <p className="text-muted text-sm mt-2">Plant Varieties in Nursery</p>
            </div>
            <div className="glass-panel p-6 accent-tn" style={{ borderRadius: '12px' }}>
              <h3 className="text-tn text-2xl font-serif">Tamil Nadu</h3>
              <p className="text-4xl font-bold mt-4">30+</p>
              <p className="text-muted text-sm mt-2">Temple Architectures</p>
              <p className="text-4xl font-bold mt-4">800+</p>
              <p className="text-muted text-sm mt-2">Traditional Jewellery Designs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
