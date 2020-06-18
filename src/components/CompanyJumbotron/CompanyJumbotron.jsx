import React from "react";
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import CardTitleText from '../Typography/CardTitle';

const StyledJumbotronContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const CompanyJumbotron = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 376px)' });

  return (
    <StyledJumbotronContainer>
      <CardTitleText>I've worked with</CardTitleText>
    </StyledJumbotronContainer>
  );
};

export default CompanyJumbotron;
