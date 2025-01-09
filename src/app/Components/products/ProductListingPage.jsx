'use client'
import React, { useState } from 'react';
   


const products = [
  { id: 1, name: '50mm Battle rope', price: 15500, category: 'Cardio Workout Equipment', image: '/assets/images/gallery/1.jpg' },
  { id: 2, name: 'AB Glider/Ab coaster', price: 34500, category: 'Cardio Workout Equipment', image: '/assets/images/gallery/2.jpg' },
  { id: 3, name: 'AB Roller', price: 999, category: 'Cardio Workout Equipment', image: '/assets/images//gallery/3.jpg' },
  { id: 4, name: 'Adjustable Decline Bench for ABS', price: 50000, category: 'Cardio Workout Equipment', image: '/assets/images/gallery/4.jpg' },
  { id: 5, name: 'Aerobic Step', price: 39000, category: 'Cardio Workout Equipment', image: '/assets/images/gallery/5.jpg' },
  { id: 6, name: 'MR-536', price: 48000, category: 'Cardio Workout Equipment', image: '/assets/images/gallery/6.jpg' },
  { id: 7, name: 'Battle Rop', price: 115000, category: 'Cardio Workout Equipment', image: '/assets/images/gallery/7.jpg' },
  { id: 8, name: 'Commercial Aerobic Step', price: 18000, category: 'Cardio Workout Equipment', image: '/assets/images/gallery/8.jpg' },
  
  { id: 9, name: 'Commercial Air Rowing Machine', price: 99000, category: 'Cardio Workout Equipment', image: '/assets/images/gallery/9.jpg' },

  { id: 10, name: 'Commercial Cross trainer', price: 440000, category: 'Cardio Workout Equipment', image: '/assets/images/gallery/10.jpg' },

  { id: 11, name: 'Commercial Elliptical Trainer', price: 220000, category: 'Cardio Workout Equipment', image: '/assets/images/gallery/11.jpg' },

  { id: 12, name: 'Commercial Trampoline', price: 28000, category: 'Cardio Workout Equipment', image: '/assets/images/gallery/13.jpg' },

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
        <h1>Gallery</h1>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              onClick={() => openModal(product)}
            />
            {/* <h3>{product.name}</h3>
            <p className="price">Ksh {product.price.toFixed(2)}</p>
            <p className="category">{product.category}</p> */}
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListingPage;

