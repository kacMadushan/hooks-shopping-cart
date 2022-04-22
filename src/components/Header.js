import React from 'react';
import styled from 'styled-components';

const Header = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle>This is simple shopping cart</SubTitle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: hsl(0 0% 0%);
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 1.5;
`;

const SubTitle = styled.h3`
  color: hsl(0 0% 0%);
  font-weight: 400;
  font-size: 1.75rem;
`;

export default Header;