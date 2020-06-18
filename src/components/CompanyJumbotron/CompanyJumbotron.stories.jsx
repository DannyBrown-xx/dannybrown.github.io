import React from 'react';
import CompanyJumbotron from './CompanyJumbotron';
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: 'CompanyJumbotron',
  decorators: [withKnobs]
};

export const companyJumbotron = () => <CompanyJumbotron />;
