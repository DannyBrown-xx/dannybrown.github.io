import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  background: ${props => props.colour};
  height: 21px;
  padding: 12px;
  color: #fff;
  font-family: Merriweather;
  font-style: normal;
  font-weight: bold;
`;

const Button = ({label, onClick, colour}) => (
  <StyledButton colour={colour} onClick={onClick}>{label}</StyledButton>
);

export default Button;
