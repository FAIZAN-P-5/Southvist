import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', state: 'Kerala', category: 'General', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill required fields (Name, Email, Message).');
      return;
    }
    setError('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', state: 'Kerala', category: 'General', message: '' });
  };

  return (
    <div className="container py-12 animate-fade-in">
      <h1 className="text-4xl text-center mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-2">
        <div className="card p-6" style={{ alignSelf: 'start' }}>
           <h2 className="text-2xl mb-6">Send an Enquiry</h2>
           {submitted ? (
             <div style={{ padding: '1rem', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: '8px', border: '1px solid #34d399' }}>
               Thank you! Your message has been sent successfully.
             </div>
           ) : (
             <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {error && <div style={{ color: 'var(--tn-red)', fontSize: '0.875rem' }}>{error}</div>}
                
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name *" className="form-input" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email *" className="form-input" />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="form-input" />
                
                <div className="flex gap-4">
                  <select name="state" value={formData.state} onChange={handleChange} className="form-input" style={{ flex: 1 }}>
                    <option value="Kerala">Kerala</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                  </select>
                  <select name="category" value={formData.category} onChange={handleChange} className="form-input" style={{ flex: 1 }}>
                    <option value="General">General</option>
                    <option value="Nursery">Nursery</option>
                    <option value="Jewellery">Jewellery</option>
                    <option value="Interior">Interior</option>
                    <option value="Tourism">Tourism</option>
                  </select>
                </div>

                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Your Message *" className="form-input"></textarea>
                
                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Submit Message</button>
             </form>
           )}
        </div>
        
        <div className="flex flex-col gap-8">
           <div className="card p-6 accent-kerala text-center">
              <h3 className="text-xl font-bold mb-2">Kerala Office</h3>
              <p className="text-muted">Cyberpark, Nellikode PO, Kozhikode, Kerala 673016</p>
              <p className="font-bold text-kerala mt-4">+91 12345678</p>
           </div>
           <div className="card p-6 accent-tn text-center">
              <h3 className="text-xl font-bold mb-2">Tamil Nadu Office</h3>
              <p className="text-muted">456 Anna Salai, T. Nagar, Chennai, TN 600017</p>
              <p className="font-bold text-tn mt-4">+91 12345678</p>
           </div>
        </div>
      </div>
    </div>
  );
}
