import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'
import CardTitle from '../Typography/CardTitle';
import colours from '../../utils/colours';
import Button from '../Button/Button';
import Body from '../Typography/Body';

const StyledLetsWorkTogether = styled.div`
  border: 1px solid #837878;
`;

const LetsWorkTogether = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 376px)' });

  return (
    <StyledLetsWorkTogether>
      <CardTitle>Lets Work Together</CardTitle>
      <Body>I’m always open to meeting new people and working on new and intersting problems. If you or your organisation could benefit from my experience in Software Design and Architecture, Product Management or the act of software engineering itself then I’d love to talk.</Body>
      <Button label={'Get in touch'} colour={colours.red} onClick={() => {}} />
    </StyledLetsWorkTogether>
  );
};

export default LetsWorkTogether;
