import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppContext } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

import NurseryListing from './pages/Nursery/NurseryListing';
import PlantDetail from './pages/Nursery/PlantDetail';
import GardenTips from './pages/Nursery/GardenTips';

import JewelleryListing from './pages/Jewellery/JewelleryListing';
import JewelleryDetail from './pages/Jewellery/JewelleryDetail';
import CustomDesign from './pages/Jewellery/CustomDesign';
import CareTips from './pages/Jewellery/CareTips';

import InteriorListing from './pages/Interior/InteriorListing';
import InteriorDetail from './pages/Interior/InteriorDetail';
import Portfolio from './pages/Interior/Portfolio';
import BookConsultation from './pages/Interior/BookConsultation';

import TourismListing from './pages/Tourism/TourismListing';
import PackageDetail from './pages/Tourism/PackageDetail';
import Itinerary from './pages/Tourism/Itinerary';
import Booking from './pages/Tourism/Booking';

export default class App extends Component {
  constructor(props) {
    super(props);
    // State initialization
    this.state = {
      appTheme: 'light',
      globalStateFilter: 'All', 
      cartItems: [],
      clientEnquiries: []
    };
    
    // Binding functions to the class
    this.toggleTheme = this.toggleTheme.bind(this);
    this.setGlobalStateFilter = this.setGlobalStateFilter.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentDidMount() {
    // Initial setup
    document.documentElement.setAttribute('data-theme', this.state.appTheme);
  }

  componentDidUpdate(prevProps, prevState) {
    // Sync theme with HTML attribute
    if (prevState.appTheme !== this.state.appTheme) {
      document.documentElement.setAttribute('data-theme', this.state.appTheme);
    }
  }

  // Helper to toggle theme modes
  toggleTheme() {
    const newTheme = this.state.appTheme === 'light' ? 'dark' : 'light';
    console.log("Switching theme to:", newTheme);
    this.setState({ appTheme: newTheme });
  }

  setGlobalStateFilter(filter) {
    this.setState({ globalStateFilter: filter });
  }

  addToCart(item) {
    this.setState(prevState => {
      const existing = prevState.cartItems.find(i => i.id === item.id);
      if (existing) {
        return {
          cartItems: prevState.cartItems.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
        };
      }
      return { cartItems: [...prevState.cartItems, { ...item, qty: 1 }] };
    });
  }

  removeFromCart(itemId) {
    this.setState(prevState => ({
      cartItems: prevState.cartItems.filter(i => i.id !== itemId)
    }));
  }

  render() {
    // Debug: tracking state changes
    console.log("Current Items in Cart:", this.state.cartItems.length);

    const contextValue = {
      appTheme: this.state.appTheme,
      globalStateFilter: this.state.globalStateFilter,
      cartItems: this.state.cartItems,
      toggleTheme: this.toggleTheme,
      setGlobalStateFilter: this.setGlobalStateFilter,
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart
    };

    return (
      <AppContext.Provider value={contextValue}>
        <div className="app-container min-h-screen flex flex-col">
          <Navbar />
          
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/nursery" element={<NurseryListing />} />
              <Route path="/nursery/tips" element={<GardenTips />} />
              <Route path="/nursery/:id" element={<PlantDetail />} />
              
              <Route path="/jewellery" element={<JewelleryListing />} />
              <Route path="/jewellery/custom" element={<CustomDesign />} />
              <Route path="/jewellery/care" element={<CareTips />} />
              <Route path="/jewellery/:id" element={<JewelleryDetail />} />
              
              <Route path="/interior" element={<InteriorListing />} />
              <Route path="/interior/portfolio" element={<Portfolio />} />
              <Route path="/interior/consultation" element={<BookConsultation />} />
              <Route path="/interior/:id" element={<InteriorDetail />} />
              
              <Route path="/tourism" element={<TourismListing />} />
              <Route path="/tourism/itinerary" element={<Itinerary />} />
              <Route path="/tourism/booking" element={<Booking />} />
              <Route path="/tourism/:id" element={<PackageDetail />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}
