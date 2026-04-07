import React, { useState } from 'react';

export default function BookConsultation() {
  const [formData, setFormData] = useState({ name: '', phone: '', state: 'Kerala', city: '' });
  const [submitted, setSubmitted] = useState(false);

  const CITIES = {
    'Kerala': ['Kochi', 'Trivandrum', 'Kozhikode', 'Thrissur'],
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Trichy']
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container py-12 animate-fade-in flex justify-center">
      <div className="card p-8 w-full" style={{ maxWidth: '32rem' }}>
        <h1 className="text-3xl mb-6 text-center" style={{ color: 'var(--teal)' }}>Book a Consultation</h1>
        {submitted ? (
          <div className="p-4 rounded border" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: '#10b981', color: '#047857' }}>
            Your consultation request for {formData.city}, {formData.state} has been received. Our lead architect will contact you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input required type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="form-input" />
            <input required type="tel" placeholder="Phone Number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="form-input" />
            
            <select value={formData.state} onChange={e => setFormData({...formData, state: e.target.value, city: ''})} className="form-input mt-4">
              <option value="Kerala">Kerala</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
            </select>
            
            <select required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="form-input">
              <option value="">Select City</option>
              {CITIES[formData.state].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            
            <button type="submit" className="btn btn-primary mt-4" style={{ backgroundColor: 'var(--teal)', color: '#fff' }}>Confirm Booking</button>
          </form>
        )}
      </div>
    </div>
  );
}
