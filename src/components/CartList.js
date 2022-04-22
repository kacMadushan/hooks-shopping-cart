import React from 'react';
import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';
import InputField from './InputField';
import { SecondaryButton, PrimaryButton } from '../utils/Button';


const CartListItem = ({ id, product, price, qty, removeCartItemById, incrementQty, decrementQty }) => {
  // const [quantity, setQuantity] = useState(qty);

  // // change quantity
  // const handleChangeQuantity = (e) => {
  //   setQuantity(e.target.value);
  // }



  return (
    <Wrapper>
      <CartInfo>
        <ItemName>{product.name}</ItemName>
        <ItemPrice>${price}</ItemPrice>
      </CartInfo>
      <div>
        <PrimaryButton onClick={() => decrementQty(id)}>
          <FaMinus />
        </PrimaryButton>
        <InputField type="text" value={qty} />
        <PrimaryButton onClick={() => incrementQty(id)}>
          <FaPlus />
        </PrimaryButton>
      </div>
      <SecondaryButton onClick={() => removeCartItemById(id)}>Remove</SecondaryButton>
    </Wrapper>
  )
}

const CartList = ({ items, removeCartItemById, incrementQty, decrementQty }) => {
  const cartElement = items.map((item) => (
    <CartListItem
      removeCartItemById={removeCartItemById}
      incrementQty={incrementQty}
      decrementQty={decrementQty}
      key={item.id}
      {...item}
    />
  ))
  return (
    <div>{cartElement}</div>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CartInfo = styled.div`
  flex: 1 auto;
`;

const ItemName = styled.h5`
  font-weight: 700;
  font-size: 1rem;
`;

const ItemPrice = styled.p`
  font-weight: 400;
  font-size: 1rem;
`;

export default CartList;