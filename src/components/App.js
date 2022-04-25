import React from 'react';
import uuid from 'uuid';
import Header from './Header';
import ProductList from './ProductList';
import CartList from './CartList';

// products
const products = [
  { id: uuid(), name: 'CodeNewbie Dad Hat', price: '25', isStock: true },
  { id: uuid(), name: 'CodeNewbie Bubble Mousepad', price: '13', isStock: true },
  { id: uuid(), name: 'CodeNewbie Coffee Mug', price: '15', isStock: true },
  { id: uuid(), name: 'DEV Hat (Multiple Colors)', price: '25', isStock: true },
  { id: uuid(), name: 'Embroidered DEV Backpack', price: '45', isStock: false },
];

const App = () => {
  const [query, setQuery] = React.useState('');
  const [cartItems, setCartItems] = React.useState([]);

  // Increment qty by price
  const handleIncrementQtyByPrice = (id) => {
    const incrementQty = cartItems.filter(item => {
      if (item.id === id) {
        item.qty = +item.qty + 1
        item.price = +item.product.price * +item.qty
        return item
      } else {
        return item
      }
    })
    setCartItems(incrementQty)
  }

  // Decrement qty by price
  const handleDecrementQtyByPrice = (id) => {
    const decrementQty = cartItems.filter(item => {
      if (item.id === id) {
        item.qty = +item.qty - 1
        item.price = +item.product.price * +item.qty
        return item
      } else {
        return item
      }
    })
    setCartItems(decrementQty)
  }

  // Get cart total
  const getCartTotal = (items) => {
    return items.reduce((total, item) => total + (+item.price * +item.amount), 0);
  }

  // Change search query
  const handleOnChangeQuery = (e) => {
    const { value } = e.target;
    setQuery(value);
  }

  // Selected product
  const SelectedProduct = (items, item) => {
    return items.filter(({ name }) => name.toLowerCase().includes(item.toLowerCase()));
  }

  // Clear cart
  const handleClearCart = () => setCartItems([]);

  // Exist product in cart
  const handleExistProduct = (name) => {
    return cartItems.some(({ product }) => product.name === name);
  }

  // Find product
  const handleFindProduct = (id) => {
    return products.find(item => item.id === id);
  }

  // Add to cart item
  const handleAddToCartItem = (itemId) => {
    const product = handleFindProduct(itemId);
    const { name, price } = product;
    const existProduct = handleExistProduct(name);
    if (!existProduct) {
      const cartItem = {
        id: uuid(),
        qty: '1',
        amount: '1',
        price,
        product
      }
      setCartItems([...cartItems, cartItem])
    }
  }

  const total = getCartTotal(cartItems);
  const countItems = cartItems.length;
  const hasCartItems = cartItems.length > 0;
  const filteredProduct = SelectedProduct(products, query);
  return (
    <div>
      <Header title="Shopping Cart" />
      <div>
        <div>
          <h2>Products</h2>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleOnChangeQuery}
          />
        </div>
        <div>
          <ProductList
            handleAddToCartItem={handleAddToCartItem}
            products={filteredProduct}
          />
        </div>
      </div>
      {hasCartItems && (
        <div>
          <div>
            <h2>Your Cart: {countItems}</h2>
          </div>
          <div>
            <CartList
              handleDecrementQtyByPrice={handleDecrementQtyByPrice}
              handleIncrementQtyByPrice={handleIncrementQtyByPrice}
              items={cartItems}
            />
          </div>
          <div>
            <button onClick={handleClearCart}>Clear Cart</button>
            <h3>Total: {total}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;