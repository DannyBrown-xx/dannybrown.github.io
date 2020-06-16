import React from 'react';
import Header from './Header';
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: 'Header',
  decorators: [withKnobs]
};

const links = [
  { name: 'About', onClick: () => {}, current: true },
  { name: 'Blog', onClick: () => {} },
  { name: 'Portfolio', onClick: () => {} },
  { name: 'CV', onClick: () => {} }
];
export const header = () => <Header includeCTA={boolean('Include CTA?', true)} links={links} />;
