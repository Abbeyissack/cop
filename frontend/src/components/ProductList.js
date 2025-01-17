// src/components/ProductList.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState(products);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  const handleEdit = (product) => {
    const newName = prompt('Enter new product name:', product.name);
    const newPrice = prompt('Enter new product price:', product.price);
    if (newName && newPrice) {
      setProductList((prevList) =>
        prevList.map((item) =>
          item.id === product.id ? { ...item, name: newName, price: newPrice } : item
        )
      );
    }
  };

  const handleDelete = (id) => {
    setProductList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <div className="product-list">
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
      <div>
        <h3>Shopping Cart:</h3>
        {cart.map((item) => (
          <div key={item.id}>{item.name} - ${item.price}</div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
