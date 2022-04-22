import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  font-weight: 700;
  font-size: 0.875rem;
  padding: 6px 16px;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  color: hsl(0 0% 100%);
  background-color: hsl(11 97% 72%);
`;

export const SecondaryButton = styled(Button)`
  color: hsl(11 97% 72%);
  border: 2px solid hsl(11 97% 72%);
  background-color: transparent;

  &:hover {
    color: hsl(0 0% 100%);
    background-color: hsl(11 97% 72%);
  }
`;

export const TertiaryButton = styled(Button)`
  color: hsl(11 97% 72%);
  border: none;
  background: none;
`;