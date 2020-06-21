import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'
import CardTitle from '../Typography/CardTitle';
import colours from '../../utils/colours';
import Button from '../Button/Button';
import Body from '../Typography/Body';

const StyledLatestBlogPostContainer = styled.div`
  border: 1px solid #837878;
`;

const LatestBlogPost = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 376px)' });

  return (
    <StyledLatestBlogPostContainer>
      <CardTitle>Latest Blog Post</CardTitle>
      <Body>Hi</Body>
      <Button label={'Keep reading'} colour={colours.blue} onClick={() => {}} />
    </StyledLatestBlogPostContainer>
  );
};

export default LatestBlogPost;
