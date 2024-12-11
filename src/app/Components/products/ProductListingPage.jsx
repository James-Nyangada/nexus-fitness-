'use client'
import React, { useState } from 'react';
   


const products = [
  { id: 1, name: 'Running Shoes', price: 89.99, category: 'Shoes', image: '/assets/images/resource/shoes.jpg' },
  { id: 2, name: 'Fitness T-Shirt', price: 24.99, category: 'Clothes', image: '/assets/images/resource/shoes.jpg' },
  { id: 3, name: 'Knee Straps', price: 12.99, category: 'Accessories', image: '/assets/images/resource/shoes.jpg' },
  { id: 4, name: 'Ankle Straps', price: 9.99, category: 'Accessories', image: '/assets/images/resource/shoes.jpg' },
  { id: 5, name: 'Workout Gloves', price: 19.99, category: 'Accessories', image: '/assets/images/resource/shoes.jpg' },
  { id: 6, name: 'Dumbbell Set', price: 149.99, category: 'Equipment', image: '/assets/images/resource/shoes.jpg' },
  { id: 7, name: 'Yoga Mat', price: 29.99, category: 'Equipment', image: '/assets/images/resource/shoes.jpg' },
  { id: 8, name: 'Resistance Bands', price: 15.99, category: 'Equipment', image: '/assets/images/resource/shoes.jpg' },
];

const ProductListingPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-listing-page">
      <div className="banner">
        <h1>Shop</h1>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              onClick={() => openModal(product)}
            />
            <h3>{product.name}</h3>
            <p className="price">${product.price.toFixed(2)}</p>
            <p className="category">{product.category}</p>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h2>{selectedProduct.name}</h2>
            <p className="price">${selectedProduct.price.toFixed(2)}</p>
            <p className="category">{selectedProduct.category}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListingPage;

