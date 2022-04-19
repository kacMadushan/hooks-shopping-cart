import React from 'react';

const ProductListItem = ({ name, price }) => {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <p>${price}</p>
      </div>
      <button>Add To Cart</button>
    </div>
  )
}

const ProductList = ({ products }) => {
  let productElement = null;
  if (products.length) {
    productElement = products.map((product) => (
      <ProductListItem
        key={product.id}
        {...product}
      />
    ))
  }
  return (
    <div>{productElement}</div>
  )
}

export default ProductList;