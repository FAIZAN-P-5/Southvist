import React, { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({ name: '', email: '', date: '', guests: 2, statePref: 'Both', package: '6-Day Grand Itinerary' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container py-12 animate-fade-in flex justify-center">
      <div className="card p-8 w-full shadow-xl" style={{ borderTop: '4px solid var(--tn-red)', maxWidth: '32rem' }}>
        <h1 className="text-3xl mb-6 text-center">Book Your Journey</h1>
        {submitted ? (
          <div className="p-6 text-center">
            <div className="text-4xl mb-4">✨</div>
            <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-muted">Thank you, {formData.name}. We've received your booking for {formData.package} for {formData.guests} guests on {formData.date}. Our travel expert will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input required type="text" placeholder="Full Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="form-input" />
            <input required type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="form-input" />
            
            <div className="flex gap-4">
              <div className="flex flex-col flex-1">
                <label className="text-xs text-muted mb-1">Travel Date</label>
                <input required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="form-input" />
              </div>
              <div className="flex flex-col flex-1">
                <label className="text-xs text-muted mb-1">Guests</label>
                <input required type="number" min="1" value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})} className="form-input" />
              </div>
            </div>

            <div className="flex flex-col">
                <label className="text-xs text-muted mb-1">State Preference</label>
                <select value={formData.statePref} onChange={e => setFormData({...formData, statePref: e.target.value})} className="form-input">
                  <option value="Both">Both (Kerala & Tamil Nadu)</option>
                  <option value="Kerala">Kerala Focused</option>
                  <option value="Tamil Nadu">Tamil Nadu Focused</option>
                </select>
            </div>
            
            <div className="flex flex-col">
                <label className="text-xs text-muted mb-1">Select Package</label>
                <select value={formData.package} onChange={e => setFormData({...formData, package: e.target.value})} className="form-input">
                  <option value="6-Day Grand Itinerary">6-Day Grand Itinerary</option>
                  <option value="Alleppey Backwaters">Alleppey Backwaters</option>
                  <option value="Munnar Hills">Munnar Hills</option>
                  <option value="Madurai Meenakshi">Madurai Meenakshi</option>
                </select>
            </div>
            
            <button type="submit" className="btn btn-primary mt-4" style={{ backgroundColor: 'var(--tn-red)' }}>Confirm Booking</button>
          </form>
        )}
      </div>
    </div>
  );
}
