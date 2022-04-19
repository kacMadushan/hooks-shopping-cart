import React from 'react';
import uuid from 'uuid';
import Header from './components/Header';
import ProductList from './components/ProductList';

// products
const products = [
  { id: uuid(), name: 'CodeNewbie Dad Hat', price: '25.00', isStock: true },
  { id: uuid(), name: 'CodeNewbie Bubble Mousepad', price: '13.00', isStock: true },
  { id: uuid(), name: 'CodeNewbie Coffee Mug', price: '15.00', isStock: true },
  { id: uuid(), name: 'DEV Hat (Multiple Colors)', price: '25.00', isStock: true },
  { id: uuid(), name: 'Embroidered DEV Backpack', price: '45.00', isStock: false },
];

const App = () => {
  return (
    <div>
      <Header title="Shopping Cart" />
      <ProductList products={products} />
    </div>
  )
}

export default App;