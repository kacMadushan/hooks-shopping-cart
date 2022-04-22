import React from 'react';
import styled from 'styled-components';

const InputField = ({ type, placeholder, value, onChange }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

InputField.defaultProps = {
  type: 'text'
}

const Input = styled.input`
  font-weight: 400;
  font-size: 0.875rem;
  padding: 6px 12px;
  border-radius: 3px;
  border: 1px solid hsl(210 18% 87%);
  background: transparent;
`;

export default InputField;