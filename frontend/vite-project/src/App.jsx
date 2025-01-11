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
        
      </Routes>
    </div>
  );
};

export default App;
