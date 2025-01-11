import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';  // Import the Cart page
import Recycling from './Pages/Recycling/Recycling';
import Services from './Pages/Services/Services';
import ContactUs from './Pages/ContactUs/ContactUs';
import Career from './Pages/Career/Career';
import LifeatGbin from './Pages/LifeatGbin/LifeatGbin';
import Notification from './Pages/Notification/Notification';
import Buy from './Pages/Buy/Buy';
import Sell from './Pages/Sell/Sell';

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/cart" element={<Cart />} /> {/* Cart route */}
        
        <Route path="/option3" element={<Recycling />} />
        <Route path="/option2" element={<Services />} />
        <Route path="/option4" element={<ContactUs/>} />
        <Route path="/option5" element={<Career/>} />
        <Route path="/option6" element={<LifeatGbin/>} />
        <Route path="/notification" element={<Notification/>} />
        <Route path="/notification" element={<Notification/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/buy" element={<Buy/>} />
        <Route path="/sell" element={<Sell/>} />
        
      </Routes>
    </div>
  );
};

export default App;
