import React, { useState } from "react"
import styled from "styled-components";
import colours from '../../utils/colours';
import LogoImage from '../../../content/assets/logo.png';
import HamburgerIcon from './hamburger-icon.svg';
import CloseIcon from './close-icon.svg';
import { useMediaQuery } from 'react-responsive'

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colours.blue};
  height: 70px;
  width: calc(100% - 20px);
  padding-left: 20px;
`;

const StyledCTA = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colours.red};
  height: 100%;
  width: 224px;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
`;

const StyledNav = styled.nav`
  display: flex;
  list-style: none;
`;

const StyledDesktopLink = styled.a`
  margin-right: 20px;
  padding: 5px;
  font-family: 'ABeeZee', sans-serif;
  color: #FFF;
  ${props => props.isCurrentPage && `background: ${colours.yellow}; color: black`}
`;

const StyledHamburgerMenu = styled.a`
  background: url(${props => props.icon});
  background-repeat: no-repeat;
  background-position: center;
  width: 40px;
  height: 40px;
`;

const StyledMobileMenu = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${colours.blue};
`;

const StyledMobileLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'ABeeZee', sans-serif;
  height: 40px;
  color: #FFF;
  ${props => props.isCurrentPage && `background: ${colours.yellow}; color: black`}
`;

const Logo = () => <img src={LogoImage} height={52} alt="Logo" />;

const Links = ({ links }) => (
  <StyledNav>
    { links.map(link => <StyledDesktopLink key={link.name} isCurrentPage={link.current}>{link.name}</StyledDesktopLink>) }
  </StyledNav>
);

const MobileMenu = ({ links }) => (
  <StyledMobileMenu>
    { links.map(link => <StyledMobileLink key={link.name} isCurrentPage={link.current}>{link.name}</StyledMobileLink>) }
  </StyledMobileMenu>
);

const HamburgerMenu = ({ onClick, isOpen }) => <StyledHamburgerMenu onClick={onClick} icon={isOpen ? CloseIcon : HamburgerIcon}/>

const Header = ({ includeCTA, links }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 376px)' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <StyledHeaderContainer>
        { isMobile ? <HamburgerMenu onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} isOpen={isMobileMenuOpen} /> : <Links links={links} /> }
        <Logo />
        { !isMobile && includeCTA && <StyledCTA>Get in touch</StyledCTA> }
      </StyledHeaderContainer>

      { isMobile && isMobileMenuOpen && <MobileMenu links={links} /> }
    </>
  );
};

export default Header;
