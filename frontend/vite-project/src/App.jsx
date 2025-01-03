import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';  // Import the Cart page

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/cart" element={<Cart />} /> {/* Cart route */}
        <Route path="/option6" element={<
const  />} /> {/* Cart route */}
      </Routes>
    </div>
  );
};

export default App;
