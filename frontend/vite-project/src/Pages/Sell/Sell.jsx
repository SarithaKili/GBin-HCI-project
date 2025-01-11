import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ProductMenu from '../../Components/ProductMenu/ProductMenu';
import './Sell.css';

const Sell = () => {
  const [images, setImages] = useState([]);
  const [details, setDetails] = useState({
    description: '',
    price: '',
    name: '',
    nationality: '',
    location: '',
    authorityId: '',
    postalCode: '',
    email: '',
    phoneNumber: '',
  });

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files).slice(0, 5); // Limit to 5 images
    setImages(files);
  };

  const handleDetailChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleScan = () => {
    const scannedPrice = 100; // Simulated price
    setDetails({ ...details, price: scannedPrice });
  };

  const handleConfirm = () => {
    console.log('Selling details confirmed:', { images, details });
  };

  return (
    <div>
      <Navbar />
      <ProductMenu />

    <div className="ewaste-sell">
      
      <div className="sell-container">
        <div className="form-container">
          <h1>Sell Your E-Waste</h1>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={details.name}
            onChange={handleDetailChange}
          />
          <input
            type="text"
            name="nationality"
            placeholder="Nationality"
            value={details.nationality}
            onChange={handleDetailChange}
          />
          <input
            type="text"
            name="authorityId"
            placeholder="Authority ID"
            value={details.authorityId}
            onChange={handleDetailChange}
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={details.postalCode}
            onChange={handleDetailChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={details.email}
            onChange={handleDetailChange}
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={details.phoneNumber}
            onChange={handleDetailChange}
          />

          <textarea
            name="description"
            placeholder="Enter product description"
            value={details.description}
            onChange={handleDetailChange}
          />

          <button onClick={handleScan}>Scan Product</button>

          <div className="price-display">
            {details.price && <p>Estimated Price: ${details.price}</p>}
          </div>

          <input
            type="text"
            name="location"
            placeholder="Your Location"
            value={details.location}
            onChange={handleDetailChange}
          />

          <button onClick={handleConfirm}>Confirm Selling</button>

          <div className="collection-details">
            <h3>Waste Collection Details</h3>
            <p>Location: {details.location}</p>
          </div>
        </div>

        <div className="image-upload-container">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          
          {/* Main image preview */}
          {images.length > 0 && (
            <div className="main-image-preview">
              <img src={URL.createObjectURL(images[0])} alt="current" />
            </div>
          )}

          {/* Small image previews */}
          <div className="small-image-preview">
            {images.map((image, index) => (
              <img key={index} src={URL.createObjectURL(image)} alt={`small preview ${index}`} className="small-image" />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sell;