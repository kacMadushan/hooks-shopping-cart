import React from 'react';

const CartListItem = ({ id, product, qty, price, handleIncrementQtyByPrice, handleDecrementQtyByPrice }) => {
  return (
    <div>
      <div>
        <h5>{product.name}</h5>
        <p>${price}</p>
      </div>
      <div>
        <button onClick={() => handleDecrementQtyByPrice(id)}>-</button>
        <input type="text" value={qty} readOnly />
        <button onClick={() => handleIncrementQtyByPrice(id)}>+</button>
      </div>
    </div>
  );
}

const CartList = ({ items, handleIncrementQtyByPrice, handleDecrementQtyByPrice }) => {
  return (
    <div>
      {
        items.map((item) => (
          <CartListItem
            handleDecrementQtyByPrice={handleDecrementQtyByPrice}
            handleIncrementQtyByPrice={handleIncrementQtyByPrice}
            key={item.id}
            {...item}
          />
        ))
      }
    </div>
  );
}

export default CartList;