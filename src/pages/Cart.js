import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Trash2 } from 'lucide-react';

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(AppContext);
  const [coupon, setCoupon] = useState('');
  const [region, setRegion] = useState('Kerala');

  // Calculate base pricing
  let subtotal = 0;
  cartItems.forEach(item => {
    subtotal += (item.price || 0) * (item.qty || 1);
  });

  // Manual Shipping Calculation logic
  const getShippingCost = (loc) => {
    switch (loc) {
      case 'Kerala': return 50;
      case 'Tamil Nadu': return 80;
      case 'Karnataka': return 150;
      default: return 200;
    }
  };

  const shipCost = getShippingCost(region);
  const taxRate = 0.18; // 18% GST
  const taxAmount = subtotal * taxRate;
  const grandTotal = subtotal + taxAmount + shipCost;

  const handleCheckout = () => {
    console.log("Proceeding with total:", grandTotal);
    alert(`Total to pay: ₹${grandTotal.toLocaleString()}`);
  };

  return (
    <div className="container py-12 animate-fade-in" style={{ maxWidth: '1000px' }}>
      <h1 className="text-4xl font-bold mb-10 text-center" style={{ fontFamily: 'var(--font-serif)' }}>Shopping Cart</h1>
      
      {(!cartItems || cartItems.length === 0) ? (
        <div className="text-center py-20 glass-panel rounded-2xl bg-gray-50 border border-dashed">
          <h2 className="text-xl text-muted mb-6">Your bag is empty! Go find some treasures.</h2>
          <Link to="/" className="btn btn-primary px-10">Back to Home</Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-sm font-bold uppercase text-muted tracking-widest pl-2">Items List</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-6 p-5 rounded-2xl shadow-sm border border-gray-100 bg-white items-center">
                <div style={{ width: '100px', height: '100px', backgroundColor: '#f9f9f9', borderRadius: '12px', overflow: 'hidden', border: '1px solid #eee' }}>
                  {item.image ? (
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div className="flex items-center justify-center h-full text-xs text-gray-400">No Image</div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-1">{item.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{item.originState} • {item.type}</p>
                  <p className="font-bold text-teal-600">₹{item.price ? item.price.toLocaleString() : 'N/A'}</p>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-sm font-bold bg-gray-50 px-3 py-2 rounded-lg">Qty: {item.qty}</div>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 size={22} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:w-80 h-fit" style={{ position: 'sticky', top: '120px' }}>
            <div className="card p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-xl font-bold mb-8 border-b pb-4">Checkout Details</h2>
              
              <div className="flex justify-between mb-4 text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold font-mono">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-6 text-sm pb-6 border-b border-dashed">
                <span className="text-gray-500">Tax (18%)</span>
                <span className="font-bold font-mono">₹{taxAmount.toLocaleString()}</span>
              </div>

              <div className="flex justify-between mb-6 text-sm pb-6 border-b border-dashed">
                <span className="text-gray-500">Shipping ({region})</span>
                <span className="font-bold font-mono">₹{shipCost.toLocaleString()}</span>
              </div>

              {/* Shipping Region Selection */}
              <div className="mb-6">
                <p className="text-xs font-bold mb-2 uppercase">Shipping To:</p>
                <select 
                  value={region} 
                  onChange={(e) => setRegion(e.target.value)} 
                  className="form-input text-xs"
                  style={{ padding: '8px', cursor: 'pointer' }}
                >
                  <option value="Kerala">Kerala</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Other">Other States</option>
                </select>
              </div>

              {/* TODO: Implement coupon validation logic */}
              <div className="mb-8">
                <p className="text-xs font-bold mb-2">Have a coupon?</p>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="CODE" 
                    value={coupon} 
                    onChange={e => setCoupon(e.target.value)}
                    className="form-input text-xs" 
                    style={{ padding: '8px' }}
                  />
                  <button className="btn btn-outline text-xs px-2" onClick={() => alert("Invalid Code")}>Apply</button>
                </div>
              </div>
              
              <div className="flex justify-between mb-10 text-2xl font-black">
                <span>Total</span>
                <span className="text-teal-600">₹{grandTotal.toLocaleString()}</span>
              </div>
              
              <button 
                onClick={handleCheckout}
                className="btn btn-primary w-full text-center py-4 text-lg font-bold shadow-lg transform hover:-translate-y-1 transition-all"
                style={{ justifyContent: 'center', borderRadius: '12px' }}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
