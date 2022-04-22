import React from 'react';
import styled from 'styled-components';
import { SecondaryButton } from '../utils/Button';

const ProductListItem = ({ id, name, price, productAddToCartItem }) => {
  return (
    <Wrapper>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>
      </ProductInfo>
      <SecondaryButton onClick={() => productAddToCartItem(id)}>Add To Cart</SecondaryButton>
    </Wrapper>
  )
}

const ProductList = ({ items, productAddToCartItem }) => {
  let productElement = null;
  if (items.length) {
    productElement = items.map((item) => (
      <ProductListItem
        productAddToCartItem={productAddToCartItem}
        key={item.id}
        {...item}
      />
    ))
  }
  return (
    <div>{productElement}</div>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:not(:last-of-type) {
    padding-bottom: 12px;
  }
`;

const ProductInfo = styled.div`
  text-align: left;
`;

const ProductName = styled.h5`
  font-weight: 700;
  font-size: 1rem;
`;

const ProductPrice = styled.p`
  font-weight: 400;
  font-size: 1rem;
`;

export default ProductList;