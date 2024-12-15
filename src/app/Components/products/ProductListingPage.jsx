'use client'
import React, { useState } from 'react';
   


const products = [
  { id: 1, name: '50mm Battle rope', price: 15500, category: 'Cardio Workout Equipment', image: '/assets/images/shop/battle-rope-2.webp' },
  { id: 2, name: 'AB Glider/Ab coaster', price: 34500, category: 'Cardio Workout Equipment', image: '/assets/images/shop/ab-glider.jpg' },
  { id: 3, name: 'AB Roller', price: 999, category: 'Cardio Workout Equipment', image: '/assets/images/shop/ab-roller.jpg' },
  { id: 4, name: 'Adjustable Decline Bench for ABS', price: 50000, category: 'Cardio Workout Equipment', image: '/assets/images/shop/abs-bench.jpg' },
  { id: 5, name: 'Aerobic Step', price: 39000, category: 'Cardio Workout Equipment', image: '/assets/images/shop/Aerobic-step-s.jpg' },
  { id: 6, name: 'MR-536', price: 48000, category: 'Cardio Workout Equipment', image: '/assets/images/shop/mr-536.png' },
  { id: 7, name: 'Battle Rop', price: 115000, category: 'Cardio Workout Equipment', image: '/assets/images/shop/PS242-748x1024.jpg' },
  { id: 8, name: 'Commercial Aerobic Step', price: 18000, category: 'Cardio Workout Equipment', image: '/assets/images/shop/step-rbk-3.jpg' },
  
  { id: 9, name: 'Commercial Air Rowing Machine', price: 99000, category: 'Cardio Workout Equipment', image: '/assets/images/shop/air-rower-1024x713.jpg' },

  { id: 10, name: 'Commercial Cross trainer', price: 440000, category: 'Cardio Workout Equipment', image: '/assets/images/shop/1686113447814.png' },

  { id: 11, name: 'Commercial Elliptical Trainer', price: 220000, category: 'Cardio Workout Equipment', image: '/assets/images/shop/commercial-eliptical.jpg' },

  { id: 12, name: 'Commercial Trampoline', price: 28000, category: 'Cardio Workout Equipment', image: '/assets/images/shop/trampoline-a.jpg' },

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
            <p className="price">Ksh {product.price.toFixed(2)}</p>
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

