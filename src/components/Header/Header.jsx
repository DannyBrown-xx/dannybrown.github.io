import React from "react"
import styled from "styled-components";
import colours from '../../utils/colours';

const StyledHeaderContainer = styled.div`
  background: ${colours.blue};
  height: 70px;
  width: 100%;
`;

const StyledCTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colours.red};
  height: 100%;
  width: 224px;
  color: #FFFFFF;
`;

const Header = (includeCTA) => (
  <StyledHeaderContainer>
    <StyledCTA>Get in touch</StyledCTA>
  </StyledHeaderContainer>
);

export default Header;
