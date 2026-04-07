import React, { useState } from 'react';

export default function CustomDesign() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ type: '', karat: '', style: '', confirmed: false });

  return (
    <div className="container py-12 animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="text-4xl text-center mb-8">Custom Jewellery Wizard</h1>
      <div className="flex justify-between mb-8" style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '1rem' }}>
        {[1,2,3,4].map(num => (
          <div key={num} className={`font-bold`} style={{ color: step >= num ? 'var(--gold)' : 'var(--text-secondary)' }}>Step {num}</div>
        ))}
      </div>

      <div className="card p-8" style={{ minHeight: '300px' }}>
        {step === 1 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl mb-4">Select Jewellery Type</h2>
            <select className="form-input mb-4" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
              <option value="">-- Choose Type --</option>
              <option value="Necklace">Necklace</option>
              <option value="Bangles">Bangles</option>
              <option value="Earrings">Earrings</option>
            </select>
            <button disabled={!formData.type} onClick={() => setStep(2)} className="btn" style={{ backgroundColor: 'var(--gold)', color: 'black', width: '100%' }}>Next Step &rarr;</button>
          </div>
        )}
        {step === 2 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl mb-4">Select Purity (Karat)</h2>
            <div className="flex gap-4 mb-8 justify-center">
              {['18K', '22K', '24K'].map(k => (
                <button key={k} onClick={() => setFormData({...formData, karat: k})} className={`btn btn-outline`} style={{ borderColor: formData.karat === k ? 'var(--gold)' : '', backgroundColor: formData.karat === k ? 'var(--gold)' : 'transparent', color: formData.karat === k ? 'black' : '' }}>
                  {k}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-auto">
              <button onClick={() => setStep(1)} className="btn btn-outline">&larr; Back</button>
              <button disabled={!formData.karat} onClick={() => setStep(3)} className="btn" style={{ backgroundColor: 'var(--gold)', color: 'black' }}>Next Step &rarr;</button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl mb-4">Select Origin Style</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button onClick={() => setFormData({...formData, style: 'Kerala'})} className={`p-6 card text-center`} style={{ border: formData.style === 'Kerala' ? '2px solid var(--kerala-green)' : '1px solid var(--border-color)', backgroundColor: formData.style === 'Kerala' ? 'rgba(26, 92, 42, 0.1)' : '' }}>
                Kerala Style
              </button>
              <button onClick={() => setFormData({...formData, style: 'Tamil Nadu'})} className={`p-6 card text-center`} style={{ border: formData.style === 'Tamil Nadu' ? '2px solid var(--tn-red)' : '1px solid var(--border-color)', backgroundColor: formData.style === 'Tamil Nadu' ? 'rgba(139, 0, 0, 0.1)' : '' }}>
                Tamil Nadu Style
              </button>
            </div>
            <div className="flex justify-between">
              <button onClick={() => setStep(2)} className="btn btn-outline">&larr; Back</button>
              <button disabled={!formData.style} onClick={() => setStep(4)} className="btn" style={{ backgroundColor: 'var(--gold)', color: 'black' }}>Review & Confirm</button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="animate-fade-in">
            <h2 className="text-2xl mb-4 text-center">Confirm Your Design</h2>
            {formData.confirmed ? (
              <div className="text-center font-bold text-xl py-8" style={{ color: 'var(--gold)' }}>Your Custom Design Request is Confirmed!</div>
            ) : (
              <div>
                <ul className="mb-8 p-6 rounded-xl" style={{ backgroundColor: 'var(--bg-color)' }}>
                  <li className="mb-2"><strong>Type:</strong> {formData.type}</li>
                  <li className="mb-2"><strong>Karat:</strong> {formData.karat}</li>
                  <li><strong>Style:</strong> {formData.style}</li>
                </ul>
                <div className="flex justify-between">
                  <button onClick={() => setStep(3)} className="btn btn-outline">&larr; Back</button>
                  <button onClick={() => setFormData({...formData, confirmed: true})} className="btn" style={{ backgroundColor: 'var(--gold)', color: 'black' }}>Submit Request</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
