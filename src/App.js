import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import InputField from './components/InputField';
import { TertiaryButton } from './utils/Button';

// products
const products = [
  { id: uuid(), name: 'CodeNewbie Dad Hat', price: '25.00', isStock: true },
  { id: uuid(), name: 'CodeNewbie Bubble Mousepad', price: '13.00', isStock: true },
  { id: uuid(), name: 'CodeNewbie Coffee Mug', price: '15.00', isStock: true },
  { id: uuid(), name: 'DEV Hat (Multiple Colors)', price: '25.00', isStock: true },
  { id: uuid(), name: 'Embroidered DEV Backpack', price: '45.00', isStock: false },
];

const App = () => {
  const [query, setQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const incrementQty = (id) => {
    const updateQty = cartItems.filter((item) => {
      if (item.id === id) {
        item.qty = +item.qty + 1
        return item
      } else {
        return item
      }
    })
    setCartItems(updateQty)
  }

  const decrementQty = (id) => {
    const updateQty = cartItems.filter((item) => {
      if (item.id === id) {
        item.qty -= 1
        return item
      } else {
        return item
      }
    })
    setCartItems(updateQty)
  }

  // remove cart item by id
  const removeCartItemById = (id) => {
    const removeItem = cartItems.filter(item => item.id !== id);
    setCartItems(removeItem);
  }

  // check exist product
  const existProductNameInCart = (name) => {
    return cartItems.some(({ product }) => product.name === name);
  }

  // find product by id
  const findProductItemById = (id) => {
    return products.find(item => item.id === id);
  }

  // product add to cart item
  const productAddToCartItem = (itemId) => {
    const product = findProductItemById(itemId);
    const { name, price } = product;
    const existProduct = existProductNameInCart(name);

    if (!existProduct) {
      const cartItem = {
        id: uuid(),
        qty: '1',
        price,
        product,
      }
      setCartItems([...cartItems, cartItem])
    }
  }

  // clear cart items
  const clearAllCartItem = () => setCartItems([]);

  // search product by name
  const filterProductByQuery = (products, query) => {
    return products.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()))
  }

  // handle change search input
  const handleOnChangeInput = (event) => {
    const { value } = event.target;
    setQuery(value);
  }
  const cartTotal = cartItems.reduce((total, item) => total + (+item.qty * +item.price), 0);
  const total = cartTotal.toFixed(2);
  const countItems = cartItems.length;
  const hasCartItems = cartItems.length > 0;
  const filteredItems = filterProductByQuery(products, query);
  return (
    <Wrapper>
      <Header title="Shopping Cart" />
      <Card>
        <CardHeader>
          <h2>All Products</h2>
          <InputField
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleOnChangeInput}
          />
        </CardHeader>
        <CardBody>
          <ProductList
            productAddToCartItem={productAddToCartItem}
            items={filteredItems}
          />
        </CardBody>
      </Card>
      {hasCartItems && (
        <Card>
          <CardHeader>
            <h2>Your Cart: {countItems}</h2>
            <TertiaryButton onClick={clearAllCartItem}>Clear Cart</TertiaryButton>
          </CardHeader>
          <CardBody>
            <CartList
              removeCartItemById={removeCartItemById}
              incrementQty={incrementQty}
              decrementQty={decrementQty}
              items={cartItems}
            />
          </CardBody>
          <CardFooter>
            <h2>Total : ${total}</h2>
          </CardFooter>
        </Card>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid hsl(210 18% 87%);
  margin-bottom: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid hsl(210 18% 87%);
`;

const CardBody = styled.div`
  padding: 16px;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px 16px;
  border-top: 1px solid hsl(210 18% 87%);
`;

export default App;