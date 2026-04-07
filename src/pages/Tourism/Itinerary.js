import React from 'react';
import { Link } from 'react-router-dom';

export default function Itinerary() {
  const days = [
    { day: 1, title: 'Arrival in Kochi (Kerala)', desc: 'Explore Fort Kochi, Chinese Fishing Nets, and attend a Kathakali performance.', state: 'Kerala' },
    { day: 2, title: 'Alleppey Houseboat', desc: 'Cruise through the serene backwaters on a traditional Kettuvallam and enjoy Kerala cuisine.', state: 'Kerala' },
    { day: 3, title: 'Munnar Tea Gardens', desc: 'Drive to the hills of Munnar. Visit the Tea Museum and Mattupetty Dam.', state: 'Kerala' },
    { day: 4, title: 'Madurai (Tamil Nadu)', desc: 'Cross over to Tamil Nadu. Visit the breathtaking Meenakshi Amman Temple in the evening.', state: 'Tamil Nadu' },
    { day: 5, title: 'Chettinad Heritage', desc: 'Explore the grand mansions of Chettinad and taste their famous spicy cuisine.', state: 'Tamil Nadu' },
    { day: 6, title: 'Departure from Chennai', desc: 'Drive to Chennai. Visit Marina Beach before catching your onward flight.', state: 'Tamil Nadu' },
  ];

  return (
    <div className="container py-12 animate-fade-in" style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div className="text-center mb-12">
        <h1 className="text-4xl mb-4" style={{ color: 'var(--tn-red)' }}>6-Day Grand South India Itinerary</h1>
        <p className="text-lg text-muted">A perfectly curated journey combining the lush landscapes of Kerala with the rich heritage of Tamil Nadu.</p>
      </div>

      <div className="relative pl-8">
        <div style={{ position: 'absolute', left: '15px', top: 0, bottom: 0, width: '2px', backgroundColor: 'var(--border-color)' }}></div>
        {days.map((d, i) => (
          <div key={i} className="card p-6 mb-6 relative ml-6">
            <div style={{ position: 'absolute', left: '-40px', top: '24px', width: '20px', height: '20px', borderRadius: '50%', backgroundColor: d.state === 'Kerala' ? 'var(--kerala-green)' : 'var(--tn-red)', border: '4px solid var(--card-bg)' }}></div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Day {d.day}: {d.title}</h3>
              <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: d.state === 'Kerala' ? 'var(--kerala-green)' : 'var(--tn-red)' }}>
                {d.state}
              </span>
            </div>
            <p className="text-muted">{d.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/tourism/booking" className="btn btn-primary" style={{ backgroundColor: 'var(--tn-red)', padding: '1rem 3rem', fontSize: '1.25rem' }}>Book This Itinerary</Link>
      </div>
    </div>
  );
}
