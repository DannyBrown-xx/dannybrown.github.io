import React from "react"
import styled from "styled-components";
import colours from '../../utils/colours';
import LogoImage from '../../../content/assets/logo.png';

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const StyledNav = styled.nav`
  color: #FFF;
  display: flex;
  list-style: none;
`;

const StyledLink = styled.a`
  margin-left: 20px;
`;

const Logo = () => <img src={LogoImage} height={52} alt="Logo" />;

const Links = () => (
  <StyledNav>
    <StyledLink>About</StyledLink>
    <StyledLink>Blog</StyledLink>
    <StyledLink>Portfolio</StyledLink>
    <StyledLink>CV</StyledLink>
  </StyledNav>
);

const Header = (includeCTA) => (
  <StyledHeaderContainer>
    <Links />
    <Logo />
    <StyledCTA>Get in touch</StyledCTA>
  </StyledHeaderContainer>
);

export default Header;
