import React from "react";
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import CardTitleText from '../Typography/CardTitle';
import MicrosoftLogo from './microsoft-logo.png';
import TrainlineLogo from './trainline-logo.png';
import DeftyLogo from './defty-logo.png';
import DriveTribeLogo from './drivetribe-logo.png';

const StyledJumbotronContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInnerContainer = styled.div`
  max-width: 1000px;
`;

const CompanyJumbotron = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 376px)' });

  return (
    <StyledJumbotronContainer>
      <CardTitleText>I've worked with</CardTitleText>
      <StyledInnerContainer>
        <img src={MicrosoftLogo} alt="Microsoft Logo" />
        <img src={TrainlineLogo} alt="Trainline Logo" />
        <img src={DeftyLogo} alt="Defty Logo" />
        <img src={DriveTribeLogo} alt="DriveTribe Logo" />
      </StyledInnerContainer>
    </StyledJumbotronContainer>
  );
};

export default CompanyJumbotron;
