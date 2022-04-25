import React from 'react';

const ProductListItem = ({ id, name, price, handleAddToCartItem }) => {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <p>${price}</p>
      </div>
      <button onClick={() => handleAddToCartItem(id)}>Add To Cart</button>
    </div>
  );
}

const ProductList = ({ products, handleAddToCartItem }) => {
  let productElement = null;
  if (products.length) {
    productElement = products.map((item) => (
      <ProductListItem
        handleAddToCartItem={handleAddToCartItem}
        key={item.id}
        {...item}
      />
    ))
  }
  return (
    <div>{productElement}</div>
  );
}

export default ProductList;