import React from 'react';

const Header = ({ title, subTitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{subTitle}</h5>
    </div>
  );
}

Header.defaultProps = {
  subTitle: 'This is simple shopping cart'
}

export default Header;