import React from 'react';
import Button from './Button';
import { withKnobs } from "@storybook/addon-knobs";
import colours from '../../utils/colours';

export default {
  title: 'Button',
  decorators: [withKnobs]
};

export const button = () => <Button label={'Keep reading'} colour={colours.blue} onClick={() => {}} />;
