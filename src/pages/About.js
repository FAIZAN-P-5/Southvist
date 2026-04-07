import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mountedAt: new Date().toLocaleTimeString()
    };
    console.log("About Page Constructor Called");
  }

  componentDidMount() {
    console.log("About Page Mounted");
  }

  render() {
    return (
      <div className="container py-12 animate-fade-in">
        <h1 className="text-4xl text-center mb-8">About SouthVista</h1>
        <div className="grid grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 className="text-2xl mb-4 text-teal">Our Mission</h2>
            <p className="text-muted mb-4">
              SouthVista bridges the tradition with the modern, curating the finest plants, 
              jewellery, interior designs, and tourism experiences from God's Own Country (Kerala) 
              and the Land of Temples (Tamil Nadu).
            </p>
            <div className="flex flex-col gap-4 mt-6">
              <div className="card p-6 accent-kerala">
                <h3 className="font-bold text-lg">Authenticity</h3>
                <p className="text-sm text-muted">Sourcing directly from local artisans and native farms.</p>
              </div>
              <div className="card p-6 accent-tn">
                <h3 className="font-bold text-lg">Quality</h3>
                <p className="text-sm text-muted">Ensuring premium standards for every product and service.</p>
              </div>
            </div>
          </div>
          <div>
             <img 
               src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80" 
               alt="Culture" 
               className="img-base" 
               style={{ borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', height: '500px' }} 
             />
          </div>
        </div>
      </div>
    );
  }
}
